import Subscribe from '@/components/Subscribe/Subscribe';
import WhyBottom from '@/sections/WhyBottom/WhyBottom';
import WhyCenter from '@/sections/WhyCenter/WhyCenter';
import WhyTop from '@/sections/WhyTop/WhyTop';





const WhyPage = () => {



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
