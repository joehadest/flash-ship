import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #1c1c1c;
  color: #f8f9fa;
`;

const ProductsHeader = styled(motion.div)`
  margin-bottom: 30px;
`;

const ProductsTitle = styled(motion.h1)`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const FiltersContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  align-items: center;
`;

const SearchInputContainer = styled(motion.div)`
  position: relative;
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 18px 12px 45px;
  border: 1px solid #444;
  border-radius: 8px;
  font-size: 1rem;
  color: #f8f9fa;
  background-color: #252525;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e63946;
    box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.3);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: #6c757d;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const SelectContainer = styled(motion.div)`
  position: relative;
  min-width: 180px;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 18px;
  padding-right: 40px;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #252525;
  color: #f8f9fa;
  font-size: 1rem;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e63946;
    box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.3);
    transform: translateY(-2px);
  }
  
  &:hover {
    border-color: #666;
  }
`;

const SelectArrow = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  pointer-events: none;
  transition: transform 0.3s ease;
  
  ${SelectContainer}:hover & {
    transform: translateY(-50%) translateY(2px);
  }
`;

const ProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const NoProductsMessage = styled(motion.div)`
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #6c757d;
`;

const LoadingMessage = styled(motion.div)`
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #6c757d;
`;

// Efeito de container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Efeito para os filtros
const filterVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// Efeito para os cards
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

// Produtos de exemplo
const sampleProducts = [
    {
        id: 1,
        title: 'Iphone XR',
        price: 1999.99,
        category: 'electronics',
        description: 'Smartphone com câmera de alta resolução, processador rápido e bateria de longa duração.',
        image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80'
    },
    {
        id: 2,
        title: 'Fones de Ouvido Bluetooth',
        price: 299.99,
        category: 'electronics',
        description: 'Fones de ouvido sem fio com cancelamento de ruído e bateria de longa duração.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 3,
        title: 'Relógio Inteligente',
        price: 499.99,
        category: 'electronics',
        description: 'Relógio inteligente com monitor de frequência cardíaca, GPS e múltiplas funcionalidades.',
        image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 4,
        title: 'Notebook Ultraportátil',
        price: 3999.99,
        category: 'electronics',
        description: 'Notebook fino e leve com processador de última geração e bateria de longa duração.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1471&q=80'
    },
    {
        id: 5,
        title: 'Câmera DSLR Profissional',
        price: 2499.99,
        category: 'electronics',
        description: 'Câmera DSLR de alta resolução para fotos e vídeos profissionais.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1538&q=80'
    },
    {
        id: 6,
        title: 'Tênis Esportivo',
        price: 199.99,
        category: 'fashion',
        description: 'Tênis confortável para corridas e atividades físicas.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 7,
        title: 'Mochila Resistente à Água',
        price: 129.99,
        category: 'fashion',
        description: 'Mochila com múltiplos compartimentos e proteção contra chuva.',
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 8,
        title: 'Cadeira Ergonômica',
        price: 799.99,
        category: 'home',
        description: 'Cadeira de escritório com design ergonômico para maior conforto.',
        image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80'
    },
];

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [category, setCategory] = useState('all');

    // Simulando carregamento de produtos
    useEffect(() => {
        setTimeout(() => {
            setProducts(sampleProducts);
            setFilteredProducts(sampleProducts);
            setLoading(false);
        }, 1000);
    }, []);

    // Filtrar e ordenar produtos
    useEffect(() => {
        let result = [...products];

        // Filtrar por categoria
        if (category !== 'all') {
            result = result.filter(product => product.category === category);
        }

        // Filtrar por termo de busca
        if (searchTerm) {
            result = result.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Ordenar produtos
        switch (sortBy) {
            case 'price_low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price_high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'newest':
            default:
                // Assumindo que os produtos mais recentes têm IDs maiores
                result.sort((a, b) => b.id - a.id);
                break;
        }

        setFilteredProducts(result);
    }, [searchTerm, sortBy, category, products]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <ProductsContainer>
            <ProductsHeader
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <ProductsTitle>Nossos Produtos</ProductsTitle>
            </ProductsHeader>

            <FiltersContainer
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <SearchInputContainer variants={filterVariants}>
                    <SearchIcon>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </SearchIcon>
                    <SearchInput
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </SearchInputContainer>

                <SelectContainer variants={filterVariants}>
                    <Select value={category} onChange={handleCategoryChange}>
                        <option value="all">Todas as categorias</option>
                        <option value="electronics">Eletrônicos</option>
                        <option value="fashion">Moda</option>
                        <option value="home">Casa</option>
                    </Select>
                    <SelectArrow>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </SelectArrow>
                </SelectContainer>

                <SelectContainer variants={filterVariants}>
                    <Select value={sortBy} onChange={handleSortChange}>
                        <option value="newest">Mais recentes</option>
                        <option value="price_low">Preço: Menor para Maior</option>
                        <option value="price_high">Preço: Maior para Menor</option>
                        <option value="name">Nome</option>
                    </Select>
                    <SelectArrow>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </SelectArrow>
                </SelectContainer>
            </FiltersContainer>

            {loading ? (
                <LoadingMessage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                        }} 
                        transition={{ 
                            duration: 1.5, 
                            ease: "easeInOut",
                            repeat: Infinity 
                        }}
                    >
                        Carregando produtos...
                    </motion.div>
                </LoadingMessage>
            ) : filteredProducts.length > 0 ? (
                <ProductGrid
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </ProductGrid>
            ) : (
                <NoProductsMessage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [0.9, 1.05, 1] }}
                    transition={{ duration: 0.5 }}
                >
                    Nenhum produto encontrado para a sua busca.
                </NoProductsMessage>
            )}
        </ProductsContainer>
    );
};

export default Products;
