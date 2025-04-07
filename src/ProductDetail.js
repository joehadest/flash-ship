import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartContext';

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #1c1c1c;
  
  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-height: 500px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-height: 400px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #f8f9fa;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #f8f9fa;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #e63946;
  margin-bottom: 20px;
`;

const ProductDescription = styled.div`
  margin-bottom: 30px;
  line-height: 1.6;
  color: #adb5bd;
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  max-width: 200px;
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #444;
  background-color: #333;
  color: #f8f9fa;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-height: 44px;
  min-width: 44px;
  
  &:hover {
    background-color: #444;
  }
  
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  
  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

const QuantityInput = styled.input`
  width: 60px;
  height: 40px;
  border: 1px solid #444;
  border-left: none;
  border-right: none;
  text-align: center;
  font-size: 1rem;
  min-height: 44px;
  background-color: #252525;
  color: #f8f9fa;
  
  &:focus {
    outline: none;
  }
`;

const AddToCartButton = styled.button`
  padding: 12px 20px;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
  width: 100%;
  min-height: 44px;
  
  &:hover {
    background-color: #c1121f;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const BackButton = styled.button`
  padding: 10px 15px;
  background-color: #333;
  color: #f8f9fa;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  min-height: 44px;
  
  &:hover {
    background-color: #444;
  }
`;

const ErrorMessage = styled.div`
  padding: 40px;
  text-align: center;
  font-size: 1.2rem;
  color: #e63946;
  background-color: #1c1c1c;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingMessage = styled.div`
  padding: 40px;
  text-align: center;
  font-size: 1.2rem;
  color: #adb5bd;
  background-color: #1c1c1c;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Produtos de exemplo atualizados para incluir todos os produtos do catálogo
const sampleProducts = [
    {
        id: 1,
        title: 'Smartphone XYZ Pro Max',
        price: 1999.99,
        category: 'electronics',
        description: 'Smartphone com câmera de alta resolução, processador rápido e bateria de longa duração. Este modelo oferece a melhor experiência para usuários exigentes, com tela de alta definição, armazenamento amplo e desempenho excepcional para jogos e aplicativos.',
        image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80'
    },
    {
        id: 2,
        title: 'Fones de Ouvido Bluetooth',
        price: 299.99,
        category: 'electronics',
        description: 'Fones de ouvido sem fio com cancelamento de ruído e bateria de longa duração. Estes fones proporcionam uma experiência auditiva imersiva, eliminando ruídos externos e entregando som de alta qualidade para músicas, podcasts e chamadas.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 3,
        title: 'Relógio Inteligente',
        price: 499.99,
        category: 'electronics',
        description: 'Relógio inteligente com monitor de frequência cardíaca, GPS e múltiplas funcionalidades.',
        image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 4,
        title: 'Notebook Ultraportátil',
        price: 3999.99,
        category: 'electronics',
        description: 'Notebook fino e leve com processador de última geração e bateria de longa duração.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    },
    {
        id: 5,
        title: 'Câmera DSLR Profissional',
        price: 2499.99,
        category: 'electronics',
        description: 'Câmera DSLR de alta resolução para fotos e vídeos profissionais.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1538&q=80'
    },
    {
        id: 6,
        title: 'Tênis Esportivo',
        price: 199.99,
        category: 'fashion',
        description: 'Tênis confortável para corridas e atividades físicas.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 7,
        title: 'Mochila Resistente à Água',
        price: 129.99,
        category: 'fashion',
        description: 'Mochila com múltiplos compartimentos e proteção contra chuva.',
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 8,
        title: 'Cadeira Ergonômica',
        price: 799.99,
        category: 'home',
        description: 'Cadeira de escritório com design ergonômico para maior conforto.',
        image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
];

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Simulando uma chamada de API
        setTimeout(() => {
            const foundProduct = sampleProducts.find(p => p.id === parseInt(id));

            if (foundProduct) {
                setProduct(foundProduct);
                setLoading(false);
            } else {
                setError('Produto não encontrado');
                setLoading(false);
            }
        }, 800);
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                ...product,
                quantity
            });
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return <LoadingMessage>Carregando detalhes do produto...</LoadingMessage>;
    }

    if (error) {
        return (
            <ErrorMessage>
                <div>{error}</div>
                <BackButton onClick={handleGoBack} style={{ marginTop: '20px' }}>
                    Voltar para os produtos
                </BackButton>
            </ErrorMessage>
        );
    }

    if (!product) {
        return (
            <ErrorMessage>
                <div>Produto não encontrado</div>
                <BackButton onClick={handleGoBack} style={{ marginTop: '20px' }}>
                    Voltar para os produtos
                </BackButton>
            </ErrorMessage>
        );
    }

    return (
        <DetailContainer>
            <ProductLayout>
                <ImageContainer>
                    <ProductImage src={product.image} alt={product.title} />
                </ImageContainer>

                <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>

                    <ProductDescription>
                        <p>{product.description}</p>
                    </ProductDescription>

                    <QuantitySelector>
                        <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
                        <QuantityInput
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
                    </QuantitySelector>

                    <AddToCartButton onClick={handleAddToCart}>
                        Adicionar ao Carrinho
                    </AddToCartButton>

                    <BackButton onClick={handleGoBack}>
                        Voltar
                    </BackButton>
                </ProductInfo>
            </ProductLayout>
        </DetailContainer>
    );
};

export default ProductDetail;
