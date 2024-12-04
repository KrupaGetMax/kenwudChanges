import React, { useEffect, useState } from "react";

export const Notification = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade-out before calling onClose
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 bg-green-500 text-white p-4 rounded shadow-lg transition-opacity duration-300 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "#38a169", // Tailwind's bg-green-500
        color: "#ffffff", // White text
        padding: "1rem",
        borderRadius: "0.375rem", // Tailwind's rounded
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)", // Tailwind's shadow-lg
        transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="ml-4 text-white underline text-sm"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Notification;