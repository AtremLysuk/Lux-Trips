import Search from '@/components/Search/Search';
import Experience from '@/sections/Experience/Experience';
import Packages from '@/sections/Packages/Packages';
import Book from '@/sections/Book/Book';
import Trips from '@/sections/Trips/Trips';

import Customize from './../../sections/Customize/Customize';
import Customers from '@/sections/Customers/Customers';
import Hero from '@/sections/Hero/Hero';



const Homepage = () => {


  return (
    <>
      <Hero />
      <Search />
      <Experience />
      <Packages />
      <Book />
      <Trips />
      <Customize />
      <Customers />
    </>
  );
};

export default Homepage;
