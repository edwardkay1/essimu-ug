"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "../../admin/data"; 
import AccessorySidebar from "../../components/Shop/ProductSidebar";
import AccessoryCard from "../../components/Shop/ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function LaptopsPage() {
    // 1. Filter only items with the "Laptop" category from the master data
    const laptopData = useMemo(() => 
        products.filter(p => p.category === "Laptop"), 
    []);

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Toggle Filter (Brand/Condition/Category)
    const toggleFilter = (filter: string) => {
        setSelectedFilters(prev => 
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
        setCurrentPage(1); 
    };

    // Filter Logic
    const filteredItems = useMemo(() => {
        return selectedFilters.length === 0 
            ? laptopData 
            : laptopData.filter(item => 
                selectedFilters.includes(item.brand) || 
                selectedFilters.includes(item.condition)
            );
    }, [selectedFilters, laptopData]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const currentItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
                {/* Functional Breadcrumbs */}
                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] mb-6">
                    <Link 
                        href="/" 
                        className="text-gray-400 hover:text-[#0070f3] transition-colors"
                    >
                        Home
                    </Link>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-900">Laptops</span>
                </nav>

                {/* Hero Banner - Professional Dark Theme */}
                <div className="bg-[#111111] rounded-[2.5rem] p-12 mb-12 text-white relative overflow-hidden min-h-[340px] flex items-center shadow-2xl">
                    <div className="relative z-10 max-w-xl">
                        <span className="bg-[#0070f3] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">
                            High Performance
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-black mt-6 mb-4 leading-tight tracking-tight">
                            Work From <br/>Anywhere.
                        </h1>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-md">
                            Explore our range of professional HP EliteBooks, MacBooks, and Dell workstations. 
                            Premium UK-used and brand new options available for immediate delivery.
                        </p>
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute right-[-5%] bottom-[-10%] size-96 bg-[#0070f3]/10 rounded-full blur-[120px]" />
                    <div className="absolute top-10 right-20 size-32 bg-[#0070f3]/5 blur-[60px] rounded-full" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-32">
                            <AccessorySidebar 
                                selectedCats={selectedFilters} 
                                onCatChange={toggleFilter} 
                                onReset={() => setSelectedFilters([])} 
                            />
                        </div>
                    </aside>

                    <main className="flex-1">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Laptop Collection</h2>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="size-2 bg-[#0070f3] rounded-full animate-pulse" />
                                    <p className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.2em]">
                                        {filteredItems.length} Machines In Stock
                                    </p>
                                </div>
                            </div>
                        </div>

                        {filteredItems.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                                {currentItems.map(item => (
                                    <AccessoryCard key={item.id} item={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-32 text-center bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                                <p className="text-gray-500 font-black uppercase tracking-widest text-sm">No Results Found</p>
                                <p className="text-gray-400 text-xs mt-2 font-medium">No laptops match your current filter selection.</p>
                                <button 
                                    onClick={() => setSelectedFilters([])} 
                                    className="mt-6 px-6 py-3 bg-white border border-gray-200 rounded-2xl text-[#0070f3] text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-24 pt-10 border-t border-gray-50 flex justify-center items-center gap-4">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`size-14 rounded-[1.25rem] font-black transition-all text-sm tracking-tighter ${
                                            currentPage === i + 1 
                                            ? "bg-[#0070f3] text-white shadow-2xl shadow-blue-500/40 scale-110" 
                                            : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                    >
                                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
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