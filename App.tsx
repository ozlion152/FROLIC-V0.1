import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Grid3X3, Layers, Move, Box, Check, ArrowRight } from 'lucide-react';
import { Section, Container, Grid, GridCol, SectionHeader } from './components/Layout';
import { MarketChart, NeedsCard, CompetitorDeepDive } from './components/Visuals';
import { NAV_ITEMS, PHASES, KITS, EXECUTIVE_SUMMARY } from './constants';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'hero';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-frolic-white font-sans text-frolic-black selection:bg-frolic-accent selection:text-white">
      
      {/* Navigation - Swiss Style Sidebar/Overlay */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b border-frolic-black bg-frolic-white/90 backdrop-blur-sm">
        <h1 className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => scrollTo('hero')}>FROLIC.</h1>
        <div className="flex items-center gap-6">
          <span className="hidden md:block font-mono text-xs uppercase tracking-widest">{activeSection.replace('-', ' ')}</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 hover:bg-frolic-black hover:text-white transition-colors">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-frolic-black z-40 text-white flex items-center justify-center">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="text-center group">
                <button 
                  onClick={() => scrollTo(item.id)}
                  className="text-5xl md:text-7xl font-black uppercase tracking-tighter hover:text-frolic-accent transition-colors"
                >
                  <span className="block text-xs font-mono font-normal tracking-widest mb-2 opacity-50 group-hover:opacity-100">{item.number}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* HERO SECTION */}
      <Section id="hero" fullHeight className="flex flex-col justify-between pt-32 pb-8 border-b-2 border-frolic-black">
        <Container className="flex-grow flex flex-col justify-center">
          <div className="border-l-4 border-frolic-black pl-6 md:pl-12 mb-12">
            <h2 className="font-mono text-sm md:text-base mb-4 tracking-widest">BRAND STRATEGY DECK v0.2.6</h2>
            <h1 className="text-7xl md:text-[10rem] leading-[0.85] font-black tracking-tighter mb-6">
              FIXED<br/>
              TO<br/>
              <span className="text-frolic-accent">FLUID.</span>
            </h1>
          </div>
        </Container>
        <Container>
          <Grid>
            <GridCol span={4}>
              <div className="text-xs font-mono uppercase border-t border-frolic-black pt-2">
                Document Type<br/>
                <span className="font-bold">Master Rollout Plan</span>
              </div>
            </GridCol>
            <GridCol span={4}>
              <div className="text-xs font-mono uppercase border-t border-frolic-black pt-2">
                Target Market<br/>
                <span className="font-bold">South Korea / Global Urban</span>
              </div>
            </GridCol>
            <GridCol span={4}>
              <div className="text-xs font-mono uppercase border-t border-frolic-black pt-2">
                Date<br/>
                <span className="font-bold">Dec 18, 2025</span>
              </div>
            </GridCol>
          </Grid>
        </Container>
      </Section>

      {/* 00. EXECUTIVE SUMMARY */}
      <Section id="executive">
        <Container>
          <Grid>
             <GridCol span={4}>
                <SectionHeader number="00" title="Executive Summary" />
                <p className="mt-8 text-xl font-bold leading-tight">
                  '이동하는 삶(Mobile Life)'을 위한<br/>
                  <span className="text-frolic-accent">'원목 모듈러 플랫폼'</span>
                </p>
             </GridCol>
             <GridCol span={8}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {EXECUTIVE_SUMMARY.map((item, idx) => (
                    <div key={idx} className="border-t border-frolic-black pt-4">
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-gray-700 break-keep">{item.desc}</p>
                    </div>
                  ))}
                </div>
             </GridCol>
          </Grid>
        </Container>
      </Section>

      {/* 01. MARKET CONTEXT */}
      <Section id="context">
        <Container>
          <Grid>
            <GridCol span={4}>
              <SectionHeader number="01" title="Market Context" />
            </GridCol>
            <GridCol span={8}>
              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-baseline gap-3">
                    <span className="w-3 h-3 bg-frolic-accent rounded-full inline-block"></span>
                    주거 패러다임의 이동
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-800 mb-8 break-keep">
                    한국 임대차 시장은 '전세' 중심에서 '월세' 중심으로 역사적 전환을 겪고 있습니다. 
                    2025년 1분기 기준 서울 월세 비중은 <span className="font-bold underline decoration-frolic-accent">64.6%</span>로 역대 최고치를 기록했습니다.
                    전세 중심 '정착형 거주'에서 월세 중심 '유동형 거주'로의 이동이 가속화되었습니다.
                    이 변화는 곧 "고정된 인테리어" 시대의 종말을 의미합니다. 소비자의 투자는 더 이상 벽과 바닥이 아니라, 이사 갈 때 함께 이동할 수 있는 '오브제와 가구'로 이동하고 있습니다.
                  </p>
                  <MarketChart />
                  <p className="text-xs font-mono text-right mt-2 text-gray-500">Source: Korea Herald, JLL Korea [1][2][3]</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-frolic-black pt-8">
                  <div>
                    <h4 className="font-bold text-xl mb-2">The Space Gap</h4>
                    <p className="text-sm leading-relaxed text-gray-600 break-keep">
                      현실(좁고 자주 바뀌는 집)과 이상(나다운 공간) 사이의 구조적 격차.
                      오피스텔 거주자의 69.1%가 20~30대이며, 이들은 집을 '영구 거점'이 아닌 '경유지'로 인식하면서도, 그 안에서의 삶을 통제하고 싶어합니다.
                    </p>
                  </div>
                  <div className="bg-frolic-black text-white p-6">
                    <h4 className="font-mono text-sm mb-4 uppercase text-frolic-accent">Opportunity</h4>
                    <p className="text-2xl font-bold leading-tight">
                      "솔리드 원목 × 시스템 모듈러"<br/>
                      The White Space.
                    </p>
                  </div>
                </div>
              </div>
            </GridCol>
          </Grid>
        </Container>
      </Section>

      {/* 02. TARGET USER */}
      <Section id="target" className="bg-white">
        <Container>
          <Grid>
            <GridCol span={4}>
              <SectionHeader number="02" title="Active Nomad" />
              <p className="mt-8 text-sm font-mono leading-relaxed text-gray-500 max-w-xs break-keep">
                집에 얹혀 사는 세입자가 아닌, 이동을 통해 삶을 확장하는 능동적 노마드. 
                '언젠가 떠날 집'에 인테리어를 하기보다, 이사를 가도 함께 가져갈 수 있는 가구에 투자합니다.
              </p>
            </GridCol>
            <GridCol span={8}>
              <h3 className="text-xl font-bold mb-6 font-mono border-b border-frolic-black pb-2 inline-block">The Age of Owning +</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <NeedsCard 
                  icon={Box} 
                  title="Hyper-Possession" 
                  desc="쓰고 버리는 소모품이 아니다." 
                  sub="단기 사용 후 처분되는 저가 가구가 아니라, 이사와 함께 삶의 궤적을 공유하는 반려 사물로서의 가치."
                />
                <NeedsCard 
                  icon={Move} 
                  title="Functional Fluidity" 
                  desc="공간이 변해도 쓸모는 남는다." 
                  sub="6평 원룸, 9평 오피스텔, 18~24평 소형 아파트로 옮겨 다닐 때마다, 구성만 바꾸면 새로운 용도를 수행하는 구조적 유연성."
                />
                <NeedsCard 
                  icon={Layers} 
                  title="Stylistic Freedom" 
                  desc="취향은 변해도 가구는 남는다." 
                  sub="콘크리트·인더스트리얼에서 우드·내추럴, 화이트 미니멀에서 컬러풀·맥시멀까지 취향이 변해도, 뼈대는 유지하되 스킨(패널·도어)만 교체해 스타일을 재구성할 수 있는 자유."
                />
                <NeedsCard 
                  icon={Grid3X3} 
                  title="The Playground" 
                  desc="사는 것이 아니라 만드는 것이다." 
                  sub="가구를 조립하고, 변형하고, 해킹(Hack)하는 과정 자체가 즐거운 놀이가 되는 에코시스템."
                />
              </div>
            </GridCol>
          </Grid>
        </Container>
      </Section>

      {/* 03. SOLUTION */}
      <Section id="solution">
        <Container>
          <Grid>
            <GridCol span={12} className="mb-12">
               <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-center leading-[0.9]">
                 Solid Wood<br/><span className="stroke-text text-white" style={{WebkitTextStroke: '2px #000'}}>Modular Platform</span>
               </h2>
            </GridCol>
          </Grid>

          <Grid className="mb-24">
            <GridCol span={4}>
              <div className="border-t-4 border-frolic-black pt-4">
                <h3 className="font-bold text-2xl mb-2">The Backbone</h3>
                <p className="text-sm">평생 사용을 위한 베트남산 프리미엄 솔리드 원목 프레임. 에이징이 될수록 가치가 더해지는 물성.</p>
              </div>
            </GridCol>
            <GridCol span={4}>
              <div className="border-t-4 border-frolic-black pt-4">
                <h3 className="font-bold text-2xl mb-2">The System</h3>
                <p className="text-sm">Tool-free 조립. 수직/수평 무한 확장이 가능한 직관적 결합 구조. 반복 이사에도 스트레스 최소화.</p>
              </div>
            </GridCol>
            <GridCol span={4}>
              <div className="border-t-4 border-frolic-black pt-4">
                <h3 className="font-bold text-2xl mb-2">The Skin</h3>
                <p className="text-sm">취향에 따라 교체 가능한 컬러 패널, 아크릴 도어. '버리는 소비'가 아닌 '변형·업데이트하는 소비'.</p>
              </div>
            </GridCol>
          </Grid>

          <Grid>
            <GridCol span={12}>
              <h3 className="font-mono text-sm font-bold uppercase mb-8 text-gray-500">Competitive Deep Dive & SWOT</h3>
              <CompetitorDeepDive />
            </GridCol>
          </Grid>
        </Container>
      </Section>

      {/* 04. ROADMAP */}
      <Section id="roadmap" className="bg-frolic-black text-frolic-white">
        <Container>
           <Grid>
            <GridCol span={4}>
              <SectionHeader number="04" title="Biz Roadmap" />
              <p className="mt-8 text-sm font-mono opacity-70">Community-Led Growth Strategy</p>
            </GridCol>
            <GridCol span={8}>
              <div className="relative border-l border-white/20 pl-8 ml-4 md:ml-0 space-y-12">
                {PHASES.map((phase, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[37px] top-2 w-4 h-4 bg-frolic-black border-2 border-white rounded-full group-hover:bg-frolic-accent transition-colors"></div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                      <span className="text-frolic-accent font-mono text-sm font-bold">{phase.phase}</span>
                      <span className="text-xs font-mono opacity-50 uppercase border border-white/20 px-2 py-0.5 rounded">{phase.period}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-lg opacity-80 mb-2 font-light">{phase.goal}</p>
                    <p className="text-sm font-mono text-gray-400">Key Action: {phase.keyAction}</p>
                  </div>
                ))}
              </div>
            </GridCol>
           </Grid>
        </Container>
      </Section>

      {/* 05. ROLLOUT PLAN */}
      <Section id="rollout">
        <Container>
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">The Kit System</h2>
            <p className="text-xl max-w-2xl break-keep">
              가구를 파는 것이 아니라, <span className="font-bold underline">공간 활용의 즐거움</span>을 팝니다.<br/>
              Blueprint(레시피)를 통해 원클릭으로 구매하고 확장합니다.
            </p>
          </div>
          
          <Grid className="mb-24">
            {KITS.map((kit, idx) => (
              <GridCol span={6} key={idx} className="bg-white border border-frolic-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl font-black uppercase">{kit.id}</h3>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">{kit.name}</h4>
                <p className="text-sm text-gray-600 mb-6 h-10">{kit.desc}</p>
                <div className="border-t border-dashed border-gray-300 pt-4 mt-auto">
                   <span className="text-xs font-mono font-bold text-frolic-accent uppercase">{kit.mode}</span>
                </div>
              </GridCol>
            ))}
          </Grid>

          <Grid className="border-t-2 border-frolic-black pt-12">
            <GridCol span={4}>
              <h3 className="text-3xl font-black uppercase mb-4">Offline:<br/>FROLIC SPACE</h3>
              <p className="text-sm font-bold">성수 팝업 스토어</p>
              <p className="text-sm mt-2 text-gray-600">공간을 실험하고 조립하는 FROLIC의 현실 버전. "리빙 랩(Living Lab)"</p>
            </GridCol>
            <GridCol span={8}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold border-b border-frolic-black pb-2 mb-2">Zone 1: KIT Arena</h4>
                  <p className="text-sm text-gray-600">제한 시간 내 KIT 01만으로 여러 Mode를 완성하는 스피드 빌드 미션.</p>
                </div>
                <div>
                  <h4 className="font-bold border-b border-frolic-black pb-2 mb-2">Zone 2: Tiny Home Lab</h4>
                  <p className="text-sm text-gray-600">6평, 9평, 12평 모형 공간에 KIT 01~03을 배치하며 최적 구성을 찾는 체험.</p>
                </div>
                <div>
                  <h4 className="font-bold border-b border-frolic-black pb-2 mb-2">Zone 3: Lounge</h4>
                  <p className="text-sm text-gray-600">실제 KIT 조합으로 구성된 카페. 방문객은 커피를 마시며 "사용 중인 상태"를 경험.</p>
                </div>
                <div>
                  <h4 className="font-bold border-b border-frolic-black pb-2 mb-2">Zone 4: Style Corner</h4>
                  <p className="text-sm text-gray-600">KIT 04 컬러 패널 교체 체험. 스킨만 바꾸었을 때 공간 분위기 변화 확인.</p>
                </div>
              </div>
            </GridCol>
          </Grid>

          <div className="mt-24 p-8 md:p-12 border-2 border-frolic-black bg-frolic-accent text-white relative overflow-hidden">
            <Grid>
               <GridCol span={12}>
                 <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase">Brand Declaration</h3>
                 <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl break-keep">
                   FROLIC은 이동하는 삶 속에서도 "내 것"이라는 감각을 지켜주는 원목 모듈러 플랫폼입니다.
                   FROLIC SPACE에서 시작된 하나의 KIT 01은, 당신이 이사할 때마다 새롭게 조립되고, 
                   다른 역할을 수행하며, 당신의 시간을 나이테처럼 쌓아갑니다.
                 </p>
               </GridCol>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer className="bg-frolic-black text-white py-12 border-t border-white/20">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-4">FROLIC.</h2>
              <div className="text-xs font-mono text-gray-400 space-y-1">
                <p>Designed in Seoul / Crafted in Vietnam</p>
                <p>© 2025 FROLIC Inc. All rights reserved.</p>
              </div>
              <div className="mt-4 max-w-2xl">
                 <p className="text-[10px] text-gray-500 font-mono leading-tight">References: [1] Korea Herald, [2] Chosun Biz, [3] JLL Korea, [4] Beyond Apartment, [5] Bazaarvoice, [6] Hankyung, [7] KB Financial Group, [8] The Living, [9] GM Insights, [10] Archisketch, [11] Furniture Today, [12] GWI, [13] Shopify, [14] Rare Raw, [15] Builddweller, [16] Dojam, [17] Duo Concepts, [18] Rajiv Gopinath, [19] Amazing Architecture, [20] Build Review, [21] Business Research Insights, [22] Cognitive Market Research, [23] Elle Decor, [24] Vietnam Briefing, [25] Channel.io, [26] 29CM, [27] USM, [28] Smow, [29] LinkedIn, [30] Trung Tam WTO, [31] Incorp Asia, [32] Community Led Growth, [33] NoGood, [34] Common Room, [35] Sequel, [36] Furniture Today, [37] Qobrix.</p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 flex gap-8">
               <a href="#" className="font-mono text-sm hover:text-frolic-accent transition-colors">INSTAGRAM</a>
               <a href="#" className="font-mono text-sm hover:text-frolic-accent transition-colors">TIKTOK</a>
               <a href="#" className="font-mono text-sm hover:text-frolic-accent transition-colors">CONTACT</a>
            </div>
          </div>
        </Container>
      </footer>

    </div>
  );
};

export default App;