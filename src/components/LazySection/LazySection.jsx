import { Suspense, useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Очередь «свободных» моментов браузера. Секции встают в неё по порядку
// и рисуются по одной, пока пользователь ещё смотрит первый экран
const requestIdle = window.requestIdleCallback ?? ((callback) => setTimeout(callback, 200));
const pageLoaded = new Promise((resolve) => {
  if (document.readyState === 'complete') resolve();
  else window.addEventListener('load', resolve, { once: true });
});
let idleQueue = pageLoaded;

const waitForIdle = () => {
  idleQueue = idleQueue.then(
    () => new Promise((resolve) => requestIdle(resolve, { timeout: 1500 })),
  );
  return idleQueue;
};

// Рисует секцию, когда браузер свободен после загрузки страницы,
// или раньше, если пользователь до неё долистал.
// До этого — пустой блок нужной высоты, чтобы страница не «схлопывалась»
const LazySection = ({ children, minHeight = '100vh', rootMargin = '600px 0px' }) => {
  const placeholderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = placeholderRef.current;
    if (!element) return;

    let cancelled = false;
    const show = () => {
      if (cancelled) return;
      cancelled = true;
      observer.disconnect();
      setIsVisible(true);
    };

    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && show(), {
      rootMargin,
    });
    observer.observe(element);
    waitForIdle().then(show);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [rootMargin]);

  // Секция появилась — высота страницы изменилась, пересчитываем позиции анимаций
  useEffect(() => {
    if (!isVisible) return;
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [isVisible]);

  if (!isVisible) {
    return <div ref={placeholderRef} style={{ minHeight }} aria-hidden="true" />;
  }

  return <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>{children}</Suspense>;
};

export default LazySection;