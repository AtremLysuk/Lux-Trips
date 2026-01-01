import '@/scss/blocks/_subscribe.scss';

const Subscribe = (props) => {
  const {className} = props;

  return (
    <div className={!className ? 'subscribe' : 'subscribe subscribe' + `--${className}`}>
      <div className="subscribe__container container">
        <div className="subscribe__inner">
          <h2
            className="subscribe__title h2"
            id='subscribe-title'
          >
            Get weekly inspiration and expert advice
          </h2>
          <div className="subscribe__text">
            <p>Sign up for our Weekly Newsletter</p>
          </div>
          <form
            className="subscribe__form"

            aria-labelledby="subscribe-title"
          >
            <label
              className="visually-hidden"
              htmlFor="subscribe-email"
            >
              Email Address
              <input
                className="subscribe__form-input"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                id='subscribe-email'
                autoComplete="email"
              />
            </label>

            <button
              className="subscribe__form-button"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
    ;
};

export default Subscribe;
