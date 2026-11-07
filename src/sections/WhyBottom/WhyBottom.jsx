import '@/scss/blocks/_why-bottom.scss';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Мелкий текст: строки выезжают из-под маски — как в Trips и WhyTop
const LINES_FROM = { yPercent: 100, duration: 1.2, stagger: 0.1, ease: 'expo.out' };

const WhyBottom = () => {
  const containerRef = useRef(null);
  const textTopRef = useRef(null);
  const textCenterRef = useRef(null);
  const textBotRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      // SplitText делит текст по реальной ширине — нужны загруженные шрифты.
      // contextSafe: анимации создаются позже, в .then(), и без него useGSAP
      // не удалил бы их (и не вернул текст обратно) при уходе со страницы
      const animate = contextSafe(() => {
        // aria: 'none' — не вешать aria-label на <p>: слова целые, скринридер прочитает
        const lines = (el) => SplitText.create(el, { type: 'lines', mask: 'lines', aria: 'none' }).lines;

        gsap.from(lines(textTopRef.current), {
          ...LINES_FROM,
          scrollTrigger: { trigger: textTopRef.current, start: 'top 85%' },
        });

        // Главная фраза «проявляется» по мере скролла: слова из бледных становятся
        // чёрными одно за другим. scrub — прогресс привязан к скроллу, листаешь
        // назад — слова снова бледнеют
        const words = SplitText.create(textCenterRef.current, { type: 'words', aria: 'none' }).words;
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: {
              trigger: textCenterRef.current,
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: true,
            },
          },
        );

        gsap.from(lines(textBotRef.current), {
          ...LINES_FROM,
          scrollTrigger: { trigger: textBotRef.current, start: 'top 85%' },
        });

        gsap.from(buttonRef.current, {
          y: 30,
          autoAlpha: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: buttonRef.current, start: 'top 90%' },
        });
      });

      document.fonts.ready.then(animate);
    },
    { scope: containerRef },
  );

  return (
    <section className="travel" ref={containerRef}>
      <div className="travel__container container">
        <div className="travel__inner">
          <ul className="travel__inner-content">
            <li className="travel__text-top">
              <p ref={textTopRef}>
                As a Luxury Travel Designer, we make it our mission to transform clients’ interests
                and dreams into one-of-a-kind travel experience through the provision of premium
                quality services.
              </p>
            </li>

            <li className="travel__text-center">
              <p ref={textCenterRef}>
                Importantly, in Lux Trips we get to know our clients personally, and hence, we get to
                have a relationship with each of them.
              </p>
            </li>

            <li className="travel__text-bot">
              <p ref={textBotRef}>
                We construct long-lasting connections thanks to the unforgettable trips we design, as
                we believe that travel is all about feelings, and memories are the most precious gifts
                we want our customer to bring back with them.
              </p>
            </li>
          </ul>

          <div className="customize__button" ref={buttonRef}>
            <Link className="customize__link" to="/contacts">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBottom;