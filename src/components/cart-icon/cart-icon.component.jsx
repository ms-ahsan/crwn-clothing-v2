import { ReactComponent as ShoppingICon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import React from 'react';

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingICon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
