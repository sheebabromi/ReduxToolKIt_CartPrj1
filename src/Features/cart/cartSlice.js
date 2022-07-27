import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

// export const initialState = {
//   amount: 10,
//   cartItems: cartItems,
//   total: 0,
//   isLoading: true,
// };

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    amount: 10,
    cartItems: cartItems,
    total: 0,
    isLoading: true,
  },
});

console.log(cartSlice);

export default cartSlice.reducer;
