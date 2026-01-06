"use client";
import { UserMinus, MessageSquare, Truck, ShieldCheck } from "lucide-react";

const protocols = [
    {
        title: "Zero Account Sync",
        description: "Bypass the database. We value your speed over your data. Checkout instantly as a guest.",
        icon: <UserMinus className="size-6 text-[#0070f3]" />,
        tag: "Efficiency"
    },
    {
        title: "Direct WhatsApp Link",
        description: "Connect instantly with a human agent. No bots, no tickets—just real-time commerce.",
        icon: <MessageSquare className="size-6 text-[#0070f3]" />,
        tag: "Speed"
    },
    {
        title: "Flash Logistics",
        description: "Optimized delivery routes across Kampala. Your tech arrives before the hype dies down.",
        icon: <Truck className="size-6 text-[#0070f3]" />,
        tag: "Delivery"
    },
];

export default function WhyShopWithUs() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
                
                {/* Protocol Header */}
                <div className="lg:col-span-1 space-y-6">
                    <div>
                        <div className="size-2 bg-[#0070f3] rounded-full mb-4 animate-pulse" />
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                            The <br/> <span className="text-gray-400">Protocol.</span>
                        </h2>
                    </div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-relaxed uppercase tracking-tighter">
                        We stripped the complexity of traditional e-commerce to build the fastest hardware acquisition pipeline in the city.
                    </p>
                    <div className="pt-6">
                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <ShieldCheck size={14} className="text-[#0070f3]" />
                            Verified 2026 Standards
                        </div>
                    </div>
                </div>

                {/* Protocol Grid */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {protocols.map((protocol, index) => (
                        <div 
                            key={index} 
                            className="group p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5 hover:border-[#0070f3] transition-all duration-500"
                        >
                            <div className="size-14 bg-white dark:bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#0070f3] group-hover:text-white transition-all">
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