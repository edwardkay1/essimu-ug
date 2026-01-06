"use client";
import { Headset, RotateCcw, Filter } from "lucide-react";

interface SidebarProps {
    selectedCats: string[];
    onCatChange: (cat: string) => void;
    onReset: () => void;
    activeCategory?: "Phone" | "Laptop" | "TV" | "Accessory";
}

export default function ProductSidebar({ selectedCats, onCatChange, onReset, activeCategory }: SidebarProps) {
    
    // Dynamic Filter Data based on current page context
    const getFilterSections = () => {
        const brands = {
            Phone: ["Apple", "Samsung", "Tecno", "Google", "Infinix"],
            Laptop: ["Apple", "HP", "Dell", "Lenovo", "Microsoft"],
            TV: ["Samsung", "LG", "Hisense", "Sony", "TCL"],
            Accessory: ["Apple", "Samsung", "Oraimo", "Anker", "Logitech"]
        };

        const subCats = {
            Accessory: ["Cases", "Power", "Audio", "Wearables"],
            Laptop: ["Workstation", "Ultrabook", "Gaming"],
            Phone: ["Flagship", "Budget", "UK Used"],
            TV: ["Smart TV", "4K UHD", "OLED"]
        };

        return {
            brands: activeCategory ? brands[activeCategory] : [],
            subs: activeCategory ? subCats[activeCategory] : []
        };
    };

    const sections = getFilterSections();

    return (
        <div className="flex flex-col gap-12">
            {/* Header Section */}
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <Filter size={16} className="text-[#0070f3]" />
                    <h2 className="text-xl font-black text-gray-900 tracking-tight">Filters</h2>
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Refine Catalog</p>
            </div>

            {/* Brands Filter */}
            {sections.brands.length > 0 && (
                <section>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center justify-between">
                        Shop Brand
                        <span className="h-[1px] w-12 bg-gray-100"></span>
                    </h3>
                    <div className="flex flex-col gap-4">
                        {sections.brands.map((brand) => (
                            <label key={brand} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex items-center">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedCats.includes(brand)}
                                            onChange={() => onCatChange(brand)}
                                            className="peer size-5 rounded-lg border-2 border-gray-100 text-[#0070f3] focus:ring-0 appearance-none bg-gray-50 checked:bg-[#0070f3] checked:border-[#0070f3] transition-all cursor-pointer" 
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors uppercase tracking-tight">{brand}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </section>
            )}

            {/* Condition/Sub-Category Filter */}
            <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center justify-between">
                    Condition
                    <span className="h-[1px] w-12 bg-gray-100"></span>
                </h3>
                <div className="flex flex-col gap-4">
                    {["Brand New", "UK Used"].map((condition) => (
                        <label key={condition} className="flex items-center gap-3 group cursor-pointer">
                             <input 
                                type="checkbox" 
                                checked={selectedCats.includes(condition)}
                                onChange={() => onCatChange(condition)}
                                className="peer size-5 rounded-lg border-2 border-gray-100 text-[#0070f3] focus:ring-0 appearance-none bg-gray-50 checked:bg-[#0070f3] checked:border-[#0070f3] transition-all cursor-pointer" 
                            />
                            <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors uppercase tracking-tight">{condition}</span>
                        </label>
                    ))}
                </div>
            </section>

            {/* Price Range */}
            <section className="bg-gray-50/50 p-6 rounded-[2rem] border border-gray-100">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-5">Price Limit</h3>
                <div className="flex gap-2 items-center mb-6">
                    <input type="number" placeholder="Min" className="w-full bg-white border border-gray-100 rounded-xl p-3 text-xs font-black outline-none focus:border-[#0070f3] transition-all" />
                    <span className="text-gray-300">/</span>
                    <input type="number" placeholder="Max" className="w-full bg-white border border-gray-100 rounded-xl p-3 text-xs font-black outline-none focus:border-[#0070f3] transition-all" />
                </div>
                <button 
                    onClick={onReset}
                    className="w-full py-4 bg-white border border-gray-200 text-gray-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#0070f3] hover:text-white hover:border-[#0070f3] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                    <RotateCcw size={14} /> Reset Filters
                </button>
            </section>

            {/* Need Help Section */}
            <div className="bg-[#0070f3] rounded-[2.5rem] p-8 text-center text-white shadow-xl shadow-blue-500/20 overflow-hidden relative group">
                {/* Decorative background element */}
                <div className="absolute -right-4 -top-4 size-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white backdrop-blur-md border border-white/20">
                    <Headset size={24} />
                </div>
                <h4 className="font-black text-base mb-2 uppercase tracking-tight">Need Expert Advice?</h4>
                <p className="text-[11px] text-blue-100 mb-6 leading-relaxed font-medium">Chat with our catalog experts to find the right specs for your needs.</p>
                <button 
                    onClick={() => window.open('https://wa.me/yournumber', '_blank')}
                    className="w-full py-4 bg-white text-[#0070f3] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all"
                >
                    WhatsApp Support
                </button>
            </div>
        </div>
    );
}