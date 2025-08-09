import ButtonDecorate from "@/components/ButtonDecorate/ButtonDecorate";

const Customize = () => {
  const blocksData = [
    {
      number: 1,
      title: 'Describe your dream trip',
      descrription:
        'Let us know what your perfect vacation is. Destinations, preferences, and personal interests. ',
    },
    {
      number: 2,
      title: 'Get matched',
      descrription:
        'Our team will create perfect travel itinerary for you, based on your personalized needs and wishes.',
    },
    {
      number: 1,
      title: 'Book your vacation',
      descrription:
        'Confirm your trip only when you are completely satisfied with the proposed travel plan. ',
    },
  ];

  return (
    <section className="customize">
      <div className="customize__container container">
        <h2 className="customize__title h2">
          Customise <br /> your trip with us
        </h2>
        <div className="customize__items">
          {blocksData.map((el) => (
            <div className="customize__item" key={el.title}>
              <div className="customize__item-number">{el.number}</div>
              <div className="customize__item-content">
                <h4 className="customize__item-title">{el.title}</h4>
                <div className="customize__item-text">
                  <p>{el.descrription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ButtonDecorate title='Start a trip request' href="/" />
        {/* <div className="customize__button">
          <a className="customize__link" href="/">
            Start a trip request
          </a>
        </div> */}
        <div className="customize__bottom">
          <p>It’s Free! - no credit card required</p>
        </div>
        <div className="subscribe">
          <div className="subscribe__inner">
            <h2 className="subscribe__title h2">
              Get weekly inspiration and expert advice
            </h2>
            <div className="subscribe__text">
              <p id="subscribe-title">Sign up for our Weekly Newsletter</p>
            </div>
            <form
              className="subscribe__form"
              id="subscribe-form"
              aria-labelledby="subscribe-title"
            >
              <input
                className="subscribe__form-input"
                type="email"
                aria-label="e-mail input"
                placeholder="MishaDarko@gmail.com"
              />
              <button
                className="subscribe__form-button"
                type="submit"
                aria-label="subscribe button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customize;
