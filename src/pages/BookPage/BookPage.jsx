
import ProductsItem from "@/components/ProductsItem/ProductsItem";

const BookPage = () => {

  const booksItems = [
    {
      imgUrl: '/images/book-cards/cars.png',
      title: 'Supercars',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/',
    },
    {
      imgUrl: '/images/book-cards/hotels.png',
      title: 'Hotels',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/',
    },
    {
      imgUrl: '/images/book-cards/villas.png',
      title: 'Villas',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/',
    },
    {
      imgUrl: '/images/book-cards/yahts.png',
      title: 'Yachts',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/',
    },
    {
      imgUrl: '/images/book-cards/helicopter.png',
      title: 'Private Helicopter',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/',
    
    },
    {
      imgUrl: '/images/book-cards/jet.png',
      title: 'Private Jet',
      text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.',
      path: '/',
    },
  ];

  return (
    <main>
      <section className="products">
        <div className="products__container container">
          <h2 className="products__title h2">Book with us</h2>
        </div>
        <div className="products__items">
          {booksItems.map((item) => <ProductsItem item={item} key={item.title} />)}
        </div>
      </section>
    </main>
  );
};

export default BookPage;
