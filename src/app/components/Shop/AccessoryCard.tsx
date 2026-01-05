"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useCart } from "@/app/context/CartContext"; //

export default function AccessoryCard({ item }: { item: any }) {
    const { addToCart } = useCart(); // Connect to the cart logic

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
            
            {/* Image Container */}
            <div className="relative aspect-square bg-[#f8f9fa] flex items-center justify-center p-8 overflow-hidden">
                {/* Discount Badge */}
                {item.discount && (
                    <span className="absolute top-4 left-4 z-10 px-2 py-1 rounded-md text-[10px] font-bold text-white bg-red-500 shadow-sm">
                        {item.discount}
                    </span>
                )}
                
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] font-bold text-[#0070f3] uppercase tracking-widest mb-1">
                    {item.category}
                </span>
                
                <h3 className="font-bold text-base text-gray-900 mb-1 leading-tight group-hover:text-[#0070f3] transition-colors">
                    {item.name}
                </h3>
                
                {item.device && (
                    <p className="text-[11px] text-gray-400 mb-4">{item.device}</p>
                )}

                {/* Price Section */}
                <div className="mt-auto pt-4 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-900">${item.price}</span>
                    {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                    )}
                </div>

                {/* Updated Button: Now adds to global cart */}
                <button 
                    onClick={() => addToCart(item)}
                    className="w-full mt-5 flex items-center justify-center gap-2 py-3 bg-[#0070f3] text-white rounded-xl font-bold text-xs hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10 active:scale-95"
                    aria-label={`Add ${item.name} to cart`}
                >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-sm" />
                    Buy on WhatsApp
                </button>
            </div>
        </div>
    );
}