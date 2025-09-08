import BookCard from '@/components/BookCard/BookCard';
import { useRequestItemsStore } from '@/zustand/requestItemsStore';
import '@/scss/blocks/_book.scss';
const Book = () => {
  const booksItems = useRequestItemsStore((state) => state.booksItems);
  return (
    <section className="book">
      <div className="book__container container">
        <h2 className="book__title h2">Book With Us</h2>
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
