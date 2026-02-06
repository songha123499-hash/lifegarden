"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function EventPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const hideUntil = localStorage.getItem('hidePopup_onone')
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
        localStorage.setItem('hidePopup_onone', tomorrow.getTime().toString())
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-sm sm:max-w-md w-full overflow-hidden flex flex-col transform transition-all animate-in zoom-in-95 duration-300">
                {/* Close Button top-right */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors z-10"
                >
                    <X className="w-5 h-5 drop-shadow-md" />
                </button>

                {/* Image */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] bg-gray-100">
                    <Image
                        src="/popup/onone.jpg"
                        alt="1월 원앤온 클래스"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 450px"
                    />
                </div>

                {/* Content */}
                <div className="p-4 space-y-4 bg-white">
                    <Link
                        href="/apply"
                        className="block w-full text-center py-3 px-4 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all text-lg shadow-lg hover:shadow-primary/25"
                    >
                        신청하기
                    </Link>

                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 pt-2 border-t">
                        <button
                            onClick={handleDontShowToday}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                        >
                            <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center">
                                {/* Empty box to signify checkbox */}
                            </div>
                            <span>24시간 동안 다시 보지 않기</span>
                        </button>
                        <button
                            onClick={handleClose}
                            className="font-medium hover:text-gray-900 px-2 py-1"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
