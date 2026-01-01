import '@/scss/blocks/_pacages-card.scss';


const PacagesCard = (props) => {
  const {id, imgUrl, title, palacesCount} = props.el;
  const titleId = `package-title-${id}`;

  return (
    <article
      className="packages-card"
      aria-labelledby={titleId}
    >
      <div className="packages-card__image">
        <img
          src={imgUrl}
          alt={`Photo of ${title}`}
          width={350}
          height={570}
        />
      </div>

      <h4
        className="packages-card__title"
        id={titleId}
      >
        {title}
      </h4>
      <a
        href="/"
        className="packages-card__button"
      >
        <span className="packages-card__count">{palacesCount}</span>

        <span className="packages-card__button-link">
            places
            <svg
              aria-hidden="true"
              focusable="false"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4H12M12 4L8.5 1M12 4L8.5 7"
                stroke="white"
              />
            </svg>
          </span>
      </a>
    </article>);
};

export default PacagesCard;

