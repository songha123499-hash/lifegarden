"use client";

export default function HeroSection() {
  return (
    <section id="main-content" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px), radial-gradient(circle at 75% 75%, #059669 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* 좌측 텍스트 영역 */}
          <div className="lg:col-span-7 space-y-12">
            {/* 상태 배지 */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
              <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">비영리단체 승인 대기중</span>
            </div>

            {/* 메인 타이틀 */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                  라이프가든
                </span>
                <span className="block text-4xl lg:text-5xl font-light text-slate-600 mt-2">
                  Life Garden
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
            </div>

            {/* 서브타이틀 */}
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl font-light text-slate-700 leading-relaxed max-w-2xl">
                <span className="whitespace-nowrap">화훼, 청년, 교육의 가치를 통합한</span>
                <span className="block font-semibold text-slate-900">비영리단체</span>
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                40여 년간 식물을 돌보며 터득한 생명의 가치와 인내의 지혜를 바탕으로, 
                다음 세대가 자신의 가능성을 발견하고 삶의 주체로 성장할 수 있도록 지원합니다.
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                더 알아보기
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-primary hover:text-primary transition-all duration-300"
              >
                문의하기
              </a>
            </div>
          </div>

          {/* 우측 통계 및 정보 카드들 */}
          <div className="lg:col-span-5 space-y-8">
            {/* 주요 통계 */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">40+</div>
                  <div className="text-sm font-medium text-slate-600">년간 화훼 전문</div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
                  <div className="text-sm font-medium text-slate-600">청년 교육 지원</div>
                </div>
              </div>
            </div>

            {/* 비전 카드 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="text-xl font-bold mb-4">목회자 후원</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  다양한 교단의 목회자들과 함께 
                  <span className="block font-semibold text-white mt-1">교육의 새로운 지평을 열어갑니다</span>
                </p>
              </div>
            </div>

            {/* 신뢰도 표시 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-sm">🌿</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-sm">📚</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-sm">🤝</span>
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  <div className="font-semibold">신뢰받는 기관</div>
                  <div className="text-xs">40년의 경험과 전문성</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 구분선 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}