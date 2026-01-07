"use client";
import Link from "next/link";
import Image from "next/image"; // 1. Added Image import
import { usePathname } from "next/navigation";
import { 
    LayoutDashboard, List, LogOut, 
    User, ShieldCheck, Activity, ExternalLink 
} from "lucide-react"; // Removed Box icon

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Product List", href: "/admin/products", icon: List },
    ];

    return (
        <div className="flex min-h-screen bg-[#f4f7fa] dark:bg-[#08080a] transition-colors duration-500">
            
            {/* --- SIDEBAR --- */}
            <aside className="w-72 bg-white dark:bg-[#0c0c0e] border-r border-gray-100 dark:border-white/5 p-8 flex flex-col fixed h-full z-50 transition-colors duration-500">
                {/* Brand */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-3">
                        {/* 2. Swapped Box Icon for essimulogo.png */}
                        <div className="relative size-12 flex items-center justify-center transition-transform hover:scale-105">
                             <Image 
                                src="/essimulogo.png" 
                                alt="Essimu Logo" 
                                width={48} 
                                height={48} 
                                className="object-contain"
                                priority 
                            />
                        </div>
                        <div>
                            <h1 className="font-black text-gray-900 dark:text-white leading-none tracking-tighter text-xl uppercase">ESSIMU</h1>
                            <span className="text-[9px] text-[#0070f3] font-black uppercase tracking-[0.3em]">Your Store Hub</span>
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <nav className="flex-1 space-y-3">
                    <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] px-4 mb-6">Quick Access</p>
                    
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.name}
                                href={item.href} 
                                className={`flex items-center justify-between group px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                                    isActive 
                                    ? "bg-[#0070f3] text-white shadow-xl shadow-blue-500/25" 
                                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon size={18} strokeWidth={isActive ? 3 : 2} />
                                    {item.name}
                                </div>
                                {isActive && <div className="size-1.5 bg-white rounded-full animate-pulse" />}
                            </Link>
                        );
                    })}
                </nav>

                {/* Exit */}
                <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                    <Link 
                        href="/" 
                        className="flex items-center justify-between px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <LogOut size={18} />
                            Back to Shop
                        </div>
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                </div>
            </aside>

            {/* --- MAIN AREA --- */}
            <div className="flex-1 ml-72 flex flex-col">
                {/* Header */}
                <header className="h-24 bg-white/70 dark:bg-[#0c0c0e]/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 px-12 flex items-center justify-between sticky top-0 z-40 transition-colors duration-500">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                            <ShieldCheck className="text-green-600 dark:text-green-400" size={14} />
                            <span className="text-[9px] font-black text-green-700 dark:text-green-500 uppercase tracking-widest">Safe & Verified</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                            <Activity className="text-[#0070f3]" size={14} />
                            <span className="text-[9px] font-black text-[#0070f3] uppercase tracking-widest">Live Store Activity</span>
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-2 rounded-2xl border border-gray-100 dark:border-white/10">
                            <div className="text-right pl-4">
                                <p className="text-[10px] font-black text-gray-900 dark:text-white uppercase leading-none">Store Owner</p>
                                <p className="text-[8px] text-[#0070f3] font-black uppercase tracking-tighter mt-1">Verified Access</p>
                            </div>
                            <div className="size-10 bg-white dark:bg-[#111] rounded-xl flex items-center justify-center text-[#0070f3] border border-gray-200 dark:border-white/10 shadow-sm">
                                <User size={20} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-12">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}