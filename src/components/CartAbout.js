const CartAbout = ({ clearCartHandler }) => {
  return (
    <div className='Cart-about'>
      <h2>Your Cart</h2>
      <button onClick={clearCartHandler}>Clear Cart</button>
    </div>
  );
};

export default CartAbout;
