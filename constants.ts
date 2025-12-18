import { NavItem, PhaseItem, KitItem, CompetitorItem, ExecutiveItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'executive', label: 'EXECUTIVE SUMMARY', number: '00' },
  { id: 'context', label: 'MARKET CONTEXT', number: '01' },
  { id: 'target', label: 'TARGET USER', number: '02' },
  { id: 'solution', label: 'THE SOLUTION', number: '03' },
  { id: 'roadmap', label: 'BIZ ROADMAP', number: '04' },
  { id: 'rollout', label: 'ROLLOUT PLAN', number: '05' },
];

export const EXECUTIVE_SUMMARY: ExecutiveItem[] = [
  { 
    title: 'The Problem', 
    desc: "한국 2030세대의 주거 형태가 전세에서 월세로 급격히 전환되면서, 2년마다 반복되는 이사와 좁은 주거 공간(69.1%가 오피스텔 거주)이라는 현실적 제약에 직면했습니다. 이로 인해 '나만의 공간을 꾸미고 싶은 욕망'과 '언제든 떠나야 하는 현실' 사이의 딜레마(The Space Gap)가 발생합니다." 
  },
  { 
    title: 'The Solution', 
    desc: "FROLIC은 쉽게 조립하고 변형할 수 있는 완성도 높은 원목 시스템 가구를 제공합니다. 이사를 가거나 평수가 넓어져도 가구를 버리는 것이 아니라, 기존 모듈에 파츠를 추가해 확장하는 방식으로 생애 주기를 함께하는 '반려 가구'가 됩니다." 
  },
  { 
    title: 'The Opportunity', 
    desc: "기존 시장은 '차가운 스틸 시스템(레어로우)'과 '정적인 공예 가구(도잠)', 혹은 '저가형 소모품'으로 양분되어 있습니다. FROLIC은 이 빈틈을 파고들어, 따뜻한 원목의 물성에 시스템 가구의 엔지니어링을 결합한 새로운 카테고리(Warm & Engineered System)를 창출합니다." 
  },
  { 
    title: 'The Strategy', 
    desc: "단품 판매에 그치지 않고, 스타터팩(KIT 01)으로 진입시켜 확장팩(Expansion Kit) 재구매를 유도하는 순환형 비즈니스 모델을 구축합니다. 또한, 유저가 직접 공간 구성을 공유하는 커뮤니티 주도 성장(Community-Led Growth) 전략을 통해 강력한 팬덤을 형성합니다." 
  }
];

export const PHASES: PhaseItem[] = [
  {
    phase: 'PHASE 0',
    title: 'The Beta Tribe',
    period: 'D-3 Months',
    goal: '초기 핵심 팬덤 형성 및 실제 사용 시나리오(Use Case) 데이터 확보',
    keyAction: 'Project FROLIC_LAB: 프로 공간 덕후 50인 선발 및 "Hack It" 미션'
  },
  {
    phase: 'PHASE 1',
    title: 'The Gateway',
    period: 'Launch ~ 6 Months',
    goal: '진입 장벽 제거 및 즉각적인 "모듈러의 재미" 제공',
    keyAction: 'Starter Pack (KIT 01) 런칭 & #MyKIT01Story 챌린지'
  },
  {
    phase: 'PHASE 2',
    title: 'The Expansion',
    period: '6 Months ~ 1 Year',
    goal: '단품 구매자를 시스템 유저로 락인(Lock-in)',
    keyAction: 'Expansion Kits (02~04) 출시 & FROLIC Blueprints 레시피 공유'
  },
  {
    phase: 'PHASE 3',
    title: 'The Platform',
    period: 'Year 2+',
    goal: '라이프스타일 플랫폼화 및 글로벌 확장',
    keyAction: 'Global Nomad Club & B2B 솔루션 확장'
  }
];

export const KITS: KitItem[] = [
  {
    id: 'KIT 01',
    name: 'The Foundation',
    desc: '기본 프레임 모듈 (Starter). 모든 시스템의 최소 단위.',
    mode: 'Solo / Stacking / Bridge'
  },
  {
    id: 'KIT 02',
    name: 'Vertical Riser',
    desc: '수직 확장 키트 (상부 프레임 + 선반).',
    mode: 'Vertical Extension'
  },
  {
    id: 'KIT 03',
    name: 'Horizontal Bridge',
    desc: '수평 연결 키트 (브릿지/콘솔 구성을 위한 연결 브라켓).',
    mode: 'Horizontal Expansion'
  },
  {
    id: 'KIT 04',
    name: 'Style Pack',
    desc: '컬러 패널, 아크릴 도어, 서랍 유닛 등 심미·기능 애드온 번들.',
    mode: 'Customization'
  }
];

export const COMPETITORS: CompetitorItem[] = [
  {
    brand: 'Rare Raw',
    title: 'The Industrial Standard',
    success: '더현대 서울, 신세계 강남 등 주요 백화점 프리미엄관 입점 및 성수 플래그십 스토어의 높은 방문객 수(랜드마크화).',
    swot: {
      s: '압도적인 내구성, 세련된 컬러 팔레트, 시스템 가구 시장 선점 효과.',
      w: '금속 특유의 차가운 물성, 벽 고정(타공) 필수 제품이 많아 임차인에게 높은 진입 장벽.',
      o: '오피스 및 상업 공간 시장 지속 확대.',
      t: '주거 공간 내 따뜻하고 자연스러운 인테리어 트렌드의 부상.'
    },
    strategy: 'Warmth & Freestanding: 차가운 철제 대신 따뜻한 원목, 타공 없는 자립형 구조.'
  },
  {
    brand: 'Builddweller',
    title: 'The Pop Modular',
    success: '젠틀몬스터, 아더에러 등 톱티어 브랜드와의 공간 협업 다수, 성수동 팝업스토어 집기 점유율 최상위권.',
    swot: {
      s: '가벼운 무게, 트렌디한 비주얼, 모듈 변형의 용이성, Z세대의 힙한 감성 충족.',
      w: '스크래치에 취약한 소재(아크릴), 시간이 지날수록 낮아지는 심미적 가치(낮은 내구연한).',
      o: '팝업스토어 등 단기 상업 공간 및 전시 수요 증가.',
      t: '플라스틱 소재에 대한 환경적 피로감, 빠른 유행 변화.'
    },
    strategy: 'Timelessness & Aging: 유행을 타지 않는 원목 소재와 시간이 지날수록 멋스러워지는 에이징 가치.'
  },
  {
    brand: 'Dojam',
    title: 'The Craft Wood',
    success: '별도의 공격적 마케팅 없이 생산 대기 물량(Waiting List) 지속 발생, 네이버 스마트스토어 평점 4.9점대의 높은 고객 만족도.',
    swot: {
      s: '독보적인 공예적 감성, 한국 주거 환경(좁은 집)에 대한 높은 이해도, 따뜻한 브랜드 스토리.',
      w: '공예 기반 생산의 낮은 확장성, 시스템적 변형의 한계(정적 구조).',
      o: '로컬/크래프트 가치 소비 트렌드 및 소박한 삶에 대한 동경.',
      t: '유사 합판 가구 브랜드의 난립 및 저가 카피.'
    },
    strategy: 'Engineering & Active System: 정적인 공예가 아닌, 사용자가 주도적으로 바꾸는 능동적 시스템.'
  },
  {
    brand: 'USM Haller',
    title: 'The Global Icon',
    success: '글로벌 모듈러 가구 시장 점유율 1위, 중고 거래 시 정가의 70~80% 수준을 유지하는 압도적인 환금성.',
    swot: {
      s: '완벽한 모듈러 기능, 강력한 브랜드 파워, 높은 중고 방어율.',
      w: '매우 높은 가격 진입 장벽, 전문 시공 없이는 이동/변형이 어려운 구조.',
      o: '프리미엄 홈오피스 수요 지속.',
      t: 'USM 스타일 저가 카피 제품 범람으로 인한 브랜드 피로도.'
    },
    strategy: 'Accessibility & Touch: 접근 가능한 가격대(Affordable Premium)와 원목의 촉각적 만족감.'
  }
];

export const MARKET_DATA = [
  { name: '전세 (Deposit)', value: 35.4, fill: '#E5E5E5' },
  { name: '월세 (Monthly)', value: 64.6, fill: '#111111' },
];