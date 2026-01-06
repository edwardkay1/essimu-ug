"use client";
import { Headset, RotateCcw, Filter, Check, Zap } from "lucide-react";

interface SidebarProps {
    selectedCats: string[];
    onCatChange: (cat: string) => void;
    onReset: () => void;
    activeCategory?: "Phone" | "Laptop" | "TV" | "Accessory";
}

export default function ProductSidebar({ selectedCats, onCatChange, onReset, activeCategory }: SidebarProps) {
    
    const whatsappNumber = "256756922058";

    // Dynamic Filter Data based on current page context
    const getFilterSections = () => {
        const brands = {
            Phone: ["Apple", "Samsung", "Google", "Tecno", "Infinix"],
            Laptop: ["Apple", "HP", "Dell", "Lenovo", "Microsoft"],
            TV: ["Samsung", "LG", "Hisense", "Sony", "TCL"],
            Accessory: ["Apple", "Samsung", "Oraimo", "Anker", "Logitech"]
        };

        return {
            brands: activeCategory ? brands[activeCategory] : [],
        };
    };

    const sections = getFilterSections();

    return (
        <aside className="flex flex-col gap-12 sticky top-24">
            {/* Header Section */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="size-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                        <Filter size={16} className="text-[#0070f3]" />
                    </div>
                    <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Filter.</h2>
                </div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">Refine Catalog Specs</p>
            </div>

            {/* --- BRANDS FILTER --- */}
            {sections.brands.length > 0 && (
                <section>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-6 flex items-center gap-4">
                        Manufacturer
                        <span className="h-[1px] flex-1 bg-gray-100 dark:bg-white/5"></span>
                    </h3>
                    <div className="flex flex-col gap-3">
                        {sections.brands.map((brand) => (
                            <label key={brand} className="flex items-center group cursor-pointer">
                                <div className="relative flex items-center">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedCats.includes(brand)}
                                        onChange={() => onCatChange(brand)}
                                        className="peer size-6 rounded-lg border-2 border-gray-100 dark:border-white/10 text-[#0070f3] focus:ring-0 appearance-none bg-gray-50 dark:bg-white/5 checked:bg-[#0070f3] checked:border-[#0070f3] transition-all cursor-pointer" 
                                    />
                                    <Check className="absolute size-4 text-white left-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" strokeWidth={4} />
                                </div>
                                <span className="ml-4 text-xs font-black text-gray-400 group-hover:text-[#0070f3] peer-checked:text-gray-900 dark:peer-checked:text-white transition-colors uppercase tracking-widest">
                                    {brand}
                                </span>
                            </label>
                        ))}
                    </div>
                </section>
            )}

            {/* --- CONDITION FILTER (Critical for KLA Tech) --- */}
            <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-6 flex items-center gap-4">
                    Hardware Status
                    <span className="h-[1px] flex-1 bg-gray-100 dark:bg-white/5"></span>
                </h3>
                <div className="flex flex-col gap-3">
                    {["Brand New", "UK Used"].map((condition) => (
                        <label key={condition} className="flex items-center group cursor-pointer">
                             <div className="relative flex items-center">
                                <input 
                                    type="checkbox" 
                                    checked={selectedCats.includes(condition)}
                                    onChange={() => onCatChange(condition)}
                                    className="peer size-6 rounded-lg border-2 border-gray-100 dark:border-white/10 text-[#0070f3] focus:ring-0 appearance-none bg-gray-50 dark:bg-white/5 checked:bg-[#0070f3] checked:border-[#0070f3] transition-all cursor-pointer" 
                                />
                                <Check className="absolute size-4 text-white left-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" strokeWidth={4} />
                            </div>
                            <span className="ml-4 text-xs font-black text-gray-400 group-hover:text-[#0070f3] peer-checked:text-gray-900 dark:peer-checked:text-white transition-colors uppercase tracking-widest">
                                {condition}
                            </span>
                        </label>
                    ))}
                </div>
            </section>

            {/* --- PRICE RANGE SYNC --- */}
            <section className="bg-gray-50 dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-2 mb-6">
                    <Zap size={14} className="text-[#0070f3] fill-[#0070f3]" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Price Limit (UGX)</h3>
                </div>
                <div className="flex flex-col gap-3 mb-6">
                    <input type="number" placeholder="Min" className="w-full bg-white dark:bg-black border border-gray-100 dark:border-white/5 rounded-xl p-4 text-xs font-black outline-none focus:border-[#0070f3] transition-all dark:text-white" />
                    <input type="number" placeholder="Max" className="w-full bg-white dark:bg-black border border-gray-100 dark:border-white/5 rounded-xl p-4 text-xs font-black outline-none focus:border-[#0070f3] transition-all dark:text-white" />
                </div>
                <button 
                    onClick={onReset}
                    className="w-full py-4 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 text-gray-400 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white hover:border-red-500 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                    <RotateCcw size={12} /> Reset Protocol
                </button>
            </section>

            {/* --- DIRECT SUPPORT HUB --- */}
            <div className="bg-gradient-to-br from-[#0070f3] to-[#004dc7] rounded-[3rem] p-10 text-center text-white shadow-2xl shadow-blue-500/30 overflow-hidden relative group">
                <div className="absolute -right-6 -top-6 size-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700" />
                
                <div className="relative z-10">
                    <div className="size-14 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                        <Headset size={28} className="text-[#0070f3]" />
                    </div>
                    <h4 className="font-black text-xl mb-3 tracking-tighter uppercase leading-none">Price <br/> Check?</h4>
                    <p className="text-[10px] text-blue-100 mb-8 leading-relaxed font-black uppercase tracking-widest">Chat with B118 Agents for bulk discounts.</p>
                    <button 
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                        className="w-full py-5 bg-white text-[#0070f3] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-blue-50 hover:scale-[1.05] transition-all"
                    >
                        Contact Shop B118
                    </button>
                </div>
            </div>
        </aside>
    );
}