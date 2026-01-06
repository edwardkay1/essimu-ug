"use client";
import React, { useState } from "react";
import { 
    Plus, X, Smartphone, Laptop, Tv, 
    Headphones, Info, MousePointer2, 
    ListChecks, ShieldCheck, ChevronRight, 
    Activity, LayoutGrid, Database, Zap
} from "lucide-react";
import StatCard from "./components/StatCard";
import ProductForm from "./components/ProductForm";
import { products } from "./data"; 

export default function AdminDashboard() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Dynamic filtering for the most recent hardware entries (Last 2 per category)
    const recentItems = [
        ...products.filter(p => p.category === "Phone").slice(-2),
        ...products.filter(p => p.category === "Laptop").slice(-2),
        ...products.filter(p => p.category === "TV").slice(-2),
        ...products.filter(p => p.category === "Accessory").slice(-2)
    ].reverse();

    return (
        <div className="max-w-7xl mx-auto relative pb-20 px-6">
            {/* --- SYSTEM HEADER --- */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pt-10 border-b border-gray-100 pb-10">
                <div className="animate-in fade-in slide-in-from-left duration-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="size-2 bg-green-500 rounded-full animate-ping" />
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">Node: Shop B118 / Online</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                        Command <span className="text-[#0070f3]">Hub.</span>
                    </h1>
                    <p className="text-gray-400 font-bold mt-3 text-sm tracking-tight">
                        Root access active. Managing live catalog data for <span className="text-gray-900">ESSIMU Kampala</span>.
                    </p>
                </div>
                
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="group flex items-center gap-3 px-8 py-5 bg-[#0070f3] text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 active:scale-95"
                >
                    <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" /> 
                    Initialize Hardware Entry
                </button>
            </header>

            {/* --- TELEMETRY / STATS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <StatCard title="Apple Units" value={products.filter(p => p.brand === "Apple").length.toString()} trend="Active" variant="primary" icon={Smartphone} />
                <StatCard title="Samsung Units" value={products.filter(p => p.brand === "Samsung").length.toString()} trend="Active" icon={Smartphone} />
                <StatCard title="Total Accessories" value={products.filter(p => p.category === "Accessory").length.toString()} trend="Units" icon={Headphones} />
                <StatCard title="Global Catalog" value={products.length.toString()} trend="Live" icon={Database} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* --- RECENT HARDWARE SYNC --- */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center gap-3">
                            <Activity size={20} className="text-[#0070f3] animate-pulse" />
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Recent Deployments</h2>
                        </div>
                        <a href="/admin/products" className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#0070f3] flex items-center gap-2 transition-all group">
                            Full Repository <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {recentItems.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center gap-6 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group cursor-default border-l-4 border-l-transparent hover:border-l-[#0070f3]">
                                <div className="relative size-24 rounded-3xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100 flex items-center justify-center">
                                    <div className="text-gray-300 group-hover:text-[#0070f3] group-hover:scale-110 transition-all duration-500">
                                         {item.category === "Phone" && <Smartphone size={32} strokeWidth={1.5} />}
                                         {item.category === "Laptop" && <Laptop size={32} strokeWidth={1.5} />}
                                         {item.category === "TV" && <Tv size={32} strokeWidth={1.5} />}
                                         {item.category === "Accessory" && <Headphones size={32} strokeWidth={1.5} />}
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[8px] font-black text-[#0070f3] uppercase tracking-[0.2em] bg-blue-50 px-2 py-1 rounded-md mb-2 inline-block">
                                        {item.category}
                                    </span>
                                    <h3 className="font-black text-gray-900 text-[13px] truncate uppercase tracking-tight leading-none mb-3">{item.name}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-black text-gray-900 tracking-tighter">
                                            <span className="text-[10px] text-[#0070f3] mr-1">UGX</span>
                                            {item.price.toLocaleString()}
                                        </span>
                                        <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{item.brand}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- ADMINISTRATIVE GUIDELINES --- */}
                <div className="space-y-6">
                    <div className="bg-gray-900 rounded-[3.5rem] p-10 text-white shadow-2xl shadow-blue-500/10 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <LayoutGrid size={120} />
                        </div>
                        
                        <div className="flex items-center gap-3 mb-12">
                            <div className="size-12 bg-[#0070f3] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <ShieldCheck size={24} className="text-white" />
                            </div>
                            <div>
                                <h2 className="font-black text-lg uppercase tracking-tighter leading-none">Security</h2>
                                <p className="text-[9px] text-[#0070f3] font-black uppercase tracking-[0.2em] mt-1">Owner Protocol</p>
                            </div>
                        </div>
                        
                        <div className="space-y-10 relative z-10">
                            <GuideItem 
                                icon={<ListChecks size={20}/>} 
                                title="Multi-Wing Control" 
                                text="Seamlessly manage iPhones, MacBooks, and high-end TVs from one terminal." 
                            />
                            <GuideItem 
                                icon={<Zap size={20}/>} 
                                title="Instant Push" 
                                text="Modified prices and stock counts sync to the Kampala shopfront in real-time." 
                            />
                            <GuideItem 
                                icon={<MousePointer2 size={20}/>} 
                                title="One-Click Sync" 
                                text="Use the Quick Initialize button to deploy hardware assets to the public view." 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- HARDWARE ENTRY MODAL --- */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setIsFormOpen(false)} />
                    <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#f8f9fa] rounded-[4rem] shadow-[0_0_100px_-20px_rgba(0,112,243,0.3)] border border-white/10 animate-in zoom-in-95 duration-300">
                        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md p-10 border-b border-gray-100 flex justify-between items-center px-14">
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Initialize Unit</h2>
                                <p className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em] mt-1">Authorized Access: B118 Inventory Control</p>
                            </div>
                            <button onClick={() => setIsFormOpen(false)} className="size-14 hover:bg-red-50 hover:text-red-500 text-gray-400 rounded-3xl transition-all flex items-center justify-center border border-gray-100">
                                <X size={28} />
                            </button>
                        </div>
                        <div className="p-14">
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
        <div className="flex gap-6 group">
            <div className="size-12 rounded-2xl bg-white/5 text-[#0070f3] flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#0070f3] group-hover:text-white transition-all duration-500 shadow-sm">
                {icon}
            </div>
            <div>
                <p className="text-xs font-black text-white uppercase tracking-widest mb-1">{title}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed font-bold tracking-tight italic">{text}</p>
            </div>
        </div>
    );
}