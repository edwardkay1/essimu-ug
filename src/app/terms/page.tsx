"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, Scale, AlertCircle, ShieldAlert, Gavel } from "lucide-react";

export default function TermsPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
            <Navbar />
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
                
                {/* HEADER */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 border-b border-gray-100 dark:border-white/5 pb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Gavel size={16} className="text-[#0070f3]" />
                            <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                                Legal Info
                            </span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.85]">
                            Terms of <br/> <span className="text-gray-400">Service.</span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Last Updated</p>
                        <p className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">January {currentYear}</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">

                    {/* SIDEBAR */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-800/20">
                            <Scale className="text-[#0070f3] mb-4" size={32} />
                            <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-2">Agreement</h3>
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 italic leading-relaxed">
                                By ordering through WhatsApp or visiting Shop B118, you agree to buy hardware from Essimu Uganda.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 px-6">
                            <ShieldAlert className="text-[#0070f3]" size={20} />
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Verified Seller</span>
                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* 01. Orders */}
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">01.</span> Placing an Order
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed mb-4 italic">
                                Orders are only confirmed once you chat with our team on WhatsApp at Shop B118.
                            </p>
                            <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                                Prices may change until payment is confirmed. This applies to phones, laptops, and TVs.
                            </p>
                        </section>

                        {/* 02. Warranty */}
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">02.</span> Warranty
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">
                                    <span className="text-[#0070f3]">New Devices:</span> Comes with a 1-year manufacturer warranty.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">
                                    <span className="text-[#0070f3]">UK Used Devices:</span> Includes a 7-day check warranty from Shop B118.
                                </p>
                                <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                                    Damaged or tampered devices void all warranties.
                                </p>
                            </div>
                        </section>

                        {/* 03. Returns */}
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">03.</span> Returns & Exchanges
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed mb-4">
                                Only defective devices can be exchanged within 48 hours of delivery.
                            </p>
                            <ul className="text-xs text-gray-400 space-y-2 uppercase tracking-widest font-black">
                                <li className="flex items-center gap-2">• Original B118 receipt required</li>
                                <li className="flex items-center gap-2">• Packaging must be intact</li>
                                <li className="flex items-center gap-2">• No returns for change of mind</li>
                            </ul>
                        </section>

                        {/* DISCLAIMER */}
                        <div className="p-10 border-2 border-dashed border-gray-100 dark:border-white/5 rounded-[3rem] flex items-start gap-6 bg-gray-50/50 dark:bg-white/[0.02]">
                            <AlertCircle className="text-[#0070f3] shrink-0" size={24} />
                            <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-relaxed">
                                These rules follow the laws of Uganda. Visit Shop B118, Kisa Kyamaria, for formal inquiries.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
