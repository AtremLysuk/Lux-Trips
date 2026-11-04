import '@/scss/blocks/_why-bottom.scss';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const WhyBottom = () => {
  const containerRef = useRef(null);
  const textTopRef = useRef(null);
  const textCenterRef = useRef(null);
  const textBotRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      // SplitText делит текст на строки по реальной ширине — нужны загруженные шрифты.
      // aria: 'none' — не вешать aria-label на <p> (там он запрещён); при разбивке
      // по строкам слова целые, скринридер и так прочитает текст нормально.
      // contextSafe: анимации создаются позже, в .then(), и без него useGSAP
      // не удалил бы их (и не вернул текст из строк обратно) при уходе со страницы
      const animate = contextSafe(() => {
        const split = new SplitText([textTopRef.current, textBotRef.current], {
          type: 'lines',
          linesClass: 'split-line',
          aria: 'none',
        });

        gsap
          .timeline({
            scrollTrigger: { trigger: containerRef.current, start: 'top 55%', once: true },
          })
          .from(split.lines, {
            y: 20,
            opacity: 0,
            stagger: 0.06,
            ease: 'power4.out',
            duration: 0.9,
          })
          .from(
            textCenterRef.current,
            { opacity: 0, y: 10, duration: 0.6, ease: 'power2.out' },
            '-=0.4',
          );
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

          <div className="customize__button">
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