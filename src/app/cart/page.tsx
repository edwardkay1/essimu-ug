"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Truck, ShoppingBag, MessageSquare } from "lucide-react";

export default function CartPage() {
    const { cart, updateQty, removeFromCart, subtotal, totalItems } = useCart();

    const handleWhatsAppCheckout = () => {
        const phone = "256700000000"; // ESSIMU Business Line
        let message = `*NEW ORDER - ESSIMU COMMAND*\n`;
        message += `--------------------------\n`;
        cart.forEach(item => {
            message += `• ${item.name} (${item.qty}x) - UGX ${(item.price * item.qty).toLocaleString()}\n`;
        });
        message += `--------------------------\n`;
        message += `*TOTAL: UGX ${subtotal.toLocaleString()}*`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16">
                <div className="flex items-center gap-4 mb-2">
                    <div className="size-10 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0070f3]">
                        <ShoppingBag size={24} />
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">My Cart</h1>
                </div>
                <p className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em] mb-12 ml-14">
                    {totalItems} items ready for sync
                </p>

                {cart.length > 0 ? (
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Cart Items List */}
                        <div className="flex-1 space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="group bg-white rounded-[2.5rem] p-8 flex flex-col sm:items-center sm:flex-row gap-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                                    <div className="relative size-32 bg-gray-50 rounded-3xl shrink-0 overflow-hidden border border-gray-50 group-hover:bg-white transition-colors">
                                        <Image src={item.image} alt={item.name} fill className="object-contain p-4" />
                                    </div>
                                    
                                    <div className="flex-1">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="font-black text-xl text-gray-900 tracking-tight uppercase leading-tight">{item.name}</h3>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.brand || 'Original Part'}</p>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-xl font-black text-[#0070f3] tracking-tighter">UGX {item.price.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-6 pt-6 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                                        <div className="flex items-center bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
                                            <button 
                                                onClick={() => updateQty(item.id, -1)} 
                                                className="size-10 flex items-center justify-center hover:bg-white rounded-xl transition-all text-gray-500 hover:text-red-500"
                                            >
                                                <Minus size={16} strokeWidth={3} />
                                            </button>
                                            <span className="px-5 font-black text-gray-900 text-sm">{item.qty}</span>
                                            <button 
                                                onClick={() => updateQty(item.id, 1)} 
                                                className="size-10 flex items-center justify-center hover:bg-white rounded-xl transition-all text-gray-500 hover:text-green-500"
                                            >
                                                <Plus size={16} strokeWidth={3} />
                                            </button>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item.id)} 
                                            className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={14} /> Remove Entry
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <Link href="/smartphones" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0070f3] text-[10px] font-black uppercase tracking-widest mt-8 transition-colors">
                                <ArrowLeft size={16} strokeWidth={3} /> Return to Store
                            </Link>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="w-full lg:w-[420px]">
                            <div className="bg-gray-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-500/10 sticky top-32">
                                <h2 className="text-2xl font-black mb-8 uppercase tracking-tight flex items-center gap-3">
                                    Summary <span className="h-[1px] flex-1 bg-white/10"></span>
                                </h2>
                                
                                <div className="space-y-5 mb-8 pb-8 border-b border-white/10">
                                    <div className="flex justify-between items-center text-gray-400">
                                        <span className="text-[10px] font-black uppercase tracking-widest">Subtotal</span>
                                        <span className="font-bold text-white">UGX {subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-400">
                                        <span className="text-[10px] font-black uppercase tracking-widest">Logistics</span>
                                        <span className="text-[10px] font-bold italic bg-white/5 px-3 py-1 rounded-full text-blue-400">Calculated on Chat</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mb-10">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0070f3]">Total Payable</span>
                                    <span className="text-4xl font-black tracking-tighter">UGX {subtotal.toLocaleString()}</span>
                                </div>

                                <button 
                                    onClick={handleWhatsAppCheckout} 
                                    className="w-full bg-[#0070f3] hover:bg-blue-600 text-white py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-1 mb-8"
                                >
                                    <MessageSquare size={18} /> Checkout on WhatsApp
                                </button>

                                <div className="space-y-4 px-2">
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        <Truck size={16} className="text-[#0070f3]" /> Instant Kampala Delivery
                                    </div>
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        <ShieldCheck size={16} className="text-[#0070f3]" /> Verified Original Stock
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-32 bg-gray-50 rounded-[4rem] border-2 border-dashed border-gray-200">
                        <div className="size-20 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-sm text-gray-300">
                            <ShoppingBag size={40} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">Your Bag is Empty</h2>
                        <p className="text-gray-400 text-sm font-medium mb-10">Sync your first product from our premium catalog.</p>
                        <Link href="/shop/smartphones" className="bg-[#0070f3] text-white px-10 py-5 rounded-[2rem] text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-105 transition-all inline-block">
                            Browse Collection
                        </Link>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}