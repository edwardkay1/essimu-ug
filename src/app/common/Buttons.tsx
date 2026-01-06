"use client";
import { MessageSquare, Wrench, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Order() {
  return (
    <button 
        onClick={() => window.open('https://wa.me/256700000000', '_blank')}
        className="flex items-center justify-center overflow-hidden rounded-2xl h-11 px-6 bg-[#0070f3] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
    >
        <MessageSquare size={16} className="mr-2 fill-white" />
        <span className="truncate">Order Sync</span>
    </button>
  );
}

export function ShopNow() {
    return (
        <Link href="/shop/smartphones">
            <button className="flex items-center gap-3 bg-[#0070f3] text-white px-10 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/25 group">
                Shop Smartphones
                <Smartphone size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </Link>
    );
}

export function BrowseCatalog() {
    // Transformed into the Repair Service Button
    return (
        <Link href="/repair">
            <button className="flex items-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white transition-all group">
                Repair Service
                <Wrench size={16} className="group-hover:rotate-45 transition-transform" />
            </button>
        </Link>
    );
}

export function ViewAllBtn({ link = "/shop" }: { link?: string }) {
    return (
        <Link href={link} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#0070f3] hover:gap-4 transition-all">
            See Full Index <ArrowRight size={14} />
        </Link>
    );
}