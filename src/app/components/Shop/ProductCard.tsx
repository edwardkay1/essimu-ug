"use client";
import Image from "next/image";
import { ShoppingCart, Zap, BadgeCheck } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function AccessoryCard({ item, index }: { item: any, index?: number }) {
    const { addToCart } = useCart();

    return (
        <div className="group relative flex flex-col h-full">
            {/* --- IMAGE PORTAL (Edge-to-Edge Style) --- */}
            <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm bg-gray-100 dark:bg-[#111111] border border-gray-100 dark:border-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/30 group-hover:-translate-y-2">
                
                {/* SEO/Sales Badges (Top Left) */}
                <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-1">
                    <div className="bg-[#0070f3] text-white px-3 py-1 rounded-lg flex items-center gap-1 mb-2 shadow-lg">
                        <BadgeCheck size={10} />
                        <span className="text-[8px] font-black uppercase tracking-tighter">
                            {item.condition || 'Verified Stock'}
                        </span>
                    </div>
                    {typeof index === 'number' && (
                        <span className="text-3xl font-black text-white tracking-tighter drop-shadow-md opacity-50">
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                    )}
                </div>

                {/* Discount Badge (Top Right) */}
                {item.discount && (
                    <div className="absolute top-6 right-6 z-20">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter shadow-lg">
                            SAVE {item.discount}
                        </span>
                    </div>
                )}

                {/* --- THE IMAGE --- */}
                <Image
                    src={item.image}
                    alt={`Buy ${item.name} at Essimu Uganda Shop B118`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                
                {/* Hover Action Label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(item);
                        }}
                        className="px-8 py-4 bg-[#0070f3] text-white rounded-2xl shadow-2xl scale-90 group-hover:scale-100 transition-transform flex items-center gap-2"
                    >
                        <ShoppingCart size={14} strokeWidth={3} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add to Cart</span>
                    </button>
                </div>
            </div>

            {/* --- TITLE & PRICE HUB --- */}
            <div className="flex justify-between items-start px-2 flex-1">
                <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                        <Zap size={8} className="text-[#0070f3] fill-[#0070f3]" />
                        <span className="text-[8px] font-black text-[#0070f3] uppercase tracking-widest">
                            {item.category}
                        </span>
                    </div>

                    {/* FIXED: Removed line-clamp-1 and added leading-tight to allow word wrapping */}
                    <div className="min-h-[3rem] lg:min-h-[4rem]">
                        <h3 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-tight group-hover:text-[#0070f3] transition-colors">
                            {item.name}
                        </h3>
                    </div>

                    <div className="mt-3 flex flex-col">
                        <span className="text-xl font-black text-gray-900 dark:text-white tracking-tighter">
                            <span className="text-[10px] text-[#0070f3] mr-1">UGX</span>
                            {item.price?.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                            <span className="text-[10px] text-gray-400 line-through font-bold">
                                UGX {item.originalPrice?.toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>
                
                <button 
                    onClick={() => addToCart(item)}
                    className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#0070f3] group-hover:text-white transition-all shadow-sm shrink-0"
                >
                    <ShoppingCart size={18} />
                </button>
            </div>
        </div>
    );
}