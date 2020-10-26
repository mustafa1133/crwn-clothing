import CartActionTypes from './cart.types'
import {addItemToCart} from './cart.utils'

const INITAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITAL_STATE, action) => {
    switch(action.type) {
        case  CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden : !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) // action.payload is the items we want to ass and cartItems are the existing items
            }
            default:
                return state;
    }
}

export default cartReducer;