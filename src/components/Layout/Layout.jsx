import {Outlet} from 'react-router-dom';
import useLenisScrollTrigger from '@/Hooks/useLenisScrollTrigger';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Suspense} from 'react';

const Layout = () => {
  useLenisScrollTrigger();
  return (<>
    <Header />
    <main tabIndex={-1}>
      <Suspense
        fallback={<div
          role="status"
          className="page-loading"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30dvh',
          }}
        >< span> Loading content....</span>
        </div>}
      >
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </>);
};
export default Layout;
