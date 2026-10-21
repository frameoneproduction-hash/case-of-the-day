// Crime-scene locations. Each prop is a tappable group: <g class="hot" data-prop="name">art + ring + hit</g>.
(function () {
  const P = (name, art, cx, cy, r, hit) =>
    `<g class="hot" data-prop="${name}">${art}<circle class="ring" cx="${cx}" cy="${cy}" r="${r}"/>${hit || `<circle class="hit" cx="${cx}" cy="${cy}" r="${r + 4}"/>`}</g>`;

  /* ------------------------------ STUDY ------------------------------ */
  const study = `
  <defs>
    <pattern id="st-wp" width="24" height="24" patternUnits="userSpaceOnUse"><rect width="24" height="24" fill="#1c372e"/><path d="M12 3 17 12 12 21 7 12Z" fill="none" stroke="#24453a"/></pattern>
    <radialGradient id="st-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f6d27a" stop-opacity=".55"/><stop offset="1" stop-color="#f6d27a" stop-opacity="0"/></radialGradient>
    <radialGradient id="st-fire" cx=".5" cy=".8" r=".6"><stop offset="0" stop-color="#ff8a3d" stop-opacity=".8"/><stop offset="1" stop-color="#ff8a3d" stop-opacity="0"/></radialGradient>
    <radialGradient id="st-candle" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd27a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient>
    <linearGradient id="st-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2717"/><stop offset="1" stop-color="#22160d"/></linearGradient>
    <clipPath id="st-win"><rect x="256" y="50" width="76" height="150"/></clipPath>
  </defs>
  <rect width="360" height="300" fill="url(#st-wp)"/>
  <rect y="240" width="360" height="60" fill="#14271f"/><path d="M0 240h360" stroke="#c9a24a" stroke-opacity=".35"/>
  <rect y="300" width="360" height="100" fill="url(#st-floor)"/>
  <path d="M0 325h360M0 352h360M0 380h360" stroke="#000" stroke-opacity=".25"/>
  <path d="M60 300v25M150 300v25M240 300v25M330 300v25M20 325v27M110 325v27M200 325v27M290 325v27" stroke="#000" stroke-opacity=".18"/>
  <ellipse cx="200" cy="350" rx="130" ry="32" fill="#5a1f22"/>
  <ellipse cx="200" cy="350" rx="116" ry="25" fill="none" stroke="#c9a24a" stroke-opacity=".5" stroke-dasharray="4 4"/>
  <path d="M200 330l18 20-18 20-18-20Z" fill="none" stroke="#c9a24a" stroke-opacity=".35"/>
  <rect x="256" y="50" width="76" height="150" fill="#0f1a2e"/>
  <circle cx="304" cy="86" r="13" fill="#e8e2c4" opacity=".85"/>
  <g clip-path="url(#st-win)" stroke="#9fb4c8" stroke-opacity=".45"><g class="rain"><path d="M262 40l-4 22M276 70l-4 22M290 44l-4 22M304 90l-4 22M318 56l-4 22M330 100l-4 22M268 120l-4 22M284 150l-4 22M298 126l-4 22M312 166l-4 22M326 140l-4 22M262 180l-4 22M290 196l-4 22M320 200l-4 22"/></g></g>
  <path d="M256 125h76M294 50v150" stroke="#3a2a18" stroke-width="5"/>
  <rect x="252" y="46" width="84" height="158" fill="none" stroke="#3a2a18" stroke-width="6"/>
  <path d="M240 36h108" stroke="#c9a24a" stroke-width="4"/><circle cx="240" cy="36" r="4" fill="#c9a24a"/><circle cx="348" cy="36" r="4" fill="#c9a24a"/>
  <path d="M242 38c10 60 0 160 8 262h-20c4-90 10-180 0-262Z" fill="#7d2629"/>
  <path d="M346 38c-10 60 0 160-8 262h20c-4-90-10-180 0-262Z" fill="#7d2629"/>
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
  ${P("teacup", `<ellipse cx="236" cy="235" rx="15" ry="4" fill="#e9dfc6"/><path d="M226 222h20l-3 12h-14Z" fill="#f2ead6" stroke="#c9a24a"/><path d="M246 225q7 0 5 6-2 4-6 2" fill="none" stroke="#f2ead6" stroke-width="2"/>
    <path class="steam" d="M233 218q-3-6 2-10" stroke="#e9dfc6" fill="none"/><path class="steam b" d="M239 218q-3-6 2-10" stroke="#e9dfc6" fill="none"/>`, 236, 226, 19)}
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

  /* ------------------------------ TRAIN ------------------------------ */
  const train = `
  <defs>
    <linearGradient id="tr-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1424"/><stop offset="1" stop-color="#1b2a44"/></linearGradient>
    <linearGradient id="tr-wood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4a2a18"/><stop offset=".5" stop-color="#5b3520"/><stop offset="1" stop-color="#4a2a18"/></linearGradient>
    <radialGradient id="tr-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f6d27a" stop-opacity=".6"/><stop offset="1" stop-color="#f6d27a" stop-opacity="0"/></radialGradient>
    <clipPath id="tr-win"><rect x="96" y="58" width="168" height="124" rx="10"/></clipPath>
  </defs>
  <rect width="360" height="400" fill="url(#tr-wood)"/>
  <path d="M0 44h360M0 196h360" stroke="#c9a24a" stroke-opacity=".5" stroke-width="2"/>
  <g fill="none" stroke="#6b4228" stroke-width="1.2"><path d="M20 70l20 20-20 20-20-20ZM340 70l20 20-20 20-20-20Z"/><path d="M20 130l14 14-14 14-14-14ZM340 130l14 14-14 14-14-14Z"/></g>
  <rect x="88" y="50" width="184" height="140" rx="14" fill="#2a170c" stroke="#c9a24a" stroke-width="3"/>
  <rect x="96" y="58" width="168" height="124" rx="10" fill="url(#tr-sky)"/>
  <g clip-path="url(#tr-win)">
    <circle cx="230" cy="82" r="10" fill="#efe6c8"/>
    <g fill="#cfd7e6" opacity=".6"><circle cx="120" cy="72" r=".9"/><circle cx="160" cy="66" r="1"/><circle cx="200" cy="96" r=".8"/></g>
    <g class="scroll-slow"><path d="M60 182l40-50 30 30 40-60 50 60 30-30 50 50 40-40 40 40 40-60 50 60v20H60Z" fill="#14222e"/><path d="M420 182l40-50 30 30 40-60 50 60 30-30 50 50 40-40 40 40v20H420Z" fill="#14222e"/></g>
    <g class="scroll-fast" stroke="#0a0f12" stroke-width="3"><path d="M120 182v-70M300 182v-70M480 182v-70"/><path d="M110 120h20M290 120h20M470 120h20" stroke-width="2"/></g>
  </g>
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
  ${P("glass", `<path d="M138 168h18l-3 14h-12Z" fill="#9c3434" fill-opacity=".35" stroke="#e9e4d4" stroke-width="1.2"/><path d="M140 176h14l-1.5 6h-11Z" fill="#9c3434"/><path d="M147 182v10M141 192h12" stroke="#e9e4d4" stroke-width="1.4"/>`, 147, 180, 15)}
  ${P("watch", `<circle cx="180" cy="190" r="7" fill="#d1a94e"/><circle cx="180" cy="190" r="5" fill="#f4eee0"/><path d="M180 190v-3.5M180 190l2.5 1.5" stroke="#1a140a" stroke-width="1"/><path d="M180 183q-6-8 4-12" stroke="#d1a94e" fill="none"/>`, 180, 188, 12)}
  ${P("bottle", `<path d="M206 192v-22q0-6 4-8v-8h6v8q4 2 4 8v22Z" fill="#1f4a32"/><rect x="208" y="174" width="10" height="9" fill="#efe9dc"/><path class="slosh" d="M206 186h14" stroke="#0e2a1c" stroke-width="2"/>`, 213, 176, 17)}
  <path d="M0 210h96v120H0Z" fill="#2d5b44"/><path d="M0 208h100v12H0Z" fill="#3a6b52"/>
  <path d="M264 210h96v120h-96Z" fill="#2d5b44"/><path d="M260 208h100v12H260Z" fill="#3a6b52"/>
  <g stroke="#24493a" stroke-width="1.2"><path d="M24 220v110M48 220v110M72 220v110M288 220v110M312 220v110M336 220v110"/></g>
  ${P("newspaper", `<rect x="22" y="232" width="46" height="30" fill="#e9e4d4" transform="rotate(-8 45 247)"/><path d="M28 238h34M28 244h20M28 250h30M28 256h24" stroke="#7a7266" stroke-width="1.5" transform="rotate(-8 45 247)"/>`, 45, 247, 24)}
  ${P("gloves", `<path d="M56 296q-2-12 6-14l4 8 4-10 4 10 4-6q4 6-2 14Z" fill="#efe9dc"/><path d="M62 304q-2-10 6-12l4 8 4-10 4 10 4-6q4 6-2 12Z" fill="#e2d9c4"/>`, 70, 298, 17)}
  ${P("cigcase", `<rect x="288" y="246" width="26" height="17" rx="3" fill="#c9a24a"/><path d="M291 254h20" stroke="#8a6a24"/><circle cx="301" cy="250" r="2" fill="#8a6a24"/>`, 301, 254, 15)}
  <rect y="330" width="360" height="70" fill="#5a1f22"/>
  <path d="M0 340h360M0 390h360" stroke="#c9a24a" stroke-opacity=".35" stroke-dasharray="6 6"/>
  ${P("ticket", `<rect x="186" y="362" width="30" height="16" fill="#e9dfc6" transform="rotate(12 201 370)"/><path d="M192 366h18M192 372h10" stroke="#9c3434" stroke-width="1.4" transform="rotate(12 201 370)"/>`, 201, 370, 18)}`;

  /* ----------------------------- THEATRE ----------------------------- */
  const bulbs = (() => { let s = ""; for (let i = 0; i < 6; i++) { const x = 68 + i * 25; s += `<circle class="bulb${i % 2 ? " b2" : ""}" cx="${x}" cy="46" r="5"/><circle class="bulb${i % 2 ? "" : " b2"}" cx="${x}" cy="194" r="5"/>`; } for (let j = 0; j < 5; j++) { const y = 70 + j * 25; s += `<circle class="bulb${j % 2 ? " b2" : ""}" cx="56" cy="${y}" r="5"/><circle class="bulb${j % 2 ? "" : " b2"}" cx="204" cy="${y}" r="5"/>`; } return s; })();
  const theatre = `
  <defs>
    <pattern id="th-wp" width="20" height="40" patternUnits="userSpaceOnUse"><rect width="20" height="40" fill="#4a1a22"/><rect width="8" height="40" fill="#561f28"/><circle cx="14" cy="20" r="1.4" fill="#c9a24a" opacity=".4"/></pattern>
    <radialGradient id="th-mirror" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#3a4a52"/><stop offset="1" stop-color="#18222a"/></radialGradient>
    <radialGradient id="th-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe2a0" stop-opacity=".45"/><stop offset="1" stop-color="#ffe2a0" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="360" height="300" fill="url(#th-wp)"/>
  <rect y="300" width="360" height="100" fill="#3a2414"/>
  <path d="M0 320h360M0 350h360M0 380h360" stroke="#000" stroke-opacity=".25"/>
  <ellipse cx="130" cy="120" rx="110" ry="96" fill="url(#th-glow)" class="glow"/>
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

  window.DELO_SCENES = { study, train, theatre };
})();
