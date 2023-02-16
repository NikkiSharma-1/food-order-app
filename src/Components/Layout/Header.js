import { Fragment } from 'react';

import CartButton from './CartButton';
import mealsImage from '../../assets/meals.jpg';
import './Header.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className='header'>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart}/>
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;