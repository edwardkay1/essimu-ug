"use client";
import React, { useState } from "react";
import { Smartphone, Laptop, Tv, Headphones, Search, Plus, X, Edit3, Trash2 } from "lucide-react";
import ProductForm from "../components/ProductForm";
import { products } from "../data"; // Central Data Source

export default function ProductListPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingProduct, setEditingProduct] = useState<any>(null);

    // Filter logic based on search input
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (product: any) => {
        setEditingProduct(product);
        setIsFormOpen(true);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-20 px-4">
            {/* Header with Search */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Inventory Catalog</h1>
                    <p className="text-gray-500 font-medium tracking-tight">Manage all {products.length} items in your store.</p>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search models, brands..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#0070f3]/10 outline-none transition-all shadow-sm"
                        />
                    </div>
                    <button 
                        onClick={() => { setEditingProduct(null); setIsFormOpen(true); }}
                        className="p-3.5 bg-[#0070f3] text-white rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                    >
                        <Plus size={24} />
                    </button>
                </div>
            </div>

            {/* Content Sections split by Category */}
            <div className="space-y-16">
                <CategorySection 
                    title="Smartphones" 
                    icon={<Smartphone size={20} />} 
                    items={filteredProducts.filter(p => p.category === "Phone")} 
                    onEdit={handleEdit}
                />
                <CategorySection 
                    title="Laptops" 
                    icon={<Laptop size={20} />} 
                    items={filteredProducts.filter(p => p.category === "Laptop")} 
                    onEdit={handleEdit}
                />
                <CategorySection 
                    title="Televisions" 
                    icon={<Tv size={20} />} 
                    items={filteredProducts.filter(p => p.category === "TV")} 
                    onEdit={handleEdit}
                />
                <CategorySection 
                    title="Accessories" 
                    icon={<Headphones size={20} />} 
                    items={filteredProducts.filter(p => p.category === "Accessory")} 
                    onEdit={handleEdit}
                />
            </div>

            {/* Modal Form */}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={() => setIsFormOpen(false)} />
                    <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#f8f9fa] rounded-[2.5rem] shadow-2xl">
                        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md p-6 border-b border-gray-100 flex justify-between items-center px-10">
                            <h2 className="text-xl font-black text-gray-900">{editingProduct ? "Update Item" : "New Inventory Entry"}</h2>
                            <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-all"><X size={20} /></button>
                        </div>
                        <div className="p-10">
                            <ProductForm initialData={editingProduct} onSuccess={() => setIsFormOpen(false)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Sub-component for each category group
function CategorySection({ title, icon, items, onEdit }: any) {
    if (items.length === 0) return null;

    return (
        <section className="space-y-6">
            <div className="flex items-center gap-3 px-2">
                <div className="p-2.5 bg-[#0070f3] text-white rounded-xl shadow-lg shadow-blue-500/20">{icon}</div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h2>
                <span className="text-[10px] font-black text-[#0070f3] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">{items.length} units</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {items.map((item: any) => (
                    <div key={item.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 flex items-center justify-between group hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                        <div className="flex items-center gap-4 min-w-0">
                            <div className="size-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#0070f3] font-black border border-gray-100 group-hover:bg-blue-50 transition-colors">
                                {item.brand[0]}
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-gray-900 text-sm truncate">{item.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[9px] font-black text-[#0070f3] bg-blue-50 px-2 py-0.5 rounded uppercase">{item.condition}</span>
                                    <span className="text-xs text-gray-500 font-black">${item.price.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1 ml-4">
                            <button 
                                onClick={() => onEdit(item)} 
                                className="p-2.5 text-gray-400 hover:text-[#0070f3] hover:bg-blue-50 rounded-xl transition-all"
                                title="Edit Item"
                            >
                                <Edit3 size={18} />
                            </button>
                            <button 
                                className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                title="Delete Item"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}