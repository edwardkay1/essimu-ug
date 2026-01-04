"use client";
import { MessageSquare } from "lucide-react"; // Using Lucide for the WhatsApp icon

export default function ReadySection() {
    return (
        <section className="px-6 lg:px-20 py-16 bg-white dark:bg-[#0d1117]">
            {/* The Blue Gradient Card */}
            <div className="bg-linear-to-r from-[#2b88ff] to-[#0061f2] rounded-[2rem] p-12 lg:p-20 text-center shadow-xl shadow-blue-500/20">
                
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Ready to Upgrade?
                </h2>
                
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Our WhatsApp support team is online and ready to help you find your 
                    perfect device. Start a chat now to place an order.
                </p>

                {/* WhatsApp Button */}
                <button 
                    onClick={() => window.open('https://wa.me/yournumber', '_blank')}
                    className="inline-flex items-center gap-3 bg-white text-[#0070f3] px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-all shadow-md group"
                >
                    <MessageSquare size={20} className="fill-[#0070f3] group-hover:scale-110 transition-transform" />
                    Chat on WhatsApp
                </button>
            </div>
        </section>
    );
}