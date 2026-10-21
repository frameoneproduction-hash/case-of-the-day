// Parametric suspect portraits. look = { hair, hairColor, outfit, outfitColor, skin, extras[], female, lips }
(function () {
  let uid = 0;
  const SKIN = "#e6c4a6";

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const c = (v) => Math.max(0, Math.min(255, v + amt));
    return "#" + [c(n >> 16), c((n >> 8) & 255), c(n & 255)].map((v) => v.toString(16).padStart(2, "0")).join("");
  }

  const OUTFITS = {
    dress: (c) => `<path d="M6 76c2-16 14-23 30-23s28 7 30 23Z" fill="${c}"/><path d="M26 55l10 10 10-10" fill="${shade(c, -18)}"/>`,
    blouse: (c) => `<path d="M6 76c2-16 14-23 30-23s28 7 30 23Z" fill="${c}"/><path d="M29 53l7 7 7-7" stroke="#f4eee0" stroke-width="2.2" fill="none"/>`,
    suit: (c) => `<path d="M6 76c2-16 14-23 30-23s28 7 30 23Z" fill="${c}"/><path d="M29 53l7 13 7-13Z" fill="#efe9dc"/><path d="M22 60l7-7 4 10ZM50 60l-7-7-4 10Z" fill="${shade(c, -16)}"/>`,
    tux: (c) => `<path d="M6 76c2-16 14-23 30-23s28 7 30 23Z" fill="${c}"/><path d="M29 53l7 15 7-15Z" fill="#efe9dc"/><circle cx="36" cy="63" r=".9" fill="#888"/><circle cx="36" cy="66.5" r=".9" fill="#888"/>`,
    vest: (c) => `<path d="M6 76c2-16 14-23 30-23s28 7 30 23Z" fill="#efe9dc"/><path d="M24 76V58l12 10 12-10v18Z" fill="${c}"/>`,
    uniform: (c) => `<path d="M6 76c2-16 14-23 30-23s28 7 30 23Z" fill="${c}"/><path d="M30 53h12v4H30Z" fill="${shade(c, -20)}"/><circle cx="33" cy="63" r="1.2" fill="#d1a94e"/><circle cx="39" cy="63" r="1.2" fill="#d1a94e"/><circle cx="33" cy="69" r="1.2" fill="#d1a94e"/><circle cx="39" cy="69" r="1.2" fill="#d1a94e"/><path d="M14 60h8M50 60h8" stroke="#d1a94e" stroke-width="1.5"/>`,
    maid: (c) => `<path d="M6 76c2-16 14-23 30-23s28 7 30 23Z" fill="${c}"/><path d="M27 58h18v18H27Z" fill="#f4eee0"/><path d="M30 53l6 4 6-4" stroke="#f4eee0" stroke-width="2" fill="none"/>`,
    coat: (c) => `<path d="M6 76c2-16 14-23 30-23s28 7 30 23Z" fill="${c}"/><path d="M28 53l8 9 8-9 4 2-12 21-12-21Z" fill="${shade(c, -22)}"/><path d="M33 56l3 4 3-4" fill="#efe9dc"/>`,
  };

  // back = drawn behind the face; front = over the head
  const HAIR = {
    bun: { back: (c) => `<ellipse cx="36" cy="27" rx="15" ry="15" fill="${c}"/><circle cx="36" cy="11" r="6.5" fill="${c}"/>`,
           front: (c) => `<path d="M25 30q1-12 11-12t11 12q-4-7-11-7t-11 7Z" fill="${shade(c, 12)}"/>` },
    bald: { back: () => "", front: (c) => `<path d="M25.5 33q-1-7 3-10M46.5 33q1-7-3-10" stroke="${c}" stroke-width="3.2" fill="none" stroke-linecap="round"/><ellipse cx="33" cy="23" rx="4" ry="1.6" fill="#fff" opacity=".35"/>` },
    bob: { back: (c) => `<path d="M22.5 36q-1-20 13.5-20t13.5 20v8h-27Z" fill="${c}"/>`,
           front: (c) => `<path d="M25 31q0-13 11-13t11 13q-5-6-11-5.5t-11 5.5Z" fill="${c}"/><path d="M25 30q-1 7 1 13h3q-2-6-1-13ZM47 30q1 7-1 13h-3q2-6 1-13Z" fill="${c}"/>` },
    slick: { back: () => "", front: (c) => `<path d="M25.5 29q0-13 10.5-13t10.5 13q-3-7-10.5-7.5t-10.5 7.5Z" fill="${c}"/><path d="M33 16.5q-2 4-1 6.5" stroke="${shade(c, -25)}" stroke-width=".8" fill="none"/>` },
    curly: { back: (c) => `<g fill="${c}"><circle cx="25" cy="26" r="6"/><circle cx="47" cy="26" r="6"/><circle cx="24" cy="36" r="5"/><circle cx="48" cy="36" r="5"/></g>`,
             front: (c) => `<g fill="${c}"><circle cx="28" cy="21" r="5.5"/><circle cx="36" cy="18" r="6"/><circle cx="44" cy="21" r="5.5"/><circle cx="31" cy="24" r="3.5"/><circle cx="41" cy="24" r="3.5"/></g>` },
    wavy: { back: (c) => `<path d="M21 46q-3-8 0-16q1-14 15-14t15 14q3 8 0 16q-3 4-6 0V32H27v14q-3 4-6 0Z" fill="${c}"/>`,
            front: (c) => `<path d="M25 31q0-13 11-13t11 13q-3-3-6-2q-3-4-5-1q-3-3-5 1q-3-1-6 2Z" fill="${c}"/>` },
    short: { back: () => "", front: (c) => `<path d="M25 30q0-14 11-14t11 14q-2-5-5-6q-3 2-6 1q-3 1-6-1q-3 1-5 6Z" fill="${c}"/><path d="M25.3 28v6M46.7 28v6" stroke="${c}" stroke-width="2"/>` },
    long: { back: (c) => `<path d="M22 58q-2-16 0-26q1-16 14-16t14 16q2 10 0 26Z" fill="${c}"/>`,
            front: (c) => `<path d="M25 32q-1-14 11-14t11 14q-4-8-11-8t-11 8Z" fill="${c}"/>` },
    "grey-short": { back: () => "", front: (c) => `<path d="M25 30q0-13 11-13t11 13q-3-5-11-5t-11 5Z" fill="${c}"/><path d="M25.5 27v9M46.5 27v9" stroke="${c}" stroke-width="2.4"/>` },
  };

  const EXTRA = {
    pearls: () => `<path d="M27 52q9 7 18 0" fill="none" stroke="#f3eee2" stroke-width="2.6" stroke-dasharray="0.1 3.2" stroke-linecap="round"/>`,
    necklace: () => `<path d="M28 52q8 6 16 0" fill="none" stroke="#d1a94e" stroke-width="1.2"/><circle cx="36" cy="56" r="2" fill="#9c3434" stroke="#d1a94e" stroke-width=".8"/>`,
    earrings: () => `<circle cx="25.6" cy="36" r="1.6" fill="#f3eee2"/><circle cx="46.4" cy="36" r="1.6" fill="#f3eee2"/>`,
    glasses: () => `<circle cx="31.6" cy="32" r="3.7" fill="#fff" fill-opacity=".15" stroke="#2a2118" stroke-width="1.2"/><circle cx="40.4" cy="32" r="3.7" fill="#fff" fill-opacity=".15" stroke="#2a2118" stroke-width="1.2"/><path d="M35.3 32h1.4" stroke="#2a2118" stroke-width="1.2"/>`,
    monocle: () => `<circle cx="40.4" cy="32" r="3.8" fill="#fff" fill-opacity=".2" stroke="#d1a94e" stroke-width="1.1"/><path d="M44 33q2 6 0 12" stroke="#d1a94e" stroke-width=".6" fill="none"/>`,
    mustache: () => `<path d="M29.5 38.5q3.2-2.4 6.5 0q3.3-2.4 6.5 0q-3.3 3.2-6.5 1.2q-3.2 2-6.5-1.2Z" fill="#6e5e4e"/>`,
    beard: (lk) => `<path d="M26 35q0 12 10 12t10-12q-3 5-10 5t-10-5Z" fill="${lk.hairColor}"/>`,
    sideburns: (lk) => `<path d="M26.3 28v9M45.7 28v9" stroke="${lk.hairColor}" stroke-width="2.6"/>`,
    bowtie: (lk) => `<path d="M31 55.5l5 2.6-5 2.6ZM41 55.5l-5 2.6 5 2.6Z" fill="${lk.outfit === "tux" ? "#050505" : "#9c3434"}"/>`,
    tie: () => `<path d="M34.5 55h3l1 3-2.5 12-2.5-12Z" fill="#2d6b52"/>`,
    headband: () => `<path d="M25.5 25q10.5-6 21 0" stroke="#d1a94e" stroke-width="1.6" fill="none"/>`,
    feather: () => `<path d="M44 23q7-10 4-17q-5 7-6 16Z" fill="#ece5d2"/>`,
    hat: (lk) => `<ellipse cx="36" cy="20" rx="17" ry="3.5" fill="${shade(lk.outfitColor, -10)}"/><path d="M26 20q0-11 10-11t10 11Z" fill="${shade(lk.outfitColor, -10)}"/><path d="M26.5 17h19" stroke="#9c3434" stroke-width="2"/>`,
    cap: () => `<path d="M26 22q0-8 10-8t10 8q-10-2-20 0Z" fill="#f4eee0"/><path d="M27 21h18" stroke="#e0d6c0" stroke-width="2"/>`,
    sweat: () => `<path d="M46 22q1.6 2.6 0 3.6q-1.6-1 0-3.6Z" fill="#9ec2d6"/>`,
    scar: () => `<path d="M41 35l4 4" stroke="#b07a6a" stroke-width="1"/>`,
    flower: () => `<circle cx="47" cy="61" r="2.6" fill="#e7a2b9"/><circle cx="47" cy="61" r="1" fill="#d1a94e"/>`,
    stern: () => `<path d="M29.5 28.5l4.5 1.2M42.5 28.5l-4.5 1.2" stroke="#555" stroke-width="1.6" stroke-linecap="round"/>`,
  };
  const OVER_FACE = ["glasses", "monocle", "mustache", "beard", "sideburns", "headband", "feather", "hat", "cap", "sweat", "scar", "stern", "earrings"];

  function face(lk) {
    const skin = lk.skin || SKIN;
    const ex = lk.extras || [];
    const eyes = lk.female
      ? `<path d="M30.5 32.2q2-1.8 4 0M37.5 32.2q2-1.8 4 0" stroke="#141414" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M30 30.5l-1-1M42 30.5l1-1" stroke="#141414" stroke-width="1"/>`
      : ex.includes("glasses") ? `<circle cx="31.6" cy="32.3" r="1" fill="#2a2118"/><circle cx="40.4" cy="32.3" r="1" fill="#2a2118"/>`
      : `<circle cx="32" cy="32" r="1.1" fill="#2a2118"/><circle cx="40" cy="32" r="1.1" fill="#2a2118"/>`;
    const brows = ex.includes("stern") ? "" : `<path d="M30 29.3q2-1 4 0M38 29.3q2-1 4 0" stroke="${shade(lk.hairColor || "#555", -10)}" stroke-width="1" fill="none"/>`;
    const mouth = lk.lips
      ? `<path d="M33.3 38.6q2.7-1.8 5.4 0q-2.7 2.3-5.4 0Z" fill="${lk.lips}"/>`
      : lk.female ? `<path d="M33.5 39.2q2.5 1.2 5 0" stroke="#a65a5a" stroke-width="1.4" fill="none" stroke-linecap="round"/>`
      : `<path d="M33 40.5h6" stroke="#7a4a40" stroke-width="1.3" stroke-linecap="round"/>`;
    const blush = lk.female ? `<circle cx="30.5" cy="36" r="1.6" fill="#e7a2b9" opacity=".45"/><circle cx="41.5" cy="36" r="1.6" fill="#e7a2b9" opacity=".45"/>` : "";
    return `<rect x="31.5" y="40" width="9" height="14" fill="${skin}"/><ellipse cx="36" cy="32" rx="${lk.female ? 10 : 10.8}" ry="${lk.hair === "slick" ? 13.5 : 12.5}" fill="${skin}"/>
      <path d="M36 32v4.5l-1.4.9" stroke="${shade(skin, -40)}" stroke-width=".9" fill="none"/>${blush}${eyes}${brows}${mouth}`;
  }

  window.DELO_PORTRAIT = function (look, color, bgOverride) {
    const lk = Object.assign({ hair: "short", hairColor: "#4a3a2a", outfit: "suit", outfitColor: "#3a3a3a", extras: [] }, look);
    const id = "pc" + (++uid);
    const bg = bgOverride || shade(lk.outfitColor, -60);
    const hair = HAIR[lk.hair] || HAIR.short;
    const ex = lk.extras || [];
    const under = ex.filter((x) => !OVER_FACE.includes(x)).map((x) => (EXTRA[x] ? EXTRA[x](lk) : "")).join("");
    const over = ex.filter((x) => OVER_FACE.includes(x)).map((x) => (EXTRA[x] ? EXTRA[x](lk) : "")).join("");
    return `<svg class="portrait" viewBox="0 0 72 72" aria-hidden="true">
      <defs><clipPath id="${id}"><circle cx="36" cy="36" r="32.5"/></clipPath></defs>
      <circle cx="36" cy="36" r="35" fill="${bg}" stroke="${color}" stroke-width="2"/>
      <g clip-path="url(#${id})">${hair.back(lk.hairColor)}${(OUTFITS[lk.outfit] || OUTFITS.suit)(lk.outfitColor)}${under}${face(lk)}${hair.front(lk.hairColor)}${over}</g>
      <circle cx="36" cy="36" r="32.5" fill="none" stroke="${color}" stroke-opacity=".4" stroke-dasharray="2 3"/>
    </svg>`;
  };

  // Ada Langton, the player's detective
  window.DELO_ADA = { hair: "bob", hairColor: "#6b3a1e", outfit: "coat", outfitColor: "#2d6b52", extras: ["hat", "earrings"], female: true, lips: "#9c3434" };
})();
