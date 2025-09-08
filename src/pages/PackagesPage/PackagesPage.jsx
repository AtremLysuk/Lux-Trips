import Subscribe from '@/components/Subscribe/Subscribe';
import Luxury from '@/sections/Luxury/Luxury';

import { useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { useLenisScrollTrigger } from '@/Hooks/useLenisScrollTrigger';
import useScrollTriggerRefresh from '@/Hooks/useScrollTriggerRefresh';

const PackagesPage = () => {

  const lenis = useLenis();
  useScrollTriggerRefresh()
  useEffect(() => {
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(0, { smoth: true, duration: 2 });
    }
  }, []);

  return (
    <main>
      <Luxury />
      <Subscribe />
    </main>
  );
};

export default PackagesPage;
