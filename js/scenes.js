// Crime-scene locations. Each prop is a tappable group: <g class="hot" data-prop="name">art + ring + hit</g>.
(function () {
  const P = (name, art, cx, cy, r, hit) =>
    `<g class="hot" data-prop="${name}">${art}<circle class="ring" cx="${cx}" cy="${cy}" r="${r}"/>${hit || `<circle class="hit" cx="${cx}" cy="${cy}" r="${r + 4}"/>`}</g>`;

  /* ------------------------------ STUDY ------------------------------ */
  const studyBase = (L) => `
  <defs>
    <pattern id="st-wp" width="24" height="24" patternUnits="userSpaceOnUse"><rect width="24" height="24" fill="${L.wall[0]}"/><path d="M12 3 17 12 12 21 7 12Z" fill="none" stroke="${L.wall[1]}"/></pattern>
    <radialGradient id="st-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f6d27a" stop-opacity=".55"/><stop offset="1" stop-color="#f6d27a" stop-opacity="0"/></radialGradient>
    <radialGradient id="st-fire" cx=".5" cy=".8" r=".6"><stop offset="0" stop-color="#ff8a3d" stop-opacity=".8"/><stop offset="1" stop-color="#ff8a3d" stop-opacity="0"/></radialGradient>
    <radialGradient id="st-candle" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd27a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient>
    <linearGradient id="st-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2717"/><stop offset="1" stop-color="#22160d"/></linearGradient>
    <clipPath id="st-win"><rect x="256" y="50" width="76" height="150"/></clipPath>
  </defs>
  <rect width="360" height="300" fill="url(#st-wp)"/>
  <rect y="240" width="360" height="60" fill="${L.wains}"/><path d="M0 240h360" stroke="#c9a24a" stroke-opacity=".35"/>
  <rect y="300" width="360" height="100" fill="url(#st-floor)"/>
  <path d="M0 325h360M0 352h360M0 380h360" stroke="#000" stroke-opacity=".25"/>
  <path d="M60 300v25M150 300v25M240 300v25M330 300v25M20 325v27M110 325v27M200 325v27M290 325v27" stroke="#000" stroke-opacity=".18"/>
  <ellipse cx="200" cy="350" rx="130" ry="32" fill="${L.rug}"/>
  <ellipse cx="200" cy="350" rx="116" ry="25" fill="none" stroke="#c9a24a" stroke-opacity=".5" stroke-dasharray="4 4"/>
  <path d="M200 330l18 20-18 20-18-20Z" fill="none" stroke="#c9a24a" stroke-opacity=".35"/>
  ${L.decor}
  ${L.sky}
  <path d="M256 125h76M294 50v150" stroke="#3a2a18" stroke-width="5"/>
  <rect x="252" y="46" width="84" height="158" fill="none" stroke="#3a2a18" stroke-width="6"/>
  <path d="M240 36h108" stroke="#c9a24a" stroke-width="4"/><circle cx="240" cy="36" r="4" fill="#c9a24a"/><circle cx="348" cy="36" r="4" fill="#c9a24a"/>
  <path d="M242 38c10 60 0 160 8 262h-20c4-90 10-180 0-262Z" fill="${L.curt}"/>
  <path d="M346 38c-10 60 0 160-8 262h20c-4-90-10-180 0-262Z" fill="${L.curt}"/>
  <path d="M234 150q14 8 22 0M354 150q-14 8-22 0" stroke="#c9a24a" stroke-width="2" fill="none"/>
  ${P("window", "", 294, 100, 40, `<rect class="hit" x="258" y="52" width="72" height="100"/>`)}
  ${P("portrait", `<rect x="160" y="60" width="64" height="80" fill="#3a2a18" stroke="#c9a24a" stroke-width="3"/><rect x="167" y="67" width="50" height="66" fill="#2b3b33"/>
    <path d="M174 133c2-18 10-24 18-24s16 6 18 24Z" fill="#1a1a1a"/><path d="M186 110l6 8 6-8" fill="#efe9dc"/><circle cx="192" cy="92" r="11" fill="#c8a98a"/>
    <path d="M181 88q11-12 22 0q-3-8-11-8t-11 8Z" fill="#8a8a86"/><path d="M186 98q6-3 12 0" stroke="#6e6e6a" stroke-width="2.4" fill="none"/>
    <path d="M187 90l3 1M197 90l-3 1" stroke="#3a2a18" stroke-width="1.2"/><rect x="176" y="141" width="32" height="7" fill="#c9a24a" opacity=".7"/>`, 192, 102, 44, `<rect class="hit" x="155" y="55" width="74" height="96"/>`)}
  <rect x="18" y="168" width="112" height="132" fill="#2b2a28"/>
  <path d="M18 190h112M18 214h112M18 238h112M18 262h112M18 286h112" stroke="#3a3835"/>
  <rect x="10" y="158" width="128" height="14" fill="#4a453f"/><path d="M10 158h128" stroke="#c9a24a" stroke-opacity=".6"/>
  <path d="M38 300v-86q36-32 72 0v86Z" fill="#0b0b0a"/>
  <ellipse cx="74" cy="292" rx="40" ry="28" fill="url(#st-fire)" class="glow"/>
  <path d="M48 300h52" stroke="#3a2618" stroke-width="5" stroke-linecap="round"/>
  <path class="flame" d="M54 296q8-20 14-6 6-24 12-4 6-14 12 8Z" fill="#ff8a3d" opacity=".9"/>
  <path class="flame slow" d="M62 296q4-10 8-3 4-12 8-1 4-7 6 4Z" fill="#ffd27a"/>
  ${L.fireDim}
  <circle cx="120" cy="134" r="16" fill="url(#st-candle)" class="glow"/>
  ${P("candle", `<rect x="113" y="152" width="14" height="6" fill="#c9a24a"/><rect x="117" y="138" width="6" height="15" fill="#efe6cf"/><path class="flame" d="M120 128q4 5 0 10q-4-5 0-10Z" fill="#ffcf6b"/>`, 120, 142, 15)}
  ${P("letter", `<path d="M58 286l14-8 18 4 4 12-20 6-14-4Z" fill="#d8cba8"/><path d="M62 288h18M64 292h16" stroke="#6b5a44" stroke-width=".8"/><path d="M84 282l10 0 0 12-6 4Z" fill="#1d1208"/>`, 76, 288, 20)}
  ${P("clock", `<path d="M54 158v-26q22-14 44 0v26Z" fill="#5b3a1e" stroke="#c9a24a" stroke-width="1.5"/><circle cx="76" cy="141" r="10" fill="#efe6cf"/><path d="M76 141v-7M76 141l-6 3" stroke="#1a140a" stroke-width="1.6" stroke-linecap="round"/><path d="M69 134l5 4M80 146l4-3" stroke="#7a7a7a" stroke-width=".8"/>`, 76, 142, 22)}
  <circle cx="150" cy="208" r="44" fill="url(#st-lamp)" class="glow"/>
  ${P("lamp", `<path d="M136 198h28l-6-22h-16Z" fill="#2d6b52" stroke="#c9a24a"/><rect x="148" y="198" width="4" height="34" fill="#c9a24a"/><rect x="140" y="230" width="20" height="5" fill="#c9a24a"/>`, 150, 204, 26, `<rect class="hit" x="136" y="172" width="30" height="58"/>`)}
  <rect x="118" y="236" width="150" height="10" fill="#5b3a1e"/>
  <rect x="124" y="246" width="138" height="56" fill="#4a2f17"/>
  <rect x="134" y="256" width="52" height="38" fill="none" stroke="#c9a24a" stroke-opacity=".4"/><rect x="200" y="256" width="52" height="38" fill="none" stroke="#c9a24a" stroke-opacity=".4"/>
  <circle cx="160" cy="275" r="2" fill="#c9a24a"/><circle cx="226" cy="275" r="2" fill="#c9a24a"/>
  ${P("inkwell", `<rect x="122" y="225" width="12" height="11" rx="2" fill="#1a3a6a"/><rect x="124" y="222" width="8" height="4" fill="#c9a24a"/><path d="M128 222l8-18" stroke="#efe9dc" stroke-width="1.6"/><path d="M136 204q4-2 2 6" fill="#efe9dc"/>`, 128, 226, 13)}
  ${P("papers", `<rect x="176" y="226" width="34" height="10" fill="#e9dfc6" transform="rotate(-6 193 231)"/><rect x="180" y="222" width="30" height="10" fill="#f2ead6" transform="rotate(4 195 227)"/><path d="M206 222l10 10" stroke="#1a140a" stroke-width="2" stroke-linecap="round"/>`, 194, 228, 18)}
  ${P("teacup", `<ellipse cx="236" cy="235" rx="15" ry="4" fill="#e9dfc6"/><path d="M226 222h20l-3 12h-14Z" fill="#f2ead6" stroke="#c9a24a"/><path d="M246 225q7 0 5 6-2 4-6 2" fill="none" stroke="#f2ead6" stroke-width="2"/>`, 236, 226, 19)}
  <path d="M16 330q0-22 22-22h50q22 0 22 22v54H16Z" fill="#6a2a2c"/>
  <path d="M40 314v40M63 312v42M86 314v40" stroke="#5a2224" stroke-width="1.5"/>
  <rect x="10" y="342" width="22" height="44" rx="8" fill="#7d3133"/><rect x="94" y="342" width="22" height="44" rx="8" fill="#7d3133"/>
  <rect x="30" y="352" width="66" height="26" rx="6" fill="#5e2426"/><path d="M20 386v8M106 386v8" stroke="#3a2618" stroke-width="4"/>
  ${P("cat", `<path class="tail" d="M80 352q12 2 10-10" stroke="#d98c3e" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <g class="cat-body"><ellipse cx="64" cy="350" rx="19" ry="9" fill="#d98c3e"/><path d="M58 343v7M64 342v7M70 343v7" stroke="#b86e2a" stroke-width="1.6"/></g>
    <circle cx="46" cy="346" r="7.5" fill="#d98c3e"/><path d="M40 342l1-7 5 4ZM48 339l4-6 2 7Z" fill="#d98c3e"/><path d="M41.5 340l.5-3 2 2ZM49.5 338l2-3 1 3.5Z" fill="#f0b8a0"/>
    <path d="M42 347q1.5 1 3 0M47.5 347q1.5 1 3 0" stroke="#4a2a10" stroke-width=".9" fill="none"/><circle cx="46" cy="349.5" r=".9" fill="#c0606a"/>`, 62, 346, 26, `<rect class="hit" x="34" y="330" width="60" height="28"/>`)}
  ${P("vial", `<rect x="122" y="382" width="16" height="7" rx="3" fill="#9ec2b1" opacity=".9" transform="rotate(-18 130 385)"/><rect x="136" y="378" width="4" height="6" fill="#3a2a18" transform="rotate(-18 130 385)"/>`, 130, 383, 15)}
  ${P("handkerchief", `<path d="M330 300l14-10 8 6-6 10-12 2Z" fill="#f4eee0"/><path d="M334 300l10-6" stroke="#e7a2b9"/>`, 341, 298, 17)}`;


  // Study portrait (a decoy in most cases): 4 different men and frames chosen by case number; the frame stays inside the original hit zone.
  const PORTRAIT_RE = /<rect x="160" y="60" width="64" height="80"[\s\S]*?<rect x="176" y="141" width="32" height="7" fill="#c9a24a" opacity="\.7"\/>/;
  const NAMEPLATE = '<rect x="176" y="141" width="32" height="7" fill="#c9a24a" opacity=".7"/>';
  const EYES = '<path d="M187 90l3 1M197 90l-3 1" stroke="#3a2a18" stroke-width="1.2"/>';
  const PORTRAITS = [
    null,
    `<rect x="160" y="60" width="64" height="80" fill="#1c1410" stroke="#8a6a24" stroke-width="3"/><rect x="167" y="67" width="50" height="66" fill="#3a2f28"/><path d="M174 133c2-18 10-24 18-24s16 6 18 24Z" fill="#222"/><path d="M186 110l6 8 6-8" fill="#efe9dc"/><path d="M190 112l2 14 2-14Z" fill="#2d5b44"/><circle cx="192" cy="92" r="11" fill="#d0b090"/><path d="M181 94q-1-6 2-9M203 94q1-6-2-9" stroke="#cfcfca" stroke-width="3" fill="none"/><ellipse cx="189" cy="83" rx="4" ry="1.6" fill="#fff" opacity=".3"/><path d="M186 99q3-2 6 0q3-2 6 0q-3 3-6 2q-3 1-6-2Z" fill="#e9e6df"/>` + EYES + NAMEPLATE,
    `<rect x="160" y="60" width="64" height="80" fill="#4a3a1a" stroke="#d9b45a" stroke-width="3"/><rect x="167" y="67" width="50" height="66" fill="#3b4a3a"/><path d="M174 133c2-18 10-24 18-24s16 6 18 24Z" fill="#1d2433"/><path d="M185 109l7 9 7-9Z" fill="#efe9dc"/><path d="M186 113l6 3-6 3ZM198 113l-6 3 6 3Z" fill="#8f2a2e"/><circle cx="192" cy="92" r="11" fill="#d6b494"/><path d="M181 90q3-14 11-14t11 14q-4-7-10-7-8 0-12 7Z" fill="#2a1d14"/><path d="M188 77q-2 4-1 7" stroke="#14100c" stroke-width=".8" fill="none"/><path d="M181 90v6M203 90v6" stroke="#2a1d14" stroke-width="2"/><path d="M187 99q5 2 10 0" stroke="#7a4a40" stroke-width="1.4" fill="none"/>` + EYES + NAMEPLATE,
    `<rect x="160" y="60" width="64" height="80" fill="#2a3a2a" stroke="#c9a24a" stroke-width="3"/><rect x="167" y="67" width="50" height="66" fill="#34404a"/><path d="M174 133c2-18 10-24 18-24s16 6 18 24Z" fill="#4a3a28"/><path d="M186 110l6 8 6-8" fill="#efe9dc"/><circle cx="192" cy="92" r="11" fill="#c8a98a"/><path d="M181 88q4-12 11-12t11 12q-4-6-11-6t-11 6Z" fill="#6a4a30"/><path d="M181 94q0 14 11 14t11-14q-4 6-11 6t-11-6Z" fill="#6a4a30"/><circle cx="187" cy="90" r="3.4" fill="none" stroke="#2a2118" stroke-width="1"/><circle cx="197" cy="90" r="3.4" fill="none" stroke="#2a2118" stroke-width="1"/><path d="M190.4 90h3.2" stroke="#2a2118"/>` + NAMEPLATE,
  ];
  const CANDLE_FLAME = '<path class="flame" d="M120 128q4 5 0 10q-4-5 0-10Z" fill="#ffcf6b"/>';
  const CANDLE_GLOW = '<circle cx="120" cy="134" r="16" fill="url(#st-candle)" class="glow"/>';
  const LAMP_GLOW = '<circle cx="150" cy="208" r="44" fill="url(#st-lamp)" class="glow"/>';
  const FIRE_GLOW = '<ellipse cx="74" cy="292" rx="40" ry="28" fill="url(#st-fire)" class="glow"/>';
  const FLAMES = ['<path class="flame" d="M54 296q8-20 14-6 6-24 12-4 6-14 12 8Z" fill="#ff8a3d" opacity=".9"/>', '<path class="flame slow" d="M62 296q4-10 8-3 4-12 8-1 4-7 6 4Z" fill="#ffd27a"/>'];
  const EMBERS = '<g fill="#ff8a3d"><circle cx="60" cy="298" r="2.2" opacity=".9"/><circle cx="68" cy="296" r="1.8" opacity=".6"/><circle cx="76" cy="299" r="2.4"/><circle cx="85" cy="297" r="1.8" opacity=".7"/><circle cx="92" cy="299" r="2" opacity=".5"/></g>';
  // flags of a look: noCandle (daylight: candle out), dimLamp (smaller lamp glow), embers (fire is only glowing embers, the paper in the fireplace stays)
  const studyFn = (L) => {
    let t = studyBase(L);
    if (L.noCandle) t = t.replace(CANDLE_FLAME, "").replace(CANDLE_GLOW, "");
    if (L.dimLamp) t = t.replace(LAMP_GLOW, LAMP_GLOW.replace('r="44"', 'r="26"'));
    if (L.embers) { for (const f of FLAMES) t = t.replace(f, ""); t = t.replace(FIRE_GLOW, FIRE_GLOW.replace('rx="40" ry="28"', 'rx="26" ry="12"')); t = t.replace('<path d="M48 300h52" stroke="#3a2618" stroke-width="5" stroke-linecap="round"/>', '<path d="M48 300h52" stroke="#3a2618" stroke-width="5" stroke-linecap="round"/>' + EMBERS); }
    if (L.pi && PORTRAITS[L.pi]) t = t.replace(PORTRAIT_RE, PORTRAITS[L.pi]);
    return t;
  };

  /* Looks of the study ("наряд" комнаты): same props in the same places, different window view, light and non-interactive decor.
     Auto pool (evening/night only): rain = the original (default, case 001), clear, fog. Other looks are chosen by the case (c.look):
     snow, snow-xmas, snow-still, morning, morning-snow, lights, summer-dusk, summer-day, shutters, sealed. Decor must never look like a clue
     (no cups, bottles, papers, letters, canes) and must stay off the hit zones and TOKEN_SPOTS. */
  const WIN = 'clip-path="url(#st-win)"';
  const grad = (id, stops) => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join("")}</linearGradient><rect x="256" y="50" width="76" height="150" fill="url(#${id})"/>`;
  const flakes = (n, c) => { let g = ""; for (let i = 0; i < n; i++) g += `<circle cx="${256 + ((i * 37) % 76)}" cy="${24 + ((i * 53) % 190)}" r="${(0.8 + ((i * 7) % 3) * 0.4).toFixed(1)}"/>`; return `<g ${WIN}><g class="snow" fill="${c}" opacity=".85">${g}</g></g>`; };
  const RAIN_D = "M262 40l-4 22M276 70l-4 22M290 44l-4 22M304 90l-4 22M318 56l-4 22M330 100l-4 22M268 120l-4 22M284 150l-4 22M298 126l-4 22M312 166l-4 22M326 140l-4 22M262 180l-4 22M290 196l-4 22M320 200l-4 22";
  const SKY = {
    rain: `<rect x="256" y="50" width="76" height="150" fill="#0f1a2e"/>
  <circle cx="304" cy="86" r="13" fill="#e8e2c4" opacity=".85"/>
  <g clip-path="url(#st-win)" stroke="#9fb4c8" stroke-opacity=".45"><g class="rain"><path d="M262 40l-4 22M276 70l-4 22M290 44l-4 22M304 90l-4 22M318 56l-4 22M330 100l-4 22M268 120l-4 22M284 150l-4 22M298 126l-4 22M312 166l-4 22M326 140l-4 22M262 180l-4 22M290 196l-4 22M320 200l-4 22"/></g></g>`,
    clear: grad("st-sky2", [[0, "#07122a"], [1, "#1b3358"]]) + `
  <g fill="#dfe8f5"><circle cx="266" cy="62" r=".9"/><circle cx="278" cy="78" r="1.1"/><circle cx="290" cy="58" r=".8"/><circle cx="270" cy="104" r=".9"/><circle cx="284" cy="124" r="1"/><circle cx="326" cy="68" r=".9"/><circle cx="320" cy="116" r="1.1"/><circle cx="262" cy="140" r=".8"/></g>
  <circle cx="306" cy="94" r="26" fill="#e8e2c4" opacity=".12"/><circle cx="306" cy="94" r="15" fill="#f1ecd2"/>
  <g ${WIN}><path d="M256 200v-26l12-8 10 5 14-9 12 7 14-5 14 6v30Z" fill="#050b18"/><path d="M286 172h5v-9h-5Z" fill="#050b18"/></g>`,
    fog: grad("st-sky3", [[0, "#2c3150"], [.6, "#8d7b7c"], [1, "#d1a07a"]]) + `
  <circle cx="292" cy="150" r="16" fill="#f3c98f" opacity=".5"/>
  <g ${WIN}><path d="M256 200v-38l10-4 6 8 12-6 8 4 12-10 10 6 12-8v48Z" fill="#1a1620"/><linearGradient id="st-haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8cfc4" stop-opacity="0"/><stop offset=".55" stop-color="#d8cfc4" stop-opacity=".78"/><stop offset="1" stop-color="#e6ded3" stop-opacity=".92"/></linearGradient><rect x="256" y="96" width="76" height="104" fill="url(#st-haze)"/><g class="glow"><rect x="256" y="118" width="76" height="14" fill="#e9dccb" fill-opacity=".34"/><rect x="256" y="152" width="76" height="22" fill="#e9dccb" fill-opacity=".4"/></g></g>`,
    snow: grad("st-sky4", [[0, "#0d1626"], [1, "#34455e"]]) + `
  <circle cx="304" cy="88" r="16" fill="#d9e2ee" opacity=".16"/>
  <g ${WIN}><path d="M256 200v-30l14-9 12 6 14-8 14 7 12-6 10 4v36Z" fill="#e8eef5"/><path d="M256 200v-22l14-9 12 6 14-8 14 7 12-6 10 4v28Z" fill="#14202e"/></g>` + flakes(34, "#fff") + `<rect x="254" y="192" width="80" height="9" rx="3" fill="#f2f6fa"/>`,
    morning: grad("st-sky5", [[0, "#8fb6d4"], [.6, "#e4d3bd"], [1, "#f3d9aa"]]) + `
  <circle cx="280" cy="150" r="24" fill="#fff4c9" opacity=".3"/><circle cx="280" cy="150" r="11" fill="#fff4c9"/><ellipse cx="312" cy="82" rx="18" ry="5" fill="#fff" opacity=".6"/><ellipse cx="294" cy="100" rx="12" ry="3.5" fill="#fff" opacity=".5"/>
  <g ${WIN}><path d="M256 200v-34l12-6 8 6 14-8 6 4 14-10 12 6 10-4v46Z" fill="#42584a"/><path d="M316 160v-12h5v10Z" fill="#33433a"/></g>`,
    "morning-snow": grad("st-sky6", [[0, "#b8c4d0"], [1, "#eef0f2"]]) + `
  <g ${WIN}><path d="M256 200v-32l12-6 8 6 14-8 6 4 14-10 12 6 10-4v44Z" fill="#fbfcfd"/><path d="M256 200v-24l12-6 8 6 14-8 6 4 14-10 12 6 10-4v36Z" fill="#8c98a6"/></g>` + flakes(26, "#8c98a6") + `<rect x="254" y="192" width="80" height="9" rx="3" fill="#f6f8fa"/>`,
    lights: grad("st-sky7", [[0, "#0a1224"], [1, "#1c2a48"]]) + `
  <g ${WIN}><rect x="262" y="108" width="74" height="100" fill="#090e1b"/>
  <g fill="#f6d27a" opacity=".9"><rect x="268" y="120" width="8" height="10"/><rect x="282" y="120" width="8" height="10" opacity=".4"/><rect x="296" y="120" width="8" height="10"/><rect x="310" y="120" width="8" height="10"/><rect x="324" y="120" width="8" height="10" opacity=".5"/><rect x="268" y="140" width="8" height="10" opacity=".5"/><rect x="282" y="140" width="8" height="10"/><rect x="296" y="140" width="8" height="10" opacity=".4"/><rect x="310" y="140" width="8" height="10"/><rect x="324" y="140" width="8" height="10"/><rect x="268" y="160" width="8" height="10"/><rect x="282" y="160" width="8" height="10" opacity=".5"/><rect x="296" y="160" width="8" height="10"/><rect x="310" y="160" width="8" height="10" opacity=".4"/><rect x="324" y="160" width="8" height="10"/></g>
  <path d="M256 96Q294 116 332 92" fill="none" stroke="#d1a94e" stroke-opacity=".6"/><g class="glow"><circle cx="268" cy="101" r="2.4" fill="#f6d27a"/><circle cx="282" cy="106" r="2.4" fill="#e7a2b9"/><circle cx="296" cy="108" r="2.4" fill="#8cc79a"/><circle cx="310" cy="106" r="2.4" fill="#f6d27a"/><circle cx="324" cy="99" r="2.4" fill="#e7a2b9"/></g></g>`,
    "summer-dusk": grad("st-sky8", [[0, "#3a2f5a"], [.55, "#c46a52"], [1, "#f0b070"]]) + `
  <circle cx="294" cy="168" r="17" fill="#ffd9a0"/>
  <g ${WIN}><path d="M256 200v-30q8-14 18-4 6-12 18-2 10-14 22-2 10-6 18 4v34Z" fill="#241a2a"/></g>
  <path d="M270 90q4-4 8 0M281 100q3-3 6 0M316 82q3-3 6 0" stroke="#241a2a" fill="none" stroke-width="1.4"/>`,
    "summer-day": grad("st-sky9", [[0, "#6fb0e4"], [1, "#d4e9f6"]]) + `
  <ellipse cx="282" cy="82" rx="16" ry="5" fill="#fff" opacity=".9"/><ellipse cx="314" cy="104" rx="14" ry="4" fill="#fff" opacity=".8"/>
  <g ${WIN}><path d="M256 200v-30q10-9 20 0 10-12 22-1 10-8 20 0 8-6 14 4v28Z" fill="#3f8a4a"/><path d="M256 200v-16q14-6 24 2 12-6 24 0 14-6 28 2v12Z" fill="#2d6b3a"/><circle cx="270" cy="182" r="2.4" fill="#e7a2b9"/><circle cx="296" cy="186" r="2.4" fill="#f3d16a"/><circle cx="318" cy="180" r="2.4" fill="#e7a2b9"/>
  <path d="M308 50q-14 30-6 60t-4 90h34V50Z" fill="#f4eede" opacity=".5"/></g>`,
    shutters: `<rect x="256" y="50" width="76" height="150" fill="#0a0e14"/>
  <rect x="258" y="52" width="35" height="146" fill="#3b2a1a"/><rect x="295" y="52" width="35" height="146" fill="#3b2a1a"/>
  <path d="M258 66h35M258 80h35M258 94h35M258 108h35M258 136h35M258 150h35M258 164h35M258 178h35M295 66h35M295 80h35M295 94h35M295 108h35M295 136h35M295 150h35M295 164h35M295 178h35" stroke="#241a10" stroke-width="1.6"/>
  <rect x="256" y="121" width="76" height="6" fill="#1a1a1a"/><circle cx="294" cy="124" r="3" fill="#8a8a86"/>
  <g ${WIN} stroke="#9fb4c8" stroke-opacity=".5"><g class="rain"><path d="${RAIN_D}"/></g></g>`,
    sealed: grad("st-sky5", [[0, "#8fb6d4"], [.6, "#e4d3bd"], [1, "#f3d9aa"]]) + `
  <g ${WIN}><path d="M256 200v-34l12-6 8 6 14-8 6 4 14-10 12 6 10-4v46Z" fill="#42584a"/></g>
  <g fill="#e8dcc0" opacity=".9"><rect x="256" y="50" width="76" height="6"/><rect x="256" y="194" width="76" height="6"/><rect x="256" y="50" width="6" height="150"/><rect x="326" y="50" width="6" height="150"/><rect x="291" y="50" width="6" height="150"/><rect x="256" y="122" width="76" height="6"/><rect x="258" y="86" width="72" height="5" transform="rotate(14 294 88)"/><rect x="258" y="160" width="72" height="5" transform="rotate(-14 294 162)"/></g>`,
  };
  SKY["snow-still"] = SKY.snow.replace(/<g clip-path="url\(#st-win\)"><g class="snow"[\s\S]*?<\/g><\/g>/, ""); // fresh snow, the snowfall has stopped
  const D_SHELF = `<rect x="20" y="98" width="88" height="5" fill="#4a3220"/><path d="M24 103l4 9M100 103l-4 9" stroke="#4a3220" stroke-width="2"/>
  <g><rect x="24" y="78" width="6" height="20" fill="#7d2629"/><rect x="31" y="81" width="5" height="17" fill="#2d6b52"/><rect x="37" y="77" width="7" height="21" fill="#c9a24a"/><rect x="45" y="82" width="5" height="16" fill="#3a4a6a"/><rect x="51" y="79" width="6" height="19" fill="#8a6a24"/><path d="M58 98l5-21 5 1-5 20Z" fill="#6a2a2c"/><rect x="72" y="80" width="6" height="18" fill="#2d5b6b"/><rect x="79" y="76" width="7" height="22" fill="#7a4a24"/><rect x="87" y="82" width="5" height="16" fill="#c9a24a" opacity=".8"/></g>`;
  const D_FRAME = `<rect x="116" y="60" width="34" height="28" fill="#3a2a18" stroke="#c9a24a" stroke-width="2"/><rect x="120" y="64" width="26" height="20" fill="#1e3a4a"/><path d="M120 81l7-8 6 5 5-4 8 7v3h-26Z" fill="#2d5b44"/><circle cx="138" cy="70" r="2.5" fill="#e8e2c4"/>`;
  const D_GLOBE = `<path d="M344 376v8M338 386h12" stroke="#7a6a3a" stroke-width="2"/><circle cx="344" cy="368" r="10" fill="#234a58"/><path d="M336 365q5-4 8 0t7-2M337 372q5 2 9-1" stroke="#8a7a44" stroke-opacity=".6" fill="none"/><path d="M334 361a11 11 0 0 1 20 0" stroke="#7a6a3a" stroke-width="1.3" fill="none"/>`;
  const D_PRINTS = `<rect x="22" y="62" width="30" height="38" fill="#3a2a18" stroke="#c9a24a" stroke-width="1.6"/><rect x="26" y="66" width="22" height="30" fill="#e2d7b8"/><path d="M37 94V78M37 84q-8-3-9-10M37 80q8-3 9-10M37 74q-4-6 0-10" stroke="#3f7a52" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <rect x="60" y="62" width="30" height="38" fill="#3a2a18" stroke="#c9a24a" stroke-width="1.6"/><rect x="64" y="66" width="22" height="30" fill="#e2d7b8"/><path d="M75 94V80M75 86q8-2 10-9M75 82q-8-2-10-9" stroke="#8a4a2a" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="75" cy="76" r="3.4" fill="#b3263a"/>`;
  const D_FERN = `<path d="M330 374h24l-3 14h-18Z" fill="#8a4a2a"/><path d="M342 374q-14-18-24-12M342 374q-4-26 2-36M342 374q14-18 24-10M342 374q-10-12-16-26M342 374q10-14 14-26" stroke="#3f7a52" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
  const D_WREATH = `<circle cx="38" cy="82" r="15" fill="none" stroke="#2f6b46" stroke-width="7"/><circle cx="38" cy="82" r="15" fill="none" stroke="#b3263a" stroke-width="1.8" stroke-dasharray="1.5 6"/><path d="M32 97l6-6 6 6-6 3Z" fill="#b3263a"/>`;
  const D_MAP = `<rect x="116" y="60" width="34" height="28" fill="#3a2a18" stroke="#c9a24a" stroke-width="2"/><rect x="120" y="64" width="26" height="20" fill="#d9c9a0"/><path d="M122 80q6-8 10-2t12-6M124 70q8 2 12-1" stroke="#7a5a30" fill="none"/>`;
  // Twelfth Night (case 050): a swag of gold stars along the top; plum wall, gold rug, night with a moon. Decoration only, off the zones.
  const D_TWELFTH = `<path d="M0 16Q50 34 100 18T200 20T240 14" fill="none" stroke="#c9a24a" stroke-width="2" stroke-opacity=".8"/>${[16, 52, 88, 124, 160, 196].map((x, i) => `<path d="M${x} ${24 + (i % 2) * 6}l3 6.4 7 .9-5 4.8 1.3 7-6.3-3.4-6.3 3.4 1.3-7-5-4.8 7-.9Z" fill="#f3d16a"/>`).join("")}`;
  const FIRE_DIM = `<path d="M38 300v-86q36-32 72 0v86Z" fill="#0b0b0a" opacity=".5"/>`;
  const STUDY_LOOKS = {
    rain: { wall: ["#1c372e", "#24453a"], wains: "#14271f", rug: "#5a1f22", curt: "#7d2629", decor: "", fireDim: "", sky: SKY.rain },
    clear: { wall: ["#1a2f3b", "#223f4e"], wains: "#101f28", rug: "#2a4a5c", curt: "#35507a", sky: SKY.clear, decor: D_SHELF + D_FRAME + D_GLOBE, fireDim: FIRE_DIM },
    fog: { wall: ["#3b3226", "#4b3f2e"], wains: "#251e15", rug: "#3b4a2c", curt: "#8f6a2a", sky: SKY.fog, decor: D_PRINTS + D_FERN, fireDim: "" },
    snow: { wall: ["#22352f", "#2c443c"], wains: "#17261f", rug: "#4a2230", curt: "#5a6a7e", sky: SKY.snow, decor: D_SHELF + D_FRAME, fireDim: "" },
    "snow-xmas": { wall: ["#22352f", "#2c443c"], wains: "#17261f", rug: "#4a2230", curt: "#5a6a7e", sky: SKY.snow, decor: D_WREATH + D_FRAME, fireDim: "" },
    morning: { wall: ["#2b4d40", "#35604f"], wains: "#1d362c", rug: "#6a3a30", curt: "#c9a35a", sky: SKY.morning, decor: D_MAP, fireDim: FIRE_DIM, noCandle: true, dimLamp: true },
    "morning-snow": { wall: ["#2a4440", "#34554f"], wains: "#1c332f", rug: "#4a3a4a", curt: "#8a97a6", sky: SKY["morning-snow"], decor: D_MAP, fireDim: "", noCandle: true, dimLamp: true },
    lights: { wall: ["#1c372e", "#24453a"], wains: "#14271f", rug: "#5a1f22", curt: "#7a3a52", sky: SKY.lights, decor: D_PRINTS, fireDim: "" },
    "summer-dusk": { wall: ["#34402c", "#3f4d34"], wains: "#222a1c", rug: "#4a3a22", curt: "#b0764a", sky: SKY["summer-dusk"], decor: D_FERN + D_FRAME, fireDim: "", embers: true },
    "summer-day": { wall: ["#2f5a46", "#3a6a54"], wains: "#20402f", rug: "#7a4a3a", curt: "#d9c9a0", sky: SKY["summer-day"], decor: D_SHELF + D_FERN, fireDim: "", noCandle: true, dimLamp: true, embers: true },
    twelfth: { wall: ["#2b2340", "#372d52"], wains: "#1c162c", rug: "#7a5a22", curt: "#2d5b6a", sky: SKY.clear, decor: D_TWELFTH + D_FRAME, fireDim: "" },
    shutters: { wall: ["#1c372e", "#24453a"], wains: "#14271f", rug: "#5a1f22", curt: "#5a1f22", sky: SKY.shutters, decor: "", fireDim: "" },
    sealed: { wall: ["#2b4a3d", "#355a4a"], wains: "#1c3329", rug: "#6a3a30", curt: "#8a6a40", sky: SKY.sealed, decor: D_MAP, fireDim: "", noCandle: true, dimLamp: true },
  };
  STUDY_LOOKS["snow-still"] = Object.assign({}, STUDY_LOOKS.snow, { sky: SKY["snow-still"] });
  const study = studyFn(STUDY_LOOKS.rain);

  /* ------------------------------ TRAIN ------------------------------ */
  const trainBase = (L) => `
  <defs>
    <linearGradient id="tr-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1424"/><stop offset="1" stop-color="#1b2a44"/></linearGradient>
    <linearGradient id="tr-wood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${L.wood[0]}"/><stop offset=".5" stop-color="${L.wood[1]}"/><stop offset="1" stop-color="${L.wood[0]}"/></linearGradient>
    <radialGradient id="tr-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f6d27a" stop-opacity=".6"/><stop offset="1" stop-color="#f6d27a" stop-opacity="0"/></radialGradient>
    <clipPath id="tr-win"><rect x="96" y="58" width="168" height="124" rx="10"/></clipPath>
  </defs>
  <rect width="360" height="400" fill="url(#tr-wood)"/>
  <path d="M0 44h360M0 196h360" stroke="#c9a24a" stroke-opacity=".5" stroke-width="2"/>
  <g fill="none" stroke="#6b4228" stroke-width="1.2"><path d="M20 70l20 20-20 20-20-20ZM340 70l20 20-20 20-20-20Z"/><path d="M20 130l14 14-14 14-14-14ZM340 130l14 14-14 14-14-14Z"/></g>
  <rect x="88" y="50" width="184" height="140" rx="14" fill="#2a170c" stroke="#c9a24a" stroke-width="3"/>
  ${L.win}
  <path d="M180 58v124" stroke="#2a170c" stroke-width="4"/>
  ${P("window", "", 180, 110, 46, `<rect class="hit" x="98" y="60" width="164" height="100"/>`)}
  <rect x="30" y="8" width="300" height="6" fill="#c9a24a"/><path d="M40 14v22M100 14v22M160 14v22M220 14v22M280 14v22M320 14v22" stroke="#c9a24a" stroke-width="2"/><rect x="30" y="34" width="300" height="4" fill="#c9a24a"/>
  ${P("suitcase", `<rect x="52" y="-2" width="78" height="36" rx="4" fill="#7a4a24"/><path d="M52 10h78M52 22h78" stroke="#5a3418" stroke-width="2"/><rect x="84" y="-6" width="14" height="6" rx="2" fill="none" stroke="#c9a24a" stroke-width="2"/><rect x="62" y="14" width="10" height="8" fill="#e9dfc6"/>`, 91, 16, 26, `<rect class="hit" x="48" y="-4" width="86" height="42"/>`)}
  ${P("hatbox", `<ellipse cx="266" cy="10" rx="24" ry="6" fill="#e7a2b9"/><path d="M242 10v22q24 10 48 0V10" fill="#d98aa2"/><path d="M242 22q24 8 48 0" stroke="#9c3434" stroke-width="2" fill="none"/>`, 266, 18, 22)}
  <circle cx="44" cy="118" r="26" fill="url(#tr-lamp)" class="glow"/><circle cx="316" cy="118" r="26" fill="url(#tr-lamp)" class="glow"/>
  <path d="M310 108h12l-3 16h-6Z" fill="#f2d7a0" stroke="#c9a24a"/>
  ${P("lamp", `<path d="M38 108h12l-3 16h-6Z" fill="#f2d7a0" stroke="#c9a24a"/><rect x="42" y="124" width="4" height="10" fill="#c9a24a"/><path d="M34 136h20" stroke="#c9a24a" stroke-width="3"/>`, 44, 121, 17)}
  ${P("door", `<rect x="326" y="48" width="34" height="146" fill="#3a2010" stroke="#c9a24a" stroke-width="2"/><rect x="334" y="60" width="20" height="50" fill="#1b2a44" stroke="#c9a24a"/><circle cx="332" cy="130" r="3" fill="#c9a24a"/>`, 343, 110, 28, `<rect class="hit" x="324" y="46" width="36" height="150"/>`)}
  <rect x="112" y="196" width="136" height="10" rx="3" fill="#6b3a1e" stroke="#c9a24a"/>
  <path d="M180 206v60M160 266h40" stroke="#c9a24a" stroke-width="4"/>
  <rect x="116" y="188" width="128" height="8" fill="#efe9dc" opacity=".85"/>
  ${L.decor}
  ${P("glass", `<path d="M138 168h18l-3 14h-12Z" fill="#9c3434" fill-opacity=".35" stroke="#e9e4d4" stroke-width="1.2"/><path d="M140 176h14l-1.5 6h-11Z" fill="#9c3434"/><path d="M147 182v10M141 192h12" stroke="#e9e4d4" stroke-width="1.4"/>`, 147, 180, 15)}
  ${P("watch", `<circle cx="180" cy="190" r="7" fill="#d1a94e"/><circle cx="180" cy="190" r="5" fill="#f4eee0"/><path d="M180 190v-3.5M180 190l2.5 1.5" stroke="#1a140a" stroke-width="1"/><path d="M180 183q-6-8 4-12" stroke="#d1a94e" fill="none"/>`, 180, 188, 12)}
  ${P("bottle", `<path d="M206 192v-22q0-6 4-8v-8h6v8q4 2 4 8v22Z" fill="#1f4a32"/><rect x="208" y="174" width="10" height="9" fill="#efe9dc"/><path class="slosh" d="M206 186h14" stroke="#0e2a1c" stroke-width="2"/>`, 213, 176, 17)}
  <path d="M0 210h96v120H0Z" fill="${L.seat}"/><path d="M0 208h100v12H0Z" fill="#3a6b52"/>
  <path d="M264 210h96v120h-96Z" fill="${L.seat}"/><path d="M260 208h100v12H260Z" fill="#3a6b52"/>
  <g stroke="#24493a" stroke-width="1.2"><path d="M24 220v110M48 220v110M72 220v110M288 220v110M312 220v110M336 220v110"/></g>
  ${P("newspaper", `<rect x="22" y="232" width="46" height="30" fill="#e9e4d4" transform="rotate(-8 45 247)"/><path d="M28 238h34M28 244h20M28 250h30M28 256h24" stroke="#7a7266" stroke-width="1.5" transform="rotate(-8 45 247)"/>`, 45, 247, 24)}
  ${P("gloves", `<path d="M56 296q-2-12 6-14l4 8 4-10 4 10 4-6q4 6-2 14Z" fill="#efe9dc"/><path d="M62 304q-2-10 6-12l4 8 4-10 4 10 4-6q4 6-2 12Z" fill="#e2d9c4"/>`, 70, 298, 17)}
  ${P("cigcase", `<rect x="288" y="246" width="26" height="17" rx="3" fill="#c9a24a"/><path d="M291 254h20" stroke="#8a6a24"/><circle cx="301" cy="250" r="2" fill="#8a6a24"/>`, 301, 254, 15)}
  <rect y="330" width="360" height="70" fill="${L.carpet}"/>
  <path d="M0 340h360M0 390h360" stroke="#c9a24a" stroke-opacity=".35" stroke-dasharray="6 6"/>
  ${P("ticket", `<rect x="186" y="362" width="30" height="16" fill="#e9dfc6" transform="rotate(12 201 370)"/><path d="M192 366h18M192 372h10" stroke="#9c3434" stroke-width="1.4" transform="rotate(12 201 370)"/>`, 201, 370, 18)}`;

  /* Looks of the train compartment: same props in the same places, different view in the window, daylight and fittings.
     Auto pool (night only): night (the original moonlit night, case default), stars, farm. Others come from the case table:
     snow, rain, dusk, day, pines, winter-day, station, sooty. Window content is clipped to the window; decor stays off the hit zones. */
  const TWIN = '<rect x="96" y="58" width="168" height="124" rx="10"';
  const trGrad = (id, stops) => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join("")}</linearGradient>${TWIN} fill="url(#${id})"/>`;
  const trTile = (d, fill, cls = "scroll-slow") => `<g class="${cls}"><path d="${d}" fill="${fill}"/><path d="${d}" fill="${fill}" transform="translate(360 0)"/></g>`;
  const POLES = `<g class="scroll-fast" stroke="#0a0f12" stroke-width="3"><path d="M120 182v-70M300 182v-70M480 182v-70"/><path d="M110 120h20M290 120h20M470 120h20" stroke-width="2"/></g>`;
  const trFlakes = (n, c) => { let g = ""; for (let i = 0; i < n; i++) g += `<circle cx="${96 + ((i * 41) % 168)}" cy="${40 + ((i * 59) % 150)}" r="${(0.9 + ((i * 7) % 3) * 0.45).toFixed(1)}"/>`; return `<g clip-path="url(#tr-win)"><g class="snow" fill="${c}" opacity=".9">${g}</g></g>`; };
  const HILLS_N = "M60 182l40-50 30 30 40-60 50 60 30-30 50 50 40-40 40 40v20H60Z";
  const FIELD_D = "M60 182v-22q30-14 60-4t60-2 60 6 60-6 60 4v24Z";
  const PINES = (c) => { let d = ""; for (let i = 0; i < 9; i++) { const x = 64 + i * 40, h = 56 + ((i * 17) % 26); d += `M${x} 182l12-${h}l12 ${h}Z`; } return trTile(d + "M60 182h360v-6H60Z", c); };
  const TWL = {
    night: `  <rect x="96" y="58" width="168" height="124" rx="10" fill="url(#tr-sky)"/>
  <g clip-path="url(#tr-win)">
    <circle cx="230" cy="82" r="10" fill="#efe6c8"/>
    <g fill="#cfd7e6" opacity=".6"><circle cx="120" cy="72" r=".9"/><circle cx="160" cy="66" r="1"/><circle cx="200" cy="96" r=".8"/></g>
    <g class="scroll-slow"><path d="M60 182l40-50 30 30 40-60 50 60 30-30 50 50 40-40 40 40 40-60 50 60v20H60Z" fill="#14222e"/><path d="M420 182l40-50 30 30 40-60 50 60 30-30 50 50 40-40 40 40v20H420Z" fill="#14222e"/></g>
    <g class="scroll-fast" stroke="#0a0f12" stroke-width="3"><path d="M120 182v-70M300 182v-70M480 182v-70"/><path d="M110 120h20M290 120h20M470 120h20" stroke-width="2"/></g>
  </g>`,
    stars: trGrad("tr-sky2", [[0, "#050a18"], [1, "#16233d"]]) + `
  <g clip-path="url(#tr-win)"><g fill="#e4eaf5"><circle cx="112" cy="72" r="1"/><circle cx="134" cy="94" r=".8"/><circle cx="158" cy="68" r="1.2"/><circle cx="186" cy="88" r=".9"/><circle cx="208" cy="70" r="1"/><circle cx="232" cy="96" r="1.2"/><circle cx="250" cy="76" r=".8"/><circle cx="120" cy="112" r=".8"/><circle cx="224" cy="116" r=".9"/><circle cx="170" cy="118" r="1"/></g>
  ${trTile(FIELD_D, "#0b1220")}${POLES}</g>`,
    farm: trGrad("tr-sky3", [[0, "#0a1020"], [1, "#22304a"]]) + `
  <g clip-path="url(#tr-win)"><circle cx="150" cy="80" r="9" fill="#d9dccb" opacity=".8"/><path d="M96 140q40-8 80 0t90-4v46H96Z" fill="#1a2430" opacity=".6"/>${trTile(FIELD_D, "#0e1722")}
  ${POLES}</g>`,
    snow: trGrad("tr-sky4", [[0, "#0d1626"], [1, "#34455e"]]) + `
  <g clip-path="url(#tr-win)"><circle cx="230" cy="82" r="14" fill="#d9e2ee" opacity=".16"/>${trTile("M60 182L60 160Q90 138 120 156T180 150T240 158T300 146T360 154T420 160L420 182Z", "#e8eef5")}${trTile("M60 182L60 170Q90 156 120 168T180 164T240 170T300 160T360 168T420 170L420 182Z", "#1b2a3a")}${POLES}</g>` + trFlakes(34, "#fff"),
    rain: trGrad("tr-sky5", [[0, "#0a1020"], [1, "#1c2a3a"]]) + `
  <g clip-path="url(#tr-win)">${trTile(FIELD_D, "#0b141c")}${POLES}<g stroke="#9fb4c8" stroke-opacity=".5"><g class="rain"><path d="M100 30l-4 22M124 70l-4 22M148 40l-4 22M172 96l-4 22M196 56l-4 22M220 110l-4 22M244 46l-4 22M108 120l-4 22M136 150l-4 22M164 128l-4 22M192 170l-4 22M222 150l-4 22M252 130l-4 22M118 176l-4 22M236 190l-4 22"/></g></g></g>
  <g clip-path="url(#tr-win)" fill="#b9c8d6" opacity=".5"><circle cx="124" cy="92" r="1.8"/><circle cx="168" cy="122" r="2.2"/><circle cx="210" cy="78" r="1.6"/><circle cx="238" cy="140" r="2"/></g>`,
    dusk: trGrad("tr-sky6", [[0, "#3a2f5a"], [.55, "#c46a52"], [1, "#f0b070"]]) + `
  <g clip-path="url(#tr-win)"><circle cx="190" cy="150" r="17" fill="#ffd9a0"/>${trTile(FIELD_D, "#2a1f2e")}${POLES}</g>`,
    day: trGrad("tr-sky7", [[0, "#6fb0e4"], [1, "#d4e9f6"]]) + `
  <g clip-path="url(#tr-win)"><ellipse cx="140" cy="84" rx="18" ry="5" fill="#fff" opacity=".9"/><ellipse cx="220" cy="102" rx="14" ry="4" fill="#fff" opacity=".8"/>${trTile("M60 182v-24q30-16 60-6t60-4 60 8 60-8 60 4v30Z", "#5aa05a")}${trTile("M60 182v-12q30-8 60-2t60-2 60 4 60-4 60 2v14Z", "#3f8a4a")}<path d="M96 168h168" stroke="#7a6a4a" stroke-width="1" opacity=".5"/>${POLES.replace("#0a0f12", "#2a2a22")}</g>`,
    pines: trGrad("tr-sky8", [[0, "#7ab0d0"], [1, "#d8e6df"]]) + `
  <g clip-path="url(#tr-win)">${PINES("#2d5a3a")}${PINES("#1e4a2c").replace("scroll-slow", "scroll-fast")}</g>`,
    "winter-day": trGrad("tr-sky9", [[0, "#b8c8d6"], [1, "#eef2f4"]]) + `
  <g clip-path="url(#tr-win)">${trTile("M60 182v-20q30-12 60-4t60-2 60 6 60-6 60 2v24Z", "#f4f7f9")}${trTile("M60 182l12-40 12 40ZM130 182l10-34 10 34ZM210 182l12-44 12 44ZM290 182l10-36 10 36Z", "#8a98a4")}</g>
  <g clip-path="url(#tr-win)" fill="#fff" opacity=".78"><path d="M96 58h168v16q-16 8-30 0t-34 6-32-4-36 6-36-4V58Z"/><path d="M96 182v-26q10-6 20 0t6 26ZM264 182v-30q-12-6-22 0t-4 30Z"/><circle cx="128" cy="100" r="2"/><circle cx="214" cy="120" r="1.6"/><circle cx="244" cy="96" r="1.8"/></g>`,
    station: trGrad("tr-sky10", [[0, "#0a1224"], [1, "#1c2a48"]]) + `
  <g clip-path="url(#tr-win)"><rect x="96" y="132" width="168" height="50" fill="#0b101c"/><rect x="96" y="150" width="168" height="6" fill="#2a2a30"/><g class="scroll-fast"><g fill="#f6d27a"><rect x="116" y="104" width="4" height="46"/><rect x="236" y="104" width="4" height="46"/><rect x="356" y="104" width="4" height="46"/><rect x="476" y="104" width="4" height="46"/></g><g class="glow"><circle cx="118" cy="102" r="7" fill="#f6d27a" opacity=".7"/><circle cx="238" cy="102" r="7" fill="#f6d27a" opacity=".7"/><circle cx="358" cy="102" r="7" fill="#f6d27a" opacity=".7"/><circle cx="478" cy="102" r="7" fill="#f6d27a" opacity=".7"/></g></g>
  <rect x="140" y="112" width="52" height="22" fill="#14192a"/><rect x="146" y="118" width="40" height="8" fill="#f6d27a" opacity=".7"/></g>`,
    sooty: trGrad("tr-sky11", [[0, "#6fb0e4"], [1, "#d4e9f6"]]) + `
  <g clip-path="url(#tr-win)">${trTile("M60 182v-24q30-16 60-6t60-4 60 8 60-8 60 4v30Z", "#5aa05a")}</g>
  <g clip-path="url(#tr-win)" fill="#1a1612"><path d="M96 58h168v22q-30 14-50 2t-50 10-40-6-28 6V58Z" opacity=".78"/><path d="M96 182v-30q16-10 30-2t8 32Z" opacity=".7"/><path d="M264 182v-34q-18-10-34 0t-10 34Z" opacity=".7"/><ellipse cx="150" cy="118" rx="22" ry="8" opacity=".35"/><ellipse cx="214" cy="140" rx="26" ry="9" opacity=".3"/></g>`,
    alps: trGrad("tr-sky12", [[0, "#0d1626"], [1, "#3a4c68"]]) + `
  <g clip-path="url(#tr-win)"><circle cx="150" cy="78" r="12" fill="#d9e2ee" opacity=".2"/>${trTile("M60 182L90 96L110 126L132 66L168 146L192 120L232 170L260 134L296 176L320 146L360 168L420 182V202H60Z", "#f1f5fa")}${trTile("M60 182L90 120L110 146L132 100L168 160L192 144L232 176L260 158L296 180L320 164L360 176L420 182V202H60Z", "#1c2b3c")}${POLES}</g>` + trFlakes(14, "#fff"),
    snowbound: trGrad("tr-sky13", [[0, "#0a1222"], [1, "#27364f"]]) + `
  <g clip-path="url(#tr-win)"><circle cx="226" cy="80" r="11" fill="#d9e2ee" opacity=".22"/><path d="M96 182v-30q30-12 60-6t60-6 48 8v34Z" fill="#e8eef5"/><path d="M96 182v-18q40-10 72-4t96 0v22Z" fill="#cfd9e6"/><g stroke="#0a0f16" stroke-width="3"><path d="M138 164v-52M222 164v-48"/><path d="M128 120h20M212 124h20" stroke-width="2"/></g><g fill="#f6d27a" opacity=".85"><rect x="180" y="150" width="5" height="4"/></g><g fill="#5a6a82" opacity=".95"><ellipse cx="112" cy="171" rx="2.6" ry="1.3"/><ellipse cx="125" cy="174" rx="2.6" ry="1.3"/><ellipse cx="138" cy="171" rx="2.6" ry="1.3"/><ellipse cx="151" cy="174" rx="2.6" ry="1.3"/><ellipse cx="164" cy="171" rx="2.6" ry="1.3"/><ellipse cx="177" cy="174" rx="2.6" ry="1.3"/><ellipse cx="190" cy="171" rx="2.6" ry="1.3"/><ellipse cx="203" cy="174" rx="2.6" ry="1.3"/><ellipse cx="216" cy="171" rx="2.6" ry="1.3"/><ellipse cx="229" cy="174" rx="2.6" ry="1.3"/><ellipse cx="242" cy="171" rx="2.6" ry="1.3"/></g></g>` + trFlakes(10, "#fff"),
    "snow-village": trGrad("tr-sky14", [[0, "#0d1626"], [1, "#2e3d58"]]) + `
  <g clip-path="url(#tr-win)">${trTile("M60 182v-6h30v-14l14-12 14 12v14h40v-18l14-12 14 12v18h60v-14l14-12 14 12v14h50v-10l12-10 12 10v10h40v6Z", "#e8eef5", "scroll-slow")}${trTile("M60 182v-6h30v-8l14-8 14 8v8h40v-12l14-8 14 8v12h60v-8l14-8 14 8v8h50v-4l12-6 12 6v4h40v6Z", "#18222f", "scroll-slow")}<g class="scroll-slow"><g fill="#f6d27a"><rect x="98" y="166" width="5" height="5"/><rect x="190" y="164" width="5" height="5"/><rect x="298" y="168" width="5" height="5"/><rect x="458" y="166" width="5" height="5"/><rect x="550" y="164" width="5" height="5"/><rect x="658" y="168" width="5" height="5"/></g></g>${POLES}</g>` + trFlakes(26, "#fff"),
  };
  const WOOD = ["#4a2a18", "#5b3520"], WOOD_L = ["#5a3a24", "#6b4630"];
  const D_CURT = `<path d="M92 52h-8q-4 40-2 78 6 4 12 0z" fill="#7d2629"/><path d="M268 52h8q4 40 2 78-6 4-12 0z" fill="#7d2629"/>`;
  // Small posy in a wall bracket between the window and the door (never on the table: next to the glass and bottle it reads as a vial).
  const D_FLOWER = `<path d="M284 124q-2-9 0-12h12q2 3 0 12Z" fill="#c9a24a" stroke="#8a6a24" stroke-width=".8"/><path d="M290 112v-10M290 108q-6-3-8-9M290 106q6-3 8-9" stroke="#3f7a52" stroke-width="1.6" fill="none"/><circle cx="282" cy="97" r="3" fill="#e7a2b9"/><circle cx="298" cy="97" r="3" fill="#f3d16a"/><circle cx="290" cy="99" r="3" fill="#efe6cf"/>`;
  const TRAIN_LOOKS = {
    night: { wood: WOOD, seat: "#2d5b44", carpet: "#5a1f22", decor: "", win: TWL.night },
    stars: { wood: WOOD, seat: "#2d5b44", carpet: "#5a1f22", decor: D_CURT, win: TWL.stars },
    farm: { wood: ["#4a2a1a", "#5d3a22"], seat: "#2a4a5c", carpet: "#4a2a2a", decor: D_FLOWER, win: TWL.farm },
    snow: { wood: WOOD, seat: "#2d5b44", carpet: "#5a1f22", decor: D_CURT, win: TWL.snow },
    rain: { wood: ["#42261a", "#52301e"], seat: "#2a4a44", carpet: "#4a1a22", decor: "", win: TWL.rain },
    dusk: { wood: WOOD_L, seat: "#2d5b44", carpet: "#6a3a30", decor: D_FLOWER, win: TWL.dusk, dayLamp: true },
    day: { wood: WOOD_L, seat: "#3a6a50", carpet: "#6a3a30", decor: D_FLOWER, win: TWL.day, dayLamp: true },
    pines: { wood: WOOD_L, seat: "#2d5b44", carpet: "#5a2a2a", decor: D_CURT, win: TWL.pines, dayLamp: true },
    "winter-day": { wood: WOOD_L, seat: "#2a4a5c", carpet: "#4a2a2a", decor: D_CURT, win: TWL["winter-day"], dayLamp: true },
    station: { wood: WOOD, seat: "#2d5b44", carpet: "#5a1f22", decor: "", win: TWL.station },
    alps: { wood: WOOD, seat: "#2a4a5c", carpet: "#4a1a22", decor: D_CURT, win: TWL.alps },
    snowbound: { wood: WOOD, seat: "#2a3a4a", carpet: "#4a1a22", decor: D_CURT, win: TWL.snowbound },
    "snow-village": { wood: WOOD, seat: "#2d5b44", carpet: "#5a1f22", decor: D_FLOWER, win: TWL["snow-village"] },
    sooty: { wood: WOOD_L, seat: "#3a6a50", carpet: "#6a3a30", decor: "", win: TWL.sooty, dayLamp: true },
  };
  const TRAIN_LAMPS = '<circle cx="44" cy="118" r="26" fill="url(#tr-lamp)" class="glow"/><circle cx="316" cy="118" r="26" fill="url(#tr-lamp)" class="glow"/>';
  // dayLamp: daylight, the wall lamps barely glow
  // "Men's kit" for the cases where the hat box / glass are only decoration (no clue, no decoy): a lone man's compartment gets a bowler hat
  // and a tea glass in a metal holder. Same ids, zones and places; art only (case-editor note, build 6). Cases: 002 both, 020/031 glass, 037 hat.
  const MALE_KIT = { 2: ["hatbox", "glass"], 20: ["glass"], 31: ["glass"], 37: ["hatbox"] };
  const KIT_ART = {
    hatbox: [`<ellipse cx="266" cy="10" rx="24" ry="6" fill="#e7a2b9"/><path d="M242 10v22q24 10 48 0V10" fill="#d98aa2"/><path d="M242 22q24 8 48 0" stroke="#9c3434" stroke-width="2" fill="none"/>`, `<ellipse cx="266" cy="30" rx="26" ry="5" fill="#1a1612"/><path d="M248 30q0-24 18-24t18 24Z" fill="#221c16"/><path d="M249 26h34" stroke="#5a4a32" stroke-width="3"/><path d="M256 14q4-4 10-4" stroke="#fff" stroke-opacity=".12" stroke-width="2" fill="none"/>`],
    glass: [`<path d="M138 168h18l-3 14h-12Z" fill="#9c3434" fill-opacity=".35" stroke="#e9e4d4" stroke-width="1.2"/><path d="M140 176h14l-1.5 6h-11Z" fill="#9c3434"/><path d="M147 182v10M141 192h12" stroke="#e9e4d4" stroke-width="1.4"/>`, `<path d="M139 170h16l-1.6 18h-12.8Z" fill="#8a4a1a" fill-opacity=".6"/><path d="M138 168h18l-2 22h-14Z" fill="none" stroke="#c9a24a" stroke-width="1.6"/><path d="M141 174h12M141 180h12M141 186h12" stroke="#c9a24a" stroke-opacity=".6" stroke-width=".8"/><path d="M156 174q7 2 5 9t-6 5" fill="none" stroke="#c9a24a" stroke-width="1.6"/><ellipse cx="147" cy="192" rx="10" ry="2.4" fill="#c9a24a"/>`],
  };
  // Compartment fittings per case (build 6): coat on hooks (h), framed timetable (t), window treatment (w: lace | blind), interior set (p: blue | green).
  // (no timetable in the looks that already hang a posy in the bracket: farm, dusk, day, snow-village.) Pure decoration: drawn last with pointer-events:none, off the zones of the props. Explicit table so neighbours differ (case-editor / game-designer).
  const TR_COAT = `<path d="M8 58h30" stroke="#c9a24a" stroke-width="2.4"/><path d="M14 58v-4M32 58v-4" stroke="#c9a24a" stroke-width="2"/><path d="M12 60q-2 14 0 28h14q2-14 0-28Z" fill="#4a4a54"/><path d="M12 60l7 8 7-8" fill="#33333c"/><ellipse cx="32" cy="64" rx="6" ry="1.6" fill="#2a2018"/><path d="M27 64q0-8 5-8t5 8Z" fill="#2a2018"/>`;
  // Neutral framed landscape (no text, no paper look): it used to be a timetable that reads like a clue sheet (reviewer note).
  const TR_TIMETABLE = `<rect x="280" y="62" width="24" height="32" fill="#3a2a18" stroke="#c9a24a" stroke-width="1.6"/><rect x="283" y="65" width="18" height="26" fill="#2d4a5c"/><path d="M283 84q5-8 9-3t9-6v12h-18Z" fill="#2d5b44"/><path d="M283 88q6-4 10-1t8-3v4h-18Z" fill="#244a38"/><circle cx="296" cy="72" r="3" fill="#e8dfa8"/>`;
  const TR_WIN = {
    lace: `<g fill="#efe6cf" opacity=".55"><path d="M96 58h168v14q-6 8-12 0t-12 0-12 0-12 0-12 0-12 0-12 0-12 0-12 0-12 0-12 0-12 0-12 0-12 0V58Z"/></g><path d="M96 60h168" stroke="#c9a24a" stroke-width="2"/><g fill="#efe6cf" opacity=".4"><path d="M96 58h14v70q-7 6-14 0Z"/><path d="M250 58h14v70q-7 6-14 0Z"/></g>`,
    blind: `<rect x="96" y="58" width="168" height="54" fill="#d8c8a0" opacity=".95"/><path d="M96 70h168M96 82h168M96 94h168M96 106h168" stroke="#b9a87c" stroke-width="1"/><rect x="96" y="110" width="168" height="4" fill="#8a6a30"/><path d="M180 114v10" stroke="#8a6a30" stroke-width="1.4"/><circle cx="180" cy="126" r="2.4" fill="#8a6a30"/>`,
  };
  // Christmas fittings (case 049): string of lights over the window top and a wreath on the wall between hooks and window. Decoration only, drawn last, pointer-events:none, off the prop zones.
  const TR_XMAS = `<path d="M92 56Q180 74 268 56" fill="none" stroke="#1f4a32" stroke-width="2.2"/>${[[108, 62.6, "#e0b13a"], [130, 67, "#c0392b"], [152, 70, "#2d8b5a"], [174, 72, "#3a7bd5"], [196, 71.6, "#e0b13a"], [218, 69, "#c0392b"], [240, 64.6, "#2d8b5a"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y + 4}" r="3.6" fill="${c}"/><circle cx="${x}" cy="${y + 4}" r="8" fill="${c}" opacity=".2"/>`).join("")}<circle cx="64" cy="84" r="13" fill="none" stroke="#2f6b46" stroke-width="6"/><circle cx="64" cy="84" r="13" fill="none" stroke="#b3263a" stroke-width="1.6" stroke-dasharray="1.4 5"/><path d="M58 97l6-5 6 5-6 3Z" fill="#b3263a"/>`;
  const TR_SETS = { blue: { wood: ["#2a3a4a", "#33485e"], seat: "#2a4a7a", carpet: "#2a3a5a" }, green: { wood: ["#2a3a2e", "#34493a"], seat: "#6a2a3a", carpet: "#2a3a2e" } };
  const TRAIN_DECOR = {
    2: { h: 1, t: 1 }, 5: { t: 1, w: "lace", p: "blue" }, 8: { h: 1, p: "green" }, 12: { h: 1, t: 1, w: "blind" }, 15: { p: "blue" },
    17: { h: 1, w: "lace", p: "green" }, 20: { t: 1, p: "green" }, 22: { h: 1, w: "lace" }, 25: { w: "blind", p: "blue" }, 28: { h: 1 },
    31: { h: 1, t: 1, p: "blue" }, 49: { x: 1, p: "green" }, 34: { t: 1, w: "lace" }, 37: { h: 1, w: "blind", p: "green" }, 40: { t: 1, p: "green" }, 43: { h: 1, t: 1, p: "blue" },
  };
  const trainFn = (L, kit, deco) => { deco = deco || {}; if (deco.p && TR_SETS[deco.p]) L = Object.assign({}, L, TR_SETS[deco.p]); let t = trainBase(L); for (const k of kit || []) t = t.replace(KIT_ART[k][0], KIT_ART[k][1]); if (L.dayLamp) t = t.replace(TRAIN_LAMPS, TRAIN_LAMPS.replace(/r="26"/g, 'r="12"')); const extra = (deco.x ? TR_XMAS : "") + (deco.h ? TR_COAT : "") + (deco.t ? TR_TIMETABLE : "") + (deco.w ? TR_WIN[deco.w] : ""); return extra ? t + `<g pointer-events="none">${extra}</g>` : t; };
  const train = trainFn(TRAIN_LOOKS.night);
  const LOOKS = { study: STUDY_LOOKS, train: TRAIN_LOOKS };

  /* ----------------------------- THEATRE ----------------------------- */
  const bulbs = (() => { let s = ""; for (let i = 0; i < 6; i++) { const x = 68 + i * 25; s += `<circle class="bulb${i % 2 ? " b2" : ""}" cx="${x}" cy="46" r="5"/><circle class="bulb${i % 2 ? "" : " b2"}" cx="${x}" cy="194" r="5"/>`; } for (let j = 0; j < 5; j++) { const y = 70 + j * 25; s += `<circle class="bulb${j % 2 ? " b2" : ""}" cx="56" cy="${y}" r="5"/><circle class="bulb${j % 2 ? "" : " b2"}" cx="204" cy="${y}" r="5"/>`; } return s; })();
  const theatreBase = (T) => `
  <defs>
    <pattern id="th-wp" width="20" height="40" patternUnits="userSpaceOnUse"><rect width="20" height="40" fill="${T.wall[0]}"/><rect width="8" height="40" fill="${T.wall[1]}"/><circle cx="14" cy="20" r="1.4" fill="#c9a24a" opacity=".4"/></pattern>
    <radialGradient id="th-mirror" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#3a4a52"/><stop offset="1" stop-color="#18222a"/></radialGradient>
    <radialGradient id="th-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${T.glow}" stop-opacity=".45"/><stop offset="1" stop-color="${T.glow}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="360" height="300" fill="url(#th-wp)"/>
  <rect y="300" width="360" height="100" fill="${T.floor}"/>
  <path d="M0 320h360M0 350h360M0 380h360" stroke="#000" stroke-opacity=".25"/>
  <ellipse cx="130" cy="120" rx="110" ry="96" fill="url(#th-glow)" class="glow"/>
  ${T.decor}
  ${P("mask", `<path d="M14 72q16-8 32 0q0 18-16 22q-16-4-16-22Z" fill="#efe9dc"/><path d="M20 78q4-3 8 0M32 78q4-3 8 0" stroke="#141414" stroke-width="2.2" fill="none"/><path d="M24 88q6 3 12 0" stroke="#9c3434" stroke-width="1.6" fill="none"/><path d="M14 72q-6-4-4-10M46 72q6-4 4-10" stroke="#c9a24a" stroke-width="1.5" fill="none"/>`, 30, 80, 18)}
  ${P("mirror", `<rect x="50" y="40" width="160" height="160" rx="6" fill="#c9a24a"/><rect x="62" y="52" width="136" height="136" rx="4" fill="url(#th-mirror)"/>
    <path d="M80 70l30-14M86 86l40-20" stroke="#fff" stroke-opacity=".12" stroke-width="6"/><path d="M150 150q-10-22 6-32 12 8 4 30" stroke="#b3263a" stroke-width="2.4" fill="none" opacity=".85"/>
    <g fill="#ffe2a0">${bulbs}</g>`, 130, 120, 50, `<rect class="hit" x="62" y="52" width="136" height="136"/>`)}
  ${P("poster", `<rect x="218" y="36" width="44" height="78" fill="#e9dfc6" stroke="#c9a24a" stroke-width="2"/><rect x="224" y="42" width="32" height="26" fill="#2d6b52"/><circle cx="240" cy="55" r="7" fill="#e6c4a6"/><path d="M224 76h32M226 84h28M228 92h24M230 100h20" stroke="#9c3434" stroke-width="2"/>`, 240, 75, 26, `<rect class="hit" x="214" y="32" width="52" height="86"/>`)}
  <path d="M270 34h84" stroke="#c9a24a" stroke-width="4"/><path d="M276 34v-10M348 34v-10" stroke="#c9a24a" stroke-width="3"/>
  ${P("costume", `<path d="M312 36v8" stroke="#c9a24a" stroke-width="2"/><path d="M296 52q16-10 32 0l-4 20q14 40 16 116h-56q2-76 16-116Z" fill="#2d6b52"/><path d="M296 52q16-10 32 0" stroke="#c9a24a" stroke-width="2" fill="none"/><path d="M290 160q22 10 44 0" stroke="#c9a24a" stroke-width="2" fill="none"/><circle cx="312" cy="66" r="3" fill="#c9a24a"/>`, 312, 118, 34, `<rect class="hit" x="282" y="40" width="62" height="150"/>`)}
  <rect x="8" y="204" width="226" height="12" fill="#6b3a1e" stroke="#c9a24a"/>
  <rect x="14" y="216" width="214" height="86" fill="#5a2f17"/><rect x="24" y="226" width="90" height="66" fill="none" stroke="#c9a24a" stroke-opacity=".4"/><rect x="128" y="226" width="90" height="66" fill="none" stroke="#c9a24a" stroke-opacity=".4"/>
  ${P("wig", `<path d="M30 204v-14M22 204h16" stroke="#3a2010" stroke-width="3"/><ellipse cx="30" cy="176" rx="11" ry="13" fill="#e6c4a6"/><path d="M17 178q-2-22 13-22t13 22q2 12-3 20q-2-14-10-16q-8 2-10 16q-5-8-3-20Z" fill="#e0b84a"/>`, 30, 180, 20)}
  ${P("lipstick", `<rect x="82" y="190" width="9" height="14" rx="1" fill="#c9a24a"/><path d="M83 190v-7q4-3 7 2v5Z" fill="#b3263a"/>`, 87, 195, 11)}
  ${P("powder", `<ellipse cx="118" cy="200" rx="13" ry="5" fill="#e7a2b9"/><path d="M105 200v-4q13-6 26 0v4" fill="#f0c4d0"/><ellipse cx="118" cy="196" rx="13" ry="4" fill="#f4eee0"/><circle cx="114" cy="194" r="5" fill="#fff" opacity=".6"/>`, 118, 198, 14)}
  ${P("perfume", `<path d="M150 204q-8-4-6-14q2-6 10-6h4q8 0 10 6q2 10-6 14Z" fill="#bc9be0" fill-opacity=".7" stroke="#e9e4d4"/><rect x="154" y="176" width="6" height="8" fill="#c9a24a"/><circle cx="168" cy="178" r="4" fill="#9c3434"/><path d="M160 180q4 0 6-2" stroke="#9c3434" fill="none"/>`, 157, 192, 15)}
  ${P("telegram", `<rect x="182" y="194" width="34" height="12" fill="#f2d7a0" transform="rotate(-6 199 200)"/><path d="M186 198h22M186 202h14" stroke="#7a5a2a" stroke-width="1.2" transform="rotate(-6 199 200)"/><rect x="183" y="194" width="34" height="3" fill="#9c3434" transform="rotate(-6 199 200)"/>`, 199, 200, 15)}
  <path d="M120 270q0-14 30-14t30 14v36h-60Z" fill="#7d2629"/><path d="M124 306v40M176 306v40" stroke="#3a2010" stroke-width="5"/><rect x="116" y="300" width="68" height="12" rx="4" fill="#9c3434"/>
  <rect x="270" y="262" width="56" height="8" fill="#6b3a1e"/><path d="M276 270v70M320 270v70" stroke="#3a2010" stroke-width="4"/>
  ${P("bouquet", `<path d="M288 262l6-24h20l6 24Z" fill="#2d6b52"/><g><circle cx="294" cy="230" r="8" fill="#e7a2b9"/><circle cx="310" cy="224" r="9" fill="#b3263a"/><circle cx="322" cy="234" r="7" fill="#efe9dc"/><circle cx="302" cy="216" r="7" fill="#efe9dc"/><path d="M290 240l-6-8M318 240l8-6" stroke="#2d6b52" stroke-width="2"/></g><rect x="312" y="244" width="16" height="11" fill="#f4eee0" transform="rotate(10 320 249)"/>`, 305, 238, 26)}
  ${P("dagger", `<path d="M62 368l34-12 2 4-34 12Z" fill="#cfd7e6"/><path d="M96 352l4 12" stroke="#c9a24a" stroke-width="4"/><path d="M100 358l14-5" stroke="#5a2f17" stroke-width="5" stroke-linecap="round"/>`, 86, 362, 20)}
  ${P("programme", `<rect x="226" y="346" width="30" height="22" fill="#e9dfc6" transform="rotate(-14 241 357)"/><rect x="230" y="350" width="22" height="7" fill="#9c3434" transform="rotate(-14 241 357)"/><path d="M231 361h18" stroke="#7a7266" stroke-width="1.4" transform="rotate(-14 241 357)"/>`, 241, 357, 18)}`;
  /* Looks of the dressing room (no window): wallpaper, floor, light colour and decor without clues (bunting, frames, rug, screen).
     Decor stays off the hit zones of the props. Auto pool by case number: warm (original), rose, teal, ochre, plum, sage, indigo. */
  const D_BUNTING = `<path d="M0 14Q90 30 180 16T360 14" fill="none" stroke="#c9a24a" stroke-opacity=".7"/><g>${[16, 52, 88, 124, 160, 196, 232].map((x, i) => `<path d="M${x} ${18 + Math.abs(Math.sin(i)) * 3}l10 0-5 14Z" fill="${["#e7a2b9", "#f3d16a", "#8cc79a", "#bc9be0"][i % 4]}" opacity=".85"/>`).join("")}</g>`;
  const D_TH_FRAMES = `<path d="M14 108h24v34l-12 8-12-8Z" fill="#6a3a8a"/><path d="M14 108h24" stroke="#c9a24a" stroke-width="2.4"/><path d="M26 118l2.6 5.4 5.8.8-4.2 4 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4 5.8-.8Z" fill="#f3d16a"/><path d="M20 106v-6M32 106v-6" stroke="#c9a24a" stroke-width="1.4"/>`;
  const D_RUG = `<ellipse cx="150" cy="352" rx="82" ry="15" fill="#2d5b44" opacity=".8"/><ellipse cx="150" cy="352" rx="68" ry="11" fill="none" stroke="#c9a24a" stroke-opacity=".5" stroke-dasharray="4 4"/>`;
  const D_SCREEN = `<g opacity=".95"><path d="M338 214l14-6v92l-14 6Z" fill="#6a3a52"/><path d="M352 208l8 4v92l-8-4Z" fill="#7a4a62"/><path d="M342 232q4 4 8 0M342 256q4 4 8 0" stroke="#c9a24a" fill="none" stroke-opacity=".7"/></g>`;
  const D_GARLAND = `<path d="M0 12Q60 30 120 14T240 18T360 12" fill="none" stroke="#3f7a52" stroke-width="3"/><g fill="#3f7a52">${[14, 44, 76, 108, 140, 172, 204, 236].map((x, i) => `<path d="M${x} ${16 + (i % 2) * 6}l8 6-8 6-8-6Z" opacity=".9"/>`).join("")}</g><g fill="#e7a2b9">${[30, 92, 156, 220].map((x, i) => `<circle cx="${x}" cy="${22 + (i % 2) * 4}" r="3"/>`).join("")}</g>`;
  const D_STARS = `<g stroke="#c9a24a" stroke-opacity=".6">${[24, 70, 116, 162, 208].map((x) => `<path d="M${x} 0v${14 + (x % 3) * 4}"/>`).join("")}</g>${[24, 70, 116, 162, 208].map((x) => `<path d="M${x} ${16 + (x % 3) * 4}l2.6 5.4 5.8.8-4.2 4 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4 5.8-.8Z" fill="#f3d16a"/>`).join("")}`;
  // Pantomime (case 051): a string of pumpkins and gold stars along the top (Cinderella), terracotta wall. Decoration only, off the zones.
  const D_PANTO = `<path d="M0 10Q60 26 120 12T240 16T360 10" fill="none" stroke="#c9a24a" stroke-width="2"/>${[18, 62, 106, 150, 194, 238, 282, 326].map((x, i) => i % 2 ? `<path d="M${x} ${18 + (i % 3) * 2}l2.6 5.4 5.8.8-4.2 4 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4 5.8-.8Z" fill="#f3d16a"/>` : `<ellipse cx="${x}" cy="${24 + (i % 3) * 2}" rx="9" ry="7.6" fill="#e07a2a"/><path d="M${x - 3} ${17 + (i % 3) * 2}q3 3 6 0" stroke="#2f6b46" stroke-width="2" fill="none"/><path d="M${x} ${17 + (i % 3) * 2}v6" stroke="#b85a1a" stroke-width="1.2"/>`).join("")}`;
  const THEATRE_LOOKS = {
    warm: { wall: ["#4a1a22", "#561f28"], floor: "#3a2414", glow: "#ffe2a0", decor: "" },
    rose: { wall: ["#5a2236", "#6a2f48"], floor: "#3a2420", glow: "#ffd2c0", decor: D_BUNTING + D_TH_FRAMES },
    teal: { wall: ["#1c3a3c", "#25494b"], floor: "#2a2a26", glow: "#e6f0c8", decor: D_RUG + D_SCREEN },
    ochre: { wall: ["#6a4a1a", "#7a5a24"], floor: "#3a2a18", glow: "#ffe2a0", decor: D_RUG + D_TH_FRAMES },
    plum: { wall: ["#3a1a4a", "#482458"], floor: "#2a1a24", glow: "#f0d0ff", decor: D_BUNTING + D_SCREEN },
    sage: { wall: ["#2f4a3a", "#3a5a48"], floor: "#33281c", glow: "#f4f0c0", decor: D_GARLAND + D_TH_FRAMES },
    panto: { wall: ["#5a3020", "#6a3a26"], floor: "#2e2018", glow: "#ffe0b0", decor: D_PANTO + D_RUG },
    indigo: { wall: ["#1c2448", "#262f5a"], floor: "#241a28", glow: "#ffe8c0", decor: D_STARS + D_RUG },
  };
  const theatre = theatreBase(THEATRE_LOOKS.warm);


  // Default scenes stay plain strings (screenshots, video frames and old code keep working).
  /* ------------------------------ PARLOUR ------------------------------ */
  // Living room (new, for cases 044+). 12 props, see studio/design/parlour-props.md. Mini-game props: letter, newspaper (paper), bottle, glass (CHEM), clock (CLOCK).
  const parlour = `
  <defs>
    <pattern id="pl-wp" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="#1e2b45"/><path d="M15 4v22M4 15h22" stroke="#26385a" stroke-width="1.4"/><circle cx="15" cy="15" r="2" fill="#c9a24a" opacity=".35"/></pattern>
    <linearGradient id="pl-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2717"/><stop offset="1" stop-color="#22160d"/></linearGradient>
    <linearGradient id="pl-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a1226"/><stop offset="1" stop-color="#1e3050"/></linearGradient>
    <radialGradient id="pl-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f6d27a" stop-opacity=".55"/><stop offset="1" stop-color="#f6d27a" stop-opacity="0"/></radialGradient>
    <radialGradient id="pl-room" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd9a0" stop-opacity=".22"/><stop offset="1" stop-color="#ffd9a0" stop-opacity="0"/></radialGradient>
    <clipPath id="pl-win"><rect x="262" y="54" width="68" height="144"/></clipPath>
  </defs>
  <rect width="360" height="300" fill="url(#pl-wp)"/>
  <rect y="240" width="360" height="60" fill="#2b2418"/><path d="M0 240h360" stroke="#c9a24a" stroke-opacity=".4"/><path d="M40 240v60M120 240v60M200 240v60M280 240v60" stroke="#1d1810" stroke-width="1.2"/>
  <rect y="300" width="360" height="100" fill="url(#pl-floor)"/>
  <path d="M0 326h360M0 354h360M0 382h360" stroke="#000" stroke-opacity=".25"/>
  <ellipse cx="210" cy="356" rx="140" ry="32" fill="#5a1f22"/><ellipse cx="210" cy="356" rx="124" ry="25" fill="none" stroke="#c9a24a" stroke-opacity=".5" stroke-dasharray="4 4"/>
  <ellipse cx="180" cy="150" rx="150" ry="110" fill="url(#pl-room)" class="glow"/>
  <rect x="258" y="50" width="76" height="152" fill="url(#pl-sky)"/>
  <circle cx="312" cy="84" r="12" fill="#efe6c8" opacity=".9"/><g fill="#dfe8f5"><circle cx="272" cy="70" r=".9"/><circle cx="286" cy="96" r="1"/><circle cx="300" cy="64" r=".8"/><circle cx="274" cy="124" r=".9"/><circle cx="322" cy="120" r="1"/></g>
  <g clip-path="url(#pl-win)"><path d="M262 198v-30l12-8 12 6 16-10 14 8 14-6v40Z" fill="#070d1c"/></g>
  <path d="M296 54v144M262 126h68" stroke="#3a2a18" stroke-width="4"/><rect x="258" y="50" width="76" height="152" fill="none" stroke="#3a2a18" stroke-width="6"/>
  <path d="M248 38h96" stroke="#c9a24a" stroke-width="4"/><circle cx="248" cy="38" r="4" fill="#c9a24a"/><circle cx="344" cy="38" r="4" fill="#c9a24a"/>
  <path d="M250 40c8 50 0 130 6 200h-16c4-70 8-140 0-200Z" fill="#7a2a3a"/><path d="M342 40c-8 50 0 130-6 200h16c-4-70-8-140 0-200Z" fill="#7a2a3a"/><path d="M244 146q12 8 20 0M352 146q-12 8-20 0" stroke="#c9a24a" stroke-width="2" fill="none"/>
  ${P("window", "", 296, 100, 40, `<rect class="hit" x="258" y="52" width="74" height="100"/>`)}
  ${P("painting", `<rect x="86" y="60" width="80" height="72" fill="#3a2a18" stroke="#c9a24a" stroke-width="3"/><rect x="93" y="67" width="66" height="58" fill="#27403a"/><path d="M93 108q16-18 28-6t38-12v35H93Z" fill="#1c2e2a"/><path d="M93 118q20-10 36-2t30-6v15H93Z" fill="#2d4a40"/><circle cx="142" cy="82" r="7" fill="#e8dfbd" opacity=".9"/><rect x="104" y="134" width="44" height="6" fill="#c9a24a" opacity=".7"/>`, 126, 96, 44, `<rect class="hit" x="84" y="58" width="84" height="76"/>`)}
  ${P("clock", `<rect x="14" y="76" width="48" height="220" rx="4" fill="#4a2c18" stroke="#c9a24a" stroke-opacity=".6"/><path d="M14 92q24-26 48 0Z" fill="#5b3a20"/><circle cx="38" cy="116" r="16" fill="#efe6cf" stroke="#c9a24a" stroke-width="2"/><path d="M38 116v-11M38 116l8 4" stroke="#1a140a" stroke-width="1.8" stroke-linecap="round"/><path d="M38 100v3M38 129v3M22 116h3M51 116h3" stroke="#7a7a7a" stroke-width="1"/><rect x="24" y="148" width="28" height="104" rx="3" fill="#1b130c"/><g class="clock-pend"><path d="M38 150v70" stroke="#c9a24a" stroke-width="1.6"/><circle cx="38" cy="226" r="9" fill="#c9a24a"/></g><rect x="14" y="268" width="48" height="28" fill="#3a2212" opacity=".7"/>`, 38, 182, 40, `<rect class="hit" x="10" y="66" width="56" height="230"/>`)}
  <rect x="72" y="244" width="140" height="10" fill="#5b3a1e"/><path d="M72 244h140" stroke="#c9a24a" stroke-opacity=".6"/><rect x="78" y="254" width="128" height="46" fill="#4a2f17"/><rect x="86" y="260" width="52" height="34" fill="none" stroke="#c9a24a" stroke-opacity=".4"/><rect x="146" y="260" width="52" height="34" fill="none" stroke="#c9a24a" stroke-opacity=".4"/><circle cx="130" cy="277" r="2" fill="#c9a24a"/><circle cx="154" cy="277" r="2" fill="#c9a24a"/>
  ${P("bottle", `<path d="M90 244l-3-18q-2-8 4-12v-8h14v8q6 4 4 12l-3 18Z" fill="#6a2a1a" fill-opacity=".85" stroke="#efe9dc" stroke-opacity=".7"/><rect x="93" y="198" width="8" height="8" rx="2" fill="#c9a24a"/><path d="M90 232h16" stroke="#efe9dc" stroke-opacity=".4"/>`, 98, 222, 18)}
  ${P("glass", `<g transform="translate(8 0)"><path d="M132 244v-4l-2-14h22l-2 14v4Z" fill="#9ec2b1" fill-opacity=".3" stroke="#e9e4d4" stroke-width="1.2"/><path d="M131 236h20l-1 6h-18Z" fill="#8a4a1a" opacity=".8"/></g>`, 148, 232, 14)}
  ${P("vase", `<path d="M184 244q-6-14-2-26h16q4 12-2 26Z" fill="#e8f0f4" stroke="#3a5a9a" stroke-width="1.4"/><path d="M182 226h16M183 234h14" stroke="#3a5a9a" stroke-width="1"/><path d="M190 218v-14M190 212q-8-4-10-12M190 210q8-4 10-12" stroke="#3f7a52" stroke-width="2" fill="none"/><circle cx="178" cy="200" r="4.4" fill="#e7a2b9"/><circle cx="190" cy="202" r="4.4" fill="#efe6cf"/><circle cx="201" cy="198" r="4.4" fill="#b3263a"/>`, 190, 214, 18)}
  <rect x="230" y="268" width="76" height="8" fill="#6b3a1e"/><path d="M230 268h76" stroke="#c9a24a" stroke-opacity=".6"/><rect x="236" y="276" width="64" height="24" fill="#4a2f17"/><rect x="244" y="280" width="22" height="16" fill="none" stroke="#c9a24a" stroke-opacity=".4"/><rect x="270" y="280" width="22" height="16" fill="none" stroke="#c9a24a" stroke-opacity=".4"/>
  ${P("letter", `<rect x="250" y="252" width="34" height="18" fill="#efe6cf" transform="rotate(-6 267 261)"/><path d="M254 258h24M254 262h18" stroke="#6b5a44" stroke-width=".9" transform="rotate(-6 267 261)"/><rect x="270" y="248" width="20" height="14" fill="#f6efe0" transform="rotate(8 280 255)"/><path d="M270 249l10 7 10-7" stroke="#b9a98a" stroke-width=".9" fill="none" transform="rotate(8 280 255)"/><circle cx="280" cy="256" r="2.6" fill="#9c3434"/>`, 268, 256, 20)}
  <circle cx="326" cy="196" r="46" fill="url(#pl-lamp)" class="glow"/>
  ${P("lamp", `<path d="M314 192h24l-6-28h-12Z" fill="#e7d7a8" stroke="#c9a24a"/><path d="M326 192v100" stroke="#c9a24a" stroke-width="4"/><ellipse cx="326" cy="296" rx="12" ry="4" fill="#c9a24a"/>`, 326, 236, 26, `<rect class="hit" x="312" y="160" width="34" height="140"/>`)}
  <path d="M14 330q0-22 22-22h72q22 0 22 22v62H14Z" fill="#2d4a5c"/>
  <path d="M42 312v40M70 310v42M98 312v40" stroke="#243e4e" stroke-width="1.5"/>
  <rect x="6" y="340" width="22" height="50" rx="8" fill="#3a5a6e"/><rect x="110" y="340" width="22" height="50" rx="8" fill="#3a5a6e"/><rect x="26" y="356" width="88" height="30" rx="6" fill="#254050"/><path d="M16 392v6M120 392v6" stroke="#3a2618" stroke-width="4"/>
  ${P("cushion", `<rect x="28" y="326" width="40" height="34" rx="6" fill="#9c3434" transform="rotate(-8 48 343)"/><path d="M36 334h24M36 342h24M36 350h24" stroke="#c9a24a" stroke-width="1.2" stroke-opacity=".8" transform="rotate(-8 48 343)"/><circle cx="48" cy="343" r="5" fill="none" stroke="#efe6cf" stroke-width="1.2" transform="rotate(-8 48 343)"/>`, 46, 340, 22)}
  ${P("newspaper", `<rect x="86" y="352" width="36" height="24" fill="#e9e4d4" transform="rotate(-14 104 364)"/><path d="M91 358h26M91 363h16M91 368h24" stroke="#7a7266" stroke-width="1.3" transform="rotate(-14 104 364)"/>`, 104, 364, 22)}
  <ellipse cx="206" cy="350" rx="72" ry="16" fill="#5b3a1e" stroke="#c9a24a" stroke-opacity=".6"/><path d="M150 358v32M262 358v32M206 364v30" stroke="#3a2010" stroke-width="5"/>
  ${P("chess", `<g transform="rotate(-6 176 340)"><rect x="152" y="324" width="48" height="32" fill="#4a2f17" stroke="#c9a24a" stroke-width="1.4"/><g fill="#d8c7a0">${Array.from({ length: 8 }, (_, i) => Array.from({ length: 4 }, (__, j) => `<rect x="${154 + ((i % 2) + 2 * j) * 5.6}" y="${326 + i * 3.6}" width="5.6" height="3.6"/>`).join("")).join("")}</g><g><rect x="164" y="333" width="3.4" height="7" fill="#efe9dc"/><circle cx="165.7" cy="331" r="2.2" fill="#efe9dc"/><rect x="178" y="337" width="3.4" height="7" fill="#1a1612"/><circle cx="179.7" cy="335" r="2.2" fill="#1a1612"/><rect x="189" y="329" width="3.4" height="6" fill="#efe9dc"/><circle cx="190.7" cy="327.4" r="2" fill="#efe9dc"/></g></g>`, 176, 340, 26)}
  ${P("pipe", `<ellipse cx="244" cy="358" rx="13" ry="4.5" fill="#d8c7a0" stroke="#c9a24a" stroke-opacity=".7"/><path d="M236 356q10-10 24-6" stroke="#3a2412" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M258 350q4-1 6-5l3 1q-1 7-6 9Z" fill="#4a2c18"/><path class="steam" d="M264 342q-3-6 2-10" stroke="#e9dfc6" fill="none"/>`, 246, 354, 16)}`;

  // Parlour looks (case 052 "wet-sill"): a stone sill under the window, a brass sash bolt on the middle bar RAISED, damp patches on the sill.
  // Pure art of the existing `window` prop: drawn last, pointer-events:none, same prop, same zone; the other parlour cases do not use it.
  const PARLOUR_LOOKS = {
    "wet-sill": `<g pointer-events="none"><rect x="250" y="202" width="92" height="9" rx="1.5" fill="#8a8272"/><rect x="250" y="202" width="92" height="2.6" fill="#a89f8c"/><path d="M250 211h92" stroke="#000" stroke-opacity=".3"/>
  <ellipse cx="274" cy="206.4" rx="9" ry="2.3" fill="#26323f" opacity=".8"/><ellipse cx="303" cy="207" rx="6.5" ry="2" fill="#26323f" opacity=".8"/><ellipse cx="324" cy="206" rx="4.2" ry="1.7" fill="#26323f" opacity=".8"/><path d="M270 205.4h6M301 206h4" stroke="#9fb4c8" stroke-opacity=".5" stroke-width=".8"/><!-- iron filings: dark crumbs next to the damp patches (case 052, no new prop) --><g fill="#14110d"><circle cx="262" cy="204.6" r="0.8"/><circle cx="266" cy="207.4" r="0.7"/><circle cx="280" cy="205" r="0.8"/><circle cx="283" cy="207.6" r="0.9"/><circle cx="287" cy="204.4" r="0.7"/><circle cx="296" cy="206.4" r="0.8"/><circle cx="309" cy="205.2" r="0.8"/><circle cx="312" cy="207.8" r="0.7"/><circle cx="316" cy="204.6" r="0.7"/><circle cx="330" cy="207" r="0.8"/><circle cx="334" cy="205" r="0.7"/><circle cx="256" cy="206.4" r="0.7"/></g><g fill="#c4c8d0"><circle cx="270.5" cy="205.2" r=".75"/><circle cx="285" cy="206.6" r=".7"/><circle cx="306" cy="206.2" r=".75"/><circle cx="321" cy="206.8" r=".65"/></g>
  <rect x="292.5" y="146" width="7" height="34" rx="2" fill="#c9a24a" stroke="#6a4a14" stroke-width=".9"/><rect x="295" y="149" width="2" height="28" fill="#6a4a14" opacity=".45"/><rect x="291" y="150" width="10" height="6" rx="2" fill="#e0c070" stroke="#6a4a14" stroke-width=".9"/></g>`,
  };
  // Look "wet-sill": the window group moves to the end (it wins over the lamp zone on the sill) and its zone grows downward to cover the raised bolt and the sill (code-reviewer 04.11):
  // x250-326, y52-212. Same prop `window`, same id, same ring; other parlour cases are untouched.
  const WIN_GROUP = /<g class="hot" data-prop="window">[\s\S]*?<\/g>/;
  const parlourFn = (look) => {
    if (!PARLOUR_LOOKS[look]) return parlour;
    const g = parlour.match(WIN_GROUP)[0].replace(/<rect class="hit"[^>]*\/>/, '<rect class="hit" x="254" y="52" width="78" height="100"/><rect class="hit" x="250" y="152" width="62" height="60"/><rect class="hit" x="312" y="204" width="30" height="8"/>');
    return parlour.replace(WIN_GROUP, "") + PARLOUR_LOOKS[look] + g;
  };
  window.DELO_SCENES = { study, train, theatre, parlour };
  // Scene of a case with its look: c.look if the case sets one, then CASE_LOOKS, otherwise picked from the evening/night pool by case number
  // (case 001 and any scene without extra looks keep the original). Winter-only and daytime looks are never auto-picked.
  const POOL = { study: ["rain", "clear", "fog"], train: ["night", "stars", "farm"], theatre: ["warm", "rose", "teal", "ochre", "plum", "sage", "indigo"] };
  // Looks fixed by the text of the case (weather / time of day), from case-editor's list reviews/window-views-001-043.md.
  // A case's own `look` field overrides this table; cases not listed (and not 001) fall back to the pool by number.
  const CASE_LOOKS = { theatre: { 3: "rose", 6: "teal", 9: "warm", 11: "ochre", 14: "plum", 18: "sage", 23: "indigo", 26: "rose", 29: "warm", 32: "ochre", 35: "plum", 38: "sage", 41: "teal", 51: "panto" }, train: { 2: "snow", 5: "night", 8: "alps", 12: "stars", 15: "day", 17: "farm", 20: "snowbound", 22: "snow-village", 25: "dusk", 28: "station", 31: "rain", 34: "pines", 37: "night", 40: "winter-day", 43: "sooty", 49: "snow" }, parlour: { 52: "wet-sill" }, study: { 1: "clear", 4: "snow", 7: "shutters", 10: "snow-xmas", 13: "lights", 16: "fog", 19: "clear", 21: "morning-snow", 24: "morning", 27: "summer-dusk", 30: "sealed", 33: "snow-xmas", 36: "summer-day", 39: "snow-still", 42: "morning", 50: "twelfth" } };
  const BUILD = { parlour: (look) => parlourFn(look), theatre: (look) => theatreBase(THEATRE_LOOKS[look] || THEATRE_LOOKS.warm), train: (look, c) => trainFn(TRAIN_LOOKS[look] || TRAIN_LOOKS.night, c && MALE_KIT[c.n], c && TRAIN_DECOR[c.n]), study: (look, c) => studyFn(Object.assign({}, STUDY_LOOKS[look] || STUDY_LOOKS.rain, { pi: c && c.n ? c.n % 4 : 0 })) };
  LOOKS.theatre = THEATRE_LOOKS;
  LOOKS.parlour = PARLOUR_LOOKS;
  window.DELO_SCENE_LOOKS = Object.fromEntries(Object.keys(LOOKS).map((k) => [k, Object.keys(LOOKS[k])]));
  window.DELO_SCENE_LOOK_FOR = (name, c) => {
    if (c && c.look && LOOKS[name] && LOOKS[name][c.look]) return c.look;
    const fixed = CASE_LOOKS[name] && c && CASE_LOOKS[name][c.n];
    if (fixed && LOOKS[name][fixed]) return fixed;
    const pool = POOL[name];
    if (!pool || !c || c.n === 1) return pool ? pool[0] : "default";
    return pool[(c.n + Math.floor(c.n / 3)) % pool.length];
  };
  window.DELO_SCENE = (name, c) => (BUILD[name] ? BUILD[name](window.DELO_SCENE_LOOK_FOR(name, c), c) : window.DELO_SCENES[name]);
})();
