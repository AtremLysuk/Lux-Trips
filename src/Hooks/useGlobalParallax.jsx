

import { useEffect } from 'react';
import gsap from 'gsap';

export const useGlobalParallax = (ref) => {
  useEffect(() => {
    const updateParallax = () => {
      const scrollTop = window.scrollY;
      const offset = scrollTop * 0.02; // коэффициент параллакса
      if (ref.current) {
        gsap.to(ref.current, {
          y: -offset,
          scale: 1 + offset * 0.0005,
          opacity: 1 - offset * 0.001,
          duration: 0.5,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('scroll', updateParallax);
    return () => window.removeEventListener('scroll', updateParallax);
  }, [ref]);
};