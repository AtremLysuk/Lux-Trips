import '@/scss/blocks/_trips.scss';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Крупные фразы: слова всплывают из размытия
const WORDS_FROM = { yPercent: 60, autoAlpha: 0, filter: 'blur(10px)', duration: 1.6, stagger: 0.08 };
// Мелкий текст: строки выезжают из-под маски
const LINES_FROM = { yPercent: 100, duration: 1.2, stagger: 0.1 };
// Картинки «проявляются» снизу вверх, как шторка
const CLIP_HIDDEN = { clipPath: 'inset(100% 0% 0% 0%)' };
const CLIP_SHOWN = { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' };

const Trips = () => {
  const sectionRef = useRef(null);

  const headerRef = useRef(null);
  const headerTitleRef = useRef(null);
  const headerTextRef = useRef(null);

  const contentRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentTextRef = useRef(null);
  const imageLeftRef = useRef(null);
  const imageRightRef = useRef(null);

  const bottomRef = useRef(null);
  const bottomImageRef = useRef(null);
  const bottomTextRef = useRef(null);
  const bottomLinkRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      // Параллакс: картинки по бокам едут при скролле с разной скоростью,
      // поэтому кажутся на разном расстоянии от гор на фоне.
      // Только шире 600px: на телефоне картинки стоят близко и наехали бы друг на друга.
      // matchMedia сам уберёт анимации, когда ширина станет меньше
      const parallax = (target, yPercent) =>
        gsap.to(target, {
          yPercent,
          ease: 'none',
          scrollTrigger: { trigger: contentRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
        });

      gsap.matchMedia().add('(width > 600px)', () => {
        parallax(imageLeftRef.current, -25);
        parallax(imageRightRef.current, -50);
      });

      // SplitText делит текст по реальной ширине — нужны загруженные шрифты.
      // contextSafe: анимации создаются позже, в .then(), и без него useGSAP
      // не удалил бы их при уходе со страницы
      const animate = contextSafe(() => {
        // aria: 'none' — не вешать aria-label на <p>/<h2>: слова целые, скринридер прочитает
        const words = (el) => SplitText.create(el, { type: 'words', aria: 'none' }).words;
        // mask: 'lines' — каждая строка в обёртке с overflow: hidden, строка выезжает из-под неё
        const lines = (el) => SplitText.create(el, { type: 'lines', mask: 'lines', aria: 'none' }).lines;

        const reveal = (trigger, start = 'top 80%') =>
          gsap.timeline({ defaults: { ease: 'expo.out' }, scrollTrigger: { trigger, start } });

        // Шапка: заголовок по словам, текст по строкам
        reveal(headerRef.current)
          .from(words(headerTitleRef.current), WORDS_FROM)
          .from(lines(headerTextRef.current), LINES_FROM, 0.2);

        // Левая картинка
        reveal(contentRef.current, 'top 70%').fromTo(imageLeftRef.current, CLIP_HIDDEN, CLIP_SHOWN);

        // Центр: фраза, текст, правая картинка
        reveal(subtitleRef.current, 'top 85%')
          .from(words(subtitleRef.current), WORDS_FROM)
          .from(lines(contentTextRef.current), LINES_FROM, 0.2)
          .fromTo(imageRightRef.current, CLIP_HIDDEN, CLIP_SHOWN, 0.1);

        // Низ: фото открывается шторкой и чуть «отъезжает» внутри, потом текст и кнопка
        reveal(bottomRef.current, 'top 75%')
          .fromTo(bottomImageRef.current, CLIP_HIDDEN, CLIP_SHOWN)
          .from(bottomImageRef.current.firstElementChild, { scale: 1.3, duration: 2 }, 0)
          .from(words(bottomTextRef.current), WORDS_FROM, 0.4)
          .from(bottomLinkRef.current, { y: 20, autoAlpha: 0, duration: 1 }, 1);
      });

      document.fonts.ready.then(animate);
    },
    { scope: sectionRef },
  );

  return (
    <section className="trips" ref={sectionRef} aria-labelledby="trips-title">
      <div className="trips__container container">
        <div className="trips__header" ref={headerRef}>
          <h2 className="trips__header-title h2" ref={headerTitleRef} id="trips-title">
            Why Lux Trips
          </h2>
          <div className="trips__header-text">
            <p ref={headerTextRef}>
              As Travel Designer, we know the ins and outs of travel from who to work with, where to
              go, when to book, and which restaurant provides the most authentic cuisine.
            </p>
          </div>
        </div>

        <div className="trips__content" ref={contentRef}>
          <div className="trips__content-center content-center">
            {/* Декоративные картинки по бокам: скринридеру читать не нужно */}
            <div className="content-center__image content-center__image--left" ref={imageLeftRef} aria-hidden="true" />
            <div className="content-center__image content-center__image--right" ref={imageRightRef} aria-hidden="true" />

            <h3 className="content-center__subtitle" ref={subtitleRef}>
              Exclusive knowledge to provide the best of the best to clients
            </h3>
            <div className="content-center__text">
              <p ref={contentTextRef}>
                Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings,
                private yacht and jet charters, to exclusive tours and personalized journey planning.
              </p>
            </div>
          </div>

          <div className="trips__content-bottom content-bottom" ref={bottomRef}>
            <div className="content-bottom__image" ref={bottomImageRef}>
              <img
                src="/images/trips/image-bottom.webp"
                alt="Couple relaxing in a wicker lounge on a terrace at sunset"
                width={276}
                height={640}
                loading="lazy"
              />
            </div>
            <div className="content-bottom-right">
              <div className="content-bottom__text">
                <p ref={bottomTextRef}>
                  We craft and plan unique itineraries tailored to customers’ interests and with strong
                  attention to detail.
                </p>
              </div>
              <Link className="content-bottom__link" to="/request" ref={bottomLinkRef}>
                help me plan a trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trips;