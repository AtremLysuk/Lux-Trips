import '@/scss/blocks/_trips.scss';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Появление «из размытия» — общие значения для анимаций секции
const BLUR_FROM = { opacity: 0, filter: 'blur(10px)' };
const BLUR_TO = { opacity: 1, filter: 'blur(0px)', ease: 'power3.out' };

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
  const bottomTextRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      // SplitText делит текст на строки по реальной ширине — нужны загруженные шрифты.
      // contextSafe: анимации создаются позже, в .then(), и без него useGSAP
      // не удалил бы их (и не вернул текст из строк обратно) при уходе со страницы
      const animate = contextSafe(() => {
        // Шапка: заголовок, строки текста, левая картинка
        const headerLines = new SplitText(headerTextRef.current, { type: 'lines' }).lines;

        gsap
          .timeline({ scrollTrigger: { trigger: headerRef.current, start: 'top 80%' } })
          .fromTo(headerTitleRef.current, BLUR_FROM, { ...BLUR_TO, duration: 2 })
          .fromTo(headerLines, { ...BLUR_FROM, y: 30 }, { ...BLUR_TO, y: 0, stagger: 0.3 }, '-=1.5')
          .fromTo(imageLeftRef.current, BLUR_FROM, { ...BLUR_TO, duration: 2 }, '-=1.5');

        // Центр: подзаголовок, строки текста, правая картинка
        const contentLines = new SplitText(contentTextRef.current, { type: 'lines' }).lines;

        gsap
          .timeline({ scrollTrigger: { trigger: contentRef.current, start: 'top 20%' } })
          .fromTo(subtitleRef.current, BLUR_FROM, { ...BLUR_TO, duration: 1 })
          .fromTo(contentLines, { ...BLUR_FROM, y: 30 }, { ...BLUR_TO, y: 0, duration: 1, stagger: 0.3 }, '-=0.7')
          .fromTo(imageRightRef.current, BLUR_FROM, { ...BLUR_TO, duration: 2 }, '-=1');

        // Низ: строки по очереди поднимаются и проявляются
        const bottomLines = new SplitText(bottomTextRef.current, { type: 'lines' }).lines;

        gsap.fromTo(
          bottomLines,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: { trigger: bottomRef.current, start: 'top 70%' },
          },
        );
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
            <div className="content-bottom__image">
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
              <Link className="content-bottom__link" to="/request">
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