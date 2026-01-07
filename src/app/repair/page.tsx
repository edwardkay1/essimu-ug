"use client";

import { useState } from "react";
import { Wrench, Zap, Shield, CheckCircle2, MessageSquare, MapPin, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RepairPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        device: "",
        model: "",
        issue: ""
    });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phone = "256756922058"; 
        const message = `*ESSIMU REPAIR REQUEST*\n--------------------------\n*Device:* ${formData.device}\n*Model:* ${formData.model}\n*Issue:* ${formData.issue}\n--------------------------\n_Sent via ESSIMU Repair Page_`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white dark:bg-[#0a0a0a] min-h-screen relative">
            <Navbar />
            
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
                {/* --- HERO SECTION --- */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Zap size={14} className="text-[#0070f3] fill-[#0070f3]" />
                                <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                                    Trusted Repair Hub
                                </span>
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.85] tracking-tighter mb-8 uppercase">
                                Phone or Laptop <br/> <span className="text-gray-400">Not Working?</span>
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 font-bold text-lg max-w-md leading-relaxed italic">
                                Fast, reliable repairs for phones, laptops, and TVs. Visit Shop B118 in Kampala or contact us directly on WhatsApp.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center justify-center gap-4 px-10 py-6 bg-[#0070f3] text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-blue-500/20 hover:scale-105 transition-all"
                            >
                                <Wrench size={18} /> Request Repair
                            </button>
                            <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                                <MapPin size={18} className="text-[#0070f3]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Shop B118, Kampala</span>
                            </div>
                        </div>
                    </div>

                    {/* Standards Card */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-600 rounded-[3.5rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                        <div className="relative bg-[#0a0a0a] rounded-[3.5rem] p-12 text-white border border-white/5 shadow-3xl">
                             <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter flex items-center gap-3">
                                <Shield className="text-[#0070f3]" /> Our Promise
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { label: "Quick Checks", sub: "Most repairs under 30 minutes" },
                                    { label: "90-Day Warranty", sub: "All replaced parts covered" },
                                    { label: "Original Parts", sub: "Apple, Samsung & LG verified" }
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-5">
                                        <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="text-[#0070f3]" size={14} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black uppercase tracking-widest text-white">{item.label}</p>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SERVICE STEPS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { step: "01", title: "Send Info", desc: "Tell us your device and problem." },
                        { step: "02", title: "Drop at Shop", desc: "Bring your device to Shop B118 or schedule a pickup." },
                        { step: "03", title: "Device Fixed", desc: "We repair quickly and safely with original parts." }
                    ].map((s) => (
                        <div key={s.step} className="p-10 bg-gray-50 dark:bg-[#111111] rounded-[2.5rem] border border-gray-100 dark:border-white/5">
                            <span className="text-4xl font-black text-[#0070f3]/20 mb-6 block">{s.step}</span>
                            <h4 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">{s.title}</h4>
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed uppercase">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </main>

            {/* --- REPAIR MODAL --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-6" role="dialog" aria-modal="true">
                    <div 
                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-xl"
                        onClick={() => setIsModalOpen(false)}
                    />
                    
                    <div className="relative bg-white dark:bg-[#0f0f0f] w-full max-w-lg rounded-[3rem] p-10 shadow-2xl overflow-hidden border border-white/10">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase flex items-center gap-2">
                                    <Shield /> Request Repair
                                </h2>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                                    Our technicians will contact you quickly.
                                </p>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="p-3 bg-gray-100 dark:bg-white/5 rounded-2xl hover:scale-110 transition-all dark:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">Device Type</label>
                                <select 
                                    required
                                    className="w-full bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 p-4 rounded-2xl text-sm font-bold outline-none focus:border-blue-600 transition-all dark:text-white"
                                    onChange={(e) => setFormData({...formData, device: e.target.value})}
                                >
                                    <option value="">Choose Device...</option>
                                    <option value="iPhone">Phone</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="TV">TV / Monitor</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">Model</label>
                                <input 
                                    required
                                    placeholder="e.g. MacBook Pro M2 14-inch"
                                    className="w-full bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 p-4 rounded-2xl text-sm font-bold outline-none focus:border-blue-600 transition-all dark:text-white"
                                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">Problem Description</label>
                                <textarea 
                                    required
                                    placeholder="Describe the issue in simple words"
                                    rows={3}
                                    className="w-full bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 p-4 rounded-2xl text-sm font-bold outline-none focus:border-blue-600 transition-all resize-none dark:text-white"
                                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                            >
                                <MessageSquare size={18} /> Contact Technician
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
