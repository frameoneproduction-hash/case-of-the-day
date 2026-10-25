// Platform layer: real services inside the Android app (Capacitor), harmless stand-ins in a browser.
(function () {
  const CONFIG = {
    // Real AdMob rewarded unit "rewarded_main". Debug builds switch to Google's test unit in js/qa-debug.js (debug only).
    admobRewardedAndroid: "",
    admobTesting: false,
    products: { starter: "starter_pack", kit: "detective_kit", hints10: "hints_10", keys5: "keys_5", coins1000: "coins_1000", club: "detective_club" },
    subscriptions: ["club"],
    // The club is ONE Play subscription with two base plans, so a player can never pay for both. Shop keys → [product key, base plan].
    plans: { club: ["club", "monthly"], clubYear: ["club", "yearly"] },
    // Last line of the shared result: the web demo now, the Google Play page (with UTM) after release. Empty = no link line.
    shareUrl: "https://frameoneproduction-hash.github.io/case-of-the-day/", // the web demo until the Play release
    privacyUrl: "privacy-policy.html",
    // Google Sheet receiver (Apps Script web app, delo-dnya-app/tools/apps-script/) for feedback and game statistics.
    // Empty = nothing is sent and the feedback form is hidden. sheetKey must match SHEET_KEY in the script's properties.
    sheetUrl: "",
    sheetKey: "",
    statsTest: false, // mark every event test:1 (developer builds), reports drop them
    statsDebug: false, // log events to the console
    unlockAll: true, // closed test: every case in the archive is open
    launchDate: "2026-10-23", // debug/web value. The release AAB gets "build day + 1" from scripts/build-aab.ps1 (closed-test start, design/offers-and-products.md part 8)
    notifyHour: 9,
    version: "0.5.0",
  };

  const Cap = window.Capacitor;
  const isNative = !!(Cap && Cap.isNativePlatform && Cap.isNativePlatform());
  const plugin = (name) => { if (!isNative) return null; try { return (Cap.Plugins && Cap.Plugins[name]) || (Cap.registerPlugin && Cap.registerPlugin(name)); } catch (e) { return null; } };
  const AdMob = plugin("AdMob");
  const Haptics = plugin("Haptics");
  const Notif = plugin("LocalNotifications");
  const App = plugin("App");
  const Share = plugin("Share");

  let adsReady = false;
  let consentCanRequest = true;

  async function initAds() {
    if (!AdMob) return;
    try {
      await AdMob.initialize({ initializeForTesting: CONFIG.admobTesting });
      const info = await AdMob.requestConsentInfo();
      if (info && info.isConsentFormAvailable && info.status === "REQUIRED") await AdMob.showConsentForm();
      const after = await AdMob.requestConsentInfo().catch(() => info);
      consentCanRequest = after ? after.canRequestAds !== false : true;
      adsReady = true;
    } catch (e) { console.warn("ads init", e); adsReady = true; }
  }

  // Shows a rewarded video. Resolves true only if the player earned the reward.
  // When it is false, lastAdFail() says why: no_consent | no_fill (nothing to show) | error | closed_early.
  let adFail = "";
  async function rewardedAd(webOverlay) {
    adFail = "";
    if (!AdMob) { const ok = webOverlay ? await webOverlay() : false; if (!ok) adFail = "error"; return ok; }
    try {
      if (!adsReady) await initAds();
      if (!consentCanRequest) { adFail = "no_consent"; return false; }
      try { await AdMob.prepareRewardVideoAd({ adId: CONFIG.admobRewardedAndroid, isTesting: CONFIG.admobTesting }); }
      catch (e) { adFail = "no_fill"; console.warn("rewarded load", e); return false; }
      const reward = await AdMob.showRewardVideoAd();
      if (!reward) adFail = "closed_early";
      return !!reward;
    } catch (e) { adFail = "error"; console.warn("rewarded", e); return false; }
  }

  async function privacyOptions() {
    if (!AdMob) return false;
    try { await AdMob.showPrivacyOptionsForm(); return true; } catch (e) { try { await AdMob.showConsentForm(); return true; } catch (e2) { return false; } }
  }

  /* ---------- purchases (cordova-plugin-purchase) ---------- */
  // The game registers onGrant(productKey, transactionId) → true once the reward is saved, and onOwned({ starter, club }) for what the store says the player owns.
  let store = null, onGrant = null, onOwned = null;
  const pending = {};
  const keyOf = (id) => Object.keys(CONFIG.products).find((k) => CONFIG.products[k] === id);
  // Rewards are handed out here, for every paid purchase the store reports — also ones that finish after a restart or a long "pending" payment.
  function grantReceipt(receipt) {
    const txs = (receipt && receipt.sourceReceipt && receipt.sourceReceipt.transactions) || [];
    let saved = txs.length > 0;
    txs.forEach((t) => (t.products || []).forEach((p) => {
      const key = keyOf(p.id); if (!key) return;
      const ok = !!(onGrant && onGrant(key, t.transactionId || ""));
      if (!ok) saved = false;
      if (ok && pending[p.id]) { pending[p.id](true); delete pending[p.id]; }
    }));
    // Close (consume / acknowledge) only after the game saved the reward; otherwise Google Play delivers the purchase again next time.
    if (saved) receipt.finish();
  }
  function syncOwned() {
    if (!store || !onOwned) return;
    try {
      // "sure": Google Play answered (product details loaded). Offline or with a blocked store the purchase list comes back empty, which must not end the club.
      const m = store.get(CONFIG.products.club);
      onOwned({ starter: !!store.owned(CONFIG.products.starter), club: !!store.owned(CONFIG.products.club), sure: !!(m && m.pricing) });
    } catch (e) {}
  }
  function initStore() {
    const CP = window.CdvPurchase;
    if (!isNative || !CP || store) return;
    store = CP.store;
    store.register(Object.entries(CONFIG.products).map(([key, id]) => ({
      id, platform: CP.Platform.GOOGLE_PLAY,
      type: CONFIG.subscriptions.includes(key) ? CP.ProductType.PAID_SUBSCRIPTION : key === "starter" ? CP.ProductType.NON_CONSUMABLE : CP.ProductType.CONSUMABLE,
    })));
    store.when().approved((t) => t.verify()).verified(grantReceipt).receiptUpdated(syncOwned);
    store.initialize([CP.Platform.GOOGLE_PLAY]).then(syncOwned).catch(() => {});
  }
  async function restorePurchases() {
    if (!store) return false;
    try { if (await store.restorePurchases()) return false; } catch (e) { return false; } // the plugin returns an error object instead of throwing
    syncOwned();
    return true;
  }
  // Shop key → the store offer: a subscription base plan is "<productId>@<basePlanId>" in cordova-plugin-purchase 13.
  function offerFor(shopKey) {
    const [key, plan] = CONFIG.plans[shopKey] || [shopKey];
    const id = CONFIG.products[key], p = store && store.get(id);
    return { id, offer: p ? (plan ? p.getOffer(id + "@" + plan) : p.getOffer()) : null };
  }
  function price(shopKey) {
    const { offer } = offerFor(shopKey);
    const ph = offer && offer.pricingPhases && offer.pricingPhases[0];
    return ph ? ph.price : null;
  }
  function buy(shopKey) {
    if (!store) return Promise.resolve(false);
    const { id, offer } = offerFor(shopKey);
    if (!offer || pending[id]) return Promise.resolve(false);
    // Resolves true when the reward was granted. The timeout only frees the shop screen: a late payment is still granted through grantReceipt.
    return new Promise((resolve) => {
      pending[id] = resolve;
      offer.order().then((err) => { if (err && pending[id]) { delete pending[id]; resolve(false); } });
      setTimeout(() => { if (pending[id] === resolve) { delete pending[id]; resolve(false); } }, 120000);
    });
  }

  /* ---------- other services ---------- */
  function haptic(kind) {
    try {
      if (Haptics) {
        if (kind === "success") Haptics.notification({ type: "SUCCESS" });
        else if (kind === "error") Haptics.notification({ type: "ERROR" });
        else Haptics.impact({ style: kind === "heavy" ? "HEAVY" : "LIGHT" });
      } else if (navigator.vibrate) {
        navigator.vibrate(kind === "heavy" ? [40, 30, 60] : kind === "error" ? [30, 40, 30] : kind === "success" ? [20, 30, 20] : 12);
      }
    } catch (e) {}
  }

  // Schedules the 9:00 reminder only if Android already allows notifications. It never asks: asking is requestNotif(), after the player said yes in the game.
  async function scheduleDaily(on, title, body) {
    if (!Notif) return;
    try {
      await Notif.cancel({ notifications: [{ id: 1001 }] }).catch(() => {});
      if (!on) return;
      const perm = await Notif.checkPermissions();
      if (perm.display !== "granted") return;
      await Notif.schedule({ notifications: [{ id: 1001, title, body, schedule: { on: { hour: CONFIG.notifyHour, minute: 0 } } }] });
    } catch (e) { console.warn("notif", e); }
  }

  /* ---------- anonymous game statistics (studio/analytics/events-spec.md) ---------- */
  // No analytics SDK: events are queued on the device and POSTed in batches to CONFIG.sheetUrl.
  // While sheetUrl is empty nothing leaves the device. Debug: add ?stats=debug to the address (or set CONFIG.statsDebug) to see events in the console.
  const EV_KEY = "delo-dnya-events", PID_KEY = "delo-dnya-pid", FIRST_KEY = "delo-dnya-first", SEQ_KEY = "delo-dnya-seq", EV_MAX = 200;
  const lsGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const localDay = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const statsDebug = () => CONFIG.statsDebug || /[?&]stats=debug\b/.test(location.search);
  let statsOn = true, flushing = false, flushTimer = null;
  function newPid() {
    try { if (crypto.randomUUID) return crypto.randomUUID(); } catch (e) {}
    return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  }
  function pid() { let p = lsGet(PID_KEY); if (!p) { p = newPid(); lsSet(PID_KEY, p); } return p; }
  // Day number since the first launch on this device (0 = install day), local calendar days.
  function dayNo() {
    const today = localDay(new Date());
    let first = lsGet(FIRST_KEY); if (!first) { first = today; lsSet(FIRST_KEY, first); }
    return Math.max(0, Math.round((new Date(today + "T12:00:00") - new Date(first + "T12:00:00")) / 86400000));
  }
  const readQueue = () => { try { return JSON.parse(lsGet(EV_KEY) || "[]"); } catch (e) { return []; } };
  const writeQueue = (q) => lsSet(EV_KEY, JSON.stringify(q.slice(-EV_MAX)));
  // System share sheet in the app and in browsers that have one, otherwise the clipboard. → { ok, method: "native" | "clipboard" }
  let sharing = false;
  async function share(text) {
    if (sharing) return { ok: false, method: "busy" }; // second tap while the menu is open
    sharing = true;
    try { return await shareNow(text); } finally { sharing = false; }
  }
  async function shareNow(text) {
    if (Share || navigator.share) {
      try { if (Share) await Share.share({ text }); else await navigator.share({ text }); return { ok: true, method: "native" }; }
      catch (e) { if (e && (e.name === "AbortError" || /cancel/i.test(e.message || ""))) return { ok: false, method: "native" }; }
    }
    try { await navigator.clipboard.writeText(text); return { ok: true, method: "clipboard" }; } catch (e) { return { ok: false, method: "clipboard" }; }
  }

  // The system "Allow notifications?" dialog. Resolves true when allowed (also when it was allowed before).
  async function requestNotif() {
    if (!Notif) return false;
    try { const p = await Notif.requestPermissions(); return p.display === "granted"; } catch (e) { return false; }
  }
  // Android app settings, for a player who wants reminders after the system said no (the dialog is not shown again then).
  async function openAppSettings() {
    const NS = plugin("NativeSettings"); if (!NS) return false;
    try { await NS.openAndroid({ option: "application_details" }); return true; } catch (e) { return false; }
  }

  function track(name, params) {
    try {
      if (!statsOn) return;
      const seq = (+lsGet(SEQ_KEY) || 0) + 1; lsSet(SEQ_KEY, String(seq));
      // Common fields go last so an event parameter can never overwrite them.
      const ev = Object.assign({}, params || {}, { type: "event", e: name, ts: Math.floor(Date.now() / 1000), pid: pid(), n: seq, d: dayNo(), app: CONFIG.version,
        lang: document.documentElement.lang || "", plat: isNative ? "android" : "web" });
      if (CONFIG.statsTest || statsDebug()) ev.test = 1;
      if (statsDebug()) console.log("[stats]", name, ev);
      if (!CONFIG.sheetUrl) return; // no receiver yet: nothing is stored or sent
      const q = readQueue(); q.push(ev); writeQueue(q);
      clearTimeout(flushTimer); flushTimer = setTimeout(flushStats, 5000);
    } catch (e) {}
  }
  // Sends the queue; events leave the queue only after the receiver answered OK (pid + n let the table drop duplicates).
  async function flushStats() {
    if (flushing || !statsOn || !CONFIG.sheetUrl) return;
    const batch = readQueue().slice(0, 50); if (!batch.length) return;
    flushing = true;
    try {
      // text/plain keeps it a "simple" request (no CORS preflight), which Google Apps Script needs.
      const ac = typeof AbortController === "function" ? new AbortController() : null;
      const stop = setTimeout(() => ac && ac.abort(), 15000);
      const r = await fetch(CONFIG.sheetUrl, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ type: "batch", k: CONFIG.sheetKey, events: batch }), keepalive: true, signal: ac ? ac.signal : undefined });
      const answer = r.ok ? (await r.text()).trim() : ""; clearTimeout(stop);
      if (answer === "ok") { // the receiver answers "ok" only after it stored the rows (HTTP 200 alone also comes with "error")
        const sent = new Set(batch.map((e) => e.n));
        writeQueue(readQueue().filter((e) => !sent.has(e.n)));
        if (readQueue().length) setTimeout(flushStats, 1000);
      }
    } catch (e) {} finally { flushing = false; }
  }
  // Player switched statistics off: stop collecting and forget what is still waiting on the device.
  function setStats(on) { statsOn = on !== false; if (!statsOn) { clearTimeout(flushTimer); lsSet(EV_KEY, "[]"); } }
  // "Reset progress" makes a new anonymous player.
  function resetStatsId() { lsSet(PID_KEY, newPid()); lsSet(FIRST_KEY, localDay(new Date())); lsSet(EV_KEY, "[]"); }
  window.addEventListener("online", () => flushStats());

  async function sendFeedback(data) {
    // 1) inside a Claude artifact viewer: its private database
    if (window.claude && window.claude.use) {
      const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
      if (db && user) {
        const uid = await user.id();
        if (uid) { await db.doc("feedback/" + uid + "/cases/" + data.caseId).set(data); return true; }
      }
    }
    // 2) app build: our own endpoint
    if (CONFIG.sheetUrl) {
      const r = await fetch(CONFIG.sheetUrl, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(Object.assign({}, data, { type: "feedback", k: CONFIG.sheetKey, pid: pid() })) });
      if (!r.ok || (await r.text()).trim() !== "ok") throw new Error("feedback-not-stored");
      return true;
    }
    throw new Error("no-feedback-channel");
  }

  // On Android both the page and the app report the same pause: pass each change on once.
  function onPause(fn) {
    let last = false;
    const report = (hidden) => { if (hidden !== last) { last = hidden; fn(hidden); } };
    document.addEventListener("visibilitychange", () => report(document.hidden));
    if (App) App.addListener("appStateChange", (st) => report(!st.isActive));
  }
  function onBack(fn) { if (App) App.addListener("backButton", fn); }

  window.DELO_PLATFORM = {
    CONFIG, isNative,
    init() {
      setTimeout(flushStats, 3000); // events left from the last session
      if (!isNative) return;
      initAds();
      if (window.CdvPurchase) initStore();
      else document.addEventListener("deviceready", initStore, { once: true });
    },
    canBuy: (shopKey) => !!(store && offerFor(shopKey).offer), // false: the product or base plan is missing in Play Console
    requestNotif, openAppSettings, notifSupported: () => !!Notif,
    notifGranted: async () => { if (!Notif) return false; try { return (await Notif.checkPermissions()).display === "granted"; } catch (e) { return false; } },
    rewardedAd, lastAdFail: () => adFail, privacyOptions, buy, price, share, restorePurchases, haptic, scheduleDaily, sendFeedback, onPause, onBack,
    onPurchase(grant, owned) { onGrant = grant; onOwned = owned; syncOwned(); },
    adsAllowed: () => consentCanRequest,
    track, flushStats, setStats, resetStatsId, statsAvailable: () => !!CONFIG.sheetUrl || statsDebug(),
    feedbackAvailable: () => !!CONFIG.sheetUrl || !!(window.claude && window.claude.use),
    hasPrivacyOptions: () => !!AdMob,
  };
})();
