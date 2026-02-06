import Image from "next/image";

export default function PlayAcademySection() {
  return (
    <section id="academy" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Academy
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              아카데미
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            배움이 즐거움이 되는 혁신적 교육 프로그램
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 로고 섹션 */}
          <div className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-8">
              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20">
                <Image
                  src="/playacademy.png"
                  alt="플레이아카데미 로고"
                  width={300}
                  height={150}
                  className="w-full h-auto mx-auto"
                />
              </div>
              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20">
                <Image
                  src="/itdaacademy.jpg"
                  alt="잇다아카데미 로고"
                  width={300}
                  height={150}
                  className="w-full h-auto mx-auto"
                />
              </div>
              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20">
                <Image
                  src="/withacademy.png"
                  alt="위드아카데미 로고"
                  width={300}
                  height={150}
                  className="w-full h-auto mx-auto"
                />
              </div>
              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20">
                <Image
                  src="/hanaacademy.jpg"
                  alt="하나아카데미 로고"
                  width={300}
                  height={150}
                  className="w-full h-auto mx-auto mt-9"
                />
              </div>
              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20">
                <Image
                  src="/rebornacademy.png"
                  alt="리본아카데미 로고"
                  width={300}
                  height={150}
                  className="w-full h-auto mx-auto"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-semibold text-primary">
                라이프가든 산하기관
              </div>
              <div className="text-lg sm:text-xl font-bold text-foreground italic max-w-3xl mx-auto">
                "배움이 즐거움이 되는 순간, 새로운 가능성이 열립니다"
              </div>
            </div>
          </div>

          {/* 교육 프로그램 카드들 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 후원 기관 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  후원 기관
                </h3>
                <p className="text-blue-600 mb-4">
                  목사님과 원로 장로님이 후원하는 성경 교육 기관
                </p>
                <p className="text-sm text-blue-500">
                  양유승 장로님을 필두로 원장님들이 마음을 모아 후원하는 중입니다.
                </p>
              </div>
            </div>

            {/* 교육 철학 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  교육 철학
                </h3>
                <p className="text-green-600 mb-4">
                  Academy는 배움의 본질을 재정의하는 교육 프로그램입니다.
                </p>
                <div className="bg-white/60 rounded-xl p-4">
                  <p className="font-bold text-green-800 italic">
                    "인생은 자신의 쓸모를 찾아가는 여정"
                  </p>
                </div>
              </div>
            </div>

            {/* 교육 방향성 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-purple-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-4">
                  교육 방향성
                </h3>
                <p className="text-purple-600">
                  기존 배움에 대한 심리적 부담감을 해소하고, 배움을 통해 자신의 가치를 찾아가는 즐거운 과정으로 재해석합니다.
                </p>
              </div>
            </div>

            {/* 비전 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg border border-amber-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-amber-700 mb-4">
                  비전
                </h3>
                <p className="text-amber-600">
                  Academy는 단순한 교육 기관을 넘어, 배움을 통해 개인의 잠재력을 극대화하고 실질적인 변화를 창출하는 플랫폼이 될 것입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}