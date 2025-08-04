import '@/scss/blocks/_trips.scss';

const Trips = () => {
  return (
    <section className="trips">
      <div className="trips__container container">
        <div className="trips__header">
          <h2 className="trips__header-title h2">Why Lux Trips</h2>
          <div className="trips__header-text">
            <p>
              As Travel Designer, we know the ins and outs of travel from who to
              work with, where to go, when to book, and which restaurant
              provides the most authentic cuisine.{' '}
            </p>
          </div>
        </div>
        <div className="trips__content">
          <div className="trips__content-center content-center">
            <h3 className="content-center__subtitle">
              Exclusive knowledge to provide the best of the best to clients
            </h3>
            <div className="content-center__text">
              <p>
                Our area of expertise ranges from luxury resorts and
                villas/chalets holiday bookings, private yacht and jet charters,
                to exclusive tours and personalized journey planning.
              </p>
            </div>
          </div>
          <div className="trips__content-bottom content-bottom">
            <div className="content-bottom__image">
              <img
                src="/images/trips/image-bottom.png"
                alt=""
                width={276}
                height={640}
              />
            </div>
            <div className="content-bottom-right">
              <div className="content-bottom__text">
                <p>
                  We craft and plan unique itineraries tailored to customers’
                  interests and with strong attention to detail.
                </p>
              </div>
              <a className="content-bottom__link" href="/">
                help me plan a trip
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trips;
