"use client";
import { useState, useEffect } from "react";
import { Save, Upload, Package, RefreshCcw, Layers, Zap, Info } from "lucide-react";

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

    // Image state
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || "",
                category: initialData.category || "Phone",
                condition: initialData.condition || "Brand New",
                brand: initialData.brand || "Apple",
                description: initialData.description || "",
                price: initialData.price?.toString() || "",
                stock: initialData.stock?.toString() || ""
            });

            if (initialData.imageUrl) {
                setImagePreview(initialData.imageUrl);
            }
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Demo: Show all form data including image
        console.log("Hardware Sync Data:", { ...formData, imageFile });

        // TODO: Upload imageFile to storage (Firebase, Supabase, etc.)
        onSuccess();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                
                {/* --- PRIMARY DATA (Left 3 Columns) --- */}
                <div className="lg:col-span-3 space-y-8">
                    <div className="bg-white dark:bg-white/[0.02] p-10 rounded-[3rem] shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <Layers size={120} />
                        </div>

                        <h3 className="text-[11px] font-black text-[#0070f3] mb-8 flex items-center gap-3 uppercase tracking-[0.3em]">
                            <Zap size={16} className="fill-[#0070f3]" /> Hardware Specifications
                        </h3>
                        
                        <div className="space-y-6 relative z-10">
                            {/* Product Name */}
                            <div>
                                <label className="block text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 px-1 tracking-[0.2em]">
                                    Deployment Name (Model)
                                </label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g. iPhone 15 Pro Max 256GB" 
                                    className="w-full bg-gray-50 dark:bg-black border-2 border-transparent rounded-2xl p-5 text-sm font-black text-gray-900 dark:text-white focus:border-[#0070f3] focus:bg-white dark:focus:bg-black outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700" 
                                    required 
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Category */}
                                <div>
                                    <label className="block text-[9px] font-black text-gray-400 uppercase mb-3 px-1 tracking-[0.2em]">Unit Class</label>
                                    <select 
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full bg-gray-50 dark:bg-black border-2 border-transparent rounded-2xl p-5 text-sm font-black text-gray-900 dark:text-white focus:border-[#0070f3] outline-none transition-all cursor-pointer appearance-none"
                                    >
                                        <option value="Phone">Smartphone</option>
                                        <option value="Laptop">Laptop / MacBook</option>
                                        <option value="TV">Smart Television</option>
                                        <option value="Accessory">Hardware Accessory</option>
                                    </select>
                                </div>

                                {/* Condition */}
                                <div>
                                    <label className="block text-[9px] font-black text-gray-400 uppercase mb-3 px-1 tracking-[0.2em]">System Grade</label>
                                    <select 
                                        value={formData.condition}
                                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                                        className="w-full bg-gray-50 dark:bg-black border-2 border-transparent rounded-2xl p-5 text-sm font-black text-gray-900 dark:text-white focus:border-[#0070f3] outline-none transition-all cursor-pointer appearance-none"
                                    >
                                        <option value="Brand New">Brand New (Sealed)</option>
                                        <option value="UK Used">UK Used (Verified)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Brand Select */}
                            <div>
                                <label className="block text-[9px] font-black text-gray-400 uppercase mb-3 px-1 tracking-[0.2em]">Manufacturer</label>
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                                    {["Apple", "Samsung", "HP", "Dell", "Sony"].map((b) => (
                                        <button
                                            key={b}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, brand: b })}
                                            className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                                                formData.brand === b 
                                                ? "bg-[#0070f3] text-white border-[#0070f3] shadow-lg shadow-blue-500/20" 
                                                : "bg-gray-50 dark:bg-black text-gray-400 border-transparent hover:border-gray-200 dark:hover:border-white/10"
                                            }`}
                                        >
                                            {b}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-[9px] font-black text-gray-400 uppercase mb-3 px-1 tracking-[0.2em]">Technical Overview (Specs)</label>
                                <textarea 
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Battery health, Storage, RAM, Display specs..." 
                                    rows={5} 
                                    className="w-full bg-gray-50 dark:bg-black border-2 border-transparent rounded-[2rem] p-6 text-sm font-bold text-gray-900 dark:text-white focus:border-[#0070f3] outline-none transition-all resize-none placeholder:text-gray-300 dark:placeholder:text-gray-700" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LOGISTICS & SYNC (Right 2 Columns) --- */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Pricing Card */}
                    <div className="bg-gray-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-500/10 border border-white/5">
                        <h3 className="text-[10px] font-black text-[#0070f3] mb-8 uppercase tracking-[0.3em] flex items-center gap-3">
                            <Package size={16} /> Valuation & Volume
                        </h3>
                        
                        <div className="space-y-8">
                            <div>
                                <label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-[0.2em]">Market Price (UGX)</label>
                                <div className="relative">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-[#0070f3] text-xs">UGX</span>
                                    <input 
                                        type="number" 
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        placeholder="0" 
                                        className="w-full bg-white/5 border-2 border-transparent rounded-2xl py-5 pl-16 pr-6 text-xl font-black text-white focus:border-[#0070f3] outline-none transition-all" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-[0.2em]">Units in Stock (B118)</label>
                                <input 
                                    type="number" 
                                    value={formData.stock}
                                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                    placeholder="1" 
                                    className="w-full bg-white/5 border-2 border-transparent rounded-2xl p-5 text-xl font-black text-white focus:border-[#0070f3] outline-none transition-all" 
                                    required 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Media Acquisition / Image Upload */}
                    <div className="relative bg-white dark:bg-white/[0.02] p-10 rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-white/5 flex flex-col items-center justify-center min-h-[200px] group cursor-pointer hover:border-[#0070f3] hover:bg-blue-50/30 transition-all duration-500">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />

                        <div className="w-16 h-16 bg-gray-50 dark:bg-black rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-[#0070f3] group-hover:scale-110 transition-all mb-4 overflow-hidden">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-2xl" />
                            ) : (
                                <Upload size={28} strokeWidth={1.5} />
                            )}
                        </div>

                        <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            {imageFile ? "Change Hardware Image" : initialData ? "Replace Hardware Image" : "Upload Product Image"}
                        </p>
                    </div>

                    {/* Sync Action */}
                    <div className="pt-4">
                        <button type="submit" className="w-full py-6 bg-[#0070f3] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/40 hover:bg-blue-600 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-4 group">
                            {initialData ? (
                                <>
                                    <RefreshCcw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                                    Push Update
                                </>
                            ) : (
                                <>
                                    <Save size={20} className="group-hover:scale-125 transition-transform" />
                                    Add Item
                                </>
                            )}
                        </button>
                        
                        <div className="mt-6 flex items-start gap-3 px-4">
                            <Info size={14} className="text-gray-400 mt-1 shrink-0" />
                            <p className="text-[9px] font-bold text-gray-400 uppercase leading-relaxed tracking-tighter">
                                Note: Once synced, this hardware unit will be visible to all users. Price modifications are immediate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
