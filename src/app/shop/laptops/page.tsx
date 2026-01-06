"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "../../admin/data"; 
import ProductSidebar from "../../components/Shop/ProductSidebar";
import ProductCard from "../../components/Shop/ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Monitor, ChevronRight, Terminal, Cpu, Search, X } from "lucide-react";

export default function LaptopsPage() {
    const laptopData = useMemo(() => 
        products.filter(p => p.category === "Laptop"), 
    []);

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Adjusted for 2-column mobile math

    const toggleFilter = (filter: string) => {
        setSelectedFilters(prev => 
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
        setCurrentPage(1); 
    };

    // --- ENHANCED FILTER LOGIC (SEARCH + CATEGORY) ---
    const filteredItems = useMemo(() => {
        return laptopData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 item.brand.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesFilter = selectedFilters.length === 0 || 
                                 selectedFilters.includes(item.brand) || 
                                 selectedFilters.includes(item.condition);

            return matchesSearch && matchesFilter;
        });
    }, [selectedFilters, searchQuery, laptopData]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const currentItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    return (
        <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
            <Navbar />
            
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 lg:py-12">
                {/* --- SEARCH BAR: GLOBAL IMPLEMENTATION --- */}
                <div className="relative mb-10 group">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-400 group-focus-within:text-[#0070f3] transition-colors" />
                    </div>
                    <input 
                        type="text"
                        placeholder="Search Laptops (e.g. MacBook Pro, HP EliteBook...)"
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                        className="w-full bg-gray-50 dark:bg-white/[0.03] border-2 border-transparent focus:border-[#0070f3] rounded-[2rem] py-5 pl-16 pr-6 text-sm font-bold dark:text-white outline-none transition-all shadow-sm focus:shadow-blue-500/10"
                    />
                    {searchQuery && (
                        <button 
                            onClick={() => setSearchQuery("")}
                            className="absolute inset-y-0 right-6 flex items-center text-gray-400 hover:text-red-500"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>

                {/* --- NAVIGATION --- */}
                <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] mb-10 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="text-gray-400 hover:text-[#0070f3]">Base Hub</Link>
                    <ChevronRight size={10} className="text-gray-300" />
                    <span className="text-[#0070f3]">Laptop Inventory</span>
                </nav>

                {/* --- HERO BANNER --- */}
                <div className="bg-[#0f0f0f] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-16 mb-12 lg:mb-16 text-white relative overflow-hidden flex items-center border border-white/5 shadow-2xl">
                    <div className="relative z-10 max-w-2xl">
                        <div className="flex items-center gap-2 mb-4 lg:mb-6">
                            <Terminal size={14} className="text-[#0070f3]" />
                            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-[#0070f3]">Enterprise Workstations</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black mb-4 lg:mb-6 leading-none tracking-tighter uppercase">
                            Engineered <br className="hidden sm:block"/> <span className="text-gray-500">for Power.</span>
                        </h1>
                        <p className="text-gray-400 text-xs lg:text-sm font-bold leading-relaxed max-w-md italic">
                            Certified UK-Used Grade-A & Factory New machines.
                        </p>
                    </div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0070f3 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    <aside className="hidden lg:block w-72 shrink-0">
                        <ProductSidebar 
                            selectedCats={selectedFilters} 
                            onCatChange={toggleFilter} 
                            onReset={() => setSelectedFilters([])}
                            activeCategory="Laptop" 
                        />
                    </aside>

                    <main className="flex-1">
                        <div className="flex justify-between items-end mb-10 border-b border-gray-100 dark:border-white/5 pb-6">
                            <div>
                                <h2 className="text-2xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tighter uppercase flex items-center gap-2">
                                    Units. <Cpu size={20} className="text-[#0070f3]" />
                                </h2>
                                <p className="text-[9px] font-black text-[#0070f3] uppercase tracking-[0.2em] mt-2">
                                    {filteredItems.length} Systems Found
                                </p>
                            </div>
                        </div>

                        {/* --- GRID: 2 COLUMNS ON MOBILE (grid-cols-2) --- */}
                        {filteredItems.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-8 sm:gap-y-16">
                                {currentItems.map(item => (
                                    <ProductCard key={item.id} item={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-24 flex flex-col items-center text-center bg-gray-50 dark:bg-white/[0.02] rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-white/5">
                                <Monitor size={40} className="text-gray-300 mb-4" />
                                <p className="text-gray-500 font-black uppercase tracking-widest text-[10px]">No Mismatch Found</p>
                                <button onClick={() => {setSelectedFilters([]); setSearchQuery("");}} className="mt-6 px-8 py-3 bg-white dark:bg-white/10 rounded-xl text-[#0070f3] text-[9px] font-black uppercase tracking-widest">Clear All Data</button>
                            </div>
                        )}

                        {/* --- PAGINATION --- */}
                        {totalPages > 1 && (
                            <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5 flex justify-center items-center gap-3 lg:gap-6">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                        className={`size-10 lg:size-14 rounded-xl lg:rounded-2xl font-black transition-all text-[10px] lg:text-xs ${
                                            currentPage === i + 1 ? "bg-[#0070f3] text-white shadow-xl" : "bg-gray-50 dark:bg-white/5 text-gray-400"
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}