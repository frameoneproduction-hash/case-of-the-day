// Web demo only: "Out on Google Play" under the home menu, in the game's current language (follows <html lang>).
(function () {
  const URL = "https://play.google.com/store/apps/details?id=com.caseoftheday.mystery&referrer=utm_source%3Ddemo";
  const T = {
    en: ["Out on Google Play", "Free. No purchases. Ads only if you choose to watch."],
    ru: ["Уже в Google Play", "Бесплатно. Без покупок. Реклама — только если вы сами решите её посмотреть."],
    es: ["Ya en Google Play", "Gratis. Sin compras. Anuncios solo si decides verlos."],
    de: ["Jetzt bei Google Play", "Kostenlos. Keine Käufe. Werbung nur, wenn du sie sehen willst."],
    pl: ["Już w Google Play", "Za darmo. Bez zakupów. Reklamy tylko wtedy, gdy sam zechcesz je obejrzeć."],
  };
  const nav = document.querySelector("#s-home .home-nav");
  if (!nav) return;
  const box = document.createElement("div");
  box.className = "play-link";
  box.innerHTML = `<a class="btn ghost wide" href="${URL}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M4 2.8v18.4c0 .5.5.8.9.6L21 12.6c.4-.3.4-.9 0-1.2L4.9 2.2c-.4-.2-.9.1-.9.6Z"/></svg><span></span></a><small></small>`;
  nav.after(box);
  const span = box.querySelector("span"), small = box.querySelector("small");
  const apply = () => { const [a, b] = T[(document.documentElement.lang || "en").slice(0, 2)] || T.en; span.textContent = a; small.textContent = b; };
  apply();
  new MutationObserver(apply).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  const st = document.createElement("style");
  st.textContent = ".play-link{display:grid;gap:6px;text-align:center;margin-top:4px}.play-link .btn{display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none}.play-link small{font-size:13px;opacity:.75}";
  document.head.appendChild(st);
})();
