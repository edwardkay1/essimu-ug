"use client";
import Link from "next/link";
import { Phone, Mail, Smartphone, MapPin, ShieldCheck, Globe } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Re-usable link style for consistency
    const linkStyle = "text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#0070f3] transition-colors";

    return (
        <footer className="px-6 lg:px-20 pt-24 pb-12 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                
                {/* Brand Column */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-10 flex items-center justify-center rounded-2xl bg-[#0070f3] text-white shadow-lg shadow-blue-500/20">
                            <Smartphone size={22} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">ESSIMU</h2>
                            <span className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.3em]">Command</span>
                        </div>
                    </div>
                    <p className="text-sm font-bold text-gray-400 dark:text-gray-500 max-w-64 leading-relaxed italic">
                        The ultimate hardware acquisition pipeline. Fast, direct, and synced via WhatsApp.
                    </p>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-white/5 rounded-xl w-fit border border-gray-100 dark:border-white/5">
                        <Globe size={12} className="text-[#0070f3]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">KLA-HQ-SYNC</span>
                    </div>
                </div>

                {/* Index / Shop Links */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">Catalog Index</h3>
                    <ul className="flex flex-col gap-5">
                        <li><Link href="/shop/smartphones" className={linkStyle}>Smartphones</Link></li>
                        <li><Link href="/shop/tvs" className={linkStyle}>Smart TVs</Link></li>
                        <li><Link href="/shop/laptops" className={linkStyle}>Workstations</Link></li>
                        <li><Link href="/shop/accessories" className={linkStyle}>Accessories</Link></li>
                    </ul>
                </div>

                {/* Protocol / Support Links */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">The Protocol</h3>
                    <ul className="flex flex-col gap-5">
                        <li><Link href="/repair" className={linkStyle}>Repair Center</Link></li>
                        <li><Link href="/faq" className={linkStyle}>Hardware FAQ</Link></li>
                        <li><Link href="/terms" className={linkStyle}>Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Contact Interface */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">Direct Interface</h3>
                    <ul className="flex flex-col gap-6">
                        <li className="flex items-start gap-4">
                            <div className="size-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#0070f3] shrink-0">
                                <Phone size={16} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Hotline</p>
                                <p className="text-sm font-black text-gray-900 dark:text-white">+256 700 000 000</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="size-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#0070f3] shrink-0">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Base Hub</p>
                                <p className="text-sm font-black text-gray-900 dark:text-white">Kampala, Uganda</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Final Bottom Bar */}
            <div className="pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <ShieldCheck size={16} className="text-[#0070f3]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        © {currentYear} ESSIMU Command. All Hardware Synchronized.
                    </p>
                </div>
                
                <div className="flex gap-10">
                    <Link href="/privacy" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0070f3] transition-colors">Privacy Shield</Link>
                    <Link href="/terms" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0070f3] transition-colors">License Agreement</Link>
                </div>
            </div>
        </footer>
    );
}