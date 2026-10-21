// Clue mini-games: chemistry (liquid sort), clockwork (rotate gears), torn letter (drag to order).
// Each takes a container and { onSolve, sfx } and returns { solve() } so a hint can finish it.
(function () {
  const rnd = (n) => Math.floor(Math.random() * n);
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ------------------------- CHEMISTRY ------------------------- */
  const LIQ = ["#b3263a", "#3f9a6e", "#e0b84a", "#6fa8d6"];
  function chem(box, o) {
    const k = o.colors || 3, CAP = 4;
    let tubes;
    const solvedState = () => tubes.every((t) => t.length === 0 || (t.length === CAP && t.every((c) => c === t[0])));
    do {
      const balls = shuffle([].concat(...Array.from({ length: k }, (_, c) => Array(CAP).fill(c))));
      tubes = Array.from({ length: k }, (_, i) => balls.slice(i * CAP, i * CAP + CAP)).concat([[], []]);
    } while (solvedState());
    let pick = null, done = false;
    function draw() {
      box.innerHTML = `<div class="tubes">${tubes.map((t, i) => `<button class="tube ${pick === i ? "up" : ""}" data-t="${i}" aria-label="Flask ${i + 1}">
        ${Array.from({ length: CAP }, (_, s) => `<i style="background:${t[CAP - 1 - s] != null ? LIQ[t[CAP - 1 - s]] : "transparent"}"></i>`).join("")}</button>`).join("")}</div>`;
    }
    function pour(a, b) {
      const A = tubes[a], B = tubes[b];
      if (!A.length || B.length >= CAP) return false;
      const c = A[A.length - 1];
      if (B.length && B[B.length - 1] !== c) return false;
      let moved = 0;
      while (A.length && A[A.length - 1] === c && B.length < CAP) { B.push(A.pop()); moved++; }
      return moved > 0;
    }
    box.onclick = (e) => {
      if (done) return;
      const b = e.target.closest("[data-t]"); if (!b) return;
      const i = +b.dataset.t;
      if (pick == null) { if (tubes[i].length) { pick = i; o.sfx("tap"); } }
      else if (pick === i) pick = null;
      else { if (pour(pick, i)) o.sfx("pour"); else o.sfx("miss"); pick = null; }
      draw();
      if (solvedState()) finish();
    };
    function finish() { if (done) return; done = true; box.classList.add("solved"); o.onSolve(); }
    draw();
    return { solve() { tubes = Array.from({ length: k }, (_, c) => Array(CAP).fill(c)).concat([[], []]); pick = null; draw(); finish(); } };
  }

  /* ------------------------- CLOCKWORK ------------------------- */
  // 3x3 tiles with connections (bit 1=N, 2=E, 4=S, 8=W). Tap rotates clockwise. Connect the left spring to the right hands.
  const rot = (m) => ((m << 1) | (m >> 3)) & 15;
  const DIR = [[-1, 0, 1, 4], [0, 1, 2, 8], [1, 0, 4, 1], [0, -1, 8, 2]]; // dr, dc, bit, opposite
  function gears(box, o) {
    const N = o.size || 3;
    let grid, sol, done = false;
    function makePath() {
      // random self-avoiding walk from (1,0) to (1,2)
      for (;;) {
        const path = [[1, 0]], seen = new Set(["1,0"]);
        let ok = false;
        for (let step = 0; step < 40; step++) {
          const [r, c] = path[path.length - 1];
          if (r === 1 && c === N - 1) { ok = true; break; }
          const opts = DIR.map(([dr, dc]) => [r + dr, c + dc]).filter(([y, x]) => y >= 0 && y < N && x >= 0 && x < N && !seen.has(y + "," + x));
          if (!opts.length) break;
          const nx = opts[rnd(opts.length)]; path.push(nx); seen.add(nx.join(","));
        }
        if (ok) return path;
      }
    }
    function build() {
      const path = makePath();
      grid = Array.from({ length: N }, () => Array(N).fill(0));
      path.forEach(([r, c], i) => {
        let m = 0;
        const prev = i === 0 ? [1, -1] : path[i - 1], next = i === path.length - 1 ? [1, N] : path[i + 1];
        for (const [y, x] of [prev, next]) DIR.forEach(([dr, dc, bit]) => { if (y === r + dr && x === c + dc) m |= bit; });
        grid[r][c] = m;
      });
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!grid[r][c]) grid[r][c] = [3, 5, 6, 10][rnd(4)];
      sol = grid.map((row) => row.slice());
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) { let t = rnd(4); while (t--) grid[r][c] = rot(grid[r][c]); }
      if (connected()) build();
    }
    function connected() {
      let r = 1, c = 0, from = 8, guard = 0;
      while (guard++ < 40) {
        const m = grid[r] && grid[r][c];
        if (m == null || !(m & from)) return false;
        const out = DIR.find(([, , bit]) => bit !== from && (m & bit));
        if (!out) return false;
        const [dr, dc, , opp] = out;
        if (r === 1 && c === N - 1 && out[2] === 2) return true;
        r += dr; c += dc; from = opp;
        if (r < 0 || r >= N || c < 0 || c >= N) return false;
      }
      return false;
    }
    const lines = (m) => DIR.map(([, , bit], i) => (m & bit) ? `<path d="M30 30L${[30, 60, 30, 0][i]} ${[0, 30, 60, 30][i]}"/>` : "").join("");
    function draw() {
      const ok = connected();
      box.innerHTML = `<div class="gears-wrap ${ok ? "on" : ""}"><span class="spring"></span><div class="gears" style="grid-template-columns:repeat(${N},var(--g));--g:${N > 3 ? "min(62px, 17vw)" : "min(76px, 21vw)"}">${grid.map((row, r) => row.map((m, c) =>
        `<button class="gear" data-r="${r}" data-c="${c}" aria-label="Gear"><svg viewBox="0 0 60 60"><g class="belt">${lines(m)}</g><circle cx="30" cy="30" r="9"/><circle cx="30" cy="30" r="3" class="hub"/></svg></button>`).join("")).join("")}</div>
        <svg class="dial" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17"/><path class="hand" d="M20 20V8M20 20l7 4"/></svg></div>`;
    }
    box.onclick = (e) => {
      if (done) return;
      const b = e.target.closest("[data-r]"); if (!b) return;
      const r = +b.dataset.r, c = +b.dataset.c;
      grid[r][c] = rot(grid[r][c]); o.sfx("tick");
      draw();
      if (connected()) { done = true; box.classList.add("solved"); setTimeout(o.onSolve, 500); }
    };
    build(); draw();
    return {
      isDone: () => done, // solved but onSolve still waits 500 ms: a hint now would be wasted
      solve() {
        grid = sol.map((row) => row.slice());
        draw(); if (!done) { done = true; box.classList.add("solved"); o.onSolve(); }
      },
    };
  }

  /* ------------------------- TORN LETTER ------------------------- */
  function letter(box, o) {
    const lines = o.lines;
    let order;
    do { order = shuffle(lines.map((_, i) => i)); } while (order.every((v, i) => v === i));
    let done = false;
    function draw() {
      box.innerHTML = `<div class="strips">${order.map((li, pos) => `<div class="strip ${done ? "done" : ""}" data-pos="${pos}" style="--r:${((li * 37) % 7) - 3}deg">${o.esc(lines[li])}</div>`).join("")}</div>`;
    }
    function check() { if (!done && order.every((v, i) => v === i)) { done = true; draw(); o.onSolve(); } }
    let drag = null;
    box.onpointerdown = (e) => {
      if (done) return;
      const el = e.target.closest(".strip"); if (!el) return;
      e.preventDefault();
      const all = [...box.querySelectorAll(".strip")];
      const rects = all.map((s) => s.getBoundingClientRect());
      drag = { el, from: +el.dataset.pos, pos: +el.dataset.pos, y0: e.clientY, rects, step: rects.length > 1 ? rects[1].top - rects[0].top : rects[0].height };
      el.classList.add("dragging"); el.setPointerCapture(e.pointerId);
      o.sfx("tap");
    };
    box.onpointermove = (e) => {
      if (!drag) return;
      const dy = e.clientY - drag.y0;
      const target = Math.max(0, Math.min(order.length - 1, drag.from + Math.round(dy / drag.step)));
      drag.el.style.transform = `translateY(${dy}px) rotate(0deg) scale(1.03)`;
      if (target !== drag.pos) {
        drag.pos = target;
        [...box.querySelectorAll(".strip")].forEach((s) => {
          const p = +s.dataset.pos; if (s === drag.el) return;
          let shift = 0;
          if (drag.from < target && p > drag.from && p <= target) shift = -drag.step;
          if (drag.from > target && p < drag.from && p >= target) shift = drag.step;
          s.style.transform = shift ? `translateY(${shift}px)` : "";
        });
        o.sfx("swap");
      }
    };
    box.onpointerup = box.onpointercancel = () => {
      if (!drag) return;
      const [li] = order.splice(drag.from, 1);
      order.splice(drag.pos, 0, li);
      drag = null; draw(); check();
    };
    draw();
    return { solve() { order = lines.map((_, i) => i); done = true; draw(); o.onSolve(); } };
  }

  window.DELO_MINI = { chem, gears, letter };
})();
