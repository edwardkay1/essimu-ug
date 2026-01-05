import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
export const metadata: Metadata = {
  title: "Essimu Uganda",
  description: "Empowering Communities, Transforming Lives in Uganda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-x-hidden">
        <CartProvider>
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
