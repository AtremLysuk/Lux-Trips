import Subscribe from '@/components/Subscribe/Subscribe';
import WhyBottom from '@/sections/WhyBottom/WhyBottom';
import WhyCenter from '@/sections/WhyCenter/WhyCenter';

import WhyTop from '@/sections/WhyTop/WhyTop';

import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

const WhyPage = () => {
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { smooth: true, duration: 1 });
      lenis.resize();
    }
  }, []);
  return (
    <main>
      <WhyTop />
      <WhyCenter />
      <WhyBottom />
      <Subscribe className="why" />
    </main>
  );
};

export default WhyPage;
