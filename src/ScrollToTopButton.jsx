import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
  onClick={scrollToTop}
  className={`fixed bottom-14 right-6 bg-transparent border-2 border-primary text-primary font-bold rounded-full flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-gradient-to-l from-orange-500 to-orange-600 hover:text-white hover:scale-105 shadow-lg ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
  style={{
    width: "48px", // Adjust width as needed
    height: "48px", // Adjust height as needed
    zIndex: 1000, // Ensure button is above other content
  }}
  aria-label="Scroll to top" // Accessible name for screen readers
>
  <FaAngleUp size={24} /> {/* Adjust icon size as needed */}
</button>

  );
};

export default ScrollToTopButton;