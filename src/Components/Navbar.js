import React from 'react';
import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  //console.log(useSelector((state) => state.amount));
  const { amount } = useSelector((state) => state.amount);

  return (
    <div className='nav-center'>
      <h2 className='nav-hdng1'>Order Management Process</h2>
      <div className='nav-container'>
        <CartIcon />
        <div className='amount-container'>
          <p className='total-amount'>{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
