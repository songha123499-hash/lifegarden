"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#about", label: "라이프가든 소개" },
    { href: "#director", label: "이사장 소개" },
    { href: "#academy", label: "아카데미" },
    { href: "#testimonials", label: "추천의 말씀" },
    { href: "#contact", label: "문의하기" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between h-20 relative">
          {/* 로고 */}
          <a href="#main-content" className="flex items-center group">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'JeongseonArirangRoot, sans-serif' }}>
                라이프가든
              </div>
              <div className="text-xs text-muted-foreground font-medium tracking-wider">
                LIFE GARDEN
              </div>
            </div>
          </a>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/2 group-hover:-translate-x-1/2"></span>
              </a>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="lg:hidden absolute right-0 p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}