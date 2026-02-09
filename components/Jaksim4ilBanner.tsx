"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, CreditCard, Sparkles } from 'lucide-react'

export default function Jaksim4ilBanner() {
    return (
        <section className="py-8 sm:py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Main Banner Card */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#FF6347] via-[#FF4500] to-[#E53E3E]">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)'
                        }} />
                    </div>

                    {/* Glowing Effect */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl" />

                    <div className="relative flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-8">
                        {/* Image Section */}
                        <div className="relative w-full lg:w-2/5 aspect-square max-w-[320px] rounded-xl overflow-hidden shadow-xl ring-4 ring-white/20">
                            <Image
                                src="/popup/jaksim4il.jpg"
                                alt="작심4일 프로젝트 - MAKE_MOVE_GROW BETA TESTER"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 320px"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 text-center lg:text-left space-y-4">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                                <Sparkles className="w-4 h-4 text-yellow-300" />
                                <span className="text-white text-sm font-medium">NEW 콜라보레이션</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                                🕶️ 작심4️⃣일 프로젝트 🕶️
                            </h2>

                            {/* Subtitle */}
                            <p className="text-white/90 text-lg sm:text-xl font-medium">
                                청춘미담 X 아카데미 도담
                                <span className="block text-sm text-white/70 mt-1">(feat. 라이프가든)</span>
                            </p>

                            {/* Details Card */}
                            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 sm:p-5 space-y-3 text-white">
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 mt-0.5 text-yellow-300 flex-shrink-0" />
                                    <div className="text-sm sm:text-base leading-relaxed">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                            <p>📅 2/11 (수) 19:30~21:00</p>
                                            <p>📅 2/14 (토) 16:00~18:00</p>
                                            <p>📅 2/21 (토) 16:00~18:00</p>
                                            <p>📅 2/23 (월) 19:30~21:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                                    <CreditCard className="w-5 h-5 text-green-300 flex-shrink-0" />
                                    <span className="text-sm sm:text-base font-semibold">참가비: 1회차 당 5,000원</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/apply"
                                className="inline-block w-full sm:w-auto px-8 py-4 rounded-xl bg-[#228B22] hover:bg-[#1a6b1a] text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                ✨ 지금 신청하기
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Ticker */}
                    <div className="bg-[#228B22] text-white py-2 overflow-hidden">
                        <div className="flex whitespace-nowrap items-center gap-8 text-sm font-medium animate-pulse">
                            <span className="flex items-center gap-2">
                                <span className="bg-white text-[#228B22] px-2 py-0.5 rounded-full text-xs font-bold">MMG</span>
                                MAKE_MOVE_GROW
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="bg-white text-[#228B22] px-2 py-0.5 rounded-full text-xs font-bold">MMG</span>
                                MAKE_MOVE_GROW
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="bg-white text-[#228B22] px-2 py-0.5 rounded-full text-xs font-bold">MMG</span>
                                MAKE_MOVE_GROW
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="bg-white text-[#228B22] px-2 py-0.5 rounded-full text-xs font-bold">MMG</span>
                                MAKE_MOVE_GROW
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
