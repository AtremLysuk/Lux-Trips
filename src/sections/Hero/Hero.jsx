import { useRef } from 'react';
import { useLenis } from 'lenis/react';
import '@/scss/blocks/_Header.scss';

const Hero = () => {
  const layersRef = useRef(null);

  // useLenis с колбэком вызывает его на каждом шаге скролла.
  // Пишем позицию только в блок hero, а не в body,
  // чтобы браузер пересчитывал стили только внутри hero
  useLenis(({ scroll }) => {
    const el = layersRef.current;
    if (!el) return;

    // Hero ушёл за экран — параллакс не виден, не тратим ресурсы
    if (scroll > el.offsetHeight) return;

    el.style.setProperty('--scrollTop', `${scroll}px`);
  });

  return (
    <section aria-labelledby="hero-title">
      <div
        ref={layersRef}
        className="header layers"
        style={{ position: 'relative' }}
      >
        <div
          className="layer layers__base"
          style={{ backgroundImage: 'url(./bgtop/bg_top-3.png)' }}
          aria-hidden="true"
        ></div>

        <div className="header__title layer layers__title">
          <h1 id="hero-title">
            <span className="h1">EXTRA ORDINARY</span>
            <span className="header-title-places h1">PLACES</span>
          </h1>
        </div>

        <div
          className="layer layers__middle"
          style={{ backgroundImage: 'url(/bgtop/bg_top-2.png)' }}
          aria-hidden="true"
        ></div>

        <div
          className="layer layers__front"
          style={{ backgroundImage: 'url(./bgtop/bg_top-1.png)', zIndex: '100' }}
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
};

export default Hero;