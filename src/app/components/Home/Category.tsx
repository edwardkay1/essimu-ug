"use client";
import { categoryData } from "../../data/category";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Zap, BadgeCheck } from "lucide-react";

export default function Category() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]" aria-labelledby="category-heading">
            {/* --- SALES HEADING --- */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap size={14} className="text-[#0070f3] fill-[#0070f3]" />
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                            Essimu Inventory Sync
                        </span>
                    </div>
                    <h2 id="category-heading" className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                        Explore <br/> <span className="text-[#0070f3]">Sales Hubs.</span>
                    </h2>
                    <p className="mt-6 text-sm font-bold text-gray-500 uppercase tracking-widest italic">
                        The widest selection of New & UK Used hardware at Shop B118.
                    </p>
                </div>
                
                <Link 
                    href="/shop/smartphones" 
                    title="View all New and UK Used products in Kampala"
                    className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-2xl transition-all hover:bg-[#0070f3] hover:text-white border-2 border-transparent"
                >
                    <span className="text-[10px] font-black uppercase tracking-widest">Full Showroom Catalog</span>
                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                </Link>
            </div>

            {/* --- PRODUCT CATEGORY GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {categoryData.map((item, index) => (
                    <Link 
                        key={index} 
                        href={`/shop/${item.imageTitle.toLowerCase()}`}
                        title={`Shop ${item.imageTitle} - Essimu Uganda Hub`}
                        className="group relative flex flex-col"
                    >
                        {/* Image Portal */}
                        <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/30 group-hover:-translate-y-2">
                            
                            {/* SEO/Sales Badges */}
                            <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-1">
                                <div className="bg-[#0070f3] text-white px-3 py-1 rounded-lg flex items-center gap-1 mb-2">
                                    <BadgeCheck size={10} />
                                    <span className="text-[8px] font-black uppercase tracking-tighter">Verified Stock</span>
                                </div>
                                <span className="text-3xl font-black text-white tracking-tighter drop-shadow-md">
                                    0{index + 1}
                                </span>
                            </div>

                            <Image
                                src={item.imageSrc}
                                alt={`Buy ${item.imageTitle} at Essimu Uganda Shop B118 William Street`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />

                            {/* Deep Gradient Shield for Text Legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                            
                            {/* Hover Action Label */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="px-8 py-4 bg-[#0070f3] text-white rounded-2xl shadow-xl scale-90 group-hover:scale-100 transition-transform">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">View Deals</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Title & Stats */}
                        <div className="flex justify-between items-start px-2">
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none group-hover:text-[#0070f3] transition-colors">
                                    {item.imageTitle}
                                </h3>
                                <p className="text-[10px] font-black text-[#0070f3] uppercase tracking-widest mt-2">
                                    {item.imageTitle === "Smartphones" ? "New & UK Used Grade-A" : `premium ${item.imageTitle}`}
                                </p>
                            </div>
                            <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#0070f3] group-hover:text-white transition-all shadow-sm">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}