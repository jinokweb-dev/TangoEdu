// Myongji University Future Education Center - Tango Master Course
// Advising Professors: Hong Soo & Jin Joo
// Core Logic (Mobile-First Shell + IndexedDB Video Journal Storage)

// ==========================================
// 1. DATA DEFINITIONS (CURRICULUM & GLOSSARY)
// ==========================================

const CURRICULUM_DATA = [
  {
    week: 1,
    title: "탱고의 시작: 바른 자세와 걷기 (Caminata)",
    badge: "1주차",
    content: "모든 아름다운 탱고의 기초인 걷기(Caminata)를 배웁니다. 곧은 척추 중심 축(Eje)을 형성하고, 남녀 간의 부드러우면서도 탄탄한 안쪽 포옹(Abrazo) 자세를 익힙니다."
  },
  {
    week: 2,
    title: "8보 기초 조합: 살리다 바시카 (Salida Básica)",
    badge: "2주차",
    content: "탱고의 문을 여는 대표적인 8단계 기초 동선입니다. 론다(댄스홀 진행방향)를 인지하며 파트너와 흐름을 맞춰 이동하는 훈련을 합니다."
  },
  {
    week: 3,
    title: "방향 전환의 핵심: 오초 코르타도 (Ocho Cortado)",
    badge: "3주차",
    content: "밀롱가 등 협소한 장소에서 필수적인 8자 잘라내기 동작입니다. 골반의 회전과 상체의 고정을 유연하게 분리(Disociación)하는 방법을 배웁니다."
  },
  {
    week: 4,
    title: "부드러운 피벗: 오초 아델란테 & 아뜨라스 (Ocho)",
    badge: "4주차",
    content: "앞으로 나아가는 전진 오초(Adelante)와 뒤로 나아가는 후진 오초(Atrás)를 배웁니다. 올바른 체중 이동(Pisada)에 집중합니다."
  },
  {
    week: 5,
    title: "회전 원리 학습: 히로 (Giro) 테크닉",
    badge: "5주차",
    content: "리더를 중심으로 팔로워가 원형 궤도를 그리며 회전하는 동작입니다. 회전 시 중심 축이 흔들리지 않도록 등(Back) 프레임을 지탱하는 양측의 커넥션을 연습합니다."
  },
  {
    week: 6,
    title: "리듬과 감성의 교감: 탱고 음악성 (Musicality)",
    badge: "6주차",
    content: "아르헨티나 탱고(4/4), 밀롱가(2/4), 발스(3/4)의 음악적 특징을 파악합니다. 반도네온의 비트와 강약 세기에 맞춰 발동작의 템포를 조절하고 표현하는 훈련을 진행합니다."
  },
  {
    week: 7,
    title: "세계 챔피언의 장식: 사카다와 보레오 (Sacada & Boleo)",
    badge: "7주차",
    content: "상대방의 빈 공간에 내 다리를 집어넣는 사카다(Sacada)와 허리 회전의 원심력으로 발끝을 튕기는 보레오(Boleo)를 안전하고 기품있게 구사하는 고급 테크닉입니다."
  },
  {
    week: 8,
    title: "밀롱가 에티켓과 수료식 (Codigos)",
    badge: "8주차",
    content: "파트너에 대한 정중한 신호인 눈빛 교환(Cabeceo)과 댄스홀 내 매너를 체득합니다. 8주 동안 연마한 동작들을 자유롭게 이어 추는 무대를 선보이며 과정을 수료합니다."
  }
];

const GLOSSARY_DATA = [
  {
    ko: "카미나타",
    es: "Caminata",
    level: "기초",
    category: "basic",
    desc: "아르헨티나 탱고의 영혼이자 가장 기본이 되는 '걷기' 동작입니다. 발등과 지면의 텐션을 느끼며, 발바닥 전체로 부드럽게 바닥을 쓸어 밀어내며 나아갑니다.",
    tip: "보폭을 욕심내서 크게 딛기보다는 자신의 가슴과 골반 중심이 온전히 디디는 발 위에 얹히는 느낌(중심 축 확보)으로 조용히 나아가세요."
  },
  {
    ko: "아브라소",
    es: "Abrazo",
    level: "기초",
    category: "connection",
    desc: "파트너와 가슴을 연결하는 깊은 안음(포옹) 자세입니다. 가슴이 밀착되는 밀롱게로(Cerrado) 형태와, 품에 공간을 두는 아비에르토(Abierto) 형태가 있습니다.",
    tip: "팔로 상대를 끌어당기거나 매달리면 안 됩니다. 척추를 위아래로 곧게 펴고 가슴뼈(Sternum)를 부드럽게 맞닿아 두 사람 사이에 따뜻한 돔을 만드는 힘을 느낍니다."
  },
  {
    ko: "에헤",
    es: "Eje",
    level: "기초",
    category: "connection",
    desc: "무용수 개인이 중력과 수직으로 이루는 '중심축'입니다. 탱고는 각자의 완벽한 축이 독립적으로 만나서 아브라소로 연결되는 커플 댄스입니다.",
    tip: "고개가 숙여져 시선이 바닥을 향하면 백이면 백 중심축이 무너져 상대방에게 무게가 쏠립니다. 시선은 항상 파트너의 어깨선 너머 수평을 바라보세요."
  },
  {
    ko: "살리다 바시카",
    es: "Salida Básica",
    level: "기초",
    category: "basic",
    desc: "기초적인 8보 스텝의 약속 조합입니다. 1보(후진/사선)부터 8보(종결)까지 이어지며 체중 이동과 크로스(Cruzada)의 감각을 배웁니다.",
    tip: "2보(리더 기준 오른발 옆걸음)를 디딜 때 파트너와 평행을 유지하고 골반이 뒤틀리지 않도록 가슴 방향을 일직선으로 곧게 마주봐 주어야 다음 보폭이 흔들리지 않습니다."
  },
  {
    ko: "오초 코르타도",
    es: "Ocho Cortado",
    level: "기초",
    category: "basic",
    desc: "밀롱가 등 붐비는 댄스홀 공간에서 경로를 회전/단축하기 위해 8자 스텝을 자르는 유용한 피구라(Figure)입니다.",
    tip: "리더는 4보 차단 단계에서 가슴의 트위스트와 리바운드를 확실히 해주어 팔로워가 반동을 느끼고 안전하게 5보 크로스로 돌아 나오도록 유도해야 합니다."
  },
  {
    ko: "오초 아델란테 / 아뜨라스",
    es: "Ocho Adelante / Atrás",
    level: "기초",
    category: "basic",
    desc: "발끝으로 바닥에 8자(Ocho) 궤적을 그리며 걷는 동작입니다. 전진하며 그리면 아델란테(Adelante), 후진하며 회전하면 아뜨라스(Atrás)라 합니다.",
    tip: "상체는 정면을 고정하고 골반 이하 하체만 비틀어 회전하는 상체 분리(Disociación)가 핵심입니다. 상체 어깨 프레임이 같이 따라 돌아가면 아브라소가 찢어집니다."
  },
  {
    ko: "히로",
    es: "Giro",
    level: "중급",
    category: "advanced",
    desc: "한 파트너가 축이 되어 서 있는 동안 다른 파트너가 그 주위를 전진, 옆걸음, 후진을 조합하여 둥글게 도는 회전 피구라입니다.",
    tip: "회전 궤도 내부의 리더가 자신의 축을 흔들림 없이 가상의 등대로 고정해 줄수록, 외곽을 걷는 팔로워가 편안하게 커브를 돌 수 있습니다. 회전 중 당기는 힘은 금물입니다."
  },
  {
    ko: "보레오",
    es: "Boleo",
    level: "중급",
    category: "advanced",
    desc: "상체의 빠른 방향 전환(Pivot)에 의해 발생하는 하체의 원심력으로 인해, 발끝이 공중으로 채찍처럼 튕겨 올라가는 고유의 장식적인 피구라입니다.",
    tip: "이 동작은 근력으로 발을 뒤로 차올리는 것이 아닙니다! 몸통(Core)의 꼬임과 풀림의 에너지 결과로 다리가 자연스럽게 채찍의 끝자락처럼 따라 올라가야 우아합니다."
  },
  {
    ko: "카베세오",
    es: "Cabeceo",
    level: "기초",
    category: "connection",
    desc: "밀롱가에서 음악이 시작될 때 테이블 너머 원거리에서 남녀가 서로 시선을 마주하며(Cabeceo) 미소나 눈짓으로 파트너를 신청하는 매너입니다.",
    tip: "눈맞춤이 성공하고 파트너가 미소와 끄덕임으로 답할 때에만 다가가 에스코트하세요. 거절당했을 때의 서로간의 어색함을 완벽하게 방지해 주는 가장 품격 있는 문화입니다."
  },
  {
    ko: "론다",
    es: "Ronda",
    level: "기초",
    category: "connection",
    desc: "댄스홀 바깥쪽 라인을 따라 시계 반대 방향으로 질서 정연하게 흐르며 춤추는 무도회 규칙입니다. 교통사고를 방지하고 흐름을 유지하는 핵심 매너입니다.",
    tip: "아무리 챔피언 같은 현란한 춤을 추더라도 론다의 흐름을 역주행하거나, 앞 커플과의 간격을 심하게 위협하며 추는 춤은 밀롱가에서 최악의 평가를 받습니다."
  },
  {
    ko: "꼼빠스",
    es: "Compás",
    level: "기초",
    category: "music",
    desc: "음악의 규칙적인 강약 비트(Pulse)입니다. 탱고의 보행 템포를 결정짓는 핵심 박자 단위를 말합니다.",
    tip: "반도네온이나 더블베이스가 무겁게 때려주는 꼼빠스(1박과 3박의 강박)를 발바닥이 대지에 닿는 순간과 완벽하게 일치시키는 훈련부터 반복하셔야 합니다."
  }
];

const ANALYSIS_REPORTS = {
  caminata: {
    score: 91,
    axisScore: 94,
    connectionScore: 88,
    musicalityScore: 91,
    strengths: "전체적인 수직 정렬(Eje)이 매우 모범적입니다. 딛는 매 발걸음마다 체중이 완벽히 한 발 축으로 온전히 전이되며 나아가는 안정적인 무브먼트가 돋보입니다.",
    improvements: "후진 걷기 시, 다리가 먼저 나가기 전에 골반의 이완이 반 박자 늦어 상체가 순간적으로 꺾이는 현상이 1회 발견되었습니다. 발과 골반이 한 세트처럼 동시에 뻗어야 합니다.",
    tip: "시니어분들은 무릎 관절의 보호와 우아함을 위해, 발을 딛는 착지 시점에 무릎 관절을 뻣뻣하게 완전히 잠그지 말고 미세하게 유연성을 비워 두시길 홍수 & 진주 교수가 권장합니다."
  },
  salida: {
    score: 84,
    axisScore: 82,
    connectionScore: 80,
    musicalityScore: 90,
    strengths: "살리다 3보에서 4보 크로스(Cruzada)로 연결하는 발바닥 꼬임 구간의 음악적 싱크가 정확합니다. 박자를 여유롭게 사용하는 모습이 좋습니다.",
    improvements: "2보 옆걸음(Lateral step)에서 보폭이 너무 넓어져 파트너와의 거리가 순간적으로 늘어나며 아브라소 오른쪽 손바닥 그립의 텐션이 팽팽해지는 불균형이 발견됩니다.",
    tip: "홍수 교수의 팁: 살리다 2보는 넓게 딛는 걸음이 아닌 회전 유도를 위한 가벼운 정렬 단계입니다. 어깨너비 이상 벌리지 않도록 주의하여 프레임을 유지하세요."
  },
  ocho_cortado: {
    score: 78,
    axisScore: 74,
    connectionScore: 78,
    musicalityScore: 82,
    strengths: "잘라내는 시점의 리바운드(Rebound) 반응 속도가 아주 훌륭합니다. 비트를 쪼개는 탱고 특유의 경쾌한 밀롱가 리듬 해석력이 돋보입니다.",
    improvements: "리바운드 회전 순간, 골반은 돌아가는데 상체가 골반을 따라 같이 회전하며 척추 중심 축이 흔들렸습니다. 이로 인해 파트너에게 전해지는 가슴 신호가 불명확해졌습니다.",
    tip: "진주 교수의 코칭: 상체는 파트너와 평행하게 고정한 상태에서 허리 아래만 유연하게 회전하는 '상체 분리(Disociación)' 기초 훈련을 거울을 보며 매일 연습해 보세요."
  },
  giro: {
    score: 86,
    axisScore: 85,
    connectionScore: 86,
    musicalityScore: 87,
    strengths: "회전 궤도 중심에서 흐트러짐 없이 버텨주는 회전축(Pivot axis) 관리가 뛰어납니다. 파트너가 외곽을 원형으로 깨끗하게 걷도록 잘 기다려 줍니다.",
    improvements: "Giro 뒷걸음(Atrás) 시 발등을 뒤로 쭉 뻗는 과정에서 엉덩이가 미세하게 뒤로 빠져 가슴 밀착 각도가 깨집니다. 등 근육을 당겨 곧은 척추를 세워주세요.",
    tip: "홍수 & 진주 교수의 원포인트: 시니어 파트너와 춤을 출 때는 Giro 회전 시 급격히 잡아당기지 않고, 서로의 가슴 중심선이 만드는 정삼각형 프레임을 끝까지 존중하며 원을 그리십시오."
  }
};

// ==========================================
// 2. STATE VARIABLES
// ==========================================
let activeTab = "curriculum";
let fontSizeClass = "font-md";
let activeGlossaryCategory = "all";
let searchKeyword = "";

// Metronome state
let metroBpm = 60;
let metroPlaying = false;
let metroRhythm = "tango";
let metroIntervalId = null;
let metroCurrentBeat = 0;
let audioCtx = null;

// AI Analysis Simulation state
let isScanning = false;
let scanProgress = 0;
let scanIntervalId = null;
let currentUploadedVideo = null;
let selectedFigureForAnalysis = "caminata";
let canvasAnimationId = null;

// ==========================================
// 3. INDEXEDDB SETUP FOR PERSISTENT JOURNAL VIDEOS
// ==========================================
const DB_NAME = "TangoMasterDB";
const DB_VERSION = 1;
const STORE_NAME = "video_journals";
let db = null;

function initIndexedDB(callback) {
  const request = indexedDB.open(DB_NAME, DB_VERSION);

  request.onupgradeneeded = (event) => {
    const database = event.target.result;
    if (!database.objectStoreNames.contains(STORE_NAME)) {
      // Create store with id as primary key
      database.createObjectStore(STORE_NAME, { keyPath: "id" });
    }
  };

  request.onsuccess = (event) => {
    db = event.target.result;
    console.log("IndexedDB initialized successfully.");
    if (callback) callback();
  };

  request.onerror = (event) => {
    console.error("IndexedDB failed to open:", event.target.error);
    if (callback) callback();
  };
}

// Save journal to database
function saveJournalToDB(entry, callback) {
  if (!db) {
    console.warn("Database not ready. Falling back to local variable.");
    if (callback) callback();
    return;
  }

  const transaction = db.transaction([STORE_NAME], "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  const request = store.put(entry);

  request.onsuccess = () => {
    console.log("Journal entry saved to IndexedDB.");
    if (callback) callback();
  };

  request.onerror = (event) => {
    console.error("Failed to save journal to database:", event.target.error);
  };
}

// Fetch all journals from database
function fetchJournalsFromDB(callback) {
  if (!db) {
    if (callback) callback([]);
    return;
  }

  const transaction = db.transaction([STORE_NAME], "readonly");
  const store = transaction.objectStore(STORE_NAME);
  const request = store.getAll();

  request.onsuccess = (event) => {
    // Sort by date/timestamp descending
    const results = event.target.result || [];
    results.sort((a, b) => b.timestamp - a.timestamp);
    if (callback) callback(results);
  };

  request.onerror = (event) => {
    console.error("Failed to fetch journals:", event.target.error);
    if (callback) callback([]);
  };
}

// Delete journal entry from database
function deleteJournalFromDB(id, callback) {
  if (!db) {
    if (callback) callback();
    return;
  }

  const transaction = db.transaction([STORE_NAME], "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  const request = store.delete(id);

  request.onsuccess = () => {
    console.log(`Deleted journal entry ${id} from database.`);
    if (callback) callback();
  };

  request.onerror = (event) => {
    console.error("Failed to delete journal:", event.target.error);
  };
}

// ==========================================
// 4. AUDIO SYNTHESIS FOR METRONOME
// ==========================================
function playMetronomeClick(isStrong) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const frequency = isStrong ? 950 : 550;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    
    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.08);
  } catch (e) {
    console.warn("AudioContext metronome synthesis failed.", e);
  }
}

// ==========================================
// 5. APPLICATION INITIALIZATION & CORE LOGIC
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initIndexedDB(() => {
    renderJournalEntries();
  });
  initAccessibility();
  initMobileTabs();
  renderCurriculum();
  renderGlossary();
  initGlossaryFilters();
  initMetronome();
  initAIAnalysis();
  initJournalForm();
});

// Font size scaling (Accessibility for seniors)
function initAccessibility() {
  const fontClasses = ["font-sm", "font-md", "font-lg", "font-xl"];
  const buttons = {
    "btn-font-sm": "font-sm",
    "btn-font-md": "font-md",
    "btn-font-lg": "font-lg",
    "btn-font-xl": "font-xl"
  };

  Object.entries(buttons).forEach(([btnId, cls]) => {
    const el = document.getElementById(btnId);
    if (!el) return;
    
    el.addEventListener("click", () => {
      fontClasses.forEach(c => document.body.classList.remove(c));
      document.body.classList.add(cls);
      fontSizeClass = cls;
      
      Object.keys(buttons).forEach(id => {
        document.getElementById(id).style.borderWidth = (id === btnId) ? "2px" : "1px";
      });
    });
  });
}

// Mobile Bottom Navigation Tabs Handler
function initMobileTabs() {
  const tabs = document.querySelectorAll(".nav-tab");
  const contentArea = document.querySelector(".content-area");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      
      // Update active menu tab
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Update section contents
      document.querySelectorAll(".tab-content").forEach(section => {
        section.classList.remove("active");
      });
      document.getElementById(target).classList.add("active");
      
      activeTab = target;

      // Reset scroll position of inner area to top for seamless mobile feel
      if (contentArea) {
        contentArea.scrollTop = 0;
      }

      // Stop metronome or videos when leaving tabs to respect resource constraints
      if (target !== 'rhythm' && metroPlaying) {
        toggleMetronome();
      }
      if (target !== 'analysis') {
        const vid = document.getElementById('analysis-video');
        if (vid && !vid.paused) vid.pause();
        if (canvasAnimationId) {
          cancelAnimationFrame(canvasAnimationId);
          canvasAnimationId = null;
        }
      }
    });
  });
}

// ==========================================
// 6. MODULE: CURRICULUM
// ==========================================
function renderCurriculum() {
  const container = document.getElementById("curriculum-container");
  if (!container) return;

  container.innerHTML = CURRICULUM_DATA.map(c => `
    <div class="week-item">
      <div class="week-header">
        <span class="week-title">${c.title}</span>
        <span class="week-badge">${c.badge}</span>
      </div>
      <div class="week-content">${c.content}</div>
    </div>
  `).join("");
}

// ==========================================
// 7. MODULE: GLOSSARY (SEARCH & FILTER)
// ==========================================
function renderGlossary() {
  const container = document.getElementById("glossary-container");
  if (!container) return;

  const filtered = GLOSSARY_DATA.filter(item => {
    const matchesCategory = (activeGlossaryCategory === "all" || item.category === activeGlossaryCategory);
    
    const normalizedKo = item.ko.toLowerCase();
    const normalizedEs = item.es.toLowerCase();
    const matchesSearch = !searchKeyword || 
                         normalizedKo.includes(searchKeyword) || 
                         normalizedEs.includes(searchKeyword);
                         
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card" style="text-align: center; color: var(--text-secondary);">검색 결과가 없습니다. 다른 단어로 검색해 보세요.</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="glossary-item">
      <div class="glossary-title-row">
        <div>
          <span class="glossary-term-ko">${item.ko}</span>
          <span class="glossary-term-es">${item.es}</span>
        </div>
        <span class="glossary-level">${item.level}</span>
      </div>
      <p class="glossary-desc">${item.desc}</p>
      <div class="glossary-tip">
        <strong>👑 교수진 팁:</strong> ${item.tip}
      </div>
    </div>
  `).join("");
}

function initGlossaryFilters() {
  const searchInput = document.getElementById("glossary-search");
  const clearBtn = document.getElementById("btn-search-clear");
  const tags = document.querySelectorAll("#glossary-tags .tag");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value.toLowerCase().trim();
      renderGlossary();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchKeyword = "";
      renderGlossary();
    });
  }

  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      tags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");
      activeGlossaryCategory = tag.dataset.category;
      renderGlossary();
    });
  });
}

// ==========================================
// 8. MODULE: RHYTHM METRONOME
// ==========================================
function initMetronome() {
  const tempoSlider = document.getElementById("tempo-range");
  const bpmValue = document.getElementById("bpm-value");
  const btnPlay = document.getElementById("btn-metro-play");
  
  const rhythmButtons = {
    "rhythm-tango": "tango",
    "rhythm-milonga": "milonga",
    "rhythm-vals": "vals"
  };

  if (tempoSlider && bpmValue) {
    tempoSlider.addEventListener("input", (e) => {
      metroBpm = parseInt(e.target.value);
      bpmValue.textContent = metroBpm;
      if (metroPlaying) {
        stopMetroTimer();
        startMetroTimer();
      }
    });
  }

  if (btnPlay) {
    btnPlay.addEventListener("click", toggleMetronome);
  }

  Object.entries(rhythmButtons).forEach(([btnId, type]) => {
    const el = document.getElementById(btnId);
    if (!el) return;

    el.addEventListener("click", () => {
      Object.keys(rhythmButtons).forEach(id => {
        document.getElementById(id).style.borderWidth = (id === btnId) ? "2px" : "1px";
      });
      metroRhythm = type;
      metroCurrentBeat = 0;
      updateRhythmIndicators();
      if (metroPlaying) {
        stopMetroTimer();
        startMetroTimer();
      }
    });
  });

  updateRhythmIndicators();
}

function updateRhythmIndicators() {
  const container = document.getElementById("beat-indicators");
  if (!container) return;

  if (metroRhythm === "tango") {
    container.innerHTML = `
      <div class="beat-node strong" data-beat="1">1</div>
      <div class="beat-node" data-beat="2">2</div>
      <div class="beat-node strong" data-beat="3">3</div>
      <div class="beat-node" data-beat="4">4</div>
    `;
  } else if (metroRhythm === "milonga") {
    container.innerHTML = `
      <div class="beat-node strong" data-beat="1">1</div>
      <div class="beat-node" data-beat="2">2</div>
    `;
  } else if (metroRhythm === "vals") {
    container.innerHTML = `
      <div class="beat-node strong" data-beat="1">1</div>
      <div class="beat-node" data-beat="2">2</div>
      <div class="beat-node" data-beat="3">3</div>
    `;
  }
}

function toggleMetronome() {
  const btnPlay = document.getElementById("btn-metro-play");
  if (!btnPlay) return;

  if (metroPlaying) {
    stopMetroTimer();
    btnPlay.textContent = "▶️ 비트 시작";
    btnPlay.style.background = "var(--crimson)";
    resetMetronomeUI();
  } else {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    metroCurrentBeat = 0;
    startMetroTimer();
    btnPlay.textContent = "⏹️ 비트 정지";
    btnPlay.style.background = "#2ecc71";
  }
  metroPlaying = !metroPlaying;
}

function startMetroTimer() {
  let speedMultiplier = 1;
  if (metroRhythm === "milonga") {
    speedMultiplier = 2; // Milonga is faster syncopated beat feel
  }
  const intervalMs = (60 / (metroBpm * speedMultiplier)) * 1000;
  metroIntervalId = setInterval(tickMetronome, intervalMs);
}

function stopMetroTimer() {
  if (metroIntervalId) {
    clearInterval(metroIntervalId);
    metroIntervalId = null;
  }
}

function tickMetronome() {
  const nodes = document.querySelectorAll("#beat-indicators .beat-node");
  const dot = document.getElementById("metro-dot");
  
  if (nodes.length === 0 || !dot) return;

  nodes.forEach(n => n.classList.remove("active"));
  dot.classList.remove("active-beat", "strong-beat");

  metroCurrentBeat = (metroCurrentBeat % nodes.length) + 1;
  const currentNode = document.querySelector(`#beat-indicators .beat-node[data-beat="${metroCurrentBeat}"]`);
  
  if (currentNode) {
    currentNode.classList.add("active");
    const isStrongBeat = currentNode.classList.contains("strong");
    
    playMetronomeClick(isStrongBeat);
    
    setTimeout(() => {
      dot.classList.add(isStrongBeat ? "strong-beat" : "active-beat");
    }, 10);
  }
}

function resetMetronomeUI() {
  const nodes = document.querySelectorAll("#beat-indicators .beat-node");
  const dot = document.getElementById("metro-dot");
  nodes.forEach(n => n.classList.remove("active"));
  if (dot) dot.classList.remove("active-beat", "strong-beat");
}

// ==========================================
// 9. MODULE: AI VIDEO ANALYSIS
// ==========================================
function initAIAnalysis() {
  const videoInput = document.getElementById("video-input");
  const uploadZone = document.getElementById("upload-zone");
  const videoWrapper = document.getElementById("video-wrapper");
  const ctrlPanel = document.getElementById("analysis-ctrls");
  const btnStart = document.getElementById("btn-start-analysis");
  const btnReset = document.getElementById("btn-reset-analysis");
  const scanBar = document.getElementById("scan-bar");
  const scanStatus = document.getElementById("scan-status");
  const reportPanel = document.getElementById("report-panel");
  const analysisVideo = document.getElementById("analysis-video");

  if (!videoInput || !uploadZone) return;

  uploadZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = "var(--gold-hover)";
  });

  uploadZone.addEventListener("dragleave", () => {
    uploadZone.style.borderColor = "var(--gold)";
  });

  uploadZone.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = "var(--gold)";
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      loadAnalysisVideo(files[0]);
    }
  });

  videoInput.addEventListener("change", (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      loadAnalysisVideo(files[0]);
    }
  });

  btnStart.addEventListener("click", () => {
    if (isScanning) return;
    
    selectedFigureForAnalysis = document.getElementById("figure-select").value;
    
    reportPanel.classList.remove("active");
    scanStatus.classList.add("active");
    scanBar.classList.add("active");
    isScanning = true;
    scanProgress = 0;

    analysisVideo.currentTime = 0;
    analysisVideo.play().catch(() => {});

    startCanvasLoop();

    scanIntervalId = setInterval(() => {
      scanProgress += 2;
      scanStatus.textContent = `🤖 영상 데이터를 정밀 스캔하는 중... (${scanProgress}%)`;
      
      if (scanProgress >= 100) {
        clearInterval(scanIntervalId);
        scanIntervalId = null;
        isScanning = false;
        scanStatus.classList.remove("active");
        scanBar.classList.remove("active");
        showAnalysisReport(selectedFigureForAnalysis);
      }
    }, 80);
  });

  btnReset.addEventListener("click", () => {
    resetAnalysisStudio();
  });
}

function loadAnalysisVideo(file) {
  const uploadZone = document.getElementById("upload-zone");
  const videoWrapper = document.getElementById("video-wrapper");
  const ctrlPanel = document.getElementById("analysis-ctrls");
  const analysisVideo = document.getElementById("analysis-video");

  currentUploadedVideo = file;
  const fileURL = URL.createObjectURL(file);
  analysisVideo.src = fileURL;
  analysisVideo.load();

  uploadZone.style.display = "none";
  videoWrapper.classList.add("active");
  ctrlPanel.style.display = "flex";
}

function startCanvasLoop() {
  const canvas = document.getElementById("analysis-canvas");
  const video = document.getElementById("analysis-video");
  if (!canvas || !video) return;

  const ctx = canvas.getContext("2d");
  
  function updateCanvasFrame() {
    if (!video.paused && !video.ended) {
      const rect = video.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      drawSimulatedSkeleton(ctx, canvas.width, canvas.height, video.currentTime, selectedFigureForAnalysis);
    }
    canvasAnimationId = requestAnimationFrame(updateCanvasFrame);
  }

  if (canvasAnimationId) {
    cancelAnimationFrame(canvasAnimationId);
  }
  canvasAnimationId = requestAnimationFrame(updateCanvasFrame);
}

function showAnalysisReport(figure) {
  const report = ANALYSIS_REPORTS[figure] || ANALYSIS_REPORTS.caminata;
  const reportPanel = document.getElementById("report-panel");
  
  document.getElementById("report-score").textContent = `종합 ${report.score}점`;
  
  document.getElementById("metric-axis-text").textContent = getRatingString(report.axisScore);
  const axisFill = document.getElementById("metric-axis-fill");
  axisFill.className = `metric-fill ${getScoreClass(report.axisScore)}`;
  axisFill.style.width = `${report.axisScore}%`;

  document.getElementById("metric-connection-text").textContent = getRatingString(report.connectionScore);
  const connFill = document.getElementById("metric-connection-fill");
  connFill.className = `metric-fill ${getScoreClass(report.connectionScore)}`;
  connFill.style.width = `${report.connectionScore}%`;

  document.getElementById("metric-musicality-text").textContent = getRatingString(report.musicalityScore);
  const musFill = document.getElementById("metric-musicality-fill");
  musFill.className = `metric-fill ${getScoreClass(report.musicalityScore)}`;
  musFill.style.width = `${report.musicalityScore}%`;

  document.getElementById("feedback-strengths").textContent = report.strengths;
  document.getElementById("feedback-improvements").textContent = report.improvements;
  document.getElementById("feedback-professor-tip").innerHTML = `"<strong>홍수 & 진주 교수의 원포인트 레슨:</strong> ${report.tip}"`;

  reportPanel.classList.add("active");
  reportPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getRatingString(score) {
  if (score >= 90) return `매우 우수 (${score}점)`;
  if (score >= 80) return `우수 (${score}점)`;
  if (score >= 70) return `보완 필요 (${score}점)`;
  return `재훈련 요망 (${score}점)`;
}

function getScoreClass(score) {
  if (score >= 85) return 'good';
  if (score >= 70) return 'warning';
  return '';
}

function resetAnalysisStudio() {
  const uploadZone = document.getElementById("upload-zone");
  const videoWrapper = document.getElementById("video-wrapper");
  const ctrlPanel = document.getElementById("analysis-ctrls");
  const reportPanel = document.getElementById("report-panel");
  const scanStatus = document.getElementById("scan-status");
  const scanBar = document.getElementById("scan-bar");
  const analysisVideo = document.getElementById("analysis-video");
  const canvas = document.getElementById("analysis-canvas");

  if (scanIntervalId) {
    clearInterval(scanIntervalId);
    scanIntervalId = null;
  }
  if (canvasAnimationId) {
    cancelAnimationFrame(canvasAnimationId);
    canvasAnimationId = null;
  }
  isScanning = false;

  analysisVideo.pause();
  analysisVideo.src = "";
  currentUploadedVideo = null;

  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  uploadZone.style.display = "block";
  videoWrapper.classList.remove("active");
  ctrlPanel.style.display = "none";
  reportPanel.classList.remove("active");
  scanStatus.classList.remove("active");
  scanBar.classList.remove("active");
}

// ==========================================
// 10. MODULE: PERSISTENT PRACTICE JOURNAL
// ==========================================
function initJournalForm() {
  const form = document.getElementById("journal-form");
  const dateInput = document.getElementById("journal-date");
  const fileInput = document.getElementById("journal-video-input");
  const fileTrigger = document.getElementById("btn-journal-file-trigger");
  const fileNameDisplay = document.getElementById("journal-file-name");

  // Default date to today
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
  }

  // Trigger file click when custom visual button is clicked (Senior friendly)
  if (fileTrigger && fileInput) {
    fileTrigger.addEventListener("click", () => {
      fileInput.click();
    });
  }

  // Display selected file name
  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        fileNameDisplay.textContent = `📹 선택됨: ${e.target.files[0].name}`;
      } else {
        fileNameDisplay.textContent = "선택된 영상 없음";
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      saveJournalEntry();
    });
  }
}

function saveJournalEntry() {
  const dateVal = document.getElementById("journal-date").value;
  const titleVal = document.getElementById("journal-title").value;
  const notesVal = document.getElementById("journal-notes").value;
  const fileInput = document.getElementById("journal-video-input");
  
  if (!dateVal || !titleVal || !notesVal) return;

  const btnSave = document.getElementById("btn-save-journal");
  if (btnSave) {
    btnSave.textContent = "💾 저장 중...";
    btnSave.disabled = true;
  }

  const entryId = Date.now().toString();
  const newEntry = {
    id: entryId,
    date: dateVal,
    title: titleVal,
    notes: notesVal,
    timestamp: Date.now(),
    videoBlob: null // default
  };

  // Check if a video file was uploaded
  if (fileInput && fileInput.files.length > 0) {
    newEntry.videoBlob = fileInput.files[0];
  }

  saveJournalToDB(newEntry, () => {
    // Reset form
    document.getElementById("journal-title").value = "";
    document.getElementById("journal-notes").value = "";
    if (fileInput) fileInput.value = "";
    
    const fileNameDisplay = document.getElementById("journal-file-name");
    if (fileNameDisplay) fileNameDisplay.textContent = "선택된 영상 없음";

    if (btnSave) {
      btnSave.textContent = "💾 일지 기록하기";
      btnSave.disabled = false;
    }

    // Refresh UI list
    renderJournalEntries();
  });
}

function deleteJournalEntry(id) {
  if (confirm("연습 일지를 삭제하시겠습니까?")) {
    deleteJournalFromDB(id, () => {
      renderJournalEntries();
    });
  }
}

function renderJournalEntries() {
  const container = document.getElementById("journal-container");
  if (!container) return;

  fetchJournalsFromDB((entries) => {
    if (entries.length === 0) {
      container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 15px;">등록된 일지가 없습니다. 첫 연습 영상을 업로드해 보세요!</p>`;
      return;
    }

    container.innerHTML = ""; // clear

    entries.forEach(e => {
      const card = document.createElement("div");
      card.className = "journal-item";

      // Meta row
      const metaRow = document.createElement("div");
      metaRow.className = "journal-meta";
      metaRow.innerHTML = `
        <strong>📅 ${e.date}</strong>
        <button class="btn-delete-journal" onclick="deleteJournalEntry('${e.id}')">삭제</button>
      `;
      card.appendChild(metaRow);

      // Body texts
      const bodyDiv = document.createElement("div");
      bodyDiv.className = "journal-text";
      bodyDiv.innerHTML = `
        <h4 style="color: var(--gold); margin-bottom: 5px;">📍 주제: ${e.title}</h4>
        <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">${e.notes}</p>
      `;
      card.appendChild(bodyDiv);

      // Video playing element (Cumulative and persistent blob url)
      if (e.videoBlob) {
        const videoElement = document.createElement("video");
        videoElement.className = "journal-video-player";
        videoElement.controls = true;
        
        // Generate blob local URL dynamically
        const videoURL = URL.createObjectURL(e.videoBlob);
        videoElement.src = videoURL;

        card.appendChild(videoElement);
      }

      container.appendChild(card);
    });
  });
}

// Make globally accessible for template event handler
window.deleteJournalEntry = deleteJournalEntry;
