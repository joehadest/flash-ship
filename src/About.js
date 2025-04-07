import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #1c1c1c;
  color: #f8f9fa;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #4361ee;
    margin-top: 10px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 20px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #e9ecef;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #6c757d;
`;

const TeamMemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const TeamMemberRole = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const ValueCard = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ValueIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #4361ee;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const About = () => {
    return (
        <AboutContainer>
            <AboutTitle>Sobre a Shippin</AboutTitle>

            <Section>
                <SectionTitle>Nossa História</SectionTitle>
                <Paragraph>
                    A Shippin nasceu em 2022 com uma visão clara: transformar a forma como as pessoas compram produtos online. Fundada por um grupo de empreendedores apaixonados por tecnologia e inovação, nossa empresa rapidamente se estabeleceu como referência no mercado de dropshipping no Brasil.
                </Paragraph>
                <Paragraph>
                    Começamos com um pequeno catálogo de produtos eletrônicos, mas logo expandimos para diversas categorias, sempre mantendo nosso compromisso com a qualidade, preços competitivos e excelência no atendimento ao cliente.
                </Paragraph>
                <Paragraph>
                    Hoje, somos uma das principais plataformas de e-commerce com modelo dropshipping do país, conectando os melhores fornecedores do mundo aos consumidores brasileiros, sem intermediários, o que nos permite oferecer preços mais acessíveis e uma experiência de compra diferenciada.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Nossa Missão</SectionTitle>
                <Paragraph>
                    Proporcionar aos consumidores brasileiros acesso fácil e descomplicado a produtos de qualidade internacional, com preços justos e entrega rápida, transformando a experiência de compra online em algo extraordinário.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Nossos Valores</SectionTitle>
                <ValuesGrid>
                    <ValueCard>
                        <ValueIcon>🔍</ValueIcon>
                        <ValueTitle>Transparência</ValueTitle>
                        <ValueDescription>
                            Acreditamos que a honestidade e a transparência são fundamentais em todos os aspectos do nosso negócio, desde os preços até as políticas de devolução.
                        </ValueDescription>
                    </ValueCard>

                    <ValueCard>
                        <ValueIcon>👑</ValueIcon>
                        <ValueTitle>Qualidade</ValueTitle>
                        <ValueDescription>
                            Comprometemo-nos a oferecer apenas produtos que atendam a rigorosos padrões de qualidade, trabalhando com os melhores fornecedores do mercado.
                        </ValueDescription>
                    </ValueCard>

                    <ValueCard>
                        <ValueIcon>🚀</ValueIcon>
                        <ValueTitle>Inovação</ValueTitle>
                        <ValueDescription>
                            Buscamos constantemente novas tecnologias e processos para melhorar a experiência do cliente e otimizar nossas operações.
                        </ValueDescription>
                    </ValueCard>

                    <ValueCard>
                        <ValueIcon>♻️</ValueIcon>
                        <ValueTitle>Sustentabilidade</ValueTitle>
                        <ValueDescription>
                            Comprometemo-nos com práticas comerciais sustentáveis, buscando reduzir o impacto ambiental em todas as nossas operações.
                        </ValueDescription>
                    </ValueCard>
                </ValuesGrid>
            </Section>

            <Section>
                <SectionTitle>Nossa Equipe</SectionTitle>
                <Paragraph>
                    Contamos com um time diversificado de profissionais talentosos e apaixonados pelo que fazem. Juntos, trabalhamos para oferecer a melhor experiência possível aos nossos clientes.
                </Paragraph>

                <TeamGrid>
                    <TeamMember>
                        <TeamMemberImage>👨‍💼</TeamMemberImage>
                        <TeamMemberName>Carlos Silva</TeamMemberName>
                        <TeamMemberRole>CEO & Fundador</TeamMemberRole>
                    </TeamMember>

                    <TeamMember>
                        <TeamMemberImage>👩‍💼</TeamMemberImage>
                        <TeamMemberName>Ana Oliveira</TeamMemberName>
                        <TeamMemberRole>Diretora de Operações</TeamMemberRole>
                    </TeamMember>

                    <TeamMember>
                        <TeamMemberImage>👨‍💻</TeamMemberImage>
                        <TeamMemberName>Rafael Costa</TeamMemberName>
                        <TeamMemberRole>CTO</TeamMemberRole>
                    </TeamMember>

                    <TeamMember>
                        <TeamMemberImage>👩‍🎨</TeamMemberImage>
                        <TeamMemberName>Mariana Santos</TeamMemberName>
                        <TeamMemberRole>Diretora de Marketing</TeamMemberRole>
                    </TeamMember>
                </TeamGrid>
            </Section>
        </AboutContainer>
    );
};

export default About;
