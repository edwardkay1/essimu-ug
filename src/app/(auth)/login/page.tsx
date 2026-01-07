"use client";
import { useState } from "react";
import Link from "next/link";
import { LogIn, ShieldCheck, AlertCircle, Loader2, Eye, EyeOff } from "lucide-react"; 
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // login now correctly expects (email, password) based on your Context update
    const { login } = useAuth(); 
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);
        
        try {
            // This call now matches the updated (email, pass) signature in AuthContext
            await login(email, password);
            
            // Redirect to admin products on successful authentication
            router.push("/admin/products"); 
        } catch (err: any) {
            console.error("Auth Error:", err);
            // specific error message for unauthorized registry access
            setError("Invalid credentials or unauthorized access to the registry.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] dark:bg-[#080808] p-6">
            <div className="w-full max-w-[440px] space-y-8">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col items-center text-center">
                    <div className="size-16 bg-white dark:bg-white/5 rounded-[2rem] shadow-xl flex items-center justify-center mb-6 border border-gray-100 dark:border-white/5">
                        <ShieldCheck size={32} className="text-[#0070f3]" />
                    </div>
                    <h1 className="text-3xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">Staff Portal</h1>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0070f3] mt-2">Authorized Access Only</p>
                </div>

                {/* --- FORM --- */}
                <form onSubmit={handleSubmit} className="bg-white dark:bg-[#0c0c0e] p-10 rounded-[3.5rem] border border-gray-100 dark:border-white/5 shadow-2xl shadow-blue-500/5 space-y-5">
                    {error && (
                        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-2xl text-red-600 text-[10px] font-black uppercase italic">
                            <AlertCircle size={16} /> {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-4">Registry Email</label>
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                            placeholder="admin@essimu.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-4">Security Key</label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                                placeholder="••••••••"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0070f3] transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-5 bg-[#0070f3] text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                    >
                        {isSubmitting ? (
                            <Loader2 size={18} className="animate-spin" />
                        ) : (
                            <><LogIn size={18} /> Authenticate</>
                        )}
                    </button>
                </form>

                <div className="text-center">
                    <Link href="/" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0070f3] transition-colors">
                        ← Return to Public Terminal
                    </Link>
                </div>
            </div>
        </div>
    );
}