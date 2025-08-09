import Search from '@/components/Search/Search';
import Experience from '@/sections/Experience/Experience';
import Packages from '@/sections/Packages/Packages';
import Book from '@/sections/Book/Book';
import Trips from '@/sections/Trips/Trips';

import Customize from './../../sections/Customize/Customize';
import Customers from '@/sections/Customers/Customers';

const Homepage = () => {
  return (
    <main>
      <Search />
      <Experience />
      <Packages />
      <Book />
      <Trips />
      <Customize />
      <Customers />
    </main>
  );
};

export default Homepage;
