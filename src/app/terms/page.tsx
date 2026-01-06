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
                {/* --- HEADER --- */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 border-b border-gray-100 dark:border-white/5 pb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Gavel size={16} className="text-[#0070f3]" />
                            <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                                Legal Sync Protocol
                            </span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.85]">
                            Terms of <br/> <span className="text-gray-400">Service.</span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Last Synchronized</p>
                        <p className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">January {currentYear}</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* --- LEGAL SIDEBAR --- */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-800/20">
                            <Scale className="text-[#0070f3] mb-4" size={32} />
                            <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-2">Compliance</h3>
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 italic leading-relaxed">
                                By initiating an 'Order Sync' via WhatsApp or visiting Shop B118, you enter a binding hardware acquisition agreement with Essimu Uganda.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 px-6">
                            <ShieldAlert className="text-[#0070f3]" size={20} />
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Verified Merchant Status</span>
                        </div>
                    </div>

                    {/* --- MAIN LEGAL CONTENT --- */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 01. Orders */}
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">01.</span> Hardware Acquisition
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed mb-4 italic">
                                Essimu operates as a high-speed tech hub. Orders are only formalized once the WhatsApp Sync is completed with our agents at Kisa Kyamaria. 
                            </p>
                            <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                                Prices for iPhones, Laptops, and TVs are subject to global market volatility. We reserve the right to update pricing without notice until the deposit/payment is confirmed.
                            </p>
                        </section>

                        {/* 02. Warranty */}
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">02.</span> Technical Warranty
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">
                                    <span className="text-[#0070f3]">New Hardware:</span> Carries standard 1-year manufacturer warranty.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">
                                    <span className="text-[#0070f3]">UK Used (Grade-A):</span> Includes a 7-day technical checking warranty from Shop B118.
                                </p>
                                <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                                    Tampering, liquid damage, or software rooting by third-party technicians immediately voids all Essimu protection protocols.
                                </p>
                            </div>
                        </section>

                        {/* 03. Returns */}
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">03.</span> Exchange Policy
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed mb-4">
                                Exchanges are only accepted for verifiable manufacturer hardware defects within 48 hours of delivery/pickup.
                            </p>
                            <ul className="text-xs text-gray-400 space-y-2 uppercase tracking-widest font-black">
                                <li className="flex items-center gap-2">• Must include original B118 Receipt</li>
                                <li className="flex items-center gap-2">• Original packaging must be intact</li>
                                <li className="flex items-center gap-2">• No returns for "change of mind"</li>
                            </ul>
                        </section>

                        {/* Disclaimer Watermark */}
                        <div className="p-10 border-2 border-dashed border-gray-100 dark:border-white/5 rounded-[3rem] flex items-start gap-6 bg-gray-50/50 dark:bg-white/[0.02]">
                            <AlertCircle className="text-[#0070f3] shrink-0" size={24} />
                            <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-relaxed">
                                These terms are governed by the laws of the Republic of Uganda. For formal inquiries, visit the Base Hub at William Street, Kisa Kyamaria Building, Shop B118.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}