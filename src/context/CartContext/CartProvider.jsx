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
            const updatedCart = cart.map((product) => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + item.quantity };} 
                else {
                return product;}
            });
            setCart(updatedCart);
            alert(`Agregado a carrito`);}
            
        else {setCart([...cart,item]);
                alert("${item.name} Agregado al carrito");}
        }
    
    
    const deleteItem = (id) => {
        const filtered = cart.filter((product) => product.id !== id);
        setCart(filtered);
        alert(`Producto eliminado del carrito`); };
    
    const clearCart=() => {
        setCart([]);}

    const getTotalItems=() => {
        const totalItems= cart.reduce((acc, item) => acc + item.quantity, 0);
        return totalItems;};
    
    const total =() => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return Math.round(total*100)/100;}
    
    const values = { cart, addItem, deleteItem, clearCart, getTotalItems, total };
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;}
