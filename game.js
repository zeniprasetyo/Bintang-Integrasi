const app = document.querySelector("#app");

const stages = [
  {
    value: "Berani",
    icon: "🥋",
    scene: "🏠 🥷",
    title: "Gang di Depan Rumah",
    story:
      "Saat keluar rumah, kamu melihat penjahat mengganggu warga. Kamu harus memilih: diam dan aman sendiri, atau berani bertindak dengan cara yang benar.",
    good: "Lawan dengan berani dan panggil bantuan",
    goodDetail: "Hadapi bahaya tanpa gegabah.",
    bad: "Bersembunyi saja",
    badDetail: "Masalah dibiarkan terjadi.",
    moral: "Berani berarti mau membela yang benar dengan cara yang aman dan bertanggung jawab.",
    game: "action",
    failText: "Kamu bersembunyi terlalu lama. Warga tidak tertolong, dan perjalanan integritasmu berhenti di sini.",
  },
  {
    value: "Jujur",
    icon: "👮",
    scene: "🛣️ 💼",
    title: "Dompet 100 Juta",
    story:
      "Di jalan, kamu menemukan dompet berisi uang sangat banyak. Tidak ada yang melihat, tetapi hati kecilmu tahu ini bukan milikmu.",
    good: "Serahkan ke kantor polisi",
    goodDetail: "Cari bukti pemilik dompet.",
    bad: "Ambil uangnya",
    badDetail: "Beli mobil dan pamer.",
    moral: "Jujur adalah tetap benar saat tidak ada yang mengawasi.",
    game: "hidden",
    failText: "Uang itu dipakai membeli mobil. Balap liar terjadi, kecelakaan datang, dan pilihan tidak jujur membawa kerugian.",
  },
  {
    value: "Mandiri",
    icon: "🧹",
    scene: "🏠 🧺",
    title: "Rumah Berantakan",
    story:
      "Sebelum lanjut, kamu melihat rumah penuh barang berserakan. Tidak selalu harus menunggu orang lain untuk menyelesaikan tanggung jawab pribadi.",
    good: "Bereskan rumah",
    goodDetail: "Rapikan semua benda pada tempatnya.",
    bad: "Biarkan saja",
    badDetail: "Nanti juga ada yang membersihkan.",
    moral: "Mandiri berarti mampu mengurus tugas sendiri.",
    game: "clean",
    failText: "Rumah makin kotor, sampah menumpuk, dan kamu jatuh sakit. Kemandirian perlu dilatih dari hal kecil.",
  },
  {
    value: "Peduli",
    icon: "🍎",
    scene: "👵 🍎",
    title: "Buah Nenek Berjatuhan",
    story:
      "Seorang nenek menjatuhkan buah bawaannya. Kamu bisa berhenti menolong, atau sibuk bermain dan membuat buahnya rusak.",
    good: "Tolong kumpulkan buah",
    goodDetail: "Masukkan buah ke keranjang.",
    bad: "Abaikan dan tebas buahnya",
    badDetail: "Buah menjadi rusak.",
    moral: "Peduli adalah peka melihat orang lain membutuhkan bantuan.",
    game: "fruit",
    failText: "Buah nenek rusak dan beliau kecewa. Kepedulian hilang saat kita hanya memikirkan diri sendiri.",
  },
  {
    value: "Adil",
    icon: "⚖️",
    scene: "🏛️ ⚖️",
    title: "Sidang Pengadilan",
    story:
      "Di gedung pengadilan, kamu menjadi pengacara. Ada tawaran suap untuk membela pihak yang salah, tetapi bukti menunjukkan kebenaran lain.",
    good: "Bela yang benar",
    goodDetail: "Cocokkan bukti dan keputusan.",
    bad: "Terima suap",
    badDetail: "Menangkan pihak yang salah.",
    moral: "Adil berarti memberi keputusan berdasarkan kebenaran, bukan uang atau tekanan.",
    game: "court",
    failText: "Suap membuat keputusan menjadi salah. Keadilan rusak ketika kebenaran bisa dibeli.",
  },
  {
    value: "Disiplin",
    icon: "🚦",
    scene: "🛵 🚦",
    title: "Jalan Raya",
    story:
      "Perjalanan berlanjut dengan kendaraan. Rambu lalu lintas bukan hiasan, melainkan aturan yang menjaga semua orang tetap selamat.",
    good: "Patuhi rambu lalu lintas",
    goodDetail: "Hindari pelanggaran dan rintangan.",
    bad: "Srudak-sruduk",
    badDetail: "Abaikan rambu dan kebut.",
    moral: "Disiplin adalah taat aturan meski sedang terburu-buru.",
    game: "traffic",
    failText: "Melanggar rambu membuat perjalanan berakhir dengan kecelakaan. Aturan ada untuk keselamatan bersama.",
  },
  {
    value: "Kerja Keras",
    icon: "🧩",
    scene: "🧩 🏆",
    title: "Puzzle Integritas",
    story:
      "Kamu menemukan poster anti korupsi yang teracak. Untuk melanjutkan perjalanan, kamu harus sabar menyusunnya sampai utuh.",
    good: "Selesaikan puzzle",
    goodDetail: "Geser kepingan sampai urut.",
    bad: "Menyerah",
    badDetail: "Tantangan dibiarkan selesai sendiri.",
    moral: "Kerja keras adalah terus mencoba saat hasil belum langsung terlihat.",
    game: "puzzle",
    failText: "Puzzle tidak selesai karena kamu menyerah. Tujuan besar butuh usaha yang tekun.",
  },
  {
    value: "Tanggung Jawab",
    icon: "🍳",
    scene: "🍽️ 👩‍🍳",
    title: "Dapur Pelayanan",
    story:
      "Di dapur umum, beberapa orang menunggu pesanan. Setiap tugas harus dituntaskan dengan benar, bukan asal cepat.",
    good: "Tuntaskan semua pesanan",
    goodDetail: "Layani sesuai kebutuhan.",
    bad: "Kerjakan asal-asalan",
    badDetail: "Pesanan kacau.",
    moral: "Tanggung jawab berarti menyelesaikan amanah sampai tuntas.",
    game: "orders",
    failText: "Pesanan kacau karena dikerjakan sembarangan. Tanggung jawab tidak berhenti di niat baik saja.",
  },
  {
    value: "Sederhana",
    icon: "🌾",
    scene: "🌱 🏡",
    title: "Desa Panen",
    story:
      "Di desa, kamu belajar hidup sederhana dengan bertani. Tidak mewah, tetapi penuh manfaat jika dilakukan dengan sungguh-sungguh.",
    good: "Menanam sampai panen",
    goodDetail: "Tanam, siram, lalu panen.",
    bad: "Menolak bekerja",
    badDetail: "Ingin hasil tanpa proses.",
    moral: "Sederhana berarti menghargai proses, manfaat, dan tidak berlebihan.",
    game: "farm",
    failText: "Sawah tidak menghasilkan apa pun karena kamu menolak prosesnya. Hidup sederhana mengajarkan cukup dan tekun.",
  },
];

const state = {
  screen: "start",
  current: 0,
  stars: Array(stages.length).fill(0),
  totalStars: 0,
  timer: 0,
  timerId: null,
  score: 0,
  lives: 3,
  combo: 1,
  lastRun: null,
  gameData: {},
};

function render() {
  stopTimer();
  app.innerHTML = `
    <div class="shell">
      ${renderTopbar()}
      <main class="main">${renderScreen()}</main>
    </div>
  `;
  bindScreen();
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="brand">
        <div class="logo">★</div>
        <div>
          <h1>Bintang Integritas</h1>
          <p>Petualangan nilai anti korupsi</p>
        </div>
      </div>
      <div class="hud">
        <div class="pill">⭐ ${state.totalStars}/27</div>
        <div class="pill" id="scorePill">Skor ${state.score}</div>
        <div class="pill" id="livesPill">Nyawa ${renderHearts()}</div>
        <div class="pill">📍 ${state.current + 1}/${stages.length}</div>
        <div class="pill" id="timerPill">⏱️ ${formatTime(state.timer)}</div>
      </div>
    </header>
  `;
}

function renderScreen() {
  if (state.screen === "start") return renderStart();
  if (state.screen === "map") return renderMap();
  if (state.screen === "story") return renderStory();
  if (state.screen === "game") return renderGame();
  if (state.screen === "success") return renderSuccess();
  if (state.screen === "bad") return renderBadEnding();
  return renderFinal();
}

function renderStart() {
  return `
    <section class="hero">
      <div class="hero-ribbon">Misi Festival Anti Korupsi</div>
      <div class="hero-scene">
        <div class="hero-copy">
          <div class="eyebrow">Hari Anti Korupsi</div>
          <h2>Bintang Integritas</h2>
          <p>Berangkatlah menuju festival anti korupsi. Setiap pilihan kecil akan menguji keberanian, kejujuran, kepedulian, dan nilai integritas lainnya.</p>
          <div class="cta-row">
            <button class="btn good" data-action="start">▶ Mulai Perjalanan</button>
            <button class="btn secondary" data-action="map">▦ Lihat Peta Nilai</button>
          </div>
        </div>
        <div class="cover-character" aria-hidden="true">
          <span class="hero-avatar">🧑‍🎓</span>
          <span class="hero-badge">★</span>
          <span class="hero-orbit a">⚖️</span>
          <span class="hero-orbit b">🛡️</span>
          <span class="hero-orbit c">🌾</span>
        </div>
        <div class="hero-card">
          <div class="hero-stat"><span>⭐</span><div><strong>27 bintang maksimal</strong><span>Skor dari waktu dan ketepatan</span></div></div>
          <div class="hero-stat"><span>🧭</span><div><strong>9 stage integritas</strong><span>Setiap stage punya pilihan moral</span></div></div>
          <div class="hero-stat"><span>🏆</span><div><strong>Ending bertingkat</strong><span>Semakin banyak bintang, semakin tinggi gelar</span></div></div>
        </div>
      </div>
    </section>
  `;
}

function renderMap() {
  return `
    <section class="panel">
      <h2>Peta Perjalanan</h2>
      <p class="game-instructions">Kumpulkan bintang dari tiap nilai integritas. Stage berikutnya terbuka setelah kamu memilih jalan yang benar.</p>
      <div class="route-track">
        ${stages
          .map(
            (stage, index) => `
              <div class="route-node ${index < state.current ? "done" : ""} ${index === state.current ? "active" : ""}">
                <span>${index + 1}</span>
                <strong>${stage.value}</strong>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="map-grid">
        ${stages
          .map((stage, index) => {
            const locked = index > state.current && state.stars[index] === 0;
            const current = index === state.current;
            return `
              <article class="stage-card ${current ? "current" : ""} ${locked ? "locked" : ""}">
                <div>
                  <div class="stage-top">
                    <div class="stage-icon">${stage.icon}</div>
                    <div class="stars">${"★".repeat(state.stars[index])}${"☆".repeat(3 - state.stars[index])}</div>
                  </div>
                  <h3>${index + 1}. ${stage.value}</h3>
                  <p>${stage.title}</p>
                </div>
                <button class="btn secondary" data-action="${locked ? "locked" : "open-stage"}" data-index="${index}">
                  ${locked ? "🔒 Terkunci" : current ? "▶ Mainkan" : "↻ Ulangi"}
                </button>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderStory() {
  const stage = stages[state.current];
  return `
    <section class="stage-layout">
      <div class="panel">
        <div class="chapter-head">
          <span>Stage ${state.current + 1}</span>
          <strong>${stage.value}</strong>
        </div>
        <div class="story-art"><div class="scene-emoji">${stage.scene}</div></div>
        <div class="dialogue">${stage.story}</div>
        <div class="choice-grid">
          <button class="choice" data-action="good-choice">
            <span>✅</span>
            <span><strong>${stage.good}</strong><span>${stage.goodDetail}</span></span>
          </button>
          <button class="choice" data-action="bad-choice">
            <span>❌</span>
            <span><strong>${stage.bad}</strong><span>${stage.badDetail}</span></span>
          </button>
        </div>
      </div>
      <aside class="side-box">
        <div class="value-box">
          <strong>Nilai ${stage.value}</strong>
          <p>${stage.moral}</p>
        </div>
        <button class="btn secondary" data-action="map">▦ Kembali ke Peta</button>
      </aside>
    </section>
  `;
}

function renderGame() {
  const stage = stages[state.current];
  return `
    <section class="panel game-area">
      <div class="game-titlebar">
        <div>
          <span>Challenge ${state.current + 1}</span>
          <h2>${stage.icon} ${stage.value}</h2>
        </div>
        <p>${getGameInstruction(stage.game)}</p>
      </div>
      <div class="status-line">
        <span class="tag">Target: <strong id="progressText">0</strong></span>
        <span class="tag">Skor: <strong id="runScore">${state.score}</strong></span>
        <span class="tag">Kombo: <strong id="comboText">x${state.combo}</strong></span>
        <span class="tag danger">Nyawa: <strong id="lifeText">${renderHearts()}</strong></span>
        <span class="tag">Waktu: <strong id="liveTime">${formatTime(state.timer)}</strong></span>
      </div>
      <div class="game-board" id="gameBoard">${renderGameBoard(stage.game)}</div>
      <div class="action-row">
        <button class="btn secondary" data-action="story">← Kembali</button>
        <button class="btn" data-action="restart-game">↻ Ulangi Mini-game</button>
      </div>
    </section>
  `;
}

function renderGameBoard(type) {
  if (type === "clean") {
    return `
      <div class="drag-board">
        <div class="spawn-zone" id="spawnZone"><h3>Barang Berantakan</h3></div>
        <div class="drop-zone" id="dropZone"><h3>Tempat Rapi</h3></div>
      </div>
    `;
  }
  if (type === "traffic") {
    return `<div class="traffic-road" id="trafficRoad"><div class="vehicle" id="vehicle">🛵</div></div>`;
  }
  if (type === "court") {
    return `<div class="case-grid" id="caseGrid"></div>`;
  }
  if (type === "puzzle") {
    return `<div class="puzzle-grid" id="puzzleGrid"></div>`;
  }
  if (type === "orders") {
    return `<div class="order-grid" id="orderGrid"></div>`;
  }
  if (type === "farm") {
    return `<div class="farm-grid" id="farmGrid"></div>`;
  }
  if (type === "hidden") {
    return `<div style="padding:16px"><div class="hidden-list" id="hiddenList"></div><div id="hiddenBoard"></div></div>`;
  }
  return "";
}

function renderSuccess() {
  const stage = stages[state.current];
  const earned = state.stars[state.current];
  return `
    <section class="panel result">
      <h2>⭐ ${stage.value} Berhasil!</h2>
      <div class="ending-rank">${earned} dari 3 bintang</div>
      <div class="performance-grid">
        <span>Skor <strong>${state.lastRun?.score || 0}</strong></span>
        <span>Waktu <strong>${formatTime(state.lastRun?.time || 0)}</strong></span>
        <span>Sisa nyawa <strong>${state.lastRun?.lives || 0}</strong></span>
      </div>
      <p>${stage.moral}</p>
      <div class="action-row" style="justify-content:center">
        <button class="btn good" data-action="next-stage">${state.current === stages.length - 1 ? "Lihat Hasil Akhir" : "Lanjut Perjalanan"}</button>
        <button class="btn secondary" data-action="restart-stage">↻ Ulangi Stage</button>
      </div>
    </section>
  `;
}

function renderBadEnding() {
  const stage = stages[state.current];
  return `
    <section class="panel result">
      <h2>Perjalanan Terhenti</h2>
      <p>${stage.failText}</p>
      ${
        state.lastRun
          ? `<div class="performance-grid"><span>Skor <strong>${state.lastRun.score}</strong></span><span>Waktu <strong>${formatTime(state.lastRun.time)}</strong></span><span>Sisa nyawa <strong>${state.lastRun.lives}</strong></span></div>`
          : ""
      }
      <div class="ending-rank">Nilai yang diuji: ${stage.value}</div>
      <div class="action-row" style="justify-content:center">
        <button class="btn good" data-action="restart-stage">Coba Pilihan Baik</button>
        <button class="btn secondary" data-action="map">▦ Lihat Peta</button>
      </div>
    </section>
  `;
}

function renderFinal() {
  const rank = getRank();
  return `
    <section class="panel result">
      <h2>🏆 ${rank.title}</h2>
      <div class="ending-rank">Total ${state.totalStars} dari 27 bintang</div>
      <p>${rank.text}</p>
      <div class="map-grid">
        ${stages
          .map(
            (stage, index) => `
              <article class="stage-card">
                <div class="stage-top"><div class="stage-icon">${stage.icon}</div><div class="stars">${"★".repeat(state.stars[index])}${"☆".repeat(3 - state.stars[index])}</div></div>
                <h3>${stage.value}</h3>
                <p>${stage.moral}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="action-row" style="justify-content:center">
        <button class="btn good" data-action="reset">Main Lagi</button>
        <button class="btn secondary" data-action="map">▦ Peta Stage</button>
      </div>
    </section>
  `;
}

function bindScreen() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action, button.dataset));
  });

  if (state.screen === "game") {
    startTimer();
    setupMiniGame(stages[state.current].game);
  }
}

function handleAction(action, data = {}) {
  if (action === "start") {
    state.current = 0;
    state.screen = "story";
  } else if (action === "map") {
    state.screen = "map";
  } else if (action === "open-stage") {
    state.current = Number(data.index);
    state.screen = "story";
  } else if (action === "locked") {
    return;
  } else if (action === "story") {
    state.screen = "story";
  } else if (action === "good-choice") {
    state.screen = "game";
  } else if (action === "bad-choice") {
    state.lastRun = null;
    state.screen = "bad";
  } else if (action === "restart-stage") {
    state.screen = "story";
  } else if (action === "restart-game") {
    state.screen = "game";
  } else if (action === "next-stage") {
    if (state.current === stages.length - 1) {
      state.screen = "final";
    } else {
      state.current += 1;
      state.screen = "story";
    }
  } else if (action === "reset") {
    state.current = 0;
    state.totalStars = 0;
    state.score = 0;
    state.lives = 3;
    state.combo = 1;
    state.lastRun = null;
    state.stars = Array(stages.length).fill(0);
    state.screen = "start";
  }
  render();
}

function setupMiniGame(type) {
  state.timer = 0;
  state.score = 0;
  state.lives = 3;
  state.combo = 1;
  state.lastRun = null;
  state.gameData = {};
  updateTimerText();

  if (type === "action") setupTargets(["🥷", "🥷", "🥷", "🛡️", "📣"], 5, 32);
  if (type === "hidden") setupHidden();
  if (type === "clean") setupDragClean();
  if (type === "fruit") setupTargets(["🍎", "🍌", "🍊", "🍐", "🍇", "🥭"], 6, 36);
  if (type === "court") setupCourt();
  if (type === "traffic") setupTraffic();
  if (type === "puzzle") setupPuzzle();
  if (type === "orders") setupOrders();
  if (type === "farm") setupFarm();
}

function setupTargets(items, total, deadline) {
  const board = document.querySelector("#gameBoard");
  state.gameData = { found: 0, total, deadline };
  board.innerHTML = "";
  const traps = stages[state.current].game === "fruit" ? ["💣", "🪨", "🧃"] : ["💰", "❌", "🕳️"];
  [...items, ...traps].forEach((emoji, index) => {
    const target = document.createElement("button");
    const isTrap = index >= items.length;
    target.className = `target ${isTrap ? "trap" : ""}`;
    target.textContent = emoji;
    target.style.left = `${8 + ((index * 17) % 74)}%`;
    target.style.top = `${12 + ((index * 23) % 58)}%`;
    target.style.animationDelay = `${index * 0.18}s`;
    target.addEventListener("click", () => {
      if (target.classList.contains("hit")) return;
      if (isTrap) {
        target.classList.add("hit");
        loseLife("Objek salah");
        return;
      }
      target.classList.add("hit");
      state.gameData.found += 1;
      addScore(120, "fokus");
      updateProgress(`${state.gameData.found}/${total}`);
      if (state.gameData.found >= total) finishMiniGame(deadline);
    });
    board.appendChild(target);
  });
  updateProgress(`0/${total}`);
}

function setupHidden() {
  const needed = [
    { emoji: "🪪", label: "KTP" },
    { emoji: "📞", label: "Nomor HP" },
    { emoji: "🧾", label: "Struk" },
    { emoji: "🔑", label: "Kunci" },
  ];
  const decoys = ["💵", "🕶️", "🎫", "🧢", "🖊️", "🪙"];
  const board = document.querySelector("#gameBoard");
  board.innerHTML = `<div style="padding:16px"><div class="hidden-list" id="hiddenList">${needed
    .map((item) => `<span data-label="${item.label}">${item.emoji} ${item.label}</span>`)
    .join("")}</div><div id="hiddenBoard"></div></div>`;
  const hiddenBoard = document.querySelector("#hiddenBoard");
  state.gameData = { found: 0, total: needed.length, deadline: 38, labels: new Set() };
  [...needed.map((item) => item.emoji), ...decoys].forEach((emoji, index) => {
    const target = document.createElement("button");
    target.className = "target";
    target.textContent = emoji;
    target.style.left = `${6 + ((index * 13) % 78)}%`;
    target.style.top = `${22 + ((index * 19) % 58)}%`;
    target.addEventListener("click", () => {
      const match = needed.find((item) => item.emoji === emoji);
      if (target.classList.contains("hit")) return;
      if (!match) {
        target.classList.add("hit");
        loseLife("Bukan bukti");
        return;
      }
      target.classList.add("hit");
      document.querySelector(`[data-label="${match.label}"]`).classList.add("found");
      state.gameData.found += 1;
      addScore(150, "bukti");
      updateProgress(`${state.gameData.found}/${needed.length}`);
      if (state.gameData.found === needed.length) finishMiniGame(38);
    });
    hiddenBoard.appendChild(target);
  });
  updateProgress(`0/${needed.length}`);
}

function setupDragClean() {
  const spawn = document.querySelector("#spawnZone");
  const drop = document.querySelector("#dropZone");
  const items = ["🧦", "📚", "🧸", "🗑️", "👟"];
  state.gameData = { moved: 0, total: items.length, deadline: 45 };
  items.forEach((emoji, index) => {
    const item = document.createElement("div");
    item.className = "item";
    item.draggable = true;
    item.textContent = emoji;
    item.id = `item-${index}`;
    item.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", item.id));
    spawn.appendChild(item);
  });
  drop.addEventListener("dragover", (event) => event.preventDefault());
  drop.addEventListener("drop", (event) => {
    event.preventDefault();
    const item = document.getElementById(event.dataTransfer.getData("text/plain"));
    if (!item || item.classList.contains("done")) return;
    item.classList.add("done");
    drop.appendChild(item);
    state.gameData.moved += 1;
    addScore(110, "rapi");
    updateProgress(`${state.gameData.moved}/${items.length}`);
    if (state.gameData.moved === items.length) finishMiniGame(45);
  });
  updateProgress(`0/${items.length}`);
}

function setupCourt() {
  const cases = [
    { text: "Bukti CCTV menunjukkan klien menolong korban.", good: true },
    { text: "Amplop uang diberikan agar saksi mengubah cerita.", good: false },
    { text: "Saksi dan bukti barang cocok dengan fakta kejadian.", good: true },
    { text: "Pengacara lawan meminta hakim mengabaikan bukti.", good: false },
  ];
  state.gameData = { selected: 0, total: 2, deadline: 45 };
  const grid = document.querySelector("#caseGrid");
  cases.forEach((item) => {
    const card = document.createElement("article");
    card.className = "case-card";
    card.innerHTML = `<strong>${item.good ? "Bukti Kuat" : "Tawaran Curang"}</strong><p>${item.text}</p><button class="btn secondary">Pilih</button>`;
    card.querySelector("button").addEventListener("click", () => {
      if (card.classList.contains("selected")) return;
      if (!item.good) {
        card.classList.add("wrong");
        loseLife("Keputusan bias");
        return;
      }
      card.classList.add("selected");
      state.gameData.selected += 1;
      addScore(180, "adil");
      updateProgress(`${state.gameData.selected}/2 bukti benar`);
      if (state.gameData.selected === 2) finishMiniGame(45);
    });
    grid.appendChild(card);
  });
  updateProgress("0/2 bukti benar");
}

function setupTraffic() {
  const road = document.querySelector("#trafficRoad");
  const vehicle = document.querySelector("#vehicle");
  state.gameData = { lane: 1, safe: 0, total: 8, deadline: 36, interval: null };
  document.addEventListener("keydown", trafficKeys);
  state.gameData.interval = setInterval(() => {
    const object = document.createElement("div");
    object.className = "lane-object";
    const lane = Math.floor(Math.random() * 3);
    object.dataset.lane = lane;
    object.style.left = `${18 + lane * 30}%`;
    object.style.top = "-65px";
    object.textContent = Math.random() > 0.45 ? "🚧" : "🚦";
    road.appendChild(object);
    let y = -65;
    const fall = setInterval(() => {
      if (state.screen !== "game" || stages[state.current].game !== "traffic") {
        clearInterval(fall);
        object.remove();
        return;
      }
      y += 8;
      object.style.top = `${y}px`;
      if (y > 270 && y < 330 && Number(object.dataset.lane) === state.gameData.lane) {
        clearInterval(fall);
        object.remove();
        loseLife("Tabrakan");
      }
      if (y > 410) {
        clearInterval(fall);
        object.remove();
        state.gameData.safe += 1;
        addScore(80, "aman");
        updateProgress(`${state.gameData.safe}/${state.gameData.total} rintangan`);
        if (state.gameData.safe >= state.gameData.total) finishMiniGame(36);
      }
    }, 80);
  }, 760);
  updateProgress(`0/${state.gameData.total} rintangan`);
  vehicle.style.left = "50%";
}

function trafficKeys(event) {
  if (state.screen !== "game" || stages[state.current].game !== "traffic") return;
  const vehicle = document.querySelector("#vehicle");
  if (event.key === "ArrowLeft") state.gameData.lane = Math.max(0, state.gameData.lane - 1);
  if (event.key === "ArrowRight") state.gameData.lane = Math.min(2, state.gameData.lane + 1);
  vehicle.style.left = `${20 + state.gameData.lane * 30}%`;
}

function finishBadTraffic() {
  clearInterval(state.gameData.interval);
  document.removeEventListener("keydown", trafficKeys);
  state.screen = "bad";
  render();
}

function setupPuzzle() {
  const grid = document.querySelector("#puzzleGrid");
  state.gameData = { tiles: [1, 5, 2, 4, null, 3, 7, 8, 6], deadline: 50, moves: 0, maxMoves: 32 };
  renderPuzzle(grid);
  updateProgress("0/32 langkah");
}

function renderPuzzle(grid) {
  grid.innerHTML = "";
  state.gameData.tiles.forEach((tile, index) => {
    const button = document.createElement("button");
    button.className = `tile ${tile ? "" : "empty"}`;
    button.textContent = tile || "";
    button.addEventListener("click", () => moveTile(index));
    grid.appendChild(button);
  });
}

function moveTile(index) {
  const empty = state.gameData.tiles.indexOf(null);
  const neighbors = [empty - 1, empty + 1, empty - 3, empty + 3];
  const sameRow = Math.floor(index / 3) === Math.floor(empty / 3);
  if (!neighbors.includes(index)) return;
  if ((index === empty - 1 || index === empty + 1) && !sameRow) return;
  [state.gameData.tiles[index], state.gameData.tiles[empty]] = [state.gameData.tiles[empty], state.gameData.tiles[index]];
  state.gameData.moves += 1;
  addScore(25, "langkah");
  updateProgress(`${state.gameData.moves}/${state.gameData.maxMoves} langkah`);
  renderPuzzle(document.querySelector("#puzzleGrid"));
  if (state.gameData.moves > state.gameData.maxMoves) {
    loseLife("Terlalu banyak langkah");
    state.gameData.moves = 0;
  }
  if (state.gameData.tiles.join(",") === "1,2,3,4,5,6,7,8,") finishMiniGame(50);
}

function setupOrders() {
  const orders = [
    { name: "Nasi sehat", icon: "🍚", action: "Masak" },
    { name: "Sup hangat", icon: "🍲", action: "Sajikan" },
    { name: "Air minum", icon: "🥤", action: "Antar" },
    { name: "Buah segar", icon: "🍎", action: "Cuci" },
  ];
  const grid = document.querySelector("#orderGrid");
  state.gameData = { done: 0, total: orders.length, deadline: 42, next: 0 };
  orders.forEach((order, index) => {
    const card = document.createElement("article");
    card.className = "order-card";
    card.innerHTML = `<strong>${order.icon} ${order.name}</strong><p>Urutan ${index + 1}: ${order.action} dulu.</p><button class="btn secondary">${order.action}</button>`;
    card.querySelector("button").addEventListener("click", () => {
      if (card.classList.contains("selected")) return;
      if (index !== state.gameData.next) {
        loseLife("Urutan salah");
        return;
      }
      card.classList.add("selected");
      card.querySelector("button").textContent = "Selesai";
      state.gameData.done += 1;
      state.gameData.next += 1;
      addScore(140, "tuntas");
      updateProgress(`${state.gameData.done}/${orders.length} pesanan`);
      if (state.gameData.done === orders.length) finishMiniGame(42);
    });
    grid.appendChild(card);
  });
  updateProgress(`0/${orders.length} pesanan`);
}

function setupFarm() {
  const grid = document.querySelector("#farmGrid");
  state.gameData = { plots: Array(9).fill(0), deadline: 55 };
  renderFarm(grid);
  updateProgress("Tanam semua lahan");
}

function renderFarm(grid) {
  grid.innerHTML = "";
  state.gameData.plots.forEach((level, index) => {
    const plot = document.createElement("button");
    plot.className = "farm-plot";
    const isWeed = index === 4;
    plot.classList.toggle("weed", isWeed && level < 3);
    plot.textContent = isWeed && level < 3 ? "🪨" : ["", "🌱", "🌿", "🌾"][level];
    plot.title = "Klik untuk tanam, siram, dan panen";
    plot.addEventListener("click", () => {
      if (isWeed && state.gameData.plots[index] < 2) {
        state.gameData.plots[index] += 1;
        loseLife("Batu harus disingkirkan");
        renderFarm(grid);
        return;
      }
      state.gameData.plots[index] = Math.min(3, state.gameData.plots[index] + 1);
      const grown = state.gameData.plots.filter((value) => value === 3).length;
      addScore(45, "rawat");
      updateProgress(`${grown}/9 panen`);
      renderFarm(grid);
      if (grown === 9) finishMiniGame(55);
    });
    grid.appendChild(plot);
  });
}

function getGameInstruction(type) {
  const instructions = {
    action: "Klik semua target untuk menunjukkan keberanian dan memanggil bantuan.",
    hidden: "Temukan benda yang membuktikan identitas pemilik dompet.",
    clean: "Seret semua barang dari area berantakan ke tempat rapi.",
    fruit: "Klik semua buah yang jatuh agar masuk keranjang.",
    court: "Pilih dua bukti yang benar dan abaikan tawaran curang.",
    traffic: "Gunakan tombol panah kiri/kanan untuk menghindari rintangan.",
    puzzle: "Geser angka hingga urut dari 1 sampai 8.",
    orders: "Selesaikan semua pesanan dengan teliti.",
    farm: "Klik tiap petak tiga kali: tanam, rawat, panen.",
  };
  return instructions[type];
}

function startTimer() {
  stopTimer();
  state.timerId = setInterval(() => {
    state.timer += 1;
    updateTimerText();
  }, 1000);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  if (state.gameData.interval) clearInterval(state.gameData.interval);
  document.removeEventListener("keydown", trafficKeys);
  state.timerId = null;
}

function updateTimerText() {
  const top = document.querySelector("#timerPill");
  const live = document.querySelector("#liveTime");
  if (top) top.textContent = `⏱️ ${formatTime(state.timer)}`;
  if (live) live.textContent = formatTime(state.timer);
}

function updateProgress(text) {
  const progress = document.querySelector("#progressText");
  if (progress) progress.textContent = text;
}

function renderHearts() {
  return `${"♥".repeat(Math.max(0, state.lives))}${"♡".repeat(Math.max(0, 3 - state.lives))}`;
}

function addScore(points, label = "Benar") {
  state.score += points * state.combo;
  state.combo = Math.min(5, state.combo + 1);
  updateMeters();
  showFloat(`+${points} ${label}`, "good");
}

function loseLife(reason = "Salah") {
  state.lives -= 1;
  state.combo = 1;
  updateMeters();
  showFloat(reason, "bad");
  const board = document.querySelector("#gameBoard");
  if (board) {
    board.classList.remove("shake");
    void board.offsetWidth;
    board.classList.add("shake");
  }
  if (state.lives <= 0) finishChallengeFailed();
}

function updateMeters() {
  const runScore = document.querySelector("#runScore");
  const scorePill = document.querySelector("#scorePill");
  const combo = document.querySelector("#comboText");
  const life = document.querySelector("#lifeText");
  const livesPill = document.querySelector("#livesPill");
  if (runScore) runScore.textContent = state.score;
  if (scorePill) scorePill.textContent = `Skor ${state.score}`;
  if (combo) combo.textContent = `x${state.combo}`;
  if (life) life.textContent = renderHearts();
  if (livesPill) livesPill.textContent = `Nyawa ${renderHearts()}`;
}

function showFloat(text, tone) {
  const board = document.querySelector("#gameBoard");
  if (!board) return;
  const note = document.createElement("div");
  note.className = `float-note ${tone}`;
  note.textContent = text;
  note.style.left = `${18 + Math.random() * 58}%`;
  note.style.top = `${18 + Math.random() * 48}%`;
  board.appendChild(note);
  setTimeout(() => note.remove(), 850);
}

function finishChallengeFailed() {
  stopTimer();
  state.lastRun = {
    won: false,
    score: state.score,
    time: state.timer,
    lives: Math.max(0, state.lives),
  };
  state.screen = "bad";
  render();
}

function finishMiniGame(deadline) {
  const speedBonus = state.timer <= deadline * 0.6 ? 1 : 0;
  const lifeBonus = state.lives >= 2 ? 1 : 0;
  const scoreBonus = state.score >= 450 ? 1 : 0;
  const stars = Math.max(1, Math.min(3, speedBonus + lifeBonus + scoreBonus));
  state.stars[state.current] = Math.max(state.stars[state.current], stars);
  state.totalStars = state.stars.reduce((sum, value) => sum + value, 0);
  state.lastRun = {
    won: true,
    score: state.score,
    time: state.timer,
    lives: state.lives,
    stars,
  };
  state.screen = "success";
  render();
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function getRank() {
  if (state.totalStars >= 21) {
    return {
      title: "Juara Anti Korupsi",
      text: "Kamu menunjukkan integritas kuat dari awal sampai akhir. Bintangmu menjadi bukti bahwa pilihan baik bisa membawa perubahan.",
    };
  }
  if (state.totalStars >= 13) {
    return {
      title: "Pejuang Integritas",
      text: "Kamu sudah memahami banyak nilai penting. Beberapa stage masih bisa diulang untuk mengejar bintang sempurna.",
    };
  }
  return {
    title: "Perlu Belajar Integritas",
    text: "Perjalanan belum selesai. Ulangi stage, perbaiki pilihan, dan kumpulkan lebih banyak bintang.",
  };
}

render();
