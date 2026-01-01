import Subscribe from '@/components/Subscribe/Subscribe';
import WhyBottom from '@/sections/WhyBottom/WhyBottom';
import WhyCenter from '@/sections/WhyCenter/WhyCenter';
import WhyTop from '@/sections/WhyTop/WhyTop';


const WhyPage = () => {


  return (
    <>
      <WhyTop />
      <WhyCenter />
      <WhyBottom />
      <Subscribe className="why" />
    </>
  );
};

export default WhyPage;
