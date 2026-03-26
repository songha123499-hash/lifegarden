"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Calendar, Clock, Sparkles, MapPin } from 'lucide-react'

export default function EventPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const hideUntil = localStorage.getItem('hidePopup_onone_april')
        if (!hideUntil || new Date().getTime() > parseInt(hideUntil)) {
            setIsOpen(true)
        }
    }, [])

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleDontShowToday = () => {
        const tomorrow = new Date()
        tomorrow.setHours(tomorrow.getHours() + 24)
        localStorage.setItem('hidePopup_onone_april', tomorrow.getTime().toString())
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-6 animate-in fade-in duration-300">
            <div className="relative bg-[#fcfbf9] rounded-[24px] shadow-2xl w-full max-w-[340px] max-h-[90vh] overflow-y-auto flex flex-col transform transition-all animate-in zoom-in-95 duration-300 border border-stone-200/50">
                {/* Close Button top-right */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 p-2 bg-black/10 hover:bg-black/20 rounded-full text-white sm:text-stone-500 transition-colors z-20 active:scale-95"
                    aria-label="닫기"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="relative w-full aspect-[4/5] bg-stone-100">
                    <Image
                        src="/popup/onone_april.jpg"
                        alt="4월 원앤온 클래스"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 320px"
                        priority
                    />
                    {/* Gradient overlay for text readability blending */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fcfbf9] via-[#fcfbf9]/80 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="px-5 pb-6 -mt-16 relative z-10 space-y-4">
                    <div className="space-y-3 text-stone-700 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-stone-100">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-emerald-50 rounded-lg">
                                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-[8px] font-bold text-stone-400 uppercase tracking-[0.15em] leading-none mb-1">진행일</p>
                                <p className="text-[11px] font-bold text-stone-800">4/7, 10, 14, 17일 (화, 금)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 border-t border-stone-50 pt-2.5">
                            <div className="p-1.5 bg-emerald-50 rounded-lg">
                                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-[8px] font-bold text-stone-400 uppercase tracking-[0.15em] leading-none mb-1">시간</p>
                                <p className="text-[11px] font-bold text-stone-800">오전 10:30 / 오후 2:00 / 저녁 7:30</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 border-t border-stone-50 pt-2.5">
                            <div className="p-1.5 bg-emerald-50 rounded-lg">
                                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-[8px] font-bold text-stone-400 uppercase tracking-[0.15em] leading-none mb-1">장소</p>
                                <p className="text-[11px] font-bold text-stone-800">더자람 아카데미<span className="text-[10px] text-stone-500 font-medium"> (남구 독립로4, 2층)</span></p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 border-t border-stone-50 pt-2.5">
                            <div className="p-1.5 bg-emerald-50 rounded-lg mt-0.5">
                                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <div className="space-y-1 w-full">
                                <p className="text-[8px] font-bold text-stone-400 uppercase tracking-[0.15em] leading-none mb-1">프로그램</p>
                                <div className="space-y-1 w-full">
                                    <p className="text-[11px] text-stone-800 leading-tight">
                                        <span className="text-emerald-700 font-extrabold">1교시:</span> 원데이 클래스
                                        <span className="block text-[10px] text-stone-500 font-medium leading-snug mt-0.5 break-keep"> (손 세정제, 향수, 샌드위치, 천연 로션)</span>
                                    </p>
                                    <p className="text-[11px] text-stone-800 font-bold leading-tight pt-1">
                                        <span className="text-emerald-700 font-extrabold">2교시:</span> 온클래스 강의
                                        <span className="block text-[10px] text-stone-500 font-medium mt-0.5"> (특별 강연)</span>
                                    </p>
                                </div>
                                <div className="mt-3 text-[10px] bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/50 w-full">
                                    <p className="text-stone-700 font-bold mb-0.5 text-[10px]">*원데이클래스 체험재료비: 2만원</p>
                                    <p className="text-stone-500 text-[10px] tracking-tight break-all">카카오뱅크 3333-33-7846805 (이미현)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/apply"
                        className="block w-full text-center py-3.5 px-4 rounded-xl bg-emerald-700 text-white font-bold hover:bg-emerald-800 active:bg-emerald-900 transition-all text-sm shadow-lg shadow-emerald-900/10 active:scale-[0.97]"
                    >
                        신청하기
                    </Link>

                    <div className="flex justify-between items-center px-1">
                        <button
                            onClick={handleDontShowToday}
                            className="flex items-center gap-2 group outline-none"
                        >
                            <div className="w-3.5 h-3.5 border border-stone-300 rounded-sm flex items-center justify-center transition-all group-active:scale-90 group-hover:bg-stone-50 bg-white" />
                            <span className="text-[10px] text-stone-400 font-medium tracking-tight">오늘 하루 보지 않기</span>
                        </button>
                        <button
                            onClick={handleClose}
                            className="text-[10px] text-stone-400 font-bold hover:text-stone-600 transition-colors px-1 h-8 flex items-center"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

