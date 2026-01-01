import '@/scss/blocks/_why-center.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import 'swiper/css';
import {useRef} from 'react';

gsap.registerPlugin(ScrollTrigger);

const WhyCenter = () => {
  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);
  const containerRef = useRef(null);
  const rombItemsRef = useRef(null);
  const centerItems = [{
    dt: 'Luxury trips provided', dd: '985',
  }, {
    dt: 'Destinations', dd: '68',
  }, {
    dt: 'Happy Customers', dd: '812',
  },];
  const sliderItems = [{
    imgUrl: '/images/book-cards/cars.png', title: 'Supercars',
  }, {
    imgUrl: '/images/book-cards/hotels.png', title: 'Hotels',
  }, {
    imgUrl: '/images/book-cards/villas.png', title: 'Villas',
  }, {
    imgUrl: '/images/book-cards/yahts.png', title: 'Yachts',
  }, {
    imgUrl: '/images/book-cards/helicopter.png', title: 'Private Helicopter',
  }, {
    imgUrl: '/images/book-cards/jet.png', title: 'Private Jet',
  }, {
    imgUrl: '/images/book-cards/cars.png', title: 'Supercars',
  }, {
    imgUrl: '/images/book-cards/hotels.png', title: 'Hotels',
  }, {
    imgUrl: '/images/book-cards/villas.png', title: 'Villas',
  }, {
    imgUrl: '/images/book-cards/yahts.png', title: 'Yachts',
  }, {
    imgUrl: '/images/book-cards/helicopter.png', title: 'Private Helicopter',
  }, {
    imgUrl: '/images/book-cards/jet.png', title: 'Private Jet',
  }, {
    imgUrl: '/images/book-cards/cars.png', title: 'Supercars',
  }, {
    imgUrl: '/images/book-cards/hotels.png', title: 'Hotels',
  }, {
    imgUrl: '/images/book-cards/villas.png', title: 'Villas',
  }, {
    imgUrl: '/images/book-cards/yahts.png', title: 'Yachts',
  }, {
    imgUrl: '/images/book-cards/helicopter.png', title: 'Private Helicopter',
  }, {
    imgUrl: '/images/book-cards/jet.png', title: 'Private Jet',
  }, {
    imgUrl: '/images/book-cards/cars.png', title: 'Supercars',
  }, {
    imgUrl: '/images/book-cards/hotels.png', title: 'Hotels',
  }, {
    imgUrl: '/images/book-cards/villas.png', title: 'Villas',
  }, {
    imgUrl: '/images/book-cards/yahts.png', title: 'Yachts',
  }, {
    imgUrl: '/images/book-cards/helicopter.png', title: 'Private Helicopter',
  }, {
    imgUrl: '/images/book-cards/jet.png', title: 'Private Jet',
  }, {
    imgUrl: '/images/book-cards/cars.png', title: 'Supercars',
  }, {
    imgUrl: '/images/book-cards/hotels.png', title: 'Hotels',
  }, {
    imgUrl: '/images/book-cards/villas.png', title: 'Villas',
  }, {
    imgUrl: '/images/book-cards/yahts.png', title: 'Yachts',
  }, {
    imgUrl: '/images/book-cards/helicopter.png', title: 'Private Helicopter',
  }, {
    imgUrl: '/images/book-cards/jet.png', title: 'Private Jet',
  }, {
    imgUrl: '/images/book-cards/cars.png', title: 'Supercars',
  }, {
    imgUrl: '/images/book-cards/hotels.png', title: 'Hotels',
  }, {
    imgUrl: '/images/book-cards/villas.png', title: 'Villas',
  }, {
    imgUrl: '/images/book-cards/yahts.png', title: 'Yachts',
  }, {
    imgUrl: '/images/book-cards/helicopter.png', title: 'Private Helicopter',
  }, {
    imgUrl: '/images/book-cards/jet.png', title: 'Private Jet',
  },];

  useGSAP(() => {
    const rombItems = gsap.utils.toArray('.experiencee-center__item');

    rombItems.forEach((item) => {
      gsap.from(item, {
        opacity: 0, scale: 0, duration: 1,

        scrollTrigger: {
          trigger: item, start: 'bottom 80%',
        },
      });
    });

    gsap.from(cloudLeftRef.current, {
      opacity: 0.1, x: -100, duration: 1.5, scrollTrigger: {
        trigger: cloudLeftRef.current, start: 'top 80%',
      },
    });

    gsap.from(cloudRightRef.current, {
      opacity: 0.1, x: 100, duration: 1.5, scrollTrigger: {
        trigger: cloudLeftRef.current, start: 'center 60%',
      },
    });
  }, {scope: containerRef});


  return (<section
    className="experiencee"
    ref={containerRef}
    aria-labelledby='experiencee-title'
  >
    <div
      className="experiencee-cloud experiencee-cloud__left"
      ref={cloudLeftRef}
    >
      <img
        src="/images/why/cloud-left.png"
        alt=""
        aria-hidden={true}
        role='presentation'
      />
    </div>
    <div
      className="experiencee-cloud experiencee-cloud__right"
      ref={cloudRightRef}
    >
      <img
        src="/images/why/cloud-center.png"
        alt=""
        role='presentation'
        aria-hidden="true"
      />
    </div>
    <div className="experiencee__container container">
      <div className="experiencee__inner">
        <div className="experiencee__inner-top experiencee-top">
          <h3
            className="experiencee-top__title h3"
            id='experiencee-title'
          >
            Creating a unique experiencee for each client
          </h3>
          <div className="experiencee-top__text">
            <p>
              Starting from suggesting destinations to visit in the current
              season, to the selection of the most exquisite locations for a
              special event or a family dinner.
            </p>
          </div>
        </div>
        <div className="experiencee__inner-center experiencee-center">
          <div className="experiencee-center__items">
            {centerItems.map((el) => (<dl
              className="experiencee-center__item"
              key={el.dt}
              ref={rombItemsRef}
            >
              <dt>{el.dt}</dt>
              <dd>{el.dd}</dd>
              <svg

                width="192"
                height="366"
                viewBox="0 0 192 366"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M96 364.146C60.9086 297.5 36.4931 251.42 0.565432 182.722L48.6367 91.7041L48.6367 91.7031L96.0029 1.29492L143.752 91.7021L143.751 91.7031L191.436 182.721L96 364.146Z"
                  stroke="#79655E"
                />
              </svg>
            </dl>))}
          </div>
        </div>
        <div className="experiencee__inner-content experiencee-content">
          <h3 className="experiencee-content__title">
            In Lux Trips we plan, organize and manage tailor-made itineraries
            for our clients.
          </h3>
          <div className="experiencee-content__descr">
            Offering exclusive tours, exceptional accommodations and
            personalized journey-planning.
          </div>
          <div className="experiencee-content__center content__center">
            <div className="content__center-image">
              <img
                src="/images/why/image-content.png"
                alt=""
                width={275}
                height={640}
                aria-hidden={true}
                role='presentation'
              />
            </div>
            <div className="content__center-text">
              <p>
                We provide our clients with access to exclusive events and
                experiencees, such as glamping or fishing on private islands,
                private vineyard wine-tasting and tours, or cruising a sea
                with a flock of dolphins, to name just a few.
              </p>
              <p>
                Our location scouting for events and holidays encompasses
                diverse types of villas and chalets, luxury resorts and
                world-class hotels around the world.
              </p>
            </div>
            <div className="content__center-button-wrapper">
              <button
                className="content__center-button"
                aria-label='View luxury packages'
              >
                <span>Luxury packages</span>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  width="254"
                  height="99"
                  viewBox="0 0 254 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M85.0816 17.1353H40.5C23.6553 17.1353 10 30.7906 10 47.6353C10 64.4799 23.6553 78.1353 40.5 78.1353H85.0816V77.1353H40.5C24.2076 77.1353 11 63.9277 11 47.6353C11 31.3429 24.2076 18.1353 40.5 18.1353H85.0816V17.1353ZM170.531 77.1353H213.5C229.792 77.1353 243 63.9277 243 47.6353C243 31.3429 229.792 18.1353 213.5 18.1353H170.531V17.1353H213.5C230.345 17.1353 244 30.7906 244 47.6353C244 64.4799 230.345 78.1353 213.5 78.1353H170.531V77.1353Z"
                    fill="#0C0B10"
                  />
                  <rect
                    y="26.1353"
                    width="254"
                    height="55"
                    rx="27.5"
                    fill="#0C0B10"
                  />
                  <path
                    d="M126.267 0.135254L123.885 4.64926L121.58 9.16326C123.232 12.3327 124.692 15.0795 126.325 18.1913L131.069 9.16326L128.63 4.64926L126.267 0.135254Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M150.438 15.5215L150.207 15.3871L149.977 15.2334L149.727 15.0989L149.497 14.9453L149.247 14.8108L149.016 14.6764L148.786 14.5419L148.536 14.4074L148.287 14.273L148.056 14.1577L147.806 14.0233L147.557 13.8888L147.326 13.7543L147.076 13.6391L146.827 13.5046L146.577 13.3894L146.327 13.2741L146.078 13.1589L145.828 13.0244L145.693 12.9668L143.484 17.7881L143.58 17.8266L143.811 17.9226L144.022 18.0378L144.253 18.1531L144.464 18.2491L144.675 18.3644L144.906 18.4796L145.117 18.5949L145.328 18.6909L145.54 18.8062L145.77 18.9406L145.981 19.0559L146.193 19.1711L146.404 19.2864L146.615 19.4017L146.827 19.5361L147.038 19.6514L147.249 19.7666L147.461 19.9011L147.672 20.0355L147.864 20.1508L150.63 15.6368L150.438 15.5215Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M140.119 10.8151L139.85 10.7383L139.581 10.6615L139.312 10.5654L139.043 10.4886L138.774 10.431L138.486 10.3541L138.217 10.2773L137.948 10.2005L137.68 10.1428L137.391 10.066L137.123 9.98916L136.854 9.93153L136.565 9.87391L136.297 9.81628L136.008 9.73945L135.739 9.68182L135.451 9.64341L135.182 9.58578L135.029 9.54736L134.068 14.7529L134.184 14.7721L134.433 14.8297L134.683 14.8681L134.914 14.9257L135.163 14.9834L135.413 15.041L135.663 15.0986L135.893 15.1563L136.143 15.1947L136.393 15.2715L136.623 15.3291L136.873 15.3868L137.123 15.4636L137.353 15.5212L137.584 15.5788L137.833 15.6557L138.064 15.7325L138.313 15.7901L138.544 15.867L138.794 15.9438L138.89 15.9822L140.484 10.9304L140.388 10.9112L140.119 10.8151Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M117.504 9.528L117.216 9.58562L116.928 9.64325L116.659 9.68167L116.371 9.73929L116.102 9.81613L115.814 9.87375L115.545 9.93138L115.257 9.989L114.988 10.0658L114.719 10.1427L114.45 10.2003L114.162 10.2771L113.893 10.354L113.624 10.4308L113.355 10.4884L113.086 10.5653L112.817 10.6613L112.529 10.7381L112.279 10.815L112.164 10.8534L113.758 15.9052L113.835 15.8668L114.085 15.79L114.315 15.7323L114.546 15.6555L114.796 15.5787L115.045 15.5211L115.276 15.4634L115.526 15.3866L115.756 15.329L116.006 15.2713L116.236 15.1945L116.486 15.1561L116.736 15.0985L116.985 15.0408L117.216 14.9832L117.466 14.9256L117.715 14.868L117.965 14.8295L118.215 14.7719L118.445 14.7335L118.58 14.7143L117.619 9.50879L117.504 9.528Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M106.841 12.909L106.591 13.0243L106.341 13.1587L106.091 13.274L105.842 13.3892L105.592 13.5045L105.342 13.6389L105.093 13.7542L104.843 13.8887L104.612 14.0231L104.363 14.1576L104.113 14.2728L103.882 14.4073L103.633 14.5417L103.402 14.6762L103.153 14.8107L102.922 14.9451L102.672 15.0988L102.442 15.2333L102.211 15.3869L102 15.5022L104.785 20.0162L104.958 19.9009L105.169 19.7665L105.361 19.6512L105.573 19.536L105.784 19.4015L105.995 19.2863L106.226 19.171L106.437 19.0557L106.648 18.9405L106.86 18.806L107.071 18.6908L107.282 18.5947L107.513 18.4795L107.724 18.3642L107.935 18.249L108.166 18.1529L108.377 18.0377L108.608 17.9224L108.819 17.8264L109.05 17.7304L109.165 17.6727L106.956 12.8706L106.841 12.909Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M126.921 98.8921L125.164 95.5616L123.463 92.2311C124.682 89.8926 125.759 87.866 126.963 85.5701L130.464 92.2311L128.664 95.5616L126.921 98.8921Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M144.566 87.5399L144.396 87.6391L144.226 87.7525L144.042 87.8517L143.872 87.965L143.687 88.0643L143.517 88.1635L143.347 88.2627L143.163 88.3619L142.979 88.4611L142.809 88.5461L142.624 88.6453L142.44 88.7445L142.27 88.8437L142.086 88.9288L141.902 89.028L141.717 89.113L141.533 89.198L141.349 89.2831L141.165 89.3823L141.065 89.4248L139.436 85.8675L139.506 85.8392L139.676 85.7683L139.832 85.6833L140.002 85.5983L140.158 85.5274L140.314 85.4424L140.484 85.3573L140.64 85.2723L140.796 85.2014L140.952 85.1164L141.122 85.0172L141.278 84.9322L141.434 84.8471L141.59 84.7621L141.746 84.6771L141.902 84.5778L142.057 84.4928L142.213 84.4078L142.369 84.3086L142.525 84.2094L142.667 84.1243L144.708 87.4548L144.566 87.5399Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M136.942 91.0124L136.743 91.0691L136.545 91.1258L136.347 91.1966L136.148 91.2533L135.95 91.2958L135.737 91.3525L135.539 91.4092L135.34 91.4659L135.142 91.5084L134.929 91.5651L134.731 91.6218L134.533 91.6643L134.32 91.7068L134.122 91.7493L133.909 91.806L133.711 91.8485L133.498 91.8769L133.3 91.9194L133.186 91.9478L132.478 88.107L132.563 88.0929L132.747 88.0503L132.931 88.022L133.101 87.9795L133.285 87.937L133.47 87.8945L133.654 87.8519L133.824 87.8094L134.008 87.7811L134.192 87.7244L134.362 87.6819L134.547 87.6393L134.731 87.5827L134.901 87.5401L135.071 87.4976L135.255 87.4409L135.425 87.3842L135.61 87.3417L135.78 87.285L135.964 87.2284L136.035 87.2L137.211 90.9273L137.14 90.9415L136.942 91.0124Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M120.756 91.9619L120.544 91.9194L120.331 91.8769L120.133 91.8485L119.92 91.806L119.722 91.7493L119.509 91.7068L119.311 91.6643L119.098 91.6218L118.9 91.5651L118.701 91.5084L118.503 91.4659L118.29 91.4092L118.092 91.3525L117.894 91.2958L117.695 91.2533L117.497 91.1966L117.298 91.1257L117.086 91.069L116.901 91.0124L116.816 90.984L117.993 87.2567L118.049 87.285L118.234 87.3417L118.404 87.3842L118.574 87.4409L118.758 87.4976L118.942 87.5401L119.112 87.5826L119.297 87.6393L119.467 87.6818L119.651 87.7244L119.821 87.781L120.005 87.8094L120.189 87.8519L120.374 87.8944L120.544 87.9369L120.728 87.9795L120.912 88.022L121.096 88.0503L121.281 88.0928L121.451 88.1212L121.55 88.1354L120.841 91.9761L120.756 91.9619Z"
                    fill="#0C0B10"
                  />
                  <path
                    d="M112.862 89.4677L112.678 89.3827L112.494 89.2835L112.31 89.1985L112.125 89.1134L111.941 89.0284L111.757 88.9292L111.573 88.8442L111.389 88.745L111.218 88.6458L111.034 88.5465L110.85 88.4615L110.68 88.3623L110.496 88.2631L110.326 88.1639L110.141 88.0647L109.971 87.9655L109.787 87.8521L109.617 87.7529L109.447 87.6395L109.291 87.5545L111.346 84.224L111.474 84.309L111.629 84.4082L111.771 84.4932L111.927 84.5783L112.083 84.6775L112.239 84.7625L112.409 84.8476L112.565 84.9326L112.721 85.0176L112.877 85.1168L113.033 85.2019L113.188 85.2727L113.358 85.3578L113.514 85.4428L113.67 85.5278L113.84 85.5987L113.996 85.6837L114.166 85.7688L114.322 85.8396L114.492 85.9105L114.577 85.953L112.947 89.4961L112.862 89.4677Z"
                    fill="#0C0B10"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="experiencee-content__bottom-text">
            <p>
              We customize your journey by selecting the most convenient
              travelling options, including private yachts, jets, charter
              flights and supercars.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="why-slider">
      <div className="why-slider__wrapper">
        <Swiper
          slidesPerView={2}
          slidesPerGroup={1}
          spaceBetween={30}
          loop={true}
          onSlideChange={(swiper) => {
            if (swiper.activeIndex === 24) {
              swiper.slideTo(1);
            }
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            }, 500: {
              slidesPerView: 2,
            },
          }}
        >
          {sliderItems.map((el) => (<SwiperSlide
            key={el.imgUrl}
            role="group"
            aria-roledescription="slide"
          >
            <div className="why-slide">
              <img
                className="why-slide__image"
                src={el.imgUrl}
                alt={el.title}
                width={540}
                height={190}
              />
              <span className="why-slide__title">{el.title}</span>
            </div>
          </SwiperSlide>))}
        </Swiper>
      </div>
      <div className="customize__button">
        <Link to="/products">Book Now</Link>
      </div>
    </div>
  </section>);
};

export default WhyCenter;
