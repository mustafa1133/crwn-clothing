import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({   // this action sends the type and the item that we're adding to cart as the payload
    type:   CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart= item => ({ 
    type:   CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});