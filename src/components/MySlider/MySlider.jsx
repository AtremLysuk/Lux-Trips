import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import SliderCard from '../SliderCard/SliderCard';

import 'swiper/scss';
import classNames from 'classnames';
import PacagesCard from '../PacagesCard/PacagesCard';
import CustomersCard from '../CustomersCard/CustomersCard';

const MySlider = (props) => {
  const {
    spaceBetween = 30,
    slidesPerView = 3,
    slidesPerGroup = 1,
    isPackageCard = false,
    isCustomersCard = false,
  } = props;

  const slides = props.items;
  const className = props.className;

  return (<div
    className={classNames(className + '-slider')}
    aria-live="polite"
    aria-roledescription="carousel"
    aria-label="Top Rated Experiences"
  >
    <Swiper
      modules={[Navigation]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      watchSlidesProgress={true}
      watchSlidesVisibility={true}
      observer={true}
      observeParents={true}
      roundLengths={true}
      resizeObserver={true}
      loop={false}

      keyboard={{enabled: true}}
      navigation={{
        nextEl: `.${className}-next`,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },

        500: {
          slidesPerView:2,
        },

        900: {
          slidesPerView: 3,
        },
      }}
    >
      {slides.map((el) => (<SwiperSlide
        key={el.id}
        role="group"
        aria-roledescription="slide"
        aria-label={`Slide ${el.id} of ${slides.length}`}
      >
        {!isPackageCard && <SliderCard el={el} />}
        {isPackageCard && <PacagesCard el={el} />}
        {isCustomersCard && <CustomersCard el={el} />}
      </SwiperSlide>))}
    </Swiper>
    <button
      className={classNames(className + '-next')}
      type="button"
      aria-label="Next slide"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        width="107"
        height="107"
        viewBox="0 0 107 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="53.0332"
          width="75"
          height="75"
          transform="rotate(-45 0 53.0332)"
          fill="#79655E"
        />
        <path
          d="M39.5332 52.5332H67.5332M67.5332 52.5332L59.3665 45.5332M67.5332 52.5332L59.3665 59.5332"
          stroke="white"
        />
      </svg>
    </button>
  </div>);
};

export default MySlider;
