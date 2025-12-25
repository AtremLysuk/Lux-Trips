import BookCard from '@/components/BookCard/BookCard';
import { useRequestItemsStore } from '@/zustand/requestItemsStore';
import '@/scss/blocks/_book.scss';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useRef } from 'react';

const Book = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const booksItems = useRequestItemsStore((state) => state.booksItems);

  useGSAP(
    () => {
      if (titleRef.current) {
        gsap.set(titleRef.current, { visibility: 'visible' });

        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power3.out',

            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    },
    { scope: containerRef }
  );
  return (
    <section className="book" ref={containerRef}>
      <div className="book__container container">
        <h2 className="book__title h2" ref={titleRef}>
          Book With Us
        </h2>
        <div className="book__items">
          {booksItems.map((el) => (
            <BookCard el={el} key={el.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Book;
