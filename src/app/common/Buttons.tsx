"use client";
import { MessageSquare, Wrench, Smartphone, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

/**
 * THE PRIMARY CONVERSION BUTTON
 * Used for instant sales acquisition.
 */
export function Order() {
  const whatsappNumber = "256756922058";
  
  return (
    <button 
        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hello%20Essimu%2C%20I%20want%20to%20initialize%20a%20hardware%20order%20sync.`, '_blank')}
        className="flex items-center justify-center overflow-hidden rounded-2xl h-12 px-8 bg-[#0070f3] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95 group"
    >
        <MessageSquare size={16} className="mr-3 fill-white group-hover:rotate-12 transition-transform" />
        <span className="truncate">Order Sync</span>
    </button>
  );
}

/**
 * HERO LEVEL CTA
 * Directs traffic to the Smartphone catalog.
 */
export function ShopNow() {
    return (
        <Link href="/shop/smartphones" className="w-full sm:w-auto">
            <button className="w-full flex items-center justify-center gap-4 bg-[#0070f3] text-white px-10 py-5 rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/25 group border border-white/10">
                Shop Smartphones
                <div className="size-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <Smartphone size={14} className="group-hover:scale-110 transition-transform" />
                </div>
            </button>
        </Link>
    );
}

/**
 * SECONDARY SERVICE CTA
 * Directs traffic to the Technical/Repair hub.
 */
export function BrowseCatalog() {
    return (
        <Link href="/repair" className="w-full sm:w-auto">
            <button className="w-full flex items-center justify-center gap-4 bg-white dark:bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-10 py-5 rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group">
                Hardware Restoration
                <Wrench size={16} className="group-hover:-rotate-45 transition-transform" />
            </button>
        </Link>
    );
}

/**
 * INLINE NAVIGATION LINK
 * Used in section headers to view full categories.
 */
export function ViewAllBtn({ link = "/shop", label = "Full Index" }: { link?: string; label?: string }) {
    return (
        <Link href={link} className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#0070f3] hover:gap-6 transition-all group">
            <span className="border-b-2 border-[#0070f3]/0 group-hover:border-[#0070f3] transition-all pb-1">
                See {label}
            </span>
            <div className="size-8 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center group-hover:bg-[#0070f3] group-hover:text-white transition-all">
                <ArrowRight size={14} />
            </div>
        </Link>
    );
}

/**
 * STATUS INDICATOR (NEW)
 * Shows the Shop B118 online status.
 */
export function LiveStatus() {
    return (
        <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-widest text-green-600">B118 Online</span>
        </div>
    );
}