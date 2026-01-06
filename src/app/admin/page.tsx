"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, X, Smartphone, Laptop, Tv, Headphones, Info, MousePointer2, ListChecks, ShieldCheck, ChevronRight } from "lucide-react";
import StatCard from "./components/StatCard";
import ProductForm from "./components/ProductForm";
import { products, getStats } from "./data"; 

export default function AdminDashboard() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Filter last 2 items from each of the 4 categories
    const recentItems = [
        ...products.filter(p => p.category === "Phone").slice(-2),
        ...products.filter(p => p.category === "Laptop").slice(-2),
        ...products.filter(p => p.category === "TV").slice(-2),
        ...products.filter(p => p.category === "Accessory").slice(-2)
    ].reverse();

    const stats = getStats();

    return (
        <div className="max-w-7xl mx-auto relative pb-20 px-4">
            <header className="flex justify-between items-end mb-10 pt-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">ESSIMU Command</h1>
                    <p className="text-gray-500 font-medium">Your central inventory and performance hub.</p>
                </div>
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="flex items-center gap-2 px-6 py-3.5 bg-[#0070f3] text-white rounded-2xl text-sm font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                >
                    <Plus size={20} /> Add New Item
                </button>
            </header>

            {/* Top Row Statistics - Reflecting All Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <StatCard title="Apple Stock" value={products.filter(p => p.brand === "Apple").length.toString()} trend="Units" />
                <StatCard title="Samsung Stock" value={products.filter(p => p.brand === "Samsung").length.toString()} trend="Units" />
                <StatCard title="Accessories" value={products.filter(p => p.category === "Accessory").length.toString()} trend="Items" />
                <StatCard title="Total Catalog" value={products.length.toString()} trend="Total" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* RECENTLY ADDED WITH IMAGES */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center px-2">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900">Recently Added</h2>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Last 2 per category</p>
                        </div>
                        <a href="/admin/products" className="flex items-center gap-1 text-[#0070f3] text-sm font-bold hover:gap-2 transition-all">
                            View Catalog <ChevronRight size={16} />
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {recentItems.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow group">
                                <div className="relative size-20 rounded-2xl bg-gray-50 overflow-hidden flex-shrink-0 border border-gray-50 flex items-center justify-center">
                                    {/* Category Specific Icons */}
                                    <div className="text-gray-300 group-hover:text-[#0070f3] transition-colors">
                                         {item.category === "Phone" && <Smartphone size={28} />}
                                         {item.category === "Laptop" && <Laptop size={28} />}
                                         {item.category === "TV" && <Tv size={28} />}
                                         {item.category === "Accessory" && <Headphones size={28} />}
                                    </div>
                                    {/* When ready, use: <Image src={item.image} alt={item.name} fill className="object-cover" /> */}
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[9px] font-black text-[#0070f3] uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm truncate">{item.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm font-black text-gray-900">${item.price.toLocaleString()}</span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">{item.brand}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SIDEBAR GUIDE & INFO */}
                <div className="space-y-6">
                    <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
                        <div className="flex items-center gap-2 mb-6 text-[#0070f3]">
                            <Info size={22} />
                            <h2 className="font-black text-gray-900 text-lg">Quick Instructions</h2>
                        </div>
                        
                        <div className="space-y-6">
                            <GuideItem 
                                icon={<ListChecks size={16}/>} 
                                title="Inventory Growth" 
                                text="You now manage 4 main categories including the new Accessories wing." 
                            />
                            <GuideItem 
                                icon={<MousePointer2 size={16}/>} 
                                title="Live Sync" 
                                text="New items appear instantly on the public shop pages (Phones, Laptops, etc)." 
                            />
                            <GuideItem 
                                icon={<ShieldCheck size={16}/>} 
                                title="Owner Access" 
                                text="Only authorized owners can use this command portal to add stock." 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL FORM */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={() => setIsFormOpen(false)} />
                    <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#f8f9fa] rounded-[2.5rem] shadow-2xl">
                        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md p-6 border-b border-gray-100 flex justify-between items-center px-10">
                            <h2 className="text-2xl font-black text-gray-900">New Inventory Entry</h2>
                            <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-all"><X size={24} /></button>
                        </div>
                        <div className="p-10">
                            <ProductForm onSuccess={() => setIsFormOpen(false)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function GuideItem({ icon, title, text }: any) {
    return (
        <div className="flex gap-4">
            <div className="size-9 rounded-xl bg-blue-50 text-[#0070f3] flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-sm font-bold text-gray-900 mb-0.5">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{text}</p>
            </div>
        </div>
    );
}