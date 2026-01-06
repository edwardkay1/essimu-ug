"use client";
import { MessageSquare } from "lucide-react";

export default function WhatsappBtn() {
    return (
        <div className="fixed bottom-8 right-8 z-[90] flex items-center justify-center">
            {/* Pulsing "Live" Effect Rings */}
            <span className="absolute size-20 bg-[#25D366]/20 rounded-full animate-ping pointer-events-none" />
            <span className="absolute size-16 bg-[#25D366]/40 rounded-full animate-pulse pointer-events-none" />

            {/* Main Button */}
            <button 
                onClick={() => window.open('https://wa.me/256700000000', '_blank')} 
                className="relative w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#128C7E] hover:scale-110 active:scale-90 transition-all duration-300 group overflow-hidden"
                aria-label="Direct WhatsApp Sync"
            >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                
                {/* Icon (Switched to Lucide for consistency with your other icons) */}
                <MessageSquare 
                    size={30} 
                    className="relative z-10 fill-white group-hover:rotate-12 transition-transform duration-300" 
                    aria-hidden="true" 
                />

                {/* Subtle "Direct" Tooltip that appears on hover */}
                <div className="absolute -top-12 right-0 bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Protocol: Direct Sync
                </div>
            </button>
        </div>
    );
}