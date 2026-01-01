import LuxyryCard from '@/components/LuxyryCard/LuxyryCard';
import '@/scss/blocks/_luxury-card.scss';
import {useItemsStore} from './../../zustand/itemsStore';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';


import {useLenis} from 'lenis/react';

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Luxury = () => {
  const [currentItemsCount, setCurrentItemsCount] = useState(6);
  const itemsRef = useRef(null);
  const lenis = useLenis();


  const packagesItems = useItemsStore((state) => state.packagesItems);
  const isLoading = useItemsStore((state) => state.isLoading);
  const isError = useItemsStore((state) => state.isError);

  const fetchPackagesItems = useItemsStore((state) => state.fetchPackagesItems);
  const skeletonItems = [
    {
      id: 1,
      imgUrl: '/images/slides/1.png',
      location: 'Austria',
      title: 'Winter Park Ski Holiday',
      rating: 4,
      price: 1490,
      region: 'Antarctica',
    },
    {
      id: 2,
      imgUrl: '/images/slides/1.png',
      location: 'Austria',
      title: 'Winter Park Ski Holiday',
      rating: 4,
      price: 1490,
      region: 'Antarctica',
    },
    {
      id: 3,
      imgUrl: '/images/slides/1.png',
      location: 'Austria',
      title: 'Winter Park Ski Holiday',
      rating: 4,
      price: 1490,
      region: 'Antarctica',
    },
    {
      id: 4,
      imgUrl: '/images/slides/1.png',
      location: 'Austria',
      title: 'Winter Park Ski Holiday',
      rating: 4,
      price: 1490,
      region: 'Antarctica',
    },
    {
      id: 5,
      imgUrl: '/images/slides/1.png',
      location: 'Austria',
      title: 'Winter Park Ski Holiday',
      rating: 4,
      price: 1490,
      region: 'Antarctica',
    },
    {
      id: 6,
      imgUrl: '/images/slides/1.png',
      location: 'Austria',
      title: 'Winter Park Ski Holiday',
      rating: 4,
      price: 1490,
      region: 'Antarctica',
    },
  ];

  useEffect(() => {
    fetchPackagesItems();
  }, []);

  useGSAP(
    () => {
      if (!isLoading && packagesItems.length > 0) {
        const items = gsap.utils.toArray('.luxury__item:not(.is-animated)');

        gsap.fromTo(
          items,
          {autoAlpha: 0, y: 50},
          {
            autoAlpha: 1,
            immediateRender: false,
            opacity: 1,
            y: 0,
            stagger: 0.3,
            onStart: () =>
              items.forEach((el) => gsap.set(el, {visibility: 'visible'})),
            onComplete: () => {
              items.forEach((el) => el.classList.add('is-animated'));
            },
          }
        );
      }
    },

    {scope: itemsRef, dependencies: [packagesItems, currentItemsCount]}
  );

  const handleLoadMore = () => {
    setCurrentItemsCount((prev) => prev + 6);

    setTimeout(() => {
      lenis?.resize();
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <section
      className="luxury"
      aria-labelledby='luxury-title'
    >
      <div className="luxury__container container">
        <div className="luxury__inner">
          <h2
            className="luxury__title h2"
            id='luxury-title'
          >Luxury packages
          </h2>
          {isLoading &&
            skeletonItems.map((el, index) => (
              <div
                className="luxury__items"
                key={index}
              >
                <div
                  className="luxury__item-sceleton"
                  aria-hidden={true}
                ></div>
              </div>
            ))}
          {!isError && !isLoading && packagesItems.length > 0 && (
            <ul
              className="luxury__items"
              ref={itemsRef}
            >
              {packagesItems
                .filter((el) => el.id <= currentItemsCount)
                .map((el) => (
                  <li key={el.id}>
                    <Link
                      className="luxury__item"
                      to="/"
                      aria-labelledby={`pkg-${el.id}-title`}
                    >
                      <div className="luxury__image">
                        <img
                          src={el.imgUrl}
                          alt={`${el.title} in ${el.location}`}
                          width={350}
                          height={570}
                        />
                      </div>
                      <div className="luxury__content">
                        <div className="luxury__content-location">
                          {el.location}
                        </div>
                        <h4
                          className="luxury__content-title h4"
                          id={`pkg-${el.id}-title`}
                        >{el.title}</h4>
                        <p>From</p>
                        <p className="luxury__content-price">${el.price}</p>
                      </div>
                      <div className="luxury__rating">{el.rating}</div>
                    </Link>
                  </li>
                ))}
              <div className="luxury-btn__wrapper">
                <button
                  className="luxury-btn"
                  onClick={handleLoadMore}
                  aria-busy={isLoading}
                  aria-controls="luxury-list"
                >
                  <svg
                    width="330"
                    height="100"
                    viewBox="0 0 330 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M123.082 17.4131H55.5C38.6553 17.4131 25 31.0684 25 47.9131C25 64.7578 38.6553 78.4131 55.5 78.4131H123.082V77.4131H55.5C39.2076 77.4131 26 64.2055 26 47.9131C26 31.6207 39.2076 18.4131 55.5 18.4131H123.082V17.4131ZM208.531 77.4131H274.5C290.792 77.4131 304 64.2055 304 47.9131C304 31.6207 290.792 18.4131 274.5 18.4131H208.531V17.4131H274.5C291.345 17.4131 305 31.0684 305 47.9131C305 64.7578 291.345 78.4131 274.5 78.4131H208.531V77.4131Z"
                      fill="white"
                    />
                    <rect
                      y="26.4131"
                      width="330"
                      height="55"
                      rx="27.5"
                      fill="white"
                    />
                    <path
                      d="M164.267 0.413086L161.885 4.92709L159.58 9.44109C161.232 12.6105 162.692 15.3573 164.325 18.4691L169.069 9.44109L166.63 4.92709L164.267 0.413086Z"
                      fill="white"
                    />
                    <path
                      d="M188.438 15.7994L188.207 15.6649L187.977 15.5112L187.727 15.3768L187.497 15.2231L187.247 15.0886L187.016 14.9542L186.786 14.8197L186.536 14.6853L186.287 14.5508L186.056 14.4356L185.806 14.3011L185.557 14.1666L185.326 14.0322L185.076 13.9169L184.827 13.7825L184.577 13.6672L184.327 13.552L184.078 13.4367L183.828 13.3023L183.693 13.2446L181.484 18.066L181.58 18.1044L181.811 18.2004L182.022 18.3157L182.253 18.4309L182.464 18.527L182.675 18.6422L182.906 18.7575L183.117 18.8727L183.328 18.9688L183.54 19.084L183.77 19.2185L183.981 19.3337L184.193 19.449L184.404 19.5642L184.615 19.6795L184.827 19.8139L185.038 19.9292L185.249 20.0444L185.461 20.1789L185.672 20.3134L185.864 20.4286L188.63 15.9146L188.438 15.7994Z"
                      fill="white"
                    />
                    <path
                      d="M178.119 11.093L177.85 11.0161L177.581 10.9393L177.312 10.8432L177.043 10.7664L176.774 10.7088L176.486 10.632L176.217 10.5551L175.948 10.4783L175.68 10.4207L175.391 10.3438L175.123 10.267L174.854 10.2094L174.565 10.1517L174.297 10.0941L174.008 10.0173L173.739 9.95965L173.451 9.92124L173.182 9.86361L173.029 9.8252L172.068 15.0307L172.184 15.0499L172.433 15.1075L172.683 15.146L172.914 15.2036L173.163 15.2612L173.413 15.3188L173.663 15.3765L173.893 15.4341L174.143 15.4725L174.393 15.5493L174.623 15.607L174.873 15.6646L175.123 15.7414L175.353 15.799L175.584 15.8567L175.833 15.9335L176.064 16.0103L176.313 16.068L176.544 16.1448L176.794 16.2216L176.89 16.26L178.484 11.2082L178.388 11.189L178.119 11.093Z"
                      fill="white"
                    />
                    <path
                      d="M155.504 9.80583L155.216 9.86346L154.928 9.92108L154.659 9.9595L154.371 10.0171L154.102 10.094L153.814 10.1516L153.545 10.2092L153.257 10.2668L152.988 10.3437L152.719 10.4205L152.45 10.4781L152.162 10.555L151.893 10.6318L151.624 10.7086L151.355 10.7663L151.086 10.8431L150.817 10.9391L150.529 11.016L150.279 11.0928L150.164 11.1312L151.758 16.1831L151.835 16.1446L152.085 16.0678L152.315 16.0102L152.546 15.9333L152.796 15.8565L153.045 15.7989L153.276 15.7413L153.526 15.6644L153.756 15.6068L154.006 15.5492L154.236 15.4723L154.486 15.4339L154.736 15.3763L154.985 15.3187L155.216 15.261L155.466 15.2034L155.715 15.1458L155.965 15.1074L156.215 15.0498L156.445 15.0113L156.58 14.9921L155.619 9.78662L155.504 9.80583Z"
                      fill="white"
                    />
                    <path
                      d="M144.841 13.1869L144.591 13.3021L144.341 13.4366L144.091 13.5518L143.842 13.6671L143.592 13.7823L143.342 13.9168L143.093 14.032L142.843 14.1665L142.612 14.3009L142.363 14.4354L142.113 14.5507L141.882 14.6851L141.633 14.8196L141.402 14.954L141.153 15.0885L140.922 15.223L140.672 15.3766L140.442 15.5111L140.211 15.6648L140 15.78L142.785 20.294L142.958 20.1788L143.169 20.0443L143.361 19.929L143.573 19.8138L143.784 19.6793L143.995 19.5641L144.226 19.4488L144.437 19.3336L144.648 19.2183L144.86 19.0839L145.071 18.9686L145.282 18.8726L145.513 18.7573L145.724 18.6421L145.935 18.5268L146.166 18.4308L146.377 18.3155L146.608 18.2003L146.819 18.1042L147.05 18.0082L147.165 17.9506L144.956 13.1484L144.841 13.1869Z"
                      fill="white"
                    />
                    <path
                      d="M164.921 99.1699L163.164 95.8394L161.463 92.5089C162.682 90.1705 163.759 88.1438 164.963 85.8479L168.464 92.5089L166.664 95.8394L164.921 99.1699Z"
                      fill="white"
                    />
                    <path
                      d="M182.566 87.8177L182.396 87.9169L182.226 88.0303L182.042 88.1295L181.872 88.2429L181.687 88.3421L181.517 88.4413L181.347 88.5405L181.163 88.6397L180.979 88.7389L180.809 88.8239L180.624 88.9232L180.44 89.0224L180.27 89.1216L180.086 89.2066L179.902 89.3058L179.717 89.3908L179.533 89.4759L179.349 89.5609L179.165 89.6601L179.065 89.7026L177.436 86.1454L177.506 86.117L177.676 86.0462L177.832 85.9611L178.002 85.8761L178.158 85.8052L178.314 85.7202L178.484 85.6352L178.64 85.5501L178.796 85.4793L178.952 85.3942L179.122 85.295L179.278 85.21L179.434 85.125L179.59 85.0399L179.746 84.9549L179.902 84.8557L180.057 84.7706L180.213 84.6856L180.369 84.5864L180.525 84.4872L180.667 84.4022L182.708 87.7327L182.566 87.8177Z"
                      fill="white"
                    />
                    <path
                      d="M174.942 91.2902L174.743 91.3469L174.545 91.4036L174.347 91.4745L174.148 91.5311L173.95 91.5737L173.737 91.6303L173.539 91.687L173.34 91.7437L173.142 91.7862L172.929 91.8429L172.731 91.8996L172.533 91.9421L172.32 91.9847L172.122 92.0272L171.909 92.0839L171.711 92.1264L171.498 92.1547L171.3 92.1972L171.186 92.2256L170.478 88.3849L170.563 88.3707L170.747 88.3282L170.931 88.2998L171.101 88.2573L171.285 88.2148L171.47 88.1723L171.654 88.1298L171.824 88.0873L172.008 88.0589L172.192 88.0022L172.362 87.9597L172.547 87.9172L172.731 87.8605L172.901 87.818L173.071 87.7755L173.255 87.7188L173.425 87.6621L173.61 87.6196L173.78 87.5629L173.964 87.5062L174.035 87.4778L175.211 91.2052L175.14 91.2193L174.942 91.2902Z"
                      fill="white"
                    />
                    <path
                      d="M158.756 92.2397L158.544 92.1972L158.331 92.1547L158.133 92.1264L157.92 92.0838L157.722 92.0271L157.509 91.9846L157.311 91.9421L157.098 91.8996L156.9 91.8429L156.701 91.7862L156.503 91.7437L156.29 91.687L156.092 91.6303L155.894 91.5736L155.695 91.5311L155.497 91.4744L155.298 91.4036L155.086 91.3469L154.901 91.2902L154.816 91.2618L155.993 87.5345L156.049 87.5628L156.234 87.6195L156.404 87.6621L156.574 87.7187L156.758 87.7754L156.942 87.818L157.112 87.8605L157.297 87.9172L157.467 87.9597L157.651 88.0022L157.821 88.0589L158.005 88.0872L158.189 88.1297L158.374 88.1723L158.544 88.2148L158.728 88.2573L158.912 88.2998L159.096 88.3282L159.281 88.3707L159.451 88.399L159.55 88.4132L158.841 92.2539L158.756 92.2397Z"
                      fill="white"
                    />
                    <path
                      d="M150.862 89.7456L150.678 89.6605L150.494 89.5613L150.31 89.4763L150.125 89.3913L149.941 89.3062L149.757 89.207L149.573 89.122L149.389 89.0228L149.218 88.9236L149.034 88.8244L148.85 88.7393L148.68 88.6401L148.496 88.5409L148.326 88.4417L148.141 88.3425L147.971 88.2433L147.787 88.1299L147.617 88.0307L147.447 87.9173L147.291 87.8323L149.346 84.5018L149.474 84.5868L149.629 84.686L149.771 84.7711L149.927 84.8561L150.083 84.9553L150.239 85.0403L150.409 85.1254L150.565 85.2104L150.721 85.2955L150.877 85.3947L151.033 85.4797L151.188 85.5506L151.358 85.6356L151.514 85.7206L151.67 85.8057L151.84 85.8765L151.996 85.9616L152.166 86.0466L152.322 86.1175L152.492 86.1883L152.577 86.2308L150.947 89.7739L150.862 89.7456Z"
                      fill="white"
                    />
                  </svg>
                  {!isLoading ? 'Load more' : '...Loading'}
                </button>
              </div>
            </ul>
          )}
          {isError && <div
            className="error-message"
            role='alert'
          >Someting wrong!!!</div>}
        </div>
      </div>
    </section>
  );
};

export default Luxury;
