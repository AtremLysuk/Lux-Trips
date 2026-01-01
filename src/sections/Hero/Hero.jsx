import '@/scss/blocks/_header.scss';


const Hero = () => {


  return (
    <section
      aria-labelledby="hero-title"
    >
      <div
        className="header layers"
        style={{position: 'relative'}}
      >
        <div
          className="layer layers__base"
          style={{backgroundImage: 'url(./bgtop/bg_top-3.png)'}}
          aria-hidden="true"
        ></div>
        <div className="header__title layer layers__title">
          <h1
            id="hero-title"
          >
            <span className="h1">EXTRA ORDINARY</span>
            <span className="header-title-places h1">PLACES</span>
          </h1>
        </div>

        <div
          className="layer layers__middle"
          aria-hidden="true"
          style={{backgroundImage: 'url(/bgtop/bg_top-2.png)'}}
        ></div>
        <div
          className="layer layers__front"
          style={{
            backgroundImage: 'url(./bgtop/bg_top-1.png)', zIndex: '100',
          }}
          aria-hidden="true"
        ></div>
      </div>
    </section>

  );
};

export default Hero;
