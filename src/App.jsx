// import { useMotionValueEvent, useScroll } from 'motion/react';

import { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './pages/HomePage/Homepage';
import { ReactLenis, useLenis } from 'lenis/react';
import BookPage from './pages/BookPage/BookPage';
import PackagesPage from './pages/PackagesPage/PackagesPage';
import WhyPage from './pages/WhyPage/WhyPage';
import Contacts from './pages/Contacts/Contacts';
import ClientPage from './pages/ClientPage/ClientPage';
import RequestPage from './pages/RequestPage/RequestPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


function App() {
  const lenisRef = useRef(null);
  



  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    });
  }, []);

  return (
    <ReactLenis root ref={lenisRef}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<BookPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ReactLenis>
  );
}

export default App;
