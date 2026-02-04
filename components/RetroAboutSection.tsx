"use client";

export default function RetroAboutSection() {
  return (
    <div id="about" className="sigols-container" style={{ margin: '40px auto' }}>
      {/* 라이프가든 소개 섹션 */}
      <div className="retro-section" style={{ padding: '30px', borderRadius: '3px' }}>
        <h2 className="retro-title" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid #ff3300', paddingBottom: '15px' }}>
          라이프가든 소개
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
          {/* 좌측 메인 소개 */}
          <div>
            <div className="retro-card" style={{ padding: '25px', background: '#f8f9fa', borderRadius: '3px', marginBottom: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '18px', color: '#4CAF50', marginBottom: '15px', fontWeight: 'bold' }}>
                삶의 가치를 발견하고 함께 성장하는 공동체
              </h3>
            </div>

            <div className="retro-text" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              라이프가든은 화훼, 청년, 교육 등 다양한 분야에서 활동하며,
              개인의 성장과 사회 발전에 기여하는 비영리단체입니다.
              <br /><br />
              40여 년간 식물을 돌보며 터득한 생명의 가치와 인내의 지혜를 바탕으로,
              다음 세대가 자신의 가능성을 발견하고 삶의 주체로 성장할 수 있도록 지원합니다.
            </div>

            {/* 주요 활동 */}
            <div className="retro-card" style={{ padding: '20px', background: '#fffbf0', border: '1px solid #ffd54f', borderRadius: '3px' }}>
              <h4 style={{ fontSize: '16px', color: '#8b4513', marginBottom: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                ◎ 주요 활동 ◎
              </h4>
              <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
                <div style={{ marginBottom: '10px' }}>
                  <strong>① 비영리단체 설립</strong><br />
                  현재 비영리단체 승인 대기 중
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>② 교육 프로그램 운영</strong><br />
                  아카데미를 통한 혁신적 교육
                </div>
                <div>
                  <strong>③ 청년 지원 활동</strong><br />
                  청년들의 성장을 위한 다양한 지원
                </div>
              </div>
            </div>
          </div>

          {/* 우측 사이드바 */}
          <div>
            {/* 핵심 가치 */}
            <div className="retro-card" style={{ padding: '25px', borderRadius: '3px', marginBottom: '20px' }}>
              <h4 style={{ fontSize: '16px', color: '#4CAF50', marginBottom: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                ◈ 핵심 가치 ◈
              </h4>
              <div className="retro-text" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                ▶ 생명 존중과 성장<br />
                ▶ 교육을 통한 변화<br />
                ▶ 공동체 가치 실현<br />
                ▶ 다음 세대 투자
              </div>
            </div>

            {/* 이사장 소개 */}
            <div className="retro-card" style={{ padding: '25px', background: '#fff0f5', border: '1px solid #ffb6c1', borderRadius: '3px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '16px', color: '#C71585', marginBottom: '15px', fontWeight: 'bold' }}>
                ◆ 이사장 ◆
              </h4>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8B008B', marginBottom: '10px' }}>
                양유승
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                라이프가든 설립자<br />
                남평 식물원 원장
              </div>
            </div>
          </div>
        </div>

        {/* 하단 3개 박스 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          <div className="retro-card" style={{ padding: '25px', background: '#e6ffe6', border: '1px solid #66cc66', borderRadius: '3px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🌱</div>
            <h4 style={{ fontSize: '16px', color: '#006600', marginBottom: '10px', fontWeight: 'bold' }}>화훼 전문성</h4>
            <div style={{ fontSize: '13px', color: '#666' }}>
              40년 이상의<br />
              화훼 재배 경험
            </div>
          </div>

          <div className="retro-card" style={{ padding: '25px', background: '#e6f3ff', border: '1px solid #6699ff', borderRadius: '3px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>📚</div>
            <h4 style={{ fontSize: '16px', color: '#0044cc', marginBottom: '10px', fontWeight: 'bold' }}>교육 혁신</h4>
            <div style={{ fontSize: '13px', color: '#666' }}>
              배움이 즐거움이 되는<br />
              새로운 패러다임
            </div>
          </div>

          <div className="retro-card" style={{ padding: '25px', background: '#ffe6f0', border: '1px solid #ff66b2', borderRadius: '3px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>👥</div>
            <h4 style={{ fontSize: '16px', color: '#cc0066', marginBottom: '10px', fontWeight: 'bold' }}>청년 지원</h4>
            <div style={{ fontSize: '13px', color: '#666' }}>
              청년들의 성장과<br />
              자립 지원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}