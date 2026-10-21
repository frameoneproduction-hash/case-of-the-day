(() => {
  const UI_ALL = window.DELO_UI, LANGS = window.DELO_LANGS, SCENES = window.DELO_SCENES, MINI = window.DELO_MINI;
  for (const l in window.DELO_UI_EXTRA || {}) Object.assign(UI_ALL[l], window.DELO_UI_EXTRA[l]);
  const CASES = (window.DELO_CASES || []).slice().sort((a, b) => a.n - b.n);
  const PORTRAIT = window.DELO_PORTRAIT, AUDIO = window.DELO_AUDIO, PF = window.DELO_PLATFORM, CFG = PF.CONFIG;

  /* =========================== helpers =========================== */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const esc = (x) => String(x == null ? "" : x).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const VOICE_COLORS = { logic: "var(--logic)", intuition: "var(--intuition)", gossip: "var(--gossip)" };
  const dayKey = (d) => { const x = d || new Date(); return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0"); };
  // Calendar day n days ago. Counted on the calendar, not as n × 24 h: around a daylight-saving change 24 h is not one day.
  const dayAgo = (n) => { const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - n); return dayKey(d); };
  const daysBetween = (a, b) => Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000);
  const fmtTime = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
  const stripMarks = (s) => String(s).replace(/\[\[|\]\]/g, "");

  /* =========================== language =========================== */
  const LANG_KEY = "delo-dnya-lang";
  function detectLang() {
    try { const s = localStorage.getItem(LANG_KEY); if (s && UI_ALL[s]) return s; } catch (e) {}
    const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (const p of prefs) { const c = String(p).toLowerCase().slice(0, 2); if (UI_ALL[c]) return c; }
    return "en";
  }
  let lang = detectLang();
  const U = () => UI_ALL[lang];
  const t = (k, vars) => { let s = U()[k] ?? UI_ALL.en[k] ?? k; if (vars) for (const v in vars) s = s.split("{" + v + "}").join(vars[v]); return s; };
  const CT = (c) => (c.text[lang] || c.text.en);
  const voiceName = (v) => U().voices[v];

  /* =========================== economy & meta =========================== */
  const ROOMS = [
    { id: "lobby", price: 100, tokens: 0 }, { id: "lab", price: 300, tokens: 1 }, { id: "files", price: 450, tokens: 2 },
    { id: "wardrobe", price: 600, tokens: 3 }, { id: "office", price: 900, tokens: 5 },
  ];
  // Where Father's hidden token can sit in each location (one spot per case, picked by case number).
  const TOKEN_SPOTS = {
    study: [[300, 386], [24, 250], [214, 296], [338, 215], [200, 170], [126, 318]],
    train: [[20, 180], [340, 236], [252, 372], [130, 318], [70, 190], [302, 334]],
    theatre: [[262, 140], [22, 292], [200, 380], [340, 330], [110, 252], [30, 130]],
  };
  const OUTFITS = [
    { id: "own", price: 0, look: { outfitColor: "#2d6b52", extras: ["hat", "earrings"] } },
    { id: "coat", price: 250, look: { outfitColor: "#6b4a2e", extras: ["hat", "earrings"] } },
    { id: "robe", price: 300, look: { outfit: "blouse", outfitColor: "#e9e4d4", extras: ["glasses", "earrings"] } },
    { id: "dress", price: 400, look: { outfit: "dress", outfitColor: "#7d2629", extras: ["pearls", "headband", "feather", "earrings"] } },
  ];
  const RANK_AT = [0, 8, 20, 40, 70];
  const CHEM_PROPS = ["teacup", "glass", "bottle", "vial", "perfume", "inkwell", "powder"];
  const CLOCK_PROPS = ["clock", "watch"];

  /* =========================== QA flags =========================== */
  // Test switches for qa-tester, only on a local server (never on the public demo or in the app):
  // ?debug=day2,timeup,consent,share — see delo-dnya-app/build-notes-0.5.0.md, "Флаги отладки".
  const DBG = !PF.isNative && /^(localhost|127\.0\.0\.1)$/.test(location.hostname) ? (new URLSearchParams(location.search).get("debug") || "").split(",").filter(Boolean) : [];
  const dbg = (f) => DBG.includes(f);
  let dbgTimeupDone = false;

  /* =========================== state =========================== */
  const KEY = "delo-dnya-v2";
  const fresh = () => ({ v: 2, coins: 0, hints: 3, keys: 3, streak: 0, lastDailyDone: "", lastLogin: "", rooms: [], outfits: ["own"], outfit: "own",
    club: false, starter: false, tokens: 0, starterUntil: 0,
    grantedTx: [], starterGranted: false, clubCheckedAt: 0, firstDay: "", starterPopupShown: false, statsAsked: false, notifAsked: false,
    freezeAt: "", gift: null, settings: { sound: true, vib: true, notif: false, stats: false }, flags: {}, cases: {}, current: null, screen: "home" });
  let S = fresh();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); return true; } catch (e) { return false; } };
  const load = () => { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; } };
  const freshCase = () => ({ phase: "intro", found: [], asked: [], obj: [], objWrong: 0, mistakes: 0, timeUp: false, timeLeft: null,
    startedAt: 0, endedAt: 0, searchSecs: 0, result: null, stars: 0, earned: 0, hintsUsed: 0, games: null, gameIdx: 0, gameBonus: 0, rating: 0, fbText: "", token: false, doubled: false, freePulse: false, extended: false, gameSolved: [] });
  const hasRoom = (id) => S.rooms.includes(id);
  const totalStars = () => Object.values(S.cases).reduce((a, p) => a + (p.result === "win" ? p.stars : 0), 0);
  const rankIdx = () => { const s = totalStars(); let r = 0; RANK_AT.forEach((v, i) => { if (s >= v) r = i; }); return r; };
  const adaLook = () => Object.assign({}, window.DELO_ADA, (OUTFITS.find((o) => o.id === S.outfit) || OUTFITS[0]).look);

  let C = null, P = null;
  const caseById = (id) => CASES.find((c) => c.id === id);
  // Suspects in a shuffled order seeded by the case number: the same for every player, after a restart and on every screen,
  // so the culprit is not always last as in the case files.
  const susOrder = {};
  function suspects(c) {
    if (susOrder[c.id]) return susOrder[c.id];
    let seed = (c.n * 2654435761) >>> 0;
    const rnd = () => { seed = (seed + 0x6D2B79F5) >>> 0; let x = seed; x = Math.imul(x ^ (x >>> 15), x | 1); x ^= x + Math.imul(x ^ (x >>> 7), x | 61); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
    const a = c.suspects.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return (susOrder[c.id] = a);
  }
  function openCase(id) {
    C = caseById(id); if (!C) return;
    S.current = id;
    S.cases[id] = Object.assign(freshCase(), S.cases[id] || {}); // older saves get the fields added later
    P = S.cases[id];
    save();
  }
  const todayIdx = () => Math.max(0, daysBetween(CFG.launchDate, dayKey()));
  // A newcomer always starts with case 1 (the tutorial case); after that the calendar decides.
  const dailyCase = () => (S.cases["001"] && S.cases["001"].result) ? CASES[todayIdx() % CASES.length] : CASES[0];
  const isUnlocked = (c) => CFG.unlockAll || CASES.indexOf(c) <= todayIdx();

  /* =========================== feedback =========================== */
  const sfx = (n) => { if (S.settings.sound) AUDIO.play(n === "pour" ? "swap" : n); };
  const buzz = (k) => { if (S.settings.vib) PF.haptic(k); };
  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast"; el.textContent = msg; el.setAttribute("role", "status");
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }
  const vq = []; let vShowing = false;
  function voice(v, text, obj) { vq.push({ v, text, obj }); if (!vShowing) nextVoice(); }
  function clearVoices() { vq.length = 0; vShowing = false; $("#voice-layer").innerHTML = ""; }
  function nextVoice() {
    const layer = $("#voice-layer"); layer.innerHTML = "";
    const it = vq.shift(); if (!it) { vShowing = false; return; }
    vShowing = true;
    const b = document.createElement("button");
    b.className = "voice"; b.style.setProperty("--v", VOICE_COLORS[it.v]);
    b.innerHTML = `<div class="who">${esc(voiceName(it.v))}</div>${it.obj ? `<div class="obj">${esc(it.obj)}</div>` : ""}<div class="what">${esc(it.text)}</div><div class="more">${esc(t("voiceClose"))}</div>`;
    b.addEventListener("click", () => { sfx("tap"); nextVoice(); });
    layer.appendChild(b);
  }
  // A delayed tip is dropped (and shown later) if the player has already left the screen it belongs to.
  function tutorial(flag, v, key, screen) { if (S.flags[flag] || (screen && S.screen !== screen)) return; S.flags[flag] = true; save(); voice(v, t(key)); }
  function refreshCounters() {
    $$("#search-hints,#hub-hints,#home-hints,#mini-hints").forEach((el) => { el.textContent = S.hints; });
    $$("#home-coins,#hub-coins,#agency-coins").forEach((el) => { el.textContent = S.coins; });
    $$("#home-keys").forEach((el) => { el.textContent = S.club ? "∞" : S.keys; });
  }

  /* =========================== static texts =========================== */
  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t("docTitle");
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    $$(".lang-code").forEach((el) => { el.textContent = lang.toUpperCase(); });
  }
  function setLang(code) {
    if (!UI_ALL[code]) return;
    lang = code;
    try { localStorage.setItem(LANG_KEY, code); } catch (e) {}
    applyStatic();
    closeSheet();
    if (S.settings.notif) PF.scheduleDaily(true, t("notifTitle"), t("notifBody"));
    show(S.screen, true);
  }

  /* =========================== screens =========================== */
  const SCREENS = ["home", "intro", "search", "mini", "findings", "hub", "accuse", "result", "agency"];
  let timer = null;
  const CASE_SCREENS = ["intro", "search", "mini", "findings", "hub", "accuse"];
  function show(screen, keepScroll) {
    if (P && !P.result && CASE_SCREENS.includes(S.screen) && (screen === "home" || screen === "agency")) PF.track("case_abandon", { id: C.id, phase: S.screen });
    if (screen !== "search") stopTimer();
    S.screen = screen; save();
    SCREENS.forEach((s) => { $("#s-" + s).hidden = s !== screen; });
    if (!keepScroll) window.scrollTo(0, 0);
    if (!["search", "hub"].includes(screen)) clearVoices();
    AUDIO.ambience(S.settings.sound && ["intro", "search", "hub", "findings", "mini"].includes(screen));
    ({ home: renderHome, intro: renderIntro, search: renderSearch, mini: renderMini, findings: renderFindings,
       hub: renderHub, accuse: renderAccuse, result: renderResult, agency: renderAgency })[screen]();
    refreshCounters();
  }

  /* ---------------- HOME ---------------- */
  function caseStatus(c) {
    const p = S.cases[c.id];
    if (p && p.result === "win") return { cls: "ok", txt: t("solvedBadge") + " " + "★".repeat(p.stars) };
    if (p && p.result === "lose") return { cls: "fail", txt: t("escaped") };
    if (p) return { cls: "", txt: t("continue") };
    return null;
  }
  let offerSeen = false;
  function renderHome() {
    const c = dailyCase(); const tx = CT(c);
    $("#home-case").innerHTML = `
      <span class="case-stamp">${esc(t("stamp"))}</span>
      <div class="eyebrow">${esc(t("dailyCase"))} · ${esc(t("caseNo", { n: c.n }))}</div>
      <h2>${esc(tx.title)}</h2><p>${esc(tx.desc)}</p>
      <div class="case-meta">${tx.meta.map((m) => `<span>${esc(m)}</span>`).join("")}</div>`;
    const p = S.cases[c.id];
    $("#btn-daily").textContent = p && p.result ? t("seeResult") : p ? t("continue") : t("start");
    $("#home-streak").textContent = t("streak", { n: S.streak });
    const left = offerLeft(), ob = $("#home-offer");
    ob.hidden = S.starter || left <= 0;
    if (!ob.hidden) ob.innerHTML = `<b>${esc(t("starterOfferT"))}</b><span>${esc(PF.price("starter") || SHOP[0].price)}</span>`;
    if (!ob.hidden && !offerSeen) { offerSeen = true; PF.track("offer_shown", { kind: "starter_banner" }); }
    renderGift();
    $("#home-rank").innerHTML = `${PORTRAIT(adaLook(), "#d1a94e", "#14271f")}<span><small>${esc(t("rank"))}</small><b>${esc(U().ranks[rankIdx()])}</b></span><span class="stars-n">★ ${totalStars()}</span>`;
  }
  // "Daily gift" row: lasts until the end of the day; one ad doubles it once. No pop-ups.
  function renderGift() {
    const g = S.gift, el = $("#home-gift");
    el.hidden = !g || g.day !== dayKey();
    if (el.hidden) return;
    const canAd = !g.doubled && (S.club || PF.adsAllowed());
    if (canAd && !g.offered) { g.offered = true; save(); PF.track("ad_offered", { placement: "gift" }); }
    const right = g.doubled ? `<span class="done">${esc(S.club ? t("clubGift") : t("giftDoubled"))}</span>`
      : canAd ? `<button class="btn small" data-act="gift-double">${esc(t("giftDouble"))}</button>` : "";
    // "+1 🔍" never splits across lines: no-break spaces before the icons.
    el.innerHTML = `<span>🎁 ${esc(t("giftLine", { h: g.h, k: g.k })).replace(/ (?=🔍|🗝)/gu, " ")}</span>${right}`;
  }
  function startCase(id) {
    const c = caseById(id); if (!c) return;
    const isDaily = dailyCase().id === id;
    if (!S.cases[id] && !isDaily && !S.club) {
      if (S.keys <= 0) return offerKeys(id);
      return sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(t("keyT"))}</h2><div class="role">${esc(t("keyD"))}</div></div><button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
        <div class="stack"><button class="btn wide" data-act="use-key" data-id="${id}">🗝 ${esc(t("useKey"))}</button></div>`);
    }
    enterCase(id);
  }
  function enterCase(id) {
    openCase(id);
    PF.track("case_open", { id });
    if (P.result) return show("result");
    show(P.phase === "puzzle" ? "mini" : P.phase);
  }

  /* ---------------- INTRO ---------------- */
  function renderIntro() {
    const tx = CT(C);
    $("#intro-eyebrow").textContent = tx.introEyebrow;
    $("#intro-title").textContent = tx.introTitle;
    $("#intro-text").innerHTML = tx.intro.map((p, i) => `<p${i === 0 ? ' class="lead"' : ""}>${esc(p)}</p>`).join("");
    $("#intro-cast").innerHTML = suspects(C).map((s) => PORTRAIT(s.look, s.color)).join("");
    $("#intro-voice").innerHTML = `<div class="who">${esc(voiceName("intuition"))}</div><div class="what">${esc(tx.introVoice)}</div>`;
    renderDisguise($("#intro-disguise"));
  }
  function renderDisguise(box) {
    if (!hasRoom("wardrobe")) { box.innerHTML = ""; return; }
    const names = U().outfits;
    box.innerHTML = `<div class="eyebrow">${esc(t("disguise"))}</div><div class="outfits">${S.outfits.map((id) => {
      const o = OUTFITS.find((x) => x.id === id);
      return `<button class="outfit ${S.outfit === id ? "on" : ""}" data-wear="${id}">${PORTRAIT(Object.assign({}, window.DELO_ADA, o.look), S.outfit === id ? "#d1a94e" : "#2f4a41", "#14271f")}<b>${esc(names[id].n)}</b><small>${esc(names[id].d)}</small></button>`;
    }).join("")}</div>`;
  }

  /* ---------------- SCENE (search + hub) ---------------- */
  function sceneSVG(target) {
    target.innerHTML = `<svg class="scene" viewBox="0 0 360 400" role="img">${SCENES[C.scene]}${tokenSVG()}<g class="fx"></g></svg>`;
    return target.firstElementChild;
  }
  function tokenSVG() {
    if (P.token) return "";
    const spots = TOKEN_SPOTS[C.scene] || [[180, 380]];
    const [x, y] = spots[(C.n * 7) % spots.length];
    return `<g class="hot token" data-prop="__token"><circle cx="${x}" cy="${y}" r="6" fill="#8a6a24" stroke="#d1a94e" stroke-width="1.2" opacity=".8"/>
      <text x="${x}" y="${y + 2}" text-anchor="middle" font-size="5.5" font-family="Georgia, serif" fill="#efe6c8" opacity=".9">HL</text>
      <circle class="ring" cx="${x}" cy="${y}" r="14"/><circle class="hit" cx="${x}" cy="${y}" r="13"/></g>`;
  }
  function foundToken(svg) {
    if (P.token) return;
    P.token = true; S.tokens = (S.tokens || 0) + 1; S.coins += 30; save();
    const g = svg.querySelector('[data-prop="__token"]'); if (g) g.remove();
    sfx("coin"); buzz("success");
    PF.track("token_found", { id: C.id });
    refreshCounters(); renderTokenLine();
    sheet(`<div class="token-card"><svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="24" fill="#8a6a24" stroke="#d1a94e" stroke-width="3"/><text x="30" y="37" text-anchor="middle" font-size="18" font-family="Georgia, serif" fill="#efe6c8">HL</text></svg>
      <h2>${esc(t("tokenT"))}</h2><p>${esc(t("tokenD"))}</p><div class="eyebrow">${esc(t("tokens"))}: ${S.tokens} · +30 🪙</div>
      <button class="btn wide" data-act="close">${esc(t("next"))}</button></div>`);
  }
  function renderTokenLine() {
    const el = $("#token-line"); if (!el || !C) return;
    el.innerHTML = P.token ? `<span class="tk on">HL</span> ${esc(t("tokenFound"))}`
      : `<span class="tk">HL</span> ${esc(t("tokenMissing"))} <button class="small-btn" data-act="token-hint">${esc(t("tokenHint"))}</button>`;
  }
  const clueByProp = (prop) => Object.keys(C.clues).find((id) => C.clues[id].prop === prop);
  function markFound(svg) {
    $$(".hot", svg).forEach((g) => {
      const id = clueByProp(g.dataset.prop);
      g.classList.toggle("found", !!id && P.found.includes(id));
    });
  }
  function tapFx(svg, evt) {
    const pt = svg.createSVGPoint(); pt.x = evt.clientX; pt.y = evt.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", p.x); c.setAttribute("cy", p.y); c.setAttribute("r", 4);
    c.setAttribute("fill", "none"); c.setAttribute("stroke", "#d1a94e"); c.setAttribute("stroke-width", "2");
    c.classList.add("tapfx"); $(".fx", svg).appendChild(c);
    setTimeout(() => c.remove(), 600);
  }
  function pulseProp(svg, prop) {
    const g = svg.querySelector(`.hot[data-prop="${prop}"]`); if (!g) return;
    g.classList.remove("pulse"); void g.getBBox(); g.classList.add("pulse");
    setTimeout(() => g.classList.remove("pulse"), 3200);
  }

  /* ---------------- SEARCH ---------------- */
  // Later cases give less time; the laboratory and the trench coat buy some back.
  const searchTime = () => Math.max(50, (C.searchTime || 75) - Math.min(20, (C.n - 1) * 2)) + (hasRoom("lab") ? 10 : 0) + (S.outfit === "coat" ? 15 : 0);
  function renderSearch() {
    if (!P.startedAt) { P.startedAt = Date.now(); PF.track("case_start", { id: C.id, src: dailyCase().id === C.id ? "daily" : "archive" }); }
    if (P.timeLeft == null) P.timeLeft = searchTime();
    if (dbg("timeup") && !dbgTimeupDone && !P.timeUp) { dbgTimeupDone = true; P.timeLeft = Math.min(P.timeLeft, 3); }
    save();
    $("#search-title").textContent = CT(C).title;
    const svg = sceneSVG($("#search-scene"));
    markFound(svg);
    $$(".hot", svg).forEach((g) => g.addEventListener("click", (e) => searchTap(g.dataset.prop, e, svg)));
    renderSearchCount();
    renderTimer();
    if (!P.timeUp) startTimer();
    setTimeout(() => tutorial("tutSearch2", "logic", "searchHelp", "search"), 400);
  }
  function renderSearchCount() {
    const n = Object.keys(C.clues).length;
    $("#search-count").innerHTML = `<span>${esc(t("found"))}</span><b>${P.found.length} / ${n}</b><span class="dots">${Array.from({ length: n }, (_, i) => `<i class="${i < P.found.length ? "on" : ""}"></i>`).join("")}</span>`;
  }
  function renderTimer() {
    const el = $("#search-timer");
    if (P.timeUp) { el.textContent = "—:—"; el.classList.add("off"); return; }
    el.classList.remove("off");
    el.textContent = fmtTime(P.timeLeft * 1000);
    el.classList.toggle("low", P.timeLeft <= 10);
  }
  function startTimer() {
    stopTimer();
    timer = setInterval(() => {
      if (document.hidden || $("#overlay-root").childElementCount) return;
      P.timeLeft = Math.max(0, P.timeLeft - 1);
      if (P.timeLeft <= 10 && P.timeLeft > 0) sfx("tick");
      // First case: if the newcomer hasn't found anything in 12 seconds, gently show where to look (free).
      if (C.n === 1 && !P.found.length && !P.freePulse && searchTime() - P.timeLeft >= 12) {
        P.freePulse = true;
        pulseProp($("#search-scene svg"), C.clues[Object.keys(C.clues)[0]].prop);
        voice("intuition", t("lookHere"));
      }
      renderTimer();
      if (P.timeLeft % 5 === 0) save();
      if (P.timeLeft === 0) { stopTimer(); timeUp(); }
    }, 1000);
  }
  function stopTimer() { if (timer) clearInterval(timer); timer = null; }
  // One +30 s per case (for an ad, free in the club or when no ad could be shown); after that only "keep looking without a timer".
  function timeUp() {
    sfx("wrong"); buzz("error");
    if (!P.extended) PF.track("ad_offered", { placement: "search_time" });
    sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(t("timeUp"))}</h2><div class="role">${esc(t(P.extended ? "timeUpD2" : "timeUpD"))}</div></div></div>
      <div class="stack">${P.extended ? "" : `<button class="btn wide" data-act="plus30">${esc(S.club ? "+30 s" : t("plus30"))}</button>`}<button class="btn ghost wide" data-act="keep">${esc(t("keepLooking"))}</button></div>`, { noClose: true });
  }
  function searchTap(prop, e, svg) {
    tapFx(svg, e);
    if (prop === "__token") return foundToken(svg);
    const id = clueByProp(prop);
    const g = svg.querySelector(`.hot[data-prop="${prop}"]`);
    if (!id) {
      sfx("miss");
      g.classList.remove("shake"); void g.getBBox(); g.classList.add("shake");
      return;
    }
    if (P.found.includes(id)) return;
    P.found.push(id); save();
    sfx("found"); buzz("light");
    markFound(svg); renderSearchCount();
    toast("🔍 " + CT(C).clues[id].title);
    if (P.found.length === Object.keys(C.clues).length) {
      stopTimer();
      P.searchSecs = searchTime() - (P.timeLeft || 0);
      PF.track("search_done", { id: C.id, secs: P.searchSecs, timeUp: P.timeUp, found: P.found.length, total: Object.keys(C.clues).length });
      toast(t("searchDone"));
      P.games = planGames(); P.gameIdx = 0;
      P.phase = P.games.length ? "mini" : "findings"; save();
      setTimeout(() => { clearVoices(); show(P.phase); }, 900);
    }
  }
  function searchHint() {
    const missing = Object.keys(C.clues).filter((id) => !P.found.includes(id));
    if (!missing.length || !spendHint()) return;
    pulseProp($("#search-scene svg"), C.clues[missing[0]].prop);
    voice("intuition", t("lookHere"));
  }

  /* ---------------- MINI-GAMES ---------------- */
  function planGames() {
    const ids = Object.keys(C.clues), g = [];
    const paper = ids.find((id) => C.clues[id].puzzle);
    if (paper) g.push({ type: "letter", clue: paper });
    const chem = ids.find((id) => CHEM_PROPS.includes(C.clues[id].prop));
    if (chem) g.push({ type: "chem", clue: chem });
    const clock = ids.find((id) => CLOCK_PROPS.includes(C.clues[id].prop));
    if (clock && g.length < 2) g.push({ type: "gears", clue: clock });
    return g.slice(0, 2);
  }
  let game = null, gameUsedHint = false, gameStartedAt = 0, gameKey = "";
  function renderMini() {
    if (!P.games) { P.games = planGames(); P.gameIdx = 0; }
    const g = P.games[P.gameIdx];
    if (!g) { P.phase = "findings"; save(); return show("findings"); }
    const tx = CT(C);
    const titles = { letter: t("puzzleTitle"), chem: t("miniChem"), gears: t("miniGears") };
    const helps = { letter: t("puzzleHelp"), chem: t("miniChemHelp"), gears: t("miniGearsHelp") };
    $("#mini-eyebrow").textContent = tx.clues[g.clue].title + ` · ${P.gameIdx + 1}/${P.games.length}`;
    $("#mini-title").textContent = titles[g.type];
    $("#mini-help").textContent = helps[g.type];
    $("#mini-result").hidden = true;
    $("#mini-next").hidden = true;
    $("#mini-hint").hidden = false;
    gameUsedHint = false;
    const idx = P.gameIdx, box = $("#mini-box"); box.className = "mini-box m-" + g.type;
    const showSolved = () => {
      const cl = C.clues[g.clue];
      const r = $("#mini-result");
      r.hidden = false; r.style.setProperty("--v", VOICE_COLORS[cl.voice]);
      r.innerHTML = `<div class="who">${esc(voiceName(cl.voice))}</div><h3>${esc(tx.clues[g.clue].title)}</h3><p>${esc(tx.clues[g.clue].text)}</p>`;
      $("#mini-hint").hidden = true;
      $("#mini-next").hidden = false;
      setTimeout(() => r.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
    };
    if (P.gameSolved.includes(idx)) { game = null; box.innerHTML = ""; return showSolved(); } // solved before (language change, coming back): no second puzzle, no second bonus
    const key = C.id + ":" + idx;
    if (key !== gameKey) { gameKey = key; gameStartedAt = Date.now(); PF.track("minigame_start", { id: C.id, game: g.type, idx: P.gameIdx }); } // a re-render (language change) is not a new start
    const onSolve = () => {
      if (P.gameSolved.includes(idx)) return;
      sfx("found"); buzz("success");
      PF.track("minigame_end", { id: C.id, game: g.type, idx: P.gameIdx, secs: Math.round((Date.now() - gameStartedAt) / 1000), hint: gameUsedHint ? 1 : 0 });
      if (!gameUsedHint) { P.gameBonus += 10; S.coins += 10; refreshCounters(); toast(t("miniBonus")); }
      P.gameSolved.push(idx); save();
      showSolved();
    };
    const opts = { onSolve, sfx, esc };
    if (g.type === "letter") game = MINI.letter(box, Object.assign(opts, { lines: tx.letter }));
    const chemColors = (C.n >= 5 ? 4 : 3) - (S.outfit === "robe" ? 1 : 0);
    if (g.type === "chem") game = MINI.chem(box, Object.assign(opts, { colors: chemColors }));
    if (g.type === "gears") game = MINI.gears(box, Object.assign(opts, { size: C.n >= 6 ? 4 : 3 }));
  }
  function miniHint() { if (!game || (game.isDone && game.isDone()) || !spendHint()) return; gameUsedHint = true; game.solve(); }
  function miniNext() { sfx("tap"); P.gameIdx++; save(); if (P.gameIdx >= P.games.length) { P.phase = "findings"; save(); show("findings"); } else renderMini(); }

  /* ---------------- FINDINGS ---------------- */
  function renderFindings() {
    const tx = CT(C);
    $("#findings-list").innerHTML = Object.keys(C.clues).map((id) => {
      const cl = C.clues[id];
      return `<div class="finding" style="--v:${VOICE_COLORS[cl.voice]}"><div class="who">${esc(voiceName(cl.voice))}</div><h3>${esc(tx.clues[id].title)}</h3><p>${esc(tx.clues[id].text)}</p></div>`;
    }).join("");
  }

  /* ---------------- HUB ---------------- */
  let tab = "suspects";
  function renderHub() {
    if (P.phase !== "hub") PF.track("hub_open", { id: C.id });
    P.phase = "hub"; save();
    $("#hub-title").textContent = CT(C).title;
    const svg = sceneSVG($("#hub-scene"));
    markFound(svg);
    $$(".hot", svg).forEach((g) => g.addEventListener("click", (e) => hubSceneTap(g.dataset.prop, e, svg)));
    setTab(tab);
    renderSuspects(); renderNotes(); renderAccuseBtn(); renderTokenLine();
    setTimeout(() => tutorial("tutHub", "intuition", "tutHub", "hub"), 400);
  }
  function setTab(tb) {
    tab = tb;
    $$(".tab").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tab === tb)));
    ["scene", "suspects", "notes"].forEach((x) => { $("#tab-" + x).hidden = x !== tb; });
  }
  function hubSceneTap(prop, e, svg) {
    tapFx(svg, e);
    if (prop === "__token") return foundToken(svg);
    const id = clueByProp(prop), tx = CT(C);
    if (id) { sfx("tap"); voice(C.clues[id].voice, tx.clues[id].text, tx.clues[id].title); }
    else if (C.decoys[prop]) { sfx("tap"); voice(C.decoys[prop], tx.decoys[prop]); }
  }
  const isOpenQ = (q) => !q.needs || P.found.includes(q.needs);
  const everyoneTalked = () => C.suspects.every((s) => s.qs.some((q) => P.asked.includes(q.id)));
  function renderSuspects() {
    const tx = CT(C);
    let badge = 0;
    $("#suspects").innerHTML = suspects(C).map((s) => {
      const pending = s.qs.filter((q) => isOpenQ(q) && !P.asked.includes(q.id)).length;
      badge += pending;
      return `<button class="suspect" data-sid="${s.id}">${PORTRAIT(s.look, s.color)}
        <div class="name">${esc(tx.suspects[s.id].name)}</div><div class="role">${esc(tx.suspects[s.id].role)}</div>
        <div class="prog">${esc(pending ? t("newQs", { n: pending }) : t("allAsked"))}</div></button>`;
    }).join("");
    $("#badge-sus").hidden = !badge; $("#badge-sus").textContent = badge;
  }
  function evidence() {
    const tx = CT(C);
    const items = P.found.map((id) => ({ id, kind: t("kindClue"), title: tx.clues[id].title, text: tx.clues[id].note }));
    suspects(C).forEach((s) => s.qs.forEach((q) => { const y = tx.qs[q.id]; if (y.nt && P.asked.includes(q.id)) items.push({ id: q.id, kind: t("kindTest"), title: y.nt, text: y.nx }); }));
    P.obj.forEach((qid) => { const o = tx.objections[qid]; items.push({ id: "obj:" + qid, kind: t("kindObj"), title: o.nt, text: o.nx, hot: true }); });
    return items;
  }
  function renderNotes() {
    const items = evidence();
    $("#notebook").innerHTML = items.length
      ? items.map((n) => `<div class="note ${n.hot ? "hot-note" : ""}"><div class="kind">${esc(n.kind)}</div><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p></div>`).join("")
      : `<div class="empty">${esc(t("notesEmpty"))}</div>`;
  }
  function renderAccuseBtn() {
    const ok = everyoneTalked();
    $("#btn-accuse").disabled = !ok;
    $("#btn-accuse").title = ok ? "" : t("accuseLocked");
    if (ok && !S.flags.tutAccuse) setTimeout(() => tutorial("tutAccuse", "logic", "tutAccuse", "hub"), 600);
  }
  function hubHint() {
    if (!spendHint()) return;
    const tx = CT(C);
    const i = (P.hintsUsed - 1) % tx.deduce.length;
    voice(["logic", "intuition", "gossip"][i], tx.deduce[i]);
  }

  /* ---------------- INTERROGATION ---------------- */
  let sheetSid = null;
  function openSuspect(sid) {
    sheetSid = sid;
    const s = C.suspects.find((x) => x.id === sid); const tx = CT(C).suspects[sid];
    sheet(`<div class="sheet-head">${PORTRAIT(s.look, s.color)}<div class="grow"><h2>${esc(tx.name)}</h2><div class="role">${esc(tx.role)}</div></div>
      <button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
      <div class="intro-line">${esc(tx.intro)}</div><div class="log" id="log"></div><div class="qs" id="qs"></div>`, { cls: "interrogation" });
    s.qs.forEach((q) => { if (P.asked.includes(q.id)) appendQA(q, false); });
    renderQs();
  }
  // Every sentence of every answer can be challenged; only the marked [[lie]] is really false.
  function answerHTML(qid) {
    const a = CT(C).qs[qid].a;
    const solved = P.obj.includes(qid);
    const parts = [];
    a.split(/(\[\[.+?\]\])/).forEach((chunk) => {
      if (!chunk) return;
      const m = chunk.match(/^\[\[(.+)\]\]$/);
      if (m) { parts.push({ text: m[1], lie: true }); return; }
      chunk.split(/(?<=[.!?…»"”])\s+/).forEach((s) => { if (s.trim()) parts.push({ text: s, lie: false }); });
    });
    return parts.map((p) => (solved && p.lie)
      ? `<s class="lie-done">${esc(p.text)}</s>`
      : `<button class="phrase" data-lie="${qid}">${esc(p.text)}</button>`).join(" ");
  }
  function appendQA(q, animate) {
    const log = $("#log"); if (!log) return;
    const y = CT(C).qs[q.id];
    const add = (cls, html, v) => {
      const d = document.createElement("div"); d.className = "bubble " + cls;
      if (v) d.style.setProperty("--v", v);
      d.innerHTML = html; d.style.animation = animate ? "rise .25s ease-out" : "none";
      log.appendChild(d); return d;
    };
    add("q", esc(y.q));
    add("a", answerHTML(q.id));
    if (q.voice && y.v) add("v", `<b>${esc(voiceName(q.voice))}</b>${esc(y.v)}`, VOICE_COLORS[q.voice]);
    if (P.obj.includes(q.id)) add("a reply", esc(CT(C).objections[q.id].reply));
    if (animate) setTimeout(() => tutorial("tutObjection2", "logic", "tutObjection"), 300);
  }
  function renderQs() {
    const s = C.suspects.find((x) => x.id === sheetSid); const tx = CT(C);
    $("#qs").innerHTML = s.qs.filter((q) => !P.asked.includes(q.id)).map((q) => {
      const open = isOpenQ(q);
      return `<button class="q-btn ${open && q.needs ? "new" : ""}" data-qid="${q.id}" ${open ? "" : "disabled"}><span>${esc(open ? tx.qs[q.id].q : t("needClue"))}</span>${open ? "" : `<span class="lock">${esc(t("locked"))}</span>`}</button>`;
    }).join("") || `<div class="intro-line" style="margin:0">${esc(t("noMore"))}</div>`;
  }
  function ask(qid) {
    const s = C.suspects.find((x) => x.id === sheetSid); const q = s.qs.find((x) => x.id === qid);
    if (!q || P.asked.includes(qid)) return;
    P.asked.push(qid); save();
    sfx("page");
    appendQA(q, true); renderQs();
    $("#log").lastElementChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (CT(C).qs[qid].nt) toast(t("noted"));
  }
  let lieQ = null;
  function openPresent(qid) {
    lieQ = qid; sfx("tap");
    const box = document.createElement("div");
    box.className = "present"; box.id = "present";
    box.innerHTML = `<h3>${esc(t("present"))}</h3><div class="ev-list">${evidence().filter((e) => !e.id.startsWith("obj:")).map((e) => `<button class="ev" data-present="${e.id}"><b>${esc(e.title)}</b>${esc(e.text)}</button>`).join("")}</div>`;
    const old = $("#present"); if (old) old.remove();
    $(".sheet").appendChild(box);
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function present(evId) {
    const qid = lieQ; const box = $("#present"); if (box) box.remove();
    if (!qid) return;
    const ok = !!C.objections[qid] && !P.obj.includes(qid) && C.objections[qid].evidence === evId;
    const sus = C.suspects.find((s) => s.qs.some((q) => q.id === qid));
    if (ok) {
      P.obj.push(qid); save();
      PF.track("objection", { id: C.id, ok: 1, sid: sus && sus.id, ev: evId });
      objectionBurst(() => {
        const s = C.suspects.find((x) => x.id === sheetSid);
        const log = $("#log"); if (!log) return;
        log.innerHTML = ""; s.qs.forEach((q) => { if (P.asked.includes(q.id)) appendQA(q, false); });
        log.lastElementChild && log.lastElementChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
        toast(t("noted"));
      });
    } else {
      P.objWrong++; save();
      PF.track("objection", { id: C.id, ok: 0, sid: sus && sus.id, ev: evId });
      sfx("wrong"); buzz("error");
      const female = sus && sus.look.female;
      const d = document.createElement("div"); d.className = "bubble v"; d.style.setProperty("--v", VOICE_COLORS.logic);
      d.innerHTML = `<b>${esc(voiceName("logic"))}</b>${esc(t(female ? "objWrong" : "objWrongM"))}`;
      $("#log").appendChild(d); d.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    lieQ = null;
  }
  function objectionBurst(after) {
    sfx("objection"); buzz("heavy");
    const el = document.createElement("div");
    el.className = "objection";
    el.innerHTML = `<div class="obj-word">${esc(t("objection"))}</div><div class="obj-stamp">${esc(t("lie"))}</div>`;
    document.body.appendChild(el);
    setTimeout(() => sfx("stamp"), 450);
    setTimeout(() => { el.remove(); after && after(); }, 1500);
  }

  /* ---------------- HINTS / KEYS / ADS / SHOP ---------------- */
  function spendHint() {
    if (S.hints <= 0) { offerHints(); return false; }
    S.hints--; if (P) P.hintsUsed++; save();
    PF.track("hint_use", { id: C ? C.id : "", where: S.screen, left: S.hints });
    refreshCounters();
    return true;
  }
  function offerHints() {
    const ads = S.club || PF.adsAllowed();
    PF.track("hint_empty", { id: C ? C.id : "", where: S.screen });
    if (ads) PF.track("ad_offered", { placement: "hint" });
    sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(t("outT"))}</h2><div class="role">${esc(t("outD"))}</div></div>
      <button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
      <div class="stack">${ads ? `<button class="btn wide" data-act="ad-hint">${esc(t("watchAd"))}</button>` : ""}
      <button class="btn ghost wide" data-act="shop">${esc(t("shop"))}</button></div>`);
  }
  function offerKeys(id) {
    const ads = S.club || PF.adsAllowed();
    if (ads) PF.track("ad_offered", { placement: "key" });
    sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(t("keyT"))}</h2><div class="role">${esc(t("keyD"))}</div></div>
      <button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
      <div class="stack">${ads ? `<button class="btn wide" data-act="ad-key" data-id="${id}">${esc(t("adKey"))}</button>` : ""}
      <button class="btn ghost wide" data-act="shop">${esc(t("shop"))}</button></div>`);
  }
  function webAd() {
    return new Promise((resolve) => {
      const secs = 5;
      const el = document.createElement("div");
      el.className = "ad";
      el.innerHTML = `<div class="ad-box"><div class="eyebrow">${esc(t("adLabel"))} · ${secs} s</div><h3>${esc(t("adTitle"))}</h3><p>${esc(t("adText"))}</p><div class="ad-bar"><i></i></div></div>`;
      document.body.appendChild(el);
      const bar = el.querySelector("i");
      requestAnimationFrame(() => { bar.style.transitionDuration = secs + "s"; bar.style.width = "100%"; });
      setTimeout(() => { el.remove(); resolve(true); }, secs * 1000);
    });
  }
  // true = reward earned, false = no ad (no fill, no network, no consent, closed early), null = an ad is already on its way (second tap ignored).
  let adBusy = false;
  async function rewarded(placement) {
    if (S.club) return true; // club members get rewards without ads
    if (adBusy) return null;
    adBusy = true; AUDIO.pause();
    try {
      const ok = await PF.rewardedAd(webAd);
      if (ok) PF.track("ad_rewarded", { placement });
      else PF.track("ad_fail", { placement, reason: PF.lastAdFail() || "error" });
      return ok;
    } finally { AUDIO.resume(); adBusy = false; }
  }
  const SHOP = [
    { id: "starter", product: "starter", grant: () => { if (!S.starterGranted) { S.hints += 10; S.keys += 3; } if (!S.outfits.includes("coat")) S.outfits.push("coat"); S.starter = true; S.starterGranted = true; }, once: true, price: "0,99 €" },
    { id: "kit", product: "kit", grant: () => { S.hints += 20; S.keys += 10; S.coins += 1500; }, price: "4,99 €", best: true },
    { id: "hints10", product: "hints10", grant: () => { S.hints += 10; }, price: "1,99 €" },
    { id: "keys5", product: "keys5", grant: () => { S.keys += 5; }, price: "1,99 €" },
    { id: "coins1000", product: "coins1000", grant: () => { S.coins += 1000; }, price: "1,99 €" },
    { id: "club", product: "club", grant: () => { S.club = true; S.clubCheckedAt = Date.now(); }, price: "2,99 €", sub: true },
    // The yearly club is the same club; it is shown as a second button on the club card, not as its own row.
    { id: "clubYear", product: "clubYear", grant: () => { S.club = true; S.clubCheckedAt = Date.now(); }, price: "19,99 €", sub: true, year: true, inCard: "club" },
  ];
  const offerLeft = () => Math.max(0, (S.starterUntil || 0) - Date.now());
  let shopSrc = "";
  function openShop(isOffer, src) {
    const offerOn = !S.starter && offerLeft() > 0;
    shopSrc = src || (isOffer === true ? "offer" : S.screen);
    PF.track("shop_open", { src: shopSrc, offer: offerOn ? 1 : 0 });
    const names = { starter: [offerOn ? t("starterOfferT") : t("starterT"), offerOn ? t("starterOfferD") : t("starterD")], kit: [t("kitT"), t("kitD")], hints10: [t("hints10"), ""], keys5: [t("keys5"), ""], coins1000: [t("coins1000"), ""], club: [t("clubT"), t("clubD")] };
    sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(isOffer === true ? t("starterOfferT") : t("shop"))}</h2></div><button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
      <div class="shop-list">${SHOP.filter((it) => !(it.once && S.starter) && !it.inCard).map((it) => {
        const owned = it.sub && S.club;
        const btn = (x) => `<button class="btn small" data-buy-product="${x.id}">${esc((PF.price(x.product) || x.price) + (x.sub ? " " + t(x.year ? "perYear" : "perMonth") : ""))}</button>`;
        const buttons = owned ? `<button class="btn small ghost" disabled>${esc(t("clubActive"))}</button>`
          : [it].concat(SHOP.filter((x) => x.inCard === it.id)).map(btn).join("");
        return `<div class="offer ${it.id}"><div class="grow">${it.best ? `<em class="best">${esc(t("bestValue"))}</em>` : ""}<b>${esc(names[it.id][0])}</b>${names[it.id][1] ? `<small>${esc(names[it.id][1])}</small>` : ""}</div>
          <div class="offer-btns">${buttons}</div></div>`;
      }).join("")}</div>${PF.isNative ? `<button class="btn ghost wide restore-buys" data-act="restore-buys">${esc(t("restoreBuys"))}</button>` : ""}`);
  }
  async function buyProduct(id) {
    const it = SHOP.find((x) => x.id === id); if (!it) return;
    PF.track("purchase_start", { product: it.product, src: shopSrc });
    if (!PF.isNative) { toast(t("shopSoon")); return; }
    if (!PF.canBuy(it.product)) { toast(t("buyNone")); return; } // not loaded from Play (no network, or the product id differs)
    const ok = await PF.buy(it.product); // the reward itself comes through grantPurchase
    if (ok) closeSheet();
  }
  // Called by the platform for every paid purchase, also ones finished after a restart. Returns true once saved, so the store may close the purchase.
  function grantPurchase(key, tx) {
    const it = SHOP.find((x) => x.product === key); if (!it) return false;
    if (tx && S.grantedTx.includes(tx)) return true; // already given, the store reported it again
    it.grant();
    if (tx) S.grantedTx = S.grantedTx.concat(tx).slice(-100);
    if (!save()) return false; // not stored: the store keeps the purchase open and delivers it again
    refreshCounters();
    PF.track("purchase", { product: key });
    sfx("coin"); buzz("success"); toast(t("bought"));
    if (S.screen === "home") renderHome();
    return true;
  }
  // What the store says the player owns: restores the starter pack after a reinstall, and the club lasts only while the subscription does.
  function applyOwned(own) {
    if (own.starter && !S.starter) SHOP[0].grant();
    // The club ends only on a sure answer from Google Play; without one it stays (at most 7 days, checked at start).
    if (own.club) { S.club = true; S.clubCheckedAt = Date.now(); }
    else if (own.sure) { S.club = false; S.clubCheckedAt = Date.now(); }
    save(); refreshCounters();
    if (S.screen === "home") renderHome();
  }

  /* ---------------- ACCUSE ---------------- */
  let pickS = null, pickE = [], lastVerdict = null, hintedEv = null;
  function askLogic() {
    const candidates = evidence().map((e) => e.id).filter((id) => validProof().has(id) && !pickE.includes(id) && id !== hintedEv);
    if (!candidates.length || !spendHint()) return;
    hintedEv = candidates[0];
    voice("logic", t("logicPoints"));
    renderAccuse();
    const el = document.querySelector(`[data-ev="${hintedEv}"]`); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  function renderAccuse() {
    const tx = CT(C);
    $("#attempts").innerHTML = `${esc(t("attempts"))}:&nbsp;` + [0, 1, 2].map((i) => `<i class="${i < P.mistakes ? "used" : ""}"></i>`).join("") + `&nbsp;<span>${3 - P.mistakes} ${esc(t("of"))} 3</span>`;
    $("#pick-sus").innerHTML = suspects(C).map((s) => `<button class="pick" data-pick="${s.id}" aria-pressed="${pickS === s.id}">${PORTRAIT(s.look, s.color)}<span>${esc(tx.suspects[s.id].name)}</span></button>`).join("");
    $("#ev-wrap").hidden = !pickS;
    $("#btn-ask-logic").hidden = !pickS;
    $("#pick-ev").innerHTML = evidence().map((e) => `<button class="ev ${e.hot ? "hot-note" : ""} ${hintedEv === e.id ? "hinted" : ""}" data-ev="${e.id}" aria-pressed="${pickE.includes(e.id)}"><b>${esc(e.title)}</b>${esc(e.text)}</button>`).join("");
    $("#prove-count").textContent = `${pickE.length} / 2`;
    $("#btn-confirm").disabled = P.mistakes >= 3 || !(pickS && pickE.length === 2);
    const v = $("#verdict"); v.hidden = !lastVerdict; if (lastVerdict) v.textContent = lastVerdict === "half" ? t("proofHalf") : tx.wrong[lastVerdict];
  }
  // Anything that ties the culprit to the crime counts: the case's proof list, the evidence that breaks their lies, and the reassembled letter.
  const validProof = () => new Set([...C.proof, ...Object.values(C.objections).map((o) => o.evidence), ...Object.keys(C.clues).filter((id) => C.clues[id].puzzle)]);
  function confirmAccuse() {
    const good = pickE.filter((e) => validProof().has(e)).length;
    PF.track("accuse_try", { id: C.id, ok: pickS === C.culprit && pickE.length === 2 && good === 2 ? 1 : 0, attempt: P.mistakes + 1, sid: pickS, ev: pickE.join(",") });
    if (pickS === C.culprit && pickE.length === 2 && good === 2) return finish("win");
    P.mistakes++; save();
    sfx("wrong"); buzz("error");
    lastVerdict = pickS !== C.culprit ? pickS : good === 1 ? "half" : "proof";
    pickE = []; if (pickS !== C.culprit) pickS = null;
    if (P.mistakes >= 3) { const id = C.id; setTimeout(() => { if (C && C.id === id && !P.result) finish("lose"); }, 1400); }
    renderAccuse();
    $("#verdict").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------------- RESULT ---------------- */
  function finish(r) {
    if (P.result) return;
    const rankBefore = rankIdx();
    const wasDaily = dailyCase().id === C.id; // must be checked before the result changes which case is "today's"
    P.result = r; P.endedAt = Date.now(); P.phase = "result";
    if (r === "win") {
      const stars = 3 - (P.timeUp ? 1 : 0) - (P.mistakes ? 1 : 0) - (P.objWrong >= 2 ? 1 : 0);
      P.stars = Math.max(1, stars);
      P.earned = 40 + P.stars * 30 + (P.hintsUsed === 0 ? 30 : 0);
      if (S.outfit === "dress") P.earned = Math.round(P.earned * 1.5);
    } else { P.stars = 0; P.earned = 10; }
    if (wasDaily) {
      P.earned += 20;
      const today = dayKey(), yest = dayAgo(1);
      if (S.lastDailyDone !== today) {
        S.streak = S.lastDailyDone === yest ? S.streak + 1 : 1;
        S.lastDailyDone = today;
        if (S.streak % 7 === 0) { S.hints += 3; S.coins += 150; setTimeout(() => toast(t("streakGift", { n: S.streak, h: 3, c: 150 })), 1500); }
        else if (S.streak % 3 === 0) { S.hints += 2; S.coins += 50; setTimeout(() => toast(t("streakGift", { n: S.streak, h: 2, c: 50 })), 1500); }
      }
    }
    S.coins += P.earned;
    // After the first solved case the newcomer offer opens for 48 hours.
    // The starter pack shows itself once in a player's life: after a win, never on the install day. Then it stays on the home screen for 48 h, no countdown.
    const offerNow = r === "win" && !S.starter && !S.starterPopupShown && dayKey() !== S.firstDay;
    if (offerNow) { S.starterPopupShown = true; S.starterUntil = Date.now() + 48 * 3600 * 1000; }
    save();
    if (offerNow) setTimeout(() => { if (S.screen === "result" && !$("#overlay-root").childElementCount) { PF.track("offer_shown", { kind: "starter_popup" }); openShop(true); } }, 4500);
    PF.track("case_end", { id: C.id, result: r, stars: P.stars, secs: Math.round((P.endedAt - P.startedAt) / 1000), mistakes: P.mistakes, hints: P.hintsUsed, attempts: P.mistakes + (r === "win" ? 1 : 0) });
    show("result");
    sfx(r === "win" ? "win" : "lose"); buzz(r === "win" ? "success" : "error");
    setTimeout(() => sfx("stamp"), 350);
    if (rankIdx() > rankBefore) setTimeout(() => toast(`${t("rank")}: ${U().ranks[rankIdx()]}!`), 2600);
    if (!S.statsAsked && PF.statsAvailable() && !offerNow) setTimeout(() => { if (S.screen === "result" && !$("#overlay-root").childElementCount) askStats(); }, 3000);
    sendStats();
  }
  // One question per player, after the first finished case: statistics stay off unless the answer is yes.
  function askStats() {
    sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(t("statsAskT"))}</h2><div class="role">${esc(t("statsAskD"))}</div></div></div>
      <div class="stack"><button class="btn wide" data-act="stats-yes">${esc(t("statsYes"))}</button><button class="btn ghost wide" data-act="stats-no">${esc(t("statsNo"))}</button></div>`, { noClose: true });
  }
  // Reminder question: once per install, on the result of the first finished case, in the game first; the system dialog only after "Yes".
  function renderNotifAsk() {
    const el = $("#r-notif"), show = !S.notifAsked && (PF.notifSupported() || window.DELO_QA);
    el.hidden = !show; if (!show) return;
    el.innerHTML = `<span>${esc(t("notifAsk"))}</span><span class="btns"><button class="btn small" data-act="notif-yes">${esc(t("notifYes"))}</button><button class="btn small ghost" data-act="notif-later">${esc(t("notifLater"))}</button></span>`;
  }
  async function askNotifSystem() {
    const ok = await PF.requestNotif();
    PF.track("notif_permission", { granted: ok ? 1 : 0 });
    S.settings.notif = ok; save();
    if (ok) PF.scheduleDaily(true, t("notifTitle"), t("notifBody"));
    return ok;
  }
  function shareText() {
    const sh = U().share, tx = CT(C);
    // ⬜ for a lie not caught: the same size as 💥 everywhere; ▫️ shows as a tiny dot in the Android share sheet.
    const lies = Object.keys(C.objections).map((q) => P.obj.includes(q) ? "💥" : "⬜").join("");
    const tries = "❌".repeat(P.mistakes) + (P.result === "win" ? "✅" : "");
    const head = P.result === "win" ? `${sh.solvedIn} ${fmtTime(P.endedAt - P.startedAt)}` : sh.escaped;
    // Search line shows the player's own result (in time or not), not the clue count that is the same for everybody.
    return `${sh.title.replace("{n}", C.n).replace("{t}", tx.title)}\n${head}\n${sh.search} ${P.timeUp ? "⏰" : "✅"}\n${sh.lies} ${lies}\n${sh.accusation} ${tries}\n${"★".repeat(P.stars)}${"☆".repeat(3 - P.stars)}${CFG.shareUrl ? "\n" + CFG.shareUrl : ""}`;
  }
  let cdTimer = null, doubleOffered = null;
  function renderResult() {
    const win = P.result === "win", tx = CT(C);
    const culprit = C.suspects.find((s) => s.id === C.culprit);
    $("#r-portrait").innerHTML = PORTRAIT(culprit.look, culprit.color);
    const st = $("#r-stamp"); st.textContent = win ? t("solved") : t("escaped"); st.classList.toggle("fail", !win);
    $("#r-stars").innerHTML = [0, 1, 2].map((i) => `<span class="${i < P.stars ? "" : "off"}">★</span>`).join("");
    $("#r-coins").textContent = "+" + (P.earned + (P.gameBonus || 0));
    $("#r-time").textContent = fmtTime(P.endedAt - P.startedAt);
    $("#r-lies").textContent = P.obj.length + "/" + Object.keys(C.objections).length;
    $("#r-solution").innerHTML = `<h3>${esc(win ? tx.solution.winTitle : tx.solution.loseTitle)}</h3>` + tx.solution.p.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#r-share").textContent = shareText();
    $$("#fb-rate button").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.r === P.rating)));
    $("#fb-text").value = P.fbText || "";
    $("#fb-status").textContent = "";
    $("#fb").hidden = !PF.feedbackAvailable(); // no receiver yet: no form, instead of an error for every player
    const next = ROOMS.find((r) => !hasRoom(r.id));
    const cta = !!next && next.id === "lobby" && S.coins >= next.price;
    $("#r-agency").classList.toggle("cta", cta);
    $("#r-agency").innerHTML = !next ? "" : cta ? `<b>${esc(t("firstChapterCta"))}</b><span>${esc(t("open"))} →</span>`
      : `<b>${esc(t("agencyStory"))}</b><span>${esc(U().rooms[next.id].n)} · ${Math.min(S.coins, next.price)} / ${next.price} 🪙 · ${Math.min(S.tokens || 0, next.tokens)} / ${next.tokens} HL</span><i style="--p:${Math.min(100, Math.round(S.coins / next.price * 100))}%"></i>`;
    $("#btn-double").hidden = !!P.doubled || !P.earned || !(S.club || PF.adsAllowed());
    renderNotifAsk();
    if (!$("#btn-double").hidden && doubleOffered !== C.id) { doubleOffered = C.id; PF.track("ad_offered", { placement: "double" }); }
    $("#btn-double").textContent = t("doubleCoins");
    clearInterval(cdTimer);
    const tick = () => {
      const now = new Date(), nx = new Date(now); nx.setHours(24, 0, 0, 0);
      const s = Math.floor((nx - now) / 1000);
      $("#r-next").textContent = [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60].map((n) => String(n).padStart(2, "0")).join(":");
    };
    tick(); cdTimer = setInterval(tick, 1000);
  }
  async function copyShare() {
    const r = await PF.share(shareText());
    if (r.method === "busy") return;
    PF.track("share_tap", { id: C.id, ok: r.ok ? 1 : 0, method: r.method });
    if (r.method !== "clipboard") return;
    if (r.ok) return toast(t("copied"));
    const range = document.createRange(); range.selectNodeContents($("#r-share")); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range); toast(t("copyFail"));
  }
  const statsPayload = () => ({ caseId: C.id, lang, result: P.result, stars: P.stars, mistakes: P.mistakes, objWrong: P.objWrong, liesFound: P.obj.length,
    hintsUsed: P.hintsUsed, timeUp: P.timeUp, searchSecs: P.searchSecs, seconds: Math.round((P.endedAt - P.startedAt) / 1000),
    rating: P.rating || null, text: P.fbText || "", app: CFG.version, at: new Date().toISOString() });
  function sendStats() { if (S.settings.stats) PF.sendFeedback(statsPayload()).catch(() => {}); }
  async function sendFeedback(e) {
    e.preventDefault();
    const text = $("#fb-text").value.trim(), st = $("#fb-status");
    if (!P.rating && !text) { st.className = "fb-status bad"; st.textContent = t("fbEmpty"); return; }
    P.fbText = text; save();
    $("#fb-send").disabled = true;
    try { await PF.sendFeedback(statsPayload()); st.className = "fb-status"; st.textContent = t("fbThanks"); }
    catch (err) { st.className = "fb-status bad"; st.textContent = t("fbFail"); }
    finally { $("#fb-send").disabled = false; }
  }

  /* ---------------- AGENCY ---------------- */
  function agencySVG() {
    const r = (id) => hasRoom(id);
    return `<svg class="office" viewBox="0 0 360 240" aria-hidden="true">
      <rect width="360" height="170" fill="${r("lobby") ? "#1c372e" : "#1a1d1b"}"/>
      ${r("lobby") ? "" : `<g stroke="#2a2d2b" stroke-width="2"><path d="M20 20l40 30M300 30l30 40M60 120l50 10"/></g><g fill="#2a2d2b"><rect x="230" y="60" width="40" height="30" transform="rotate(12 250 75)"/></g>`}
      <path d="M0 170h360" stroke="#c9a24a" stroke-opacity=".4"/>
      <rect y="170" width="360" height="70" fill="${r("lobby") ? "#3b2717" : "#2a2420"}"/>
      <rect x="140" y="24" width="80" height="70" fill="#0f1a2e" stroke="#3a2a18" stroke-width="5"/><path d="M180 24v70M140 59h80" stroke="#3a2a18" stroke-width="3"/>
      ${r("lobby") ? "" : `<path d="M140 24l80 70M220 24l-80 70" stroke="#3a2a18" stroke-width="2"/>`}
      <text x="180" y="16" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-size="11" fill="${r("lobby") ? "#d1a94e" : "#4a4a40"}" letter-spacing="2">LANGTON &amp; CO.</text>
      ${r("lab") ? `<g><rect x="250" y="120" width="70" height="8" fill="#5b3a1e"/><path d="M262 120v-22h8v22M282 120v-30h8v30" fill="#9ec2b1" fill-opacity=".5" stroke="#e9e4d4"/><circle cx="304" cy="110" r="9" fill="#b3263a" fill-opacity=".6" stroke="#e9e4d4"/><path d="M304 101v-8" stroke="#e9e4d4" stroke-width="3"/></g>` : ""}
      ${r("files") ? `<rect x="20" y="40" width="70" height="130" fill="#4a2f17"/><g fill="#c9a24a">${[52, 92, 132].map((y) => `<rect x="28" y="${y}" width="54" height="30" fill="#5b3a1e" stroke="#2a170c"/><rect x="48" y="${y + 12}" width="14" height="4"/>`).join("")}</g>` : ""}
      ${r("wardrobe") ? `<path d="M240 34h50" stroke="#c9a24a" stroke-width="3"/><path d="M250 36q6-4 12 0l-2 6q8 20 8 60h-24q0-40 8-60Z" fill="#7d2629"/><path d="M272 36q6-4 12 0l-2 6q8 20 8 50h-24q0-30 8-50Z" fill="#6b4a2e"/>` : ""}
      ${r("office") ? `<ellipse cx="180" cy="212" rx="120" ry="20" fill="#7d2629"/><ellipse cx="180" cy="212" rx="104" ry="14" fill="none" stroke="#d1a94e" stroke-dasharray="4 4"/><circle cx="134" cy="132" r="26" fill="#f6d27a" opacity=".18"/><path d="M122 136h24l-5-18h-14Z" fill="#2d6b52" stroke="#c9a24a"/><rect x="132" y="136" width="4" height="14" fill="#c9a24a"/>` : ""}
      <rect x="110" y="150" width="140" height="10" fill="${r("lobby") ? "#5b3a1e" : "#3a3330"}"/><rect x="118" y="160" width="124" height="44" fill="${r("lobby") ? "#4a2f17" : "#2e2824"}"/>
      ${totalStars() > 0 ? `<ellipse cx="300" cy="214" rx="26" ry="8" fill="#9c3434"/><ellipse cx="300" cy="208" rx="16" ry="6" fill="#d98c3e"/><circle cx="286" cy="205" r="5" fill="#d98c3e"/>` : ""}
      <g transform="translate(152 66) scale(.78)">${PORTRAIT(adaLook(), "#d1a94e", "#14271f").replace('class="portrait"', 'class="portrait" x="0" y="0" width="72" height="72"')}</g>
    </svg>`;
  }
  function renderAgency() {
    $("#agency-room").innerHTML = agencySVG();
    $("#agency-intro").textContent = t("agencyIntro");
    $("#agency-intro").innerHTML = `${esc(t("agencyIntro"))}<br><b class="tokens-n"><span class="tk on">HL</span> ${esc(t("tokens"))}: ${S.tokens || 0}</b>`;
    const rooms = U().rooms, next = ROOMS.findIndex((r) => !hasRoom(r.id));
    $("#agency-rooms").innerHTML = ROOMS.map((rm, i) => {
      const done = hasRoom(rm.id), isNext = i === next;
      const needTok = rm.tokens > (S.tokens || 0), needCoins = rm.price - S.coins;
      const req = `${rm.price} 🪙${rm.tokens ? ` · ${rm.tokens} HL` : ""}`;
      const action = done ? `<button class="btn small ghost" data-chapter="${i}">${esc(t("read"))}</button>`
        : !isNext ? `<span class="lockp">${req}</span>`
        : needTok ? `<span class="lockp">${esc(t("needTokens", { n: rm.tokens }))}</span>`
        : needCoins > 0 ? `<button class="btn small ghost" data-act="shop">${esc(t("notEnoughFor", { n: needCoins }))}</button>`
        : `<button class="btn small" data-restore="${rm.id}">${req}</button>`;
      return `<div class="room ${done ? "done" : ""} ${isNext ? "next" : ""}">
        <span class="num">${i + 1}</span>
        <div class="grow"><b>${esc(rooms[rm.id].n)}</b><small>${esc(rooms[rm.id].perk)}</small></div>${action}</div>`;
    }).join("");
    renderDisguise($("#agency-disguise"));
    if (hasRoom("wardrobe")) {
      const names = U().outfits;
      const shopOutfits = OUTFITS.filter((o) => !S.outfits.includes(o.id));
      if (shopOutfits.length) $("#agency-disguise").insertAdjacentHTML("beforeend", `<div class="shop">${shopOutfits.map((o) => `<div class="shop-item"><div><b>${esc(names[o.id].n)}</b><span>${esc(names[o.id].d)}</span></div><button class="btn small" data-buy-outfit="${o.id}" ${S.coins < o.price ? "disabled" : ""}>${o.price} 🪙</button></div>`).join("")}</div>`);
    }
    const solved = CASES.filter((c) => S.cases[c.id] && S.cases[c.id].result === "win");
    $("#agency-trophies").innerHTML = solved.length
      ? solved.map((c) => `<span class="trophy" title="${esc(CT(c).title)}"><b>${c.n}</b><small>${esc(CT(c).title)}</small><em>${"★".repeat(S.cases[c.id].stars)}</em></span>`).join("")
      : `<div class="empty">${esc(t("noTrophies"))}</div>`;
  }
  function restoreRoom(id) {
    const rm = ROOMS.find((r) => r.id === id); if (!rm || hasRoom(id) || S.coins < rm.price || (S.tokens || 0) < rm.tokens) return;
    S.coins -= rm.price; S.rooms.push(id); save();
    sfx("coin"); buzz("success");
    PF.track("room_restored", { room: id });
    renderAgency(); refreshCounters();
    openChapter(ROOMS.indexOf(rm));
  }
  function openChapter(i) {
    const last = i === ROOMS.length - 1;
    sfx("page");
    sheet(`<div class="sheet-head"><div class="grow"><div class="eyebrow">${esc(t("agencyStory"))}</div><h2>${esc(t("chapter", { n: i + 1 }))}</h2></div><button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
      <div class="chapter-letter">${esc(U().chapters[i])}${last ? `<p class="tbc">${esc(t("tbc"))}</p>` : ""}</div>`);
  }
  function buyOutfit(id) {
    const o = OUTFITS.find((x) => x.id === id); if (!o || S.outfits.includes(id) || S.coins < o.price) return;
    S.coins -= o.price; S.outfits.push(id); S.outfit = id; save();
    sfx("coin"); buzz("success"); renderAgency(); refreshCounters();
  }
  function wear(id) { if (!S.outfits.includes(id)) return; S.outfit = id; save(); sfx("tap"); show(S.screen, true); }

  /* ---------------- SHEETS: archive, settings, language ---------------- */
  function sheet(html, opts) {
    const o = opts || {};
    $("#overlay-root").innerHTML = `<div class="overlay" id="ov"><div class="sheet ${o.cls || ""}" role="dialog" aria-modal="true">${html}</div></div>`;
    if (!o.noClose) $("#ov").addEventListener("click", (e) => { if (e.target.id === "ov") closeSheet(); });
  }
  function closeSheet() {
    $("#overlay-root").innerHTML = ""; sheetSid = null; lieQ = null;
    if (S.screen === "hub") { renderSuspects(); renderNotes(); renderAccuseBtn(); }
  }
  function openArchive() {
    sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(t("archive"))}</h2><div class="role">🗝 ${esc(t("keys"))}: ${S.club ? "∞" : S.keys}</div></div><button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
      <div class="archive">${CASES.map((c, i) => {
        const open = isUnlocked(c), st = caseStatus(c), tx = CT(c), daily = dailyCase().id === c.id;
        return `<button class="arch ${open ? "" : "locked"}" ${open ? `data-case="${c.id}"` : "disabled"}>
          <span class="num">${c.n}</span><span class="grow"><b>${esc(open ? tx.title : "• • •")}</b><small>${esc(open ? tx.meta[0] : t("lockedIn", { n: i - todayIdx() }))}</small></span>
          ${st ? `<span class="st ${st.cls}">${esc(st.txt)}</span>` : open ? `<span class="st new">${daily || S.club ? esc(t("play")) : "🗝 1"}</span>` : ""}</button>`;
      }).join("")}</div>`);
  }
  let resetArmed = false;
  function openSettings() {
    resetArmed = false;
    const tg = (k, label) => `<label class="toggle"><span>${esc(label)}</span><input type="checkbox" id="set-${k}" data-set="${k}" ${S.settings[k] ? "checked" : ""}><i></i></label>`;
    sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(t("settings"))}</h2></div><button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
      <div class="settings">
        <button class="row-btn" data-act="lang">${esc(t("lang"))}<small>${esc(LANGS.find((l) => l.code === lang).name)}</small></button>
        ${tg("sound", t("sound"))}${tg("vib", t("vibration"))}${tg("notif", t("notifications"))}${PF.statsAvailable() ? tg("stats", t("stats")) : ""}
        ${PF.hasPrivacyOptions() ? `<button class="row-btn" data-act="privacy">${esc(t("privacy"))}</button>` : ""}
        <a class="row-btn" href="${esc(CFG.privacyUrl)}" target="_blank" rel="noopener">${esc(t("privacyPolicy"))}</a>
        <button class="row-btn danger" data-act="reset">${esc(t("reset"))}</button>
        <div class="version">v${esc(CFG.version)}</div>
      </div>`);
  }
  function openLang() {
    sheet(`<div class="sheet-head"><div class="grow"><h2>${esc(t("lang"))}</h2></div><button class="close" data-act="close" aria-label="${esc(t("close"))}">×</button></div>
      <div class="lang-list">${LANGS.map((l) => `<button class="lang-opt" data-lang="${l.code}" aria-pressed="${l.code === lang}">${esc(l.name)}<small>${l.code.toUpperCase()}</small></button>`).join("")}</div>`);
  }

  /* =========================== wiring =========================== */
  function onAct(act, el) {
    switch (act) {
      case "close": sfx("tap"); return closeSheet();
      case "lang": return openLang();
      case "shop": return openShop(false, el.id === "home-offer" ? "home_offer" : $("#overlay-root [data-act=ad-hint]") ? "hint_empty" : $("#overlay-root [data-act=ad-key]") ? "keys_empty" : S.screen);
      case "privacy": return PF.privacyOptions();
      case "reset":
        if (!resetArmed) { resetArmed = true; el.textContent = t("resetConfirm"); return; }
        { // purchases and the statistics choice survive a reset
          const keep = { starter: S.starter, starterGranted: S.starterGranted, club: S.club, clubCheckedAt: S.clubCheckedAt, grantedTx: S.grantedTx, firstDay: S.firstDay, starterPopupShown: S.starterPopupShown, statsAsked: S.statsAsked }, stats = S.settings.stats;
          S = Object.assign(fresh(), keep); S.settings.stats = stats;
          if (S.starter) S.outfits.push("coat");
        }
        C = null; P = null; save(); PF.resetStatsId(); closeSheet(); toast(t("resetDone")); return show("home");
      case "use-key":
        if (S.keys <= 0) return offerKeys(el.dataset.id);
        S.keys--; save(); closeSheet(); return enterCase(el.dataset.id);
      case "ad-key":
        return rewarded("key").then((ok) => { if (ok === null) return; closeSheet(); if (ok) { S.keys++; save(); refreshCounters(); toast(t("plusKey")); } else toast(t("adNone")); });
      case "plus30":
        // No ad available is not the player's fault: the 30 seconds are given anyway (still the one extension of this case).
        return rewarded("search_time").then((ok) => { if (ok === null) return; closeSheet(); P.extended = true; P.timeLeft = 30; save(); renderTimer(); startTimer(); if (!ok) toast(t("adFree30")); });
      case "keep": P.timeUp = true; save(); closeSheet(); return renderTimer();
      case "double":
        return rewarded("double").then((ok) => { if (ok === false) toast(t("adNone")); if (ok && !P.doubled) { S.coins += P.earned; P.doubled = true; save(); sfx("coin"); toast(t("doubled")); renderResult(); refreshCounters(); } });
      case "ask-logic": return askLogic();
      case "token-hint":
        if (P.token || !spendHint()) return;
        setTab("scene"); pulseProp($("#hub-scene svg"), "__token");
        return;
      case "ad-hint":
        return rewarded("hint").then((ok) => { if (ok === null) return; closeSheet(); if (ok) { S.hints++; save(); toast(t("plusHint")); refreshCounters(); } else toast(t("adNone")); });
      case "stats-yes": case "stats-no":
        S.statsAsked = true; S.settings.stats = act === "stats-yes"; save(); PF.setStats(S.settings.stats); closeSheet();
        // Nothing is sent before the answer, so both consent events go out only after a yes (a "no" leaves no trace).
        if (S.settings.stats) { PF.track("consent_shown", { where: "after_case" }); PF.track("consent_given", { where: "after_case" }); sendStats(); }
        return;
      case "gift-double": {
        const g = S.gift; if (!g || g.doubled || g.day !== dayKey()) return renderGift();
        el.disabled = true;
        return rewarded("gift").then((ok) => {
          el.disabled = false;
          if (ok === null) return;
          if (!ok) { toast(t("adNoneLater")); return; } // the gift itself was already given; the button stays for today
          if (g.doubled) return;
          g.doubled = true; S.hints += g.h; S.keys += g.k; save();
          sfx("coin"); toast(`🎁 +${g.h} 🔍  +${g.k} 🗝`); refreshCounters(); renderGift();
        });
      }
      case "notif-yes": case "notif-later":
        S.notifAsked = true; save(); $("#r-notif").hidden = true; // asked once; never again by itself
        PF.track("notif_prompt", { answer: act === "notif-yes" ? "yes" : "later" });
        if (act === "notif-later") { S.settings.notif = false; save(); PF.scheduleDaily(false); return; } // also cancels a reminder an older version already set
        return askNotifSystem();
      case "restore-buys":
        return PF.restorePurchases().then((ok) => toast(t(ok ? "restoredBuys" : "restoreFail")));
    }
  }
  function wire() {
    document.addEventListener("pointerdown", () => AUDIO.unlock(), { once: true });
    document.body.addEventListener("click", (e) => {
      const a = e.target.closest("[data-act]"); if (a) return onAct(a.dataset.act, a);
      const l = e.target.closest("[data-lang]"); if (l) return setLang(l.dataset.lang);
      const cs = e.target.closest("[data-case]"); if (cs) { closeSheet(); return startCase(cs.dataset.case); }
      const q = e.target.closest("[data-qid]"); if (q && !q.disabled) return ask(q.dataset.qid);
      const lie = e.target.closest("[data-lie]"); if (lie) return openPresent(lie.dataset.lie);
      const pr = e.target.closest("[data-present]"); if (pr) return present(pr.dataset.present);
      const go = e.target.closest("[data-go]"); if (go) { sfx("tap"); return show(go.dataset.go); }
      const bp = e.target.closest("[data-buy-product]"); if (bp) return buyProduct(bp.dataset.buyProduct);
      const rs = e.target.closest("[data-restore]"); if (rs) return restoreRoom(rs.dataset.restore);
      const ch = e.target.closest("[data-chapter]"); if (ch) return openChapter(+ch.dataset.chapter);
      const bo = e.target.closest("[data-buy-outfit]"); if (bo) return buyOutfit(bo.dataset.buyOutfit);
      const w = e.target.closest("[data-wear]"); if (w) return wear(w.dataset.wear);
    });
    document.body.addEventListener("change", (e) => {
      const k = e.target.dataset && e.target.dataset.set; if (!k) return;
      S.settings[k] = e.target.checked; save();
      if (k === "sound") { AUDIO.setEnabled(S.settings.sound); AUDIO.ambience(false); }
      if (k === "notif") {
        S.notifAsked = true; save();
        if (!S.settings.notif) { S.notifWanted = false; save(); PF.scheduleDaily(false); } // turned off by the player: do not switch it back on later
        else askNotifSystem().then((ok) => { if (ok) return; e.target.checked = false; S.notifWanted = true; save(); toast(t("notifDenied")); PF.openAppSettings(); });
      }
      if (k === "vib" && S.settings.vib) PF.haptic("light");
      if (k === "stats") { S.statsAsked = true; save(); PF.setStats(S.settings.stats); if (S.settings.stats) PF.track("consent_given", { where: "settings" }); }
    });
    $$("[data-open-lang]").forEach((b) => b.addEventListener("click", openLang));
    $("#btn-daily").addEventListener("click", () => { sfx("tap"); startCase(dailyCase().id); });
    $("#btn-archive").addEventListener("click", () => { sfx("tap"); openArchive(); });
    $("#btn-agency").addEventListener("click", () => { sfx("tap"); show("agency"); });
    $("#btn-shop").addEventListener("click", () => { sfx("tap"); openShop(false, "menu"); });
    $("#btn-settings").addEventListener("click", () => { sfx("tap"); openSettings(); });
    $("#btn-enter").addEventListener("click", () => { sfx("tap"); P.phase = "search"; save(); show("search"); });
    $("#search-hint").addEventListener("click", searchHint);
    $("#mini-hint").addEventListener("click", miniHint);
    $("#mini-next").addEventListener("click", miniNext);
    $("#btn-to-hub").addEventListener("click", () => { sfx("tap"); show("hub"); });
    $$(".tab").forEach((b) => b.addEventListener("click", () => { sfx("tap"); setTab(b.dataset.tab); window.scrollTo(0, 0); }));
    $("#suspects").addEventListener("click", (e) => { const b = e.target.closest("[data-sid]"); if (b) { sfx("tap"); openSuspect(b.dataset.sid); } });
    $("#hub-hint").addEventListener("click", hubHint);
    $("#btn-accuse").addEventListener("click", () => {
      sfx("tap");
      PF.track("accuse_open", { id: C.id, secs_since_start: Math.round((Date.now() - P.startedAt) / 1000), questions: P.asked.length, presents: P.obj.length + P.objWrong, hints: P.hintsUsed });
      pickS = null; pickE = []; lastVerdict = null; hintedEv = null; show("accuse"); });
    $("#pick-sus").addEventListener("click", (e) => { const b = e.target.closest("[data-pick]"); if (!b || P.mistakes >= 3) return; sfx("tap"); pickS = b.dataset.pick; renderAccuse(); });
    $("#pick-ev").addEventListener("click", (e) => {
      const b = e.target.closest("[data-ev]"); if (!b || P.mistakes >= 3) return; sfx("tap");
      const id = b.dataset.ev;
      if (pickE.includes(id)) pickE = pickE.filter((x) => x !== id);
      else { pickE.push(id); if (pickE.length > 2) pickE.shift(); }
      renderAccuse();
    });
    $("#btn-confirm").addEventListener("click", confirmAccuse);
    $("#btn-share").addEventListener("click", copyShare);
    $("#fb-rate").addEventListener("click", (e) => { const b = e.target.closest("[data-r]"); if (!b) return; P.rating = +b.dataset.r; save(); PF.track("rating_given", { id: C.id, rating: P.rating }); $$("#fb-rate button").forEach((x) => x.setAttribute("aria-pressed", String(+x.dataset.r === P.rating))); });
    $("#fb").addEventListener("submit", sendFeedback);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && $("#overlay-root").childElementCount) closeSheet(); });
    PF.onPause((paused) => {
      if (paused) {
        AUDIO.pause(); save();
        PF.track("app_pause", { secs_in_session: Math.round((Date.now() - sessionStart) / 1000), screen: S.screen });
        if (P && !P.result && CASE_SCREENS.includes(S.screen)) PF.track("case_abandon", { id: C.id, phase: S.screen });
        PF.flushStats();
      } else {
        AUDIO.resume(); sessionStart = Date.now();
        if (S.lastLogin !== dayKey()) { dailyLogin(); if (S.screen === "home") renderHome(); refreshCounters(); } // a new day while the app stayed open
        if (S.notifWanted) PF.notifGranted().then((ok) => { // back from Android settings where the player allowed notifications
          if (!ok) return;
          S.notifWanted = false; S.settings.notif = true; save(); PF.scheduleDaily(true, t("notifTitle"), t("notifBody"));
          const box = $("#set-notif"); if (box) box.checked = true;
        });
      }
    });
    PF.onBack(() => {
      if ($("#overlay-root").childElementCount) return closeSheet();
      const back = { intro: "home", search: "home", mini: "home", findings: "home", hub: "home", accuse: "hub", result: "home", agency: "home" }[S.screen];
      if (back) show(back);
    });
  }

  function applyDebugFlags() {
    if (dbg("day2")) { // a second calendar day for the starter offer: shows once after the next win
      S.firstDay = dayAgo(1); S.starter = false; S.starterPopupShown = false; S.starterUntil = 0;
    }
    if (dbg("timeup")) { // also give the case back its one +30 s
      Object.values(S.cases).forEach((p) => { if (!p.result) { p.extended = false; p.timeUp = false; } });
    }
    if (dbg("gift")) S.lastLogin = dayAgo(1); // the daily gift is handed out again now
    if (dbg("freeze")) { // one missed day: the last daily case was the day before yesterday
      S.lastDailyDone = dayAgo(2); S.lastLogin = S.lastDailyDone; S.streak = Math.max(S.streak, 4); S.freezeAt = "";
    }
    if (dbg("consent")) { S.statsAsked = false; S.settings.stats = false; setTimeout(askStats, 900); }
    if (dbg("share")) { // stand-in for the system share sheet: the text goes to the console
      try { Object.defineProperty(navigator, "share", { configurable: true, value: async (d) => { window.__lastShare = d.text; console.log("[share]", d.text); toast("DEBUG share ✓"); } }); } catch (e) {}
    }
    save();
    setTimeout(() => toast("DEBUG: " + DBG.join(", ")), 400);
  }

  /* QA panel: only when window.DELO_QA is set by js/qa-debug.js, a file that exists ONLY in the Android debug build
     (delo-dnya-app/android/app/src/debug/assets). Release AAB, the web demo and the source game do not have it. */
  const QA_ACTIONS = {
    skipMini() { // all mini-games of the current case solved, go to the findings
      if (!P || !C) return toast("QA: open a case first");
      P.found = Object.keys(C.clues); P.games = P.games || planGames(); P.gameSolved = P.games.map((_, i) => i); P.gameIdx = P.games.length;
      if (!P.startedAt) P.startedAt = Date.now();
      P.phase = "findings"; save(); closeSheet(); show("findings");
    },
    hub() { QA_ACTIONS.skipMini(); if (P) { P.phase = "hub"; save(); show("hub"); } },
    accuse() { // every suspect questioned once, straight to the accusation
      QA_ACTIONS.hub(); if (!P) return;
      C.suspects.forEach((sus) => { const q = sus.qs.find((x) => !x.needs || P.found.includes(x.needs)); if (q && !P.asked.includes(q.id)) P.asked.push(q.id); });
      save(); pickS = null; pickE = []; lastVerdict = null; hintedEv = null; show("accuse");
    },
    consent() { S.statsAsked = false; S.settings.stats = false; save(); closeSheet(); askStats(); },
    gift() { S.lastLogin = dayAgo(1); closeSheet(); dailyLogin(); show("home"); },
    freeze() { S.lastDailyDone = dayAgo(2); S.lastLogin = dayAgo(2); S.streak = Math.max(S.streak, 4); S.freezeAt = ""; closeSheet(); dailyLogin(); show("home"); },
    day2() { S.firstDay = dayAgo(1); S.starter = false; S.starterPopupShown = false; S.starterUntil = 0; save(); closeSheet(); toast("QA: day 2 — win a case"); },
    notif() { S.notifAsked = false; save(); closeSheet(); if (S.screen === "result") renderNotifAsk(); else toast("QA: finish a case, the question is on the result"); },
    timeup() { if (!P || S.screen !== "search") return toast("QA: open the search first"); P.extended = false; P.timeUp = false; P.timeLeft = 3; save(); closeSheet(); renderTimer(); startTimer(); },
  };
  function qaPanel() {
    const names = { skipMini: "Skip mini-games", hub: "Go to interrogation", accuse: "Go to accusation", consent: "Show stats consent", gift: "Daily gift now", freeze: "Detective's day off", day2: "Day 2 (starter offer)", notif: "Reminder question", timeup: "Search: 3 s left" };
    sheet(`<div class="sheet-head"><div class="grow"><h2>QA (debug build)</h2></div><button class="close" data-act="close" aria-label="close">×</button></div>
      <div class="stack">${Object.keys(QA_ACTIONS).map((k) => `<button class="btn ghost wide" data-qa="${k}">${names[k]}</button>`).join("")}</div>`);
  }
  function initQA() {
    if (!window.DELO_QA) return;
    const b = document.createElement("button");
    b.textContent = "QA"; b.setAttribute("aria-label", "QA panel");
    b.style.cssText = "position:fixed;left:6px;bottom:72px;z-index:10000;padding:4px 8px;font:12px monospace;background:#7d2629;color:#fff;border:0;border-radius:4px;opacity:.85";
    b.addEventListener("click", qaPanel);
    document.body.appendChild(b);
    document.body.addEventListener("click", (e) => { const q = e.target.closest("[data-qa]"); if (q && QA_ACTIONS[q.dataset.qa]) { console.log("[QA]", q.dataset.qa); toast("QA: " + q.dataset.qa); QA_ACTIONS[q.dataset.qa](); } }); // which action was really tapped
  }

  let sessionStart = Date.now();
  function dailyLogin() {
    const today = dayKey();
    if (S.lastLogin === today) return;
    const first = !S.lastLogin;
    S.lastLogin = today;
    const yest = dayAgo(1), before = dayAgo(2);
    // "Detective's day off": one missed day keeps the streak, at most once in 7 days. Two missed days still end it.
    if (S.streak > 0 && S.lastDailyDone === before && daysBetween(S.freezeAt || "2000-01-01", today) >= 7) {
      S.lastDailyDone = yest; S.freezeAt = today;
      PF.track("streak_saved", { streak: S.streak, kind: "weekend", missed: 1 });
      setTimeout(() => toast(t("streakSaved")), 1600);
    } else if (S.lastDailyDone && S.lastDailyDone !== today && S.lastDailyDone !== yest) {
      if (S.streak > 0) PF.track("streak_broken", { streak_was: S.streak });
      S.streak = 0;
    }
    if (!first) {
      // Daily gift. The base part can be doubled once a day for an ad from the home screen; the club gets it doubled right away.
      const h = 1 + (hasRoom("lobby") ? 1 : 0), k = 1 + (hasRoom("files") ? 1 : 0);
      const club = (S.club ? 2 : 0) + (S.club ? h : 0), clubK = S.club ? k : 0;
      S.hints += h + club; S.keys += k + clubK;
      S.gift = { day: today, h, k, doubled: !!S.club, offered: false };
      PF.track("daily_gift", { streak: S.streak, doubled: S.club ? 1 : 0 });
      setTimeout(() => toast(`🎁 +${h + club} 🔍  +${k + clubK} 🗝`), 900);
    }
    save();
  }

  function start(data) {
    const prev = (data && data.state) || load();
    if (prev && prev.v === 2) S = Object.assign(fresh(), prev);
    S.settings = Object.assign(fresh().settings, S.settings);
    if (!S.firstDay) S.firstDay = dayKey(); // older saves: the day of this update counts as the first day
    if (!S.statsAsked) S.settings.stats = false; // statistics only after the player said yes (older saves had it on by default)
    // The club is confirmed by the store at every start; offline it stays at most a week.
    if (S.club && PF.isNative && Date.now() - (S.clubCheckedAt || 0) > 7 * 86400000) S.club = false;
    PF.setStats(S.settings.stats);
    PF.onPurchase(grantPurchase, applyOwned);
    if (DBG.length) applyDebugFlags();
    initQA();
    AUDIO.setEnabled(S.settings.sound);
    applyStatic();
    wire();
    PF.init();
    const firstRun = !S.lastLogin, lastLogin = S.lastLogin;
    dailyLogin();
    if (S.settings.notif) PF.scheduleDaily(true, t("notifTitle"), t("notifBody"));
    if (!S.notifAsked) PF.notifGranted().then((ok) => { if (ok) { S.notifAsked = true; save(); if (S.screen === "result") renderNotifAsk(); } }); // already allowed (older version asked at start): no question needed
    PF.track("app_open", { first: firstRun ? 1 : 0, streak: S.streak, cases_done: Object.values(S.cases).filter((p) => p.result).length, days_since_last: lastLogin ? daysBetween(lastLogin, dayKey()) : null });
    if (S.current && caseById(S.current)) openCase(S.current);
    if (S.screen === "puzzle") S.screen = "mini";
    const resumable = C && ["intro", "search", "mini", "findings", "hub", "accuse", "result"].includes(S.screen);
    show(resumable ? (S.screen === "accuse" ? "hub" : S.screen) : S.screen === "agency" ? "agency" : "home");
    try { window.claude?.hot?.snapshot?.(() => ({ state: S })); } catch (e) {}
  }
  window.claude?.hot?.ready ? window.claude.hot.ready(start) : start(window.claude?.hot?.data ?? {});
})();
