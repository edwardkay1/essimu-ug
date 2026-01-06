"use client";
import { useState, useEffect } from "react";
import { Save, Upload, Tag, Package, RefreshCcw, Layers } from "lucide-react";

interface ProductFormProps {
    onSuccess: () => void;
    initialData?: any; 
}

export default function ProductForm({ onSuccess, initialData }: ProductFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        category: "Phone",
        condition: "Brand New",
        brand: "Apple",
        description: "",
        price: "",
        stock: ""
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || "",
                category: initialData.category || "Phone",
                condition: initialData.condition || "Brand New",
                brand: initialData.brand || "Apple",
                description: initialData.description || "",
                price: initialData.price.toString() || "",
                stock: initialData.stock.toString() || ""
            });
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Saving data to ESSIMU Catalog:", formData);
        onSuccess();
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* --- LEFT COLUMN: PRODUCT SPECS --- */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                        <h3 className="text-sm font-black text-gray-900 mb-6 flex items-center gap-2 uppercase tracking-widest">
                            <Tag size={18} className="text-[#0070f3]" /> General Details
                        </h3>
                        
                        <div className="space-y-5">
                            {/* Product Name */}
                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 px-1 tracking-widest">Product Name</label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="e.g. iPhone 15 Pro Max" 
                                    className="w-full bg-gray-100/50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold text-gray-900 focus:border-[#0070f3] focus:bg-white outline-none transition-all placeholder:text-gray-400" 
                                    required 
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Category */}
                                <div>
                                    <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 px-1 tracking-widest">Category</label>
                                    <select 
                                        value={formData.category}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        className="w-full bg-gray-100/50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold text-gray-900 focus:border-[#0070f3] focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="Phone">Smartphone</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="TV">Television</option>
                                        <option value="Accessory">Accessory</option>
                                    </select>
                                </div>

                                {/* Condition */}
                                <div>
                                    <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 px-1 tracking-widest">Condition</label>
                                    <select 
                                        value={formData.condition}
                                        onChange={(e) => setFormData({...formData, condition: e.target.value})}
                                        className="w-full bg-gray-100/50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold text-gray-900 focus:border-[#0070f3] focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="Brand New">Brand New</option>
                                        <option value="UK Used">UK Used</option>
                                    </select>
                                </div>
                            </div>

                            {/* Brand */}
                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 px-1 tracking-widest">Brand</label>
                                <select 
                                    value={formData.brand}
                                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                                    className="w-full bg-gray-100/50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold text-gray-900 focus:border-[#0070f3] focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option>Apple</option>
                                    <option>Samsung</option>
                                    <option>HP</option>
                                    <option>Dell</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 px-1 tracking-widest">Description</label>
                                <textarea 
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    placeholder="Enter hardware specs or key features..." 
                                    rows={4} 
                                    className="w-full bg-gray-100/50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold text-gray-900 focus:border-[#0070f3] focus:bg-white outline-none transition-all resize-none placeholder:text-gray-400" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: PRICING & MEDIA --- */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                        <h3 className="text-sm font-black text-gray-900 mb-6 flex items-center gap-2 uppercase tracking-widest">
                            <Package size={18} className="text-[#0070f3]" /> Pricing & Inventory
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 px-1 tracking-widest">Price ($)</label>
                                <input 
                                    type="number" 
                                    value={formData.price}
                                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                                    placeholder="0.00" 
                                    className="w-full bg-gray-100/50 border-2 border-transparent rounded-2xl p-4 text-sm font-black text-gray-900 focus:border-[#0070f3] focus:bg-white outline-none transition-all" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2 px-1 tracking-widest">Stock Qty</label>
                                <input 
                                    type="number" 
                                    value={formData.stock}
                                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                                    placeholder="1" 
                                    className="w-full bg-gray-100/50 border-2 border-transparent rounded-2xl p-4 text-sm font-black text-gray-900 focus:border-[#0070f3] focus:bg-white outline-none transition-all" 
                                    required 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image Upload Area */}
                    <div className="bg-white p-10 rounded-[2rem] shadow-sm border-2 border-dashed border-gray-100 flex flex-col items-center justify-center min-h-[220px] group cursor-pointer hover:border-[#0070f3] hover:bg-blue-50/30 transition-all">
                        <div className="size-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-[#0070f3] group-hover:bg-white group-hover:shadow-lg transition-all mb-4">
                            <Upload size={24} />
                        </div>
                        <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest text-center">
                            {initialData ? "Replace Product Media" : "Click to Upload Image"}
                        </p>
                        <p className="text-[9px] font-bold text-gray-400 mt-2 uppercase tracking-tighter">JPG, PNG or WEBP (MAX 2MB)</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4">
                        <button type="submit" className="w-full py-5 bg-[#0070f3] text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3">
                            {initialData ? (
                                <>
                                    <RefreshCcw size={20} strokeWidth={2.5} /> Update Entry
                                </>
                            ) : (
                                <>
                                    <Save size={20} strokeWidth={2.5} /> Sync to Catalog
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}