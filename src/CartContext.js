import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  // Carregar carrinho do localStorage quando o componente é montado
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Atualizar o localStorage quando o carrinho mudar
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cartItems');
    }

    // Calcular o total de itens
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  }, [cartItems]);

  // Adicionar item ao carrinho
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      // Verificar se o produto já existe no carrinho
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

      if (existingItemIndex >= 0) {
        // Se o produto já existe, atualize a quantidade
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity
        };
        toast.success(`Quantidade do item "${product.title}" atualizada no carrinho!`);
        return newItems;
      } else {
        // Caso contrário, adicione o novo produto
        toast.success(`${product.title} adicionado ao carrinho!`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Remover item do carrinho
  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === productId);
      if (itemToRemove) {
        toast.info(`${itemToRemove.title} removido do carrinho.`);
      }
      return prevItems.filter(item => item.id !== productId);
    });
  };

  // Atualizar quantidade de um item
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Calcular o subtotal
  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Limpar o carrinho
  const clearCart = () => {
    setCartItems([]);
    toast.info('Carrinho esvaziado.');
  };

  // Calcular o frete (exemplo simplificado)
  const calculateShipping = () => {
    const subtotal = getSubtotal();
    // Frete gratuito para compras acima de R$ 300
    if (subtotal >= 300) return 0;
    // Valor base de frete + adicional baseado no valor da compra
    return 15 + Math.min(subtotal * 0.05, 50);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      totalItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getSubtotal,
      clearCart,
      calculateShipping
    }}>
      {children}
    </CartContext.Provider>
  );
};
