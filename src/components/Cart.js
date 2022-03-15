import CartItem from './CartItem';
import CartAbout from './CartAbout';
import CartPrice from './CartPrice';

const Cart = ({ cartInfo, setCartInfo, isVisible, deleteCartItem }) => {
  const clearCartHandler = () => {
    setCartInfo([]);
  };

  return (
    <div className={`Cart ${isVisible ? 'showCart' : ''}`}>
      <CartAbout clearCartHandler={clearCartHandler} />
      {cartInfo.map((e) => (
        <CartItem e={e} deleteCartItem={deleteCartItem} key={e.id} />
      ))}
      <CartPrice cartInfo={cartInfo} />
    </div>
  );
};

export default Cart;
