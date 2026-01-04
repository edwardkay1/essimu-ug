import { MessageSquare } from "lucide-react";
export function Order() {
    // 
  return (
    <button 
        onClick={() => window.open('https://wa.me/yournumber', '_blank')}
        className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0070f3] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20"
    >
        <MessageSquare size={16} className="mr-2 fill-white" />
        <span className="truncate">Order via WhatsApp</span>
    </button>
  );
}

export function ShopNow() {
    return (
        <button className="bg-[#0070f3] text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20"> Shop Now
        </button>
    );
}
export function BrowseCatalog() {
    return (
        <button className="bg-white border border-gray-200 text-[#111418] px-8 py-3 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors"> Browse Catalog
        </button>
    );
}
