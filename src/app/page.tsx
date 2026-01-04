"use client"
// import Image from "next/image";
import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import type { Metadata } from "next";
import WhyShopWithUs  from "./components/Home/WhyShopWithUs";
import Category from "./components/Home/Category";
import BestSellers from "./components/Home/BestSellers";
import ReadySection from "./components/Home/Ready";
import WhatsappBtn from "./components/Home/WhatsappBtn";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
<div className="flex flex-col min-h-screen">
<Hero />
<WhyShopWithUs />
<Category />
<BestSellers />
<ReadySection />
<WhatsappBtn />
<Footer />
</div>
</>
  );
} 