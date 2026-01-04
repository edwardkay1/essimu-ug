// import Image from "next/image";
import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import type { Metadata } from "next";
import { WhyShopWithUs } from "./components/Home/WhyShopWithUs";

export const metadata: Metadata = {
  title: "Essimu Uganda",
  description: "Empowering Communities, Transforming Lives in Uganda",
};
export default function Home() {
  return (
    <>
    <Navbar />
<div className="flex flex-col min-h-screen">
<Hero />
<WhyShopWithUs />
</div>
</>
  );
}
