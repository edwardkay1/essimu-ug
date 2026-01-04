"use client";
// whatsapp circular floating button
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsappBtn() {
    return (
        <button 
            onClick={() => window.open('https://wa.me/256...', '_blank')} 
            className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 z-50 group"
            aria-label="Chat with our support team on WhatsApp"
        >
            <FontAwesomeIcon 
                icon={faWhatsapp} 
                className="text-4xl" // Large icon size
                aria-hidden="true" 
            />
        </button>
    );
}