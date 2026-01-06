"use client";
import { useState } from "react";
import { Wrench, Smartphone, Monitor, Zap, CheckCircle2, MessageSquare, Clock, Shield, X } from "lucide-react";
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
        const phone = "256700000000"; // Your Business Number
        const message = `*SERVICE SYNC REQUEST*\n--------------------------\n*Device:* ${formData.device}\n*Model:* ${formData.model}\n*Issue:* ${formData.issue}\n--------------------------\n_Sent via ESSIMU Web Portal_`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white min-h-screen relative">
            <Navbar />
            
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16">
                {/* HERO SECTION */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0070f3] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
                                Certified Technical Center
                            </span>
                            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.85] tracking-[-0.05em] mb-8">
                                Hardware <br/> <span className="text-[#0070f3]">Failure?</span>
                            </h1>
                            <p className="text-gray-500 font-bold text-lg max-w-md leading-relaxed">
                                High-precision engineering for your premium gear. Sync with a technician now.
                            </p>
                        </div>

                        {/* Updated Button to trigger Modal */}
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-4 px-10 py-6 bg-gray-900 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-black/20 hover:bg-[#0070f3] transition-all"
                        >
                            <MessageSquare size={20} /> Request Service Sync
                        </button>
                    </div>

                    {/* Feature Card */}
                    <div className="relative">
                        <div className="bg-[#0a0a0a] rounded-[3rem] p-12 text-white border border-white/5 shadow-3xl">
                             <h3 className="text-2xl font-black mb-8 uppercase tracking-tight flex items-center gap-3">
                                <Shield className="text-[#0070f3]" /> ESSIMU Standards
                            </h3>
                            <div className="space-y-6">
                                {["Express Diagnostics", "90 Day Warranty", "OEM Grade Parts"].map((text) => (
                                    <div key={text} className="flex items-center gap-4">
                                        <CheckCircle2 className="text-[#0070f3]" size={20} />
                                        <span className="text-sm font-black uppercase tracking-widest text-gray-300">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- REPAIR MODAL --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    <div 
                        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    />
                    
                    <div className="relative bg-white w-full max-w-lg rounded-[3rem] p-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Initialize Sync</h2>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Technician Assignment</p>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="p-3 hover:bg-gray-100 rounded-2xl transition-all">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-2 px-1">Device Type</label>
                                <select 
                                    required
                                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm font-bold outline-none focus:border-blue-600 transition-all appearance-none"
                                    onChange={(e) => setFormData({...formData, device: e.target.value})}
                                >
                                    <option value="">Select Device...</option>
                                    <option value="iPhone">iPhone / Smartphone</option>
                                    <option value="Laptop">MacBook / Laptop</option>
                                    <option value="TV">Smart TV</option>
                                    <option value="Audio">Audio Gear</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-2 px-1">Exact Model</label>
                                <input 
                                    required
                                    placeholder="e.g. iPhone 15 Pro Max"
                                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm font-bold outline-none focus:border-blue-600 transition-all"
                                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                                />
                            </div>

                            <div>
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-2 px-1">Problem Description</label>
                                <textarea 
                                    required
                                    placeholder="e.g. Broken screen, won't charge..."
                                    rows={3}
                                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm font-bold outline-none focus:border-blue-600 transition-all resize-none"
                                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
                            >
                                <MessageSquare size={18} /> Launch WhatsApp Sync
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}