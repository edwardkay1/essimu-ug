"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ShoppingCart, Zap, BadgeCheck, ArrowUpRight, Loader2 } from "lucide-react";
// --- FIREBASE IMPORTS ---
import { db } from "@/lib/firebase"; 
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { useCart } from "@/context/CartContext";

const BestSellers = () => {
    const { addToCart } = useCart();
    const [liveProducts, setLiveProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // --- REAL-TIME DATA FETCH ---
    useEffect(() => {
        // Fetch last 40 items to ensure we have a good variety across categories
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"), limit(40));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setLiveProducts(items);
            setLoading(false);
        }, (error) => {
            console.error("Trending Picks Sync Error:", error);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // --- LOGIC: PICK ONE HOT ITEM PER CATEGORY ---
    const trendingPicks = useMemo(() => {
        if (liveProducts.length === 0) return [];
        
        const categories = ["Phone", "Laptop", "TV", "Accessory"];
        
        return categories.map(cat => {
            const catProducts = liveProducts.filter(p => p.category === cat);
            if (catProducts.length === 0) return null;
            // Pick the most recently added item for that category
            return catProducts[0]; 
        }).filter((p): p is any => p !== null);
    }, [liveProducts]);

    if (loading) return <BestSellersSkeleton />;

    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]" aria-labelledby="trending-heading">
            {/* --- SALES HEADING --- */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap size={14} className="text-[#0070f3] fill-[#0070f3]" />
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                            B118 Live Feed
                        </span>
                    </div>
                    <h2 id="trending-heading" className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[0.85] tracking-tighter uppercase">
                        Trending <br/> <span className="text-[#0070f3]">Top Deals!</span>
                    </h2>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Stock Node: Kampala</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-400 italic">
                        Real-time updates from Shop B118 inventory.
                    </p>
                </div>
            </div>

            {/* --- PRODUCT GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {trendingPicks.map((product, index) => (
                    <div key={product.id} className="group relative flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                        
                        {/* --- IMAGE PORTAL --- */}
                        <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/30 group-hover:-translate-y-2">
                            
                            <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-1">
                                <div className="bg-[#0070f3] text-white px-3 py-1 rounded-lg flex items-center gap-1 mb-2 shadow-lg">
                                    <BadgeCheck size={10} />
                                    <span className="text-[8px] font-black uppercase tracking-tighter">
                                        {product.condition}
                                    </span>
                                </div>
                                <span className="text-3xl font-black text-white tracking-tighter drop-shadow-md opacity-40 italic">
                                    0{index + 1}
                                </span>
                            </div>

                            {/* Product Image - Now using Cloudinary URL */}
                            {product.image ? (
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-8 transition-transform duration-1000 group-hover:scale-110 opacity-95 group-hover:opacity-100"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-300 uppercase font-black text-[10px]">No Image</div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                            {/* Hover CTA */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="px-8 py-4 bg-[#0070f3] text-white rounded-2xl shadow-2xl scale-90 group-hover:scale-100 transition-transform flex items-center gap-2 active:scale-95"
                                >
                                    <ShoppingCart size={14} strokeWidth={3} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add to Cart</span>
                                </button>
                            </div>
                        </div>

                        {/* --- PRODUCT INFO --- */}
                        <div className="flex justify-between items-start px-2">
                            <div className="min-w-0">
                                <div className="flex items-center gap-1.5 mb-1.5">
                                    <Zap size={8} className="text-[#0070f3] fill-[#0070f3]" />
                                    <span className="text-[8px] font-black text-[#0070f3] uppercase tracking-widest">
                                        Verified {product.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none group-hover:text-[#0070f3] transition-colors truncate">
                                    {product.name}
                                </h3>
                                <div className="mt-3 flex items-baseline gap-1">
                                    <span className="text-[10px] text-[#0070f3] font-black uppercase">UGX</span>
                                    <span className="text-xl font-black text-gray-900 dark:text-white tracking-tighter">
                                        {Number(product.price).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => addToCart(product)}
                                className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#0070f3] group-hover:text-white transition-all shadow-sm shrink-0"
                            >
                                <ArrowUpRight size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

function BestSellersSkeleton() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]">
            <div className="flex items-center gap-4 mb-12">
                 <Loader2 className="animate-spin text-[#0070f3]" size={20} />
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Syncing Hot Deals...</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-[3/4] bg-gray-50 dark:bg-white/[0.02] rounded-[2.5rem] animate-pulse" />
                ))}
            </div>
        </section>
    );
}

export default BestSellers;