import '@/scss/blocks/_subscribe.scss';

const Subscribe = (props) => {
  const {className} = props;

  return (
    <div className={!className ? 'subscribe' : 'subscribe subscribe' + `--${className}` }>
      <div className="subscribe__container container">
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
  );
};

export default Subscribe;
