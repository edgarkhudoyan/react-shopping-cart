import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ e, deleteCartItem }) => {
  return (
    <div className='CartItem'>
      <img src={e.images[0]} alt='' />
      <h3 className='cart-brand'>{e.brand}</h3>

      <div className='cart-controls'>
        <h3 className='cart-price'>{`${e.price} $`}</h3>
      </div>
      <FontAwesomeIcon
        icon={faTimes}
        style={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
        onClick={() => deleteCartItem(e.id)}
      />
    </div>
  );
};

export default CartItem;
