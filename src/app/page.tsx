"use client"
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import WhyShopWithUs  from "./components/Home/WhyShopWithUs";
import Category from "./components/Home/Category";
import BestSellers from "./components/Home/BestSellers";
import BrandMarquee from "./components/Home/BrandMarquee";
import Testimonials from "./components/Home/Testimonials"; 
import ReadySection from "./components/Home/Ready";
import WhatsappBtn from "./components/Home/WhatsappBtn";
import Footer from "./components/Footer";
import { useAuth } from "@/context/AuthContext"; // Import Auth to handle state smoothly

export default function Home() {
  const { loading } = useAuth();

  // If the auth is still loading, we show a clean shell to prevent layout jumps
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
         <div className="animate-pulse flex flex-col items-center">
            <div className="size-12 bg-gray-100 dark:bg-white/5 rounded-2xl mb-4" />
            <div className="h-2 w-24 bg-gray-100 dark:bg-white/5 rounded-full" />
         </div>
      </div>
    );
  }

  return (
    <main className="relative">
      {/* Navbar is always visible to visitors */}
      <Navbar />
      
      <div className="flex flex-col min-h-screen">
        {/* Main Content Sections */}
        <section id="hero">
          <Hero />
        </section>

        <BrandMarquee /> 

        <section className="py-10 lg:py-20">
          <WhyShopWithUs />
        </section>

        <Category />

        <section id="shop">
          <BestSellers />
        </section>

        <Testimonials />
        
        <ReadySection />
      </div>

      {/* Persistent Floating Action Button */}
      <WhatsappBtn />

      <Footer />
    </main>
  );
}