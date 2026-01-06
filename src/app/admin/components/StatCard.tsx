"use client";
import { TrendingUp, TrendingDown, AlertCircle, LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    trend?: string;
    status?: "Action" | "Normal";
    icon?: LucideIcon;
    variant?: "default" | "primary";
}

export default function StatCard({ title, value, trend, status, icon: Icon, variant = "default" }: StatCardProps) {
    const isPositive = trend?.startsWith('+') || trend?.includes('Units') || trend?.includes('Total');

    return (
        <div className={`p-8 rounded-[2.5rem] border transition-all duration-300 ${
            variant === "primary" 
            ? "bg-[#0070f3] border-blue-400 shadow-xl shadow-blue-500/20 text-white" 
            : "bg-white border-gray-100 shadow-sm hover:shadow-md text-gray-900"
        }`}>
            <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                        variant === "primary" ? "text-blue-100" : "text-gray-400"
                    }`}>
                        {title}
                    </p>
                    {status === "Action" && (
                        <span className="flex items-center gap-1 w-fit px-2 py-0.5 bg-red-500 text-white text-[9px] font-black rounded-full uppercase tracking-tighter">
                            <AlertCircle size={10} /> Needs Attention
                        </span>
                    )}
                </div>
                {Icon && (
                    <div className={`p-2 rounded-xl ${
                        variant === "primary" ? "bg-white/10 text-white" : "bg-blue-50 text-[#0070f3]"
                    }`}>
                        <Icon size={18} />
                    </div>
                )}
            </div>
            
            <div className="flex items-end justify-between">
                <div>
                    <h3 className="text-4xl font-black tracking-tight">{value}</h3>
                </div>
                {trend && (
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${
                        variant === "primary" 
                        ? "bg-white/20 text-white" 
                        : isPositive ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'
                    }`}>
                        {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {trend}
                    </div>
                )}
            </div>
        </div>
    );
}