import '@/scss/blocks/_luxury-card.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { Link } from 'react-router-dom';

const LuxyryCard = (props) => {
  const { id, imgUrl, location, title, rating, price, region } = props.el;

  const itemRef = useRef(null);

  console.log(itemRef.current)

  useGSAP(() => {
    gsap.to(
      itemRef.current,
      { opacity: 1,stagger: '+=0.3', duration: 1 }
    );
  });

  return (
    <Link className="luxury__item" to="/" ref={itemRef}>
      <div className="luxury__image">
        <img src={imgUrl} alt="" width={350} height={570} />
      </div>

      <div className="luxury__content">
        <div className="luxury__content-location">{location}</div>
        <h4 className="luxury__content-title h4">{title}</h4>
        <p>From</p>
        <p className="luxury__content-price">${price}</p>
      </div>
      <div className="luxury__rating">{rating}</div>
    </Link>
  );
};

export default LuxyryCard;
