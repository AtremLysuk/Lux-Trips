import { Link } from 'react-router-dom';
import ButtonDecorate from '../ButtonDecorate/ButtonDecorate';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useGlobalParallax } from '@/Hooks/useGlobalParallax';

import '@/scss/blocks/_products-item.scss';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ProductsItem = (props) => {
  const itemConteinerRef = useRef(null);
  const imageRef = useRef(null);

  const { id, imgUrl, text, title, path } = props.item;

  return (
    <div className="products__item" ref={itemConteinerRef}>
      <div className="products__item-image">
        <h4 className="products__item-title">{title}</h4>
        <img src={imgUrl} alt="" width={540} height={190} ref={imageRef} />
      </div>
      <div className="products__item-content">
        <div className="products__item-text">
          <p>{text}</p>
        </div>
        <Link className="products__item-link" to={path} state={id}>
          Make A Request
        </Link>
      </div>
    </div>
  );
};

export default ProductsItem;
