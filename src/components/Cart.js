import CartItem from './CartItem';
import CartAbout from './CartAbout';
import CartPrice from './CartPrice';

const Cart = ({ cartInfo, setCartInfo, isVisible }) => {
  const clearCartHandler = () => {
    setCartInfo([]);
  };

  return (
    <div className={`Cart ${isVisible ? 'showCart' : ''}`}>
      <CartAbout clearCartHandler={clearCartHandler} />
      {cartInfo.map((e) => (
        <CartItem e={e} cartInfo={cartInfo} setCartInfo={setCartInfo} />
      ))}
      <CartPrice cartInfo={cartInfo} />
    </div>
  );
};

export default Cart;
