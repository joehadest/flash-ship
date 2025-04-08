import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartContext';
import { motion } from 'framer-motion';
import AnimatedPage from './components/AnimatedPage';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const CartTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #f8f9fa;
`;

const CartEmpty = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #252525;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: #adb5bd;
  margin-bottom: 30px;
`;

const ContinueShoppingButton = styled(Link)`
  display: inline-block;
  padding: 12px 25px;
  background-color: #e63946;
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #c1121f;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CartItemsSection = styled.div`
  background-color: #252525;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const CartSummarySection = styled.div`
  background-color: #252525;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  height: fit-content;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #f8f9fa;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: #e63946;
    margin-top: 8px;
  }
`;

const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CartItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 20px;
  padding: 15px;
  background-color: #2c2c2c;
  border-radius: 8px;
  align-items: center;
  
  @media (max-width: 600px) {
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto auto;
  }
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  
  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemTitle = styled(Link)`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 5px;
  color: #f8f9fa;
  
  &:hover {
    color: #e63946;
  }
  
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ItemPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e63946;
  margin-bottom: 10px;
`;

const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  
  @media (max-width: 600px) {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #444;
  border-radius: 4px;
  overflow: hidden;
`;

const QuantityButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #f8f9fa;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #444;
  }
`;

const QuantityInput = styled.input`
  width: 40px;
  height: 36px;
  border: none;
  border-left: 1px solid #444;
  border-right: 1px solid #444;
  background-color: #2c2c2c;
  color: #f8f9fa;
  text-align: center;
  font-size: 0.9rem;
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #adb5bd;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    color: #e63946;
    text-decoration: underline;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  color: #adb5bd;
  font-size: 1rem;
  border-bottom: ${props => props.noBorder ? 'none' : '1px solid #333'};
`;

const SummaryLabel = styled.span``;

const SummaryValue = styled.span`
  font-weight: ${props => props.bold ? '600' : '400'};
  color: ${props => props.highlight ? '#e63946' : '#f8f9fa'};
`;

const CheckoutButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  background-color: #e63946;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #c1121f;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ClearCartButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: transparent;
  border: 1px solid #555;
  color: #adb5bd;
  text-align: center;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #333;
    color: #f8f9fa;
  }
`;

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getSubtotal, calculateShipping, clearCart } = useCart();

  // Verificamos se cartItems existe e tem a propriedade map
  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <AnimatedPage>
        <CartContainer>
          <CartTitle>Carrinho</CartTitle>
          <CartEmpty>
            <EmptyMessage>Seu carrinho está vazio.</EmptyMessage>
            <ContinueShoppingButton to="/products">
              Continuar Comprando
            </ContinueShoppingButton>
          </CartEmpty>
        </CartContainer>
      </AnimatedPage>
    );
  }

  const subtotal = getSubtotal();
  const shipping = calculateShipping();
  const total = subtotal + shipping;

  const handleQuantityChange = (id, value) => {
    value = parseInt(value);
    if (!isNaN(value)) {
      updateQuantity(id, value);
    }
  };

  return (
    <AnimatedPage>
      <CartContainer>
        <CartTitle>Carrinho</CartTitle>
        <CartContent>
          <CartItemsSection>
            <SectionTitle>Itens ({cartItems.length})</SectionTitle>
            <CartItemList>
              {cartItems.map((item) => (
                <CartItem 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ItemImage>
                    <img src={item.image} alt={item.title} />
                  </ItemImage>
                  
                  <ItemDetails>
                    <ItemTitle to={`/product/${item.id}`}>{item.title}</ItemTitle>
                    <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                  </ItemDetails>
                  
                  <ItemActions>
                    <QuantityControl>
                      <QuantityButton 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </QuantityButton>
                      <QuantityInput 
                        type="number" 
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                      />
                      <QuantityButton 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </QuantityButton>
                    </QuantityControl>
                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                      Remover
                    </RemoveButton>
                  </ItemActions>
                </CartItem>
              ))}
            </CartItemList>
          </CartItemsSection>
          
          <CartSummarySection>
            <SectionTitle>Resumo</SectionTitle>
            <SummaryRow>
              <SummaryLabel>Subtotal</SummaryLabel>
              <SummaryValue>R$ {subtotal.toFixed(2)}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>Frete</SummaryLabel>
              <SummaryValue>
                {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
              </SummaryValue>
            </SummaryRow>
            <SummaryRow noBorder>
              <SummaryLabel>Total</SummaryLabel>
              <SummaryValue bold highlight>R$ {total.toFixed(2)}</SummaryValue>
            </SummaryRow>
            
            <CheckoutButton 
              to="/checkout"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Finalizar Compra
            </CheckoutButton>
            
            <ClearCartButton onClick={clearCart}>
              Esvaziar Carrinho
            </ClearCartButton>
          </CartSummarySection>
        </CartContent>
      </CartContainer>
    </AnimatedPage>
  );
};

export default Cart;