import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 15px;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #1c1c1c;
  color: #f8f9fa;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 600px) {
    margin: 20px auto;
    padding: 0 10px;
  }
`;

const CheckoutTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  grid-column: 1 / -1;
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const FormSection = styled.div`
  margin-bottom: 30px;
  background-color: #252525;
  padding: 20px;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || '1fr 1fr'};
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OrderSummary = styled.div`
  background-color: #252525;
  padding: 20px;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 80px;
  
  @media (max-width: 900px) {
    position: static;
    margin-top: 20px;
  }
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const SummaryItemTitle = styled.span`
  color: #6c757d;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 15px 0;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 5px;
`;

const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #3a56d4;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const PaymentOptions = styled.div`
  margin-bottom: 20px;
`;

const PaymentOption = styled.div`
  margin-bottom: 10px;
`;

const Radio = styled.input`
  margin-right: 10px;
`;

const Checkout = () => {
    const navigate = useNavigate();
    const { cart, totalPrice, clearCart } = useCart();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'Brasil',
        paymentMethod: 'creditCard'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Calcula os valores do pedido
    const subtotal = totalPrice;
    const shipping = subtotal > 0 ? 15.99 : 0;
    const total = subtotal + shipping;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulação de processamento de pagamento
        setTimeout(() => {
            clearCart();
            navigate('/order-success');
        }, 2000);
    };

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px 20px' }}>
                <h2>Seu carrinho está vazio</h2>
                <p style={{ margin: '20px 0' }}>Adicione produtos ao seu carrinho antes de finalizar a compra.</p>
                <Link to="/products" style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#4361ee',
                    color: 'white',
                    borderRadius: '4px',
                    textDecoration: 'none'
                }}>
                    Ver Produtos
                </Link>
            </div>
        );
    }

    return (
        <CheckoutContainer>
            <CheckoutTitle>Finalizar Compra</CheckoutTitle>

            <div>
                <Form onSubmit={handleSubmit}>
                    <FormSection>
                        <SectionTitle>Dados Pessoais</SectionTitle>
                        <FieldRow>
                            <InputGroup>
                                <Label htmlFor="firstName">Nome</Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="lastName">Sobrenome</Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </FieldRow>

                        <InputGroup>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>
                    </FormSection>

                    <FormSection>
                        <SectionTitle>Endereço de Entrega</SectionTitle>
                        <InputGroup>
                            <Label htmlFor="address">Endereço</Label>
                            <Input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>

                        <FieldRow>
                            <InputGroup>
                                <Label htmlFor="city">Cidade</Label>
                                <Input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="state">Estado</Label>
                                <Input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>

                            <InputGroup>
                                <Label htmlFor="zipCode">CEP</Label>
                                <Input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </FieldRow>

                        <InputGroup>
                            <Label htmlFor="country">País</Label>
                            <Select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            >
                                <option value="Brasil">Brasil</option>
                                <option value="Portugal">Portugal</option>
                            </Select>
                        </InputGroup>
                    </FormSection>

                    <FormSection>
                        <SectionTitle>Forma de Pagamento</SectionTitle>
                        <PaymentOptions>
                            <PaymentOption>
                                <Radio
                                    type="radio"
                                    id="creditCard"
                                    name="paymentMethod"
                                    value="creditCard"
                                    checked={formData.paymentMethod === 'creditCard'}
                                    onChange={handleChange}
                                />
                                <Label htmlFor="creditCard" style={{ display: 'inline' }}>Cartão de Crédito</Label>
                            </PaymentOption>

                            <PaymentOption>
                                <Radio
                                    type="radio"
                                    id="pix"
                                    name="paymentMethod"
                                    value="pix"
                                    checked={formData.paymentMethod === 'pix'}
                                    onChange={handleChange}
                                />
                                <Label htmlFor="pix" style={{ display: 'inline' }}>Pix</Label>
                            </PaymentOption>

                            <PaymentOption>
                                <Radio
                                    type="radio"
                                    id="boleto"
                                    name="paymentMethod"
                                    value="boleto"
                                    checked={formData.paymentMethod === 'boleto'}
                                    onChange={handleChange}
                                />
                                <Label htmlFor="boleto" style={{ display: 'inline' }}>Boleto Bancário</Label>
                            </PaymentOption>
                        </PaymentOptions>

                        {formData.paymentMethod === 'creditCard' && (
                            <>
                                <FieldRow>
                                    <InputGroup>
                                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                                        <Input
                                            type="text"
                                            id="cardNumber"
                                            placeholder="1234 5678 9012 3456"
                                            required
                                        />
                                    </InputGroup>

                                    <InputGroup>
                                        <Label htmlFor="cardName">Nome no Cartão</Label>
                                        <Input
                                            type="text"
                                            id="cardName"
                                            placeholder="Nome completo"
                                            required
                                        />
                                    </InputGroup>
                                </FieldRow>

                                <FieldRow columns="1fr 1fr">
                                    <InputGroup>
                                        <Label htmlFor="expiry">Data de Validade</Label>
                                        <Input
                                            type="text"
                                            id="expiry"
                                            placeholder="MM/AA"
                                            required
                                        />
                                    </InputGroup>

                                    <InputGroup>
                                        <Label htmlFor="cvv">CVV</Label>
                                        <Input
                                            type="text"
                                            id="cvv"
                                            placeholder="123"
                                            required
                                        />
                                    </InputGroup>
                                </FieldRow>
                            </>
                        )}
                    </FormSection>

                    <PlaceOrderButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Processando...' : 'Finalizar pedido'}
                    </PlaceOrderButton>
                </Form>
            </div>

            <OrderSummary>
                <SectionTitle>Resumo do Pedido</SectionTitle>

                {cart.map(item => (
                    <SummaryItem key={item.id}>
                        <SummaryItemTitle>{item.quantity}x {item.title}</SummaryItemTitle>
                        <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </SummaryItem>
                ))}

                <Divider />

                <SummaryItem>
                    <SummaryItemTitle>Subtotal</SummaryItemTitle>
                    <span>R$ {subtotal.toFixed(2)}</span>
                </SummaryItem>

                <SummaryItem>
                    <SummaryItemTitle>Frete</SummaryItemTitle>
                    <span>R$ {shipping.toFixed(2)}</span>
                </SummaryItem>

                <Divider />

                <TotalRow>
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                </TotalRow>
            </OrderSummary>
        </CheckoutContainer>
    );
};

export default Checkout;
