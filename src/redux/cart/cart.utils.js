export const addItemToCart = (cartItems,cartItemToAdd) => { // cartItems are the ones already existing and ItemsToAdd adds only unique onees we dont have

    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id); // sets true if it finds the item ids matching else undefined

    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}  // map returns us a new array new state so react rerenders
            : cartItem // else no mods we just return the cart item as it is
            
            )
        }

return [...cartItems, {...cartItemToAdd, quantity: 1}]; // add existing cart items and then we add the new cart item with a base property of quantity

};