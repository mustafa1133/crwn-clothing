import CartActionTypes from './cart.types'
import {addItemToCart,removeItemFromCart} from './cart.utils'

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
                cartItems: addItemToCart(state.cartItems, action.payload) // action.payload is the items we want to pass and cartItems are the existing items
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id) // keeps all items that do not match the item we removed id
            }
            default:
                return state;
    }
}

export default cartReducer;