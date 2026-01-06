"use client";
import HeroData from "../../data/homeData";
import Image from "next/image";
import { ShopNow, BrowseCatalog } from "../../common/Buttons";
import { Zap, ShieldCheck, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 size-[500px] bg-[#0070f3]/10 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 size-[400px] bg-blue-600/5 blur-[100px] rounded-full -ml-32 -mb-32" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh] relative z-10 px-6 lg:px-20">
        
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center items-start py-12 lg:py-24">
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-2xl mb-8 border border-blue-100 dark:border-blue-800/30">
            <Zap size={14} className="text-[#0070f3] fill-[#0070f3]" />
            <span className="text-[#0070f3] text-[10px] font-black uppercase tracking-[0.2em]">
              Tech Sync 2026 Active
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-[#111418] dark:text-white mb-8">
            Premium Tech. <br /> 
            <span className="text-[#0070f3]">Zero Friction.</span>
          </h1>

          <p className="text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
            The ultimate catalog for Apple and Samsung gear. Sync your order directly via WhatsApp—no registration, just pure speed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 mb-12">
              <div className="hover:-translate-y-1 transition-transform">
                <ShopNow />
              </div>
              <div className="hover:-translate-y-1 transition-transform">
                <BrowseCatalog />
              </div>
          </div>

          {/* Trust Metrics */}
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-100 dark:border-white/5 w-full">
            <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">10K+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Trusted Users</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-100 dark:bg-white/10" />
            <div className="flex items-center gap-3">
                <div className="size-10 bg-green-50 dark:bg-green-950/30 rounded-full flex items-center justify-center text-green-600">
                    <ShieldCheck size={20} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 leading-tight">
                    Verified <br/> Original Stock
                </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Component */}
        <div className="relative flex justify-center items-center py-12 lg:py-24">
          <div className="relative w-full aspect-[4/5] lg:aspect-square">
            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-blue-900/20 border-8 border-white dark:border-[#1a1a1a]">
              <Image
                src={HeroData.imageSrc}
                alt={HeroData.imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphism Tag */}
            <div className="absolute bottom-10 left-10 right-10 backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 p-6 rounded-[2rem] shadow-2xl flex items-center justify-between">
              <div>
                <h3 className="text-white text-2xl font-black tracking-tight uppercase leading-none">iPhone 15 Pro</h3>
                <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mt-2">Available in Titanium</p>
              </div>
              <div className="size-12 bg-white rounded-2xl flex items-center justify-center text-black">
                <MessageCircle size={24} />
              </div>
            </div>

            {/* Floating Decorative Badge */}
            <div className="absolute -top-6 -right-6 size-32 bg-[#0070f3] rounded-full border-8 border-white dark:border-[#0a0a0a] flex flex-col items-center justify-center text-white rotate-12 shadow-xl">
               <span className="text-[10px] font-black uppercase">Instock</span>
               <span className="text-xl font-black">2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}