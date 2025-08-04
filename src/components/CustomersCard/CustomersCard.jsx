import '@/scss/blocks/_customers-card.scss';

const CustomersCard = (props) => {
  const { imgUrl, text, author, coauthor } = props.el;

  return (
    <div className="customers-card">
      <div className="customers-card__inner">
        <div className="customers-card__img">
          <img src={imgUrl} alt="" width={102} height={102} />
        </div>
        <div className="customers-card__text">
          <p>{text}</p>
        </div>
        <div className="customers-card__content">
          <div className="customers-card__author">
            <p>{author}</p>
          </div>
          <div className="customers-card__coauthor">
            <p>{coauthor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;
