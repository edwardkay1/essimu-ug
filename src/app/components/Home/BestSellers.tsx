"use client";
import { useMemo } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Zap, TrendingUp } from "lucide-react";
import { products } from "@/app/admin/data"; 
import { useCart } from "@/app/context/CartContext";

const BestSellers = () => {
    const { addToCart } = useCart();

    // Logic to pick 1 random product from each category
    const trendingPicks = useMemo(() => {
        const categories = ["Phone", "Laptop", "TV", "Accessory"];
        
        return categories.map(cat => {
            const catProducts = products.filter(p => p.category === cat);
            return catProducts[Math.floor(Math.random() * catProducts.length)];
        }).filter(Boolean); 
    }, []);

    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]">
            {/* Heading Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="size-2 bg-[#0070f3] rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                            Global Market Sync
                        </span>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                        Trending <br/> <span className="text-gray-400">Picks.</span>
                    </h2>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Algorithm Update</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-400 italic leading-tight">
                        One top pick from every category, <br/> calibrated every 24 hours.
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {trendingPicks.map((product) => (
                    <div key={product.id} className="group bg-white dark:bg-[#111111] rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 flex flex-col">
                        
                        {/* Image/Preview Area */}
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-50 dark:bg-[#161616]">
                            {/* Category Badge */}
                            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-xl">
                                <TrendingUp size={10} className="text-[#0070f3]" />
                                <span className="text-[9px] font-black text-gray-900 dark:text-white uppercase tracking-widest">
                                    {product.category}
                                </span>
                            </div>

                            {/* Stock Image or Placeholder */}
                            <div className="h-full w-full flex items-center justify-center p-10 relative">
                                <div className="absolute text-gray-200/50 dark:text-white/5 font-black text-9xl select-none tracking-tighter pointer-events-none">
                                    {product.brand[0]}
                                </div>
                                {product.image && (
                                    <Image 
                                        src={product.image} 
                                        alt={product.name} 
                                        fill
                                        className="object-contain p-8 transition-transform duration-700 group-hover:scale-110" 
                                    /> 
                                )}
                            </div>
                            
                            {/* Condition Tag Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <span className="px-3 py-1.5 rounded-lg bg-[#0070f3] text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
                                    {product.condition}
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-black text-gray-900 dark:text-white leading-none text-xl tracking-tighter uppercase group-hover:text-[#0070f3] transition-colors">
                                    {product.name}
                                </h3>
                            </div>
                            
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex items-center gap-1 text-[#facc15]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={10} fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">4.9 Review Sync</span>
                            </div>

                            <div className="mt-auto flex justify-between items-end">
                                <div>
                                    <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Mkt Value</p>
                                    <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">
                                        UGX {product.price.toLocaleString()}
                                    </span>
                                </div>
                                
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="size-14 rounded-2xl bg-[#0070f3] text-white flex items-center justify-center hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 group-active:scale-95" 
                                    aria-label={`Add ${product.name} to cart`}
                                >
                                    <ShoppingCart size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSellers;