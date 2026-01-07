"use client";
import React, { useState, useEffect, useMemo } from "react";
import { 
    Plus, X, Smartphone, Laptop, Tv, 
    Headphones, ListChecks, ShieldCheck, ChevronRight, 
    Activity, LayoutGrid, Database, Zap, Edit3, TrendingUp
} from "lucide-react";
import StatCard from "./components/StatCard";
import ProductForm from "./components/ProductForm";
import { db } from "@/lib/firebase"; 
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function AdminDashboard() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [liveProducts, setLiveProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // --- REAL-TIME DATA SYNC ---
    useEffect(() => {
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setLiveProducts(items);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // --- DYNAMIC ANALYTICS ---
    const stats = useMemo(() => {
        const totalVal = liveProducts.reduce((acc, curr) => 
            acc + (Number(curr.price || 0) * Number(curr.stock || 0)), 0
        );

        return {
            // Matches the button values in your ProductForm
            phones: liveProducts.filter(p => p.category === "Phone").length,
            laptops: liveProducts.filter(p => p.category === "Laptop").length,
            accessories: liveProducts.filter(p => p.category === "Accessory").length,
            tvs: liveProducts.filter(p => p.category === "TV").length,
            inventoryValue: totalVal,
            totalItems: liveProducts.length
        };
    }, [liveProducts]);

    const handleEdit = (product: any) => {
        setSelectedProduct(product);
        setIsFormOpen(true);
    };

    const handleCloseModal = () => {
        setIsFormOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="max-w-7xl mx-auto relative pb-20 px-6 min-h-screen transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
            
            {/* --- DASHBOARD HEADER --- */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pt-10 border-b border-gray-200 dark:border-white/10 pb-10">
                <div className="animate-in fade-in slide-in-from-left duration-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                            Node: Shop B118 / Cloud Sync Active
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-none">
                        Command <span className="text-[#0070f3]">Hub</span>
                    </h1>
                </div>
                
                <button 
                    onClick={() => { setSelectedProduct(null); setIsFormOpen(true); }}
                    className="group flex items-center gap-4 px-10 py-6 bg-[#0070f3] text-white rounded-[2.5rem] text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 active:scale-95"
                >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" /> 
                    Add Item
                </button>
            </header>

            {/* --- STATS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
                <StatCard title="Phones" value={stats.phones.toString()} trend="Live" variant="primary" icon={Smartphone} />
                <StatCard title="Laptops" value={stats.laptops.toString()} trend="Units" icon={Laptop} />
                <StatCard title="Accessories" value={stats.accessories.toString()} trend="Stock" icon={Headphones} />
                <StatCard title="TVs" value={stats.tvs.toString()} trend="Units" icon={Tv} />
                <StatCard title="Inventory" value={stats.totalItems.toString()} trend="Global" icon={Database} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* --- RECENT ITEMS --- */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center gap-3">
                            <Activity size={20} className="text-[#0070f3] animate-pulse" />
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Recent Arrivals</h2>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {liveProducts.length === 0 ? (
                            <div className="col-span-full py-20 flex flex-col items-center opacity-20 border-2 border-dashed border-gray-500 rounded-[3rem]">
                                <Database size={48} className="mb-4" />
                                <p className="text-[10px] font-black uppercase tracking-[0.3em]">No Hardware Synced</p>
                            </div>
                        ) : (
                            liveProducts.slice(0, 6).map((item) => (
                                <div key={item.id} className="group relative bg-white dark:bg-[#111111] p-6 rounded-[3rem] border border-gray-200 dark:border-white/5 shadow-sm flex items-center gap-6 hover:border-l-[#0070f3] border-l-4 border-l-transparent transition-all">
                                    <div className="relative w-24 h-24 rounded-3xl bg-gray-50 dark:bg-white/[0.03] overflow-hidden flex items-center justify-center shrink-0 border border-gray-100 dark:border-white/5">
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} className="object-contain w-full h-full p-2" />
                                        ) : (
                                            <div className="text-gray-300 dark:text-white/10"><LayoutGrid size={32}/></div>
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[7px] font-black uppercase px-2 py-0.5 bg-[#0070f3]/10 text-[#0070f3] rounded-full">{item.category}</span>
                                            <span className="text-[7px] font-black uppercase px-2 py-0.5 bg-gray-100 dark:bg-white/5 text-gray-400 rounded-full">{item.condition}</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm truncate uppercase mb-1">{item.name}</h3>
                                        <p className="text-lg font-black text-gray-900 dark:text-white leading-none">
                                            <span className="text-[9px] opacity-40 mr-1 font-bold">UGX</span>
                                            {Number(item.price).toLocaleString()}
                                        </p>
                                        <p className="text-[8px] font-bold text-gray-400 mt-2 uppercase">In Stock: {item.stock || 0}</p>
                                    </div>

                                    {/* QUICK EDIT ACTION */}
                                    <button 
                                        onClick={() => handleEdit(item)}
                                        className="absolute top-4 right-4 p-3 bg-white dark:bg-white/5 text-gray-400 hover:text-[#0070f3] rounded-2xl transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-gray-100 dark:border-white/5"
                                    >
                                        <Zap size={16} />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* --- OWNER SECURITY PANEL --- */}
                <div className="sticky top-10 h-fit bg-gray-900 dark:bg-[#161616] rounded-[4rem] p-12 text-white border border-white/5 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0070f3] blur-[80px] opacity-20 -mr-16 -mt-16" />
                    <div className="flex items-center gap-4 mb-12">
                        <ShieldCheck size={28} className="text-[#0070f3]" />
                        <h2 className="font-black text-xl uppercase tracking-tighter text-white">Security<br/>Protocol</h2>
                    </div>
                    
                    <div className="space-y-10">
                        <GuideItem icon={<Zap size={20}/>} title="Cloud Priority" text="Images optimized via Cloudinary for fast loading on 4G networks in Kampala." />
                        <GuideItem icon={<ListChecks size={20}/>} title="Audit Trail" text="Changes are synced instantly across all B118 administrative nodes." />
                    </div>
                </div>
            </div>

            {/* --- ADD/EDIT MODAL --- */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gray-900/90 transition-opacity" onClick={handleCloseModal} />
                    <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#0f0f0f] rounded-[4rem] p-12 border border-white/10 shadow-3xl animate-in zoom-in-95 duration-300">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                                    {selectedProduct ? "Modify Hardware" : "Add Hardware"}
                                </h2>
                                <p className="text-[10px] font-bold text-[#0070f3] uppercase tracking-widest mt-1">Registry: Shop B118</p>
                            </div>
                            <button onClick={handleCloseModal} className="p-4 bg-gray-50 dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-950/20 text-gray-400 hover:text-red-500 rounded-3xl transition-all">
                                <X size={28} />
                            </button>
                        </div>
                        <ProductForm 
                            initialData={selectedProduct} 
                            onSuccess={handleCloseModal} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

function GuideItem({ icon, title, text }: any) {
    return (
        <div className="flex gap-6">
            <div className="size-12 rounded-[1.2rem] bg-white/5 flex items-center justify-center text-[#0070f3] shrink-0 border border-white/5">{icon}</div>
            <div>
                <p className="text-xs font-black text-white uppercase tracking-widest mb-2">{title}</p>
                <p className="text-xs text-gray-500 italic leading-relaxed">{text}</p>
            </div>
        </div>
    );
}