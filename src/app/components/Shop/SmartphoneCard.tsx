"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useCart } from "@/app/context/CartContext"; //

export default function SmartphoneCard({ phone }: { phone: any }) {
    const { addToCart } = useCart(); // Access the global cart state

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            {/* Product Image Container */}
            <div className="relative aspect-[4/3] bg-[#f8f9fa] p-6 overflow-hidden">
                {phone.badge && (
                    <span className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold text-white z-10 shadow-sm ${
                        phone.badgeType === 'best-seller' ? 'bg-gray-800' : 
                        phone.badgeType === 'new-arrival' ? 'bg-[#0070f3]' : 'bg-red-500'
                    }`}>
                        {phone.badge}
                    </span>
                )}
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image 
                        src={phone.image} 
                        alt={phone.name} 
                        fill 
                        className="object-contain p-4" 
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-[#0070f3] transition-colors">
                    {phone.name}
                </h3>
                <p className="text-xs text-gray-400 mb-4">{phone.specs}</p>
                
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900">${phone.price}</span>
                        {phone.oldPrice && (
                            <span className="text-xs text-gray-400 line-through">${phone.oldPrice}</span>
                        )}
                    </div>
                    <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider ${
                        phone.status === 'In Stock' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                    }`}>
                        {phone.status}
                    </span>
                </div>

                {/* Updated Button: Now adds to global cart state */}
                <button 
                    onClick={() => addToCart(phone)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#0070f3] text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10 active:scale-95"
                    aria-label={`Add ${phone.name} to cart`}
                >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                    Buy on WhatsApp
                </button>
            </div>
        </div>
    );
}