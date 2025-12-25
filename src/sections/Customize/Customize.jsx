import Subscribe from '@/components/Subscribe/Subscribe';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

const Customize = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const blocksData = [
    {
      number: 1,
      title: 'Describe your dream trip',
      descrription:
        'Let us know what your perfect vacation is. Destinations, preferences, and personal interests. ',
    },
    {
      number: 2,
      title: 'Get matched',
      descrription:
        'Our team will create perfect travel itinerary for you, based on your personalized needs and wishes.',
    },
    {
      number: 1,
      title: 'Book your vacation',
      descrription:
        'Confirm your trip only when you are completely satisfied with the proposed travel plan. ',
    },
  ];

  useGSAP(
    () => {
      if (titleRef.current) {
        document.fonts.ready.then(() => {
          gsap.set(titleRef.current, { visibility: 'visible' });
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
            }
          );
        });
      }
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const afterRule = CSSRulePlugin.getRule('.customize::after');
      const beforeRule = CSSRulePlugin.getRule('.customize::before');
      if (beforeRule && afterRule && triggerRef.current) {
        gsap.fromTo(
          afterRule,
          { cssRule: { transform: 'translateY(400px)' } },
          {
            cssRule: { transform: 'translateY(-100px)' },
            scrollTrigger: {
              trigger: triggerRef.current,
              start: 'top 90%',
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          beforeRule,
          { cssRule: { transform: 'translate(-200px, 200px)' } },
          {
            cssRule: { transform: 'translate(0px , -200px)' },
            ease: 'none',
            scrollTrigger: {
              trigger: triggerRef.current,
              start: 'top 90%',
              scrub: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section className="customize" ref={containerRef}>
      <div className="customize__container container" ref={triggerRef}>
        <h2 className="customize__title h2" ref={titleRef}>
          Customise <br /> your trip with us
        </h2>
        <div className="customize__items">
          {blocksData.map((el) => (
            <div className="customize__item" key={el.title}>
              <div className="customize__item-number">{el.number}</div>
              <div className="customize__item-content">
                <h4 className="customize__item-title">{el.title}</h4>
                <div className="customize__item-text">
                  <p>{el.descrription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
