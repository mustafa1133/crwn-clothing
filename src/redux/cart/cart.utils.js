import CartItem from "../../Components/cart-item/cart-item.component";

export const addItemToCart = (cartItems,cartItemToAdd) => { // cartItems are the ones already existing and ItemsToAdd adds only unique onees we dont have

    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id); // sets true if it finds the item ids matching else undefined

    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}  // map returns us a new array new state so react rerenders
            : cartItem // else no mods we just return the cart item as it is
            
            )
        }

return [...cartItems, {...cartItemToAdd, quantity: 1}]; // add existing cart items and then we add the new cart item with a base property of quantity at the end of array

};

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity ===1)
    {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) // if cart item is equal to he item to remove then exclude it form the return array
    }

    return cartItems.map( cartItem => cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity-1 } 
        // if id mataches and quantity is greater than 1 we reduce quantity by 1 
        //we spread in cartItem and not cartItems because we want to effect the selected cart Item 
        : cartItem // else we return just the cartItem
        )

}
