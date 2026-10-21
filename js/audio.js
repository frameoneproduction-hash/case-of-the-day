// Synthesised sound effects and ambience (no audio files needed).
(function () {
  let ctx = null, master = null, rain = null, enabled = true;

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
    return ctx;
  }
  function tone(freq, dur, type, vol, when, slideTo) {
    if (!enabled || !ensure()) return;
    const t = ctx.currentTime + (when || 0);
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || "sine";
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.02);
  }
  function noise(dur, vol, freq, when) {
    if (!enabled || !ensure()) return;
    const t = ctx.currentTime + (when || 0);
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const s = ctx.createBufferSource(); s.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = freq || 1200;
    const g = ctx.createGain(); g.gain.value = vol || 0.3;
    s.connect(f); f.connect(g); g.connect(master);
    s.start(t);
  }

  const SFX = {
    tap: () => tone(660, 0.06, "triangle", 0.08),
    found: () => { tone(784, 0.12, "sine", 0.18); tone(1175, 0.22, "sine", 0.16, 0.08); },
    miss: () => tone(220, 0.12, "triangle", 0.08, 0, 160),
    wrong: () => { tone(196, 0.25, "sawtooth", 0.08); tone(185, 0.3, "sawtooth", 0.06, 0.05); },
    tick: () => tone(1400, 0.03, "square", 0.04),
    type: () => noise(0.03, 0.15, 3000),
    stamp: () => { noise(0.18, 0.5, 300); tone(90, 0.25, "sine", 0.4, 0, 50); },
    objection: () => { noise(0.12, 0.4, 900); [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.5, "sawtooth", 0.07, 0.02 * i)); tone(130, 0.5, "square", 0.08, 0, 98); },
    coin: () => { tone(988, 0.08, "square", 0.06); tone(1319, 0.2, "square", 0.06, 0.07); },
    win: () => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.35, "triangle", 0.12, i * 0.09)),
    lose: () => [392, 349, 311, 262].forEach((f, i) => tone(f, 0.4, "triangle", 0.1, i * 0.15)),
    page: () => noise(0.12, 0.12, 2500),
    swap: () => { noise(0.06, 0.1, 2000); tone(520, 0.05, "triangle", 0.05, 0.03); },
  };

  function startRain() {
    if (!enabled || !ensure() || rain) return;
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 900;
    const g = ctx.createGain(); g.gain.value = 0.0001;
    s.connect(f); f.connect(g); g.connect(master); s.start();
    g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 1.5);
    rain = { s, g };
  }
  function stopRain() {
    if (!rain) return;
    const r = rain; rain = null;
    try { r.g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6); r.s.stop(ctx.currentTime + 0.7); } catch (e) {}
  }

  window.DELO_AUDIO = {
    play(name) { try { SFX[name] && SFX[name](); } catch (e) {} },
    unlock() { const c = ensure(); if (c && c.state === "suspended") c.resume(); },
    ambience(on) { on ? startRain() : stopRain(); },
    setEnabled(v) { enabled = v; if (!v) stopRain(); },
    pause() { if (ctx && ctx.state === "running") ctx.suspend(); },
    resume() { if (ctx && enabled && ctx.state === "suspended") ctx.resume(); },
  };
})();
