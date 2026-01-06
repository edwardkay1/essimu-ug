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

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Hero />
        <BrandMarquee /> 
        <WhyShopWithUs />
        <Category />
        <BestSellers />
        <Testimonials />
        <ReadySection />
        <WhatsappBtn />
      </div>
      <Footer />
    </>
  );
}