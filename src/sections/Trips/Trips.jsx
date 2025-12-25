import '@/scss/blocks/_trips.scss';

import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useRef} from 'react';
import SplitText from 'gsap/SplitText';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(ScrollTrigger, SplitText, CSSRulePlugin);

const Trips = () => {
  const headerTitleRef = useRef(null);
  const headerRef = useRef(null);
  const bottomContainerRef = useRef(null);
  const bottomTextRef = useRef(null);
  const headerTextRef = useRef(null);
  const contentRef = useRef(null);
  const contentSubtitleRef = useRef(null);
  const bottomLinkRef = useRef(null);
  const contentTextRef = useRef(null);
  const beforeRule = CSSRulePlugin.getRule('.content-center::before');
  const afterRule = CSSRulePlugin.getRule('.content-center::after');

  useGSAP(
    () => {
      if (headerTitleRef.current && headerTextRef.current) {
        document.fonts.ready.then(() => {
          const headerSplitText = new SplitText(headerTextRef.current, {
            type: 'lines',
          });

          const lines = headerSplitText.lines;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: headerTextRef.current,
              start: 'top 80%',
            },
          });

          tl.fromTo(
            headerTitleRef.current,
            {
              opacity: 0,
              filter: 'blur(10px)',
            },
            {
              opacity: 1,
              filter: 'blur(0px)',
              duration: 2,
              ease: 'power3.out',
            }
          );

          tl.fromTo(
            lines,
            {
              opacity: 0,
              filter: 'blur(10px)',
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              ease: 'power3.out',
              stagger: 0.3,
            },
            '-=1.5'
          );

          tl.fromTo(
            afterRule,
            {cssRule: {opacity: 0, filter: 'blur(10px)'}},
            {
              cssRule: {opacity: 1, filter: 'blur(0px)'},
              ease: 'power3.out',
              duration: 2,

              scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 80%',
              },
            },
            '-=1.5'
          );
        });
      }
    },
    {scope: headerRef}
  );

  useGSAP(
    () => {
      if (contentSubtitleRef.current && contentTextRef.current) {
        document.fonts.ready.then(() => {
          const contentTextSplit = new SplitText(contentTextRef.current, {
            type: 'lines',
          });
          const textLines = contentTextSplit.lines;

          const contentTl = gsap.timeline({
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 20%',
            },
          });

          contentTl.fromTo(
            contentSubtitleRef.current,
            {
              opacity: 0,
              filter: 'blur(10px)',
            },
            {
              opacity: 1,
              filter: 'blur(0px)',
              duration: 1,
              ease: 'power3.out',
            }
          );

          contentTl.fromTo(
            textLines,
            {
              opacity: 0,
              filter: 'blur(10px)',
              y: 30,
            },
            {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.3,
            },
            '-=0.7'
          );

          contentTl.fromTo(
            beforeRule,
            {cssRule: {opacity: 0, filter: 'blur(10px)'}},
            {
              cssRule: {opacity: 1, filter: 'blur(0px)'},
              ease: 'power3.out',
              duration: 2,
              delay: 1,

              scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 80%',
              },
            },
            '-=2.5'
          );
        });
      }
    },
    {scope: contentRef}
  );

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        if (bottomTextRef.current && bottomContainerRef.current) {
          const bottomTextSplit = new SplitText(bottomTextRef.current, {
            type: 'lines',
          });
          const bottomTextLines = bottomTextSplit.lines;
          const bottomTl = gsap.timeline();

          bottomTl.fromTo(
            bottomTextLines,
            {opacity: 0, y: 50},
            {
              opacity: 1,
              y: 0,
              ease: 'power3.out',
              duration: 5,
              mask: true,
              scrollTrigger: {
                trigger: bottomContainerRef.current,
                start: 'top 70%',
                scrub: false,
                stagger: 0.3,
              },
            }
          );
        }
      });
    },
    {scope: bottomContainerRef}
  );

  return (
    <section className="trips">
      <div className="trips__container container">
        <div
          className="trips__header"
          ref={headerRef}
        >
          <h2
            className="trips__header-title h2"
            ref={headerTitleRef}
          >
            Why Lux Trips
          </h2>
          <div className="trips__header-text">
            <p ref={headerTextRef}>
              As Travel Designer, we know the ins and outs of travel from who to
              work with, where to go, when to book, and which restaurant
              provides the most authentic cuisine.
            </p>
          </div>
        </div>
        <div
          className="trips__content"
          ref={contentRef}
        >
          <div className="trips__content-center content-center">
            <h3
              className="content-center__subtitle"
              ref={contentSubtitleRef}
            >
              Exclusive knowledge to provide the best of the best to clients
            </h3>
            <div className="content-center__text">
              <p ref={contentTextRef}>
                Our area of expertise ranges from luxury resorts and
                villas/chalets holiday bookings, private yacht and jet charters,
                to exclusive tours and personalized journey planning.
              </p>
            </div>
          </div>
          <div
            className="trips__content-bottom content-bottom"
            ref={bottomContainerRef}
          >
            <div className="content-bottom__image">
              <img
                src="/images/trips/image-bottom.png"
                alt=""
                width={276}
                height={640}
              />
            </div>
            <div className="content-bottom-right">
              <div className="content-bottom__text">
                <p ref={bottomTextRef}>
                  We craft and plan unique itineraries tailored to customers’
                  interests and with strong attention to detail.
                </p>
              </div>
              <a
                className="content-bottom__link"
                href="/"
                ref={bottomLinkRef}
              >
                help me plan a trip
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trips;
