import '@/scss/blocks/_why-top.scss';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import {useRef} from 'react';

gsap.registerPlugin(ScrollTrigger);

const WhyTop = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const whyCards = [
    {
      imgUrl: '/images/why/image-left.png',
      title: 'Bespoke experience of travelling',
      decription:
        'Being expert Luxury Travel Designers, Lux Trips offers bespoke experience of travelling. ',
    },
    {
      imgUrl: '/images/why/image-center.png',
      title: 'Collecting precious moments is our utmost goal.',
      decription:
        'Our exclusive network of trusted local partners allows us to carefully curate every detail.',
    },
    {
      imgUrl: '/images/why/image-right.png',
      title: 'We personalize each trip',
      decription:
        'Thanks to our extensive knowledge and operation in the industry, we personalize each trip according to the needs and wishes of our clients. ',
    },
  ];

  const mobileImages = [
    {
      imageSrc: '/images/why/mobile-image_left.png',
      imgWidth: 90,
      imgHeight: 212,
    },
    {
      imageSrc: '/images/why/mobile-image_center.png',
      imgWidth: 150,
      imgHeight: 365,
    },
    {
      imageSrc: '/images/why/mobile-image_right.png',
      imgWidth: 90,
      imgHeight: 212,
    },
  ];

  useGSAP(
    () => {
      const items = gsap.utils.toArray('.why__item', containerRef.current);

      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          filter: 'blur(12px)',
          duration: 0.5,
          delay: i * 0.2,

          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        });
      });
    },
    {scope: containerRef}
  );

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      filter: 'blur(12px)',
      duration: 1.5,
      delay: 1,

      scrollTrigger: {
        trigger: titleRef.current,
        start: 'center 80%',
      },
    });
  });

  return (
    <section
      className="why"
      ref={containerRef}
      aria-labelledby='why-title'
    >
      <div className="why__container container">
        <h1
          className="why__title h1"
          ref={titleRef}
          id='why-title'
        >
          Why <br />
          Lux Trps
        </h1>
        <div className="why__inner">
          <div className="why__mobile-images">
            {mobileImages.map((el, index) => (
              <div
                className="why__mobile-image"
                key={index}
              >
                <img
                  src={el.imageSrc}
                  alt=""
                  width={el.imgWidth}
                  height={el.imgHeight}
                />
              </div>
            ))}
          </div>
          <div className="why__items">
            {whyCards.map((el) => (
              <article
                className="why__item"
                key={el.imgUrl}
              >
                <div className="why__item-image">
                  <img
                    src={el.imgUrl}
                    alt=""
                    width={156}
                    height={365}
                    aria-hidden="true"
                  />
                </div>
                <div className="why__item-content item-content">
                  <h3 className="item-content__title">{el.title}</h3>
                  <div className="item-content__descr">
                    <p>{el.decription}</p>
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
