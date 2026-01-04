"use client";
import Link from "next/link";
import { Phone, Mail, Smartphone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-6 lg:px-20 pt-16 pb-8 bg-white dark:bg-[#0d1117] border-t border-gray-100 dark:border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#111418] dark:text-white font-bold text-xl">
                        <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600">
                            <Smartphone size={24} />
                        </div>
                        ESSIMU
                    </div>
                    <p className="text-[#606f85] dark:text-[#9ca3af] max-w-60 leading-relaxed">
                        The modern way to buy tech. Fast, simple, and direct via WhatsApp.
                    </p>
                </div>

                {/* Shop Links */}
                <div>
                    <h3 className="font-bold text-[#111418] dark:text-white mb-6">Shop</h3>
                    <ul className="flex flex-col gap-4 text-[#606f85] dark:text-[#9ca3af]">
                        <li><Link href="/shop/smartphones" className="hover:text-blue-600">Smartphones</Link></li>
                        <li><Link href="/shop/tablets" className="hover:text-blue-600">Tablets</Link></li>
                        <li><Link href="/shop/wearables" className="hover:text-blue-600">Wearables</Link></li>
                        <li><Link href="/shop/accessories" className="hover:text-blue-600">Accessories</Link></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="font-bold text-[#111418] dark:text-white mb-6">Support</h3>
                    <ul className="flex flex-col gap-4 text-[#606f85] dark:text-[#9ca3af]">
                        <li><Link href="/track-order" className="hover:text-blue-600">Track Order</Link></li>
                        <li><Link href="/returns" className="hover:text-blue-600">Returns Policy</Link></li>
                        <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-bold text-[#111418] dark:text-white mb-6">Contact</h3>
                    <ul className="flex flex-col gap-4 text-[#606f85] dark:text-[#9ca3af]">
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-gray-400" />
                            +1 (555) 123-4567
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-gray-400" />
                            support@essimu.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#606f85] dark:text-[#9ca3af]">
                <p>© {currentYear} ESSIMU. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}