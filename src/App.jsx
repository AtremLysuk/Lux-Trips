// import { useMotionValueEvent, useScroll } from 'motion/react';

import { useEffect } from 'react';

import Header from './components/Header/header';
import Search from './components/Search/Search';
import { ReactLenis } from 'lenis/react';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Experience from './sections/Experience/Experience';
import Packages from './sections/Packages/Packages';
import Book from './sections/Book/Book';
import Trips from './sections/Trips/Trips';
import Customize from './sections/Customize/Customize';
import Customers from './sections/Customers/Customers';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    });
  }, []);

  return (
    <ReactLenis root>
      <Header />
      <Search />
      <Experience />
      <Packages />
      <Book />
      <Trips />
      <Customize />
      <Customers />
      <Footer />
    </ReactLenis>
  );
}

export default App;
