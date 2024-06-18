"use client"
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; 

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Show button after scrolling 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility); // Clean up
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // For smooth scrolling
    });
  };

  return (
    <button
      className={`fixed xl:bottom-8 xl:right-8 bottom-5 right-5 bg-[#7F7F7F] hover:bg-zinc-900 group text-white font-bold p-2 rounded-full shadow-lg transition-opacity duration-300 z-[999999999] ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUp className="text-white group-hover:text-white " />
    </button>
  );
}

export default ScrollToTopButton;
