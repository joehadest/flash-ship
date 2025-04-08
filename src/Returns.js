import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ReturnsContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

const ReturnsHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const ReturnsTitle = styled.h1`
  font-size: 2.2rem;
  color: #f8f9fa;
  margin-bottom: 15px;
`;

const ReturnsDescription = styled.p`
  color: #adb5bd;
  font-size: 1.1rem;
`;

const InfoSection = styled(motion.div)`
  background-color: #252525;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #f8f9fa;
  margin-bottom: 15px;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #e63946;
    margin-top: 8px;
  }
`;

const SectionContent = styled.div`
  color: #adb5bd;
  line-height: 1.6;
  
  p {
    margin-bottom: 15px;
  }
  
  ul {
    margin-left: 20px;
    margin-bottom: 15px;
    
    li {
      margin-bottom: 8px;
    }
  }
`;

const StepsContainer = styled.div`
  margin: 25px 0;
`;

const StepItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const StepNumber = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #e63946;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  padding-top: 5px;
`;

const Step = ({ number, title, description }) => (
  <StepItem>
    <StepNumber>{number}</StepNumber>
    <StepContent>
      <strong>{title}</strong>
      <p>{description}</p>
    </StepContent>
  </StepItem>
);

const Returns = () => {
  return (
    <ReturnsContainer>
      <ReturnsHeader>
        <ReturnsTitle>Política de Trocas e Devoluções</ReturnsTitle>
        <ReturnsDescription>
          Informações sobre como realizar trocas e devoluções de produtos
        </ReturnsDescription>
      </ReturnsHeader>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <SectionTitle>Direito de Arrependimento</SectionTitle>
        <SectionContent>
          <p>
            De acordo com o Código de Defesa do Consumidor, você tem o direito de devolver um produto 
            adquirido pela internet dentro do prazo de 7 dias corridos, contados a partir da data de recebimento.
          </p>
          
          <p>
            Para exercer esse direito, o produto deve estar em perfeitas condições, sem sinais de uso, 
            com a embalagem original, manuais, acessórios e nota fiscal.
          </p>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SectionTitle>Como Solicitar uma Troca ou Devolução</SectionTitle>
        <SectionContent>
          <StepsContainer>
            <Step 
              number="1" 
              title="Acesse sua conta" 
              description="Faça login no site e vá até a seção 'Meus Pedidos'."
            />
            
            <Step 
              number="2" 
              title="Localize seu pedido" 
              description="Encontre o pedido que contém o produto que deseja trocar ou devolver."
            />
            
            <Step 
              number="3" 
              title="Solicite a devolução" 
              description="Clique no botão 'Solicitar Devolução' e preencha o formulário indicando o motivo da devolução."
            />
            
            <Step 
              number="4" 
              title="Aguarde a análise" 
              description="Nossa equipe analisará sua solicitação em até 2 dias úteis."
            />
            
            <Step 
              number="5" 
              title="Envie o produto" 
              description="Após a aprovação, você receberá uma etiqueta para envio do produto. Embale-o adequadamente com todos os acessórios e documentos."
            />
            
            <Step 
              number="6" 
              title="Reembolso ou troca" 
              description="Após recebermos e verificarmos o produto, realizaremos o reembolso ou enviaremos o novo produto em caso de troca."
            />
          </StepsContainer>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Produtos com Defeito</SectionTitle>
        <SectionContent>
          <p>
            Se você recebeu um produto com defeito, tem o direito de solicitar a troca ou o reembolso 
            dentro do prazo de garantia. A garantia legal é de 90 dias para produtos duráveis e 30 dias para produtos não duráveis.
          </p>
          
          <p>
            Para produtos com defeito, siga o mesmo processo de solicitação de devolução, selecionando 
            a opção "Produto com Defeito" e descrevendo detalhadamente o problema encontrado.
          </p>
          
          <p>
            Nossa equipe técnica irá analisar o produto e, caso o defeito seja confirmado, realizaremos 
            a troca por um produto novo ou o reembolso integral do valor pago.
          </p>
        </SectionContent>
      </InfoSection>
    </ReturnsContainer>
  );
};

export default Returns;
