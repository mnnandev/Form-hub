"use client"
import { useEffect } from 'react';

const useWow = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then(({ WOW }) => {
        const wow = new WOW({ live: false });
        wow.init();
      });
    }
  }, []);
};

export default useWow; 