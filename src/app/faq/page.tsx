"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HelpCircle, MessageSquare, Zap, ShieldCheck, Truck, Smartphone } from "lucide-react";

const faqs = [
    {
        icon: <MessageSquare size={20} />,
        q: "How do I place an order?",
        a: "Browse our catalog, add items to your cart, and click 'Checkout on WhatsApp'. This syncs your order directly with our sales team at Shop B118, who will finalize payment and delivery with you."
    },
    {
        icon: <Smartphone size={20} />,
        q: "What does 'UK Used' Grade-A mean?",
        a: "Grade-A is our highest quality standard for pre-owned Essimu. These devices have zero to minimal scratches, 85%+ battery health, and have passed a 40-point technical hardware sync test."
    },
    {
        icon: <ShieldCheck size={20} />,
        q: "Are the products original?",
        a: "Absolutely. Whether you are buying New or UK Used, all hardware is verified original stock. We do not deal in clones or refurbished units. Every device is checked against global serial databases."
    },
    {
        icon: <Truck size={20} />,
        q: "What are the delivery timelines?",
        a: "For orders within Kampala, we offer 'Flash Logistics' (2-4 hours). Upcountry orders (Mbarara, Gulu, Jinja, etc.) are fulfilled within 24-48 hours via our regional transport partners."
    },
    {
        icon: <Zap size={20} />,
        q: "Do you offer warranties?",
        a: "Yes. All new hardware comes with a 1-year manufacturer warranty. Our UK Used Grade-A devices come with a standard Essimu Shop B118 checking warranty to ensure your hardware is friction-free."
    },
    {
        icon: <HelpCircle size={20} />,
        q: "Can I swap my old phone?",
        a: "We do offer trade-ins/swaps for specific models. Please bring your current device to Kisa Kyamaria Shop B118 for a physical valuation and technical sync."
    }
];

export default function FAQPage() {
    return (
        <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
            <Navbar />
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
                {/* Header Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="size-2 bg-[#0070f3] rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                            Support Intelligence
                        </span>
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.85] tracking-tighter mb-8 uppercase">
                        Knowledge <br/> <span className="text-gray-400">Base.</span>
                    </h1>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 max-w-lg uppercase tracking-tighter">
                        Everything you need to know about hardware acquisition at Essimu Uganda.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5 hover:border-[#0070f3] transition-all group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-12 rounded-2xl bg-white dark:bg-[#1a1a1a] text-[#0070f3] flex items-center justify-center shadow-sm group-hover:bg-[#0070f3] group-hover:text-white transition-all">
                                    {faq.icon}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Entry 0{i + 1}</span>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">{faq.q}</h3>
                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-relaxed italic">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Final CTA / Location Stamp */}
                <div className="mt-20 p-12 lg:p-20 bg-gradient-to-br from-[#0a0a0a] to-[#004dc7] rounded-[3.5rem] text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 size-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <h4 className="text-3xl lg:text-4xl font-black uppercase mb-4 tracking-tighter">Still have hardware questions?</h4>
                        <p className="text-blue-200 font-bold mb-10 italic max-w-md mx-auto">
                            Direct sales sync is available Mon-Sat, 08:30 - 19:00 EAT at Shop B118.
                        </p>
                        <button 
                            onClick={() => window.open('https://wa.me/256756922058', '_blank')}
                            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#0070f3] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform"
                        >
                            <MessageSquare size={16} className="fill-[#0070f3]" />
                            Contact Sales Support
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}