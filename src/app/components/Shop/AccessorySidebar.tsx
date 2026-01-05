"use client";
import { Headset } from "lucide-react";

interface SidebarProps {
    selectedCats: string[];
    onCatChange: (cat: string) => void;
    onReset: () => void;
}

export default function AccessorySidebar({ selectedCats, onCatChange, onReset }: SidebarProps) {
    const categories = [
        { name: "Cases & Protection", key: "Cases", count: 120 },
        { name: "Power & Cables", key: "Power", count: 45 },
        { name: "Audio", key: "Audio", count: 32 },
        { name: "Wearables", key: "Wearables", count: 18 }
    ];

    return (
        <div className="flex flex-col gap-10">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Filters</h2>
                <p className="text-xs text-gray-400 mb-6">Refine results</p>
                
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Categories</h3>
                <div className="flex flex-col gap-4">
                    {categories.map((cat) => (
                        <label key={cat.key} className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    checked={selectedCats.includes(cat.key)}
                                    onChange={() => onCatChange(cat.key)}
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gray-900">{cat.name}</span>
                            </div>
                            <span className="text-xs text-gray-400">({cat.count})</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Price Range</h3>
                <div className="flex gap-2 items-center mb-6">
                    <input type="text" placeholder="Min" className="w-full bg-gray-50 border border-gray-100 rounded-lg p-2 text-sm outline-none" />
                    <span className="text-gray-300">-</span>
                    <input type="text" placeholder="Max" className="w-full bg-gray-50 border border-gray-100 rounded-lg p-2 text-sm outline-none" />
                </div>
                <button 
                    onClick={onReset}
                    className="w-full py-3 bg-[#0070f3] text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
                >
                    Reset Filters
                </button>
            </div>

            {/* Need Help Section */}
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    <Headset size={20} />
                </div>
                <h4 className="font-bold text-sm mb-2 text-gray-900">Need Help?</h4>
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Chat with our experts on WhatsApp to find the perfect gear.</p>
                <button 
                    onClick={() => window.open('https://wa.me/yournumber', '_blank')}
                    className="w-full py-3 bg-[#0070f3] text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
                >
                    Chat Now
                </button>
            </div>
        </div>
    );
}