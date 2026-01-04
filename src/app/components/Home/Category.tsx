"use client";
import { categoryData } from "@/app/data/category";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
    return (
        <section className="py-12 px-6 lg:px-20 bg-white dark:bg-[#0d1117]">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-[#111418] dark:text-white">
                    Shop by Category
                </h2>
                <Link 
                    href="/categories" 
                    className="text-[#0070f3] text-sm font-bold flex items-center hover:underline"
                >
                    View All <span className="ml-1">→</span>
                </Link>
            </div>

            {/* Responsive Grid System */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categoryData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center group cursor-pointer">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm bg-[#f3f4f6] dark:bg-[#1a232e]">
                            <Image
                                src={item.imageSrc} // Note: matching your "imgaeSrc" typo in interface
                                alt={item.imageAlt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                        
                        <Link href="#" className="font-bold text-[#111418] dark:text-white hover:text-[#0070f3] text-center text-lg">
                            {item.imageTitle}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );}