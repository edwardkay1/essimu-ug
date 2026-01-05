"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Headset } from "lucide-react";

interface SidebarProps {
    selectedBrands: string[];
    onBrandChange: (brand: string) => void;
    selectedStorage: string[];
    onStorageChange: (size: string) => void;
    onClear: () => void;
}

export default function SidebarFilters({ 
    selectedBrands, 
    onBrandChange, 
    selectedStorage, 
    onStorageChange,
    onClear 
}: SidebarProps) {
    const [openSections, setOpenSections] = useState({
        brand: true,
        storage: true,
        price: true,
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button 
                    onClick={onClear}
                    className="text-xs font-bold text-[#0070f3] hover:underline transition-all"
                >
                    Clear All
                </button>
            </div>

            {/* Brand Filter */}
            <div className="border-t border-gray-100 pt-6">
                <button 
                    onClick={() => toggleSection('brand')}
                    className="flex justify-between items-center w-full mb-4 text-sm font-bold text-gray-900"
                >
                    Brand
                    {openSections.brand ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openSections.brand && (
                    <div className="flex flex-col gap-3">
                        {["Apple", "Samsung", "Google", "Tecno", "Infinix"].map((brand) => (
                            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                    type="checkbox" 
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => onBrandChange(brand)}
                                    className="w-4 h-4 rounded border-gray-300 text-[#0070f3] focus:ring-[#0070f3]" 
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{brand}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Storage Filter */}
            <div className="border-t border-gray-100 pt-6">
                <button 
                    onClick={() => toggleSection('storage')}
                    className="flex justify-between items-center w-full mb-4 text-sm font-bold text-gray-900"
                >
                    Storage
                    {openSections.storage ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openSections.storage && (
                    <div className="flex flex-col gap-3">
                        {["128GB", "256GB", "512GB"].map((size) => (
                            <label key={size} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                    type="checkbox" 
                                    checked={selectedStorage.includes(size)}
                                    onChange={() => onStorageChange(size)}
                                    className="w-4 h-4 rounded border-gray-300 text-[#0070f3] focus:ring-[#0070f3]" 
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{size}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Price Range Filter */}
            <div className="border-t border-gray-100 pt-6">
                <button 
                    onClick={() => toggleSection('price')}
                    className="flex justify-between items-center w-full mb-4 text-sm font-bold text-gray-900"
                >
                    Price Range
                    {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openSections.price && (
                    <div className="px-2">
                        <input 
                            type="range" 
                            min="100" 
                            max="2000" 
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0070f3]"
                        />
                        <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            <span>$100</span>
                            <span>$2,000+</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Need Help Section */}
            <div className="bg-blue-50 rounded-[1.5rem] p-6 text-center mt-4 border border-blue-100/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#0070f3] shadow-sm">
                    <Headset size={24} />
                </div>
                <h4 className="font-bold text-sm mb-2 text-gray-900">Need Help?</h4>
                <p className="text-[11px] text-gray-500 mb-5 leading-relaxed">
                    Not sure which device fits your needs? Chat with our experts on WhatsApp.
                </p>
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