import '@/scss/blocks/_slider-card.scss';

const SliderCard = (props) => {
  const {id, imgUrl, location, title, rating, price, region} = props.el;


  return (
    <article className="slide__wrapper">
      <div className="slide__image">
        <img
          src={imgUrl}
          alt={`${title}, ${location}`}
          width={350}
          height={570}
        />
      </div>

      <div className="slide__content">
        <div className="slide__content-location">{location}</div>
        <h3 className="slide__content-title h4">{title}</h3>
        <p>From</p>
        <p className="slide__content-price">
          <span className="visually-hidden">Price:</span>
          <span aria-label={`Price ${price} dollars`}>${price}</span>
        </p>
      </div>
      <div
        className="slide__rating"
        aria-label={`Rating ${rating} out of 5`}
      >{rating}</div>

    </article>
  );
};

export default SliderCard;
