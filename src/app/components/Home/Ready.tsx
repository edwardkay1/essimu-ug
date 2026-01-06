"use client";
import { MessageSquare, Zap, ArrowRight, MapPin } from "lucide-react";

export default function ReadySection() {
    const whatsappNumber = "256756922058";
    const shopLocation = "Shop B118, Kisa Kyamaria Building, William Street";
    
    const handleWhatsAppSync = () => {
        const message = encodeURIComponent("Hello Essimu Uganda, I've seen your catalog and I want to inquire about a phone/laptop.");
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <section className="px-6 lg:px-20 py-24 bg-white dark:bg-[#0a0a0a]" aria-labelledby="ready-to-sync">
            {/* --- HIGH-CONVERSION SALES CARD --- */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#004dc7] to-[#0070f3] rounded-[3.5rem] p-12 lg:p-24 text-center shadow-[0_40px_100px_-20px_rgba(0,112,243,0.4)] border border-white/10">
                
                {/* Visual Glows */}
                <div className="absolute -top-24 -left-24 size-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 size-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                    {/* SEO & Status Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
                        <div className="size-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                            Essimu Live Hub • Shop B118 Online
                        </span>
                    </div>

                    <h2 id="ready-to-sync" className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        Secure Your <br/> <span className="text-white/60">New Phone.</span>
                    </h2>
                    
                    <p className="text-blue-100 text-lg lg:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed italic">
                        The stock at William Street is moving fast. Sync with our sales agents via WhatsApp for instant pricing, Grade-A verification, and delivery.
                    </p>

                    {/* --- SALES ACTIONS --- */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button 
                            onClick={handleWhatsAppSync}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white text-[#0070f3] px-12 py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-[#f0f7ff] hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
                        >
                            <MessageSquare size={18} className="fill-[#0070f3] group-hover:rotate-12 transition-transform" />
                            Launch WhatsApp Sync
                        </button>

                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
                        >
                            Back to Index <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* SEO Location Footer */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-2 opacity-60">
                        <div className="flex items-center gap-2 text-white">
                            <MapPin size={14} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Kampala Sales Point</span>
                        </div>
                        <p className="text-[10px] text-blue-100 font-bold uppercase tracking-widest">{shopLocation}</p>
                    </div>
                </div>

                {/* Technical Watermark */}
                <Zap className="absolute bottom-[-20px] right-10 size-48 text-white/5 rotate-12 pointer-events-none" />
            </div>
        </section>
    );
}