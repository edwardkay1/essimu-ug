"use client";
import { useState } from "react";
import Link from "next/link";
import { 
    ShoppingCart, 
    Smartphone, 
    Wrench, 
    Menu, 
    X, 
    ChevronRight,
    MessageSquare
} from 'lucide-react';
import { useCart } from "../context/CartContext";
import { Order } from "../common/Buttons";

export default function Navbar() {
    const { totalItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Smartphones", href: "/shop/smartphones" },
        { name: "Laptops", href: "/shop/laptops" },
        { name: "Smart TVs", href: "/shop/tvs" },
        { name: "Accessories", href: "/shop/accessories" },
    ];

    return (
        <header className="sticky top-0 z-[100] w-full border-b border-gray-100 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl transition-all">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
                
                {/* --- LOGO --- */}
                <Link href="/" className="flex items-center gap-3 group shrink-0">
                    <div className="size-10 flex items-center justify-center rounded-2xl bg-[#0070f3] text-white shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                        <Smartphone size={22} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-gray-900 dark:text-white text-xl font-black leading-none tracking-tighter uppercase">ESSIMU</h2>
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#0070f3]">Uganda</span>
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name}
                            href={item.href} 
                            className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-[#0070f3] transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* --- ACTION BUTTONS --- */}
                <div className="flex items-center gap-3 lg:gap-6">
                    {/* Repair Button (Hidden on Small Mobile) */}
                    <Link 
                        href="/repair" 
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-2xl hover:bg-[#0070f3] transition-all group"
                    >
                        <Wrench size={16} className="group-hover:rotate-45 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Repair</span>
                    </Link>

                    {/* Order Component (Hidden on Mobile) */}
                    <div className="hidden lg:block">
                        <Order />
                    </div>

                    {/* Cart Icon */}
                    <Link href="/cart" className="relative p-3 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-blue-50 transition-all group">
                        <ShoppingCart size={20} className="text-gray-900 dark:text-white group-hover:text-[#0070f3]" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0070f3] text-[9px] font-black text-white border-2 border-white dark:border-[#0a0a0a]">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-3 rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* --- MOBILE OVERLAY MENU --- */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-white/5 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col p-6 gap-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex justify-between items-center p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 group transition-all"
                            >
                                <span className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">{item.name}</span>
                                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#0070f3] group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                        <div className="h-[1px] bg-gray-100 dark:bg-white/5 my-4" />
                        <Link 
                            href="/repair" 
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900 text-white"
                        >
                            <Wrench size={18} />
                            <span className="text-sm font-black uppercase tracking-widest">Hardware Repair</span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}