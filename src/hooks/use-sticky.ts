'use client'
import { useEffect, useState } from "react";

interface StickyState {
  sticky: boolean;
}

const useSticky = (): StickyState => {
  const [sticky, setSticky] = useState(false);

  const stickyHeader = (): void => {
    if (typeof window !== 'undefined' && window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", stickyHeader);
      return (): void => {
        window.removeEventListener("scroll", stickyHeader);
      };
    }
  }, []);

  return {
    sticky,
  };
};

export default useSticky;
