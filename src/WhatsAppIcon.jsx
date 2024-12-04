import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const message = "Hello! I'd like to learn more about your services.";
  const encodedMessage = encodeURIComponent(message); // Encode the message to ensure it's URL-safe

  return (
    <a
      // href={`https://wa.me/971526057862?text=${encodedMessage}`}
      href={`https://wa.me/8806571277?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppIcon;
