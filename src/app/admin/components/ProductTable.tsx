"use client";
import { Edit, Trash2, Smartphone, Monitor, Laptop, Headphones, Database, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";

interface ProductTableProps {
    products: any[]; // Now receiving live data from the parent
    filterCategory?: string;
    searchTerm?: string;
    onEdit: (product: any) => void;
}

export default function ProductTable({ products, filterCategory, searchTerm = "", onEdit }: ProductTableProps) {
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    // Filter Logic
    const filteredData = products.filter((item) => {
        const matchesCategory = filterCategory ? item.category === filterCategory : true;
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
            item.name.toLowerCase().includes(searchLower) ||
            item.brand.toLowerCase().includes(searchLower);

        return matchesCategory && matchesSearch;
    });

    const handleDelete = async (id: string) => {
        if (!window.confirm("CRITICAL: Are you sure you want to purge this hardware unit from Essimu database?")) return;
        
        setIsDeleting(id);
        try {
            await deleteDoc(doc(db, "products", id));
        } catch (error) {
            console.error("Purge Error:", error);
            alert("Failed to delete unit.");
        } finally {
            setIsDeleting(null);
        }
    };

    if (filteredData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-gray-400 bg-white dark:bg-white/[0.02] rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-white/5">
                <Database size={40} className="opacity-20 text-[#0070f3] mb-6" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">No Hardware Matches Found</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto bg-white dark:bg-[#0c0c0e] rounded-[3.5rem] border border-gray-100 dark:border-white/5 shadow-2xl shadow-blue-500/5">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] border-b border-gray-50 dark:border-white/5">
                        <th className="p-10">Unit Identification</th>
                        <th className="py-10">Brand</th>
                        <th className="py-10">Grade</th>
                        <th className="py-10">Price (UGX)</th>
                        <th className="py-10">Inventory</th>
                        <th className="py-10 text-right pr-12">Control</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                    {filteredData.map((item) => (
                        <tr key={item.id} className={`group hover:bg-blue-50/40 dark:hover:bg-blue-500/5 transition-all duration-300 ${isDeleting === item.id ? 'opacity-50 grayscale' : ''}`}>
                            <td className="py-8 pl-10">
                                <div className="flex items-center gap-6">
                                    <div className="size-16 bg-gray-50 dark:bg-black rounded-2xl overflow-hidden relative border border-gray-100 dark:border-white/5 shrink-0 flex items-center justify-center">
                                        {item.image ? (
                                            <img src={item.image} alt="" className="w-full h-full object-cover p-1" />
                                        ) : (
                                            <div className="text-[#0070f3] opacity-30"><Smartphone size={24}/></div>
                                        )}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tighter">{item.name}</p>
                                        <span className="text-[8px] font-black text-[#0070f3] uppercase tracking-widest">{item.category}</span>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="py-8 text-[11px] text-gray-600 dark:text-gray-400 font-black uppercase tracking-widest">{item.brand}</td>
                            
                            <td className="py-8">
                                <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${
                                    item.condition === 'Brand New' 
                                    ? 'bg-blue-50 dark:bg-blue-500/10 text-[#0070f3] border-blue-100 dark:border-blue-500/20' 
                                    : 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 border-orange-100'
                                }`}>
                                    {item.condition}
                                </span>
                            </td>
                            
                            <td className="py-8 text-sm font-black text-gray-900 dark:text-white tracking-tighter">
                                {Number(item.price).toLocaleString()}
                            </td>
                            
                            <td className="py-8">
                                <div className="flex flex-col gap-2">
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${item.stock < 5 ? 'text-red-500' : 'text-gray-500'}`}>
                                        {item.stock} in Shop
                                    </span>
                                    <div className="w-24 h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full ${item.stock < 5 ? 'bg-red-500' : 'bg-[#0070f3]'}`} 
                                            style={{ width: `${Math.min((item.stock / 15) * 100, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            </td>
                            
                            <td className="py-8 text-right pr-10">
                                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                    <button 
                                        onClick={() => onEdit(item)}
                                        className="size-10 flex items-center justify-center text-gray-400 hover:text-[#0070f3] hover:bg-white dark:hover:bg-white/5 rounded-xl border border-transparent hover:border-gray-100 dark:hover:border-white/10"
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(item.id)}
                                        className="size-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl border border-transparent hover:border-red-100"
                                    >
                                        {isDeleting === item.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}