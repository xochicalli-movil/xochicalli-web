import { jsx as _jsx } from "react/jsx-runtime";
import { CartContext } from './';
import { useLocalStorage } from '@/hooks';
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('cart', []);
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(cart.map((item) => item.id === existingItem.id
                ? { ...existingItem, quantity: existingItem.quantity + 1 }
                : item));
        }
        else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };
    const removeFromCart = (product) => setCart(currentCart => currentCart.filter(item => item.id !== product.id));
    const addOneToCart = (product) => setCart(currentCart => {
        if (currentCart.find(item => item.id === product.id) === null) {
            return [...currentCart, { ...product, quantity: 1 }];
        }
        else {
            return currentCart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                else {
                    return item;
                }
            });
        }
    });
    const removeOneFromCart = (product) => setCart(currentCart => {
        if (currentCart.find(item => item.id === product.id)?.quantity === 1) {
            return currentCart.filter(item => item.id !== product.id);
        }
        else {
            return currentCart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                else {
                    return item;
                }
            });
        }
    });
    const getProductAmount = (product) => {
        const quantity = cart.reduce((total, item) => {
            if (item.id === product.id) {
                return total + item.quantity;
            }
            return total;
        }, 0);
        return quantity;
    };
    const total = cart.reduce((total, item) => total + item.quantity * item.price, 0);
    const clearCart = () => setCart([]);
    return (_jsx(CartContext.Provider, { value: { cart, getProductAmount, total, addToCart, removeFromCart, addOneToCart, removeOneFromCart, clearCart }, children: children }));
};
