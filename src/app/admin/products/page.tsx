"use client";
import React, { useState } from "react";
import { 
    Smartphone, Laptop, Tv, Headphones, Search, 
    Plus, X, Edit3, Trash2, Cpu, Hash, 
    Database, Filter 
} from "lucide-react";
import ProductForm from "../components/ProductForm";
import { products } from "../data"; 

export default function ProductListPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingProduct, setEditingProduct] = useState<any>(null);

    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (product: any) => {
        setEditingProduct(product);
        setIsFormOpen(true);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-20 px-6">
            {/* --- INDEX HEADER --- */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 border-b border-gray-100 dark:border-white/5 pb-10">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Database size={14} className="text-[#0070f3]" />
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">Hardware Repository</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Unit Index.</h1>
                    <p className="text-gray-500 font-bold mt-1">Total System Load: {products.length} Verified Entries</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Filter by Model or Serial..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[1.5rem] text-[13px] font-black uppercase tracking-widest focus:ring-4 focus:ring-[#0070f3]/10 outline-none transition-all"
                        />
                    </div>
                    <button 
                        onClick={() => { setEditingProduct(null); setIsFormOpen(true); }}
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#0070f3] text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30"
                    >
                        <Plus size={18} /> Add Entry
                    </button>
                </div>
            </div>

            {/* --- CATEGORY GRIDS --- */}
            <div className="space-y-20">
                {[
                    { title: "Smartphones", icon: <Smartphone />, cat: "Phone" },
                    { title: "Laptops", icon: <Laptop />, cat: "Laptop" },
                    { title: "Televisions", icon: <Tv />, cat: "TV" },
                    { title: "Accessories", icon: <Headphones />, cat: "Accessory" }
                ].map((section) => (
                    <CategorySection 
                        key={section.cat}
                        title={section.title} 
                        icon={section.icon} 
                        items={filteredProducts.filter(p => p.category === section.cat)} 
                        onEdit={handleEdit}
                    />
                ))}
            </div>

            {/* --- DATA MUTATION MODAL --- */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-xl" onClick={() => setIsFormOpen(false)} />
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#f8f9fa] dark:bg-[#0c0c0e] rounded-[3.5rem] shadow-3xl border border-white/5">
                        <div className="sticky top-0 z-10 bg-white/90 dark:bg-black/90 backdrop-blur-md p-8 border-b border-gray-100 dark:border-white/5 flex justify-between items-center px-12">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                                    {editingProduct ? "Modify Unit" : "Initialize Unit"}
                                </h2>
                                <p className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.3em] mt-1">Syncing to Public Catalog</p>
                            </div>
                            <button onClick={() => setIsFormOpen(false)} className="p-3 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 text-gray-400 rounded-2xl transition-all border border-gray-100 dark:border-white/10">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-12">
                            <ProductForm initialData={editingProduct} onSuccess={() => setIsFormOpen(false)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function CategorySection({ title, icon, items, onEdit }: any) {
    if (items.length === 0) return null;

    return (
        <section className="space-y-8">
            <div className="flex items-center gap-4 px-2">
                <div className="p-3 bg-gray-900 dark:bg-[#0070f3] text-white rounded-2xl shadow-xl">{icon}</div>
                <div>
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">{title}</h2>
                    <p className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.2em]">{items.length} Units Operational</p>
                </div>
                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-white/5 ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.map((item: any) => (
                    <div key={item.id} className="bg-white dark:bg-white/[0.02] p-6 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex items-center justify-between group hover:shadow-2xl hover:border-[#0070f3]/30 transition-all duration-500">
                        <div className="flex items-center gap-5 min-w-0">
                            <div className="size-16 bg-gray-50 dark:bg-black rounded-3xl flex items-center justify-center text-[#0070f3] border border-gray-100 dark:border-white/10 group-hover:bg-[#0070f3] group-hover:text-white transition-all duration-500">
                                <Cpu size={24} strokeWidth={1.5} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-black text-gray-900 dark:text-white text-[13px] truncate uppercase tracking-tight leading-none mb-2">{item.name}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-[8px] font-black text-[#0070f3] bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded uppercase tracking-widest">{item.condition}</span>
                                    <span className="text-xs text-gray-900 dark:text-gray-300 font-black tracking-tighter">UGX {item.price.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                            <button 
                                onClick={() => onEdit(item)} 
                                className="p-3 text-gray-400 hover:text-[#0070f3] bg-gray-50 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl transition-all border border-transparent hover:border-blue-100"
                            >
                                <Edit3 size={16} />
                            </button>
                            <button className="p-3 text-gray-400 hover:text-red-500 bg-gray-50 dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all border border-transparent hover:border-red-100">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}