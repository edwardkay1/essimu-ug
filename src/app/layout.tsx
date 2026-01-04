import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
