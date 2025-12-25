import {lazy, useEffect, useRef} from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import {ReactLenis, useLenis} from 'lenis/react';
import Homepage from './pages/HomePage/Homepage';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop.jsx";

const PackagesPage = lazy(() => import('./pages/PackagesPage/PackagesPage'));
const BookPage = lazy(() => import('./pages/BookPage/BookPage'));
const WhyPage = lazy(() => import('./pages/WhyPage/WhyPage'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const ClientPage = lazy(() => import('./pages/ClientPage/ClientPage'));
const RequestPage = lazy(() => import('./pages/RequestPage/RequestPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

gsap.registerPlugin(ScrollTrigger);

export function LenisCssVar() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const update = ({scroll}) => {
      document.body.style.setProperty('--scrollTop', `${scroll}px`);
    };

    update({scroll: lenis.scroll});

    lenis.on('scroll', update);
    return () => {
      lenis.off('scroll', update);
    }


  }, [lenis]);

  return null
}

export function LenisScrollFix() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const sync = () => {
      lenis.resize();
      ScrollTrigger.refresh(true)
    };

    requestAnimationFrame(sync);
    window.addEventListener('load', sync)

    return () => {
      window.removeEventListener('load', sync);
    }
  }, [lenis]);


  return null
}

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const update = ({scroll}) => {
      document.body.style.setProperty('--scrollTop', `${scroll}px`);
    };

    lenis.on('scroll', update);
    return () => {
      lenis.off('scroll', update);
    }

  }, []);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
    >
      <LenisCssVar />
      <LenisScrollFix />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Homepage />}
          />
          <Route
            path="/products"
            element={<BookPage />}
          />
          <Route
            path="/packages"
            element={<PackagesPage />}
          />
          <Route
            path="/why"
            element={<WhyPage />}
          />
          <Route
            path="/contacts"
            element={<Contacts />}
          />
          <Route
            path="/client"
            element={<ClientPage />}
          />
          <Route
            path="/request"
            element={<RequestPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </ReactLenis>
  );
}

export default App;
