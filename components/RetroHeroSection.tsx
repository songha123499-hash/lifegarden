"use client";

export default function RetroHeroSection() {
  return (
    <div id="main-content" className="sigols-container" style={{ margin: '40px auto', padding: '30px 0' }}>
      {/* 메인 타이틀 영역 */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#4CAF50', margin: '0 0 10px 0', fontFamily: 'Georgia, serif' }}>
          라이프가든
        </h1>
        <h2 style={{ fontSize: '24px', color: '#666', margin: '0 0 30px 0', fontStyle: 'italic' }}>
          Life Garden
        </h2>

        {/* NEW 박스 */}
        <div style={{
          background: '#ffffff',
          border: '2px solid #999999',
          borderRadius: '3px',
          padding: '20px',
          margin: '0 auto',
          maxWidth: '500px'
        }}>
          <div style={{ color: '#333333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
            ■ 새소식 ■
          </div>
          <div style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>
            비영리단체 승인 대기중!
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div style={{ display: 'flex', gap: '40px', marginBottom: '50px' }}>
        {/* 좌측 메인 컨텐츠 */}
        <div style={{ flex: '2' }}>
          <div className="retro-section" style={{ padding: '30px', borderRadius: '3px', marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '3px', textAlign: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', color: '#333333', fontWeight: 'bold', margin: '0' }}>
                삶의 정원을 함께 가꾸어갑니다
              </h3>
            </div>

            <div className="retro-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <p><strong>안녕하십니까!</strong></p>
              <p>라이프가든 홈페이지 방문을 진심으로 환영합니다.</p>
              <br />
              <p>저희 라이프가든은 화훼(花卉), 청년(靑年), 교육(敎育)의 가치를 통합하여</p>
              <p>개인의 성장(成長)과 사회 발전(發展)에 기여하는 비영리단체입니다.</p>
              <br />
              <p><strong>● 이사장:</strong> 양유승</p>
              <p><strong>● 활동영역:</strong> 화훼, 청년, 교육 등</p>
              <p><strong>● 설립목적:</strong> 다음 세대를 위한 교육 환경 조성</p>
            </div>
          </div>

        </div>

        {/* 우측 사이드바 */}
        <div style={{ flex: '1' }}>
          {/* 주요 현황 */}
          <div className="retro-card" style={{ padding: '20px', marginBottom: '20px', borderRadius: '3px' }}>
            <h4 style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#ff6600', marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
              ◆ 주요 현황 ◆
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#333333' }}>40+</div>
                <div style={{ fontSize: '12px', color: '#666' }}>년간 화훼 전문</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#333333' }}>100+</div>
                <div style={{ fontSize: '12px', color: '#666' }}>청년 교육 지원</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#333333' }}>초교파</div>
              <div style={{ fontSize: '12px', color: '#666' }}>목회자 후원</div>
            </div>
          </div>

          {/* 공지사항 */}
          <div className="retro-card" style={{ padding: '20px', background: '#fffbf0', border: '1px solid #ffd700', borderRadius: '3px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#ff3300', marginBottom: '15px' }}>
              ※ 공지사항 ※
            </h4>
            <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#333' }}>
              • 플레이아카데미 9월 모집 마감 (운영중)<br />
              • 위드아카데미 10월 신규 교육생 모집<br />
              • 비영리단체 승인 절차 진행중<br />
              • 후원자 여러분께 감사드립니다
            </div>
          </div>
        </div>
      </div>

      {/* 하단 정보 */}
      <div style={{ textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '20px', color: '#999', fontSize: '11px' }}>
        Life Garden - 라이프가든에서 꿈을 키워갑니다
      </div>
    </div>
  );
}