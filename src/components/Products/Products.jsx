import '@/scss/blocks/_products.scss';
import ProductsItem from '../ProductsItem/ProductsItem';
import {useRequestItemsStore} from '@/zustand/requestItemsStore';


const Products = () => {


  const booksItems = useRequestItemsStore((state) => state.booksItems);


  return (
    <section
      className="products"
      aria-labelledby='products-title'
    >
      <div className="products__container container">
        <h2
          className="products__title h2"
          id='products-title'
        >
          Book with us
        </h2>
        <ul className="products__items">
          {booksItems.map((item) => (
            <li key={item.id}>
              <ProductsItem
                item={item}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
