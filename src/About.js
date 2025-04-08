import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

const AboutHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const AboutTitle = styled.h1`
  font-size: 2.2rem;
  color: #f8f9fa;
  margin-bottom: 15px;
`;

const AboutDescription = styled.p`
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
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

const TeamMember = styled(motion.div)`
  background-color: #303030;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center top;
`;

const MemberInfo = styled.div`
  padding: 15px;
`;

const MemberName = styled.h3`
  font-size: 1.1rem;
  color: #f8f9fa;
  margin-bottom: 5px;
`;

const MemberRole = styled.p`
  font-size: 0.9rem;
  color: #e63946;
  margin-bottom: 10px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoreImage = styled(motion.img)`
  width: 100%;
  border-radius: 8px;
  height: 250px;
  object-fit: cover;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>Sobre Nós</AboutTitle>
        <AboutDescription>
          Conheça nossa história, missão e os valores que nos guiam
        </AboutDescription>
      </AboutHeader>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <SectionTitle>Nossa História</SectionTitle>
        <SectionContent>
          <p>
            Fundada em 2018, a Shippin nasceu da visão de transformar a experiência de compras online
            no Brasil. Começamos como uma pequena operação focada apenas em acessórios para celulares,
            operando de um pequeno galpão em São Paulo.
          </p>
          <p>
            Ao longo dos anos, expandimos nosso catálogo para incluir eletrônicos, moda e itens para casa,
            sempre com o compromisso de oferecer produtos de qualidade com preços acessíveis e entregas rápidas.
            Hoje, contamos com um time de mais de 100 colaboradores e um centro de distribuição moderno que
            nos permite atender todo o território nacional.
          </p>
          <p>
            Nossa jornada foi marcada por desafios e conquistas, mas sempre mantivemos o foco em nossos clientes
            e na melhoria contínua de nossos processos para garantir uma experiência de compra excepcional.
          </p>
          
          <ImageGrid>
            <StoreImage 
              src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Nossa loja" 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <StoreImage 
              src="https://images.unsplash.com/photo-1556744590-2c81e6444601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Nosso centro de distribuição" 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </ImageGrid>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SectionTitle>Missão, Visão e Valores</SectionTitle>
        <SectionContent>
          <p>
            <strong>Missão:</strong> Conectar pessoas a produtos de qualidade com uma experiência de compra
            simples, rápida e confiável.
          </p>
          <p>
            <strong>Visão:</strong> Ser reconhecida como a melhor plataforma de e-commerce do Brasil, 
            referência em qualidade, inovação e satisfação do cliente.
          </p>
          <p>
            <strong>Valores:</strong>
          </p>
          <ul>
            <li><strong>Transparência:</strong> Mantemos uma comunicação clara e honesta com nossos clientes e parceiros.</li>
            <li><strong>Qualidade:</strong> Buscamos excelência em tudo o que fazemos, desde a seleção de produtos até o atendimento.</li>
            <li><strong>Inovação:</strong> Estamos sempre em busca de novas tecnologias e processos para melhorar nossos serviços.</li>
            <li><strong>Responsabilidade:</strong> Comprometemo-nos com práticas sustentáveis e éticas em todas as nossas operações.</li>
            <li><strong>Foco no cliente:</strong> O cliente está no centro de todas as nossas decisões.</li>
          </ul>
        </SectionContent>
      </InfoSection>
      
      <InfoSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Nossa Equipe</SectionTitle>
        <SectionContent>
          <p>
            Contamos com profissionais talentosos e dedicados que tornam possível entregar a melhor
            experiência para nossos clientes todos os dias.
          </p>
          
          <TeamContainer>
            <TeamMember
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <MemberImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="CEO" />
              <MemberInfo>
                <MemberName>Carlos Oliveira</MemberName>
                <MemberRole>CEO & Fundador</MemberRole>
              </MemberInfo>
            </TeamMember>
            
            <TeamMember
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MemberImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="COO" />
              <MemberInfo>
                <MemberName>Ana Silva</MemberName>
                <MemberRole>Diretora de Operações</MemberRole>
              </MemberInfo>
            </TeamMember>
            
            <TeamMember
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <MemberImage src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="CTO" />
              <MemberInfo>
                <MemberName>Ricardo Santos</MemberName>
                <MemberRole>Diretor de Tecnologia</MemberRole>
              </MemberInfo>
            </TeamMember>
          </TeamContainer>
        </SectionContent>
      </InfoSection>
    </AboutContainer>
  );
};

export default About;
