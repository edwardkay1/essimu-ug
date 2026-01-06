"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Zap, ShieldCheck, ChevronRight } from "lucide-react";
import { products } from "@/app/admin/data"; 
import { useCart } from "@/app/context/CartContext";

const BestSellers = () => {
    const { addToCart } = useCart();
    const [hasHydrated, setHasHydrated] = useState(false);

    // Trigger hydration flag on mount
    useEffect(() => {
        setHasHydrated(true);
    }, []);

    // Randomization logic moves into useMemo
    const trendingPicks = useMemo(() => {
        if (!products.length) return [];
        const categories = ["Phone", "Laptop", "TV", "Accessory"];
        
        return categories.map(cat => {
            const catProducts = products.filter(p => p.category === cat);
            if (catProducts.length === 0) return null;
            return catProducts[Math.floor(Math.random() * catProducts.length)];
        }).filter((p): p is any => p !== null); 
    }, []);

    // --- SKELETON STATE (Prevents Mismatch) ---
    if (!hasHydrated) {
        return <BestSellersSkeleton />;
    }

    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]" aria-labelledby="trending-heading">
            {/* --- SALES HEADING --- */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl animate-in fade-in slide-in-from-bottom duration-700">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap size={14} className="text-[#0070f3] fill-[#0070f3] animate-pulse" />
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                            Essimu Live Market Sync
                        </span>
                    </div>
                    <h2 id="trending-heading" className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[0.85] tracking-tighter uppercase">
                        Trending <br/> <span className="text-[#0070f3]">Top Deals.</span>
                    </h2>
                </div>
                <div className="hidden md:block border-l-4 border-[#0070f3] pl-6 mb-2">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Shop B118 Verified</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-400 italic leading-tight">
                        Best value New & UK Used gear, <br/> handpicked for Kampala's elite.
                    </p>
                </div>
            </div>

            {/* --- PRODUCT GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {trendingPicks.map((product) => (
                    <div key={product.id} className="group bg-white dark:bg-[#111111] rounded-[3rem] overflow-hidden border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/10 hover:-translate-y-3 flex flex-col">
                        
                        {/* Image Area */}
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-50 dark:bg-[#161616]">
                            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-xl">
                                <ShieldCheck size={12} className="text-green-500" />
                                <span className="text-[9px] font-black text-gray-900 dark:text-white uppercase tracking-widest">
                                    B118 Original
                                </span>
                            </div>

                            <div className="h-full w-full flex items-center justify-center p-10 relative">
                                <div className="absolute text-gray-200/40 dark:text-white/[0.03] font-black text-[10rem] select-none tracking-tighter pointer-events-none uppercase">
                                    {product.brand[0]}
                                </div>
                                {product.image && (
                                    <Image 
                                        src={product.image} 
                                        alt={`Buy ${product.name} - ${product.condition} Essimu at Kisa Kyamaria Kampala`} 
                                        fill
                                        className="object-contain p-10 transition-transform duration-700 group-hover:scale-110" 
                                    /> 
                                )}
                            </div>
                            
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <span className="px-5 py-2.5 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-widest shadow-2xl">
                                    Grade: {product.condition}
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-10 flex flex-col flex-grow">
                            <div className="mb-6">
                                <p className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.2em] mb-2">{product.category}</p>
                                <h3 className="font-black text-gray-900 dark:text-white leading-tight text-2xl tracking-tighter uppercase group-hover:text-[#0070f3] transition-colors">
                                    {product.name}
                                </h3>
                            </div>
                            
                            <div className="flex items-center gap-2 mb-8">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-2">Verified Stock</span>
                            </div>

                            <div className="mt-auto flex justify-between items-end">
                                <div className="space-y-1">
                                    <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Investment</p>
                                    <p className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
                                        <span className="text-[10px] text-[#0070f3] mr-1">UGX</span>
                                        {product.price.toLocaleString()}
                                    </p>
                                </div>
                                
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="size-16 rounded-[1.5rem] bg-[#0070f3] text-white flex items-center justify-center hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 active:scale-90" 
                                >
                                    <ShoppingCart size={24} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- PRE-HYDRATION SKELETON ---
function BestSellersSkeleton() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]">
            <div className="h-32 w-full max-w-lg bg-gray-100 dark:bg-white/5 rounded-[2rem] mb-16 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-[4/7] bg-gray-50 dark:bg-white/[0.02] rounded-[3rem] animate-pulse" />
                ))}
            </div>
        </section>
    );
}

export default BestSellers;