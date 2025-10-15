import { CartContext } from "./CartContext";
import { useState } from 'react';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = cart.some((product) => product.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            alert('El producto ya fue agregado al carrito');
            return;
        }
        setCart([...cart, item]);
        alert(`${item.name} Agregado al carrito`);
    };

    const clearCart=() => {
        setCart([]);
    }

    const getTotalItems=() => {
        if (cart.length) {return cart.length}
    }
    
    return (
        <CartContext.Provider value={ {cart, addItem, clearCart, getTotalItems} }> {children}</CartContext.Provider>
    );
};