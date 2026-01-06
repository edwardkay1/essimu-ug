"use client";
import Link from "next/link";
import { Phone, Mail, Smartphone, MapPin, ShieldCheck, Globe, Zap } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappNumber = "+256 756 922 058";

    // Re-usable link style for consistency
    const linkStyle = "text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#0070f3] transition-colors";

    return (
        <footer className="px-6 lg:px-20 pt-24 pb-12 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5" role="contentinfo">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                
                {/* --- SEO BRAND IDENTITY --- */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-11 flex items-center justify-center rounded-2xl bg-[#0070f3] text-white shadow-lg shadow-blue-500/20 transition-transform hover:rotate-6">
                            <Smartphone size={24} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">ESSIMU</h2>
                            <span className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.3em]">Uganda Hub</span>
                        </div>
                    </div>
                    <p className="text-sm font-bold text-gray-400 dark:text-gray-500 max-w-64 leading-relaxed italic">
                        Kampala's premier destination for New & UK Used tech. Verified hardware synced via Shop B118.
                    </p>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl w-fit border border-blue-100 dark:border-blue-800/20">
                        <Zap size={12} className="text-[#0070f3] fill-[#0070f3]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#0070f3]">B118-KLA-SYNC</span>
                    </div>
                </div>

                {/* --- CATALOG SEO LINKS --- */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">Catalog Index</h3>
                    <ul className="flex flex-col gap-5">
                        <li><Link href="/shop/smartphones" title="Shop New and UK Used iPhones" className={linkStyle}>Smartphones</Link></li>
                        <li><Link href="/shop/laptops" title="Buy High-Performance Laptops" className={linkStyle}>Workstations</Link></li>
                        <li><Link href="/shop/tvs" title="Smart TVs and Displays" className={linkStyle}>Smart TVs</Link></li>
                        <li><Link href="/shop/accessories" title="Original Apple and Samsung Accessories" className={linkStyle}>Accessories</Link></li>
                    </ul>
                </div>

                {/* --- SERVICE LINKS --- */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">Support Protocol</h3>
                    <ul className="flex flex-col gap-5">
                        <li><Link href="/repair" title="Professional Phone Repair Kampala" className={linkStyle}>Repair Center</Link></li>
                        <li><Link href="/faq" title="Tech and Hardware FAQ" className={linkStyle}>Hardware FAQ</Link></li>
                        <li><Link href="/terms" title="Essimu Uganda Terms" className={linkStyle}>Terms of Service</Link></li>
                    </ul>
                </div>

                {/* --- PHYSICAL BASE (Critical for Local SEO) --- */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">Physical Interface</h3>
                    <ul className="flex flex-col gap-6">
                        <li className="flex items-start gap-4">
                            <div className="size-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#0070f3] shrink-0">
                                <Phone size={16} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Hotline / WhatsApp</p>
                                <p className="text-sm font-black text-gray-900 dark:text-white">{whatsappNumber}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="size-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#0070f3] shrink-0">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Base Hub</p>
                                <p className="text-[11px] font-black text-gray-900 dark:text-white leading-tight">
                                    Shop B118, Kisa Kyamaria Building<br/>
                                    William Street, Kampala
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- BOTTOM COMPLIANCE BAR --- */}
            <div className="pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <ShieldCheck size={16} className="text-[#0070f3]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        © {currentYear} ESSIMU Uganda. All Tech Synchronized @ B118.
                    </p>
                </div>
                
                <div className="flex gap-10">
                    <Link href="/privacy" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0070f3] transition-colors">Privacy Shield</Link>
                    <Link href="/terms" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0070f3] transition-colors">Market License</Link>
                </div>
            </div>
        </footer>
    );
}