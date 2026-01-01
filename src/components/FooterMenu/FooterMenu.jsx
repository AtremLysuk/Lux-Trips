const FooterMenu = () => {
  const footerItems = [
    {
      title: 'Luxury packages',
      isButton: false,
      path: '/packages',
    },
    {
      title: 'Book with us',
      isButton: false,
      path: '/products',
    },
    {
      title: 'Why Lux Trips',
      isButton: false,
      path: '/why',
    },
    {
      title: 'Contact',
      isButton: false,
      path: '/contacts',
    },
  ];

  return (
    <nav className="footer__menu" aria-label="Footer navigation">
      <ul className="footer__list">
        {footerItems.map((el) => (
          <li className="footer__list-item" key={el.path}>
            <a className="footer__list-link" href={el.path}>
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterMenu;

