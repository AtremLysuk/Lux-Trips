import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

// При смене страницы — всегда наверх, до того как новая страница создаст свои анимации
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  // useLayoutEffect — срабатывает до отрисовки кадра и раньше эффектов страницы:
  // ScrollTrigger новой страницы посчитает позиции уже от верха,
  // и анимации первого экрана сыграют у тебя на глазах
  useLayoutEffect(() => {
    // force: true — сработать, даже если Lenis остановлен
    // (бургер-меню или попап ещё закрываются)
    lenis?.scrollTo(0, { immediate: true, force: true });

    // Нативный сброс — на случай, если Lenis считает, что он уже наверху,
    // и поэтому ничего не делает
    window.scrollTo(0, 0);

    // Новая страница уже в DOM — пересчитываем позиции анимаций
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname, lenis]);

  return null;
}