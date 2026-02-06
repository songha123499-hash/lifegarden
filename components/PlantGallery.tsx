"use client";

export default function PlantGallery() {
  const galleryImages = [
    { num: 1, ext: 'png' },
    { num: 2, ext: 'png' },
    { num: 3, ext: 'png' },
    { num: 4, ext: 'png' },
    { num: 5, ext: 'png' },
    { num: 6, ext: 'png' }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Gallery
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              식물원 갤러리
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            남평 식물원의 아름다운 식물들을 만나보세요
          </p>
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map(({ num, ext }) => (
            <div key={num} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img
                  src={`/flower/${num}.${ext}`}
                  alt={`식물원 - ${num}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">식물원 갤러리</div>
                  <div className="text-xs text-white/80">아름다운 식물들</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}