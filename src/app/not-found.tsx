import Link from "next/link";
import { ShieldAlert, ArrowLeft, Database } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Visual Alert */}
        <div className="relative mx-auto size-24 bg-red-500/10 rounded-[2.5rem] flex items-center justify-center border border-red-500/20">
          <ShieldAlert className="text-red-500 animate-pulse" size={40} />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
            Error 404
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Database size={14} className="text-[#0070f3]" />
            <span className="text-[10px] font-black text-[#0070f3] uppercase tracking-[0.3em]">B118 Unit Registry</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Unit Not Located.
          </h1>
          <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest leading-relaxed">
            The asset you are looking for has been <span className="text-red-500">Purged</span> from the live repository or moved to a new destination.
          </p>
        </div>

        {/* Action Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#0070f3] text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Return to Registry
        </Link>
      </div>
    </div>
  );
}