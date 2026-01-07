"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ShieldCheck, Zap } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faTiktok, 
    faInstagram, 
    faXTwitter, 
    faFacebookF 
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappNumber = "+256 756 922 058";

    const linkStyle = "text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#0070f3] transition-colors";
    const socialIconStyle = "size-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0070f3] hover:text-white transition-all duration-300 shadow-sm";

    return (
        <footer className="px-6 lg:px-20 pt-24 pb-12 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5" role="contentinfo">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                
                {/* --- BRAND INFO & ADMIN LINK --- */}
                <div className="flex flex-col gap-6">
                    {/* Wrap the logo and brand in a link to /admin */}
                    <Link href="/admin" className="flex items-center gap-3 group w-fit">
                        <div className="relative size-12 flex items-center justify-center transition-transform group-hover:scale-110">
                            <Image 
                                src="/Image/essimulogo.png" 
                                alt="Essimu Logo" 
                                width={48} 
                                height={48} 
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter leading-none group-hover:text-[#0070f3] transition-colors">
                                ESSIMU
                            </h2>
                            <span className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.3em]">Uganda Hub</span>
                        </div>
                    </Link>

                    <p className="text-sm font-bold text-gray-400 dark:text-gray-500 max-w-64 leading-relaxed italic">
                        Your trusted shop for New & UK Used phones, laptops, and accessories in Kampala. Visit Shop B118 for verified stock.
                    </p>
                    
                    {/* --- SOCIAL ICONS --- */}
                    <div className="flex gap-3">
                        <Link href="#" aria-label="TikTok" className={socialIconStyle}>
                            <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
                        </Link>
                        <Link href="#" aria-label="Instagram" className={socialIconStyle}>
                            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                        </Link>
                        <Link href="#" aria-label="X (Twitter)" className={socialIconStyle}>
                            <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
                        </Link>
                        <Link href="#" aria-label="Facebook" className={socialIconStyle}>
                            <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl w-fit border border-blue-100 dark:border-blue-800/20">
                        <Zap size={12} className="text-[#0070f3] fill-[#0070f3]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#0070f3]">B118 – Kampala Hub</span>
                    </div>
                </div>

                {/* --- SHOP SECTIONS --- */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">Shop</h3>
                    <ul className="flex flex-col gap-5">
                        <li><Link href="/shop/smartphones" className={linkStyle}>Phones</Link></li>
                        <li><Link href="/shop/laptops" className={linkStyle}>Laptops</Link></li>
                        <li><Link href="/shop/tvs" className={linkStyle}>TVs</Link></li>
                        <li><Link href="/shop/accessories" className={linkStyle}>Accessories</Link></li>
                    </ul>
                </div>

                {/* --- SUPPORT --- */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">Help & Repairs</h3>
                    <ul className="flex flex-col gap-5">
                        <li><Link href="/repair" className={linkStyle}>Repair Services</Link></li>
                        <li><Link href="/faq" className={linkStyle}>FAQs</Link></li>
                        <li><Link href="/terms" className={linkStyle}>Terms & Policies</Link></li>
                    </ul>
                </div>

                {/* --- CONTACT & LOCATION --- */}
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/5 pb-2">Contact Us</h3>
                    <ul className="flex flex-col gap-6">
                        <li className="flex items-start gap-4">
                            <div className="size-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#0070f3] shrink-0">
                                <Phone size={16} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">WhatsApp / Hotline</p>
                                <p className="text-sm font-black text-gray-900 dark:text-white">{whatsappNumber}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="size-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#0070f3] shrink-0">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Shop Location</p>
                                <p className="text-[11px] font-black text-gray-900 dark:text-white leading-tight">
                                    Shop B118, Kisa Kyamaria Building<br/>
                                    William Street, Kampala
                                </p>
                                <p className="text-[10px] font-black text-[#0070f3] uppercase tracking-widest mt-1">Walk-ins Welcome!</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- BOTTOM BAR --- */}
            <div className="pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <ShieldCheck size={16} className="text-[#0070f3]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        © {currentYear} ESSIMU Uganda. Original Phones & Trusted Service at Shop B118.
                    </p>
                </div>
                
                <div className="flex gap-10">
                    <Link href="/privacy" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0070f3] transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0070f3] transition-colors">Terms & Service</Link>
                </div>
            </div>
        </footer>
    );
}