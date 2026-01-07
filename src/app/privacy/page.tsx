"use client";
import { ShieldCheck, Lock, EyeOff, Database, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    const lastUpdated = "January 2026";

    const protocols = [
        {
            title: "Minimal Data",
            description: "We don’t save passwords, profiles, or browsing history. We only use the info needed for your current order.",
            icon: <EyeOff size={24} />
        },
        {
            title: "WhatsApp Security",
            description: "All chats and order talks happen over WhatsApp’s encrypted service. We do not store these messages on our website.",
            icon: <Lock size={24} />
        },
        {
            title: "Local Delivery Only",
            description: "Your address is shared only with our delivery team for the order. We never sell it to other companies.",
            icon: <Database size={24} />
        },
        {
            title: "Shop Safety",
            description: "Any device you leave at Shop B118 is handled with care. Data is wiped or protected as you request.",
            icon: <ShieldCheck size={24} />
        }
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0a0a] py-24 px-6 lg:px-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0070f3] mb-8 hover:gap-4 transition-all">
                        <ArrowLeft size={14} /> Back to Hub
                    </Link>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-[#0070f3]">
                            <ShieldCheck size={28} />
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-none">
                            Privacy <span className="text-gray-400">Shield.</span>
                        </h1>
                    </div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                        Last Update: {lastUpdated}
                    </p>
                </div>

                {/* Simple Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {protocols.map((p, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5">
                            <div className="text-[#0070f3] mb-6">{p.icon}</div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">{p.title}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                {p.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Rules */}
                <div className="space-y-16">
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                            <span className="text-[#0070f3]">01.</span> Data We Collect
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                            When you place an order, we only collect your name, phone number, and delivery address. This info is used just to deliver your device. We don’t track your activity on other sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                            <span className="text-[#0070f3]">02.</span> Device Privacy
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                            If you bring a device to Shop B118 for repair, our staff will not access your personal files unless necessary—and only with your permission. We recommend backing up and wiping your data before leaving it with us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                            <span className="text-[#0070f3]">03.</span> Your Rights
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                            You can ask to see the info we have about you or request its deletion. Since we don’t use accounts, most data is removed once your order at Shop B118 is completed.
                        </p>
                    </section>
                </div>

                {/* Contact */}
                <div className="mt-24 p-12 rounded-[3rem] bg-[#0070f3] text-white text-center">
                    <Share2 size={32} className="mx-auto mb-6 opacity-50" />
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Questions About Privacy?</h2>
                    <p className="text-sm font-bold text-white/70 uppercase tracking-widest mb-8">Contact our privacy officer directly</p>
                    <Link 
                        href="https://wa.me/256756922058"
                        className="inline-block bg-white text-[#0070f3] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                    >
                        Contact Privacy Team
                    </Link>
                </div>
            </div>
        </main>
    );
}
