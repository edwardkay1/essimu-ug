"use client";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Allison O'Holleran",
    location: "Kampala, Central",
    content: "We were delighted with how the team handled our hardware procurement. The UK Used iPhones were in pristine condition, exactly as promised.",
  },
  {
    id: 2,
    name: "Robin Noguier",
    location: "Entebbe, Wakiso",
    content: "Essimu is a great hub for reliable electronics. The warranty support in Kampala is unmatched, making them my go-to for Sony displays.",
  },
  {
    id: 3,
    name: "John Musoke",
    location: "Mbarara City",
    content: "Fast delivery to Mbarara and excellent customer service. The MacBook Pro I bought is performing perfectly for my dev work.",
  },
  {
    id: 4,
    name: "Sarah Namuli",
    location: "Jinja, Eastern",
    content: "Finally found a place in Uganda that sells genuine Apple accessories with verified stock. Highly recommend Shop B118.",
  },
  {
    id: 5,
    name: "David Okello",
    location: "Gulu City",
    content: "The trade-in process was seamless. I upgraded my Samsung S22 to an S24 Ultra with a very fair valuation. Best tech shop in KLA.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#08080a] overflow-hidden">
      <div className="px-6 lg:px-20 mb-16">
        <div className="max-w-xl">
          <p className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em] mb-4">Community</p>
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
            What people say <br/> <span className="text-gray-400">about us?</span>
          </h2>
        </div>
      </div>

      {/* --- SEAMLESS HORIZONTAL AUTO-SCROLLER --- */}
      <div className="flex overflow-hidden group select-none">
        {/* This div moves the cards */}
        <div className="flex flex-nowrap gap-8 animate-marquee-slow group-hover:pause-animation">
          {/* We map twice to ensure the loop never shows a gap */}
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