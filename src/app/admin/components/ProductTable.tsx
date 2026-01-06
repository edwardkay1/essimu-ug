"use client";
import { Edit, Trash2, Smartphone, Monitor, Laptop, Headphones, AlertCircle } from "lucide-react";
import Image from "next/image";
import { products } from "../data"; // Central Data Source

interface ProductTableProps {
    filterCategory?: "Phone" | "Laptop" | "TV" | "Accessory";
    searchTerm?: string;
    onEdit: (product: any) => void;
}

export default function ProductTable({ filterCategory, searchTerm = "", onEdit }: ProductTableProps) {
    
    // 1. Logic to filter by Category AND Search Term
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
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-white rounded-[2.5rem] border border-dashed border-gray-200">
                <div className="p-4 bg-gray-50 rounded-full mb-4">
                    <AlertCircle size={32} className="opacity-20" />
                </div>
                <p className="text-sm font-black uppercase tracking-widest">No entries found</p>
                <p className="text-xs font-medium mt-1 italic">Try adjusting your filters or search terms.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
                        <th className="p-8">Product Details</th>
                        <th className="py-8">Brand</th>
                        <th className="py-8">Condition</th>
                        <th className="py-8">Price</th>
                        <th className="py-8">Stock Level</th>
                        <th className="py-8 text-right pr-10">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {filteredData.map((item) => (
                        <tr key={item.id} className="group hover:bg-blue-50/30 transition-all duration-200">
                            <td className="py-6 pl-8">
                                <div className="flex items-center gap-5">
                                    <div className="size-16 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 flex-shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                                        <div className="text-[#0070f3] opacity-40 group-hover:opacity-100 transition-opacity">
                                            {item.category === 'Phone' && <Smartphone size={24} />}
                                            {item.category === 'Laptop' && <Laptop size={24} />}
                                            {item.category === 'TV' && <Monitor size={24} />}
                                            {item.category === 'Accessory' && <Headphones size={24} />}
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-black text-gray-900 leading-none mb-2 truncate max-w-[200px]">{item.name}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[9px] font-black text-white bg-[#0070f3] px-1.5 py-0.5 rounded uppercase tracking-tighter">
                                                {item.category}
                                            </span>
                                            <p className="text-[11px] text-gray-400 font-bold truncate max-w-[150px]">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="py-6 text-sm text-gray-600 font-black uppercase tracking-tighter">{item.brand}</td>
                            
                            <td className="py-6">
                                <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border ${
                                    item.condition === 'Brand New' 
                                    ? 'bg-blue-50 text-[#0070f3] border-blue-100' 
                                    : 'bg-orange-50 text-orange-600 border-orange-100'
                                }`}>
                                    {item.condition}
                                </span>
                            </td>
                            
                            <td className="py-6 text-sm font-black text-gray-900">
                                ${item.price.toLocaleString()}
                            </td>
                            
                            <td className="py-6">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between w-28">
                                        <span className={`text-[10px] font-black uppercase tracking-tighter ${item.stock < 5 ? 'text-red-500' : 'text-gray-500'}`}>
                                            {item.stock} Units
                                        </span>
                                        {item.stock < 5 && (
                                            <span className="animate-pulse size-2 rounded-full bg-red-500" />
                                        )}
                                    </div>
                                    <div className="w-28 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full transition-all duration-700 ${
                                                item.stock < 5 ? 'bg-red-500' : item.stock < 10 ? 'bg-orange-400' : 'bg-[#0070f3]'
                                            }`} 
                                            style={{ width: `${Math.min((item.stock / 20) * 100, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            </td>
                            
                            <td className="py-6 text-right pr-8">
                                <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button 
                                        onClick={() => onEdit(item)}
                                        className="p-3 text-gray-400 hover:text-[#0070f3] hover:bg-white hover:shadow-sm rounded-xl transition-all"
                                        title="Edit Product"
                                    >
                                        <Edit size={18} strokeWidth={2.5} />
                                    </button>
                                    <button 
                                        className="p-3 text-gray-400 hover:text-red-500 hover:bg-white hover:shadow-sm rounded-xl transition-all"
                                        title="Delete Product"
                                    >
                                        <Trash2 size={18} strokeWidth={2.5} />
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