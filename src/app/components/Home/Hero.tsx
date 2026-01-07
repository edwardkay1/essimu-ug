"use client";
import HeroData from "../../data/homeData";
import Image from "next/image";
import { ShopNow, BrowseCatalog } from "../../common/Buttons";
import { Zap, ShieldCheck, MapPin, Star } from "lucide-react";

export default function Hero() {
  return (
    /* FIXED: The aria-label is now a single-line string to prevent hydration mismatch */
    <section 
      className="relative overflow-hidden bg-white dark:bg-[#0a0a0a]" 
      aria-label="Essimu Uganda | Buy iPhones & Samsung Phones in Kampala"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 size-[500px] bg-[#0070f3]/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-[400px] bg-blue-600/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh] relative z-10 px-6 lg:px-20">
        
        {/* --- LEFT COLUMN: HIGH-IMPACT SALES COPY --- */}
        <div className="flex flex-col justify-center items-start py-12 lg:py-24">
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-2xl mb-8 border border-blue-100 dark:border-blue-800/30">
            <Zap size={14} className="text-[#0070f3] fill-[#0070f3]" aria-hidden="true" />
            <span className="text-[#0070f3] text-[10px] font-black uppercase tracking-[0.2em]">
              Trusted Phone Shop in Kampala
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-[#111418] dark:text-white mb-8 uppercase">
            Original Phones.<br /> 
            <span className="text-[#0070f3]">Smart Prices.</span>
          </h1>

          <p className="text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
            Buy original iPhones, Samsung phones, and laptops in Uganda. From sealed brand-new devices to <span className="text-gray-900 dark:text-white font-black underline decoration-[#0070f3]">Grade-A UK Used</span> phones. Fully tested, battery checked, and guaranteed.
          </p>

          {/* Major Sales Actions */}
          <div className="flex flex-wrap gap-5 mb-12">
              <div className="hover:-translate-y-1 transition-transform">
                <ShopNow /> {/* Buy Button */}
              </div>
              <div className="hover:-translate-y-1 transition-transform">
                <BrowseCatalog /> {/* Repair/Catalog Button */}
              </div>
          </div>

          {/* Location & Trust Metrics - Built for SEO */}
          <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-gray-100 dark:border-white/5 w-full">
            <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#0070f3]">
                    <MapPin size={16} />
                    <span className="text-xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Shop B118</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Kisa Kyamaria Building</span>
            </div>
            
            <div className="h-8 w-[1px] bg-gray-100 dark:bg-white/10 hidden sm:block" />
            
            <div className="flex items-center gap-3">
                <div className="size-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-[#0070f3]">
                    <ShieldCheck size={20} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 leading-tight">
                    Original Phones <br/> Quality Checked
                </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: THE SHOWROOM VISUAL --- */}
        <div className="relative flex justify-center items-center py-12 lg:py-24">
          <div className="relative w-full aspect-[4/5] lg:aspect-square group">
            {/* Main Product Image Container */}
            <div className="absolute inset-0 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,112,243,0.3)] border-8 border-white dark:border-[#1a1a1a] transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={HeroData.imageSrc}
                alt="Buy Original UK Used iPhones in Kampala at Essimu Uganda Shop B118 Kisa Kyamaria Building"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Price/Sales Floating Tag */}
            <div className="absolute -top-6 -right-4 bg-white dark:bg-[#0070f3] p-5 rounded-[2rem] shadow-2xl rotate-6 group-hover:rotate-0 transition-all border-4 border-[#0070f3] dark:border-white">
                <div className="flex items-center gap-1 mb-1">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 dark:text-white/80">UK Used Quality</p>
                </div>
                <p className="text-2xl font-black text-[#0070f3] dark:text-white uppercase tracking-tighter">• Grade A</p>
            </div>

            {/* Sales-Driven Overlay */}
            <div className="absolute bottom-10 left-8 right-8 backdrop-blur-2xl bg-white/10 border border-white/20 p-8 rounded-[3rem] shadow-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white text-3xl font-black tracking-tighter uppercase leading-none">Trusted by Kampala Buyers</h3>
                  <p className="text-blue-300 text-[10px] font-black uppercase tracking-[0.2em] mt-2">William Street • Opposite Gazaland</p>
                </div>
                <div className="size-14 bg-white rounded-2xl flex items-center justify-center text-[#0070f3] shadow-lg group-hover:scale-110 transition-transform">
                  <Zap size={28} fill="#0070f3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}