import '@/scss/blocks/_footer.scss';
import FooterMenu from '../FooterMenu/FooterMenu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__inner">
          <div className="footer__logo">
            <img
              src="/images/footer/footer-logo.svg"
              alt=""
              width={215}
              height={113}
            />
          </div>
          <FooterMenu />
          <div className="footer__bottom">
            <div className="footer__bottom-copy">
              <p>© 2021 All Rights Reserved | Luxtrips</p>
            </div>
            <div className="footer__bottom-privacy">
              <p>Company Site | Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
