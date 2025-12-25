import ContentItem from '@/components/ContentItem/ContentItem';
import RequestForm from '@/components/RequestForm/RequestForm';
import '@/scss/blocks/_request-page.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';


import { useLocation } from 'react-router-dom';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useLenis } from 'lenis/react';

gsap.registerPlugin(SplitText, ScrollTrigger);

const RequestPage = () => {
  const lenis = useLenis()
  const location = useLocation();
  const animationContainerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const cardTitleRef = useRef(null);
  const formRef = useRef(null);
  const textContainerRef = useRef(null);

  const requestItems = [
    {
      id: 1,
      imgSrc: '/images/book-cards/cars.png',
      title: 'Book Supercars',
      contentTitle:
        'Lux Trips gives you access to the most prestigious cars on the market.',
      descriptions: [
        'All the latest top-of-the-range models described by elegance, class and technology are among our wide range of rentals and hiring.',
        'Do you wish to feel like a Formula 1 driver and test the famous circuit in Monza? Or do you prefer to sit back and relax while our driver brings you across the most picturesque Amalfi coast? All you have to do is choose the destination and we will arrange the rest!',
      ],
      items: ['clock24', 'man', 'car', 'bag', 'heart', 'tickets'],
    },
    {
      id: 2,
      imgSrc: '/images/book-cards/hotels.png',
      title: 'Book Hotels',
      contentTitle:
        'Do you need to organize an event, a leisure getaway or a business trip?',
      descriptions: [
        'We will do it for you! Our exclusive offers in globally renowned hotels and local boutique accommodations will bring your stay to another level. Absolute discretion and highest level comfort and professionalism paired with attention to your every wish are our primary guidelines in selecting the hotel for your next trip.',
      ],
      items: ['clock24', 'location', 'man', 'bag', 'family', 'tickets'],
    },
    {
      id: 3,
      imgSrc: '/images/book-cards/villas.png',
      title: 'Book Villas/Chalets',
      contentTitle:
        'Do you need to organize an event, a leisure getaway or a business trip?',
      descriptions: [
        '  Modern villas that offer breathtaking panoramic sea views with endless deep blue waves or traditionally charming chalets with a warm jacuzzi outside, set on top of a snowy mountain, looking out to a lush countryside, are ready to welcome you at the destination of your choice.',
        'No location is outside of our reach! Whether you prefer the finest luxury destinations like St. Moritz, Zermatt, Ibiza and Mykonos or wish to explore exotic spots of South Africa, Thailand or Australia, Lux Trips will tailor your accommodation with personalized services to ensure an exceptional stay for each member of your group. ',
      ],
      items: [
        'clock24',
        'location',
        'buildings',
        'man',
        'bag',
        'family',
        'tickets',
      ],
    },
    {
      id: 4,
      imgSrc: '/images/book-cards/yahts.png',
      title: 'Book Yachts/Boats',
      contentTitle:
        'Our experts will select the best option for your sea adventure',
      descriptions: [
        'Lux Trips offers unparalleled yacht and boat charter experiences thanks to our network of the leading players in yachting activities. Our experts will select the best option for your sea adventure to create your dream getaway.',
        'For instance, a private luxury yacht to visit the Balearic islands, an explorer for a cruise of the endless Mediterranean sea, or a sailing boat for a romantic weekend or family holiday on Lago di Garda. Onboard entertainment (e.g. jetski, karaoke, etc.) and highly qualified personnel are at your service.',
      ],
      items: [
        'clock24',
        'location',
        'man',
        'book',
        'yaht',
        'bag',
        'family',
        'tickets',
      ],
    },
    {
      id: 5,
      imgSrc: '/images/book-cards/helicopter.png',
      title: 'Book Private Helicopter',
      contentTitle:
        'When planes cannot land close enough to your final destination',
      descriptions: [
        'Opting for a helicopter is the best solution not to waste precious minutes on the road when planes cannot land close enough to your final destination.',
        'Lux Trip private aviation services offer helicopter rent and charter for VIP transfers, remote and exclusive location trips, public and private events, islands and yachts landing, professional visits, remote ski resorts and extreme sport activities, and sightseeing.',
      ],
      items: [
        'clock24',
        'location',
        'man',
        'book',
        'helicopter',
        'bag',
        'family',
        'tickets',
      ],
    },
    {
      id: 6,
      imgSrc: '/images/book-cards/jet.png',
      title: 'Book Private Jet',
      contentTitle: 'Highest level of safety and comfort on the flight',
      descriptions: [
        'Our fully personalized private charters and jets will anticipate your every wish. To fit your unique travel needs, we guarantee the highest level of safety and comfort on the flight.',
        'Discrete services provided by the dedicated flight crew, bespoke interior design and most advanced fleet are the signature qualities of the Lux Trip flying experience. With the possibility of urgent takeoffs and multi-stop journeys no destination will stay out of your reach!',
      ],
      items: [
        'clock24',
        'location',
        'man',
        'book',
        'helicopter',
        'bag',
        'family',
        'tickets',
      ],
    },
  ];

  const currentItem = requestItems.find((el) => el.id === location.state);

  useGSAP(
    () => {
      if (titleRef.current && imageRef.current && cardTitleRef.current) {
        const masterTimeline = gsap.timeline();

        gsap.set(titleRef.current, { visibility: 'visible' });

        masterTimeline.from(titleRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        });

        masterTimeline.from(
          [imageRef.current, cardTitleRef.current],
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.3,
          },
          '-=0.3'
        );

        masterTimeline.fromTo(
          formRef.current,
          {
            opacity: 0,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.6'
        );

        lenis.resize()
      }
    },
    { scope: animationContainerRef, dependencies: [currentItem] }
  );

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        gsap.set(textContainerRef.current, { visibility: 'visible' });

        const textItems = gsap.utils.toArray('.request__content-text-p');
        const mySplitText = new SplitText(textItems, { type: 'lines' });

        gsap.from(
          mySplitText.lines,
          {
            opacity: 0,
            y: 30,
            visibility: 'visible',
            duration: 1,
            stagger: 0.1,
            mask: true,
            delay: 0.2,
            onComplete: () => mySplitText.revert(),

            scrollTrigger: {
              trigger: textContainerRef.current,
              start: 'top 80%',
            },
          },
          '-=0.05'
        );
      });
    },
    { scope: textContainerRef, dependencies: [currentItem] }
  );

  return (
    <main>
      <section className="request" ref={animationContainerRef}>
        {currentItem !== undefined && (
          <div className="request__container container">
            <h2 className="request__title h2" ref={titleRef}>
              {currentItem.title}
            </h2>
            <div className="request__inner">
              <div className="request__content" ref={contentRef}>
                <div className="request__content-image">
                  <img
                    src={currentItem.imgSrc}
                    alt=""
                    width={540}
                    height={190}
                    loading="lazy"
                    ref={imageRef}
                  />
                </div>
                <h3 className="request__content-title h3" ref={cardTitleRef}>
                  {currentItem.contentTitle}
                </h3>
                <div className="request__content-text" ref={textContainerRef}>
                  {currentItem.descriptions.map((el) => (
                    <p className="request__content-text-p" key={el}>
                      {el}
                    </p>
                  ))}
                </div>
                <div className="request__content-items">
                  {currentItem.items.map((item) => (
                    <ContentItem key={item} name={item} />
                  ))}
                </div>
              </div>
              <RequestForm ref={formRef} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default RequestPage;
