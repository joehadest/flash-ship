import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';
import AnimatedPage from './components/AnimatedPage';
import { motion } from 'framer-motion';

const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const CheckoutTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #f8f9fa;
`;

const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutForm = styled.div`
  background-color: #252525;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const OrderSummary = styled.div`
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

const FormSection = styled.div`
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #f8f9fa;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #333;
  color: #f8f9fa;
  
  &:focus {
    outline: none;
    border-color: #e63946;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #333;
  color: #f8f9fa;
  
  &:focus {
    outline: none;
    border-color: #e63946;
  }
`;

const AddressSelect = styled.div`
  margin-bottom: 20px;
`;

const AddressOption = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid ${props => props.selected ? '#e63946' : '#333'};
  border-radius: 8px;
  background-color: ${props => props.selected ? '#2a2a2a' : '#252525'};
  cursor: pointer;
  
  &:hover {
    border-color: #e63946;
  }
`;

const AddressRadio = styled.input`
  margin-right: 12px;
  margin-top: 3px;
`;

const AddressDetails = styled.div`
  flex: 1;
`;

const AddressName = styled.div`
  font-weight: 500;
  color: #f8f9fa;
  margin-bottom: 5px;
`;

const AddressText = styled.div`
  color: #adb5bd;
`;

const SummaryItem = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemInfo = styled.div``;

const ItemName = styled.div`
  font-weight: 500;
  color: #f8f9fa;
  margin-bottom: 5px;
`;

const ItemPrice = styled.div`
  color: #adb5bd;
  font-size: 0.9rem;
`;

const ItemQuantity = styled.div`
  color: #e63946;
  font-weight: 500;
  text-align: right;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  color: #adb5bd;
  font-size: 1rem;
  border-top: ${props => props.border ? '1px solid #333' : 'none'};
  
  &:last-child {
    font-weight: 600;
    font-size: 1.1rem;
    color: #f8f9fa;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 14px;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c1121f;
  }
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const PaymentOption = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid ${props => props.selected ? '#e63946' : '#333'};
  border-radius: 8px;
  background-color: ${props => props.selected ? '#2a2a2a' : '#252525'};
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    border-color: #e63946;
  }
`;

const PaymentRadio = styled.input`
  margin-right: 12px;
`;

const PaymentLabel = styled.label`
  font-weight: 500;
  color: #f8f9fa;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
`;

const PaymentIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 10px;
`;

const CardFields = styled.div`
  margin-top: 20px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const Checkout = () => {
  const { cartItems = [], getSubtotal, calculateShipping, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : '',
    email: currentUser ? currentUser.email : '',
    phone: currentUser ? currentUser.phone : '',
    shippingMethod: 'standard',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    addressId: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  
  // Redirecionar se o carrinho estiver vazio
  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      toast.error('Seu carrinho está vazio.');
      navigate('/cart');
    } else if (step === 1 && currentUser && currentUser.addresses && currentUser.addresses.length > 0) {
      setFormData(prev => ({
        ...prev,
        addressId: currentUser.addresses.find(addr => addr.isDefault)?.id || currentUser.addresses[0].id
      }));
    }
  }, [cartItems, navigate, currentUser, step]);
  
  const subtotal = getSubtotal ? getSubtotal() : 0;
  const shipping = calculateShipping ? calculateShipping() : 0;
  const total = subtotal + shipping;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleAddressSelect = (addressId) => {
    setFormData(prev => ({
      ...prev,
      addressId
    }));
  };
  
  const handlePaymentSelect = (method) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando processamento do pedido
    setTimeout(() => {
      clearCart();
      toast.success('Pedido realizado com sucesso!');
      navigate('/');
    }, 2000);
  };
  
  // Certificamos que cartItems existe e tem a propriedade length
  const itemsCount = cartItems && Array.isArray(cartItems) ? cartItems.length : 0;
  
  return (
    <AnimatedPage>
      <CheckoutContainer>
        <CheckoutTitle>Finalizar Compra</CheckoutTitle>
        
        <CheckoutLayout>
          <CheckoutForm>
            <FormSection>
              <SectionTitle>Informações de Contato</SectionTitle>
              
              <FormGroup>
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
            </FormSection>
            
            <FormSection>
              <SectionTitle>Endereço de Entrega</SectionTitle>
              
              {currentUser && currentUser.addresses && currentUser.addresses.length > 0 ? (
                <AddressSelect>
                  {currentUser.addresses.map(address => (
                    <AddressOption
                      key={address.id}
                      selected={formData.addressId === address.id}
                      onClick={() => handleAddressSelect(address.id)}
                    >
                      <AddressRadio
                        type="radio"
                        checked={formData.addressId === address.id}
                        onChange={() => handleAddressSelect(address.id)}
                      />
                      <AddressDetails>
                        <AddressName>{address.addressName}</AddressName>
                        <AddressText>
                          {address.street}, {address.number}
                          {address.complement && `, ${address.complement}`}
                          <br />
                          {address.neighborhood}, {address.city} - {address.state}
                          <br />
                          CEP: {address.zipCode}
                        </AddressText>
                      </AddressDetails>
                    </AddressOption>
                  ))}
                </AddressSelect>
              ) : (
                <>
                  <FormGroup>
                    <Label htmlFor="street">Endereço</Label>
                    <Input
                      type="text"
                      id="street"
                      name="street"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="number">Número</Label>
                      <Input
                        type="text"
                        id="number"
                        name="number"
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="complement">Complemento</Label>
                      <Input
                        type="text"
                        id="complement"
                        name="complement"
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="state">Estado</Label>
                      <Select
                        id="state"
                        name="state"
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </Select>
                    </FormGroup>
                  </FormRow>
                  
                  <FormGroup>
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </>
              )}
            </FormSection>
            
            <FormSection>
              <SectionTitle>Método de Envio</SectionTitle>
              
              <PaymentOption
                selected={formData.shippingMethod === 'standard'}
                onClick={() => handleChange({ target: { name: 'shippingMethod', value: 'standard' } })}
              >
                <PaymentRadio
                  type="radio"
                  name="shippingMethod"
                  value="standard"
                  checked={formData.shippingMethod === 'standard'}
                  onChange={handleChange}
                />
                <PaymentLabel htmlFor="standard">
                  <PaymentIcon>📦</PaymentIcon>
                  Envio Padrão (3-7 dias úteis)
                  {shipping === 0 ? ' - Grátis' : ` - R$ ${shipping.toFixed(2)}`}
                </PaymentLabel>
              </PaymentOption>
              
              <PaymentOption
                selected={formData.shippingMethod === 'express'}
                onClick={() => handleChange({ target: { name: 'shippingMethod', value: 'express' } })}
              >
                <PaymentRadio
                  type="radio"
                  name="shippingMethod"
                  value="express"
                  checked={formData.shippingMethod === 'express'}
                  onChange={handleChange}
                />
                <PaymentLabel htmlFor="express">
                  <PaymentIcon>🚚</PaymentIcon>
                  Envio Expresso (1-2 dias úteis) - R$ {(shipping + 15).toFixed(2)}
                </PaymentLabel>
              </PaymentOption>
            </FormSection>
            
            <FormSection>
              <SectionTitle>Método de Pagamento</SectionTitle>
              
              <PaymentOption
                selected={formData.paymentMethod === 'creditCard'}
                onClick={() => handlePaymentSelect('creditCard')}
              >
                <PaymentRadio
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === 'creditCard'}
                  onChange={() => handlePaymentSelect('creditCard')}
                />
                <PaymentLabel htmlFor="creditCard">
                  <PaymentIcon>💳</PaymentIcon>
                  Cartão de Crédito
                </PaymentLabel>
              </PaymentOption>
              
              <PaymentOption
                selected={formData.paymentMethod === 'pix'}
                onClick={() => handlePaymentSelect('pix')}
              >
                <PaymentRadio
                  type="radio"
                  name="paymentMethod"
                  value="pix"
                  checked={formData.paymentMethod === 'pix'}
                  onChange={() => handlePaymentSelect('pix')}
                />
                <PaymentLabel htmlFor="pix">
                  <PaymentIcon>💸</PaymentIcon>
                  Pix
                </PaymentLabel>
              </PaymentOption>
              
              <PaymentOption
                selected={formData.paymentMethod === 'boleto'}
                onClick={() => handlePaymentSelect('boleto')}
              >
                <PaymentRadio
                  type="radio"
                  name="paymentMethod"
                  value="boleto"
                  checked={formData.paymentMethod === 'boleto'}
                  onChange={() => handlePaymentSelect('boleto')}
                />
                <PaymentLabel htmlFor="boleto">
                  <PaymentIcon>🧾</PaymentIcon>
                  Boleto Bancário
                </PaymentLabel>
              </PaymentOption>
              
              <CardFields show={formData.paymentMethod === 'creditCard'}>
                <FormGroup>
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <Input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="0000 0000 0000 0000"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="cardName">Nome no Cartão</Label>
                  <Input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="cardExpiry">Data de Validade</Label>
                    <Input
                      type="text"
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      placeholder="MM/AA"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="cardCvv">CVV</Label>
                    <Input
                      type="text"
                      id="cardCvv"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleChange}
                      placeholder="123"
                    />
                  </FormGroup>
                </FormRow>
              </CardFields>
            </FormSection>
            
            <ButtonContainer>
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Processando...' : 'Finalizar Pedido'}
              </SubmitButton>
            </ButtonContainer>
          </CheckoutForm>
          
          <OrderSummary>
            <SectionTitle>Resumo do Pedido</SectionTitle>
            
            <div>
              {/* Verificamos se cartItems existe antes de usar map */}
              {cartItems && cartItems.map && cartItems.map(item => (
                <SummaryItem key={item.id}>
                  <ItemImage src={item.image} alt={item.title} />
                  <ItemInfo>
                    <ItemName>{item.title}</ItemName>
                    <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                  </ItemInfo>
                  <ItemQuantity>{item.quantity}x</ItemQuantity>
                </SummaryItem>
              ))}
            </div>
            
            <SummaryRow border>
              <div>Subtotal</div>
              <div>R$ {subtotal.toFixed(2)}</div>
            </SummaryRow>
            
            <SummaryRow>
              <div>Frete</div>
              <div>
                {shipping === 0
                  ? 'Grátis'
                  : `R$ ${formData.shippingMethod === 'express' 
                      ? (shipping + 15).toFixed(2) 
                      : shipping.toFixed(2)}`
                }
              </div>
            </SummaryRow>
            
            <SummaryRow>
              <div>Total</div>
              <div>
                R$ {formData.shippingMethod === 'express' 
                    ? (total + 15).toFixed(2) 
                    : total.toFixed(2)
                }
              </div>
            </SummaryRow>
          </OrderSummary>
        </CheckoutLayout>
      </CheckoutContainer>
    </AnimatedPage>
  );
};

export default Checkout;
