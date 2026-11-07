import '@/scss/blocks/_pacages-card.scss';

import { Link } from 'react-router-dom';

const PacagesCard = ({ el }) => {
  const { id, imgUrl, title, palacesCount } = el;
  const titleId = `package-title-${id}`;

  return (
    <article className="packages-card" aria-labelledby={titleId}>
      <div className="packages-card__image">
        {/* Название уже есть в заголовке ниже — картинка оформляет карточку,
            alt="" чтобы скринридер не читал название дважды */}
        <img src={imgUrl} alt="" width={350} height={570} loading="lazy" />
      </div>

      <h3 className="packages-card__title" id={titleId}>
        {title}
      </h3>

      {/* В списке ссылок «12 places» без контекста непонятна, поэтому название
          направления добавлено скрытым текстом. Не aria-label: он заменил бы
          видимый текст, а имя ссылки должно его содержать (для голосового управления) */}
      <Link className="packages-card__button" to="/packages">
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
            <path d="M0 4H12M12 4L8.5 1M12 4L8.5 7" stroke="white" />
          </svg>
        </span>

        <span className="visually-hidden"> in {title}</span>
      </Link>
    </article>
  );
};

export default PacagesCard;