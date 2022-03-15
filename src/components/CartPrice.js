const CartPrice = ({ cartInfo }) => {
  let prices = cartInfo.map((e) => e.price);

  return (
    <div className='CartPrice'>
      <h3>
        {`Overall Price: ${
          prices.length > 0
            ? prices.reduce((acc, cur) => acc + cur) + '$'
            : '0 $'
        }`}
      </h3>
    </div>
  );
};

export default CartPrice;
