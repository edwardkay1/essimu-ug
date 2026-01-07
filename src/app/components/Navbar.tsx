"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // 1. Import Image component
import { 
    ShoppingCart, 
    Wrench, 
    Menu, 
    X, 
    ChevronRight,
} from 'lucide-react';
import { useCart } from "@/context/CartContext";
import { Order } from "../common/Buttons";

export default function Navbar() {
    const { totalItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Smartphones", href: "/shop/smartphones", label: "Original • New & UK Used", title: "Buy iPhones and Samsung in Uganda" },
        { name: "Laptops", href: "/shop/laptops", label: "Uk Used & New", title: "Pro Laptops for sale in Kampala" },
        { name: "Smart TVs", href: "/shop/tvs", label: "Smart & Android TVs", title: "Latest Smart TVs at Essimu" },
        { name: "Accessories", href: "/shop/accessories", label: "Chargers • Cables • AirPods", title: "Premium Phone Accessories" },
    ];

    return (
        <header className="sticky top-0 z-[100] w-full border-b border-gray-100 dark:border-white/5 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl transition-all">
            {/* --- SEO PROMO BAR --- */}
            <div className="bg-gray-900 py-2 text-center">
                <p className="text-[9px] font-black text-white uppercase tracking-[0.3em]">
                    <span className="text-[#0070f3]">Original Phones You Can Trust:</span> New & UK Used • Shop B118 Kisa Kyamaria
                </p>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
                
                {/* --- BRAND IDENTITY --- */}
                <Link href="/" className="flex items-center gap-3 group shrink-0" title="Essimu Uganda Home">
                    {/* Logo Container */}
                    <div className="relative size-11 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <Image 
                            src="/Image/essimulogo.png" 
                            alt="Essimu Logo" 
                            width={44} 
                            height={44} 
                            className="object-contain"
                            priority 
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <h1 className="text-gray-900 dark:text-white text-xl font-black leading-none tracking-tighter uppercase">ESSIMU</h1>
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#0070f3]">Phone Store</span>
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name}
                            href={item.href} 
                            title={item.title}
                            className="group flex flex-col items-start transition-all"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-900 dark:text-white group-hover:text-[#0070f3]">
                                {item.name}
                            </span>
                            <span className="text-[7px] font-black uppercase tracking-widest text-gray-400">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* --- ACTION BUTTONS --- */}
                <div className="flex items-center gap-3 lg:gap-5">
                    
                    <Link 
                        href="/repair" 
                        title="Professional Phone and Laptop Repair in Kampala"
                        className="hidden md:flex items-center gap-2 px-4 py-2.5 border-2 border-gray-900 dark:border-white rounded-2xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                    >
                        <Wrench size={14} className="group-hover:rotate-45 transition-transform" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Repair</span>
                    </Link>

                    <div className="hidden lg:block">
                        <Order />
                    </div>

                    <Link href="/cart" className="relative p-3 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-blue-50 transition-all group" aria-label="View Shopping Cart">
                        <ShoppingCart size={20} className="text-gray-900 dark:text-white group-hover:text-[#0070f3]" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0070f3] text-[9px] font-black text-white border-2 border-white dark:border-[#0a0a0a]">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-3 rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* --- MOBILE OVERLAY --- */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-white/5 animate-in slide-in-from-top duration-300 shadow-2xl">
                    <nav className="flex flex-col p-6 gap-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex justify-between items-center p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 group"
                            >
                                <div>
                                    <span className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white block">{item.name}</span>
                                    <span className="text-[9px] font-bold text-[#0070f3] uppercase tracking-tighter">{item.label}</span>
                                </div>
                                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#0070f3] transition-all" />
                            </Link>
                        ))}
                        <div className="h-[1px] bg-gray-100 dark:bg-white/5 my-4" />
                        <Link 
                            href="/repair" 
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between p-4 rounded-2xl bg-gray-900 text-white"
                        >
                            <span className="text-sm font-black uppercase tracking-widest">Repair Service</span>
                            <Wrench size={18} />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}