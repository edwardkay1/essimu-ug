import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "@/context/AuthContext"; // 1. Import AuthProvider

export const metadata: Metadata = {
  title: {
    default: "Essimu Uganda | New & UK Used Phones, Laptops & Repair Hub",
    template: "%s | Essimu Uganda"
  },
  description: "Buy New and UK Used phones (Essimu), Laptops, and TVs at Essimu Uganda. Visit Shop B118 Kisa Kyamaria, William Street, Kampala for the best tech deals and professional repairs.",
  keywords: ["Essimu", "Essimu Uganda", "UK Used iPhones Kampala", "Shop B118 Kisa Kyamaria", "William Street phone shops", "Buy laptops Uganda", "Essimu enkadde", "Essimu empya"],
  
  // --- FIXED ICONS PATHS ---
  icons: {
    icon: [
      { url: "/Image/essimulogo.png" }, 
      { url: "/Image/essimulogo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/Image/essimulogo.png", sizes: "180x180", type: "image/png" }, 
    ],
  },
  
  openGraph: {
    title: "Essimu Uganda | Premium New & UK Used Tech Hub",
    description: "Located at Kisa Kyamaria Shop B118. Your home for verified UK used phones and original laptops.",
    url: "https://essimu.ug",
    siteName: "Essimu Uganda",
    locale: "en_UG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Essimu Uganda",
    "description": "Premium New & UK Used Phones, Laptops and TVs in Kampala.",
    "telephone": "+256756922058",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "William Street, Kisa Kyamaria Building, Shop B118",
      "addressLocality": "Kampala",
      "addressCountry": "UG"
    },
    "priceRange": "UGX",
    "openingHours": "Mo-Sa 08:00-19:00"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-x-hidden antialiased">
        {/* 2. Wrap with AuthProvider so the 'loading' state works on the Home page */}
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}