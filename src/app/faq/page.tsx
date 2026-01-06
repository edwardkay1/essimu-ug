"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HelpCircle, MessageSquare, Zap, ShieldCheck, Truck } from "lucide-react";

const faqs = [
    {
        icon: <MessageSquare size={20} />,
        q: "How do I place an order?",
        a: "Browse our catalog, add items to your cart, and click 'Checkout on WhatsApp'. This syncs your order details directly with our sales team who will finalize payment and delivery with you."
    },
    {
        icon: <Truck size={20} />,
        q: "What are the delivery timelines?",
        a: "For orders within Kampala, we offer 'Flash Logistics' (2-4 hours). Upcountry orders are typically fulfilled within 24-48 hours via our regional transport partners."
    },
    {
        icon: <ShieldCheck size={20} />,
        q: "Are the products original?",
        a: "Absolutely. All hardware—from iPhones to Laptops—is verified original stock. We do not deal in refurbished or 'fake' clones. Every device comes with a serial-sync warranty."
    },
    {
        icon: <Zap size={20} />,
        q: "How does the repair service work?",
        a: "Fill out the 'Service Sync' form on our Repair page. Once submitted, you'll be connected to a technician. You can then drop off your device at our Kampala hub or request a pickup."
    }
];

export default function FAQPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
                <div className="mb-20">
                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0070f3] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
                        Support Intelligence
                    </span>
                    <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter mb-8 uppercase">
                        Knowledge <br/> <span className="text-[#0070f3]">Base.</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-[#0070f3] transition-all group">
                            <div className="flex items-center gap-4 mb-6 text-[#0070f3]">
                                <div className="size-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                    {faq.icon}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Entry 0{i + 1}</span>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-4">{faq.q}</h3>
                            <p className="text-sm font-bold text-gray-500 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-20 p-12 bg-gray-900 rounded-[3rem] text-center text-white">
                    <h4 className="text-2xl font-black uppercase mb-4">Still need assistance?</h4>
                    <p className="text-gray-400 font-bold mb-8 italic">Direct sync is available 09:00 - 18:00 EAT</p>
                    <button 
                        onClick={() => window.open('https://wa.me/256700000000', '_blank')}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#0070f3] rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20"
                    >
                        Contact Human Support
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}