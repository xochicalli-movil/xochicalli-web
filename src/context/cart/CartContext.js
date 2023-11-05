import { createContext } from 'react';
export const CartContext = createContext({
    cart: [],
    total: 0,
    getProductAmount: () => 0,
    addToCart: () => { },
    removeFromCart: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    clearCart: () => { },
});
