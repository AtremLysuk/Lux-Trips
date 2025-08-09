
import ButtonDecorate from "../ButtonDecorate/ButtonDecorate";

const ProductsItem = (props) => {

  const {
    imgUrl,
    text,
    title,
    path,
  } = props;
  
  return (
    <div className="products__item">
      <div className="products__item-image">
        <h4 className="products__item-title">{title}</h4>
        <img src={imgUrl} alt="" width={540} height={190} />
      </div>
      <div className="products__item-text">
        <p>{text}</p>
      </div>
      <ButtonDecorate title='Make A Request' path={path} />
    </div>
  );
};

export default ProductsItem;
