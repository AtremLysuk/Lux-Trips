import '@/scss/blocks/_Header.scss';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Hero = () => {
  const sectionRef = useRef(null);
  const baseRef = useRef(null);
  const middleRef = useRef(null);
  const frontRef = useRef(null);
  const titleWrapRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      // Кто просил систему меньше анимаций — показываем hero статично
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      // Параллакс при скролле. Дальние слои отстают от скролла сильнее ближних,
      // передние горы едут вместе со страницей — их нижний край не отрывается от низа hero.
      // Заголовок опускается и уходит за передние горы.
      // scrub: true — анимация привязана к позиции скролла, а не ко времени
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
        .to(baseRef.current, { yPercent: 30 }, 0)
        .to(middleRef.current, { yPercent: 18 }, 0)
        .to(titleWrapRef.current, { yPercent: 45, autoAlpha: 0 }, 0);

      // Стартовое состояние интро (заголовок размыт, слои смещены) задано в _Header.scss:
      // главная приходит готовым HTML (prerender), и CSS применяется ещё до запуска JS.
      // Если прятать заголовок из JS, он сначала мелькнёт, а потом исчезнет

      // Анимация появления. Свойства не пересекаются с параллаксом:
      // здесь scale и y (px), там yPercent — GSAP складывает их, а не перезаписывает
      const intro = contextSafe(() => {
        // words — чтобы перенос строк не разрывал слово посередине
        // (класс hero-word запрещает перенос внутри слова, см. _Header.scss).
        // Без mask: у заголовка очень плотный line-height, маска обрезала бы низ букв
        // aria: 'none' — название заголовка уже задано в разметке (aria-label у h1)
        const split = SplitText.create(titleRef.current.children, {
          type: 'words,chars',
          wordsClass: 'hero-word',
          aria: 'none',
        });

        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          // Снимаем стартовое размытие с h1 — дальше размытием управляют буквы
          .set(titleRef.current, { opacity: 1, filter: 'none' })
          // fromTo, а не from: стартовые значения уже стоят из CSS, и from
          // принял бы их за конечные — слои остались бы смещёнными
          .fromTo(baseRef.current, { scale: 1.2 }, { scale: 1, duration: 2.6 }, 0)
          .fromTo(middleRef.current, { y: 80 }, { y: 0, duration: 2.4 }, 0)
          .fromTo(frontRef.current, { y: 160 }, { y: 0, duration: 2.2 }, 0)
          .from(
            split.chars,
            { yPercent: 40, opacity: 0.2, filter: 'blur(12px)', duration: 1.8, stagger: 0.05 },
            0.3,
          );
      });

      document.fonts.ready.then(intro);
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} aria-labelledby="hero-title">
      <div className="header layers">
        <div
          ref={baseRef}
          className="layer layers__base"
          style={{ backgroundImage: 'url(/bgtop/bg_top-3.webp)' }}
          aria-hidden="true"
        />

        <div ref={titleWrapRef} className="header__title layer layers__title">
          {/* Буквы разбиты на отдельные элементы, поэтому скринридер получает
              целое название из aria-label, а сами буквы от него скрыты */}
          <h1 ref={titleRef} id="hero-title" aria-label="Extra ordinary places">
            <span className="h1" aria-hidden="true">
              EXTRA ORDINARY
            </span>
            <span className="header-title-places h1" aria-hidden="true">
              PLACES
            </span>
          </h1>
        </div>

        <div
          ref={middleRef}
          className="layer layers__middle"
          style={{ backgroundImage: 'url(/bgtop/bg_top-2.webp)' }}
          aria-hidden="true"
        />

        <div
          ref={frontRef}
          className="layer layers__front"
          style={{ backgroundImage: 'url(/bgtop/bg_top-1.webp)' }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;