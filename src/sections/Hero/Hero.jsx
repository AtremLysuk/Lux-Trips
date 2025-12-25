import '@/scss/blocks/_header.scss';


const Hero = () => {


  return (
    <div
      className="header layers"
      style={{position: 'relative'}}
    >
      <h2 className="header__subtitle">the world’s most</h2>
      <div
        className="layer layers__base"
        style={{backgroundImage: 'url(./bgtop/bg_top-3.png)'}}
      ></div>
      <div className="header__title layer layers__subtitle visually-hidden">
        <h2 className="header__subtitle">the world’s most</h2>
      </div>
      <div className="header__title layer layers__title">
        <h1
          className="visually-hidden"
          id="header-title"
          data-text="the world’s most"
        >
          EXTRA ORDINARY PLACES
        </h1>
        <p className="h1">EXTRA ORDINARY</p>
        <span className="header-title-places h1">PLACES</span>
      </div>

      <div
        className="layer layers__middle"
        style={{backgroundImage: 'url(/bgtop/bg_top-2.png)'}}
      ></div>
      <div
        className="layer layers__front"
        style={{
          backgroundImage: 'url(./bgtop/bg_top-1.png)',
          zIndex: '100',
        }}
      ></div>
    </div>
  );
};

export default Hero;
