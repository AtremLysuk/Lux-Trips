import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

export default function useLenisScrollTrigger() {
  const lenis = useLenis();
  const { pathname } = useLocation();

  // При каждом шаге плавного скролла сообщаем ScrollTrigger новую позицию,
  // чтобы анимации на скролле шли синхронно с Lenis
  useEffect(() => {
    if (!lenis) return;
    lenis.on('scroll', ScrollTrigger.update);
    return () => lenis.off('scroll', ScrollTrigger.update);
  }, [lenis]);

  // Пересчёт после перехода по маршруту — разберём в задаче 3
  useEffect(() => {
    if (!lenis) return;
    const id = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 50);
    return () => clearTimeout(id);
  }, [pathname, lenis]);
}