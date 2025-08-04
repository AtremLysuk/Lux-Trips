import '@/scss/blocks/_search.scss';

const Search = () => {
  return (
    <article className="search">
      <div className="search__wrapper container--wide">
        <div className="search__container container">
          <h4 className="search__title">Find Your journey</h4>
          <div className="search__form-wrapper">
            <form className="search__form form">
              <label className='form__destination-label'  htmlFor="destination">
                destination
                <input
                className='form__destination-input'
                  type="text"
                  id="destination"
                  placeholder="Where are you going?"
                />
              </label>
              <label className='form__travel-label' htmlFor="Travel type">
                Travel type
                <input
                className='form__travel-input'
                  type="text"
                  id="Travel type"
                  placeholder="Adventure Travel"
                />
              </label>
              <label className='form__date-label' htmlFor="date">
                When
                <input className='form__date-input' type="text" id="date" placeholder="14 Dec 2022" />
              </label>
              <label className='form__travellers-label' htmlFor="Travellers">
                Travellers
                <input className='form__travellers-input' type="text" id="Travellers" placeholder="2 Persons" />
              </label>
              <button className='form__button button button--dark' type="submit">FIND</button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Search;
