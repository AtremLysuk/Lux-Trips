import { lazy } from 'react';
import Hero from '@/sections/Hero/Hero';
import Search from '@/components/Search/Search';
import LazySection from '@/components/LazySection/LazySection';

// Первый экран — сразу. Всё ниже — отдельными файлами и только при приближении
const Experience = lazy(() => import('@/sections/Experience/Experience'));
const Packages = lazy(() => import('@/sections/Packages/Packages'));
const Book = lazy(() => import('@/sections/Book/Book'));
const Trips = lazy(() => import('@/sections/Trips/Trips'));
const Customize = lazy(() => import('@/sections/Customize/Customize'));
const Customers = lazy(() => import('@/sections/Customers/Customers'));

const Homepage = () => {
  return (
    <>
      <Hero />
      <Search />
      <LazySection>
        <Experience />
      </LazySection>
      <LazySection>
        <Packages />
      </LazySection>
      <LazySection>
        <Book />
      </LazySection>
      <LazySection>
        <Trips />
      </LazySection>
      <LazySection>
        <Customize />
      </LazySection>
      <LazySection>
        <Customers />
      </LazySection>
    </>
  );
};

export default Homepage;