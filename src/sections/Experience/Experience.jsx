import '@/scss/blocks/_experience.scss';
import MySlider from '@/components/MySlider/MySlider';
import { motion } from 'motion/react';
import { useState } from 'react';

const Experience = () => {
  const [activeRegion, setActiveRegion] = useState('World');

  const regions = [
    'World',
    'Africa',
    'Asia',
    'North America',
    'South America',
    'Antarctica',
    'Australia',
  ];

  const productItems = [
    {
      id: 1,
      imgUrl: '/images/slides/1.png',
      location: 'Austria       ',
      title: 'Winter Park Ski Holiday',
      rating: '4.0',
      price: 1490,
      region: 'Antarctica',
    },
    {
      id: 2,
      imgUrl: '/images/slides/2.png',
      location: 'Peru',
      title: 'Machu Picchu',
      rating: '5.0',
      price: 2300,
      region: 'North America',
    },
    {
      id: 3,
      imgUrl: '/images/slides/3.png',
      location: 'Croatia ',
      title: 'Hvar',
      rating: '4.0',
      price: 4500,
      region: 'Europe',
    },
    {
      id: 4,
      imgUrl: '/images/slides/4.png',
      location: 'Jordan',
      title: 'Wadi Musa',
      rating: '4.0',
      price: 4500,
      region: 'Asia',
    },
    {
      id: 5,
      imgUrl: '/images/slides/5.png',
      location: 'Europe',
      title: 'Winter Park Ski Holiday',
      rating: '5.0',
      price: 4900,
      region: 'Antarctica',
    },
    {
      id: 6,
      imgUrl: '/images/slides/6.png',
      location: 'Jordan',
      title: 'Wadi Musa',
      rating: '4.0',
      price: 4500,
      region: 'Asia',
    },

    {
      id: 7,
      imgUrl: '/images/slides/7.png',
      location: 'Jordan',
      title: 'Wadi Musa',
      rating: '4.0',
      price: 4500,
      region: 'Asia',
    },

    {
      id: 8,
      imgUrl: '/images/slides/8.png',
      location: 'Jordan',
      title: 'Wadi Musa',
      rating: '4.0',
      price: 4500,
      region: 'Asia',
    },
    {
      id: 9,
      imgUrl: '/images/slides/9.png',
      location: 'Jordan',
      title: 'Wadi Musa',
      rating: '5.0',
      price: 4500,
      region: 'Asia',
    },
    {
      id: 10,
      imgUrl: '/images/slides/10.png',
      location: 'Jordan',
      title: 'Wadi Musa',
      rating: '4.0',
      price: 4500,
      region: 'Asia',
    },
    {
      id: 11,
      imgUrl: '/images/slides/11.png',
      location: 'Jordan',
      title: 'Wadi Musa',
      rating: '4.0',
      price: 4500,
      region: 'Asia',
    },
    {
      id: 12,
      imgUrl: '/images/slides/12.png',
      location: 'Jordan',
      title: 'Wadi Musa',
      rating: '4.0',
      price: 4500,
      region: 'Asia',
    },
  ];

  return (
    <section className="experience">
      <div className="experience__container container">
        <h2 className="experience__title h2">Top Rated Experiences</h2>
        <ul className="experience-header__items">
          {regions.map((el) => (
            <li className="experience-header__item" key={el}>
              <motion.button
                className={
                  activeRegion === el
                    ? 'experience-header__btn active'
                    : 'experience-header__btn'
                }
                initial={{ color: '#79655e' }}
                animate={{
                  color: activeRegion === el ? '#0c0b10' : '#79655e',
                }}
                onClick={() => {
                  setActiveRegion(el);
                }}
              >
                {el}
                {activeRegion === el && <ActiveLine />}
              </motion.button>
            </li>
          ))}
        </ul>
        <MySlider items={productItems} className="experience" />
      </div>
    </section>
  );
};

function ActiveLine() {
  return (
    <motion.div
      className="experience__active-line"
      layoutId="activeLine"
      style={{
        width: '18px',
        height: '12px',
        position: 'absolute',
        left: 'calc(50% - 9px)',
        bottom: '-15px',
        background: 'url(/images/slides/icon-active.svg)no-repeat center/cover',
      }}
    ></motion.div>
  );
}

export default Experience;
