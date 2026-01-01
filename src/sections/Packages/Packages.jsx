import '@/scss/blocks/_packages.scss';

import MySlider from '@/components/MySlider/MySlider';
import PacagesCard from '@/components/PacagesCard/PacagesCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

import {useEffect, useRef, useState} from 'react';

const Packages = () => {
  const [isSliderWidth, setIsSliderWidth] = useState(false);

  const containerRef = useRef(null);

  const packagesItems = [{
    id: 1,
    imgUrl: '/images/book/1.png',
    title: 'New destinations for 2022',
    palacesCount: 47,
  }, {
    id: 2,
    imgUrl: '/images/book/2.png',
    title: 'Best Winter Destinations',
    palacesCount: 34,
  }, {
    id: 3,
    imgUrl: '/images/book/3.png',
    title: 'Your health is matter',
    palacesCount: 29,
  }, {
    id: 4,
    imgUrl: '/images/book/4.png',
    title: "The world's most extraordinary places",
    palacesCount: 29,
  }, {
    id: 5,
    imgUrl: '/images/book/5.png',
    title: 'Experiences Away From Crowd',
    palacesCount: 168,
  },];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1100px)');
    // const handleMediaQueryChange = (e) => setIsSliderWidth(e.matches);
    // mediaQuery.addEventListener('change', handleMediaQueryChange);

    const update = () => {
      setIsSliderWidth(mediaQuery.matches)
    };
    update()

    mediaQuery.addEventListener('change', update);

    return () => {
      mediaQuery.removeEventListener('change', update);
    };
  }, []);

  // useLayoutEffect(() => {
  //   if (window.innerWidth <= 1100) {
  //     setIsSliderWidth(true);
  //   }
  // }, []);

  useGSAP(() => {
    gsap.fromTo('.inner-left__item-title', {
      opacity: 0, y: 50,
    }, {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: {
        trigger: '.inner-left__item-title', start: 'top 70%',
      },
    });
  }, {scope: containerRef});

  return (<section
    className="packages"
    aria-labelledby="packages-title"
  >
    <div
      className="packages__container container"
      ref={containerRef}
    >
      {!isSliderWidth && (<div className="packages__inner">
        <div className="packages__inner-left inner-left">
          <div className="inner-left__items">
            <div className="inner-left__item">
              <div>
                <h2
                  className="inner-left__item-title h2"
                  id="packages-title"
                >
                  Luxury Packages
                </h2>
                <a
                  aria-label="View all luxury packages"
                  className="inner-left__item-link"
                  href="/packages"
                >
                  view all
                </a>
              </div>
            </div>
            <ul className="inner-left__item-card packages-card">
              {packagesItems
                .filter((el) => el.id === 1)
                .map((el) => (<li key={el.id}>
                  <PacagesCard
                    el={el}
                  />
                </li>))}
            </ul>
          </div>
        </div>
        <div className="packages__inner-center inner-center">
          <ul className="inner-center__items">
            {packagesItems
              .filter((el) => el.id === 2 || el.id === 3)
              .map((el) => (<li key={el.id}>
                <PacagesCard
                  el={el}

                />
              </li>))}
          </ul>
        </div>
        <div className="packages__inner-right inner-right">
          <ul className="inner-right__items">
            {packagesItems
              .filter((el) => el.id === 4 || el.id === 5)
              .map((el) => (
                <li key={el.id}>
                  <PacagesCard
                    el={el}
                  />
                </li>))}
          </ul>
        </div>
      </div>)}
      {isSliderWidth && (<div className="packages-slider__wrapper">
        <div className="packages-slider__header">
          {isSliderWidth && <Title />}
          <a
            aria-label="View all luxury packages"
            className="inner-left__item-link"
            href="/packages"
          >
            view all
          </a>
        </div>
        <MySlider
          isPackageCard={true}
          items={packagesItems}
          className="packages"
        />
      </div>)}
    </div>
  </section>);
};

export default Packages;


function Title() {
  return (<h2
    className="inner-left__item-title h2"
    id="packages-title"
  >
    Luxury Packages
  </h2>)
}