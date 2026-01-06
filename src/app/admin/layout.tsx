"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    LayoutDashboard, List, Smartphone, LogOut, 
    User, ShieldCheck, Box, 
    ExternalLink, Activity 
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Terminal", href: "/admin", icon: LayoutDashboard },
        { name: "Unit Catalog", href: "/admin/products", icon: List },
    ];

    return (
        <div className="flex min-h-screen bg-[#f4f7fa] dark:bg-[#08080a]">
            {/* --- COMMAND SIDEBAR --- */}
            <aside className="w-72 bg-white dark:bg-[#0c0c0e] border-r border-gray-100 dark:border-white/5 p-8 flex flex-col fixed h-full z-50">
                {/* Brand Logo & Protocol Status */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-[#0070f3] size-12 rounded-2xl text-white shadow-2xl shadow-blue-500/40 flex items-center justify-center">
                            <Box size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="font-black text-gray-900 dark:text-white leading-none tracking-tighter text-xl uppercase">ESSIMU</h1>
                            <span className="text-[9px] text-[#0070f3] font-black uppercase tracking-[0.3em]">Command Center</span>
                        </div>
                    </div>
                </div>

                {/* Primary Navigation */}
                <nav className="flex-1 space-y-3">
                    <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] px-4 mb-6">Operations Hub</p>
                    
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.name}
                                href={item.href} 
                                className={`flex items-center justify-between group px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                                    isActive 
                                    ? "bg-[#0070f3] text-white shadow-xl shadow-blue-500/25" 
                                    : "text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
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

                {/* Exit Protocol */}
                <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                    <Link 
                        href="/" 
                        className="flex items-center justify-between px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <LogOut size={18} />
                            Exit to Shop
                        </div>
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                </div>
            </aside>

            {/* --- CONTROL VIEW AREA --- */}
            <div className="flex-1 ml-72 flex flex-col">
                {/* Global Admin Header */}
                <header className="h-24 bg-white/70 dark:bg-[#0c0c0e]/70 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 px-12 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                            <ShieldCheck className="text-green-500" size={14} />
                            <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">Session Secure</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                            <Activity className="text-[#0070f3]" size={14} />
                            <span className="text-[9px] font-black text-[#0070f3] uppercase tracking-widest">B118 Live Sync</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Profile Sync */}
                        <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-2 rounded-2xl border border-gray-100 dark:border-white/10">
                            <div className="text-right pl-4">
                                <p className="text-[10px] font-black text-gray-900 dark:text-white uppercase leading-none">Essimu Owner</p>
                                <p className="text-[8px] text-[#0070f3] font-black uppercase tracking-tighter mt-1">Verified Admin Access</p>
                            </div>
                            <div className="size-10 bg-white dark:bg-[#111] rounded-xl flex items-center justify-center text-[#0070f3] border border-gray-200 dark:border-white/5 shadow-sm">
                                <User size={20} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Sub-Page Content Injection */}
                <main className="p-12">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}