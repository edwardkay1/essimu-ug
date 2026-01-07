"use client";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Allison O'Holleran",
    location: "Kampala, Central",
    content: "Bought a UK Used iPhone from Essimu — battery checked, genuine, and exactly as described. Quick WhatsApp ordering too!",
  },
  {
    id: 2,
    name: "Robin Noguier",
    location: "Entebbe, Wakiso",
    content: "Essimu is my go-to shop for reliable electronics. Warranty support is solid, and I trust their stock 100%.",
  },
  {
    id: 3,
    name: "John Musoke",
    location: "Mbarara City",
    content: "Fast delivery to Mbarara and excellent support. My MacBook Pro is performing perfectly. Shop B118 really delivers on promises.",
  },
  {
    id: 4,
    name: "Sarah Namuli",
    location: "Jinja, Eastern",
    content: "Finally, a place in Uganda selling verified Apple accessories. Battery-checked and original. Highly recommend visiting Shop B118.",
  },
  {
    id: 5,
    name: "David Okello",
    location: "Gulu City",
    content: "Seamless trade-in for my Samsung S22 to S24 Ultra. Fair valuation and genuine phones. Best tech shop in Kampala!",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#08080a] overflow-hidden">
      <div className="px-6 lg:px-20 mb-16">
        <div className="max-w-xl">
          <p className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em] mb-4">Our Customers</p>
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
            Real Stories <br/> <span className="text-gray-400">from Kampala buyers</span>
          </h2>
        </div>
      </div>

      {/* --- HORIZONTAL AUTO-SCROLLER --- */}
      <div className="flex overflow-hidden group select-none">
        <div className="flex flex-nowrap gap-8 animate-marquee-slow group-hover:pause-animation">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div 
              key={`${t.id}-${index}`} 
              className="w-[350px] lg:w-[450px] shrink-0 bg-white dark:bg-[#111111] p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex flex-col shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="mb-8">
                <h4 className="font-black text-lg text-gray-900 dark:text-white uppercase tracking-tighter">
                  {t.name}
                </h4>
                <p className="text-[9px] font-bold text-[#0070f3] uppercase tracking-widest mt-1">
                  {t.location}
                </p>
              </div>

              <div className="relative flex-1">
                <Quote size={32} className="text-[#0070f3] opacity-10 absolute -top-2 -left-2" />
                <p className="text-base lg:text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic relative z-10">
                  "{t.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
