"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, List, Smartphone, LogOut, User, ShieldCheck } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Product List", href: "/admin/products", icon: List },
    ];

    return (
        <div className="flex min-h-screen bg-[#f8f9fa]">
            {/* --- SIDEBAR --- */}
            <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col fixed h-full z-50">
                {/* Brand Logo */}
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="bg-[#0070f3] p-2 rounded-xl text-white shadow-lg shadow-blue-500/20">
                        <Smartphone size={22} />
                    </div>
                    <div>
                        <h1 className="font-black text-gray-900 leading-none tracking-tight">ESSIMU</h1>
                        <span className="text-[10px] text-[#0070f3] font-bold uppercase tracking-widest">Command</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-3 mb-4">Inventory</p>
                    
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.name}
                                href={item.href} 
                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                                    isActive 
                                    ? "bg-[#0070f3] text-white shadow-xl shadow-blue-500/20" 
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                            >
                                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer Action: Combined Logout/Exit */}
                <div className="pt-6 border-t border-gray-100">
                    <Link 
                        href="/" 
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
                    >
                        <LogOut size={18} />
                        Exit to Shop
                    </Link>
                </div>
            </aside>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 ml-64 flex flex-col">
                {/* Top Header Bar */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-10 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="text-green-500" size={18} />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Secure Admin Session</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-gray-50 pl-4 pr-1 py-1 rounded-2xl border border-gray-100">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs font-black text-gray-900">Store Owner</p>
                                <p className="text-[9px] text-[#0070f3] font-bold uppercase">Root Access</p>
                            </div>
                            <div className="size-9 bg-white rounded-xl flex items-center justify-center text-[#0070f3] border border-gray-200 shadow-sm">
                                <User size={18} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-10 max-w-7xl">
                    {children}
                </main>
            </div>
        </div>
    );
}