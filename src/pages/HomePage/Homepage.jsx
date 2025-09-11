import Search from '@/components/Search/Search';
import Experience from '@/sections/Experience/Experience';
import Packages from '@/sections/Packages/Packages';
import Book from '@/sections/Book/Book';
import Trips from '@/sections/Trips/Trips';

import Customize from './../../sections/Customize/Customize';
import Customers from '@/sections/Customers/Customers';
import Hero from '@/sections/Hero/Hero';

import { useLenis } from 'lenis/react';
import { useEffect, useLayoutEffect, useState } from 'react';

const Homepage = () => {

  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(0, { smooth: true, duration: 2 });       
    }
  }, []);



  return (
    <main>
      <Hero />
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
