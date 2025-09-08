import { Link } from 'react-router-dom';
import ButtonDecorate from '../ButtonDecorate/ButtonDecorate';


import '@/scss/blocks/_products-item.scss';


const ProductsItem = (props) => {


  const { id, imgUrl, text, title, path } = props.item;

  return (
    <div className="products__item">
      <div className="products__item-image">
        <h4 className="products__item-title">{title}</h4>
        <img src={imgUrl} alt="" width={540} height={190} />
      </div>
      <div className="products__item-content">
        <div className="products__item-text">
          <p>{text}</p>
        </div>
        <Link className='products__item-link' to={path} state={id}>Make A Request</Link>
      </div>
    </div>
  );
};

export default ProductsItem;
