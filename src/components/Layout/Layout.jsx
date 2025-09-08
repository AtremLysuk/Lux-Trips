import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useScrollTriggerRefresh from '@/Hooks/useScrollTriggerRefresh';

const Layout = () => {
  useScrollTriggerRefresh()
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
