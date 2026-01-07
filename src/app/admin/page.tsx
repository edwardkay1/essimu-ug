"use client";
import React, { useState, useMemo } from "react";
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

    // --- DYNAMIC DATA CALCULATION ---
    // This looks at your data.ts and counts how many items are in each category
    const stats = useMemo(() => {
        return {
            phones: products.filter(p => p.category === "Phone").length,
            laptops: products.filter(p => p.category === "Laptop").length,
            accessories: products.filter(p => p.category === "Accessory").length,
            tvs: products.filter(p => p.category === "TV").length,
            total: products.length
        };
    }, []);

    const recentItems = useMemo(() => {
        return [
            ...products.filter(p => p.category === "Phone").slice(-2),
            ...products.filter(p => p.category === "Laptop").slice(-2),
            ...products.filter(p => p.category === "TV").slice(-2),
            ...products.filter(p => p.category === "Accessory").slice(-2)
        ].reverse();
    }, []);

    return (
        <div className="max-w-7xl mx-auto relative pb-20 px-6 min-h-screen transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
            
            {/* --- DASHBOARD HEADER --- */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pt-10 border-b border-gray-200 dark:border-white/10 pb-10">
                <div className="animate-in fade-in slide-in-from-left duration-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                        <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            Node: Shop B118 / Online
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight uppercase leading-none">
                        Command <span className="text-[#0070f3]">Hub</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold mt-2 text-sm tracking-tight">
                        Root access active. Monitoring <span className="text-gray-900 dark:text-white font-bold">ESSIMU Kampala</span> live catalog.
                    </p>
                </div>
                
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="group flex items-center gap-3 px-8 py-5 bg-[#0070f3] text-white rounded-[2rem] text-[10px] font-extrabold uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-95"
                >
                    <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" /> 
                    Quick Add Unit
                </button>
            </header>

            {/* --- DYNAMIC STATS GRID (5 Columns) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
                <StatCard title="Smartphones" value={stats.phones.toString()} trend="Active" variant="primary" icon={Smartphone} />
                <StatCard title="Laptops" value={stats.laptops.toString()} trend="Active" icon={Laptop} />
                <StatCard title="Accessories" value={stats.accessories.toString()} trend="Units" icon={Headphones} />
                <StatCard title="Smart TVs" value={stats.tvs.toString()} trend="Units" icon={Tv} />
                <StatCard title="Total Units" value={stats.total.toString()} trend="Live" icon={Database} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* --- RECENT ITEMS --- */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center gap-3">
                            <Activity size={20} className="text-[#0070f3] animate-pulse" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Latest Arrivals</h2>
                        </div>
                        <a href="/admin/products" className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 hover:text-[#0070f3] flex items-center gap-2 transition-all group">
                            Full Catalog <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {recentItems.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-[#111111] p-6 rounded-[2.5rem] border border-gray-200 dark:border-white/5 shadow-sm flex items-center gap-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group cursor-pointer border-l-4 border-l-transparent hover:border-l-[#0070f3]">
                                <div className="relative w-24 h-24 rounded-3xl bg-gray-50 dark:bg-white/[0.03] overflow-hidden shrink-0 border border-gray-100 dark:border-white/5 flex items-center justify-center">
                                    <div className="text-gray-300 dark:text-white/10 group-hover:text-[#0070f3] group-hover:scale-110 transition-all duration-500">
                                         {item.category === "Phone" && <Smartphone size={32} strokeWidth={1.5} />}
                                         {item.category === "Laptop" && <Laptop size={32} strokeWidth={1.5} />}
                                         {item.category === "TV" && <Tv size={32} strokeWidth={1.5} />}
                                         {item.category === "Accessory" && <Headphones size={32} strokeWidth={1.5} />}
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[9px] font-bold text-[#0070f3] uppercase tracking-wide bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md mb-2 inline-block">
                                        {item.category}
                                    </span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-[14px] truncate uppercase tracking-tight leading-none mb-2">{item.name}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
                                            <span className="text-[10px] text-[#0070f3] mr-1">UGX</span>
                                            {item.price.toLocaleString()}
                                        </span>
                                        <span className="text-[9px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide">{item.brand}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- ADMIN GUIDELINES --- */}
                <div className="space-y-6">
                    <div className="bg-gray-900 dark:bg-[#161616] rounded-[3.5rem] p-10 text-white shadow-2xl shadow-blue-500/10 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <LayoutGrid size={120} />
                        </div>
                        
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-12 h-12 bg-[#0070f3] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <ShieldCheck size={24} className="text-white" />
                            </div>
                            <div>
                                <h2 className="font-bold text-lg uppercase tracking-tight leading-none text-white">Security</h2>
                                <p className="text-[9px] text-[#0070f3] font-bold uppercase tracking-wide mt-1">Owner Protocol</p>
                            </div>
                        </div>
                        
                        <div className="space-y-8 relative z-10">
                            <GuideItem 
                                icon={<ListChecks size={20}/>} 
                                title="Multi-Wing Control" 
                                text="Manage all iPhones, MacBooks, and high-end TVs from a single command terminal." 
                            />
                            <GuideItem 
                                icon={<Zap size={20}/>} 
                                title="Instant Sync" 
                                text="Price changes and stock counts update live across all displays." 
                            />
                            <GuideItem 
                                icon={<MousePointer2 size={20}/>} 
                                title="Quick Deploy" 
                                text="One-click initialization instantly pushes units to the public catalog." 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ADD UNIT MODAL --- */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/90 dark:bg-black/95 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setIsFormOpen(false)} />
                    <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#111111] rounded-[4rem] shadow-[0_0_100px_-20px_rgba(0,112,243,0.3)] border border-gray-200 dark:border-white/5 animate-in zoom-in-95 duration-300">
                        <div className="sticky top-0 z-10 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md p-10 border-b border-gray-200 dark:border-white/5 flex justify-between items-center px-14">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Add Hardware Unit</h2>
                                <p className="text-[10px] font-bold text-[#0070f3] uppercase tracking-wide mt-1">Authorized Access: B118 Inventory Control</p>
                            </div>
                            <button onClick={() => setIsFormOpen(false)} className="w-14 h-14 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-500 text-gray-400 rounded-3xl transition-all flex items-center justify-center border border-gray-200 dark:border-white/10">
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
            <div className="w-12 h-12 rounded-2xl bg-white/5 text-[#0070f3] flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#0070f3] group-hover:text-white transition-all duration-500 shadow-sm">
                {icon}
            </div>
            <div>
                <p className="text-xs font-bold text-white uppercase tracking-wide mb-1">{title}</p>
                <p className="text-[11px] text-gray-300 leading-relaxed font-semibold tracking-tight italic">{text}</p>
            </div>
        </div>
    );
}