import Subscribe from "@/components/Subscribe/Subscribe";
import { Link } from "react-router-dom";

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
        <div className="customize__button">
          <Link className="customize__link" to="/">
            Start a trip request
          </Link>
        </div>
        <div className="customize__bottom">
          <p>It’s Free! - no credit card required</p>
        </div>
        <Subscribe />
      </div>
    </section>
  );
};

export default Customize;
