"use client";
import { useState, useMemo } from "react";
import { products } from "../../admin/data"; // Pulling from your central data
import AccessorySidebar from "../../components/Shop/ProductSidebar";
import AccessoryCard from "../../components/Shop/ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SmartphonesPage() {
    // We filter only "Phone" category from the master list
    const phoneData = useMemo(() => products.filter(p => p.category === "Phone"), []);
    
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Increased for better catalog view

    // Toggle Filter Function (Brand/Condition)
    const toggleFilter = (brand: string) => {
        setSelectedBrands(prev => 
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
        setCurrentPage(1); 
    };

    // Filter Logic
    const filteredItems = useMemo(() => {
        return selectedBrands.length === 0 
            ? phoneData 
            : phoneData.filter(item => selectedBrands.includes(item.brand) || selectedBrands.includes(item.condition));
    }, [selectedBrands, phoneData]);

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
                {/* Breadcrumbs */}
                <div className="text-xs text-gray-400 mb-4">
                    Home &gt; <span className="text-gray-900 font-medium">Smartphones</span>
                </div>

                {/* Hero Banner */}
                <div className="bg-[#0070f3] rounded-[2.5rem] p-12 mb-12 text-white relative overflow-hidden h-[320px] flex items-center shadow-2xl shadow-blue-500/20">
                    <div className="relative z-10 max-w-xl">
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">New Arrivals</span>
                        <h1 className="text-5xl font-black mt-4 mb-4 leading-tight">iPhone & Samsung <br/>Flagships.</h1>
                        <p className="text-blue-50 text-sm leading-relaxed opacity-90">Browse our curated collection of brand new and premium UK-used smartphones. All devices are verified and ready for pickup.</p>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute right-[-10%] top-[-20%] size-96 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar - Now handles Phone Brands */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <AccessorySidebar 
                            selectedCats={selectedBrands} 
                            onCatChange={toggleFilter} 
                            onReset={() => setSelectedBrands([])} 
                            // Pass brands to sidebar if it supports dynamic labels
                        />
                    </aside>

                    <main className="flex-1">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900">Smartphone Catalog</h2>
                                <p className="text-xs text-gray-400 font-bold uppercase mt-1">Showing {filteredItems.length} Devices</p>
                            </div>
                            
                            {/* Simple Mobile Filter Indicator */}
                            {selectedBrands.length > 0 && (
                                <button 
                                    onClick={() => setSelectedBrands([])}
                                    className="text-[10px] font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full uppercase"
                                >
                                    Clear Filters ({selectedBrands.length})
                                </button>
                            )}
                        </div>

                        {filteredItems.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                                {currentItems.map(item => (
                                    <AccessoryCard key={item.id} item={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-100">
                                <p className="text-gray-400 font-medium">No smartphones match your current filters.</p>
                                <button onClick={() => setSelectedBrands([])} className="mt-4 text-[#0070f3] font-bold text-sm">Reset all filters</button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-16 flex justify-center gap-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`size-10 rounded-xl font-bold transition-all ${
                                            currentPage === i + 1 
                                            ? "bg-[#0070f3] text-white shadow-lg shadow-blue-500/30" 
                                            : "bg-gray-100 text-gray-400 hover:bg-gray-200"
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