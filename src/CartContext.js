import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));

        const items = cart.reduce((total, item) => total + item.quantity, 0);
        setTotalItems(items);

        const price = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotalPrice(price);
    }, [cart]);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
            toast.success(`${product.title} - Quantidade aumentada no carrinho!`, {
                position: "top-right",
                autoClose: 2000
            });
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
            toast.success(`${product.title} adicionado ao carrinho!`, {
                position: "top-right",
                autoClose: 2000
            });
        }
    };

    const removeFromCart = (productId) => {
        const product = cart.find(item => item.id === productId);
        if (product) {
            toast.info(`${product.title} removido do carrinho.`, {
                position: "top-right",
                autoClose: 2000
            });
        }
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity }
                : item
        ));
    };

    const clearCart = () => {
        setCart([]);
        toast.info('Carrinho esvaziado.', {
            position: "top-right",
            autoClose: 2000
        });
    };

    return (
        <CartContext.Provider value={{
            cart,
            totalItems,
            totalPrice,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
