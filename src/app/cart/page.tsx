"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Truck, UserX } from "lucide-react";

export default function CartPage() {
    const { cart, updateQty, removeFromCart, subtotal, totalItems } = useCart();

    const handleWhatsAppCheckout = () => {
        const phone = "256700000000"; // Your business number
        let message = `Hello ESSIMU! I would like to order:\n\n`;
        cart.forEach(item => {
            message += `• ${item.name} (${item.qty}x) - $${item.price * item.qty}\n`;
        });
        message += `\n*Total: $${subtotal}*`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen">
            <Navbar />
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Shopping Cart</h1>
                <p className="text-gray-500 mb-10">You have {totalItems} items in your cart</p>

                {cart.length > 0 ? (
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1 flex flex-col gap-4">
                            {cart.map((item) => (
                                <div key={item.id} className="bg-white rounded-3xl p-6 flex items-center gap-6 border border-gray-100 shadow-sm">
                                    <div className="relative w-24 h-24 bg-gray-50 rounded-2xl shrink-0 overflow-hidden">
                                        <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
                                        <span className="text-lg font-bold text-blue-600">UGX {item.price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-4">
                                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                                            <button onClick={() => updateQty(item.id, -1)} className="p-2 hover:bg-white rounded-lg transition-colors"><Minus size={16} /></button>
                                            <span className="px-4 font-bold text-gray-900">{item.qty}</span>
                                            <button onClick={() => updateQty(item.id, 1)} className="p-2 hover:bg-white rounded-lg transition-colors"><Plus size={16} /></button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="flex items-center gap-1 text-red-500 text-xs font-bold hover:underline">
                                            <Trash2 size={14} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <Link href="/shop/smartphones" className="flex items-center gap-2 text-blue-600 font-bold mt-6 hover:underline">
                                <ArrowLeft size={18} /> Continue Shopping
                            </Link>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="w-full lg:w-[400px]">
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                                <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Subtotal</span>
                                        <span className="text-gray-900 font-medium">UGX {subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500 italic">
                                        <span>Shipping</span>
                                        <span>Calculated next</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-xl font-bold">Total</span>
                                    <span className="text-3xl font-bold text-blue-600">UGX {subtotal.toLocaleString()}</span>
                                </div>
                                <button onClick={handleWhatsAppCheckout} className="w-full bg-[#25d366] hover:bg-[#20ba5a] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-500/20 mb-6">
                                    Checkout on WhatsApp
                                </button>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-sm text-gray-600"><UserX size={18} className="text-blue-600" /> No account required</div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600"><ShieldCheck size={18} className="text-blue-600" /> Secure transaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                        <p className="text-gray-400 mb-6">Your cart is currently empty.</p>
                        <Link href="/shop/smartphones" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold inline-block">Start Shopping</Link>
                    </div>
                )}
            </main>
        </div>
    );
}