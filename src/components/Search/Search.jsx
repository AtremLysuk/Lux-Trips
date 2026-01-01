import '@/scss/blocks/_search.scss';

const Search = () => {
  return (
    <section
      className="search"
      aria-labelledby="search-title"
    >
      <div className="search__wrapper container--wide">
        <div className="search__container container">
          <h2
            className="search__title"
            id='search-title'
          >Find Your journey
          </h2>
          <div className="search__form-wrapper">
            <form
              className="search__form form"
            >
              <fieldset>
                <legend className='visually-hidden'>Search for a journey</legend>
                <label
                  className='form__destination-label'
                  htmlFor="destination"
                >
                  destination
                  <input
                    className='form__destination-input'
                    type="text"
                    id="destination"
                    placeholder="Machu Picchu"
                    name="destination"
                  />
                </label>
                <label
                  className='form__travel-label'
                  htmlFor="travel-type"
                >
                  Travel type
                  <input
                    className='form__travel-input'
                    type="text"
                    id="travel-type"
                    name="travel-type"
                    placeholder="Adventure Travel"
                  />
                </label>
                <label
                  className='form__date-label'
                  htmlFor="date"
                >
                  Travel Date
                  <input
                    className='form__date-input'
                    type="date"
                    id="date"
                    name="date"
                  />
                </label>
                <label
                  className='form__travellers-label'
                  htmlFor="travellers"
                >
                  Travellers
                  <input
                    className='form__travellers-input'
                    type="number"
                    id="travellers"
                    name="travellers"
                    min="1"
                    step="1"
                    placeholder="2 Persons"
                  />
                </label>
                <button
                  className='form__button button button--dark'
                  type="submit"
                >FIND
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
