"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
// --- FIREBASE IMPORTS ---
import { db } from "@/lib/firebase"; 
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
// ------------------------
import ProductSidebar from "../../components/Shop/ProductSidebar";
import ProductCard from "../../components/Shop/ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Monitor, ChevronRight, Tv, Play, Cast, Search, X, Loader2 } from "lucide-react";

export default function TelevisionsPage() {
    const [tvs, setTvs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // --- LIVE CLOUD SYNC ---
    useEffect(() => {
        // Leverages the index: category (Asc) + createdAt (Desc)
        const q = query(
            collection(db, "products"),
            where("category", "==", "TV"), // Matches the value from your Admin Form
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTvs(items);
            setLoading(false);
        }, (error) => {
            console.error("TV Sync Error:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const toggleFilter = (filter: string) => {
        setSelectedFilters(prev => 
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
        setCurrentPage(1); 
    };

    // --- CLIENT-SIDE SEARCH & FILTER ---
    const filteredItems = useMemo(() => {
        return tvs.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 item.brand.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesFilter = selectedFilters.length === 0 || 
                                 selectedFilters.includes(item.brand) || 
                                 selectedFilters.includes(item.condition);

            return matchesSearch && matchesFilter;
        });
    }, [selectedFilters, searchQuery, tvs]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const currentItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    return (
        <div className="bg-white dark:bg-[#08080a] min-h-screen">
            <Navbar />
            
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 lg:py-12">
                
                {/* --- SEARCH BAR --- */}
                <div className="relative mb-8 lg:mb-12 group">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <input 
                        type="text"
                        placeholder="Search TVs (Sony 55”, LG OLED...)"
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                        className="w-full bg-gray-50 dark:bg-white/[0.03] border-2 border-transparent focus:border-indigo-500 rounded-[2rem] py-5 pl-16 pr-6 text-sm font-bold dark:text-white outline-none transition-all shadow-sm focus:shadow-indigo-500/10"
                    />
                </div>

                {/* --- NAVIGATION --- */}
                <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] mb-10 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="text-gray-400 hover:text-indigo-500 transition-colors">Home</Link>
                    <ChevronRight size={10} className="text-gray-300" />
                    <span className="text-indigo-600">TV Registry</span>
                </nav>

                {/* --- HERO BANNER --- */}
                <div className="bg-gradient-to-br from-[#0a0a0c] via-[#121225] to-black rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-16 mb-12 lg:mb-16 text-white relative overflow-hidden flex items-center shadow-3xl border border-white/5">
                    <div className="relative z-10 max-w-2xl">
                        <div className="flex items-center gap-2 mb-4 lg:mb-6">
                            <div className="bg-indigo-600 p-1 rounded">
                                <Cast size={12} className="text-white" />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400">
                                B118 Visuals
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black mb-4 lg:mb-6 leading-none tracking-tighter uppercase">
                            Home <br/> <span className="text-indigo-500">Cinema</span>
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    <aside className="hidden lg:block w-72 shrink-0">
                        <ProductSidebar 
                            selectedCats={selectedFilters} 
                            onCatChange={toggleFilter} 
                            onReset={() => setSelectedFilters([])}
                            activeCategory="TV" 
                        />
                    </aside>

                    <main className="flex-1">
                        {loading ? (
                            <div className="py-24 flex flex-col items-center justify-center gap-4">
                                <Loader2 className="animate-spin text-indigo-500" size={40} />
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Syncing Media Inventory...</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-end mb-10 border-b border-gray-100 dark:border-white/5 pb-6">
                                    <div>
                                        <h2 className="text-2xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tighter uppercase flex items-center gap-2">
                                            Smart Displays <Play size={20} className="text-indigo-600 fill-indigo-600" />
                                        </h2>
                                        <p className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em] mt-2">
                                            {filteredItems.length} Units Ready
                                        </p>
                                    </div>
                                </div>

                                {filteredItems.length > 0 ? (
                                    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-8 sm:gap-y-16">
                                        {currentItems.map(item => (
                                            <ProductCard key={item.id} item={item} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-24 flex flex-col items-center text-center bg-gray-50 dark:bg-white/[0.02] rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-white/5">
                                        <Tv size={40} className="text-gray-300 mb-4" />
                                        <p className="text-gray-500 font-black uppercase tracking-widest text-[10px]">No TVs Found</p>
                                    </div>
                                )}

                                {/* --- PAGINATION --- */}
                                {totalPages > 1 && (
                                    <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5 flex justify-center items-center gap-3 lg:gap-6">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                                className={`size-10 lg:size-14 rounded-xl lg:rounded-2xl font-black transition-all ${
                                                    currentPage === i + 1 ? "bg-indigo-600 text-white shadow-xl" : "bg-gray-50 dark:bg-white/5 text-gray-400"
                                                }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}