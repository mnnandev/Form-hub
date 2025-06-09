"use client"
import useSticky from "@/hooks/use-sticky";
import React, { useState, useEffect } from "react";


const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (typeof window !== 'undefined') {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    }
  };

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
    }
  }, []);

  return (
    <>
      <button
        className={`scrollToTop d-none d-md-flex d-center ${sticky && "active"}`}
        onClick={scrollTop}
        style={{cursor: "pointer"}}
        aria-label="scroll Bar Button">
        <i className="mat-icon fas fa-angle-double-up"></i>
      </button>
    </>
  );
};

export default ScrollToTop;
