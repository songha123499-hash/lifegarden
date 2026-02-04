import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplyContent from "@/components/ApplyContent";

export default function ApplyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-12 bg-gray-50/50">
                <div className="container px-4 md:px-6">
                    <ApplyContent />
                </div>
            </main>
            <Footer />
        </div>
    );
}
