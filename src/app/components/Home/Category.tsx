"use client";
import { categoryData } from "../../data/category";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Category() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white dark:bg-[#0a0a0a]">
            {/* Heading Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="size-2 bg-[#0070f3] rounded-full" />
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">
                            Primary Index
                        </span>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                        Browse <br/> <span className="text-gray-400">Portals.</span>
                    </h2>
                </div>
                
                <Link 
                    href="/shop/smartphones" 
                    className="group flex items-center gap-3 px-6 py-3 bg-gray-50 dark:bg-white/5 rounded-2xl transition-all hover:bg-[#0070f3] hover:text-white"
                >
                    <span className="text-[10px] font-black uppercase tracking-widest">Full Catalog</span>
                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                </Link>
            </div>

            {/* Responsive Grid System */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {categoryData.map((item, index) => (
                    <Link 
                        key={index} 
                        href={`/shop/${item.imageTitle.toLowerCase()}`}
                        className="group relative flex flex-col"
                    >
                        {/* Image Portal */}
                        <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
                            {/* Technical Overlay */}
                            <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-1">
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                                    Sector
                                </span>
                                <span className="text-2xl font-black text-white tracking-tighter">
                                    0{index + 1}
                                </span>
                            </div>

                            <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />

                            {/* Gradient Shield */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            
                            {/* Hover Action Label */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Open Sync</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Title & Stats */}
                        <div className="flex justify-between items-center px-2">
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none group-hover:text-[#0070f3] transition-colors">
                                    {item.imageTitle}
                                </h3>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">
                                    Verified Hardware
                                </p>
                            </div>
                            <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#0070f3] group-hover:text-white transition-all">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}