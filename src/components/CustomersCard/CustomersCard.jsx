import '@/scss/blocks/_customers-card.scss';

const CustomersCard = (props) => {
  const {imgUrl, text, author, coauthor} = props.el;

  return (<article className="customers-card">
      <figure className="customers-card__inner">
        <div className="customers-card__img">
          <img
            src={imgUrl}
            alt={`Photo of ${author}`}
            width={102}
            height={102}
          />
        </div>
        <blockquote className="customers-card__text">
          {text}
        </blockquote>
        <figcaption className="customers-card__content">
          <div className="customers-card__author">
            <p>{author}</p>
          </div>
          {coauthor && (<div className="customers-card__coauthor">
            <p>{coauthor}</p>
          </div>)}
        </figcaption>
      </figure>
    </article>

  )

};

export default CustomersCard;
