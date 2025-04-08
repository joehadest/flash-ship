import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PrivacyContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

const PrivacyHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const PrivacyTitle = styled.h1`
  font-size: 2.2rem;
  color: #f8f9fa;
  margin-bottom: 15px;
`;

const PrivacyDescription = styled.p`
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

const LastUpdated = styled.div`
  text-align: right;
  font-style: italic;
  color: #6c757d;
  margin-top: 20px;
  font-size: 0.9rem;
`;

const Privacy = () => {
  return (
    <PrivacyContainer>
      <PrivacyHeader>
        <PrivacyTitle>Política de Privacidade</PrivacyTitle>
        <PrivacyDescription>
          Como coletamos, usamos e protegemos suas informações pessoais
        </PrivacyDescription>
      </PrivacyHeader>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <SectionTitle>Introdução</SectionTitle>
        <SectionContent>
          <p>
            Nós da Shippin valorizamos a sua privacidade e estamos comprometidos em proteger seus dados pessoais.
            Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações
            quando você utiliza nosso site e serviços.
          </p>
          <p>
            Ao utilizar nosso site, você concorda com a coleta e uso de informações de acordo com esta política.
            Recomendamos a leitura atenta deste documento para entender nossas práticas em relação aos seus dados.
          </p>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SectionTitle>Informações que Coletamos</SectionTitle>
        <SectionContent>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          
          <ul>
            <li>
              <strong>Informações de identificação pessoal:</strong> Nome, endereço de e-mail, endereço postal,
              número de telefone, CPF/CNPJ e outros dados similares quando você cria uma conta ou realiza uma compra.
            </li>
            <li>
              <strong>Informações de pagamento:</strong> Detalhes do cartão de crédito (que são processados por gateways
              de pagamento seguros) e histórico de transações.
            </li>
            <li>
              <strong>Informações de uso:</strong> Como você interage com nosso site, incluindo páginas visitadas,
              produtos visualizados, tempo de permanência e padrões de navegação.
            </li>
            <li>
              <strong>Informações de dispositivo:</strong> Tipo de navegador, sistema operacional, endereço IP
              e identificadores de dispositivos.
            </li>
          </ul>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Como Usamos Suas Informações</SectionTitle>
        <SectionContent>
          <p>Utilizamos suas informações para:</p>
          
          <ul>
            <li>Processar pedidos e transações;</li>
            <li>Fornecer, manter e melhorar nossos produtos e serviços;</li>
            <li>Enviar confirmações, atualizações e alertas relacionados ao seu pedido;</li>
            <li>Responder a suas perguntas e solicitações de suporte;</li>
            <li>Personalizar sua experiência no site e mostrar conteúdo relevante;</li>
            <li>Enviar comunicações de marketing, caso você tenha optado por recebê-las;</li>
            <li>Detectar, prevenir e resolver problemas técnicos e de segurança;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <SectionTitle>Cookies e Tecnologias Similares</SectionTitle>
        <SectionContent>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o tráfego
            e personalizar o conteúdo. Você pode gerenciar as configurações de cookies através do seu navegador.
          </p>
          
          <p>Tipos de cookies que utilizamos:</p>
          
          <ul>
            <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do site;</li>
            <li><strong>Cookies de funcionalidade:</strong> Permitem recursos avançados e personalização;</li>
            <li><strong>Cookies analíticos:</strong> Nos ajudam a entender como os visitantes utilizam o site;</li>
            <li><strong>Cookies de publicidade:</strong> Utilizados para exibir anúncios relevantes.</li>
          </ul>
        </SectionContent>
      </InfoSection>
      
      <LastUpdated>Última atualização: 01 de Abril de 2023</LastUpdated>
    </PrivacyContainer>
  );
};

export default Privacy;
