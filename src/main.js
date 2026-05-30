import './style.css';
import { AgentNetwork3D } from './agentNetwork3d.js';

// ==========================================================================
// PRESENTER NOTES (SPEECH SCRIPTS) DATA
// ==========================================================================
const presenterNotes = [
  // Slide 0: Opening
  `“안녕하세요. 오늘 발표를 맡은 연사입니다. 
  오늘 발표에서 저는 여러분께 <strong>AI의 세세한 기능 설명이나 화려한 프롬프트 엔지니어링 팁을 거의 드리지 않을 예정</strong>입니다.
  
  대신, 앞으로 5년 동안 우리의 일하는 방식과 생각을 어떻게 뒤흔들어야 하는지 이야기해보려 합니다.
  
  여기 계신 분들 대부분은 이미 ChatGPT나 Copilot을 일상에서 쓰고 계실 겁니다.
  그렇다면 질문을 던져보겠습니다. 
  
  <em>'내일부터 당장 나에게 아무런 비용 없이 AI 직원 100명이 생긴다면 무엇을 시키시겠습니까?'</em>
  
  개발, 테스트, 문서 작성, 자료 조사... 많은 답이 나옵니다. 
  흥미로운 점은 대개 <strong>'AI에게 시켜야 할 일(Task)'</strong>을 먼저 구상한다는 점입니다. 
  하지만 AI를 조율할 때 진짜 핵심은 <strong>'무엇을 시키느냐가 아니라, 일을 나눠서 각각 맡길 수 있느냐'</strong>입니다.
  쉽게 말해, <strong>한 번에 큰 일 하나를 던지는 것보다, AI가 처리하기 쉬운 작은 단계로 쪼개서 맡기는 능력</strong>이 중요하다는 뜻입니다.”`,

  // Slide 1: Paradigm Shift
  `“인류 역사에는 생산 방식의 주체를 완전히 바꾼 세 차례의 큰 자동화가 있었습니다.
  
  첫 번째, <strong>기계 혁명</strong>은 인간의 <em>근육(육체 노동)</em>을 기계로 대체했습니다.
  두 번째, <strong>컴퓨터 혁명</strong>은 인간의 <em>계산(정보 처리)</em>을 소프트웨어로 대체했죠.
  
  그렇다면 지금 마주한 <strong>AI 혁명</strong>은 무엇을 바꾸고 있을까요? 바로 인간의 <em>사고(Intelligence)의 일부</em>를 자동화하고 있습니다.
  쉽게 말해, <strong>기계가 몸의 힘을 대신했고, 컴퓨터가 계산을 대신했듯이, AI는 이제 생각의 일부를 나눠 맡기 시작했다</strong>는 뜻입니다.
  
  그래서 저는 AI를 단순히 쓰기 편리한 소프트웨어로 보지 않습니다. 
  <strong>'새로운 디지털 노동력(Workforce)'</strong>으로 봅니다.
  우리는 단순히 AI를 개인의 보조 도구로 쓰는 시대를 지나, <strong>AI 노동력을 전략적으로 관리하고 조율하는 시대</strong>로 넘어가고 있습니다.
  
  그래서 다음 장에서는 <strong>AI에게 일을 어떻게 쪼개서 맡길 것인가</strong>를 조금 더 구체적으로 보겠습니다.”`,

  // Slide 2: Competitiveness Shift
  `“흔히 AI 시대에는 '프롬프트 잘 쓰는 사람'이 최고라고 생각합니다. 반은 맞고 반은 틀립니다.
  
  여기 사용자 A와 B의 시뮬레이션을 보십시오.
  사용자 A는 단순 지시 방식으로 <em>'로그인 TC 만들어줘'</em>라고 챗봇에 호출합니다. 결과는 상식적이고 단편적인 수준에 그칩니다.
  
  반면 사용자 B는 지휘관의 관점에서 요구사항을 쪼개고, 위협 요소를 파악하고, 예외 설계를 수행하라고 문제를 구체화하여 명령합니다. 
  결과는 비교가 불가능할 정도로 깊고 넓습니다.
  
  결과의 격차는 프롬프트 단어 하나가 아니라 <strong>문제를 해석하고 정의하는 능력</strong>에서 발생한 것입니다.
  지식의 절대량이 경쟁력이 되던 시대는 저물었습니다. 이제는 <strong>좋은 문제를 정의하고 구조화하는 사람</strong>이 강력한 경쟁력을 가집니다. AI는 지식 생성기가 아닌 문제 해결 엔진이기 때문입니다.”`,

  // Slide 3: AI Agent Era
  `“최근 에이전트(Agent)가 핫이슈지만 많은 이들이 여전히 챗봇 형태로 대화하는 데 그칩니다. 
  그러나 에이전트의 본질은 <strong>업무의 위임(Delegation)</strong>입니다.
  
  기존에는 한 명의 엔지니어가 기획 검토부터 TC 작성, 실행, 리포팅까지 다 해야 했습니다. 
  하지만 에이전트 관점에서는 요구사항 분석 에이전트, 리스크 분석 에이전트, TC 생성 에이전트, 결함 에이전트 등으로 쪼갤 수 있습니다.
  
  3D 네트워크 노드를 클릭해서 에이전트들의 실시간 모의 로그를 보십시오. 각자 맡은 책임을 능동적으로 수행합니다.
  우측의 슬라이더를 올려 가용 에이전트 수를 늘려보시면, 조직이 수학적으로 어떻게 재구성되고 최적화되는지 시뮬레이션됩니다.
  <strong>'AI 활용 능력은 곧 업무를 잘게 분해하여 조직화하는 설계 능력'</strong>을 의미합니다.”`,

  // Slide 4: Role Transition
  `“그렇다면 QA와 개발자의 역할은 소멸할까요? 저는 그렇게 생각하지 않습니다. 
  다만 <strong>역할의 축(Axis)이 이동</strong>합니다.
  
  기존에는 직접 문서와 코드를 쓰고(Executor, 80%), 리뷰나 승인하는 데 아주 적은 시간(10%)만 썼습니다.
  하지만 앞으로는 AI 에이전트 조직이 초안을 완성하고 실행까지 돌려두면, 인간은 <strong>작성된 설계를 검토(Review)하고 고부가가치의 의사결정(Approve)을 내리는 감독자(Supervisor)</strong>가 됩니다.
  
  차트 슬라이더를 우측으로 밀어 AI 위임 수준을 높여보십시오.
  기존 단순 작성에 매달리던 시간(빨간 바)이 급격히 줄고, 아키텍처 조율(파란 바)과 의사결정(보라 바)의 비중이 95%까지 커집니다.
  앞으로 인정받는 리더는 코드를 가장 빨리 짜는 사람이 아니라, <strong>AI로 구성된 파이프라인을 가장 우아하게 지휘하는 디렉터</strong>일 것입니다.”`,

  // Slide 5: Conclusion
  `“오늘 발표의 내용을 요약하며 세 가지 명제를 전합니다.
  
  첫째, <strong>AI는 사람을 대체하지 않는다.</strong>
  둘째, <strong>AI를 사용하는 사람이 사용하지 않는 사람을 대체한다.</strong>
  셋째, <strong>그리고 AI에게 일을 시키고 조율하는 사람이 AI를 단순히 사용하는 사람을 대체할 것입니다.</strong>
  
  발표가 끝나고 다시 PC 앞에 앉으실 때, ChatGPT 검색창에 <em>'이 일을 어떻게 잘할까?'</em>라고 묻지 마십시오.
  대신 <strong>'이 일을 어떻게 분해해서 AI 에이전트 조직에 위임할 것인가?'</strong>라고 질문하십시오. 
  그 순간이 AI 노동력 혁명 시대를 지휘하는 첫 시작점입니다. 경청해 주셔서 감사합니다.”`
];

// Modal details data for Slide 1
const slide1Details = {
  machine: `
    <h3 class="modal-body-title">💪 기계 혁명 (Machine Revolution)</h3>
    <div class="modal-body-section">
      <h4>핵심 개요</h4>
      <p>인간의 <strong>근육(육체 노동)</strong>을 기계로 대체하여 가내수공업에서 대규모 공장제 대량생산으로 이행한 시기입니다.</p>
    </div>
    <div class="modal-body-section">
      <h4>사회적 충격</h4>
      <p>단순 기계 직공들의 대량 실직 우려로 기계 파괴 운동(Luddite) 등 심각한 사회적 긴장이 초래되었으나, 점차 공장 설계자, 기계 정비사 등 새로운 고급 직무 생태계가 안착되었습니다.</p>
    </div>
    <div class="modal-body-section">
      <h4>강연용 메시지</h4>
      <p>인간은 육체 피로에서 완전히 해방되었고, '생산성의 주도권'은 단순히 몸을 많이 움직이는 노동자에서 <strong>기계를 효과적으로 활용하고 설계하는 지식 자산가</strong>로 넘어갔습니다.</p>
    </div>
  `,
  computer: `
    <h3 class="modal-body-title">🧮 컴퓨터 혁명 (Computer Revolution)</h3>
    <div class="modal-body-section">
      <h4>핵심 개요</h4>
      <p>인간의 <strong>계산(정보 처리)</strong>을 트랜지스터와 인터넷 소프트웨어가 대행하며 아날로그 장부 시대에서 디지털 시대로 이행한 시기입니다.</p>
    </div>
    <div class="modal-body-section">
      <h4>사회적 충격</h4>
      <p>주판과 수동 계산을 하던 수많은 사무직 보조 직무가 대체되었습니다. 대신 데이터베이스 아키텍트, 웹 개발자, 시스템 어드민 등의 소프트웨어 산업군이 폭발적으로 부상했습니다.</p>
    </div>
    <div class="modal-body-section">
      <h4>강연용 메시지</h4>
      <p>정보의 물리적 기록과 보관 비용이 '제로(0)'에 가까워지며, 단순 지식 축적보다 <strong>컴퓨터를 이용해 데이터를 추출하고 가공하는 엔지니어링 능력</strong>이 주효한 경쟁력이 되었습니다.</p>
    </div>
  `,
  ai: `
    <h3 class="modal-body-title">🧠 AI 혁명 (AI Agent Revolution)</h3>
    <div class="modal-body-section">
      <h4>핵심 개요</h4>
      <p>인간 고유의 전유물로 믿었던 <strong>사고와 지적 판단(추론)</strong>의 일부를 LLM 및 자율 에이전트망에 아웃소싱하기 시작한 오늘날의 혁명입니다.</p>
    </div>
    <div class="modal-body-section">
      <h4>사회적 충격</h4>
      <p>코드 자동 작성, 보고서 초안 생성, 단순 테스트 시나리오 기획 등 화이트칼라 지식노동자들의 실무 영역이 강력한 자동화 리스크를 직면하게 되었습니다.</p>
    </div>
    <div class="modal-body-section">
      <h4>강연용 메시지</h4>
      <p>AI는 도구를 넘어 <strong>‘디지털 노동력’</strong>입니다. 단순 지식을 출력하는 지식인보다, 해결할 문제를 규정하고 업무를 분해해 AI 조직에 위임하는 <strong>‘문제 정의 및 지휘 능력’</strong>이 가장 강력한 자본이 됩니다.</p>
    </div>
  `
};

// ==========================================================================
// CORE STATE & CONFIGURATION
// ==========================================================================
let currentSlide = 0;
const totalSlides = 6;
let threeApp = null; 
let hasInitialized3D = false;

// Element References
const slides = document.querySelectorAll('.slide-section');
const currentNum = document.getElementById('currentNum');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const themeToggleBtn = document.getElementById('themeToggle');

// Presenter Notes Elements
const notesToggleBtn = document.getElementById('notesToggleBtn');
const notesPanel = document.getElementById('notesPanel');
const closeNotesBtn = document.getElementById('closeNotesBtn');
const notesContent = document.getElementById('notesContent');

// Modal Elements
const detailModal = document.getElementById('detailModal');
const modalCloseBtn = document.querySelector('#detailModal #modalCloseBtn');
const modalContentBody = document.getElementById('modalContentBody');

// Dot indicator elements (created dynamically)
let dotEls = [];

// ==========================================================================
// THEME TOGGLE (DARK / LIGHT)
// ==========================================================================
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
};

const updateThemeIcon = (theme) => {
  if (theme === 'light') {
    themeToggleBtn.innerHTML = `
      <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    `;
  } else {
    themeToggleBtn.innerHTML = `
      <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    `;
  }
};

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// ==========================================================================
// PRESENTER NOTES EVENT MANAGERS
// ==========================================================================
const initPresenterNotes = () => {
  notesToggleBtn.addEventListener('click', () => {
    notesPanel.classList.toggle('active');
  });

  closeNotesBtn.addEventListener('click', () => {
    notesPanel.classList.remove('active');
  });
};

const updatePresenterNotes = (index) => {
  if (presenterNotes[index]) {
    notesContent.innerHTML = presenterNotes[index];
  } else {
    notesContent.innerHTML = '';
  }
};

// ==========================================================================
// SLIDE 1 CLICK MODALS EVENT
// ==========================================================================
const initSlide1 = () => {
  // Use event delegation on the slide container to avoid duplicate listeners
  const slide1 = document.getElementById('slide-1');
  if (slide1.dataset.modalInit) return;
  slide1.dataset.modalInit = 'true';

  slide1.addEventListener('click', (e) => {
    const card = e.target.closest('.clickable-card');
    if (!card) return;
    const type = card.getAttribute('data-detail');
    if (slide1Details[type]) {
      modalContentBody.innerHTML = slide1Details[type];
      detailModal.classList.add('active');
    }
  });
};

// Modal close events (registered once at boot)
const initModal = () => {
  modalCloseBtn.addEventListener('click', () => {
    detailModal.classList.remove('active');
  });
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) detailModal.classList.remove('active');
  });
};

// ==========================================================================
// NAVIGATION & SLIDE ROUTING
// ==========================================================================
const showSlide = (index) => {
  if (index < 0 || index >= totalSlides) return;

  // Active classes swap
  slides[currentSlide].classList.remove('active');
  slides[index].classList.add('active');

  currentSlide = index;

  // Update page number
  currentNum.textContent = currentSlide + 1;

  // Update dot indicators
  dotEls.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });

  // Button disabled / end states
  prevBtn.disabled = currentSlide === 0;
  if (currentSlide === totalSlides - 1) {
    nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`;
    nextBtn.classList.remove('highlight');
    nextBtn.title = '처음으로';
  } else {
    nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
    nextBtn.classList.add('highlight');
    nextBtn.title = '다음 슬라이드 (우방향키/스페이스바)';
  }

  // Update notes text
  updatePresenterNotes(currentSlide);

  // Slide specific callbacks
  onSlideActive(currentSlide);
};

const nextSlide = () => {
  if (currentSlide === totalSlides - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
};

const prevSlide = () => {
  showSlide(currentSlide - 1);
};

// Event Attachments
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keypress navigation (Arrow keys, Space)
document.addEventListener('keydown', (e) => {
  // If modal is active, close it on ESC and bypass navigation
  if (detailModal.classList.contains('active')) {
    if (e.key === 'Escape') {
      detailModal.classList.remove('active');
    }
    return; // Don't slide while modal is open
  }

  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevSlide();
  }
});

// ==========================================================================
// INTERACTIVE LOGIC: SLIDE 0 (OPENING)
// ==========================================================================
const initSlide0 = () => {
  const selectorButtons = document.querySelectorAll('.selector-btn');
  const revealBox = document.getElementById('openingReveal');

  selectorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectorButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      revealBox.classList.add('active');
    });
  });
};

// ==========================================================================
// INTERACTIVE LOGIC: SLIDE 2 (PROMPT BATTLEFIELD)
// ==========================================================================
const initSlide2 = () => {
  const startBtn = document.getElementById('startBattle');
  const resultA = document.getElementById('resultA');
  const resultB = document.getElementById('resultB');
  const barA = document.getElementById('barA');
  const barB = document.getElementById('barB');
  const promptCode = document.getElementById('promptBCode');

  // Hover over code to expand it
  promptCode.parentElement.addEventListener('mouseenter', () => {
    promptCode.classList.remove('code-collapsed');
    promptCode.classList.add('code-expanded');
  });

  promptCode.parentElement.addEventListener('mouseleave', () => {
    promptCode.classList.remove('code-expanded');
    promptCode.classList.add('code-collapsed');
  });

  startBtn.addEventListener('click', () => {
    resultA.innerHTML = '<span class="placeholder-text">실행 중...</span>';
    resultB.innerHTML = '<span class="placeholder-text">실행 중...</span>';
    resultA.className = 'result-box';
    resultB.className = 'result-box';
    barA.style.width = '0%';
    barB.style.width = '0%';

    // Animate progress
    setTimeout(() => {
      barA.style.width = '35%';
      resultA.className = 'result-box has-content red-border';
      resultA.innerHTML = `
        <h6>⚠️ A의 결과 (단순 챗봇 활용)</h6>
        <ul>
          <li>TC 1: 아이디/비밀번호 입력 후 로그인 클릭 -> 정상 성공</li>
          <li>TC 2: 빈 아이디 입력 -> 경고 노출 확인</li>
          <li>TC 3: 틀린 비밀번호 입력 -> 에러 메시지 노출 확인</li>
        </ul>
        <p class="text-muted" style="font-size:0.75rem; margin-top:10px;">* 평가: 평범하고 단편적인 테스트케이스만 생성됨. 예외 케이스 및 모바일 등 다중 환경 검증 누락.</p>
      `;
    }, 1200);

    setTimeout(() => {
      barB.style.width = '95%';
      resultB.className = 'result-box has-content cyan-border';
      resultB.innerHTML = `
        <h6>🎯 B의 결과 (에이전틱 오케스트레이션)</h6>
        <p><strong>1. 요구사항 & 위험 모델 분석</strong><br>
        - 소셜 로그인, 이중 인증(2FA), 비밀번호 재설정 플로우 분석 완료.<br>
        - 보안 위험(High): 로그인 폼 무차별 대입 공격(Brute Force) 취약점 식별.</p>
        <p><strong>2. 구조적 테스트 설계</strong><br>
        - <strong>보안 검증</strong>: 비정상 토큰 주입, SQL Injection 예외 테스트 케이스 도출.<br>
        - <strong>성능 & 한계</strong>: 초당 100회 요청 시 IP 차단 메커니즘 검증.<br>
        - <strong>엣지 케이스</strong>: 세션 만료 직후 로그인 요청 처리, 네트워크 지연 시의 오류 처리.</p>
      `;
    }, 2000);
  });
};

// ==========================================================================
// INTERACTIVE LOGIC: SLIDE 3 (AI AGENT & 3D NODE CLICK)
// ==========================================================================
const initSlide3 = () => {
  if (hasInitialized3D) return;

  threeApp = new AgentNetwork3D('canvas3d', (nodeData) => {
    handleNodeClick(nodeData);
  });

  const agentSlider = document.getElementById('agentSlider');
  const agentCountText = document.getElementById('agentCountText');

  agentSlider.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    agentCountText.textContent = `${value}명`;
    updateRoles(value);
  });

  updateRoles(10);
  hasInitialized3D = true;
};

const handleNodeClick = (node) => {
  const consoleOut = document.getElementById('consoleOutput');
  
  const logs = {
    human: `[System] Human Supervisor 대기 중...
[Action] 에이전트 조직도 확인 및 업무 승인 대기.
[Observe] 보고서 에이전트로부터 최신 결함 대시보드가 도착했습니다. 
[Log] "프로덕션 배포를 최종 승인합니다."`,
    
    req: `[ReqAgent] 사용자 요구사항 명세서 파싱 개시...
[Reason] 기획서 내 '소셜 로그인 실패 시 재시도 플로우' 명세가 누락됨을 발견.
[Act] 누락 사항 리스트업 & RiskAgent에게 누락 리스크 평가 의뢰.
[Observe] RiskAgent: "인증 무한 루프 위험(위험도: High)으로 분류됨."`,
    
    risk: `[RiskAgent] 보안 및 기능 위험도 매트릭스 도출...
[Reason] 로그인 및 토큰 발급 프로세스는 세션 탈취 위험이 크므로 검증 우선순위 1순위로 지정 필요.
[Act] 로그인 Rate Limiting 미적용 시 취약한 공격 백터 목록(12개)을 TC 에이전트에게 전송.
[Observe] TC 에이전트로부터 생성 완료 시그널 수신.`,
    
    tc: `[TCAgent] 테스트 케이스 자동 생성 중...
[Reason] RiskAgent가 보낸 12개 취약점에 대응하는 48개의 세부 경계값 테스트 세트 매핑 필요.
[Act] 테스트 시나리오 및 Playwright/Selenium 자동화 테스트 스크립트 작성 완료.
[Observe] 스크립트 빌드 100% 성공. DefectAgent에게 실행 위임.`,
    
    defect: `[DefectAgent] 스태이징 서버에서 시나리오 테스트 구동...
[Reason] 로그인 폼 초당 200회 입력 테스트 중 서버 응답 속도가 3.5초로 지연되어 504 Gateway Timeout 발생.
[Act] 응답 병목 현상 및 로그 트레이스 백캡쳐 완료. 버그 리포트 구성.
[Observe] 1건의 병목 버그 식별. ReportAgent에 결함 데이터 JSON 발송.`,
    
    report: `[ReportAgent] 결함 분석 및 결과 데이터 컴파일...
[Reason] DefectAgent가 식별한 504 에러의 원인이 '세션 데이터베이스 커넥션 풀 부족'임을 진단.
[Act] 종합 보고서 작성 완료. Human Supervisor에게 Slack 통지 및 최종 검토 요청.
[Observe] Human Supervisor 승인 대기 상태로 진입.`
  };

  if (logs[node.id]) {
    consoleOut.innerHTML = '';
    let index = 0;
    const text = logs[node.id];
    consoleOut.scrollTop = consoleOut.scrollHeight;

    const typeWriter = () => {
      if (index < text.length) {
        consoleOut.innerHTML += text.charAt(index);
        index++;
        consoleOut.scrollTop = consoleOut.scrollHeight;
        setTimeout(typeWriter, 8);
      }
    };
    typeWriter();
  }
};

const updateRoles = (agentCount) => {
  const rolesList = document.getElementById('rolesList');
  const consoleOut = document.getElementById('consoleOutput');
  
  const roles = [
    { name: '요구사항 Agent', count: Math.max(1, Math.round(agentCount * 0.15)), emoji: '📋', color: 'rgba(6, 182, 212, 0.1)' },
    { name: '리스크 분석 Agent', count: Math.max(1, Math.round(agentCount * 0.15)), emoji: '⚖️', color: 'rgba(168, 85, 247, 0.1)' },
    { name: 'TC 생성 Agent', count: Math.max(1, Math.round(agentCount * 0.35)), emoji: '🧪', color: 'rgba(59, 130, 246, 0.1)' },
    { name: '결함 분석 Agent', count: Math.max(1, Math.round(agentCount * 0.25)), emoji: '🐛', color: 'rgba(16, 185, 129, 0.1)' },
    { name: '보고서 Agent', count: Math.max(1, Math.round(agentCount * 0.1)), emoji: '📊', color: 'rgba(239, 68, 68, 0.1)' }
  ];

  let sum = roles.reduce((acc, r) => acc + r.count, 0);
  if (sum !== agentCount) {
    roles[2].count += (agentCount - sum); 
  }

  rolesList.innerHTML = roles.map(role => `
    <div class="role-badge" style="background: ${role.color}">
      <div class="role-icon-small">${role.emoji}</div>
      <div class="role-info">
        <span class="role-name">${role.name}</span>
        <span class="role-count">${role.count}명 운영 중</span>
      </div>
    </div>
  `).join('');

  consoleOut.innerHTML = `[System] 에이전트 리소스 재배치 완료. 총 ${agentCount}명의 에이전트가 협업 중입니다.
[Optimization] 역할 배분: 요구사항 분석(${roles[0].count}명), 리스크 평가(${roles[1].count}명), 테스트케이스 생성(${roles[2].count}명), 스크립트 실행(${roles[3].count}명), 리포팅(${roles[4].count}명).
[Status] 협업 흐름이 안정적입니다. 3D 노드를 클릭하여 각 에이전트의 현재 동작을 파악하세요.`;
};

// ==========================================================================
// INTERACTIVE LOGIC: SLIDE 4 (ROLE TRANSITION & TIME ALLOCATION)
// ==========================================================================
const initSlide4 = () => {
  const adoptSlider = document.getElementById('aiAdoptSlider');
  const adoptText = document.getElementById('aiAdoptText');
  const barExecution = document.getElementById('barExecution');
  const barDesign = document.getElementById('barDesign');
  const barReview = document.getElementById('barReview');
  const insightText = document.getElementById('chartInsight');

  const updateChart = (value) => {
    const execution = Math.round(80 - (value * 0.75));
    const design = Math.round(10 + (value * 0.35));
    const review = 100 - execution - design;

    barExecution.style.width = `${execution}%`;
    barExecution.textContent = `${execution}%`;
    
    barDesign.style.width = `${design}%`;
    barDesign.textContent = `${design}%`;

    barReview.style.width = `${review}%`;
    barReview.textContent = `${review}%`;

    let stage = '도입 초기';
    let insight = '단순 작성 및 수동 테스트 실행에 하루 일과의 대부분을 쏟고 있습니다.';

    if (value > 25 && value <= 60) {
      stage = '협업 과도기 (AI Assistant)';
      insight = 'AI가 단순 TC 생성과 초안 작성을 보조하기 시작합니다. 검증을 위한 문제 분석과 아키텍처 비중이 점점 늘어납니다.';
    } else if (value > 60 && value <= 90) {
      stage = '에이전트 조직화 (AI Agent Swarm)';
      insight = '테스트 실행 및 빌드 리포트가 전면 자동화되었습니다. 인간 엔지니어는 AI가 놓친 엣지케이스 리뷰와 에이전트 배치 설계에 집중합니다.';
    } else if (value > 90) {
      stage = '완전 지휘 단계 (AI Orchestration)';
      insight = '인간은 더 이상 스크립트를 한 줄씩 짜거나 테스트를 손으로 돌리지 않습니다. AI 조직이 낸 결과물에 대한 최종 승인과 아키텍처 관리에 몰입합니다.';
    }

    adoptText.textContent = `${stage} (${value}%)`;
    insightText.textContent = insight;
  };

  adoptSlider.addEventListener('input', (e) => {
    updateChart(parseInt(e.target.value));
  });

  updateChart(10);
};

// ==========================================================================
// INTERACTIVE LOGIC: SLIDE 5 (CONCLUSION MANIFESTO EFFECT)
// ==========================================================================
const initSlide5 = () => {
  const cards = document.querySelectorAll('.manifesto-card');
  
  cards.forEach((card, idx) => {
    card.classList.remove('visible');
    setTimeout(() => {
      card.classList.add('visible');
    }, (idx + 1) * 800);
  });
};

// ==========================================================================
// CENTRAL SLIDE INITIALIZER ROUTER
// ==========================================================================
const onSlideActive = (slideIndex) => {
  switch(slideIndex) {
    case 0:
      initSlide0();
      break;
    case 1:
      initSlide1();
      break;
    case 2:
      initSlide2();
      break;
    case 3:
      initSlide3();
      break;
    case 4:
      initSlide4();
      break;
    case 5:
      initSlide5();
      break;
  }
};

// ==========================================================================
// BOOTSTRAPPING
// ==========================================================================
const buildDotIndicators = () => {
  const dotsEl = document.querySelector('.nav-dots');
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  dotEls = [];

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'nav-dot';
    dot.title = `슬라이드 ${i + 1}`;
    dot.addEventListener('click', () => showSlide(i));
    dotsEl.appendChild(dot);
    dotEls.push(dot);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPresenterNotes();
  initModal();
  buildDotIndicators();
  showSlide(0);
});
