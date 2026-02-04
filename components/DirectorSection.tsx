"use client";

export default function DirectorSection() {
  return (
    <section id="director" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Director
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              이사장 소개
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            라이프가든을 이끌어가는 리더십
          </p>
        </div>

        {/* 메인 프로필 영역 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 좌측 프로필 */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="w-48 h-60 border-4 border-primary/20 rounded-2xl overflow-hidden mx-auto lg:mx-0 mb-8 shadow-2xl">
                <img
                  src="/images/2.png"
                  alt="양유승 이사장"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.backgroundColor = '#deb887';
                      e.currentTarget.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-primary text-2xl font-bold">양유승</div>';
                    }
                  }}
                />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                양유승 이사장
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                라이프가든 설립자 · 남평 식물원 원장
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-primary mb-4 text-center">
                  "땅을 가꾸던 지혜로 사람을 키우는 후원자"
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  한평생 흙을 만지고 생명의 신비를 돌보아 온 식물 전문가에서,
                  이제 다음 세대의 마음 밭을 가꾸는 교육 후원가로 제2의 인생을 시작합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 우측 약력 및 전문분야 */}
          <div className="space-y-8">
            {/* 주요 약력 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-xl font-bold text-foreground mb-6">
                주요 약력
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground">현 비영리단체 라이프가든 이사장</div>
                    <div className="text-sm text-muted-foreground">화훼, 교육, 청년, 신앙의 가치 통합</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground">현 산하기관 핵심 후원자 및 고문</div>
                    <div className="text-sm text-muted-foreground">성경 기반 교육 기관의 든든한 버팀목</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground">현 남평 식물원 원장</div>
                    <div className="text-sm text-muted-foreground">동백류, 양치(고사리과) 식물 전문 재배</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground">식물원 운영 40여 년</div>
                    <div className="text-sm text-muted-foreground">야생화, 분재, 꽃 등 화훼 분야 전문가</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 교육 비전 */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-amber-700 mb-8">
              교육 후원에 대한 비전
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed mb-12 text-muted-foreground">
              <p>
                양유승 이사장은 오랜 세월 식물을 돌보며 생명 하나하나가 가진 고유한 가치와 잠재력을 깨달았습니다.
              </p>
              <p>
                그는 식물이 좋은 토양과 햇빛, 그리고 정성 어린 보살핌 속에서 가장 아름답게 피어나듯,
                사람 또한 건강한 공동체와 올바른 가치관 교육 안에서 자신의 재능을 마음껏 펼칠 수 있다고 믿습니다.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200">
              <div className="text-base sm:text-lg text-amber-800 italic font-medium leading-relaxed">
                "라이프가든에서 청년들이 자신의 쓸모를 발견하고,<br className="hidden sm:block" />
                즐거운 배움을 통해 인생이라는 정원을 스스로 가꾸어 나가는<br className="hidden sm:block" />
                주체적인 존재로 성장할 수 있도록,<br className="hidden sm:block" />
                기꺼이 든든한 거름이자 뿌리가 되어주고자 합니다."
              </div>
              <div className="text-sm text-amber-600 mt-6 font-medium">
                - 양유승 이사장 -
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}