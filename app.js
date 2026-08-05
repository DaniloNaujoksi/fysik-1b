// Williams Fysiklabb — motor: navigation, simuleringar, quiz, XP

const app = (() => {
  const STORAGE_KEY = 'fysiklabb-william';
  let state = load();
  let activeSim = null; // { stop: fn } för pågående animation

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { xp: 0, best: {} };
    } catch { return { xp: 0, best: {} }; }
  }
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

  // ---------- Stjärnhimmel ----------
  function makeStars() {
    const wrap = document.getElementById('stars');
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const size = Math.random() * 2.5 + 0.5;
      s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 3}s`;
      wrap.appendChild(s);
    }
  }

  // ---------- XP & nivåer ----------
  function levelFor(xp) {
    let lvl = LEVELS[0], next = null;
    for (let i = 0; i < LEVELS.length; i++) {
      if (xp >= LEVELS[i].xp) { lvl = LEVELS[i]; next = LEVELS[i + 1] || null; }
    }
    return { lvl, next };
  }

  function renderXP() {
    const { lvl, next } = levelFor(state.xp);
    document.getElementById('level-title').textContent = lvl.title;
    document.getElementById('xp-count').textContent = `${state.xp} XP` + (next ? ` · nästa nivå: ${next.xp} XP` : ' · MAX!');
    const pct = next ? ((state.xp - lvl.xp) / (next.xp - lvl.xp)) * 100 : 100;
    document.getElementById('xp-fill').style.width = pct + '%';
  }

  function addXP(amount) {
    const before = levelFor(state.xp).lvl;
    state.xp += amount;
    save();
    renderXP();
    const after = levelFor(state.xp).lvl;
    if (after.title !== before.title) {
      toast(`🎉 NY NIVÅ: ${after.title}`);
      confetti(120);
    }
  }

  // ---------- Navigation ----------
  function buildNav() {
    const nav = document.getElementById('module-nav');
    const home = document.createElement('button');
    home.className = 'nav-btn active';
    home.textContent = '🏠 Start';
    home.onclick = () => openModule(null);
    nav.appendChild(home);
    MODULES.forEach(m => {
      const b = document.createElement('button');
      b.className = 'nav-btn';
      b.dataset.mod = m.id;
      b.innerHTML = navLabel(m);
      b.onclick = () => openModule(m.id);
      nav.appendChild(b);
    });
  }

  function navLabel(m) {
    const done = (state.best[m.id] || 0) >= m.quiz.length;
    return `${m.icon} ${m.title}${done ? ' <span class="done-check">✓</span>' : ''}`;
  }

  function refreshNav() {
    document.querySelectorAll('.nav-btn[data-mod]').forEach(b => {
      const m = MODULES.find(x => x.id === b.dataset.mod);
      b.innerHTML = navLabel(m);
    });
  }

  function openModule(id) {
    if (activeSim) { activeSim.stop(); activeSim = null; }
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (!id) {
      showSection('welcome');
      document.querySelector('#module-nav .nav-btn').classList.add('active');
      renderOverview();
      return;
    }
    const m = MODULES.find(x => x.id === id);
    document.querySelector(`.nav-btn[data-mod="${id}"]`).classList.add('active');
    renderModule(m);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showSection(id) {
    document.querySelectorAll('main section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  // ---------- Modulrendering ----------
  function renderModule(m) {
    let sec = document.getElementById('module-view');
    if (!sec) {
      sec = document.createElement('section');
      sec.id = 'module-view';
      document.getElementById('content').appendChild(sec);
    }
    const best = state.best[m.id] || 0;
    sec.innerHTML = `
      <div class="card">
        <h2>${m.icon} ${m.title}</h2>
        <p>${m.intro}</p>
        ${m.theory.map(t => `
          <div class="theory-block">
            <h4>${t.h}</h4>
            <p>${t.p}</p>
            <div>${t.f.map(f => `<span class="formula">${f}</span>`).join(' ')}</div>
          </div>`).join('')}
        <p class="joke">😄 ${m.joke}</p>
      </div>
      <div class="card">
        <h3>${m.simTitle}</h3>
        <p>${m.simDesc}</p>
        <div class="sim-wrap" id="sim-container"></div>
      </div>
      <div class="card">
        <h3>🎯 Quiz — ${m.quiz.length} frågor · bästa: ${best}/${m.quiz.length}</h3>
        <p>10 XP per rätt svar. Fullpott ger 20 bonus-XP och konfetti. Konfettin är vetenskapligt bevisad motivationshöjare.*</p>
        <p style="font-size:.75rem;color:var(--text-dim)">*Nej det är den inte.</p>
        <div id="quiz-container">
          <button class="btn-primary" onclick="app.startQuiz('${m.id}')">Starta quizet 🎬</button>
        </div>
      </div>`;
    showSection('module-view');
    activeSim = SIMS[m.sim](document.getElementById('sim-container'));
  }

  // ---------- Startsidans översikt ----------
  function renderOverview() {
    const el = document.getElementById('progress-overview');
    el.innerHTML = MODULES.map(m => {
      const best = state.best[m.id] || 0;
      const done = best >= m.quiz.length;
      return `<div class="prog-row">
        <span>${m.icon} ${m.title}</span>
        <span class="best">${done ? '✅ ' : ''}${best}/${m.quiz.length}</span>
      </div>`;
    }).join('');
  }

  function resetProgress() {
    if (!confirm('Säkert? All XP och alla resultat försvinner. Einstein kommer att vara besviken.')) return;
    state = { xp: 0, best: {} };
    save();
    renderXP();
    renderOverview();
    refreshNav();
    toast('Allt nollställt. Vi låtsas att det aldrig hände. 🤫');
  }

  // ---------- Quiz ----------
  let quiz = null;

  function startQuiz(modId) {
    const m = MODULES.find(x => x.id === modId);
    // Blanda frågor och svarsalternativ
    const questions = shuffle(m.quiz.map(q => {
      const order = shuffle(q.a.map((_, i) => i));
      return { q: q.q, a: order.map(i => q.a[i]), correct: order.indexOf(q.correct), expl: q.expl };
    }));
    quiz = { modId, questions, index: 0, score: 0, results: [] };
    renderQuestion();
  }

  function renderQuestion() {
    const c = document.getElementById('quiz-container');
    const { questions, index, results } = quiz;
    const q = questions[index];
    c.innerHTML = `
      <div class="quiz-progress">${questions.map((_, i) =>
        `<div class="quiz-dot ${i < index ? (results[i] ? 'correct' : 'wrong') : i === index ? 'current' : ''}"></div>`).join('')}
      </div>
      <div class="quiz-q">Fråga ${index + 1}/${questions.length}: ${q.q}</div>
      <div class="quiz-answers">${q.a.map((a, i) =>
        `<button class="answer-btn" onclick="app.answer(${i})">${String.fromCharCode(65 + i)}. ${a}</button>`).join('')}
      </div>
      <div id="quiz-feedback"></div>`;
  }

  function answer(i) {
    const q = quiz.questions[quiz.index];
    const correct = i === q.correct;
    quiz.results.push(correct);
    if (correct) { quiz.score++; addXP(10); }
    document.querySelectorAll('.answer-btn').forEach((b, bi) => {
      b.disabled = true;
      if (bi === q.correct) b.classList.add('correct');
      else if (bi === i) b.classList.add('wrong');
    });
    const msg = correct ? pick(PRAISE) : pick(ROAST);
    document.getElementById('quiz-feedback').innerHTML = `
      <div class="quiz-feedback ${correct ? 'good' : 'bad'}">
        <b>${msg}</b><br>${q.expl}<br><br>
        <button class="btn-primary" onclick="app.nextQuestion()">${quiz.index + 1 < quiz.questions.length ? 'Nästa fråga →' : 'Visa resultat 🏁'}</button>
      </div>`;
    document.getElementById('quiz-feedback').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function nextQuestion() {
    quiz.index++;
    if (quiz.index < quiz.questions.length) { renderQuestion(); return; }
    finishQuiz();
  }

  function finishQuiz() {
    const { modId, score, questions } = quiz;
    const total = questions.length;
    const prev = state.best[modId] || 0;
    if (score > prev) { state.best[modId] = score; save(); refreshNav(); }
    const perfect = score === total;
    if (perfect) { addXP(20); confetti(200); }
    const pct = score / total;
    const [emoji, verdict] =
      perfect ? ['🏆', 'FULLPOTT! Du ÄR fysiken nu. Rimligtvis borde Nobelkommittén höra av sig.'] :
      pct >= 0.75 ? ['🚀', 'Riktigt starkt! Bara lite finslipning kvar.'] :
      pct >= 0.5 ? ['🧪', 'Halvvägs till genialitet. Läs teorin igen och kör en runda till.'] :
      ['🫠', 'Aj. Men lugn — även Einstein fick underkänt ibland (nej, det är en myt, men det låter tröstande).'];
    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-result">
        <span class="big-emoji">${emoji}</span>
        <h3>${score}/${total} rätt</h3>
        <p>${verdict}</p>
        <p style="color:var(--text-dim)">+${score * 10}${perfect ? ' +20 bonus' : ''} XP</p><br>
        <button class="btn-primary" onclick="app.startQuiz('${modId}')">Kör igen 🔄</button>
        <button class="btn-ghost" onclick="app.openModule(null)" style="margin-left:8px">Till start 🏠</button>
      </div>`;
    quiz = null;
  }

  // ---------- Hjälpare ----------
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 3000);
  }

  // ---------- Konfetti ----------
  function confetti(count) {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const colors = ['#7c6cff', '#00d4ff', '#ff6b9d', '#3ddc84', '#ffd93d'];
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.5,
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      size: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI,
      vrot: (Math.random() - 0.5) * 0.2
    }));
    let frames = 0;
    (function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.rot += p.vrot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      if (++frames < 220) requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    })();
  }

  // ---------- Simuleringar ----------
  // Varje sim returnerar { stop } så animationen kan städas vid modulbyte.

  function simShell(container, controlsHtml, readoutHtml, height = 260) {
    container.innerHTML = `
      <canvas class="sim-canvas" width="800" height="${height}"></canvas>
      <div class="sim-controls">${controlsHtml}</div>
      <div class="sim-readout">${readoutHtml}</div>`;
    return container.querySelector('canvas');
  }

  function slider(id, label, min, max, val, step, unit) {
    return `<div class="sim-control">
      <label>${label}: <span class="val" id="${id}-val">${val}${unit}</span></label>
      <input type="range" id="${id}" min="${min}" max="${max}" value="${val}" step="${step}">
    </div>`;
  }

  const SIMS = {
    // --- Ellära: krets med lampa ---
    circuit(container) {
      const canvas = simShell(container,
        slider('sim-u', 'Spänning U', 1, 24, 12, 1, ' V') + slider('sim-r', 'Resistans R', 1, 24, 6, 1, ' Ω'),
        `<div class="readout-box">Ström: <b id="sim-i">2.0 A</b></div>
         <div class="readout-box">Effekt: <b id="sim-p">24 W</b></div>`);
      const ctx = canvas.getContext('2d');
      let U = 12, R = 6, phase = 0, running = true;
      const electrons = Array.from({ length: 14 }, (_, i) => i / 14);

      container.querySelector('#sim-u').oninput = e => { U = +e.target.value; upd(); };
      container.querySelector('#sim-r').oninput = e => { R = +e.target.value; upd(); };
      function upd() {
        container.querySelector('#sim-u-val').textContent = U + ' V';
        container.querySelector('#sim-r-val').textContent = R + ' Ω';
        container.querySelector('#sim-i').textContent = (U / R).toFixed(2) + ' A';
        container.querySelector('#sim-p').textContent = (U * U / R).toFixed(0) + ' W';
      }

      // Rektangulär kretsbana
      const path = [[150, 200], [150, 80], [650, 80], [650, 200], [150, 200]];
      const segLens = [];
      let totalLen = 0;
      for (let i = 0; i < path.length - 1; i++) {
        const l = Math.hypot(path[i + 1][0] - path[i][0], path[i + 1][1] - path[i][1]);
        segLens.push(l); totalLen += l;
      }
      function pointAt(t) {
        let d = t * totalLen;
        for (let i = 0; i < segLens.length; i++) {
          if (d <= segLens[i]) {
            const f = d / segLens[i];
            return [path[i][0] + (path[i + 1][0] - path[i][0]) * f, path[i][1] + (path[i + 1][1] - path[i][1]) * f];
          }
          d -= segLens[i];
        }
        return path[0];
      }

      (function draw() {
        if (!running) return;
        const I = U / R;
        const P = U * U / R;
        ctx.clearRect(0, 0, 800, 260);
        // Ledningar
        ctx.strokeStyle = '#4a5580';
        ctx.lineWidth = 4;
        ctx.beginPath();
        path.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
        ctx.stroke();
        // Batteri (vänster)
        ctx.fillStyle = '#151a2e';
        ctx.fillRect(120, 120, 60, 50);
        ctx.strokeStyle = '#7c6cff';
        ctx.strokeRect(120, 120, 60, 50);
        ctx.fillStyle = '#e8eaf6';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(U + ' V', 150, 150);
        ctx.fillText('🔋', 150, 115);
        // Lampa (höger) — ljusstyrka efter effekt
        const glow = Math.min(1, P / 60);
        const grad = ctx.createRadialGradient(650, 145, 5, 650, 145, 60);
        grad.addColorStop(0, `rgba(255, 220, 100, ${0.25 + glow * 0.75})`);
        grad.addColorStop(1, 'rgba(255, 220, 100, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(650, 145, 60, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = `${24 + glow * 14}px sans-serif`;
        ctx.fillText('💡', 650, 155);
        // Resistor (uppe)
        ctx.fillStyle = '#151a2e';
        ctx.fillRect(360, 65, 80, 30);
        ctx.strokeStyle = '#ff6b9d';
        ctx.strokeRect(360, 65, 80, 30);
        ctx.fillStyle = '#e8eaf6';
        ctx.font = '13px sans-serif';
        ctx.fillText(R + ' Ω', 400, 85);
        // Elektroner — fart proportionell mot ström
        phase += I * 0.0018;
        ctx.fillStyle = '#00d4ff';
        electrons.forEach(off => {
          const [x, y] = pointAt((off + phase) % 1);
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(draw);
      })();
      return { stop: () => { running = false; } };
    },

    // --- Kärnfysik: sönderfall ---
    decay(container) {
      const canvas = simShell(container,
        slider('sim-t12', 'Halveringstid', 1, 10, 3, 1, ' s') +
        `<div class="sim-control"><button class="btn-primary" id="sim-start" style="width:100%">☢️ Starta sönderfall</button></div>`,
        `<div class="readout-box">Kvar: <b id="sim-n">400 / 400</b></div>
         <div class="readout-box">Tid: <b id="sim-time">0,0 s</b></div>`, 300);
      const ctx = canvas.getContext('2d');
      let T12 = 3, running = true, playing = false, t = 0, last = 0;
      const N0 = 400;
      let atoms;
      const history = [];

      function reset() {
        atoms = Array.from({ length: N0 }, (_, i) => ({
          x: 30 + (i % 25) * 15, y: 25 + Math.floor(i / 25) * 15, alive: true
        }));
        history.length = 0;
        t = 0;
      }
      reset();

      container.querySelector('#sim-t12').oninput = e => {
        T12 = +e.target.value;
        container.querySelector('#sim-t12-val').textContent = T12 + ' s';
      };
      container.querySelector('#sim-start').onclick = () => { reset(); playing = true; last = performance.now(); };

      (function draw(now) {
        if (!running) return;
        if (playing) {
          const dt = Math.min((now - last) / 1000, 0.1);
          last = now;
          t += dt;
          // Sannolikhet per atom: p = 1 − 2^(−dt/T½)
          const p = 1 - Math.pow(2, -dt / T12);
          atoms.forEach(a => { if (a.alive && Math.random() < p) a.alive = false; });
          const alive = atoms.filter(a => a.alive).length;
          history.push([t, alive]);
          container.querySelector('#sim-n').textContent = `${alive} / ${N0}`;
          container.querySelector('#sim-time').textContent = t.toFixed(1) + ' s';
          if (alive === 0 || t > T12 * 6) playing = false;
        }
        ctx.clearRect(0, 0, 800, 300);
        // Atomer till vänster
        atoms.forEach(a => {
          ctx.fillStyle = a.alive ? '#3ddc84' : 'rgba(255,84,112,.25)';
          ctx.beginPath();
          ctx.arc(a.x, a.y, a.alive ? 5 : 3, 0, Math.PI * 2);
          ctx.fill();
        });
        // Graf till höger
        const gx = 440, gy = 20, gw = 330, gh = 250;
        ctx.strokeStyle = '#4a5580';
        ctx.lineWidth = 1;
        ctx.strokeRect(gx, gy, gw, gh);
        ctx.fillStyle = '#9aa0c3';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('N (antal kvar)', gx + 5, gy + 15);
        ctx.fillText('t', gx + gw - 12, gy + gh - 6);
        // Halveringslinjer
        ctx.strokeStyle = 'rgba(124,108,255,.3)';
        [0.5, 0.25, 0.125].forEach(f => {
          const y = gy + gh - f * gh;
          ctx.beginPath(); ctx.moveTo(gx, y); ctx.lineTo(gx + gw, y); ctx.stroke();
          ctx.fillText((f * 100) + '%', gx + gw - 38, y - 3);
        });
        if (history.length > 1) {
          const tMax = Math.max(T12 * 6, t);
          ctx.strokeStyle = '#00d4ff';
          ctx.lineWidth = 2;
          ctx.beginPath();
          history.forEach(([ht, hn], i) => {
            const x = gx + (ht / tMax) * gw;
            const y = gy + gh - (hn / N0) * gh;
            i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
          });
          ctx.stroke();
        }
        requestAnimationFrame(draw);
      })(performance.now());
      return { stop: () => { running = false; } };
    },

    // --- Relativitet: tidsdilatation ---
    relativity(container) {
      const canvas = simShell(container,
        slider('sim-v', 'Raketens fart', 0, 99, 50, 1, ' % av c'),
        `<div class="readout-box">Gammafaktor γ: <b id="sim-gamma">1.15</b></div>
         <div class="readout-box">1 år ombord = <b id="sim-years">1.15 år</b> på jorden</div>`);
      const ctx = canvas.getContext('2d');
      let v = 0.5, running = true, earthAngle = 0, rocketX = 0;

      container.querySelector('#sim-v').oninput = e => {
        v = +e.target.value / 100;
        container.querySelector('#sim-v-val').textContent = e.target.value + ' % av c';
        upd();
      };
      function gamma() { return 1 / Math.sqrt(1 - v * v); }
      function upd() {
        const g = gamma();
        container.querySelector('#sim-gamma').textContent = g.toFixed(2);
        container.querySelector('#sim-years').textContent = g.toFixed(2) + ' år';
      }
      upd();

      function clock(x, y, r, angle, label, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle - Math.PI / 2) * r * 0.75, y + Math.sin(angle - Math.PI / 2) * r * 0.75);
        ctx.stroke();
        ctx.fillStyle = '#e8eaf6';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, y + r + 20);
      }

      (function draw() {
        if (!running) return;
        ctx.clearRect(0, 0, 800, 260);
        const g = gamma();
        earthAngle += 0.05;
        // Jordklocka
        ctx.font = '36px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🌍', 160, 70);
        clock(160, 150, 45, earthAngle, 'Jordens klocka', '#00d4ff');
        // Raketklocka — går långsammare med faktor γ
        rocketX = (rocketX + v * 4) % 380;
        ctx.font = '30px sans-serif';
        ctx.fillText('🚀', 400 + rocketX, 70);
        clock(560, 150, 45, earthAngle / g, `Raketens klocka (går ${g.toFixed(2)}× långsammare)`, '#ff6b9d');
        // Fartstreck
        if (v > 0.05) {
          ctx.strokeStyle = 'rgba(0,212,255,.4)';
          ctx.lineWidth = 2;
          for (let i = 0; i < 5; i++) {
            const lx = 380 + rocketX - i * 18 - 10;
            ctx.beginPath();
            ctx.moveTo(lx, 58 + (i % 3) * 6);
            ctx.lineTo(lx - 12 * v * 2, 58 + (i % 3) * 6);
            ctx.stroke();
          }
        }
        requestAnimationFrame(draw);
      })();
      return { stop: () => { running = false; } };
    },

    // --- Energi: kula i skål (Ep <-> Ek) ---
    energy(container) {
      const canvas = simShell(container,
        slider('sim-fric', 'Friktion', 0, 10, 2, 1, '') +
        `<div class="sim-control"><button class="btn-primary" id="sim-drop" style="width:100%">🔄 Släpp kulan igen</button></div>`,
        `<div class="readout-box">Lägesenergi: <b id="sim-ep">100 %</b></div>
         <div class="readout-box">Rörelseenergi: <b id="sim-ek">0 %</b></div>
         <div class="readout-box">Värme (förlust): <b id="sim-heat">0 %</b></div>`);
      const ctx = canvas.getContext('2d');
      let running = true, fric = 2;
      // Kulan glider i parabelformad skål: y = k·x², enkel pendling
      let pos = -1, vel = 0; // pos i [-1, 1]
      container.querySelector('#sim-fric').oninput = e => {
        fric = +e.target.value;
        container.querySelector('#sim-fric-val').textContent = fric;
      };
      container.querySelector('#sim-drop').onclick = () => { pos = -1; vel = 0; };

      (function draw() {
        if (!running) return;
        // Enkel fysik: acceleration mot mitten proportionell mot lutningen
        const acc = -pos * 0.004;
        vel += acc;
        vel *= (1 - fric * 0.0012);
        pos += vel;
        // Energier (normerade): total start = 1. SHM: v²max = k·x0² med k = 0.004
        const ep = pos * pos;
        const ek = vel * vel / 0.004;
        const total = ep + ek;
        const heat = Math.max(0, 1 - total);
        container.querySelector('#sim-ep').textContent = Math.round(ep * 100) + ' %';
        container.querySelector('#sim-ek').textContent = Math.round(Math.min(ek, 1) * 100) + ' %';
        container.querySelector('#sim-heat').textContent = Math.round(heat * 100) + ' %';

        ctx.clearRect(0, 0, 800, 260);
        // Skål
        ctx.strokeStyle = '#4a5580';
        ctx.lineWidth = 4;
        ctx.beginPath();
        for (let px = -1; px <= 1; px += 0.02) {
          const x = 250 + px * 200;
          const y = 80 + (px * px) * 140;
          px === -1 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        // Kula
        const bx = 250 + pos * 200;
        const by = 80 + (pos * pos) * 140 - 12;
        ctx.font = '24px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('⚽', bx, by + 8);
        // Energistaplar
        const bars = [['Ep', ep, '#7c6cff'], ['Ek', Math.min(ek, 1), '#00d4ff'], ['Värme', heat, '#ff6b9d']];
        bars.forEach(([label, val, color], i) => {
          const x = 560 + i * 70;
          const hgt = Math.max(0, Math.min(1, val)) * 160;
          ctx.fillStyle = color;
          ctx.fillRect(x, 210 - hgt, 40, hgt);
          ctx.fillStyle = '#9aa0c3';
          ctx.font = '13px sans-serif';
          ctx.fillText(label, x + 20, 232);
        });
        requestAnimationFrame(draw);
      })();
      return { stop: () => { running = false; } };
    },

    // --- Tryck: dykare ---
    pressure(container) {
      const canvas = simShell(container,
        slider('sim-depth', 'Djup', 0, 40, 5, 1, ' m'),
        `<div class="readout-box">Vattentryck: <b id="sim-pw">49 kPa</b></div>
         <div class="readout-box">Totalt tryck (inkl. luft): <b id="sim-pt">150 kPa</b></div>`, 300);
      const ctx = canvas.getContext('2d');
      let depth = 5, running = true, bubbles = [];

      container.querySelector('#sim-depth').oninput = e => {
        depth = +e.target.value;
        container.querySelector('#sim-depth-val').textContent = depth + ' m';
        const pw = 1000 * 9.82 * depth / 1000;
        container.querySelector('#sim-pw').textContent = Math.round(pw) + ' kPa';
        container.querySelector('#sim-pt').textContent = Math.round(pw + 101.3) + ' kPa';
      };

      (function draw() {
        if (!running) return;
        ctx.clearRect(0, 0, 800, 300);
        // Himmel + vatten
        ctx.fillStyle = '#1a2a4a';
        ctx.fillRect(0, 0, 800, 40);
        const waterGrad = ctx.createLinearGradient(0, 40, 0, 300);
        waterGrad.addColorStop(0, 'rgba(0,120,220,.5)');
        waterGrad.addColorStop(1, 'rgba(0,20,80,.9)');
        ctx.fillStyle = waterGrad;
        ctx.fillRect(0, 40, 800, 260);
        ctx.fillStyle = '#9aa0c3';
        ctx.font = '13px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('yta (0 m)', 10, 36);
        // Djupmarkeringar
        for (let d = 10; d <= 40; d += 10) {
          const y = 40 + (d / 40) * 250;
          ctx.strokeStyle = 'rgba(255,255,255,.15)';
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(800, y); ctx.stroke();
          ctx.fillText(d + ' m', 10, y - 4);
        }
        // Dykare
        const dy = 40 + (depth / 40) * 250;
        ctx.font = '30px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🤿', 400, dy);
        // Tryckpilar — längd efter tryck
        const arrowLen = 15 + depth * 1.5;
        ctx.strokeStyle = '#ffd93d';
        ctx.lineWidth = 2;
        [[400 - 60, dy - 8, 1, 0], [400 + 60, dy - 8, -1, 0], [400, dy - 55, 0, 1], [400, dy + 35, 0, -1]].forEach(([ax, ay, dx2, dy2]) => {
          ctx.beginPath();
          ctx.moveTo(ax - dx2 * arrowLen, ay - dy2 * arrowLen);
          ctx.lineTo(ax, ay);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(ax - dx2 * 8 - dy2 * 5, ay - dy2 * 8 - dx2 * 5);
          ctx.moveTo(ax, ay);
          ctx.lineTo(ax - dx2 * 8 + dy2 * 5, ay - dy2 * 8 + dx2 * 5);
          ctx.stroke();
        });
        // Bubblor
        if (Math.random() < 0.15) bubbles.push({ x: 395 + Math.random() * 10, y: dy - 15, r: 2 + Math.random() * 3 });
        bubbles = bubbles.filter(b => b.y > 45);
        ctx.strokeStyle = 'rgba(255,255,255,.5)';
        bubbles.forEach(b => {
          b.y -= 1.2;
          b.x += Math.sin(b.y * 0.1) * 0.4;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.stroke();
        });
        requestAnimationFrame(draw);
      })();
      return { stop: () => { running = false; } };
    },

    // --- Värme: koka vatten ---
    heat(container) {
      const canvas = simShell(container,
        slider('sim-power', 'Effekt', 0, 3000, 1500, 100, ' W') +
        `<div class="sim-control"><button class="btn-primary" id="sim-reset" style="width:100%">🧊 Börja om (20 °C)</button></div>`,
        `<div class="readout-box">Temperatur: <b id="sim-temp">20 °C</b></div>
         <div class="readout-box">Tillförd energi: <b id="sim-energy">0 kJ</b></div>
         <div class="readout-box" id="sim-status-box">Status: <b id="sim-status">Väntar…</b></div>`);
      const ctx = canvas.getContext('2d');
      let running = true, power = 1500, temp = 20, energy = 0, boilEnergy = 0, last = performance.now();
      const m = 1.0, c = 4180, lAnga = 2260000; // 1 kg vatten
      let steamParts = [];

      container.querySelector('#sim-power').oninput = e => {
        power = +e.target.value;
        container.querySelector('#sim-power-val').textContent = power + ' W';
      };
      container.querySelector('#sim-reset').onclick = () => { temp = 20; energy = 0; boilEnergy = 0; };

      (function draw(now) {
        if (!running) return;
        const dt = Math.min((now - last) / 1000, 0.1) * 20; // 20× tidsskala
        last = now;
        const dE = power * dt;
        energy += dE;
        if (temp < 100) {
          temp = Math.min(100, temp + dE / (c * m));
        } else if (boilEnergy < lAnga * m) {
          boilEnergy += dE; // platå — energin går till fasövergång
        }
        const boiling = temp >= 100;
        const done = boilEnergy >= lAnga * m;
        container.querySelector('#sim-temp').textContent = Math.round(temp) + ' °C';
        container.querySelector('#sim-energy').textContent = Math.round(energy / 1000) + ' kJ';
        container.querySelector('#sim-status').textContent =
          done ? 'Allt har kokat bort! 💨' :
          boiling ? `Kokar! Fasövergång: ${Math.round(boilEnergy / (lAnga * m) * 100)} %` :
          power > 0 ? 'Värmer upp…' : 'Väntar…';

        ctx.clearRect(0, 0, 800, 260);
        // Kastrull
        const waterFrac = done ? 0 : 1 - (boilEnergy / (lAnga * m)) * 0.9;
        ctx.strokeStyle = '#9aa0c3';
        ctx.lineWidth = 4;
        ctx.strokeRect(300, 80, 200, 130);
        // Vatten — färg efter temperatur
        const warm = (temp - 20) / 80;
        ctx.fillStyle = `rgb(${Math.round(40 + warm * 180)}, ${Math.round(100 - warm * 40)}, ${Math.round(220 - warm * 100)})`;
        const wh = 120 * waterFrac;
        ctx.fillRect(303, 207 - wh, 194, wh);
        // Platta
        ctx.fillStyle = power > 0 ? `rgba(255, ${Math.max(0, 120 - power / 15)}, 60, ${0.3 + power / 4000})` : '#333';
        ctx.fillRect(290, 215, 220, 12);
        ctx.fillStyle = '#9aa0c3';
        ctx.font = '13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('spisplatta (' + power + ' W)', 400, 245);
        // Bubblor vid kokning
        if (boiling && !done && Math.random() < 0.4) {
          steamParts.push({ x: 320 + Math.random() * 160, y: 90, vy: -0.8 - Math.random(), life: 60 });
        }
        steamParts = steamParts.filter(p => p.life > 0);
        steamParts.forEach(p => {
          p.y += p.vy; p.life--;
          ctx.fillStyle = `rgba(255,255,255,${p.life / 120})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fill();
        });
        // Termometer
        ctx.strokeStyle = '#4a5580';
        ctx.lineWidth = 2;
        ctx.strokeRect(600, 40, 24, 180);
        const th = ((temp - 0) / 120) * 176;
        ctx.fillStyle = temp >= 100 ? '#ff5470' : '#00d4ff';
        ctx.fillRect(602, 218 - th, 20, th);
        ctx.fillStyle = '#e8eaf6';
        ctx.font = '14px sans-serif';
        ctx.fillText(Math.round(temp) + ' °C', 612, 30);
        [0, 50, 100].forEach(t2 => {
          const y = 218 - (t2 / 120) * 176;
          ctx.fillStyle = '#9aa0c3';
          ctx.font = '11px sans-serif';
          ctx.fillText(t2 + '°', 650, y + 4);
        });
        requestAnimationFrame(draw);
      })(performance.now());
      return { stop: () => { running = false; } };
    }
  };

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', () => {
    makeStars();
    buildNav();
    renderXP();
    renderOverview();
  });

  return { openModule, startQuiz, answer, nextQuestion, resetProgress };
})();
