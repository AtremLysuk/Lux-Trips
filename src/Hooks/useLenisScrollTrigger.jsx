// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useLenis } from 'lenis/react';

// gsap.registerPlugin(ScrollTrigger);

// export default function useLenisScrollTrigger() {
//   // получаем инстанс Lenis из контекста ReactLenis
//   const lenis = useLenis();
//   const { pathname } = useLocation();

//   // Инициализация scrollerProxy и RAF-цикла
//   useEffect(() => {
//     if (!lenis) return;

//     // 1) Подмена дефолтного скроллера
//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         if (arguments.length) {
//           lenis.scrollTo(value, { immediate: true });
//         }
//         // возвращаем текущий оффсет
//         return lenis.scroll.instance.scroll.offset;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: document.body.style.transform ? 'transform' : 'fixed',
//     });

//     // 2) Обновляем ScrollTrigger при каждом обновлении Lenis
//     lenis.on('scroll', ScrollTrigger.update);

//     // 3) Запускаем RAF-цикл, чтобы Lenis и GSAP работали синхронно
//     let animationFrameId;
//     function raf(time) {
//       lenis.raf(time);
//       // ScrollTrigger.update() уже вызывается в lenis.on('scroll'),
//       // но для гарантии можно доделать ещё здесь
//       ScrollTrigger.update();
//       animationFrameId = requestAnimationFrame(raf);
//     }
//     animationFrameId = requestAnimationFrame(raf);

//     // Очистка при размонтировании
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       ScrollTrigger.removeScroller(document.body);
//       ScrollTrigger.kill();
//     };
//   }, [lenis]);

//   // Пересчёт размеров и триггеров после перехода по маршрутам
//   useEffect(() => {
//     if (!lenis) return;

//     // даём React рендеру завершиться
//     const timeout = setTimeout(() => {
//       lenis.resize();
//       ScrollTrigger.refresh();
//     }, 50);

//     return () => clearTimeout(timeout);
//   }, [pathname, lenis]);
// }

import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

export default function useLenisScrollTrigger() {
  const lenis = useLenis(); // инстанс Lenis из <ReactLenis>
  const { pathname } = useLocation();
  const scrollOffset = useRef(0); // здесь будем хранить текущий scroll

  // 1) Подписываемся на событие scroll и обновляем реф
  useEffect(() => {
    if (!lenis) return;
    const onScroll = ({ scroll }) => {
      scrollOffset.current = scroll;
      ScrollTrigger.update();
    };
    lenis.on('scroll', onScroll);
    return () => lenis.off('scroll', onScroll);
  }, [lenis]);

  // 2) Настраиваем scrollerProxy
  useEffect(() => {
    if (!lenis) return;

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          // при установке прокрутки через Lenis
          lenis.scrollTo(value, { immediate: true });
        }
        // возвращаем нашу кешированную позицию
        return scrollOffset.current;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    });
  }, [lenis]);

  // 3) RAF-цикл: синхронизируем Lenis и GSAP
  useEffect(() => {
    if (!lenis) return;
    let frameId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      // ScrollTrigger.update() здесь не обязателен,
      // но оставим для страховки
      ScrollTrigger.update();
      frameId = requestAnimationFrame(raf);
    });
    return () => cancelAnimationFrame(frameId);
  }, [lenis]);

  // 4) Пересчет после перехода по маршруту
  useEffect(() => {
    if (!lenis) return;
    const id = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 50);
    return () => clearTimeout(id);
  }, [pathname, lenis]);
}
