"use client";
import { useState, useMemo } from "react";
import { smartphoneData } from "../../data/smartphones";
import SidebarFilters from "../../components/Shop/SidebarFilters";
import SmartphoneCard from "../../components/Shop/SmartphoneCard";
import Navbar from "../../components/Navbar";
import { Search } from "lucide-react";

export default function SmartphonesPage() {
    // 1. State for filters
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedStorage, setSelectedStorage] = useState<string[]>([]);

    // 2. Filter Logic (Calculated every time a state changes)
    const filteredPhones = useMemo(() => {
        return smartphoneData.filter((phone) => {
            const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(phone.brand);
            const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(phone.storage);
            
            return matchesSearch && matchesBrand && matchesStorage;
        });
    }, [searchQuery, selectedBrands, selectedStorage]);

    // 3. Toggle functions to pass to Sidebar
    const toggleBrand = (brand: string) => {
        setSelectedBrands(prev => 
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const toggleStorage = (size: string) => {
        setSelectedStorage(prev => 
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const clearFilters = () => {
        setSelectedBrands([]);
        setSelectedStorage([]);
        setSearchQuery("");
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <div className="max-w-360 mx-auto px-6 lg:px-20 py-10">
                {/* Breadcrumbs */}
                <div className="text-xs text-gray-400 mb-4">
                    Home &gt; <span className="text-gray-900 font-medium">Smartphones</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest Smartphones</h1>
                        <p className="text-gray-500">Showing {filteredPhones.length} devices available in Uganda.</p>
                    </div>

                    {/* Integrated Search Bar */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text"
                            placeholder="Search e.g. 'Tecno Spark'..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    <aside className="hidden lg:block w-64 shrink-0">
                        <SidebarFilters 
                            selectedBrands={selectedBrands}
                            onBrandChange={toggleBrand}
                            selectedStorage={selectedStorage}
                            onStorageChange={toggleStorage}
                            onClear={clearFilters}
                        />
                    </aside>

                    <div className="flex-1">
                        {/* Results Grid */}
                        {filteredPhones.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredPhones.map((phone) => (
                                    <SmartphoneCard key={phone.id} phone={phone} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
                                <p className="text-gray-400 mb-4">No phones found matching your criteria.</p>
                                <button onClick={clearFilters} className="text-blue-600 font-bold hover:underline">
                                    Reset all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}