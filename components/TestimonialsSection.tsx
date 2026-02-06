"use client";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              추천의 말씀
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            전문가들이 전하는 라이프가든의 가치
          </p>
        </div>

        {/* 추천사 컨테이너 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* 정훈오 목사 추천사 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200">
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 border-4 border-blue-500 shadow-lg">
                <img
                  src="/images/3.jpg"
                  alt="정훈오 목사님"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.backgroundColor = '#3b82f6';
                      e.currentTarget.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-white text-2xl font-bold">🙏</div>';
                    }
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                정훈오 목사님
              </h3>
              <p className="text-blue-600 font-medium">목회자</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <p className="text-lg font-bold text-blue-800 italic text-center">
                  "산하기관들의 시작을 축복합니다"
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  배움의 여정은 곧 하나님께서 우리에게 주신 잠재력을 발견하고 실현해나가는 거룩한 과정입니다.
                </p>

                <p>
                  라이프가든의 산하기관들은 '배움이 즐거움이 되는 순간, 새로운 가능성이 열린다'는 슬로건 아래,
                  모든 개인이 자신의 고유한 가치를 찾아가는 여정을 돕고자 합니다.
                </p>

                <p>
                  양유승 장로님을 비롯한 여러 원장님들의 헌신과 기도로 세워진 이 기관들이
                  다음 세대를 위한 신앙 교육의 새로운 지평을 열어가기를 소망합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 민매실 강사 추천사 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200">
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 border-4 border-green-500 shadow-lg">
                <img
                  src="/images/1.png"
                  alt="민매실 강사님"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.backgroundColor = '#16a34a';
                      e.currentTarget.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-white text-2xl font-bold">👩‍🏫</div>';
                    }
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                민매실 강사님
              </h3>
              <p className="text-green-600 font-medium">광주 남구청 교육강사</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <p className="text-base sm:text-lg font-bold text-green-800 italic text-center leading-tight">
                  "배움의 즐거움 속에서 피어나는<br className="sm:hidden" />새로운 가능성을 응원합니다."
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  오랜 시간 교육 현장에서 많은 분들을 만나오면서,
                  배움이 개인의 삶을 얼마나 풍요롭게 만들고 새로운 길을 열어주는지를 깊이 깨달아 왔습니다.
                </p>

                <p>
                  '인생은 자신의 쓸모를 찾아가는 여정'이라는 철학 아래,
                  배움에 대한 심리적 부담을 덜고 즐거운 과정으로 재해석하려는 시도는 매우 의미 깊습니다.
                </p>

                <p>
                  라이프가든의 산하기관들이 각자의 '라이프가든'을 더욱 아름답게 가꾸어 나가는
                  소중한 밑거름이 되기를 바라며, 힘찬 격려의 박수를 보냅니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 통계 정보 박스 */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
          <div className="max-w-5xl mx-auto">
            {/* 제목 */}
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                함께 만들어가는 교육의 미래
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
            </div>

            {/* 통계 카드들 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">🙏</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">10+</div>
                  <div className="text-sm font-semibold text-slate-600">목회자</div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">👴</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">50+</div>
                  <div className="text-sm font-semibold text-slate-600">원로 장로 참여</div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">100+</div>
                  <div className="text-sm font-semibold text-slate-600">청년 교육 수혜자</div>
                </div>
              </div>
            </div>

            {/* 하단 메시지 */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold">성장하는 교육 공동체</h4>
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  라이프가든의 산하기관들은 많은 분들의 기도와 후원으로 성장하고 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}