"use client";
import React, { useState, useEffect } from "react";
import { 
    Smartphone, Laptop, Tv, Headphones, Search, 
    Plus, X, Edit3, Trash2, Cpu, 
    Database, Loader2, ShieldAlert, Activity 
} from "lucide-react";
import ProductForm from "../components/ProductForm";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";

export default function ProductListPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // --- PURGE MODAL STATES ---
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // --- 1. LIVE DATA SYNC ---
    useEffect(() => {
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(items);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // --- 2. PURGE EXECUTION ---
    const confirmPurge = async () => {
        if (!deleteId) return;
        setIsDeleting(true);
        try {
            await deleteDoc(doc(db, "products", deleteId));
            setDeleteId(null);
        } catch (error) {
            console.error("Purge Error:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (product: any) => {
        setEditingProduct(product);
        setIsFormOpen(true);
    };

    if (loading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <Loader2 className="animate-spin text-[#0070f3] mb-4" size={40} />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Syncing Repository...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-20 px-6">
            {/* --- INDEX HEADER --- */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 border-b border-gray-100 dark:border-white/5 pb-10">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Database size={14} className="text-[#0070f3]" />
                        <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">B118 Unit Registry</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Inventory.</h1>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
                    <div className="relative w-full sm:w-96 group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0070f3] transition-colors" size={18} />
                        <input 
                            type="text" 
                            placeholder="Filter live units..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[1.5rem] text-[13px] font-black uppercase tracking-widest focus:ring-4 focus:ring-[#0070f3]/10 outline-none transition-all"
                        />
                    </div>
                    <button 
                        onClick={() => { setEditingProduct(null); setIsFormOpen(true); }}
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#0070f3] text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30"
                    >
                        <Plus size={18} /> Register Unit
                    </button>
                </div>
            </div>

            {/* --- CATEGORY SECTIONS --- */}
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
                        onDelete={(id: string) => setDeleteId(id)}
                    />
                ))}
            </div>

            {/* --- CUSTOM PURGE MODAL --- */}
            {deleteId && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-2xl" onClick={() => !isDeleting && setDeleteId(null)} />
                    <div className="relative w-full max-w-md bg-white dark:bg-[#0c0c0e] rounded-[3.5rem] p-10 border border-red-500/30 shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)] text-center animate-in zoom-in-95 duration-300">
                        <div className="size-20 bg-red-500/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 relative">
                            <ShieldAlert className="text-red-500 animate-pulse" size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">Confirm Data Purge</h3>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-10 leading-relaxed px-4">
                            You are about to shred this unit from the <span className="text-red-500">B118 Registry</span>. This action is irreversible.
                        </p>
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={confirmPurge}
                                disabled={isDeleting}
                                className="w-full py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {isDeleting ? <Loader2 className="animate-spin" size={16}/> : "Confirm Destruction"}
                            </button>
                            <button 
                                onClick={() => setDeleteId(null)}
                                className="w-full py-5 bg-gray-50 dark:bg-white/5 text-gray-400 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all"
                            >
                                Abort Mission
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* --- PRODUCT FORM MODAL --- */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-xl" onClick={() => setIsFormOpen(false)} />
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#f8f9fa] dark:bg-[#0c0c0e] rounded-[3.5rem] shadow-3xl border border-white/5">
                        <div className="sticky top-0 z-10 bg-white/90 dark:bg-black/90 backdrop-blur-md p-8 border-b border-gray-100 dark:border-white/5 flex justify-between items-center px-12">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                                {editingProduct ? "Revise Asset" : "Register Unit"}
                            </h2>
                            <button onClick={() => setIsFormOpen(false)} className="p-3 text-gray-400 hover:text-red-500 rounded-2xl transition-all border border-transparent hover:border-red-500/20">
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

function CategorySection({ title, icon, items, onEdit, onDelete }: any) {
    if (items.length === 0) return null;
    return (
        <section className="space-y-8">
            <div className="flex items-center gap-4 px-2">
                <div className="p-3 bg-gray-900 dark:bg-[#0070f3] text-white rounded-2xl shadow-xl">{icon}</div>
                <div>
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">{title}</h2>
                    <p className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.2em]">{items.length} Units Online</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.map((item: any) => (
                    <div key={item.id} className="bg-white dark:bg-white/[0.02] p-6 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex items-center justify-between group hover:shadow-2xl transition-all duration-500">
                        <div className="flex items-center gap-5 min-w-0">
                            <div className="size-16 bg-gray-50 dark:bg-black rounded-3xl overflow-hidden flex items-center justify-center text-[#0070f3] border border-gray-100 dark:border-white/10 group-hover:bg-[#0070f3] group-hover:text-white transition-all">
                                {item.image ? (
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                ) : (
                                    <Cpu size={24} />
                                )}
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-black text-gray-900 dark:text-white text-[13px] truncate uppercase leading-none mb-2">{item.name}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-[8px] font-black text-[#0070f3] bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded uppercase tracking-widest">{item.condition}</span>
                                    <span className="text-xs text-gray-900 dark:text-gray-300 font-black">UGX {Number(item.price).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                            <button onClick={() => onEdit(item)} className="p-3 text-gray-400 hover:text-[#0070f3] bg-gray-50 dark:bg-white/5 rounded-xl transition-all">
                                <Edit3 size={16} />
                            </button>
                            <button onClick={() => onDelete(item.id)} className="p-3 text-gray-400 hover:text-red-500 bg-gray-50 dark:bg-white/5 rounded-xl transition-all">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}