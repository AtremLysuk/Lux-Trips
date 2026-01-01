import BookCard from '@/components/BookCard/BookCard';
import {useRequestItemsStore} from '@/zustand/requestItemsStore';
import '@/scss/blocks/_book.scss';

import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import {useRef} from 'react';

const Book = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const booksItems = useRequestItemsStore((state) => state.booksItems);

  useGSAP(() => {
    if (titleRef.current) {
      gsap.set(titleRef.current, {opacity: 1});

      gsap.fromTo(titleRef.current, {
        opacity: 0, filter: 'blur(10px)',
      }, {
        opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out',

        scrollTrigger: {
          trigger: titleRef.current, start: 'top 80%',
        },
      });
    }
  }, {scope: containerRef});
  return (<section
    className="book"
    ref={containerRef}
    aria-labelledby='book-title'
  >
    <div className="book__container container">
      <h2
        className="book__title h2"
        ref={titleRef}
        id='book-title'
      >
        Book With Us
      </h2>
      <ul className="book__items">
        {booksItems.map((el) => (<li key={el.id}>
            <BookCard el={el} />
          </li>
        ))}
      </ul>
    </div>
  </section>);
};

export default Book;
