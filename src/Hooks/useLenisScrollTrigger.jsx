import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

// export const useLenisScrollTrigger = () => {
//   const lenis = useLenis();


//   useEffect(() => {
//     if(!lenis) return

//     lenis.on('scroll', ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         return arguments.length ? lenis.scrollTo(value) : lenis.scroll
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

//     ScrollTrigger.addEventListener('refresh', () => lenis.resize());
//     ScrollTrigger.refresh();

//     return () => {
//       lenis.off('scroll', ScrollTrigger.update)
//       ScrollTrigger.removeEventListener('refresh', () => lenis.resize());
//     };
//   }, [lenis]);
// };


export const useLenisScrollTrigger = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // обновляем ScrollTrigger при каждом шаге lenis
    lenis.on("scroll", ScrollTrigger.update);

    // заменяем requestAnimationFrame Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // gsap time в секундах, lenis ждёт ms
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [lenis]);
};