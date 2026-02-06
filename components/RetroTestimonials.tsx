"use client";

export default function RetroTestimonials() {
  return (
    <div id="testimonials" className="sigols-container" style={{ margin: '40px auto' }}>
      {/* 추천의 말씀 섹션 */}
      <div className="retro-section" style={{ padding: '30px', borderRadius: '3px' }}>
        <h2 className="retro-title" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid #ff3300', paddingBottom: '15px' }}>
          ✨ 추천의 말씀 ✨
        </h2>

        {/* 추천사 컨테이너 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
          {/* 정훈오 목사 추천사 */}
          <div className="retro-card" style={{ padding: '25px', background: '#f0f8ff', border: '1px solid #4169e1', borderRadius: '3px' }}>
            <div style={{ background: '#4169e1', color: 'white', padding: '15px', borderRadius: '3px', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 15px auto',
                border: '3px solid white'
              }}>
                <img
                  src="/images/3.jpg"
                  alt="정훈오 목사님"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.backgroundColor = '#4169e1';
                      e.currentTarget.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 14px; font-weight: bold;">🙏</div>';
                    }
                  }}
                />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                정훈오 목사님
              </h3>
              <div style={{ fontSize: '13px', opacity: '0.9' }}>
                초교파 목사
              </div>
            </div>

            <div className="retro-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#4169e1', marginBottom: '15px', fontStyle: 'italic' }}>
                &ldquo;어둠을 밝히는 등불과 같이, 산하기관들의 시작을 축복합니다.&rdquo;
              </div>

              배움의 여정은 곧 하나님께서 우리에게 주신 잠재력을 발견하고 실현해나가는 거룩한 과정입니다.
              <br /><br />
              라이프가든의 산하기관들은 &lsquo;배움이 즐거움이 되는 순간, 새로운 가능성이 열린다&rsquo;는 슬로건 아래,
              모든 개인이 자신의 고유한 가치를 찾아가는 여정을 돕고자 합니다.
              <br /><br />
              양유승 장로님을 비롯한 여러 원장님들의 헌신과 기도로 세워진 이 기관들이
              다음 세대를 위한 신앙 교육의 새로운 지평을 열어가기를 소망합니다.
            </div>
          </div>

          {/* 민매실 강사 추천사 */}
          <div className="retro-card" style={{ padding: '25px', background: '#f0fff0', border: '1px solid #32cd32', borderRadius: '3px' }}>
            <div style={{ background: '#32cd32', color: 'white', padding: '15px', borderRadius: '3px', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 15px auto',
                border: '3px solid white'
              }}>
                <img
                  src="/images/1.png"
                  alt="민매실 강사님"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.backgroundColor = '#32cd32';
                      e.currentTarget.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 14px; font-weight: bold;">👩‍🏫</div>';
                    }
                  }}
                />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                민매실 강사님
              </h3>
              <div style={{ fontSize: '13px', opacity: '0.9' }}>
                광주 남구청 교육강사
              </div>
            </div>

            <div className="retro-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#32cd32', marginBottom: '15px', fontStyle: 'italic' }}>
                &ldquo;배움의 즐거움 속에서 피어나는 새로운 가능성을 응원합니다.&rdquo;
              </div>

              오랜 시간 교육 현장에서 많은 분들을 만나오면서,
              배움이 개인의 삶을 얼마나 풍요롭게 만들고 새로운 길을 열어주는지를 깊이 깨달아 왔습니다.
              <br /><br />
              &lsquo;인생은 자신의 쓸모를 찾아가는 여정&rsquo;이라는 철학 아래,
              배움에 대한 심리적 부담을 덜고 즐거운 과정으로 재해석하려는 시도는 매우 의미 깊습니다.
              <br /><br />
              라이프가든의 산하기관들이 각자의 &lsquo;라이프가든&rsquo;을 더욱 아름답게 가꾸어 나가는
              소중한 밑거름이 되기를 바라며, 힘찬 격려의 박수를 보냅니다.
            </div>
          </div>
        </div>

        {/* 통계 정보 박스 */}
        <div className="retro-card" style={{ padding: '30px', background: '#fff8dc', border: '1px solid #ff8c00', borderRadius: '3px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '20px', color: '#ff8c00', marginBottom: '25px', fontWeight: 'bold' }}>
            🌟 함께 만들어가는 교육의 미래 🌟
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', textAlign: 'center', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff6600', marginBottom: '8px' }}>10+</div>
              <div style={{ fontSize: '14px', color: '#8b4513', fontWeight: 'bold' }}>초교파 목회자 후원</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff6600', marginBottom: '8px' }}>50+</div>
              <div style={{ fontSize: '14px', color: '#8b4513', fontWeight: 'bold' }}>원로 장로 참여</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff6600', marginBottom: '8px' }}>100+</div>
              <div style={{ fontSize: '14px', color: '#8b4513', fontWeight: 'bold' }}>청년 교육 수혜자</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '14px', color: '#8b4513', fontStyle: 'italic', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            라이프가든의 산하기관들은 많은 분들의 기도와 후원으로 성장하고 있습니다
          </div>
        </div>
      </div>
    </div>
  );
}