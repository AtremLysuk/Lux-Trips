import { Outlet } from 'react-router-dom';
import useLenisScrollTrigger from '@/Hooks/useLenisScrollTrigger';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Suspense } from 'react';

const Layout = () => {
  useLenisScrollTrigger();

  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading....</h2>}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default Layout;
