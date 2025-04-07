import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartContext';

const Card = styled.div`
  background-color: #252525;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  
  @media (max-width: 600px) {
    height: 160px;
  }
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #f8f9fa;
  min-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  @media (max-width: 600px) {
    font-size: 0.9rem;
    min-height: 34px;
  }
`;

const ProductPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e63946;
  margin-bottom: 10px;
  
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;

const ViewButton = styled(Link)`
  padding: 8px 12px;
  background-color: #333333; // Alterado para cinza escuro
  color: #f8f9fa; // Alterado para texto branco para melhor contraste
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  flex: 1;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #444444; // Hover um pouco mais claro
  }
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;

const AddButton = styled.button`
  padding: 8px 12px;
  background-color: #e63946;
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  flex: 1;
  min-height: 44px;
  
  &:hover {
    background-color: #c1121f;
  }
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <Card>
            <ProductImage src={product.image} alt={product.title} />
            <CardContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                <ButtonsContainer>
                    <ViewButton to={`/product/${product.id}`}>Detalhes</ViewButton>
                    <AddButton onClick={handleAddToCart}>Comprar</AddButton>
                </ButtonsContainer>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
