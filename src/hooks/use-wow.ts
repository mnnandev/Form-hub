"use client"
import { useEffect } from 'react';
import WOW from 'wowjs';

const useWow = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wow = new WOW.WOW();
      wow.init();
    }
  }, []);
};

export default useWow; 