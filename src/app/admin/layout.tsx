"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
    LayoutDashboard, List, LogOut, 
    User, ShieldCheck, Activity, ExternalLink,
    MonitorOff, Laptop
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, loading } = useAuth();
    const [isMobile, setIsMobile] = useState(false);

    // --- RESPONSIVE CHECK ---
    useEffect(() => {
        const checkScreen = () => {
            // Logic: If screen width is less than 1024px (Laptops), trigger mobile view
            setIsMobile(window.innerWidth < 1024);
        };
        
        checkScreen(); // Check on mount
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    // --- SECURITY CHECK ---
    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    const menuItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Product List", href: "/admin/products", icon: List },
    ];

    // --- LOADING STATE ---
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a]">
                <div className="relative size-16 animate-pulse">
                    <Image src="/Image/essimulogo.png" alt="Loading" fill className="object-contain" />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#0070f3]">
                    Authenticating Essimu Hub...
                </p>
            </div>
        );
    }

    // --- MOBILE BLOCKER MESSAGE ---
    if (isMobile) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a] px-8 text-center">
                <div className="size-24 bg-red-500/10 rounded-[2.5rem] flex items-center justify-center mb-8 border border-red-500/20">
                    <MonitorOff className="text-red-500" size={40} />
                </div>
                <h1 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4 leading-none">
                    Admin Access <br/> <span className="text-[#0070f3]">Desktop Only</span>
                </h1>
                <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 max-w-[300px] leading-relaxed uppercase tracking-widest mb-10">
                    The Essimu Management Hub requires a wider display for precise inventory control.
                </p>
                <div className="flex flex-col gap-4 w-full max-w-xs">
                    <div className="flex items-center justify-center gap-3 py-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                        <Laptop size={16} className="text-[#0070f3]" />
                        <span className="text-[9px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Switch to a Computer</span>
                    </div>
                    <Link href="/" className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.2em] underline">
                        Back to Public Shop
                    </Link>
                </div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="flex min-h-screen bg-[#f4f7fa] dark:bg-[#08080a] transition-colors duration-500">
            {/* --- SIDEBAR --- */}
            <aside className="w-72 bg-white dark:bg-[#0c0c0e] border-r border-gray-100 dark:border-white/5 p-8 flex flex-col fixed h-full z-50 transition-colors duration-500">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="relative size-12">
                             <Image src="/Image/essimulogo.png" alt="Logo" width={48} height={48} className="object-contain" priority />
                        </div>
                        <div>
                            <h1 className="font-black text-gray-900 dark:text-white leading-none tracking-tighter text-xl uppercase">ESSIMU</h1>
                            <span className="text-[9px] text-[#0070f3] font-black uppercase tracking-[0.3em]">ADMIN HUB</span>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 space-y-3">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] px-4 mb-6">Quick Access</p>
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.name}
                                href={item.href} 
                                className={`flex items-center justify-between px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                                    isActive 
                                    ? "bg-[#0070f3] text-white shadow-xl shadow-blue-500/25" 
                                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon size={18} />
                                    {item.name}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                    <Link href="/" className="flex items-center gap-4 px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
                        <LogOut size={18} />
                        Back to Shop
                    </Link>
                </div>
            </aside>

            {/* --- MAIN AREA --- */}
            <div className="flex-1 ml-72 flex flex-col">
                <header className="h-24 bg-white/70 dark:bg-[#0c0c0e]/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 px-12 flex items-center justify-between sticky top-0 z-40 transition-colors duration-500">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                            <ShieldCheck className="text-green-600 dark:text-green-400" size={14} />
                            <span className="text-[9px] font-black text-green-700 dark:text-green-500 uppercase tracking-widest">Encrypted Session</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-2 rounded-2xl border border-gray-100 dark:border-white/10">
                        <div className="text-right pl-4">
                            <p className="text-[10px] font-black text-gray-900 dark:text-white uppercase leading-none">{user.email?.split('@')[0] || "Owner"}</p>
                            <p className="text-[8px] text-[#0070f3] font-black uppercase tracking-tighter mt-1">Administrator</p>
                        </div>
                        <div className="size-10 bg-white dark:bg-[#111] rounded-xl flex items-center justify-center text-[#0070f3] border border-gray-200 dark:border-white/10 shadow-sm">
                            <User size={20} />
                        </div>
                    </div>
                </header>

                <main className="p-12">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}