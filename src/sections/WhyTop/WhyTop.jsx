import '@/scss/blocks/_why-top.scss';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const WHY_CARDS = [
  {
    imgUrl: '/images/why/image-left.webp',
    title: 'Bespoke experience of travelling',
    description:
      'Being expert Luxury Travel Designers, Lux Trips offers bespoke experience of travelling.',
  },
  {
    imgUrl: '/images/why/image-center.webp',
    title: 'Collecting precious moments is our utmost goal.',
    description:
      'Our exclusive network of trusted local partners allows us to carefully curate every detail.',
  },
  {
    imgUrl: '/images/why/image-right.webp',
    title: 'We personalize each trip',
    description:
      'Thanks to our extensive knowledge and operation in the industry, we personalize each trip according to the needs and wishes of our clients.',
  },
];

const MOBILE_IMAGES = [
  { imageSrc: '/images/why/mobile-image_left.webp', imgWidth: 90, imgHeight: 212 },
  { imageSrc: '/images/why/mobile-image_center.webp', imgWidth: 150, imgHeight: 365 },
  { imageSrc: '/images/why/mobile-image_right.webp', imgWidth: 90, imgHeight: 212 },
];

// Те же приёмы, что в Hero и Trips, — чтобы сайт выглядел единым стилем
const WORDS_FROM = { yPercent: 60, autoAlpha: 0, filter: 'blur(10px)', duration: 1.6, stagger: 0.08 };
const LINES_FROM = { yPercent: 100, duration: 1.2, stagger: 0.1 };
const CLIP_HIDDEN = { clipPath: 'inset(100% 0% 0% 0%)' };
const CLIP_SHOWN = { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' };

const WhyTop = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      // Параллакс заголовка: при скролле опускается и растворяется, как в Hero
      gsap.to(titleRef.current, {
        yPercent: 30,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: { trigger: titleRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });

      // Параллакс фото карточек — только на десктопе, на телефоне они скрыты
      gsap.matchMedia().add('(width > 550px)', () => {
        gsap.utils.toArray('.why__item-image', sectionRef.current).forEach((image, index) => {
          gsap.to(image, {
            // Центральное фото едет медленнее боковых — получается глубина
            yPercent: index === 1 ? -10 : -25,
            ease: 'none',
            scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        });
      });

      // Строки заголовка прячем сразу, чтобы до загрузки шрифта не мелькал текст.
      // Прячем именно строки, а не h1: прозрачностью h1 управляет параллакс выше,
      // и две анимации одного свойства мешали бы друг другу
      const titleLines = titleRef.current.children;
      gsap.set(titleLines, { autoAlpha: 0 });

      const animate = contextSafe(() => {
        const words = (el) => SplitText.create(el, { type: 'words', aria: 'none' }).words;
        const lines = (el) => SplitText.create(el, { type: 'lines', mask: 'lines', aria: 'none' }).lines;

        // Заголовок — первый экран страницы, поэтому анимация сразу при загрузке.
        // wordsClass: слово переносится только целиком (см. _why-top.scss)
        const titleChars = SplitText.create(titleLines, {
          type: 'words,chars',
          wordsClass: 'why__title-word',
          aria: 'none',
        }).chars;

        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .set(titleLines, { autoAlpha: 1 })
          .from(titleChars, {
            yPercent: 40,
            autoAlpha: 0,
            filter: 'blur(12px)',
            duration: 1.8,
            stagger: 0.05,
          });

        // Фото на телефоне: открываются шторкой по очереди
        gsap.fromTo('.why__mobile-image', CLIP_HIDDEN, {
          ...CLIP_SHOWN,
          stagger: 0.15,
          scrollTrigger: { trigger: '.why__mobile-images', start: 'top 85%' },
        });

        // Карточки: фото шторкой, затем заголовок по словам и текст по строкам
        gsap.utils.toArray('.why__item', sectionRef.current).forEach((item) => {
          const image = item.querySelector('.why__item-image');

          gsap
            .timeline({ defaults: { ease: 'expo.out' }, scrollTrigger: { trigger: item, start: 'top 80%' } })
            .fromTo(image, CLIP_HIDDEN, CLIP_SHOWN)
            .from(image.firstElementChild, { scale: 1.3, duration: 2 }, 0)
            .from(words(item.querySelector('.item-content__title')), WORDS_FROM, 0.4)
            .from(lines(item.querySelector('.item-content__descr p')), LINES_FROM, 0.6);
        });
      });

      document.fonts.ready.then(animate);
    },
    { scope: sectionRef },
  );

  return (
    <section className="why" ref={sectionRef} aria-labelledby="why-title">
      <div className="why__container container">
        {/* Буквы разбиты на отдельные элементы, поэтому скринридер получает
            целое название из aria-label, а сами буквы от него скрыты */}
        <h1 className="why__title h1" ref={titleRef} id="why-title" aria-label="Why Lux Trips">
          <span className="why__title-line" aria-hidden="true">
            Why
          </span>
          <span className="why__title-line" aria-hidden="true">
            Lux Trips
          </span>
        </h1>

        <div className="why__inner">
          <div className="why__mobile-images">
            {MOBILE_IMAGES.map((el) => (
              <div className="why__mobile-image" key={el.imageSrc}>
                <img src={el.imageSrc} alt="" width={el.imgWidth} height={el.imgHeight} />
              </div>
            ))}
          </div>

          <div className="why__items">
            {WHY_CARDS.map((el) => (
              <article className="why__item" key={el.imgUrl}>
                <div className="why__item-image">
                  <img src={el.imgUrl} alt="" width={156} height={365} />
                </div>
                <div className="why__item-content item-content">
                  <h3 className="item-content__title">{el.title}</h3>
                  <div className="item-content__descr">
                    <p>{el.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTop;