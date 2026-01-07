"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
    Trash2, Plus, Minus, ArrowLeft, 
    ShieldCheck, Truck, ShoppingBag, 
    MessageSquare, Zap, ChevronRight 
} from "lucide-react";

export default function CartPage() {
    const { cart, updateQty, removeFromCart, subtotal, totalItems } = useCart();

    const handleWhatsAppCheckout = () => {
        const phone = "256756922058";
        let message = `*ESSIMU SHOPPING LIST*\n`;
        message += `_Order Summary_\n`;
        message += `--------------------------\n`;
        cart.forEach(item => {
            const name = item.name.length > 30 ? item.name.slice(0, 30) + '…' : item.name;
            message += `📦 *${name}*\n`;
            message += `Qty: ${item.qty} | Price: UGX ${(item.price * item.qty).toLocaleString()}\n\n`;
        });
        message += `--------------------------\n`;
        message += `*TOTAL: UGX ${subtotal.toLocaleString()}*\n`;
        message += `_Pickup: KLA Hub B118_`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
            <Navbar />
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col gap-2 mb-12">
                    <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] mb-4">
                        <Link href="/" className="text-gray-400 hover:text-[#0070f3] transition-colors">Home</Link>
                        <ChevronRight size={10} className="text-gray-300" />
                        <span className="text-[#0070f3]">Your Bag</span>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#0070f3] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                            <ShoppingBag size={24} />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Your Bag</h1>
                    </div>
                </div>

                {cart.length > 0 ? (
                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* --- CART ITEMS --- */}
                        <div className="flex-1 space-y-6">
                            {cart.map(item => (
                                <div key={item.id} className="group bg-white dark:bg-white/[0.02] rounded-[3rem] p-8 flex flex-col sm:items-center sm:flex-row gap-8 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                                    <div className="relative w-36 h-36 bg-gray-50 dark:bg-black rounded-3xl shrink-0 overflow-hidden border border-gray-50 dark:border-white/5">
                                        <Image src={item.image} alt={item.name} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    
                                    <div className="flex-1">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Zap size={10} className="text-[#0070f3] fill-[#0070f3]" />
                                                <span className="text-[9px] font-black text-[#0070f3] uppercase tracking-widest">{item.category || 'Hardware'}</span>
                                            </div>
                                            <h3 className="font-black text-2xl text-gray-900 dark:text-white tracking-tighter uppercase leading-none">{item.name}</h3>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2 italic">{item.brand || 'ESSIMU VERIFIED'}</p>
                                        </div>
                                        <div className="mt-6">
                                            <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">UGX {item.price.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {/* --- CONTROL HUB --- */}
                                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-6 pt-6 sm:pt-0 border-t sm:border-t-0 border-gray-50 dark:border-white/5">
                                        <div className="flex items-center bg-gray-50 dark:bg-white/5 rounded-2xl p-1.5 border border-gray-100 dark:border-white/5">
                                            <button 
                                                onClick={() => updateQty(item.id, -1)} 
                                                className="w-10 h-10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all text-gray-400 hover:text-red-500"
                                            >
                                                <Minus size={16} strokeWidth={3} />
                                            </button>
                                            <span className="px-6 font-black text-gray-900 dark:text-white text-base">{item.qty}</span>
                                            <button 
                                                onClick={() => updateQty(item.id, 1)} 
                                                className="w-10 h-10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all text-gray-400 hover:text-green-500"
                                            >
                                                <Plus size={16} strokeWidth={3} />
                                            </button>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item.id)} 
                                            className="group/del flex items-center gap-2 text-gray-300 text-[9px] font-black uppercase tracking-widest hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={12} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <Link href="/shop/smartphones" className="inline-flex items-center gap-3 text-gray-400 hover:text-[#0070f3] text-[10px] font-black uppercase tracking-[0.3em] mt-12 transition-all group">
                                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" strokeWidth={3} /> Continue Shopping
                            </Link>
                        </div>

                        {/* --- CHECKOUT PANEL --- */}
                        <div className="w-full lg:w-[450px]">
                            <div className="bg-[#111111] rounded-[3.5rem] p-10 lg:p-12 text-white shadow-[0_30px_60px_-15px_rgba(0,112,243,0.3)] sticky top-32 border border-white/5">
                                <h2 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-[#0070f3] flex items-center gap-4">
                                    Your Order <span className="h-[1px] flex-1 bg-white/10"></span>
                                </h2>
                                
                                <div className="space-y-6 mb-10 pb-10 border-b border-white/5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Subtotal</span>
                                        <span className="font-black text-xl tracking-tighter">UGX {subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Pickup</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest bg-blue-500/10 text-[#0070f3] px-4 py-2 rounded-full border border-blue-500/20">
                                            B118 Ready
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2 text-center">Grand Total</p>
                                    <p className="text-5xl lg:text-6xl font-black tracking-tighter text-center leading-none">
                                        <span className="text-xs align-top mr-1 font-bold text-[#0070f3]">UGX</span>
                                        {subtotal.toLocaleString()}
                                    </p>
                                </div>

                                <button 
                                    onClick={handleWhatsAppCheckout} 
                                    className="w-full bg-[#0070f3] hover:bg-blue-600 text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 transition-all shadow-2xl shadow-blue-500/40 hover:-translate-y-1 active:scale-95 group"
                                >
                                    <MessageSquare size={18} className="fill-white group-hover:rotate-12 transition-transform" /> 
                                    Place Order via WhatsApp
                                </button>

                                <div className="mt-10 grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <Truck size={18} className="text-[#0070f3]" />
                                        <p className="text-[8px] font-black uppercase tracking-widest text-gray-400">Fast Pickup</p>
                                    </div>
                                    <div className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <ShieldCheck size={18} className="text-[#0070f3]" />
                                        <p className="text-[8px] font-black uppercase tracking-widest text-gray-400">Verified Quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* --- EMPTY STATE --- */
                    <div className="text-center py-32 bg-gray-50 dark:bg-white/[0.02] rounded-[4rem] border-2 border-dashed border-gray-100 dark:border-white/5">
                        <div className="w-24 h-24 bg-white dark:bg-black rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl border border-gray-100 dark:border-white/5 text-gray-200">
                            <ShoppingBag size={48} strokeWidth={1} />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-3">Your Bag is Empty</h2>
                        <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-10">Time to discover your favorites</p>
                        <Link href="/shop/smartphones" className="bg-[#0070f3] text-white px-12 py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all inline-block">
                            Browse the Collection
                        </Link>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
