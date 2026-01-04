"use client";
import HeroData from "../../data/homeData";
import Image from "next/image";
import { ShopNow, BrowseCatalog } from "../../common/Buttons";
export default function Hero() {
  return (
    // lets add a growing blue and black gradient background to the hero section from the
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center bg-linear-to-t from-white to-blue-300 dark:from-[#0d1117] dark:to-[#0d1117]">
      {/* Left Column: Content */}
      <div className="flex flex-col justify-center items-start px-6 lg:px-20 py-12 lg:py-24">

        <span className="bg-[#e7f0ff] text-[#0070f3] text-xs font-bold px-3 py-1 rounded-full uppercase mb-6">
          New Arrivals
        </span>

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#111418] dark:text-white mb-6">
          The Newest Tech, <br /> Just a Message Away
        </h1>

        <p className="text-lg lg:text-xl text-[#60758a] dark:text-[#9ca3af] mb-8">
          Browse our catalog of premium smartphones and accessories. Order
          directly via WhatsApp—no accounts, no hassle, just speed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
            <ShopNow />
            <BrowseCatalog />
        </div>

        {/* Trust Badge */}
        <div className="flex items-center gap-2 text-sm text-[#60758a]">
          <span className="text-green-500 font-bold">✓</span>
          <p>Trusted by 10,000+ customers</p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="flex justify-center items-center px-6 lg:pr-20 py-12 lg:py-24">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={HeroData.imageSrc}
            alt={HeroData.imageAlt}
            width={800} // Increased for better quality
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          {/* Optional: Text overlay found in your screenshot */}
          <div className="absolute bottom-6 left-6 light:text-black dark:text-white bg-white/70 dark:bg-black/70 px-4 py-2 rounded-lg">
            <h3 className="text-xl font-bold">iPhone 15 Pro</h3>
            <p className="text-sm opacity-90">Now available in Titanium</p>
          </div>
        </div>
      </div>
    </div>
  );
}