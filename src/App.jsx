import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [startActive, setStartActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  return (
    <div className="App">
      {/* 🔹 Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          {/* 왼쪽 파란 로고 */}
          <div className="nav-left">
            <div className="logo">지</div>
          </div>

          {/* 가운데 브랜드명 */}
          <div className="nav-center">
            <h1 className="brand">지금융CS파트너스</h1>
          </div>

          {/* 오른쪽 파란 버튼 */}
          <div className="nav-right">
             <a
              href="https://forms.gle/aaBFEsSPnhzChzET9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >상담 신청</a>
          </div>
        </div>
      </nav>


      {/* 🔹 Hero Section */}
      <section className="hero">
        <p className="tag">● 새로운 부업의 시작</p>
        <h1>지금융CS파트너스</h1>
        <p className="subtitle">
          내가 관리하는 보험이 <span>내가 만드는 수익</span>이 됩니다.
        </p>
        <button
          className={`btn btn-large ${startActive ? 'active' : ''}`}
          onClick={() => {
            setStartActive(!startActive);
            window.open("https://forms.gle/aaBFEsSPnhzChzET9", "_blank");
          }}
        >
          지금 시작하기 →
        </button>
      </section>

      {/* 🔹 Stats Section */}
      <section className="stats">
        <div className="card">
          <div className="icon">🛡️</div>
          <h3>11.2조원</h3>
          <p>2024년 미수령 보험금</p>
        </div>
        <div className="card">
          <div className="icon">📈</div>
          <h3>평균 150만원</h3>
          <p>첫 달 예상 수익</p>
        </div>
        <div className="card">
          <div className="icon">👥</div>
          <h3>400,000+</h3>
          <p>대한민국 보험설계사 숫자</p>
        </div>
      </section>

      <section className="njob">
        <h2>보험설계사 N잡 시대는 이미 시작!!!</h2>
        <p className="subtitle">
          일부 보험회사들이 보험설계사 N잡 시대를 선도하고 있습니다.
        </p>

        <div className="njob-cards">
          <div className="njob-card">
            <div className="left">
              <h4 className="company blue">메리츠화재</h4>
            </div>
            <div className="right">
              <p>
                <strong>메리츠화재</strong>는 <span className="highlight">메리츠파트너스</span>라는 서비스를 업계 최초로 오픈하여 보험설계사 N잡 시대를 열었고,
                설계사 수가 이미 <span className="highlight">수천명</span>을 넘었습니다.
              </p>
            </div>
          </div>

          <div className="njob-card">
            <div className="left">
              <h4 className="company blue">롯데손해보험</h4>
            </div>
            <div className="right">
              <p>
                <strong>롯데손해보험</strong>은 업계 두번째로 <span className="highlight">원더 스마트플래너</span> 서비스를 오픈하여 가파른 상승세를 보이고 있습니다.
              </p>
            </div>
          </div>

          <div className="njob-card highlight-border">
            <div className="left">
              <h4 className="company blue">지금융파트너스</h4>
            </div>
            <div className="right">
              <p>
                <strong>지금융파트너스</strong>는 여러 보험회사의 상품을 판매할 수 있는 <span className="highlight">종합보험 대리점</span>으로서
                설계사와 거의 동등한 수준의 <span className="highlight">수수료와 시책</span>까지 지급함으로써, 진정한 보험설계사 N잡이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 🔹 수수료 구조의 변화 섹션 */}
      <section className="commission">
        <h2>수수료 구조의 변화</h2>
        <p className="subtitle">
          지금융CS파트너스는 ‘내가 직접 설계사가 되어 수수료를 가져가는 구조’입니다.
        </p>

        <div className="commission-container">
          {/* 기존 방식 */}
          <div className="commission-card">
            <span className="label gray">기존 방식! 설계사에게 보험가입</span>
            <div className="card-content">
              <div className="icon-area">❌</div>
              <div className="text-area">
                <h4>설계사가 수수료를 가져감</h4>
                <p>보험 가입 시 발생하는 수수료는 모두 설계사에게 돌아갑니다.</p>
                <div className="loss-box">
                  <span>❌ 내 수익: 0원</span>
                </div>
              </div>
            </div>
          </div>

          {/* 지금융CS파트너스 방식 */}
          <div className="commission-card active">
            <span className="label blue">지금융CS파트너스</span>
            <div className="card-content">
              <div className="icon-area">✅</div>
              <div className="text-area">
                <h4>내가 설계사가 되어 수수료를 가져감</h4>
                <p>내가 직접 설계사가 되어 수수료를 온전히 내 수익으로 만듭니다.</p>
                <div className="gain-box">
                  <span>→ 수수료 = 내 수익</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="footnote">* 수익은 보험 체결 후 발생하며 개인 차이가 있을 수 있음</p>
      </section>

      {/* 🔹 보험으로 만드는 N번째 수익 섹션 */}
      <section className="income">
        <h2>보험으로 만드는 N번째 수익</h2>
        <p className="subtitle">
          나, 가족, 지인까지 셀프 보험 설계로 수익을 챙기는 사람들 증가 중
        </p>

        <div className="income-content">
          {/* 왼쪽: 카드형 이미지 */}
          <div className="income-left">
            <div className="mockup-card">
              <div className="mockup-top">
                <span className="time">9:41</span>
                <div className="dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="mockup-body">
                <p className="label">입금 알림</p>
                <p className="desc">지금융CS파트너스 수수료 입금</p>
                <p className="amount">+1,500,000원</p>
                <p className="sub">입금 완료</p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 수익 포인트 */}
          <div className="income-right">
            <div className="point">
              <span className="icon">📈</span>
              <div>
                <h4>최대 12배 수익 가능</h4>
                <p>보험 계약 시 발생하는 수수료를 직접 수령합니다.</p>
              </div>
            </div>

            <div className="point">
              <span className="icon">💰</span>
              <div>
                <h4>익월 27일 수수료, 익익월 10일 시책지급</h4>
                <p>일반 설계사 수준에 근접한 수수료와 시책 지급</p>
              </div>
            </div>

            <div className="point">
              <span className="icon">💎</span>
              <div>
                <h4>월 평균 150만원</h4>
                <p>첫 달 평균 수익 150만원을 달성하고 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 1:1 전문 멘토 섹션 */}
      <section className="mentor">
        <h2>
          1:1 전문 멘토와 함께라면<br />어렵지 않아요
        </h2>
        <p className="subtitle">
          보험 용어 몰라도 OK! 전문 멘토가 모든 과정을 처음부터 끝까지 안내합니다.
        </p>

        <div className="mentor-cards">
          <div className="mentor-card">
            <div className="icon">💬</div>
            <h4>1:1 맞춤 상담</h4>
            <p>개인 상황에 맞는 맞춤형 상담으로 최적의 시작을 도와드립니다.</p>
          </div>

          <div className="mentor-card">
            <div className="icon">🎓</div>
            <h4>체계적인 교육</h4>
            <p>처음이어도 걱정 없이 단계별 교육으로 전문가로 성장합니다.</p>
          </div>

          <div className="mentor-card">
            <div className="icon">💙</div>
            <h4>지속적인 서포트</h4>
            <p>시작 후에도 꾸준한 멘토링으로 성공적인 활동을 지원합니다.</p>
          </div>
        </div>
      </section>


      {/* 🔹 초기비용 최소화 섹션 */}
      <section className="cost">
        <h2>
          <u>초기비용 최소화</u>
        </h2>

        <div className="cost-cards">
          <div className="cost-card">
            <div className="icon">🎥</div>
            <div className="text">
              <h4>온라인 강의 수강료 2만원</h4>
              <p>언제 어디서든 학습 가능한 온라인 강의 제공</p>
            </div>
          </div>

          <div className="cost-card">
            <div className="icon">🧾</div>
            <div className="text">
              <h4>자격시험 응시료 본인부담</h4>
              <p>생명보험 2만원, 손해보험 2만원 본인부담</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 내 보험은 DOWN, 수익은 UP 섹션 */}
      <section className="plan">
        <h2>
          내 보험은 <span className="blue">DOWN</span>, 수익은 <span className="blue">UP</span>
        </h2>
        <p className="subtitle">
          나에게 필요한 보장만 골라 가입해 보험료 절약 + 추가 수익까지
        </p>

        <div className="plan-cards">
          <div className="plan-card">
            <div className="badge">추천</div>
            <div className="icon">🛡️</div>
            <h4>보장 1</h4>
            <p>필수 기본 보장</p>
            <h3>월 <span>56,000</span>원~</h3>
          </div>

          <div className="plan-card active">
            <div className="badge">인기</div>
            <div className="icon">🛡️</div>
            <h4>보장 2</h4>
            <p>종합 보장 플랜</p>
            <h3>월 <span>72,000</span>원~</h3>
          </div>

          <div className="plan-card">
            <div className="badge">프리미엄</div>
            <div className="icon">🛡️</div>
            <h4>보장 3</h4>
            <p>프리미엄 보장</p>
            <h3>월 <span>93,000</span>원~</h3>
          </div>
        </div>

        <div className="plan-bottom">
          <div className="bottom-card">
            <div className="icon green">💸</div>
            <div>
              <h4>보험료 절약</h4>
              <p>불필요한 보장 제거로 평균 30% 절약</p>
            </div>
          </div>
          <div className="bottom-card">
            <div className="icon blue">📈</div>
            <div>
              <h4>추가 수익</h4>
              <p>내가 설계한 보험의 수수료가 내 수익으로</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 지금융CS파트너스의 세 가지 혜택 섹션 */}
      <section className="benefits">
        <h2>지금융CS파트너스의 세 가지 혜택</h2>

        <div className="benefit-cards">
          <div className="benefit-card">
            <div className="icon"> </div>
            <div className="content">
              <div className="badge">혜택 1</div>
              <h4>나에게 맞는 보장 선택 → 보험료 절약</h4>
              <p>
                필요한 보장만 선택하여 보험료를 절약하고, 보험 계약 시 최대 12배 수익을 가져갈 수 있습니다.
              </p>
              <p className="highlight">💰 보험계약 시 최대 12배 수익 가능</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="icon"> </div>
            <div className="content">
              <div className="badge">혜택 2</div>
              <h4>가족·지인 보험 점검으로 추가 수익 창출</h4>
              <p>
                가족과 지인의 보험을 점검하고 리모델링하여 모두가 절약하면서 나도 수익을 얻는 구조입니다.
              </p>
              <p className="highlight">🤝 모두가 절약하고, 나도 수익 얻는 구조</p>
            </div>
          </div>

         <div className="benefit-card">
            <div className="icon"> </div>
            <div className="content">
              <div className="badge">혜택 3</div>
              <h4>언제 어디서든 자유롭게</h4>
              <p>
                출퇴근 시간에도, 주말에도 원하는 때에 부업이 가능합니다. 시간과 장소에 구애받지 않습니다.
              </p>

              {/* ✅ 라운드형 블루 뱃지 3개 */}
              <div className="highlight-badges">
                <span>🚇 출퇴근 시간</span>
                <span>🏖️ 주말에도</span>
                <span>⏰ 원하는 때에</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* 🔹 시작 방법 섹션 */}
      <section className="steps">
        <h2>시작 방법</h2>
        <p className="subtitle">간단한 5단계로 새로운 수익을 시작하세요</p>

        <div className="step-flow">
          <div className="step">
            <div className="step-icon">
              <span className="step-number">1</span>
              <div className="icon">💬</div>
            </div>
            <h4>상담 신청</h4>
            <p>간단한 상담 신청으로 시작하세요</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <span className="step-number">2</span>
              <div className="icon">📖</div>
            </div>
            <h4>온라인 강의 수강</h4>
            <p>온라인 강의로 언제든 학습 가능</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <span className="step-number">3</span>
              <div className="icon">🧾</div>
            </div>
            <h4>자격증 시험</h4>
            <p>응시료 본인 부담</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <span className="step-number">4</span>
              <div className="icon">💼</div>
            </div>
            <h4>위촉 완료</h4>
            <p>정식 파트너로 활동 시작</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <span className="step-number">5</span>
              <div className="icon">💰</div>
            </div>
            <h4>수익 발생</h4>
            <p>보험 N잡 활동 성공!</p>
          </div>
        </div>
      </section>
      {/* 🔹 FAQ 섹션 */}
      <section className="faq">
        <p className="tag">FAQ</p>
        <h2>자주 묻는 질문</h2>

        <div className="faq-list">
          <details open>
            <summary>수익 구조는 어떻게 되나요?</summary>
            <p>
              내가 직접 설계한 보험에서 발생하는 수수료가 내 수익이 됩니다.
              기존에는 설계사에게 돌아가던 수수료를 본인이 직접 설계사가 되어 가져가는 구조입니다.
            </p>
          </details>

          <details>
            <summary>월평균 수익은 얼마나 되나요?</summary>
            <p>
              첫 달 평균 약 150만원의 수익을 달성하고 있습니다.
              다만 수익은 개인의 활동량과 상황에 따라 다를 수 있습니다.
            </p>
          </details>

          <details>
            <summary>자격증이 꼭 필요한가요?</summary>
            <p>
              네, 보험설계사 자격증이 필요합니다. 온라인 강의도 듣고 열심히 공부해서 꼭 시험에 합격하시길 기원합니다.
            </p>
          </details>

          <details>
            <summary>수수료는 어떻게 지급되나요?</summary>
            <p>
              보험계약을 체결하면 상품 자체에 연결된 수수료가 있고, 영업실적에 따른 시책(인센티브)이 있습니다.
              지금융파트너스는 영업실적에 대한 수수료를 익월 27일에 지급하고, 시책은 익익월 10일에 지급합니다.
            </p>
          </details>

          <details>
            <summary>본업과 병행 가능할까요?</summary>
            <p>
              네, 가능합니다! 출퇴근 시간 없이, 정해진 근무시간 없이 원하는 시간에 자유롭게 활동할 수 있어 본업과 병행하기에 적합합니다.
            </p>
          </details>

          <details>
            <summary>파트너 위촉을 위해 소요되는 비용은 어떤게 있나요?</summary>
            <p>
              시험등록비 최초 1회 4만원(생보, 손보 각 2만원), 사이버교육 등록비 2만원(매 2년마다)이 필요합니다.
              소득에 대해서는 3.3% 원천징수, 특수고용근로자 산재/고용보험료, 보증보험료(매년 10만원 전후)가 추가 공제됩니다.
            </p>
          </details>

          <details>
            <summary>위촉자격 유지를 위한 최저 조건이 있나요?</summary>
            <p>
              1년차는 최저조건이 없고, 2년차부터는 매 년도별 신계약 6건 이상(보험종류 제한 없음)의 실적이 있으면 자격유지 심사를 하지 않습니다.
            </p>
          </details>
        </div>
      </section>
      {/* 🔹 CTA 섹션 */}
      <section className="cta">
        <div className="cta-inner">
          <h2>
            지금, 새로운 수익을 <br />시작하세요
          </h2>
          <p>
            초기비용 없이, 전문 멘토와 함께라면<br />
            누구나 성공적인 파트너가 될 수 있습니다.
          </p>
          <a
            href="https://forms.gle/aaBFEsSPnhzChzET9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >무료 상담 신청하기 →</a>
        </div>
      </section>
    {/* 🔹 Footer 섹션 */}
    <footer className="footer">
      <div className="footer-inner">
        {/* 왼쪽 영역 */}
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-icon">지</span>
            <span className="logo-text">지금융CS파트너스</span>
          </div>
          <p>
            내가 관리하는 보험이 내가 만드는 수익이 됩니다. <br />
            지금융CS파트너스와 함께 새로운 부업을 시작하세요.
          </p>
        </div>

        {/* 오른쪽 영역 */}
        <div className="footer-right">
          <h4>문의하기</h4>
          <p>카카오톡: <span>@지금융CS파트너스</span></p>
          <p>이메일: <span>kssaint@daum.net</span></p>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="footer-bottom">
        <p>© 2024 지금융CS파트너스. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">개인정보처리방침</a>
          <a href="#">이용약관</a>
        </div>
      </div>
    </footer>




      {/* 🔹 Floating Contact Button */}
      <button
        className={`floating-btn ${contactActive ? 'active' : ''}`}
        onClick={() => {
          setContactActive(!contactActive);
          window.open("https://forms.gle/aaBFEsSPnhzChzET9", "_blank");
        }}
      >
        💬 상담 신청하기
      </button>
    </div>


  )
}

export default App
