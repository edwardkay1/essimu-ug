"use client";
import { useState, useMemo } from "react";
import { accessoriesData } from "../../data/accessories";
import AccessorySidebar from "../../components/Shop/AccessorySidebar";
import AccessoryCard from "../../components/Shop/AccessoryCard";
import Navbar from "../../components/Navbar";

export default function AccessoriesPage() {
    const [selectedCats, setSelectedCats] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Toggle Category Function
    const toggleCat = (cat: string) => {
        setSelectedCats(prev => 
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
        setCurrentPage(1); // Reset to page 1 on filter change
    };

    // Filter Logic
    const filteredItems = useMemo(() => {
        return selectedCats.length === 0 
            ? accessoriesData 
            : accessoriesData.filter(item => selectedCats.includes(item.category));
    }, [selectedCats]);

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
                {/* Hero Banner */}
                {/* Breadcrumbs */}
                <div className="text-xs text-gray-400 mb-4">
                    Home &gt; <span className="text-gray-900 font-medium">Accessories</span>
                </div>
                <div className="bg-black rounded-[2.5rem] p-12 mb-12 text-white relative overflow-hidden h-[300px] flex items-center">
                    <div className="relative z-10 max-w-lg">
                        <span className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Limited Offer</span>
                        <h1 className="text-5xl font-bold mt-4 mb-3">Upgrade Your Gear</h1>
                        <p className="text-gray-400 text-sm leading-relaxed">Get 50% off premium screen protectors and cases for a limited time. Direct WhatsApp ordering enabled.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="hidden lg:block w-64 shrink-0">
                        <AccessorySidebar 
                            selectedCats={selectedCats} 
                            onCatChange={toggleCat} 
                            onReset={() => setSelectedCats([])} 
                        />
                    </aside>

                    <main className="flex-1">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-gray-900">All Accessories ({filteredItems.length})</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {currentItems.map(item => (
                                <AccessoryCard key={item.id} item={item} />
                            ))}
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
}