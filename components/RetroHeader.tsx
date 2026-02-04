"use client";

export default function RetroHeader() {
  return (
    <header className="sigols-header">
      <div style={{ padding: '0 40px' }}>
        <nav className="sigols-nav">
          {/* 로고 */}
          <div>
            <a href="#main-content" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px', height: '90px' }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#4CAF50',
                fontFamily: 'Gungsuh, 궁서, GungsuhChe, 궁서체, Batang, 바탕, Georgia, serif',
                lineHeight: '1'
              }}>
                라이프가든
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666',
                borderLeft: '1px solid #ddd',
                paddingLeft: '15px',
                lineHeight: '1'
              }}>
                Life Garden
              </div>
            </a>
          </div>

          {/* 메인 네비게이션 */}
          <ul className="sigols-nav-links">
            <li><a href="#about">라이프가든 소개</a></li>
            <li><a href="#director">이사장 소개</a></li>
            <li><a href="#academy">아카데미</a></li>
            <li><a href="#testimonials">추천의 말씀</a></li>
            <li><a href="#contact">문의하기</a></li>
          </ul>

          {/* 우측 영역 */}
          <div>
            {/* 빈 공간 */}
          </div>
        </nav>
      </div>
    </header>
  );
}