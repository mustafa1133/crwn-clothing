import {createSelector} from 'reselect';

const selectCart = state => state.cart; // gets only cart from entire reducer state chunks it up rather than getting entire store 

export const selectCartItems = createSelector (
  [selectCart], // first argument gets and array of selector and second agrument is a function to return value we want out of slector
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce ((accumalatedQuantity,cartItem) => accumalatedQuantity + cartItem.quantity ,0) // using reducer
);