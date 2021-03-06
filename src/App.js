import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
// Import styles
import './styles/app.scss';

function App() {
  // Use State
  const [data, setData] = useState([]);
  const [cartInfo, setCartInfo] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Fetch Data
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  // Delete Cart Item
  const deleteCartItem = (id) => {
    setCartInfo(cartInfo.filter((cartItem) => cartItem.id !== id));
  };
  return (
    <div className='App'>
      <Nav
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        cartInfo={cartInfo}
      />
      <ProductList cartInfo={cartInfo} setCartInfo={setCartInfo} data={data} />
      <Cart
        cartInfo={cartInfo}
        setCartInfo={setCartInfo}
        isVisible={isVisible}
        deleteCartItem={deleteCartItem}
      />
    </div>
  );
}

export default App;
