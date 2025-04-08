import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ShippingContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

const ShippingHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const ShippingTitle = styled.h1`
  font-size: 2.2rem;
  color: #f8f9fa;
  margin-bottom: 15px;
`;

const ShippingDescription = styled.p`
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

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px 0;
`;

const ShippingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #333;
  }
  
  th {
    background-color: #333;
    color: #f8f9fa;
  }
  
  tr:nth-child(even) {
    background-color: #2c2c2c;
  }
  
  tr:hover {
    background-color: #303030;
  }
`;

const Shipping = () => {
  return (
    <ShippingContainer>
      <ShippingHeader>
        <ShippingTitle>Política de Envio</ShippingTitle>
        <ShippingDescription>
          Saiba como funcionam nossos processos de entrega e envio
        </ShippingDescription>
      </ShippingHeader>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <SectionTitle>Prazos de Envio</SectionTitle>
        <SectionContent>
          <p>
            Nós nos esforçamos para processar e enviar seu pedido o mais rápido possível.
            Geralmente, os pedidos são processados em até 24 horas (dias úteis) após a confirmação do pagamento.
          </p>
          
          <TableContainer>
            <ShippingTable>
              <thead>
                <tr>
                  <th>Região</th>
                  <th>Prazo Estimado</th>
                  <th>Frete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Capitais</td>
                  <td>1-3 dias úteis</td>
                  <td>A partir de R$ 15,90</td>
                </tr>
                <tr>
                  <td>Região Sudeste</td>
                  <td>2-4 dias úteis</td>
                  <td>A partir de R$ 18,90</td>
                </tr>
                <tr>
                  <td>Sul e Nordeste</td>
                  <td>3-5 dias úteis</td>
                  <td>A partir de R$ 22,90</td>
                </tr>
                <tr>
                  <td>Centro-Oeste</td>
                  <td>3-6 dias úteis</td>
                  <td>A partir de R$ 25,90</td>
                </tr>
                <tr>
                  <td>Norte</td>
                  <td>5-8 dias úteis</td>
                  <td>A partir de R$ 29,90</td>
                </tr>
              </tbody>
            </ShippingTable>
          </TableContainer>
          
          <p>
            <strong>Importante:</strong> Os prazos mencionados são estimados e podem variar de acordo com a
            disponibilidade do produto, condições climáticas ou outros fatores externos.
          </p>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SectionTitle>Opções de Envio</SectionTitle>
        <SectionContent>
          <p>Oferecemos diversas opções de envio para atender às suas necessidades:</p>
          
          <ul>
            <li><strong>Envio Padrão:</strong> Nossa opção mais econômica, com entrega em até 8 dias úteis.</li>
            <li><strong>Envio Expresso:</strong> Entrega mais rápida, com prazo de 1-3 dias úteis (disponível apenas para capitais e regiões metropolitanas).</li>
            <li><strong>Retirada na Loja:</strong> Retire seu pedido em uma de nossas lojas físicas sem custo de frete.</li>
          </ul>
          
          <p>
            O valor do frete é calculado com base no CEP de entrega, peso e dimensões dos produtos.
            Você poderá visualizar as opções disponíveis e os valores durante o processo de checkout.
          </p>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Rastreamento de Pedidos</SectionTitle>
        <SectionContent>
          <p>
            Após o envio do seu pedido, você receberá um e-mail com o código de rastreamento.
            Você também pode acompanhar o status do seu pedido a qualquer momento acessando
            sua conta na seção "Meus Pedidos".
          </p>
          
          <p>
            Utilizamos os serviços dos Correios e transportadoras parceiras de confiança para
            garantir que seu pedido chegue em perfeitas condições.
          </p>
        </SectionContent>
      </InfoSection>
    </ShippingContainer>
  );
};

export default Shipping;
