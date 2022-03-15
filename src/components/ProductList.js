import Product from './Product';

const ProductList = ({ data, cartInfo, setCartInfo }) => {
  // console.log(data);
  return (
    <div className='ProductList'>
      {data.map((prod) => (
        <Product
          prod={prod}
          key={prod.id}
          cartInfo={cartInfo}
          setCartInfo={setCartInfo}
        />
      ))}
    </div>
  );
};

export default ProductList;
