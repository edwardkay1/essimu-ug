"use client";
import Image from "next/image";
import { ShoppingCart, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function AccessoryCard({ item }: { item: any }) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white dark:bg-[#111111] rounded-[1.5rem] lg:rounded-[2rem] border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group flex flex-col h-full hover:-translate-y-1">
            
            {/* --- IMAGE HUB --- */}
            <div className="relative aspect-square bg-gray-50 dark:bg-[#161616] flex items-center justify-center p-4 lg:p-8 overflow-hidden">
                {/* Condition/Discount Badge - Smaller on Mobile */}
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4 z-10 flex flex-col gap-1.5">
                    {item.discount && (
                        <span className="px-2 py-0.5 rounded-md text-[7px] lg:text-[9px] font-black text-white bg-red-500 shadow-lg uppercase tracking-tighter">
                            -{item.discount}
                        </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md text-[7px] lg:text-[9px] font-black text-white bg-[#0070f3] shadow-lg uppercase tracking-tighter">
                        {item.condition || 'New'}
                    </span>
                </div>

                {/* Verification Overlay - Hidden on small mobile to reduce clutter */}
                <div className="absolute top-4 right-4 z-10 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="size-8 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-xl border border-gray-100 dark:border-white/10">
                        <ShieldCheck size={14} className="text-green-500" />
                    </div>
                </div>
                
                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                    <Image 
                        src={item.image} 
                        alt={`${item.name} - Original Essimu Accessory`} 
                        fill 
                        className="object-contain p-2 lg:p-4"
                    />
                </div>
            </div>

            {/* --- CONTENT HUB --- */}
            <div className="p-4 lg:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 mb-1.5">
                    <Zap size={8} className="text-[#0070f3] fill-[#0070f3]" />
                    <span className="text-[7px] lg:text-[9px] font-black text-[#0070f3] uppercase tracking-[0.2em]">
                        {item.category} Sync
                    </span>
                </div>
                
                <h3 className="font-black text-sm lg:text-lg text-gray-900 dark:text-white mb-1 leading-tight tracking-tighter uppercase group-hover:text-[#0070f3] transition-colors line-clamp-2 min-h-[2.5rem] lg:min-h-[auto]">
                    {item.name}
                </h3>
                
                {item.device && (
                    <p className="text-[8px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 lg:mb-4 truncate">
                        {item.device}
                    </p>
                )}

                {/* Price & Action Area */}
                <div className="mt-auto pt-4 flex flex-col gap-3">
                    <div className="flex flex-wrap items-baseline gap-1 lg:gap-2">
                        <span className="text-sm lg:text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
                            <span className="text-[8px] lg:text-[10px] text-[#0070f3] mr-0.5">UGX</span>
                            {item.price?.toLocaleString()}
                        </span>
                    </div>

                    <button 
                        onClick={() => addToCart(item)}
                        className="w-full flex items-center justify-center gap-2 py-3 lg:py-4 bg-[#0070f3] text-white rounded-xl lg:rounded-2xl font-black text-[8px] lg:text-[10px] uppercase tracking-[0.15em] lg:tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg active:scale-95 group/btn"
                        aria-label={`Add ${item.name} to cart`}
                    >
                        <ShoppingCart size={12} strokeWidth={3} className="shrink-0" />
                        <span className="hidden xs:inline">Add to Cart</span>
                        <span className="xs:hidden">Add</span>
                        <ArrowUpRight size={12} className="hidden lg:block opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                    </button>
                </div>
            </div>
        </div>
    );
}