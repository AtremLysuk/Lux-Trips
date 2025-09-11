import Subscribe from '@/components/Subscribe/Subscribe';
import Luxury from '@/sections/Luxury/Luxury';

import useScrollTriggerRefresh from '@/Hooks/useScrollTriggerRefresh';

const PackagesPage = () => {

  return (
    <main>
      <Luxury />
      <Subscribe />
    </main>
  );
};

export default PackagesPage;
