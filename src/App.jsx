// import { useMotionValueEvent, useScroll } from 'motion/react';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './pages/HomePage/Homepage';
import { ReactLenis } from 'lenis/react';
import BookPage from './pages/BookPage/BookPage';


function App() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    });
  }, []);

  return (
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/products' element={<BookPage />} />
        </Route>
      </Routes>
    </ReactLenis>
  );
}

export default App;
