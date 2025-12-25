import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function fadeInBlurAnimation(target, options = {}) {
  const {
    duration = 1,
    ease = 'power3.out',
    start = 'top 70%',
    end,
    scrub = false,
    y,
    x,
  } = options;

  return () => {
    gsap.fromTo(
      target,
      {
        opacity: 0,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: duration,
        ease: ease,
        y: y,
        x: x,

        scrollTrigger: {
          target: target,
          start: start,
          end: end || false,
          scrub: scrub,
        },
      }
    );
  };
}
