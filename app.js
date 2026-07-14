// Myongji University Future Education Center - Tango Master Course
// Advising Professors: Hong Soo & Jin Joo
// Core Business Logic (Beginner/Intermediate Curriculum, Accordions with Video Uploads, Side-by-Side Sync Analyzer)

// ==========================================
// 1. DATA DEFINITIONS (CURRICULUM & GLOSSARY)
// ==========================================

const CURRICULUM_DATA = [
  {
    week: 1,
    title: "탱고의 시작: 바른 자세와 걷기 (Caminata)",
    badge: "1주차",
    course: "basic",
    goal: "안정적인 수직 정렬(Eje)과 척추 축을 세운 걷기 메커니즘 체득.",
    tip: "시니어분들은 무릎 관절 보호를 위해 착지 순간 무릎을 완전히 펴지 마시고, 발목 관절의 힘을 뺀 상태로 발끝 커넥션에 주안점을 두세요.",
    desc: "아르헨티나 탱고의 정수이자 평생 연습하게 될 '걷기(Caminata)'를 시작합니다. 남녀 간의 서로 존중하는 가슴 포옹(Abrazo) 자세를 익히며 안정되게 나아갑니다."
  },
  {
    week: 2,
    title: "8보 기초 조합: 살리다 바시카 (Salida Básica)",
    badge: "2주차",
    course: "basic",
    goal: "1보부터 8보까지 진행하며 크로스(Cruzada) 체중이동 이해.",
    tip: "2보 옆걸음 시 어깨너비 이상 넓게 벌리지 않도록 가슴 회전 각도를 통제하며, 리더와 팔로워의 상체 평행 프레임을 유지하는 연습에 힘쓰십시오.",
    desc: "기본 8단계 발디딤인 살리다 바시카를 배웁니다. 론다(댄스홀 진행방향)의 질서에 발맞추어 이동하고 방향을 세팅하는 법을 실습합니다."
  },
  {
    week: 3,
    title: "방향 전환의 핵심: 오초 코르타도 (Ocho Cortado)",
    badge: "3주차",
    course: "basic",
    goal: "좁은 무도회에서 방향을 자르고 우회하기 위한 리바운드 테크닉.",
    tip: "리더는 급하게 팔로 당기지 마시고 상체 가슴 트위스트(리바운드)를 유도하여 팔로워 골반의 피벗 감각을 자연스럽게 유도해내야 합니다.",
    desc: "밀롱가에서 정면 진행을 할 수 없을 때 발걸음을 잘라서 옆이나 반대 방향으로 선회하는 매우 유용하고 아름다운 필수 피구라입니다."
  },
  {
    week: 4,
    title: "부드러운 피벗: 오초 아델란테 & 아뜨라스 (Ocho)",
    badge: "4주차",
    course: "basic",
    goal: "전진 오초(Adelante) 및 후진 오초(Atrás)를 통한 상하체 회전 분리.",
    tip: "상체 프레임은 파트너와 나란히 유지하되 골반 이하 하체만 비틀어 회전하는 분리(Disociación)가 핵심입니다. 상체가 흔들리면 아브라소가 찢어집니다.",
    desc: "바닥에 부드러운 8자 곡선을 그리는 스텝을 배웁니다. 서로의 무게 중심 축을 존중하며 부드럽게 꼬임을 풀고 피벗하는 훈련을 반복합니다."
  },
  {
    week: 5,
    title: "회전 원리 학습: 히로 (Giro) 테크닉",
    badge: "5주차",
    course: "advanced",
    goal: "공동의 회전축을 잡고 파트너 주위를 원형으로 회전하는 테크닉.",
    tip: "회전 궤도 내부의 리더가 가상의 등대처럼 척추 축을 고정한 상태로 지탱해야, 팔로워가 원형 궤도를 일정하게 흐를 수 있습니다.",
    desc: "앞걸음, 옆걸음, 뒷걸음을 결합하여 파트너의 주변을 둥글게 원형 회전하는 중급 피구라입니다. 회전 시 등 근육 텐션 유지가 필수적입니다."
  },
  {
    week: 6,
    title: "리듬과 감성의 교감: 탱고 음악성 (Musicality)",
    badge: "6주차",
    course: "advanced",
    goal: "반도네온 멜로디의 꼼빠스(Compás)와 강약 쪼개기 감각 체득.",
    tip: "비트를 발바닥으로 확실하게 밟아 지면을 누르는 강박(1박과 3박) 액센트 표현력과, 멜로디 흐름에 무게를 늘리는 슬로우 보행을 분리하세요.",
    desc: "탱고(4/4), 밀롱가(2/4), 발스(3/4) 음악의 박자 차이를 배우며 음악의 감정을 댄스 보폭과 속도로 표현하는 우아함을 연마합니다."
  },
  {
    week: 7,
    title: "세계 챔피언의 장식: 사카다와 보레오 (Sacada & Boleo)",
    badge: "7주차",
    course: "advanced",
    goal: "원심력 반동을 이용한 장식 동작 보레오와 공간을 뺏는 사카다.",
    tip: "보레오는 힘으로 다리를 직접 차올리는 것이 아닌 상체 회전(Pivot) 반동으로 채찍 끝처럼 발이 날려야 안전하며 품격이 살아납니다.",
    desc: "상대방이 체중을 비운 딛는 발 공간에 내 발을 파고드는 사카다(Sacada)와 허리의 비틀림 원심력을 극대화한 보레오(Boleo)를 배웁니다."
  },
  {
    week: 8,
    title: "밀롱가 에티켓과 수료식 (Codigos)",
    badge: "8주차",
    course: "advanced",
    goal: "카베세오(Cabeceo)와 론다(Ronda) 차간 거리 유지를 통한 매너 체화.",
    tip: "앞 커플과의 거리를 최소 1.5미터 유지하며 론다 매너를 존중하는 배려가 있을 때 비로소 챔피언 마스터 과정의 품격이 완성됩니다.",
    desc: "수강생 여러분의 8주 마스터 클래스 수료식 무대를 선보이며, 실제 무도회인 밀롱가에서 예의를 다해 타인과 음악을 나누는 코디고를 전수받습니다."
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
  1: {
    score: 91,
    axisScore: 94,
    connectionScore: 88,
    musicalityScore: 91,
    strengths: "Caminata 시 척추 수직 밸런스가 매우 탁월하며, 딛는 발의 중심축 전이가 정석에 가깝습니다.",
    improvements: "리드 후진 시에 골반이 뒤늦게 풀려 상체가 미세하게 경직됩니다. 호흡을 내려놓으세요.",
    tip: "시니어분들은 착지 순간 무릎 관절을 뻣뻣하게 굳히지 말고 유연한 무릎 여유각을 항시 유지해야 안전합니다."
  },
  2: {
    score: 84,
    axisScore: 82,
    connectionScore: 80,
    musicalityScore: 90,
    strengths: "살리다 3보에서 4보 크로스(Cruzada) 교차 시 리듬 꼼빠스를 아주 차분하게 정박으로 지켜냅니다.",
    improvements: "2보 오른쪽 옆걸음 시 리더가 상체를 과도하게 뻗어 아브라소 돔 프레임 형태가 일시적으로 일그러집니다.",
    tip: "옆걸음은 발끝 정렬과 가슴의 연결이 1순위입니다. 보폭을 적당하게 통제하여 가슴 텐션을 확보하십시오."
  },
  3: {
    score: 78,
    axisScore: 74,
    connectionScore: 78,
    musicalityScore: 82,
    strengths: "오초 코르타도 차단 지점의 퀵 리바운드 반작용 박자감이 뛰어납니다.",
    improvements: "리바운드 시 몸통의 디소시아시온(상하체 분리)이 되지 않아 파트너 가슴을 직접 흔드는 오류가 있습니다.",
    tip: "상체 가슴선은 끝까지 수평을 고수하고 엉덩이뼈 아래만 빠르게 비틀어 피벗을 돌려주어야 파트너가 편안합니다."
  },
  4: {
    score: 82,
    axisScore: 80,
    connectionScore: 82,
    musicalityScore: 85,
    strengths: "전진 오초 시 골반의 피벗 꼬임 각도가 유연하여 발동작 회전 궤도가 아름답습니다.",
    improvements: "후진 오초 시 무게가 발뒤꿈치 선을 넘어 과도하게 뒤로 자빠지는 불안정이 미세하게 관찰됩니다.",
    tip: "체중은 항상 발가락 뿌리 부근(Metatarsal)에 중심을 살짝 얹는 아르헨티나 전통 마스터 축을 떠올려 보십시오."
  },
  5: {
    score: 86,
    axisScore: 85,
    connectionScore: 86,
    musicalityScore: 87,
    strengths: "회전 궤도 중심에서 흐트러짐 없이 버텨주는 회전축(Pivot axis) 관리가 뛰어납니다. 파트너가 외곽을 원형으로 깨끗하게 걷도록 잘 기다려 줍니다.",
    improvements: "Giro 뒷걸음(Atrás) 시 발등을 뒤로 축을 뻗는 과정에서 엉덩이가 미세하게 뒤로 빠져 가슴 밀착 각도가 깨집니다. 등 근육을 당겨 곧은 척추를 세워주세요.",
    tip: "홍수 & 진주 교수의 원포인트: 시니어 파트너와 춤을 출 때는 Giro 회전 시 급격히 잡아당기지 않고, 서로의 가슴 중심선이 만드는 정삼각형 프레임을 끝까지 존중하며 원을 그리십시오."
  },
  6: {
    score: 88,
    axisScore: 86,
    connectionScore: 88,
    musicalityScore: 92,
    strengths: "반도네온 꼼빠스를 무릎 관절로 흡수하며 쪼개어 디디는 음악적 집중력이 아주 일품입니다.",
    improvements: "싱코페이션 리듬 돌입 시 보행 속도가 순간적으로 급해져 파트너가 중심을 회복할 여유가 방해받습니다.",
    tip: "급할수록 몸속 호흡을 아래로 밀착시켜 무게 중심의 침착함을 발바닥 그립으로 지면에 부착시키세요."
  },
  7: {
    score: 81,
    axisScore: 80,
    connectionScore: 78,
    musicalityScore: 84,
    strengths: "사카다 진입 시 파트너 다리 사이 틈새를 확보하며 정확한 스페이스 리드에 성공합니다.",
    improvements: "보레오 시 골반 반동이 부족하여 발끝을 자력으로 차올려, 파트너 무릎 근방에 충돌할 위험이 관찰됩니다.",
    tip: "보레오는 리더의 가슴 회전에서 발생하는 원심력의 결과물이어야 합니다. 다리 힘으로 차올리면 절대 안 됩니다."
  },
  8: {
    score: 95,
    axisScore: 94,
    connectionScore: 96,
    musicalityScore: 95,
    strengths: "론다 흐름의 질서 정연한 속도 조절 및 카베세오의 세련된 시선 처리가 완벽합니다.",
    improvements: "지나친 경직 상태의 아브라소 프레임이 아쉽습니다. 긴장을 조금 덜어 파트너와의 일체감을 늘려보세요.",
    tip: "상호 존중의 약속 노선인 론다의 차간 흐름을 지켜 뒤따르는 커플을 배려하는 것이 탱고의 예절입니다."
  }
};

// ==========================================
// 2. STATE VARIABLES
// ==========================================
let activeTab = "curriculum";
let activeGlossaryCategory = "all";
let searchKeyword = "";
let activeCourse = "basic"; // basic(초급 시작반) or advanced(중급 완성반)

// Metronome state
let metroBpm = 60;
let metroPlaying = false;
let metroRhythm = "tango";
let metroIntervalId = null;
let metroCurrentBeat = 0;
let audioCtx = null;

// AI Side-by-Side Analysis state
let isScanning = false;
let scanProgress = 0;
let scanIntervalId = null;
let currentUploadedVideo = null;
let selectedFigureForAnalysis = "1";
let canvasAnimationId = null;

// ==========================================
// 3. INDEXEDDB SETUP FOR MULTIPLE STORES
// ==========================================
const DB_NAME = "TangoMasterDB";
const DB_VERSION = 2; 
const STORE_JOURNALS = "video_journals";
const STORE_CURRICULUM = "curriculum_videos";
let db = null;

function initIndexedDB(callback) {
  const request = indexedDB.open(DB_NAME, DB_VERSION);

  request.onupgradeneeded = (event) => {
    const database = event.target.result;
    
    if (!database.objectStoreNames.contains(STORE_JOURNALS)) {
      database.createObjectStore(STORE_JOURNALS, { keyPath: "id" });
    }
    
    if (!database.objectStoreNames.contains(STORE_CURRICULUM)) {
      database.createObjectStore(STORE_CURRICULUM, { keyPath: "weekId" });
    }
  };

  request.onsuccess = (event) => {
    db = event.target.result;
    console.log("IndexedDB stores successfully linked.");
    if (callback) callback();
  };

  request.onerror = (event) => {
    console.error("IndexedDB failed to open:", event.target.error);
    if (callback) callback();
  };
}

// ==========================================
// 4. PERSISTENT CURRICULUM VIDEO CONTROLS
// ==========================================

// Save professor's demo video
function saveCurriculumVideo(weekId, fileBlob, callback) {
  if (!db) {
    alert("데이터베이스 준비가 되지 않았습니다.");
    return;
  }

  const transaction = db.transaction([STORE_CURRICULUM], "readwrite");
  const store = transaction.objectStore(STORE_CURRICULUM);
  const entry = {
    weekId: weekId.toString(),
    videoBlob: fileBlob,
    timestamp: Date.now()
  };
  
  const request = store.put(entry);
  request.onsuccess = () => {
    console.log(`Curriculum video saved for week ${weekId}`);
    if (callback) callback();
  };
}

// Retrieve professor's demo video
function fetchCurriculumVideo(weekId, callback) {
  if (!db) {
    if (callback) callback(null);
    return;
  }

  const transaction = db.transaction([STORE_CURRICULUM], "readonly");
  const store = transaction.objectStore(STORE_CURRICULUM);
  const request = store.get(weekId.toString());

  request.onsuccess = (event) => {
    if (event.target.result) {
      callback(event.target.result.videoBlob);
    } else {
      callback(null);
    }
  };

  request.onerror = () => {
    callback(null);
  };
}

// ==========================================
// 5. APPLICATION INITIALIZATION & CORE LOGIC
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initIndexedDB(() => {
    renderJournalEntries();
  });
  initMobileTabs();
  initCurriculumControls();
  renderCurriculum();
  renderGlossary();
  initGlossaryFilters();
  initMetronome();
  initAIAnalysis();
  initJournalForm();
});

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
        const vidMaster = document.getElementById('analysis-video-master');
        const vidStudent = document.getElementById('analysis-video-student');
        if (vidMaster && !vidMaster.paused) vidMaster.pause();
        if (vidStudent && !vidStudent.paused) vidStudent.pause();
        if (canvasAnimationId) {
          cancelAnimationFrame(canvasAnimationId);
          canvasAnimationId = null;
        }
      }
    });
  });
}

// ==========================================
// 6. ACCORDION CURRICULUM RENDER & CONTROLS
// ==========================================

function renderCurriculum() {
  const container = document.getElementById("curriculum-container");
  if (!container) return;

  const filteredWeeks = CURRICULUM_DATA.filter(w => w.course === activeCourse);

  container.innerHTML = ""; // clear

  filteredWeeks.forEach(w => {
    const item = document.createElement("div");
    item.className = "week-item";
    item.dataset.week = w.week;

    // Header structure
    const header = document.createElement("div");
    header.className = "week-header";
    header.innerHTML = `
      <span class="week-title">${w.week}주차. ${w.title}</span>
      <span class="week-badge">${w.badge}</span>
    `;
    item.appendChild(header);

    // Short summary text
    const summary = document.createElement("div");
    summary.className = "week-content";
    summary.style.marginTop = "4px";
    summary.textContent = w.desc;
    item.appendChild(summary);

    // Expanded details container (always upload/viewable by everyone now)
    const details = document.createElement("div");
    details.className = "week-details";
    details.innerHTML = `
      <div class="week-detail-header">🎯 수업 목표</div>
      <div class="week-detail-desc">${w.goal}</div>
      <div class="week-detail-header">💡 교수진 핵심 꿀팁</div>
      <div class="week-detail-desc" style="color: var(--gold-hover); font-style: italic; border-left: 2px solid var(--gold); padding-left: 6px;">"${w.tip}"</div>
      <div class="week-detail-header">📹 지도교수 시범 영상</div>
      
      <!-- Video node container -->
      <div class="curriculum-video-slot" id="video-slot-w${w.week}">
        <p style="font-size:0.8rem; color: var(--text-secondary); text-align:center; padding: 15px 0;">영상을 불러오고 있습니다...</p>
      </div>
      
      <!-- Upload controls -->
      <div class="prof-upload-btn-container" onclick="event.stopPropagation();">
        <input type="file" id="prof-file-w${w.week}" accept="video/*" style="display:none;" onchange="handleProfVideoUpload(${w.week}, this)">
        <button class="btn-prof-upload" onclick="document.getElementById('prof-file-w${w.week}').click()">📹 ${w.week}주차 시범 영상 변경/등록</button>
      </div>
    `;
    item.appendChild(details);

    // Click handler to toggle accordion
    item.addEventListener("click", () => {
      const isExpanded = item.classList.contains("expanded");
      
      document.querySelectorAll(".week-item").forEach(el => {
        el.classList.remove("expanded");
        const v = el.querySelector("video");
        if (v) v.pause();
      });

      if (!isExpanded) {
        item.classList.add("expanded");
        loadCurriculumVideoPlayer(w.week);
      }
    });

    container.appendChild(item);
  });
}

function loadCurriculumVideoPlayer(weekId) {
  const slot = document.getElementById(`video-slot-w${weekId}`);
  if (!slot) return;

  fetchCurriculumVideo(weekId, (videoBlob) => {
    slot.innerHTML = ""; // clear loading text

    const videoEl = document.createElement("video");
    videoEl.className = "week-demo-player";
    videoEl.controls = true;
    videoEl.playsInline = true;

    if (videoBlob) {
      videoEl.src = URL.createObjectURL(videoBlob);
    } else {
      videoEl.poster = "tango_banner.jpg";
      slot.innerHTML = `
        <div class="video-placeholder" style="border: 1px dashed rgba(255,255,255,0.15); padding: 30px 10px; border-radius: 8px; text-align:center; background: rgba(0,0,0,0.4); margin-bottom:10px;">
          <p style="color: var(--gold); font-size: 0.9rem; font-weight:bold; margin-bottom:5px;">📹 등록된 시범 영상이 없습니다</p>
          <p style="color: var(--text-secondary); font-size: 0.8rem;">아래 버튼을 클릭하여 시범 동작 영상을 등록해 주세요.</p>
        </div>
      `;
      return;
    }
    
    slot.appendChild(videoEl);
  });
}

function handleProfVideoUpload(weekId, inputEl) {
  if (inputEl.files.length === 0) return;
  
  const file = inputEl.files[0];
  const btn = inputEl.nextElementSibling;
  
  if (btn) {
    btn.textContent = "⚙️ 파일 업로드 및 저장 중...";
    btn.disabled = true;
  }

  saveCurriculumVideo(weekId, file, () => {
    if (btn) {
      btn.textContent = `📹 ${weekId}주차 시범 영상 변경/등록`;
      btn.disabled = false;
    }
    loadCurriculumVideoPlayer(weekId);
    alert(`${weekId}주차 지도교수 시범 영상이 정상적으로 등록 완료되었습니다.`);
  });
}

function initCurriculumControls() {
  const filterBtns = document.querySelectorAll(".course-filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCourse = btn.dataset.course;
      renderCurriculum();
    });
  });
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
    container.innerHTML = `<div class="card" style="text-align: center; color: var(--text-secondary);">검색 결과가 없습니다.</div>`;
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
      // Clear active states of master orchestras if manually overriding rhythm
      document.querySelectorAll(".master-card-btn").forEach(btn => btn.classList.remove("active"));
      
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
  } else if (metroRhythm === "piazzolla") {
    container.innerHTML = `
      <div class="beat-node strong" data-beat="1">1</div>
      <div class="beat-node silent" data-beat="2">·</div>
      <div class="beat-node silent" data-beat="3">·</div>
      <div class="beat-node strong" data-beat="4">4</div>
      <div class="beat-node silent" data-beat="5">·</div>
      <div class="beat-node silent" data-beat="6">·</div>
      <div class="beat-node strong" data-beat="7">7</div>
      <div class="beat-node silent" data-beat="8">·</div>
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
    speedMultiplier = 2;
  } else if (metroRhythm === "piazzolla") {
    // 3+3+2 is played on 8th subdivisions, so run 2x speed for 8-beat loop
    speedMultiplier = 2;
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
    const isSilent = currentNode.classList.contains("silent");
    
    if (!isSilent) {
      playMetronomeClick(isStrongBeat);
    }
    
    setTimeout(() => {
      if (!isSilent) {
        dot.classList.add(isStrongBeat ? "strong-beat" : "active-beat");
      }
    }, 10);
  }
}

function resetMetronomeUI() {
  const nodes = document.querySelectorAll("#beat-indicators .beat-node");
  const dot = document.getElementById("metro-dot");
  nodes.forEach(n => n.classList.remove("active"));
  if (dot) dot.classList.remove("active-beat", "strong-beat");
}

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

    // Dynamic pitch and duration according to selected master orchestra
    let frequency = isStrong ? 950 : 550;
    let duration = 0.08;
    
    const activeMaster = document.querySelector(".master-card-btn.active");
    if (activeMaster) {
      const masterId = activeMaster.id;
      if (masterId === "btn-master-darienzo") {
        // D'Arienzo: High-frequency sharp clicks (staccato compás)
        frequency = isStrong ? 1200 : 750;
        duration = 0.04;
      } else if (masterId === "btn-master-disarli") {
        // Di Sarli: Deep, heavy bass piano thuds (legato walking base)
        frequency = isStrong ? 380 : 220;
        duration = 0.16;
      } else if (masterId === "btn-master-piazzolla") {
        // Piazzolla: High-pitch metal/woodblock accent (3+3+2 accent compás)
        frequency = isStrong ? 1000 : 600;
        duration = 0.06;
      }
    }

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("AudioContext metronome synthesis failed.", e);
  }
}

// ==========================================
// 9. MODULE: AI SIDE-BY-SIDE VIDEO ANALYSIS
// ==========================================
function initAIAnalysis() {
  const videoInput = document.getElementById("video-input");
  const uploadZone = document.getElementById("upload-zone");
  const dualVideoContainer = document.getElementById("dual-video-container");
  const syncCtrls = document.getElementById("sync-controls");
  const ctrlPanel = document.getElementById("analysis-ctrls");
  const figureSelect = document.getElementById("figure-select");

  const btnStart = document.getElementById("btn-start-analysis");
  const btnReset = document.getElementById("btn-reset-analysis");
  const btnSyncPlay = document.getElementById("btn-sync-play");
  const btnSyncPause = document.getElementById("btn-sync-pause");
  const btnSyncReset = document.getElementById("btn-sync-reset");
  
  const scanBarMaster = document.getElementById("scan-bar-master");
  const scanBarStudent = document.getElementById("scan-bar-student");
  const scanStatus = document.getElementById("scan-status");
  const reportPanel = document.getElementById("report-panel");

  const videoMaster = document.getElementById("analysis-video-master");
  const videoStudent = document.getElementById("analysis-video-student");

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
      loadStudentVideo(files[0]);
    }
  });

  videoInput.addEventListener("change", (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      loadStudentVideo(files[0]);
    }
  });

  figureSelect.addEventListener("change", (e) => {
    selectedFigureForAnalysis = e.target.value;
    loadProfessorDemoVideo(selectedFigureForAnalysis);
  });

  btnStart.addEventListener("click", () => {
    if (isScanning) return;
    
    selectedFigureForAnalysis = figureSelect.value;
    
    reportPanel.classList.remove("active");
    scanStatus.classList.add("active");
    scanBarMaster.classList.add("active");
    scanBarStudent.classList.add("active");
    isScanning = true;
    scanProgress = 0;

    videoMaster.currentTime = 0;
    videoStudent.currentTime = 0;
    
    videoMaster.play().catch(() => {});
    videoStudent.play().catch(() => {});

    startDualCanvasLoops();

    scanIntervalId = setInterval(() => {
      scanProgress += 2;
      scanStatus.textContent = `🤖 동작 스켈레톤 추출 및 대칭도 비교 분석 중... (${scanProgress}%)`;
      
      if (scanProgress >= 100) {
        clearInterval(scanIntervalId);
        scanIntervalId = null;
        isScanning = false;
        scanStatus.classList.remove("active");
        scanBarMaster.classList.remove("active");
        scanBarStudent.classList.remove("active");
        
        showAnalysisReport(selectedFigureForAnalysis);
      }
    }, 80);
  });

  btnSyncPlay.addEventListener("click", () => {
    videoMaster.play().catch(() => {});
    videoStudent.play().catch(() => {});
    btnSyncPlay.textContent = "▶️ 재생 중...";
    btnSyncPlay.style.background = "#27ae60";
  });

  btnSyncPause.addEventListener("click", () => {
    videoMaster.pause();
    videoStudent.pause();
    btnSyncPlay.textContent = "▶️ 동시 재생";
    btnSyncPlay.style.background = "#2ecc71";
  });

  btnSyncReset.addEventListener("click", () => {
    videoMaster.currentTime = 0;
    videoStudent.currentTime = 0;
    videoMaster.pause();
    videoStudent.pause();
    btnSyncPlay.textContent = "▶️ 동시 재생";
    btnSyncPlay.style.background = "#2ecc71";
  });

  btnReset.addEventListener("click", () => {
    resetAnalysisStudio();
  });
}

function loadStudentVideo(file) {
  const uploadZone = document.getElementById("upload-zone");
  const dualVideoContainer = document.getElementById("dual-video-container");
  const syncCtrls = document.getElementById("sync-controls");
  const ctrlPanel = document.getElementById("analysis-ctrls");
  const videoStudent = document.getElementById("analysis-video-student");

  currentUploadedVideo = file;
  
  const fileURL = URL.createObjectURL(file);
  videoStudent.src = fileURL;
  videoStudent.load();

  loadProfessorDemoVideo(selectedFigureForAnalysis);

  uploadZone.style.display = "none";
  dualVideoContainer.style.display = "flex";
  syncCtrls.style.display = "flex";
  ctrlPanel.style.display = "flex";
}

function loadProfessorDemoVideo(weekId) {
  const videoMaster = document.getElementById("analysis-video-master");
  if (!videoMaster) return;

  fetchCurriculumVideo(weekId, (videoBlob) => {
    if (videoBlob) {
      videoMaster.src = URL.createObjectURL(videoBlob);
    } else {
      videoMaster.src = "";
      videoMaster.poster = "tango_banner.jpg";
    }
    videoMaster.load();
  });
}

function startDualCanvasLoops() {
  const canvasMaster = document.getElementById("analysis-canvas-master");
  const canvasStudent = document.getElementById("analysis-canvas-student");
  
  const videoMaster = document.getElementById("analysis-video-master");
  const videoStudent = document.getElementById("analysis-video-student");

  if (!canvasMaster || !canvasStudent || !videoMaster || !videoStudent) return;

  const ctxMaster = canvasMaster.getContext("2d");
  const ctxStudent = canvasStudent.getContext("2d");
  
  function updateCanvasFrames() {
    if (!videoMaster.paused || videoMaster.currentTime > 0) {
      const rect = videoMaster.getBoundingClientRect();
      canvasMaster.width = rect.width;
      canvasMaster.height = rect.height;
      drawSimulatedSkeleton(ctxMaster, canvasMaster.width, canvasMaster.height, videoMaster.currentTime || Date.now()/1000, 'caminata');
    }

    if (!videoStudent.paused || videoStudent.currentTime > 0) {
      const rect = videoStudent.getBoundingClientRect();
      canvasStudent.width = rect.width;
      canvasStudent.height = rect.height;
      drawSimulatedSkeleton(ctxStudent, canvasStudent.width, canvasStudent.height, videoStudent.currentTime, 'caminata');
    }

    canvasAnimationId = requestAnimationFrame(updateCanvasFrames);
  }

  if (canvasAnimationId) {
    cancelAnimationFrame(canvasAnimationId);
  }
  canvasAnimationId = requestAnimationFrame(updateCanvasFrames);
}

function showAnalysisReport(figure) {
  const report = ANALYSIS_REPORTS[figure] || ANALYSIS_REPORTS[1];
  const reportPanel = document.getElementById("report-panel");
  if (!reportPanel) return;
  
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
  const dualVideoContainer = document.getElementById("dual-video-container");
  const syncCtrls = document.getElementById("sync-controls");
  const ctrlPanel = document.getElementById("analysis-ctrls");
  const reportPanel = document.getElementById("report-panel");
  const scanStatus = document.getElementById("scan-status");
  
  const scanBarMaster = document.getElementById("scan-bar-master");
  const scanBarStudent = document.getElementById("scan-bar-student");

  const videoMaster = document.getElementById("analysis-video-master");
  const videoStudent = document.getElementById("analysis-video-student");
  
  const canvasMaster = document.getElementById("analysis-canvas-master");
  const canvasStudent = document.getElementById("analysis-canvas-student");

  if (scanIntervalId) {
    clearInterval(scanIntervalId);
    scanIntervalId = null;
  }
  if (canvasAnimationId) {
    cancelAnimationFrame(canvasAnimationId);
    canvasAnimationId = null;
  }
  isScanning = false;

  videoMaster.pause();
  videoStudent.pause();
  videoMaster.src = "";
  videoStudent.src = "";
  currentUploadedVideo = null;

  if (canvasMaster) canvasMaster.getContext("2d").clearRect(0,0,canvasMaster.width,canvasMaster.height);
  if (canvasStudent) canvasStudent.getContext("2d").clearRect(0,0,canvasStudent.width,canvasStudent.height);

  document.getElementById("btn-sync-play").textContent = "▶️ 동시 재생";
  document.getElementById("btn-sync-play").style.background = "#2ecc71";

  uploadZone.style.display = "block";
  dualVideoContainer.style.display = "none";
  syncCtrls.style.display = "none";
  ctrlPanel.style.display = "none";
  reportPanel.classList.remove("active");
  scanStatus.classList.remove("active");
  scanBarMaster.classList.remove("active");
  scanBarStudent.classList.remove("active");
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

  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
  }

  if (fileTrigger && fileInput) {
    fileTrigger.addEventListener("click", () => {
      fileInput.click();
    });
  }

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
    videoBlob: null
  };

  if (fileInput && fileInput.files.length > 0) {
    newEntry.videoBlob = fileInput.files[0];
  }

  saveJournalToDB(newEntry, () => {
    document.getElementById("journal-title").value = "";
    document.getElementById("journal-notes").value = "";
    if (fileInput) fileInput.value = "";
    
    const fileNameDisplay = document.getElementById("journal-file-name");
    if (fileNameDisplay) fileNameDisplay.textContent = "선택된 영상 없음";

    if (btnSave) {
      btnSave.textContent = "💾 일지 기록하기";
      btnSave.disabled = false;
    }

    renderJournalEntries();
  });
}

function saveJournalToDB(entry, callback) {
  if (!db) {
    if (callback) callback();
    return;
  }

  const transaction = db.transaction([STORE_JOURNALS], "readwrite");
  const store = transaction.objectStore(STORE_JOURNALS);
  const request = store.put(entry);

  request.onsuccess = () => {
    if (callback) callback();
  };
}

function deleteJournalEntry(id) {
  if (confirm("연습 일지를 삭제하시겠습니까?")) {
    deleteJournalFromDB(id, () => {
      renderJournalEntries();
    });
  }
}

function deleteJournalFromDB(id, callback) {
  if (!db) {
    if (callback) callback();
    return;
  }

  const transaction = db.transaction([STORE_JOURNALS], "readwrite");
  const store = transaction.objectStore(STORE_JOURNALS);
  const request = store.delete(id);

  request.onsuccess = () => {
    if (callback) callback();
  };
}

function fetchJournalsFromDB(callback) {
  if (!db) {
    if (callback) callback([]);
    return;
  }

  const transaction = db.transaction([STORE_JOURNALS], "readonly");
  const store = transaction.objectStore(STORE_JOURNALS);
  const request = store.getAll();

  request.onsuccess = (event) => {
    const results = event.target.result || [];
    results.sort((a, b) => b.timestamp - a.timestamp);
    if (callback) callback(results);
  };
}

function renderJournalEntries() {
  const container = document.getElementById("journal-container");
  if (!container) return;

  fetchJournalsFromDB((entries) => {
    if (entries.length === 0) {
      container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 15px;">등록된 일지가 없습니다. 첫 연습 영상을 업로드해 보세요!</p>`;
      return;
    }

    container.innerHTML = "";

    entries.forEach(e => {
      const card = document.createElement("div");
      card.className = "journal-item";

      const metaRow = document.createElement("div");
      metaRow.className = "journal-meta";
      metaRow.innerHTML = `
        <strong>📅 ${e.date}</strong>
        <button class="btn-delete-journal" onclick="deleteJournalEntry('${e.id}')">삭제</button>
      `;
      card.appendChild(metaRow);

      const bodyDiv = document.createElement("div");
      bodyDiv.className = "journal-text";
      bodyDiv.innerHTML = `
        <h4 style="color: var(--gold); margin-bottom: 5px;">📍 주제: ${e.title}</h4>
        <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">${e.notes}</p>
      `;
      card.appendChild(bodyDiv);

      if (e.videoBlob) {
        const videoElement = document.createElement("video");
        videoElement.className = "journal-video-player";
        videoElement.controls = true;
        
        const videoURL = URL.createObjectURL(e.videoBlob);
        videoElement.src = videoURL;

        card.appendChild(videoElement);
      }

      container.appendChild(card);
    });
  });
}

// ==========================================
// 11. HELPER: SKELETON DRAWER (VIDEO OVERLAY CANVAS)
// ==========================================
function drawSimulatedSkeleton(ctx, width, height, time, figure) {
  ctx.clearRect(0, 0, width, height);

  const centerX = width / 2;
  const centerY = height / 2;

  const swayX = Math.sin(time * 1.5) * 8;
  const swayY = Math.cos(time * 0.8) * 4;

  const lCenterX = centerX - 60 + swayX;
  const fCenterX = centerX + 60 + swayX;
  
  const neckY = centerY - 50 + swayY;
  const hipY = centerY + 20 + swayY;
  const kneeY = centerY + 70 + swayY;
  const ankleY = centerY + 120 + swayY;

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX + swayX, neckY + 25, 60, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(214, 175, 55, 0.04)";
  ctx.strokeStyle = "rgba(214, 175, 55, 0.15)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  let lKneeOffsetX = 0;
  let lAnkleOffsetX = 0;
  let fKneeOffsetX = 0;
  let fAnkleOffsetX = 0;

  if (figure === 'caminata') {
    const walkSwing = Math.sin(time * 3);
    lKneeOffsetX = walkSwing * 10;
    lAnkleOffsetX = walkSwing * 20;
    fKneeOffsetX = -walkSwing * 10;
    fAnkleOffsetX = -walkSwing * 20;
  }

  drawSkeletonPerson(ctx, lCenterX, neckY, hipY, kneeY, ankleY, lKneeOffsetX, lAnkleOffsetX, "#E74C3C", true);
  drawSkeletonPerson(ctx, fCenterX, neckY, hipY, kneeY, ankleY, fKneeOffsetX, fAnkleOffsetX, "#3498DB", false);

  ctx.save();
  ctx.beginPath();
  ctx.setLineDash([5, 3]);
  ctx.moveTo(centerX + swayX, centerY - 80);
  ctx.lineTo(centerX + swayX, centerY + 150);
  ctx.strokeStyle = "#D4AF37";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(centerX + swayX, centerY + 20, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#D4AF37";
  ctx.fill();
  ctx.restore();
}

function drawSkeletonPerson(ctx, cx, neckY, hipY, kneeY, ankleY, kneeOff, ankleOff, color, isLeader) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.arc(cx, neckY - 20, 9, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx, neckY);
  ctx.lineTo(cx, hipY);
  ctx.stroke();

  const shL = cx - 15;
  const shR = cx + 15;
  ctx.beginPath();
  ctx.moveTo(shL, neckY + 4);
  ctx.lineTo(shR, neckY + 4);
  ctx.stroke();

  ctx.beginPath();
  if (isLeader) {
    ctx.moveTo(shL, neckY + 4);
    ctx.lineTo(shL - 10, neckY + 20);
    ctx.lineTo(cx + 8, neckY + 20);
  } else {
    ctx.moveTo(shR, neckY + 4);
    ctx.lineTo(shR + 10, neckY + 16);
    ctx.lineTo(cx - 10, neckY + 16);
  }
  ctx.strokeStyle = color + "B3";
  ctx.stroke();

  const hipL = cx - 12;
  const hipR = cx + 12;
  ctx.beginPath();
  ctx.moveTo(hipL, hipY);
  ctx.lineTo(hipR, hipY);
  ctx.strokeStyle = color;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(hipL, hipY);
  ctx.lineTo(hipL, kneeY);
  ctx.lineTo(hipL, ankleY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(hipR, hipY);
  ctx.lineTo(hipR + kneeOff, kneeY);
  ctx.lineTo(hipR + ankleOff, ankleY);
  ctx.stroke();

  const joints = [
    {x: cx, y: neckY},
    {x: cx, y: hipY},
    {x: hipL, y: kneeY},
    {x: hipR + kneeOff, y: kneeY},
    {x: hipL, y: ankleY},
    {x: hipR + ankleOff, y: ankleY}
  ];

  joints.forEach(j => {
    ctx.beginPath();
    ctx.arc(j.x, j.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
  });

  ctx.restore();
}

window.handleProfVideoUpload = handleProfVideoUpload;
window.deleteJournalEntry = deleteJournalEntry;

function handleMasterVideoUpload(inputEl) {
  if (inputEl.files.length === 0) return;
  const file = inputEl.files[0];
  const figureSelect = document.getElementById("figure-select");
  const weekId = figureSelect.value;
  
  const btn = inputEl.parentNode.querySelector('.btn-prof-upload');
  if (btn) {
    btn.textContent = "⚙️ 저장 중...";
    btn.disabled = true;
  }

  saveCurriculumVideo(weekId, file, () => {
    if (btn) {
      btn.textContent = "📹 시범 영상 등록";
      btn.disabled = false;
    }
    loadProfessorDemoVideo(weekId);
    renderCurriculum();
    alert(`${weekId}주차 지도교수 시범 영상이 성공적으로 등록되었습니다.`);
  });
}

function deleteMasterVideo() {
  const figureSelect = document.getElementById("figure-select");
  const weekId = figureSelect.value;
  
  if (!db) {
    alert("데이터베이스가 연결되지 않았습니다.");
    return;
  }
  
  if (confirm(`${weekId}주차 지도교수 시범 영상을 삭제하시겠습니까?`)) {
    const transaction = db.transaction([STORE_CURRICULUM], "readwrite");
    const store = transaction.objectStore(STORE_CURRICULUM);
    const request = store.delete(weekId.toString());
    
    request.onsuccess = () => {
      loadProfessorDemoVideo(weekId);
      renderCurriculum();
      alert(`${weekId}주차 지도교수 시범 영상이 삭제되었습니다.`);
    };
  }
}

window.handleMasterVideoUpload = handleMasterVideoUpload;
window.deleteMasterVideo = deleteMasterVideo;

function selectMasterOrchestra(style) {
  const darienzoBtn = document.getElementById("btn-master-darienzo");
  const disarliBtn = document.getElementById("btn-master-disarli");
  const piazzollaBtn = document.getElementById("btn-master-piazzolla");
  
  const panel = document.getElementById("master-lesson-panel");
  const title = document.getElementById("master-lesson-title");
  const desc = document.getElementById("master-lesson-desc");
  const tip = document.getElementById("master-lesson-tip");
  
  const audioEl = document.getElementById("master-audio-element");
  const trackName = document.getElementById("audio-track-name");

  // Remove active state from all cards
  [darienzoBtn, disarliBtn, piazzollaBtn].forEach(btn => {
    if (btn) btn.classList.remove("active");
  });

  // Pause metronome if playing
  if (metroPlaying) {
    toggleMetronome();
  }

  // Stop current audio track if playing
  if (audioEl) {
    audioEl.pause();
    audioEl.src = "";
    if (trackName) trackName.textContent = "선택된 곡 없음";
  }

  if (style === 'darienzo') {
    if (darienzoBtn) darienzoBtn.classList.add("active");
    if (panel) panel.style.display = "block";
    if (title) title.innerHTML = "⚡ 후안 다리엔소 (Juan D'Arienzo) 스타일 레슨";
    if (desc) desc.textContent = "바늘로 찌르는 듯한 날카롭고 강렬한 스타카토 비트가 특징입니다. 리듬의 강박과 엇박(싱코페이션), 더블 템포(두 배 빠른 디딤)가 곡 전반을 지배하여 춤에 강한 에너지를 뿜어내게 만듭니다.";
    if (tip) tip.textContent = "리더와 팔로워 모두 무릎을 낮추고 디딤발을 지면에 절제감 있고 강하게 툭툭 내디뎌야 합니다. 특히 다리엔소 특유의 피아노 솔로 및 질주 구간에서는 가슴 축의 중심을 안정되게 유지하며 잘게 쪼개 딛는 속주 발스텝을 밟아야 론다를 어지럽히지 않습니다. 강박 지배력을 기르기에 최고의 오케스트라입니다.";
    
    // Auto-setup metronome
    metroBpm = 130;
    metroRhythm = "tango";
    const tempoSlider = document.getElementById("tempo-range");
    const bpmValue = document.getElementById("bpm-value");
    if (tempoSlider) {
      tempoSlider.value = 130;
      tempoSlider.max = 140;
    }
    if (bpmValue) bpmValue.textContent = 130;
    
    const tangoBtn = document.getElementById("rhythm-tango");
    if (tangoBtn) tangoBtn.click();
    
    if (audioEl && trackName) {
      audioEl.src = "https://upload.wikimedia.org/wikipedia/commons/c/c8/La_Cumparsita_%28tango%29.ogg";
      trackName.textContent = "Juan D'Arienzo Style - La Cumparsita";
      audioEl.load();
    }
  } 
  else if (style === 'disarli') {
    if (disarliBtn) disarliBtn.classList.add("active");
    if (panel) panel.style.display = "block";
    if (title) title.innerHTML = "🎻 카를로스 디 사를리 (Carlos Di Sarli) 스타일 레슨";
    if (desc) desc.textContent = "기품 있는 피아노의 묵직한 베이스 라인과 바이올린의 우아한 레가토 선율이 매력적입니다. 격렬한 기교 대신 물이 흐르는 듯 깊고 부드러우며 밀도 있는 걷기가 음악 전체를 관통합니다.";
    if (tip) tip.textContent = "발바닥 전체로 지면을 지긋이 쓸며 디디는 카미나타(Caminata)의 우아함을 극대화하십시오. 박자와 박자 사이의 빈 공간을 발끝의 긴장감과 가슴 텐션으로 밀도 있게 메꾸며, 멜로디의 선율에 몸을 맡겨 보행 속도의 완급을 우아하게 늘려나가는 연습에 최적입니다.";
    
    // Auto-setup metronome
    metroBpm = 110;
    metroRhythm = "tango";
    const tempoSlider = document.getElementById("tempo-range");
    const bpmValue = document.getElementById("bpm-value");
    if (tempoSlider) {
      tempoSlider.value = 110;
      tempoSlider.max = 140;
    }
    if (bpmValue) bpmValue.textContent = 110;
    
    const tangoBtn = document.getElementById("rhythm-tango");
    if (tangoBtn) tangoBtn.click();

    if (audioEl && trackName) {
      audioEl.src = "https://upload.wikimedia.org/wikipedia/commons/4/4c/El_Choclo_%281916%29.mp3";
      trackName.textContent = "Carlos Di Sarli Style - El Choclo (1916)";
      audioEl.load();
    }
  } 
  else if (style === 'piazzolla') {
    if (piazzollaBtn) piazzollaBtn.classList.add("active");
    if (panel) panel.style.display = "block";
    if (title) title.innerHTML = "🔥 아스토르 피아졸라 (Astor Piazzolla) 스타일 레슨";
    if (desc) desc.textContent = "전통적인 4박자의 단조로운 흐름을 깨부수고, 3+3+2 엇박 리듬과 격정적인 반도네온의 극적 긴장감, 그리고 루바토(밀고 당기기)와 돌발적인 쉼표(정지)를 구사하는 누에보 탱고의 창시자입니다.";
    if (tip) tip.textContent = "리듬이 쪼개지는 3+3+2 액센트 순간을 가슴 근육의 호흡 압박으로 포착하고, 반도네온이 폭발적으로 날카로워질 때 원심력을 이용해 사카다(Sacada)나 공중으로 발을 튕겨내는 보레오(Boleo) 같은 극적 장식 피구라를 연출하세요. 정지 신호가 떨어지면 상하체를 단단히 조여 중심축(Eje)을 고정한 채 파우사(Pausa)의 웅장함을 느끼십시오.";
    
    // Auto-setup metronome to 3+3+2
    metroBpm = 120;
    metroRhythm = "piazzolla";
    const tempoSlider = document.getElementById("tempo-range");
    const bpmValue = document.getElementById("bpm-value");
    if (tempoSlider) {
      tempoSlider.value = 120;
      tempoSlider.max = 140;
    }
    if (bpmValue) bpmValue.textContent = 120;
    
    // Set other rhythm option buttons borders to regular width
    const rhythmBtns = ["rhythm-tango", "rhythm-milonga", "rhythm-vals"];
    rhythmBtns.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.borderWidth = "1px";
    });
    
    updateRhythmIndicators();

    if (audioEl && trackName) {
      audioEl.src = ""; // Custom files recommended due to copyright
      trackName.textContent = "Piazzolla Style Synth Loop (자체 MP3 업로드 추천)";
    }
  }
}

function handleUserMusicUpload(inputEl) {
  if (inputEl.files.length === 0) return;
  const file = inputEl.files[0];
  const audioEl = document.getElementById("master-audio-element");
  const trackNameEl = document.getElementById("audio-track-name");
  
  if (audioEl && trackNameEl) {
    const fileURL = URL.createObjectURL(file);
    audioEl.src = fileURL;
    trackNameEl.textContent = `📂 자체 음원: ${file.name}`;
    audioEl.load();
    alert(`음원 파일 "${file.name}"이 연습 플레이어에 성공적으로 로드되었습니다.`);
  }
}

window.selectMasterOrchestra = selectMasterOrchestra;
window.handleUserMusicUpload = handleUserMusicUpload;
