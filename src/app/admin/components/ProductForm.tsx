"use client";
import { useState, useEffect } from "react";
import { 
    Save, Upload, RefreshCcw, Loader2, 
    X, DollarSign, Box, Tag, FileText, Check, 
    CloudLightning, CheckCircle2
} from "lucide-react";
import { db } from "@/lib/firebase"; 
import { collection, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";

interface ProductFormProps {
    onSuccess: () => void;
    initialData?: any; 
}

export default function ProductForm({ onSuccess, initialData }: ProductFormProps) {
    const [loading, setLoading] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const [formData, setFormData] = useState({
        name: "",
        category: "Phone",
        condition: "Brand New",
        brand: "Apple",
        description: "",
        price: "",
        stock: ""
    });

    const categories = ["Phone", "Laptop", "TV", "Accessory"];
    const conditions = ["Brand New", "UK Used"];
    const brandMap: Record<string, string[]> = {
        Phone: ["Apple", "Samsung", "Google", "Other"],
        Laptop: ["Apple", "HP", "Dell", "Lenovo", "Other"],
        TV: ["Samsung", "Sony", "LG", "Hisense", "Other"],
        Accessory: ["Apple", "Samsung", "Logitech", "Other"]
    };

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
            if (initialData.image) setImagePreview(initialData.image);
        }
    }, [initialData]);

    const handleFile = (file: File) => {
        if (file && file.type.startsWith("image/")) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let finalImageUrl = imagePreview;

            // --- 1. CLOUDINARY HANDSHAKE ---
            if (imageFile) {
                const cloudData = new FormData();
                cloudData.append("file", imageFile);
                cloudData.append("upload_preset", "essimu_products"); 

                const res = await fetch(
                    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                    { method: "POST", body: cloudData }
                );

                if (!res.ok) throw new Error("Media sync failed");
                const fileData = await res.json();
                finalImageUrl = fileData.secure_url; // This is the URL we save to Firebase
            }

            // --- 2. DATA ALIGNMENT ---
            const productPayload = {
                ...formData,
                price: Number(formData.price),
                stock: Number(formData.stock),
                image: finalImageUrl || "", 
                soldCount: initialData?.soldCount || 0,
                updatedAt: serverTimestamp(),
            };

            // --- 3. FIREBASE SYNC ---
            if (initialData?.id) {
                await updateDoc(doc(db, "products", initialData.id), productPayload);
            } else {
                await addDoc(collection(db, "products"), { 
                    ...productPayload, 
                    createdAt: serverTimestamp() 
                });
            }

            // Success feedback
            setIsSuccess(true);
            setTimeout(() => {
                onSuccess();
                setIsSuccess(false);
            }, 1500);

        } catch (error) {
            console.error("B118 Sync Error:", error);
            alert("Failed to add product data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const labelClasses = "text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2 mb-3 block";
    const btnBase = "px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border flex items-center justify-center gap-2 flex-1";
    const inputClasses = "w-full pl-12 pr-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl text-sm font-bold outline-none focus:border-[#0070f3] transition-all";

    return (
        <form className="space-y-10" onSubmit={handleSubmit}>
            
            {/* --- MEDIA HUB (Cloudinary Input) --- */}
            <div>
                <label className={labelClasses}>Product image</label>
                <div 
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(e) => { e.preventDefault(); setDragging(false); if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
                    className={`relative group overflow-hidden bg-gray-50 dark:bg-white/5 rounded-[2.5rem] border-2 border-dashed h-64 flex flex-col items-center justify-center transition-all ${dragging ? 'border-[#0070f3] bg-blue-50/50' : 'border-gray-200 dark:border-white/10'}`}
                >
                    {imagePreview ? (
                        <div className="relative w-full h-full p-4">
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-contain" />
                            <button type="button" onClick={() => {setImageFile(null); setImagePreview(null);}} className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-lg hover:scale-110 transition-all"><X size={16}/></button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                <p className="text-[8px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                                    <CloudLightning size={10} className="text-[#0070f3]" /> Ready to Add Product
                                </p>
                            </div>
                        </div>
                    ) : (
                        <label className="cursor-pointer flex flex-col items-center gap-3">
                            <div className="size-14 rounded-2xl bg-white dark:bg-white/5 shadow-sm flex items-center justify-center text-gray-400 group-hover:text-[#0070f3] transition-colors"><Upload size={24}/></div>
                            <div className="text-center">
                                <p className="text-[10px] font-black uppercase tracking-widest">Add item</p>
                                <p className="text-[9px] text-gray-400 mt-1 uppercase font-bold italic">Drag or click to source</p>
                            </div>
                            <input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
                        </label>
                    )}
                </div>
            </div>

            {/* --- PRIMARY SPECS --- */}
            <div className="space-y-6">
                <div className="relative">
                    <label className={labelClasses}>Product name</label>
                    <Tag className="absolute left-4 top-[46px] text-gray-400" size={18} />
                    <input 
                        required className={inputClasses} placeholder="e.g. iPhone 15 Pro Max"
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <div className="relative">
                    <label className={labelClasses}>Description</label>
                    <FileText className="absolute left-4 top-14 text-gray-400" size={18} />
                    <textarea 
                        className={`${inputClasses} pl-12 pt-5 h-32 resize-none`} placeholder="Storage, Battery Health, Warranty details..."
                        value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                </div>
            </div>

            {/* --- TOGGLE CONTROLS --- */}
            <div className="space-y-8">
                <div>
                    <label className={labelClasses}>Product Category</label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button key={cat} type="button" onClick={() => setFormData({ ...formData, category: cat, brand: brandMap[cat][0] })}
                                className={`${btnBase} ${formData.category === cat ? 'bg-[#0070f3] border-[#0070f3] text-white shadow-lg shadow-blue-500/20' : 'bg-white dark:bg-white/5 text-gray-500 border-gray-100 dark:border-white/10'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Brand</label>
                    <div className="flex flex-wrap gap-2">
                        {brandMap[formData.category].map((b) => (
                            <button key={b} type="button" onClick={() => setFormData({ ...formData, brand: b })}
                                className={`${btnBase} ${formData.brand === b ? 'bg-[#0070f3] border-[#0070f3] text-white shadow-lg shadow-blue-500/20' : 'bg-white dark:bg-white/5 text-gray-500 border-gray-100 dark:border-white/10'}`}>
                                {b}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>State</label>
                    <div className="flex gap-2">
                        {conditions.map((cond) => (
                            <button key={cond} type="button" onClick={() => setFormData({ ...formData, condition: cond })}
                                className={`${btnBase} ${formData.condition === cond ? 'bg-[#0070f3] border-[#0070f3] text-white shadow-lg shadow-blue-500/20' : 'bg-white dark:bg-white/5 text-gray-500 border-gray-100 dark:border-white/10'}`}>
                                {cond}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- NUMERIC DATA --- */}
            <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                    <label className={labelClasses}>Retail Price (UGX)</label>
                    <DollarSign className="absolute left-4 top-[46px] text-[#0070f3]" size={18} />
                    <input type="number" required className={inputClasses} value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} />
                </div>
                <div className="relative">
                    <label className={labelClasses}>Shop B118 Stock</label>
                    <Box className="absolute left-4 top-[46px] text-gray-400" size={18} />
                    <input type="number" required className={inputClasses} value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} />
                </div>
            </div>

            {/* --- SUBMIT ACTIONS --- */}
            <button 
                disabled={loading || isSuccess} type="submit" 
                className={`w-full py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl transition-all flex items-center justify-center gap-4 active:scale-95 ${
                    isSuccess ? "bg-green-500 text-white shadow-green-500/40" : "bg-[#0070f3] text-white shadow-blue-500/40 hover:bg-blue-600 disabled:opacity-50"
                }`}
            >
                {loading ? (
                    <Loader2 className="animate-spin" size={20} />
                ) : isSuccess ? (
                    <><CheckCircle2 size={20} /> Synced Successfully</>
                ) : (
                    <><Save size={20} /> Push to Cloud Registry</>
                )}
            </button>
        </form>
    );
}