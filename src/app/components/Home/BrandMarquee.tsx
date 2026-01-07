"use client";

const brands = [
  "Apple", "Samsung", "Sony", "LG", "Google", "Dell", "HP", "Lenovo", "Canon"
];

export default function BrandMarquee() {
  return (
    <div 
      className="py-16 bg-white dark:bg-[#0a0a0a] overflow-hidden border-b border-gray-100 dark:border-white/5"
      aria-label="Trusted brands available at Essimu Uganda"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-20 lg:gap-32 px-10 lg:px-16">
            {brands.map((brand) => (
              <span 
                key={brand} 
                className="text-2xl lg:text-4xl font-black tracking-tighter text-gray-300 dark:text-white/20 uppercase hover:text-[#0070f3] dark:hover:text-[#0070f3] transition-all duration-300 transform hover:scale-110 cursor-default"
              >
                {brand} 
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
