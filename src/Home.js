import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

// Atualizando para usar a imagem da pasta public
const bannerImage = '/assets/banner_descktop-1.png';

// Nova paleta de cores
const colors = {
    primaryRed: '#e63946',
    darkRed: '#c1121f',
    lightGray: '#f8f9fa',
    mediumGray: '#dee2e6',
    darkGray: '#343a40'
};

const HeroSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage});
  background-size: cover;
  background-position: center;
  height: 70vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const HeroContent = styled.div`
  max-width: 700px;
  padding: 20px;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
  background-color: ${colors.primaryRed};
  color: white;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  min-height: 44px;
  min-width: 160px;
  
  &:hover {
    background-color: ${colors.darkRed};
  }
`;

const Section = styled.section`
  padding: 60px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #f8f9fa; // Alterado para branco
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${colors.primaryRed};
    margin: 15px auto 0;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
    padding: 0 15px;
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  width: 200px;
  margin: 40px auto 0;
  padding: 10px 20px;
  background-color: transparent;
  color: ${colors.primaryRed};
  border: 2px solid ${colors.primaryRed};
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${colors.primaryRed};
    color: white;
  }
`;

const FeaturesSection = styled.section`
  padding: 60px 20px;
  background-color: #1c1c1c; // Alterado para o novo fundo escuro
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: #252525; // Alterado para um escuro que dê contraste
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${colors.primaryRed};
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #f8f9fa; // Texto claro para boa legibilidade
`;

const FeatureText = styled.p`
  color: #adb5bd; // Cinza claro para o texto secundário
  line-height: 1.6;
`;

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulando uma chamada de API para obter produtos em destaque
        setTimeout(() => {
            const mockProducts = [
                {
                    id: 1,
                    title: 'Iphone XR',
                    price: 1999.99,
                    description: 'Smartphone com câmera de alta resolução, processador rápido e bateria de longa duração.',
                    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80'
                },
                {
                    id: 2,
                    title: 'Fones de Ouvido Bluetooth',
                    price: 299.99,
                    description: 'Fones de ouvido sem fio com cancelamento de ruído e bateria de longa duração.',
                    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                },
                {
                    id: 3,
                    title: 'Relógio Inteligente',
                    price: 499.99,
                    description: 'Relógio inteligente com monitor de frequência cardíaca, GPS e múltiplas funcionalidades.',
                    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                },
                {
                    id: 4,
                    title: 'Notebook Ultraportátil',
                    price: 3999.99,
                    description: 'Notebook fino e leve com processador de última geração e bateria de longa duração.',
                    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                }
            ];

            setFeaturedProducts(mockProducts);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            <HeroSection>
                <HeroContent>
                    <HeroTitle>Sua loja de produtos exclusivos</HeroTitle>
                    <HeroText>
                        Descubra produtos incríveis com preços imbatíveis e entrega rápida para todo o Brasil
                    </HeroText>
                    <HeroButton to="/products">Ver produtos</HeroButton>
                </HeroContent>
            </HeroSection>

            <Section>
                <SectionTitle>Produtos em Destaque</SectionTitle>
                {loading ? (
                    <div className="loading">Carregando produtos...</div>
                ) : (
                    <>
                        <ProductGrid>
                            {featuredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </ProductGrid>
                        <ViewAllButton to="/products">Ver todos os produtos</ViewAllButton>
                    </>
                )}
            </Section>

            <FeaturesSection>
                <SectionTitle>Por que escolher Shippin?</SectionTitle>
                <FeatureGrid>
                    <FeatureCard>
                        <FeatureIcon>🚚</FeatureIcon>
                        <FeatureTitle>Entrega Rápida</FeatureTitle>
                        <FeatureText>
                            Entregamos para todo o Brasil com rapidez e segurança.
                            Acompanhe seu pedido em tempo real.
                        </FeatureText>
                    </FeatureCard>

                    <FeatureCard>
                        <FeatureIcon>💰</FeatureIcon>
                        <FeatureTitle>Preços Imbatíveis</FeatureTitle>
                        <FeatureText>
                            Oferecemos os melhores preços do mercado com descontos
                            imperdíveis em produtos selecionados.
                        </FeatureText>
                    </FeatureCard>

                    <FeatureCard>
                        <FeatureIcon>⭐</FeatureIcon>
                        <FeatureTitle>Produtos de Qualidade</FeatureTitle>
                        <FeatureText>
                            Trabalhamos com os melhores fornecedores para garantir
                            produtos de alta qualidade para você.
                        </FeatureText>
                    </FeatureCard>
                </FeatureGrid>
            </FeaturesSection>
        </div>
    );
};

export default Home;
