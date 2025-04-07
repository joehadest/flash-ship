import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartContext';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #1c1c1c;
  
  @media (max-width: 480px) {
    margin: 20px auto;
  }
`;

const CartTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #f8f9fa;
`;

const CartEmpty = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: #adb5bd;
  margin-bottom: 20px;
`;

const ShopButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #e63946;
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c1121f;
  }
`;

const CartItems = styled.div`
  margin-bottom: 30px;
`;

const CartItem = styled.div`
  display: flex;
  border-bottom: 1px solid #333;
  padding: 20px 0;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemTitle = styled(Link)`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
  color: #f8f9fa;
  
  &:hover {
    color: #e63946;
  }
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: #e63946;
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: 15px;
    justify-content: space-between;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #333;
  background-color: #252525;
  color: #f8f9fa;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: #333;
  }
  
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  
  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

const QuantityInput = styled.input`
  width: 40px;
  height: 30px;
  border: 1px solid #333;
  border-left: none;
  border-right: none;
  text-align: center;
  font-size: 1rem;
  background-color: #252525;
  color: #f8f9fa;
  
  &:focus {
    outline: none;
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: #e63946;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CartSummary = styled.div`
  background-color: #252525;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #f8f9fa;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SummaryLabel = styled.span`
  color: #adb5bd;
`;

const SummaryValue = styled.span`
  font-weight: ${props => props.bold ? '700' : '400'};
  color: #f8f9fa;
`;

const CheckoutButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #e63946;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c1121f;
  }
`;

const Cart = () => {
    const { cart, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

    const subtotal = totalPrice;
    const shipping = subtotal > 0 ? 15.99 : 0;
    const total = subtotal + shipping;

    if (totalItems === 0) {
        return (
            <CartContainer>
                <CartTitle>Seu Carrinho</CartTitle>
                <CartEmpty>
                    <EmptyMessage>Seu carrinho está vazio</EmptyMessage>
                    <ShopButton to="/products">Continuar comprando</ShopButton>
                </CartEmpty>
            </CartContainer>
        );
    }

    return (
        <CartContainer>
            <CartTitle>Seu Carrinho</CartTitle>

            <CartItems>
                {cart.map(item => (
                    <CartItem key={item.id}>
                        <ItemImage src={item.image} alt={item.title} />

                        <ItemInfo>
                            <ItemTitle to={`/product/${item.id}`}>{item.title}</ItemTitle>
                            <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                        </ItemInfo>

                        <ItemControls>
                            <QuantityControl>
                                <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                    -
                                </QuantityButton>
                                <QuantityInput
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => {
                                        const val = parseInt(e.target.value);
                                        if (!isNaN(val) && val > 0) {
                                            updateQuantity(item.id, val);
                                        }
                                    }}
                                />
                                <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                    +
                                </QuantityButton>
                            </QuantityControl>

                            <RemoveButton onClick={() => removeFromCart(item.id)}>
                                Remover
                            </RemoveButton>
                        </ItemControls>
                    </CartItem>
                ))}
            </CartItems>

            <CartSummary>
                <SummaryTitle>Resumo do Pedido</SummaryTitle>

                <SummaryRow>
                    <SummaryLabel>Subtotal ({totalItems} itens)</SummaryLabel>
                    <SummaryValue>R$ {subtotal.toFixed(2)}</SummaryValue>
                </SummaryRow>

                <SummaryRow>
                    <SummaryLabel>Frete</SummaryLabel>
                    <SummaryValue>R$ {shipping.toFixed(2)}</SummaryValue>
                </SummaryRow>

                <SummaryRow>
                    <SummaryLabel>Total</SummaryLabel>
                    <SummaryValue bold>R$ {total.toFixed(2)}</SummaryValue>
                </SummaryRow>

                <CheckoutButton to="/checkout">
                    Finalizar Compra
                </CheckoutButton>
            </CartSummary>
        </CartContainer>
    );
};

export default Cart;