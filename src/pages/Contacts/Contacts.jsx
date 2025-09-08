import '@/scss/blocks/_contacts.scss';

const Contacts = () => {
  return (
    <main>
      <section className="contacts">
        <div className="contacts__container container">
          <h2 className="contacts__title h2">
            Don't miss a chance to talk with us
          </h2>
          <div className="contacts__inner">
            <div className="contacts__phone">
              <span className="contacts__phone-label">Phone</span>
              <a className="contacts__phone-number" href="tel:+410782058388">
                +41 (078) 205 83 88
              </a>
              <span>or</span>
              <button className="contacts__phone-button">Call Me Back</button>
            </div>
            <div className="contacts__address">
              <span className="contacts__address-label">address</span>
              <p className="contacts__address-address">
                Via Peri 17, 6900 Lugano, Switzerland
              </p>
              <span>Email</span>
              <a
                href="mailto:luxtra.travel@gmail.com"
                className="contacts__address-email"
              >
                Email luxtra.travel@gmail.com
              </a>
            </div>
          </div>
          <div className="contacts__map">
            <img
              src="/images/contacts/map.png"
              alt=""
              width={1110}
              height={565}
              loading="lazy"
            />
            <svg
              width="56"
              height="107"
              viewBox="0 0 56 107"
              fill="#79655E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 105.921C17.9598 86.7569 10.8893 73.3421 0.564454 53.5L14.499 26.9824L14.5 26.9814L28.0029 1.07813L41.6143 26.9805L41.6133 26.9814L55.4365 53.499L28 105.921Z"
                fill="#79655E"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
