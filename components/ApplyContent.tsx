"use client"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { X, Calendar, Clock, MapPin, BookOpen } from 'lucide-react'

interface ApplyFormData {
    name: string
    phone: string
    time: string
    participants: string
    requests?: string
}

export default function ApplyContent() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ApplyFormData>()

    const onSubmit = async (data: ApplyFormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        console.log(data)
        toast.success('신청이 완료되었습니다!', {
            description: '담당자가 확인 후 연락드리겠습니다.'
        })
        setIsModalOpen(false)
        reset()
    }

    return (
        <>
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                        2026년 3월
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        🪴 3월 원앤온 클래스
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        봄날의 설렘, 배움의 즐거움을 함께하는 특별한 시간
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                            <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">1. 진행일</h3>
                        <p className="text-gray-600">
                            3월 10일, 13일, 17일, 20일 (화, 금)
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                            <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">2. 시간</h3>
                        <div className="space-y-1 text-gray-600">
                            <p>오후 2시</p>
                            <p>저녁 7시 30분</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                            <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">3. 장소</h3>
                        <p className="text-gray-600">
                            드림원 아카데미
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                            <BookOpen className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">4. 프로그램</h3>
                        <div className="space-y-3 text-gray-600">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">1교시: 원데이 클래스</p>
                                <p className="text-xs text-gray-500">롤온 향수, 샌드위치, 벌레 퇴치제, 손세정제</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">2교시: 온클래스 강의</p>
                                <p className="text-xs text-gray-500">이영자 강사님</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center pt-8">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-4 bg-primary text-primary-foreground text-xl font-bold rounded-full shadow-lg hover:bg-primary/90 hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-200"
                    >
                        신청하기
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setIsModalOpen(false)}></div>

                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
                        <div className="sticky top-0 bg-white/80 backdrop-blur-md px-6 py-4 border-b flex justify-between items-center z-10">
                            <h2 className="text-xl font-bold">3월 원앤온 클래스 신청</h2>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b pb-2">신청자 정보</h3>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            이름 <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...register("name", { required: true })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="이름을 입력하세요"
                                        />
                                        {errors.name && <span className="text-xs text-red-500">이름을 입력해주세요.</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none">
                                            연락처 <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex gap-2">
                                            <select className="h-10 w-24 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring">
                                                <option>010</option>
                                                <option>011</option>
                                                <option>016</option>
                                            </select>
                                            <input
                                                {...register("phone", { required: true })}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                                placeholder="0000-0000"
                                            />
                                        </div>
                                        {errors.phone && <span className="text-xs text-red-500">연락처를 입력해주세요.</span>}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b pb-2">신청 내용</h3>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none">
                                            희망 시간대 <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className="cursor-pointer">
                                                <input type="radio" value="14:00" {...register("time", { required: true })} className="peer sr-only" />
                                                <div className="border rounded-md p-3 text-center peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all hover:border-gray-300">
                                                    오후 2시
                                                </div>
                                            </label>
                                            <label className="cursor-pointer">
                                                <input type="radio" value="19:30" {...register("time", { required: true })} className="peer sr-only" />
                                                <div className="border rounded-md p-3 text-center peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all hover:border-gray-300">
                                                    저녁 7시 30분
                                                </div>
                                            </label>
                                        </div>
                                        {errors.time && <span className="text-xs text-red-500">시간을 선택해주세요.</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none">
                                            참가 인원 <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            {...register("participants", { required: true })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            defaultValue="1"
                                        >
                                            <option value="1">1명</option>
                                            <option value="2">2명</option>
                                            <option value="3">3명</option>
                                            <option value="4">4명</option>
                                            <option value="5">5명 이상</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b pb-2">추가 사항</h3>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none">
                                            요청사항
                                        </label>
                                        <textarea
                                            {...register("requests")}
                                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="특별한 요청사항이 있으시면 입력해주세요"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        닫기
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-[2] px-4 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-sm"
                                    >
                                        신청하기
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
