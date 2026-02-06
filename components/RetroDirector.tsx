"use client";

export default function RetroDirector() {
  return (
    <div id="director" className="sigols-container" style={{ margin: '40px auto' }}>
      {/* 이사장 소개 섹션 */}
      <div className="retro-section" style={{ padding: '30px', borderRadius: '3px' }}>
        <h2 className="retro-title" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid #ff3300', paddingBottom: '15px' }}>
          👨‍💼 이사장 소개 👨‍💼
        </h2>

        {/* 메인 프로필 영역 */}
        <div className="profile-grid" style={{ gap: '40px', marginBottom: '30px' }}>
          {/* 프로필 사진 및 기본 정보 */}
          <div>
            {/* 프로필 카드 */}
            <div className="retro-card" style={{ padding: '25px', background: '#f5f5dc', border: '1px solid #8b4513', borderRadius: '3px', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '180px',
                height: '220px',
                border: '2px solid #8b4513',
                borderRadius: '8px',
                overflow: 'hidden',
                margin: '0 auto 20px auto'
              }}>
                <img
                  src="/images/2.png"
                  alt="양유승 이사장"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.backgroundColor = '#deb887';
                      e.currentTarget.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #8b4513; font-size: 24px; font-weight: bold;">양유승</div>';
                    }
                  }}
                />
              </div>

              <h3 style={{ fontSize: '20px', color: '#8b4513', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                양유승 이사장
              </h3>
              <div style={{ fontSize: '13px', color: '#666' }}>
                라이프가든 설립자<br />
                남평 식물원 원장
              </div>
            </div>

            {/* 간단 프로필 */}
            <div className="retro-card" style={{ padding: '20px', background: '#f0e68c', border: '1px solid #daa520', borderRadius: '3px', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#8b4513', lineHeight: '1.8' }}>
                <strong>🌱 40년 화훼 전문가</strong><br />
                <strong>📚 교육 후원가</strong><br />
                <strong>💚 생명 가치 실천</strong><br />
                <strong>🤝 청년 멘토</strong>
              </div>
            </div>
          </div>

          {/* 상세 소개 */}
          <div>
            {/* 인사말 */}
            <div className="retro-card" style={{ padding: '25px', background: '#e6f3ff', border: '1px solid #4169e1', borderRadius: '3px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', color: '#006699', fontWeight: 'bold', marginBottom: '15px' }}>
                "땅을 가꾸던 지혜로 사람을 키우는 후원자"
              </h3>
              <div className="retro-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                한평생 흙을 만지고 생명의 신비를 돌보아 온 식물 전문가에서,
                이제 다음 세대의 마음 밭을 가꾸는 교육 후원가로 제2의 인생을 시작합니다.
                <br /><br />
                40여 년간 식물을 키워내며 터득한 인내와 헌신의 가치를 바탕으로,
                청년들이 자신의 가능성을 발견하고 삶의 주체로 성장할 수 있도록 돕는 일에 헌신하고자 합니다.
              </div>
            </div>

            {/* 주요 약력 */}
            <div className="retro-card" style={{ padding: '25px', background: '#f8f8ff', border: '1px solid #9370db', borderRadius: '3px' }}>
              <h4 style={{ fontSize: '16px', color: '#9370db', fontWeight: 'bold', marginBottom: '15px', textAlign: 'left' }}>
                📋 주요 약력
              </h4>
              <div className="retro-text" style={{ fontSize: '13px', lineHeight: '1.8' }}>
                <strong>• 現 비영리단체 라이프가든 이사장</strong> (승인 대기)<br />
                &nbsp;&nbsp;화훼, 교육, 청년, 신앙의 가치 통합<br />
                <br />
                <strong>• 現 아카데미 핵심 후원자 및 고문</strong><br />
                &nbsp;&nbsp;성경 기반 교육 기관의 든든한 버팀목<br />
                <br />
                <strong>• 現 남평 식물원 원장</strong><br />
                &nbsp;&nbsp;동백류, 양치(고사리과) 식물 전문 재배<br />
                <br />
                <strong>• 식물원 운영 40여 년</strong><br />
                &nbsp;&nbsp;야생화, 분재, 꽃 등 화훼 분야 전문가
              </div>
            </div>
          </div>
        </div>

        {/* 교육 비전 */}
        <div className="retro-card" style={{ padding: '30px', background: '#fff8dc', border: '1px solid #daa520', borderRadius: '3px', marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', color: '#daa520', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
            🌟 교육 후원에 대한 비전 (敎育 後援 展望)
          </h3>

          <div className="retro-text" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
            양유승 이사장은 오랜 세월(歲月) 식물을 돌보며 생명(生命) 하나하나가 가진 고유한 가치(價値)와 잠재력을 깨달았습니다.
            <br /><br />
            그는 식물이 좋은 토양(土壤)과 햇빛, 그리고 정성(精誠) 어린 보살핌 속에서 가장 아름답게 피어나듯,
            사람 또한 건강한 공동체(共同體)와 올바른 가치관(價値觀) 교육 안에서 자신의 재능(才能)을 마음껏 펼칠 수 있다고 믿습니다.
          </div>

          <div style={{ background: '#ffffe0', border: '1px solid #ffd700', borderRadius: '3px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', color: '#8b4513', fontStyle: 'italic', fontWeight: 'bold', lineHeight: '1.6' }}>
              "라이프가든(生命庭園)에서 청년(靑年)들이 자신의 쓸모를 발견하고,<br />
              즐거운 배움을 통해 인생(人生)이라는 정원을 스스로 가꾸어 나가는<br />
              주체적인 존재로 성장(成長)할 수 있도록,<br />
              기꺼이 든든한 거름이자 뿌리가 되어주고자 합니다."
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '15px' }}>
              - 양유승 이사장 -
            </div>
          </div>
        </div>

        {/* 전문 분야 4개 박스 */}
        <div className="expertise-grid" style={{ gap: '20px' }}>
          <div className="retro-card" style={{ padding: '25px', background: '#e6ffe6', border: '1px solid #228b22', borderRadius: '3px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🌱</div>
            <h4 style={{ fontSize: '16px', color: '#006400', marginBottom: '10px', fontWeight: 'bold' }}>화훼 전문성 (花卉 專門)</h4>
            <div style={{ fontSize: '13px', color: '#666' }}>40년 식물원 운영 경험</div>
          </div>

          <div className="retro-card" style={{ padding: '25px', background: '#e6f3ff', border: '1px solid #4169e1', borderRadius: '3px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>📚</div>
            <h4 style={{ fontSize: '16px', color: '#0000cd', marginBottom: '10px', fontWeight: 'bold' }}>교육 철학 (敎育 哲學)</h4>
            <div style={{ fontSize: '13px', color: '#666' }}>생명 가치 기반 교육</div>
          </div>

          <div className="retro-card" style={{ padding: '25px', background: '#ffe6ff', border: '1px solid #da70d6', borderRadius: '3px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>💚</div>
            <h4 style={{ fontSize: '16px', color: '#8b008b', marginBottom: '10px', fontWeight: 'bold' }}>사회 공헌 (社會 貢獻)</h4>
            <div style={{ fontSize: '13px', color: '#666' }}>비영리 활동 추진</div>
          </div>

          <div className="retro-card" style={{ padding: '25px', background: '#ffe4b5', border: '1px solid #ff8c00', borderRadius: '3px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🤝</div>
            <h4 style={{ fontSize: '16px', color: '#ff6600', marginBottom: '10px', fontWeight: 'bold' }}>청년 후원 (靑年 後援)</h4>
            <div style={{ fontSize: '13px', color: '#666' }}>차세대(次世代) 리더 육성</div>
          </div>
        </div>
      </div>
    </div>
  );
}