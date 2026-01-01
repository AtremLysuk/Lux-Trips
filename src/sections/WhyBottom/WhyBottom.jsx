import '@/scss/blocks/_why-bottom.scss';

import {Link} from 'react-router-dom';

const WhyBottom = () => {
  return (<section className="travel">
      <div className="travel__container container">
        <div className="travel__inner">
          <ul className='travel__inner-content'>
            <li className="travel__text-top">
              <p>
                As a Luxury Travel Designer, we make it our mission to transform
                clients’ interests and dreams into one-of-a-kind travel experience
                through the provision of premium quality services.
              </p>
            </li>
            <li className="travel__text-cebter">
              <p>
                Importantly, in Lux Trips we get to know our clients personally,
                and hence, we get to have a relationship with each of them.
              </p>
            </li>
            <li className="travel__text-bot">
              <p>
                We construct long-lasting connections thanks to the unforgettable
                trips we design, as we believe that travel is all about feelings,
                and memories are the most precious gifts we want our customer to
                bring back with them.
              </p>
            </li>
          </ul>
          <div className="customize__button">
            <Link
              to='/contacts'
              className="travel__button-link"
            >Contact us</Link>
          </div>
        </div>
      </div>
    </section>);
};

export default WhyBottom;
