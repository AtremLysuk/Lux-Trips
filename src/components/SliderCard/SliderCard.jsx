import '@/scss/blocks/_slider-card.scss';

const SliderCard = (props) => {
  const { id, imgUrl, location, title, rating, price, region } = props.el;


  return (
    <div className="slide__wrapper">
      <div className="slide__image">
        <img src={imgUrl} alt="" width={350} height={570} />
      </div>

      <div className="slide__content">
        <div className="slide__content-location">{location}</div>
        <h4 className="slide__content-title h4">{title}</h4>
        <p>From</p>
        <p className="slide__content-price">${price}</p>
      </div>
      <div className="slide__rating">{rating}</div>

    </div>
  );
};

export default SliderCard;
