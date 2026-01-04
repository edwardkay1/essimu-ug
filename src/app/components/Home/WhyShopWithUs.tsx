"use client";
// why shop with us section
import { UserMinus, MessageSquare, Truck } from "lucide-react";
const features = [
    {
    title: "No Account Needed",
    description: "Skip the sign-up forms. Checkout instantly as a guest.",
    icon: <UserMinus className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-blue-50",
    },
    {
    title: "Order via WhatsApp",
    description: "Place your order directly through WhatsApp for quick service.",
    icon: <MessageSquare className="w-6 h-6 text-green-600" />,
    bgColor: "bg-green-50",
    },
    {
    title: "Fast & Free Delivery",
    description: "Enjoy speedy delivery at no extra cost on all orders.",
    icon: <Truck className="w-6 h-6 text-purple-600" />,
    bgColor: "bg-purple-50",
    },
];
export default function WhyShopWithUs(){
    return (
        <section className="py-16 px-6 lg:px-20 bg-white dark:bg-[#0d1117]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Title Section */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold text-[#111418] dark:text-white mb-4">
            Why Shop with ESSIMU?
          </h2>
          <p className="text-[#60758a] dark:text-[#9ca3af] leading-relaxed">
            We have stripped away the complexity of traditional e-commerce to bring you the fastest way to buy tech.
          </p>
        </div>
        {/* Features Section */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full ${feature.bgColor}`}>
              <div className="mb-4">
                {feature.icon}
              </div>
                <h3 className="text-xl font-semibold text-[#111418] dark:text-black mb-2">
                    {feature.title}
                </h3>
                <p className="text-[#60758a] dark:text-[#9ca3af] leading-relaxed">
                    {feature.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}
