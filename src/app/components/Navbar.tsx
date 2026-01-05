"use client";
import Link from "next/link";
import { ShoppingCart, Smartphone } from 'lucide-react';
import { Order } from "../common/Buttons";
import { useCart } from "../context/CartContext"; //

export default function Navbar() {
    const { totalItems } = useCart(); // Get real-time count from context

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbe0e6] dark:border-[#2a3441] bg-white dark:bg-[#111418] px-10 py-3 shadow-sm">
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2 text-[#111418] dark:text-white cursor-pointer">
                    <div className="size-8 flex items-center justify-center rounded-lg bg-[#0070f3]/10 text-[#0070f3]">
                        <Smartphone className="w-5 h-5"/>
                    </div>
                    <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-tight">ESSIMU</h2>
                </Link>
                
                <div className="hidden md:flex items-center gap-6">
                    <Link className="text-[#111418] dark:text-[#d1d5db] text-sm font-medium hover:text-[#0070f3] transition-colors leading-normal" href="/shop/smartphones">Phones</Link>
                    <Link className="text-[#111418] dark:text-[#d1d5db] text-sm font-medium hover:text-[#0070f3] transition-colors leading-normal" href="/shop/accessories">Accessories</Link>
                    <Link className="text-[#111418] dark:text-[#d1d5db] text-sm font-medium hover:text-[#0070f3] transition-colors leading-normal" href="#">Support</Link>
                </div>
            </div>

            <div className="flex flex-1 justify-end gap-6 items-center">
                <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-xs w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full group focus-within:ring-2 focus-within:ring-[#0070f3]/50 transition-all">
                        <input 
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] dark:bg-[#1a232e] h-full placeholder:text-[#60758a] px-4 text-sm font-normal leading-normal" 
                            placeholder="Search phones..." 
                        />
                    </div>
                </label>

                <Order />

                {/* Dynamic Shopping Cart Link */}
                <Link 
                    href="/cart"
                    className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    aria-label="View Cart"
                >
                    <ShoppingCart className="w-6 h-6 text-[#111418] dark:text-white group-hover:text-[#0070f3] transition-colors" />
                    
                    {/* Only show badge if there are items in the cart */}
                    {totalItems > 0 && (
                        <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#0070f3] text-[10px] font-bold text-white border-2 border-white dark:border-[#111418] animate-in zoom-in duration-300">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
}