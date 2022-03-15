import React from 'react';

const CartItem = ({ e, cartInfo, setCartInfo }) => {
  return (
    <div className='CartItem'>
      <img src={e.images[0]} alt='' />
      <h3 className='cart-brand'>{e.brand}</h3>
      <div className='cart-controls'>
        <button className='cart-subOne'>- 1</button>

        <h3 className='cart-price'>{`${e.price} $`}</h3>
        <button className='cart-addOne'>+ 1</button>
      </div>
    </div>
  );
};

export default CartItem;
