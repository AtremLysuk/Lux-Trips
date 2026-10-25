import Subscribe from '@/components/Subscribe/Subscribe';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const BLOCKS = [
  {
    number: 1,
    title: 'Describe your dream trip',
    description:
      'Let us know what your perfect vacation is. Destinations, preferences, and personal interests.',
  },
  {
    number: 2,
    title: 'Get matched',
    description:
      'Our team will create perfect travel itinerary for you, based on your personalized needs and wishes.',
  },
  {
    number: 3,
    title: 'Book your vacation',
    description:
      'Confirm your trip only when you are completely satisfied with the proposed travel plan.',
  },
];

const Customize = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);

  // Заголовок проявляется из размытия, когда доходит до 80% экрана.
  // Ждём шрифты: иначе ScrollTrigger посчитает позицию по запасному шрифту.
  // contextSafe — анимация создаётся позже, в .then(), и без него
  // useGSAP не узнал бы о ней и не удалил при уходе со страницы
  useGSAP(
    (context, contextSafe) => {
      const animateTitle = contextSafe(() => {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, filter: 'blur(10px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
            },
          },
        );
      });

      document.fonts.ready.then(animateTitle);
    },
    { scope: containerRef },
  );

  // Облака плывут вслед за прокруткой (scrub).
  // Двигаем настоящие элементы через transform — это делает видеокарта,
  // без пересчёта стилей страницы на каждом кадре
  useGSAP(
    () => {
      const scrollTrigger = {
        trigger: triggerRef.current,
        start: 'top 90%',
        scrub: true,
      };

      gsap.fromTo(
        cloudRightRef.current,
        { y: 400 },
        { y: -100, ease: 'none', scrollTrigger },
      );

      gsap.fromTo(
        cloudLeftRef.current,
        { x: -200, y: 200 },
        { x: 0, y: -200, ease: 'none', scrollTrigger },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="customize" ref={containerRef} aria-labelledby="customize-title">
      {/* Декоративные облака: скринридеру их читать не нужно */}
      <div className="customize__cloud customize__cloud--left" ref={cloudLeftRef} aria-hidden="true" />
      <div className="customize__cloud customize__cloud--right" ref={cloudRightRef} aria-hidden="true" />

      <div className="customize__container container" ref={triggerRef}>
        <h2 className="customize__title h2" ref={titleRef} id="customize-title">
          Customise <br /> your trip with us
        </h2>

        <ul className="customize__items">
          {BLOCKS.map((block) => (
            <li className="customize__item" key={block.number}>
              <div className="customize__item-number">{block.number}</div>
              <div className="customize__item-content">
                <h3 className="customize__item-title">{block.title}</h3>
                <div className="customize__item-text">
                  <p>{block.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="customize__button">
          <Link className="customize__link" to="/">
            Start a trip request
          </Link>
        </div>

        <div className="customize__bottom">
          <p>It’s Free! - no credit card required</p>
        </div>

        <Subscribe />
      </div>
    </section>
  );
};

export default Customize;