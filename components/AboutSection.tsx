"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            About Us
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              라이프가든
            </span>
          </h2>
                 <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                   <span className="whitespace-nowrap">삶의 가치를 발견하고 함께 성장하는</span> 공동체
                 </p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 좌측 텍스트 */}
          <div className="space-y-8">
            <div className="space-y-6">
                     <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                       화훼, 청년, 교육의 가치를 통합한 비영리단체
                     </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                라이프가든은 화훼, 청년, 교육 등 다양한 분야에서 활동하며,
                개인의 성장과 사회 발전에 기여하는 비영리단체입니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                40여 년간 식물을 돌보며 터득한 생명의 가치와 인내의 지혜를 바탕으로,
                다음 세대가 자신의 가능성을 발견하고 삶의 주체로 성장할 수 있도록 지원합니다.
              </p>
            </div>

            {/* 이사장 정보 */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">양유승 이사장</h4>
                  <p className="text-muted-foreground">라이프가든 설립자 · 남평 식물원 원장</p>
                </div>
              </div>
            </div>
          </div>

          {/* 우측 통계 카드들 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-muted-foreground">년간 화훼 전문</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">청년 교육 지원</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center col-span-2">
              <div className="text-4xl font-bold text-primary mb-2">목회자</div>
              <div className="text-sm text-muted-foreground">목회자 후원</div>
            </div>
          </div>
        </div>

        {/* 핵심 가치 섹션 */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">화훼 전문성</h3>
            <p className="text-muted-foreground">40년 이상의 화훼 재배 경험</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">교육 혁신</h3>
            <p className="text-muted-foreground">배움이 즐거움이 되는 새로운 패러다임</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">청년 지원</h3>
            <p className="text-muted-foreground">청년들의 성장과 자립 지원</p>
          </div>
        </div>
      </div>
    </section>
  );
}