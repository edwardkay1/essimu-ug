"use client";
import { TrendingUp, TrendingDown, AlertCircle, LucideIcon, Activity } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    trend?: string;
    status?: "Action" | "Normal";
    icon?: LucideIcon;
    variant?: "default" | "primary" | "dark";
}

export default function StatCard({ 
    title, 
    value, 
    trend, 
    status, 
    icon: Icon, 
    variant = "default" 
}: StatCardProps) {
    // Logic for trend visualization
    const isPositive = trend?.startsWith('+') || trend?.includes('Units') || trend?.includes('Total') || trend?.includes('Active');

    const themes = {
        default: "bg-white dark:bg-white/[0.02] border-gray-100 dark:border-white/5 text-gray-900 dark:text-white hover:shadow-2xl hover:shadow-blue-500/5",
        primary: "bg-[#0070f3] border-blue-400/30 text-white shadow-2xl shadow-blue-500/30",
        dark: "bg-[#0a0a0a] border-white/5 text-white"
    };

    return (
        <div className={`p-8 rounded-[3rem] border transition-all duration-500 group relative overflow-hidden ${themes[variant]}`}>
            
            {/* --- DECORATIVE GLOW (Primary Only) --- */}
            {variant === "primary" && (
                <div className="absolute -right-4 -top-4 size-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            )}

            <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        {variant === "primary" && <Activity size={10} className="animate-pulse text-blue-200" />}
                        <p className={`text-[9px] font-black uppercase tracking-[0.3em] ${
                            variant === "primary" ? "text-blue-100" : "text-gray-400 dark:text-gray-500"
                        }`}>
                            {title}
                        </p>
                    </div>
                    {status === "Action" && (
                        <span className="flex items-center gap-1.5 w-fit px-3 py-1 bg-red-500 text-white text-[8px] font-black rounded-full uppercase tracking-widest animate-bounce">
                            <AlertCircle size={10} strokeWidth={3} /> Intervention Req.
                        </span>
                    )}
                </div>

                {Icon && (
                    <div className={`size-10 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 duration-500 ${
                        variant === "primary" 
                        ? "bg-white/10 text-white border border-white/10" 
                        : "bg-gray-50 dark:bg-white/5 text-[#0070f3] border border-gray-100 dark:border-white/5"
                    }`}>
                        <Icon size={18} strokeWidth={2.5} />
                    </div>
                )}
            </div>
            
            <div className="flex items-end justify-between relative z-10">
                <div className="space-y-1">
                    <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none">
                        {value}
                    </h3>
                    <p className={`text-[8px] font-bold uppercase tracking-widest opacity-40 ${
                        variant === "primary" ? "text-white" : "text-gray-500"
                    }`}>
                        Verified System Data
                    </p>
                </div>

                {trend && (
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-[0.15em] transition-all ${
                        variant === "primary" 
                        ? "bg-white/15 text-white border border-white/10" 
                        : isPositive 
                            ? 'bg-green-500/10 text-green-600 border border-green-500/10' 
                            : 'bg-gray-100 dark:bg-white/5 text-gray-400 border border-transparent'
                    }`}>
                        {isPositive ? <TrendingUp size={12} strokeWidth={3} /> : <TrendingDown size={12} strokeWidth={3} />}
                        {trend}
                    </div>
                )}
            </div>
        </div>
    );
}