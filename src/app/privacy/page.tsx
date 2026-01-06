"use client";
import { ShieldCheck, Lock, EyeOff, Database, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    const lastUpdated = "January 2026";

    const protocols = [
        {
            title: "Data Minimization",
            description: "Because we offer 'Zero Account Sync', we do not store passwords, profile data, or long-term behavioral tracking. We only process what is needed for your current order.",
            icon: <EyeOff size={24} />
        },
        {
            title: "WhatsApp Encryption",
            description: "All order negotiations and technical support happen over WhatsApp's end-to-end encrypted protocol. Essimu does not keep logs of these chats on our web servers.",
            icon: <Lock size={24} />
        },
        {
            title: "Local Logistics Only",
            description: "Your delivery address is only shared with our verified KLA logistics partners for the duration of the delivery. It is never sold to third-party marketing databases.",
            icon: <Database size={24} />
        },
        {
            title: "Secure Shop B118",
            description: "Physical transactions at our Kisa Kyamaria hub are handled with strict confidentiality. Any hardware dropped for repair is wiped or protected as per your request.",
            icon: <ShieldCheck size={24} />
        }
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0a0a] py-24 px-6 lg:px-20 relative overflow-hidden">
            {/* Background Glows */}
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
                        Protocol v2.6 • Last Synchronized: {lastUpdated}
                    </p>
                </div>

                {/* The "Why We Are Different" Section */}
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

                {/* Detailed Clauses */}
                <div className="space-y-16">
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                            <span className="text-[#0070f3]">01.</span> Data Collection
                        </h2>
                        <div className="prose prose-sm dark:prose-invert max-w-none text-gray-500 dark:text-gray-400 font-medium">
                            <p>
                                When you initiate a <strong>Sales Sync</strong> (WhatsApp order), we collect your name, phone number, and delivery location. This data is used exclusively to facilitate the hardware exchange. We do not use persistent cookies to track your behavior across other websites.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                            <span className="text-[#0070f3]">02.</span> Hardware Privacy
                        </h2>
                        <div className="prose prose-sm dark:prose-invert max-w-none text-gray-500 dark:text-gray-400 font-medium">
                            <p>
                                For customers utilizing our <strong>Repair Center at Shop B118</strong>, Essimu staff will never access your private data (photos, messages, or files) unless strictly required for technical testing—and only then with your explicit verbal or written consent. We recommend backing up and wiping sensitive data before hardware drop-off.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                            <span className="text-[#0070f3]">03.</span> User Rights
                        </h2>
                        <div className="prose prose-sm dark:prose-invert max-w-none text-gray-500 dark:text-gray-400 font-medium">
                            <p>
                                Under the <em>Data Protection and Privacy Act of Uganda</em>, you have the right to request a copy of the info we hold about you or ask us to delete it. Since we don't use accounts, most data is cleared once the transaction at <strong>Kisa Kyamaria</strong> is finalized.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Contact Footer */}
                <div className="mt-24 p-12 rounded-[3rem] bg-[#0070f3] text-white text-center">
                    <Share2 size={32} className="mx-auto mb-6 opacity-50" />
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Privacy Inquiry?</h2>
                    <p className="text-sm font-bold text-white/70 uppercase tracking-widest mb-8">Direct line to our privacy officer</p>
                    <Link 
                        href="https://wa.me/256756922058"
                        className="inline-block bg-white text-[#0070f3] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                    >
                        Contact Privacy Sync
                    </Link>
                </div>
            </div>
        </main>
    );
}