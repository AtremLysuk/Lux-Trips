import '@/scss/blocks/_search.scss';

import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  // Поиска по базе пока нет — ведём в каталог пакетов.
  // preventDefault: без него браузер отправит форму сам и перезагрузит страницу
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/packages');
  };

  return (
    <section className="search" aria-labelledby="search-title">
      <div className="search__wrapper container--wide">
        <div className="search__container container">
          <h2 className="search__title" id="search-title">
            Find Your journey
          </h2>
          <div className="search__form-wrapper">
            <form className="search__form form" onSubmit={handleSubmit}>
              <fieldset>
                <legend className="visually-hidden">Search for a journey</legend>

                <label className="form__destination-label" htmlFor="destination">
                  destination
                  <input
                    className="form__destination-input"
                    type="text"
                    id="destination"
                    placeholder="Machu Picchu"
                    name="destination"
                  />
                </label>

                <label className="form__travel-label" htmlFor="travel-type">
                  Travel type
                  <input
                    className="form__travel-input"
                    type="text"
                    id="travel-type"
                    name="travel-type"
                    placeholder="Adventure Travel"
                  />
                </label>

                <label className="form__date-label" htmlFor="date">
                  Travel Date
                  <input
                    className="form__date-input"
                    type="date"
                    id="date"
                    name="date"
                    // Пока дата не выбрана, красим маску дд.мм.гггг как плейсхолдер
                    data-empty="true"
                    onChange={(e) => {
                      e.target.dataset.empty = String(!e.target.value);
                    }}
                  />
                </label>

                <label className="form__travellers-label" htmlFor="travellers">
                  Travellers
                  <input
                    className="form__travellers-input"
                    type="number"
                    id="travellers"
                    name="travellers"
                    min="1"
                    step="1"
                    placeholder="2 Persons"
                  />
                </label>
              </fieldset>

              <button className="form__button button button--dark" type="submit">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.84858 18.6972C14.7355 18.6972 18.6972 14.7355 18.6972 9.84858C18.6972 4.96164 14.7355 1 9.84858 1C4.96164 1 1 4.96164 1 9.84858C1 14.7355 4.96164 18.6972 9.84858 18.6972Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.6562 15.9746L20.1276 19.446"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                FIND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;