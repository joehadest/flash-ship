import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const HeroSection = styled(motion.section)`
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

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled(motion(Link))`
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
`;

const Section = styled.section`
  padding: 60px 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #f8f9fa;
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

const ViewAllButton = styled(motion(Link))`
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
`;

const FeaturesSection = styled(motion.section)`
  padding: 60px 20px;
  background-color: #1c1c1c;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background-color: #252525;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const FeatureIcon = styled(motion.div)`
  font-size: 2.5rem;
  color: ${colors.primaryRed};
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #f8f9fa;
`;

const FeatureText = styled.p`
  color: #adb5bd;
  line-height: 1.6;
`;

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [featuredRef, featuredInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const [featuresRef, featuresInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Animação para títulos e elementos
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

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
        <>
            <HeroSection
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <HeroContent>
                    <HeroTitle
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Sua loja de produtos exclusivos
                    </HeroTitle>
                    <HeroText
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Descubra produtos incríveis com preços imbatíveis e entrega rápida para todo o Brasil
                    </HeroText>
                    <HeroButton 
                        to="/products"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: colors.darkRed,
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver produtos
                    </HeroButton>
                </HeroContent>
            </HeroSection>

            <Section ref={featuredRef}>
                <SectionTitle
                    variants={fadeInUp}
                    initial="hidden"
                    animate={featuredInView ? "visible" : "hidden"}
                >
                    Produtos em Destaque
                </SectionTitle>
                
                {loading ? (
                    <div className="loading">Carregando produtos...</div>
                ) : (
                    <>
                        <ProductGrid>
                            {featuredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </ProductGrid>
                        
                        <ViewAllButton 
                            to="/products"
                            initial={{ opacity: 0 }}
                            animate={featuredInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ 
                                scale: 1.05, 
                                backgroundColor: colors.primaryRed, 
                                color: "white",
                                boxShadow: "0 5px 15px rgba(230, 57, 70, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ver todos os produtos
                        </ViewAllButton>
                    </>
                )}
            </Section>

            <FeaturesSection 
                ref={featuresRef}
                initial={{ opacity: 0 }}
                animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <SectionTitle
                    variants={fadeInUp}
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                >
                    Por que escolher Shippin?
                </SectionTitle>
                
                <FeatureGrid>
                    <FeatureCard
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                    >
                        <FeatureIcon
                            initial={{ scale: 0 }}
                            animate={featuresInView ? { scale: 1, rotate: 360 } : { scale: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                        >
                            🚚
                        </FeatureIcon>
                        <FeatureTitle>Entrega Rápida</FeatureTitle>
                        <FeatureText>
                            Entregamos para todo o Brasil com rapidez e segurança.
                            Acompanhe seu pedido em tempo real.
                        </FeatureText>
                    </FeatureCard>

                    <FeatureCard
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                    >
                        <FeatureIcon
                            initial={{ scale: 0 }}
                            animate={featuresInView ? { scale: 1, rotate: 360 } : { scale: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                        >
                            💰
                        </FeatureIcon>
                        <FeatureTitle>Preços Imbatíveis</FeatureTitle>
                        <FeatureText>
                            Oferecemos os melhores preços do mercado com descontos
                            imperdíveis em produtos selecionados.
                        </FeatureText>
                    </FeatureCard>

                    <FeatureCard
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                    >
                        <FeatureIcon
                            initial={{ scale: 0 }}
                            animate={featuresInView ? { scale: 1, rotate: 360 } : { scale: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
                        >
                            ⭐
                        </FeatureIcon>
                        <FeatureTitle>Produtos de Qualidade</FeatureTitle>
                        <FeatureText>
                            Trabalhamos com os melhores fornecedores para garantir
                            produtos de alta qualidade para você.
                        </FeatureText>
                    </FeatureCard>
                </FeatureGrid>
            </FeaturesSection>
        </>
    );
};

export default Home;
