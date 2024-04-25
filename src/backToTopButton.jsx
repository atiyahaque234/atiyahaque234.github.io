import React, { useState, useEffect } from "react";
import "./styles/backToTopButton.css";

export function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      id="button"
      className={showButton ? "show" : ""}
      onClick={scrollToTop}
      style={{ display: showButton ? "block" : "none" }}
    >
      &#8593;
    </button>
  );
}
