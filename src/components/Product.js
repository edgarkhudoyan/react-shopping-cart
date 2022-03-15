import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({ prod, cartInfo, setCartInfo }) => {
  const addCartHandler = () => {
    setCartInfo(() => [...cartInfo, prod]);
  };

  return (
    <div className='Product'>
      <div className='prod-img'>
        <img src={prod.images[0]} alt='' />
      </div>
      <div className='prod-description'>
        <h2 className='prod-brand'>{prod.brand}</h2>
      </div>
      <div className='prod-add'>
        <h3 className='prod-price'>{`${prod.price} $`}</h3>
        <button>
          <FontAwesomeIcon
            className='faIcon faIconProduct'
            icon={faBasketShopping}
            onClick={addCartHandler}
          />
        </button>
      </div>
    </div>
  );
};

export default Product;
