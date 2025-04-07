import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  text-align: center;
  min-height: 60vh;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: #4361ee;
  margin: 0;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin: 20px 0;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ErrorDescription = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 30px;
  max-width: 600px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 12px 25px;
  background-color: #4361ee;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3a56d4;
  }
`;

const NotFound = () => {
    return (
        <NotFoundContainer>
            <ErrorCode>404</ErrorCode>
            <ErrorTitle>Página não encontrada</ErrorTitle>
            <ErrorDescription>
                A página que você está procurando não existe ou foi removida.
                Verifique se o endereço está correto ou explore nossa loja.
            </ErrorDescription>
            <BackButton to="/">Voltar para a página inicial</BackButton>
        </NotFoundContainer>
    );
};

export default NotFound;
