"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, Scale, AlertCircle } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 border-b border-gray-100 pb-16">
                    <div>
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em] mb-4 block">ESSIMU Protocol</span>
                        <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">Terms of <br/> <span className="text-gray-400">Service.</span></h1>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Last Updated</p>
                        <p className="text-lg font-black text-gray-900 uppercase tracking-tight">January 2026</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Legal Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                            <Scale className="text-[#0070f3] mb-4" size={32} />
                            <h3 className="text-lg font-black text-gray-900 uppercase tracking-tighter mb-2">Legal Compliance</h3>
                            <p className="text-xs font-bold text-gray-500 italic">By initiating an 'Order Sync' via WhatsApp, you agree to the protocols outlined in this document.</p>
                        </div>
                    </div>

                    {/* Main Legal Content */}
                    <div className="lg:col-span-2 space-y-16">
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">01.</span> Order Fulfillment
                            </h2>
                            <p className="text-gray-500 font-bold leading-relaxed mb-4">
                                ESSIMU operates as a direct-to-consumer tech hub. Orders placed on this site are formalized only once the 'WhatsApp Sync' is completed. Prices listed are subject to change based on global market fluctuations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">02.</span> Hardware Warranty
                            </h2>
                            <p className="text-gray-500 font-bold leading-relaxed">
                                All new hardware carries a standard manufacturer's warranty. For repair services, we provide a 90-day technical warranty on the specific part replaced. Any tampering by third-party technicians voids our 'ESSIMU Sync' protection.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                                <span className="text-[#0070f3]">03.</span> Returns & Refunds
                            </h2>
                            <p className="text-gray-500 font-bold leading-relaxed">
                                Due to the premium nature of our hardware, returns are only accepted for manufacturer defects within 48 hours of delivery. Items must be in original, unsealed packaging for a full exchange.
                            </p>
                        </section>

                        <div className="p-10 border-2 border-dashed border-gray-100 rounded-[2.5rem] flex items-start gap-6">
                            <AlertCircle className="text-gray-400 shrink-0" size={24} />
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                                For full legal documentation or disputes, please contact our legal synchronization team at support@essimu.com.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}