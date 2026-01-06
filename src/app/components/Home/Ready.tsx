"use client";
import { MessageSquare, Zap, ArrowRight } from "lucide-react";

export default function ReadySection() {
    return (
        <section className="px-6 lg:px-20 py-24 bg-white dark:bg-[#0a0a0a]">
            {/* High-Impact Command Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#004dc7] to-[#0070f3] rounded-[3.5rem] p-12 lg:p-24 text-center shadow-[0_40px_100px_-20px_rgba(0,112,243,0.3)] border border-white/10">
                
                {/* Decorative Elements */}
                <div className="absolute -top-24 -left-24 size-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 size-64 bg-blue-400/20 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                    {/* Live Status Indicator */}
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
                        <div className="size-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                            System Online • Response Sync Active
                        </span>
                    </div>

                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        Ready to <br/> <span className="text-white/60">Upgrade?</span>
                    </h2>
                    
                    <p className="text-blue-100 text-lg lg:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed italic">
                        Our technical support team is currently synced and ready to assist your hardware acquisition. Start the protocol now.
                    </p>

                    {/* Action Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button 
                            onClick={() => window.open('https://wa.me/256700000000', '_blank')}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white text-[#0070f3] px-10 py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-2xl group"
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
                </div>

                {/* Technical Watermark */}
                <Zap className="absolute bottom-[-20px] right-10 size-48 text-white/5 rotate-12 pointer-events-none" />
            </div>
        </section>
    );
}