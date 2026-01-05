"use client";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { bestSellers } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext"; // 1. Import the hook

const BestSellers = () => {
    const { addToCart } = useCart(); // 2. Access the addToCart function

    return (
        <section className="py-16 px-6 lg:px-20 bg-gray-50 dark:bg-[#0d1117]">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#111418] dark:text-white mb-2">Best Sellers</h2>
                <p className="text-[#60758a] dark:text-[#9ca3af]">Top picks trending this week</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bestSellers.map((product) => (
                    <div key={product.id} className="bg-white dark:bg-[#161b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        
                        {/* Image Area */}
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer bg-white dark:bg-[#1a232e]">
                            {product.badge && (
                                <span className={`absolute top-4 left-4 z-10 px-2 py-1 rounded-md text-[10px] font-bold text-white ${
                                    product.badgeType === 'discount' ? 'bg-red-500' : 'bg-[#0070f3]'
                                }`}>
                                    {product.badge}
                                </span>
                            )}

                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-[#111418] dark:text-white leading-tight max-w-[80%] line-clamp-1">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-1 text-[#facc15] text-xs font-bold">
                                    <Star size={12} fill="currentColor" />
                                    <span>{product.rating}</span>
                                </div>
                            </div>
                            
                            <p className="text-xs text-[#60758a] dark:text-[#9ca3af] mb-6 line-clamp-2">
                                {product.specs}
                            </p>

                            <div className="mt-auto flex justify-between items-center">
                                <span className="text-xl font-bold text-[#111418] dark:text-white">
                                    ${product.price}
                                </span>
                                
                                {/* 3. Connect the Button to addToCart */}
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="p-2.5 rounded-full border border-blue-100 bg-blue-50 text-[#0070f3] hover:bg-[#0070f3] hover:text-white transition-all active:scale-90" 
                                    aria-label={`Add ${product.name} to cart`}
                                >
                                    <ShoppingCart size={20} />
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