export function Order() {
  return (
    <div className="text-[#60758a] flex border-none bg-[#f0f2f5] dark:bg-[#1a232e] items-center justify-center pl-4 rounded-l-lg border-r-0">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
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
