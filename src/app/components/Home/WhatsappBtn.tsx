"use client";
import { MessageSquare } from "lucide-react";

export default function WhatsappBtn() {
    const whatsappNumber = "256756922058";
    
    const handleLaunchSync = () => {
        const message = encodeURIComponent("Hello Essimu Uganda, I'm interested in the tech deals at Shop B118. Please send current stock and pricing.");
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-[150] flex items-center justify-center group">
            {/* --- LIVE STATUS RINGS --- */}
            <span className="absolute size-24 bg-[#25D366]/10 rounded-full animate-ping pointer-events-none" />
            <span className="absolute size-16 bg-[#25D366]/30 rounded-full animate-pulse pointer-events-none" />

            {/* --- HOVER TOOLTIP (Sales Trigger) --- */}
            <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-[9px] font-black uppercase tracking-[0.2em] py-2.5 px-5 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-2xl whitespace-nowrap border border-white/10">
                <span className="text-[#25D366]">Online:</span> Sync with B118 Hub
            </div>

            {/* --- MAIN INTERFACE BUTTON --- */}
            <button 
                onClick={handleLaunchSync} 
                className="relative w-16 h-16 bg-[#25D366] text-white rounded-[1.5rem] shadow-[0_15px_45px_rgba(37,211,102,0.5)] flex items-center justify-center hover:bg-[#128C7E] hover:rotate-[360deg] transition-all duration-700 overflow-hidden"
                aria-label="Direct Essimu Sales Sync"
            >
                {/* Premium Glossy Finish */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20 pointer-events-none" />
                
                {/* WhatsApp/Message Icon */}
                <MessageSquare 
                    size={28} 
                    className="relative z-10 fill-white stroke-none group-hover:scale-110 transition-transform" 
                    aria-hidden="true" 
                />
            </button>
        </div>
    );
}