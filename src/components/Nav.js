import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isVisible, setIsVisible, cartInfo }) => {
  const isVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='Nav'>
      <h1>Shopping Centre</h1>
      <FontAwesomeIcon
        className={`faIcon ${cartInfo.length > 0 ? 'cartFull' : ''}`}
        icon={faBasketShopping}
        onClick={isVisibleHandler}
      />
    </div>
  );
};

export default Nav;
