import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isVisible, setIsVisible, cartInfo }) => {
  const isVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='Nav'>
      <h1>Shopping Centre</h1>
      <div className='Nav-cart'>
        <FontAwesomeIcon
          className={`faIcon ${cartInfo.length > 0 ? 'cartFull' : ''}`}
          icon={faBasketShopping}
          onClick={isVisibleHandler}
        />
        <h3
          style={{
            color: 'white',
            padding: '0.3rem',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          onClick={isVisibleHandler}
        >
          {cartInfo.length > 0 ? cartInfo.length : ''}
        </h3>
      </div>
    </div>
  );
};

export default Nav;
