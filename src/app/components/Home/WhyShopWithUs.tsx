"use client";
import { UserMinus, MessageSquare, Truck, ShieldCheck, MapPin, Smartphone } from "lucide-react";

const protocols = [
    {
        title: "Zero Account Sync",
        description: "Bypass the database. We value your speed. Buy your next Essimu instantly as a guest—no registration required.",
        icon: <UserMinus className="size-6 group-hover:text-white transition-colors" />,
        tag: "Frictionless"
    },
    {
        title: "B118 Direct Link",
        description: "Connect instantly with our agents at Kisa Kyamaria. No bots, just real humans providing real-time tech pricing.",
        icon: <MessageSquare className="size-6 group-hover:text-white transition-colors" />,
        tag: "Kampala Local"
    },
    {
        title: "KLA Flash Logistics",
        description: "Doorstep delivery across Kampala. Your UK Used or New gear arrives at your office before the hype dies down.",
        icon: <Truck className="size-6 group-hover:text-white transition-colors" />,
        tag: "Speed"
    },
];

export default function WhyShopWithUs() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-white/5" aria-labelledby="protocol-title">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
                
                {/* --- SEO HEADER --- */}
                <div className="lg:col-span-1 space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Smartphone size={16} className="text-[#0070f3]" />
                            <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                                The Essimu Standard
                            </span>
                        </div>
                        <h2 id="protocol-title" className="text-4xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                            Why <br/> <span className="text-gray-400">Essimu?</span>
                        </h2>
                    </div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-relaxed uppercase tracking-tighter italic">
                        We’ve optimized the hardware acquisition pipeline at <span className="text-[#0070f3]">Shop B118</span> to be the fastest in the city.
                    </p>
                    <div className="pt-6 border-t border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <MapPin size={14} className="text-[#0070f3]" />
                            William St. Kampala
                        </div>
                    </div>
                </div>

                {/* --- PROTOCOL GRID --- */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {protocols.map((protocol, index) => (
                        <div 
                            key={index} 
                            className="group p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5 hover:border-[#0070f3] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="size-14 bg-white dark:bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#0070f3] text-[#0070f3] group-hover:text-white transition-all duration-300">
                                {protocol.icon}
                            </div>
                            
                            <span className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.3em] mb-3 block">
                                {protocol.tag}
                            </span>
                            
                            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 uppercase tracking-tighter">
                                {protocol.title}
                            </h3>
                            
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                {protocol.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}