"use client";
import { Edit, Trash2, Smartphone, Monitor, Laptop, Headphones, AlertCircle, Cpu, Database } from "lucide-react";
import Image from "next/image";
import { products } from "../data"; 

interface ProductTableProps {
    filterCategory?: "Phone" | "Laptop" | "TV" | "Accessory";
    searchTerm?: string;
    onEdit: (product: any) => void;
}

export default function ProductTable({ filterCategory, searchTerm = "", onEdit }: ProductTableProps) {
    
    // Logic to filter by Category AND Search Term
    const filteredData = products.filter((item) => {
        const matchesCategory = filterCategory ? item.category === filterCategory : true;
        
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
            item.name.toLowerCase().includes(searchLower) ||
            item.brand.toLowerCase().includes(searchLower) ||
            item.condition.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower);

        return matchesCategory && matchesSearch;
    });

    if (filteredData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-gray-400 bg-white dark:bg-white/[0.02] rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-white/5">
                <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem] mb-6">
                    <Database size={40} className="opacity-20 text-[#0070f3]" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">Query Returned No Results</p>
                <p className="text-xs font-bold mt-2 text-gray-300 italic uppercase tracking-tighter">Adjust search parameters or clear filters.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto bg-white dark:bg-[#0c0c0e] rounded-[3.5rem] border border-gray-100 dark:border-white/5 shadow-2xl shadow-blue-500/5">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] border-b border-gray-50 dark:border-white/5">
                        <th className="p-10">Unit Identification</th>
                        <th className="py-10">Hardware Brand</th>
                        <th className="py-10">Status/Grade</th>
                        <th className="py-10">Acquisition Price</th>
                        <th className="py-10">Inventory Load</th>
                        <th className="py-10 text-right pr-12">Control</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                    {filteredData.map((item) => (
                        <tr key={item.id} className="group hover:bg-blue-50/40 dark:hover:bg-blue-500/5 transition-all duration-300">
                            <td className="py-8 pl-10">
                                <div className="flex items-center gap-6">
                                    <div className="size-20 bg-gray-50 dark:bg-black rounded-3xl overflow-hidden relative border border-gray-100 dark:border-white/5 shrink-0 group-hover:border-[#0070f3]/30 transition-all flex items-center justify-center">
                                        <div className="text-[#0070f3] opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                            {item.category === 'Phone' && <Smartphone size={32} strokeWidth={1.5} />}
                                            {item.category === 'Laptop' && <Laptop size={32} strokeWidth={1.5} />}
                                            {item.category === 'TV' && <Monitor size={32} strokeWidth={1.5} />}
                                            {item.category === 'Accessory' && <Headphones size={32} strokeWidth={1.5} />}
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-base font-black text-gray-900 dark:text-white leading-none mb-3 truncate uppercase tracking-tighter">{item.name}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[8px] font-black text-[#0070f3] bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded-md uppercase tracking-widest border border-blue-100/50">
                                                {item.category}
                                            </span>
                                            <p className="text-[10px] text-gray-400 font-bold truncate max-w-[180px] uppercase italic tracking-tighter opacity-60">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="py-8 text-[11px] text-gray-600 dark:text-gray-400 font-black uppercase tracking-[0.15em]">{item.brand}</td>
                            
                            <td className="py-8">
                                <span className={`px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest border ${
                                    item.condition === 'Brand New' 
                                    ? 'bg-blue-50 dark:bg-blue-500/10 text-[#0070f3] border-blue-100 dark:border-blue-500/20 shadow-lg shadow-blue-500/5' 
                                    : 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 border-orange-100 dark:border-orange-500/20'
                                }`}>
                                    {item.condition}
                                </span>
                            </td>
                            
                            <td className="py-8 text-sm font-black text-gray-900 dark:text-white tracking-tighter">
                                <span className="text-[10px] text-[#0070f3] mr-1">UGX</span>
                                {item.price.toLocaleString()}
                            </td>
                            
                            <td className="py-8">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between w-32">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${item.stock < 5 ? 'text-red-500' : 'text-gray-500'}`}>
                                            {item.stock} Units
                                        </span>
                                        {item.stock < 5 && (
                                            <span className="animate-pulse size-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                        )}
                                    </div>
                                    <div className="w-32 h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
                                                item.stock < 5 ? 'bg-red-500' : item.stock < 10 ? 'bg-orange-500' : 'bg-[#0070f3]'
                                            }`} 
                                            style={{ width: `${Math.min((item.stock / 20) * 100, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            </td>
                            
                            <td className="py-8 text-right pr-10">
                                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                    <button 
                                        onClick={() => onEdit(item)}
                                        className="size-11 flex items-center justify-center text-gray-400 hover:text-[#0070f3] hover:bg-white dark:hover:bg-white/5 border border-transparent hover:border-gray-100 dark:hover:border-white/10 rounded-2xl transition-all shadow-sm"
                                        title="Edit Hardware"
                                    >
                                        <Edit size={16} strokeWidth={2.5} />
                                    </button>
                                    <button 
                                        className="size-11 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white dark:hover:bg-white/5 border border-transparent hover:border-red-100 rounded-2xl transition-all shadow-sm"
                                        title="Purge Entry"
                                    >
                                        <Trash2 size={16} strokeWidth={2.5} />
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