import '@/scss/blocks/_products.scss';
import ProductsItem from '../ProductsItem/ProductsItem';
import { useRequestItemsStore } from '@/zustand/requestItemsStore';



const Products = () => {


  const booksItems = useRequestItemsStore((state) => state.booksItems);



  return (
    <section className="products">
      <div className="products__container container" >
        <h2 className="products__title h2">
          Book with us
        </h2>
        <div className="products__items">
          {booksItems.map((item) => (
            <ProductsItem item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
