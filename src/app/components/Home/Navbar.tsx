"use client";
// nav bar
import Link from "next/link";
import { Phone } from 'lucide-react';
import { Order } from "../../common/Buttons";
export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbe0e6] dark:border-[#2a3441] bg-white dark:bg-[#111418] px-10 py-3 shadow-sm">
            <div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-[#111418] dark:text-white">
<div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
<Phone className="material-symbols-outlined text-2xl"/>
</div>
<h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-tight">ESSIMU</h2>
</div>
<div className="hidden md:flex items-center gap-6">
<Link className="text-[#111418] dark:text-[#d1d5db] text-sm font-medium hover:text-primary transition-colors leading-normal" href="#">Phones</Link>
<Link className="text-[#111418] dark:text-[#d1d5db] text-sm font-medium hover:text-primary transition-colors leading-normal" href="#">Accessories</Link>
<Link className="text-[#111418] dark:text-[#d1d5db] text-sm font-medium hover:text-primary transition-colors leading-normal" href="#">Support</Link>
</div>
</div>
<div className="flex flex-1 justify-end gap-6 items-center">
<label className="hidden sm:flex flex-col min-w-40 h-10 max-w-xs w-full">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full group focus-within:ring-2 focus-within:ring-primary/50 transition-all">
<Order />
<input 
className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] dark:bg-[#1a232e] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" 
placeholder="Search phones..." 
value={""}
onChange={()=>{}}
/>
</div>
</label>
<button className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
<span className="truncate">Order via WhatsApp</span>
</button>
</div>
</header>
    );
}