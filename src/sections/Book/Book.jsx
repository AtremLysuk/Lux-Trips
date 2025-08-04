import BookCard from '@/components/BookCard/BookCard'
import '@/scss/blocks/_book.scss'
const Book = () => {

  const booksItems = [
    {
      imgUrl: '/images/book-cards/cars.png',
      title: 'Supercars',
    },
    {
      imgUrl: '/images/book-cards/hotels.png',
      title: 'Hotels',
    },
    {
      imgUrl: '/images/book-cards/villas.png',
      title: 'Villas',
    },
    {
      imgUrl: '/images/book-cards/yahts.png',
      title: 'Yachts',
    },
    {
      imgUrl: '/images/book-cards/helicopter.png',
      title: 'Private Helicopter',
    },
    {
      imgUrl: '/images/book-cards/jet.png',
      title: 'Private Jet',
    },
  ]

  return (
    <section className='book'>
      <div className="book__container container">
        <h2 className='book__title h2'>Book
        With Us</h2>
        <div className="book__items">
         {booksItems.map((el) => <BookCard el={el} key={el.title} />)}
        </div>
      </div>
    </section>
  )
}

export default Book