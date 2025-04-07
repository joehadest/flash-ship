import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #1c1c1c;
  color: #f8f9fa;
`;

const ProductsHeader = styled.div`
  margin-bottom: 30px;
`;

const ProductsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`;

const Select = styled.select`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const NoProductsMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #6c757d;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #6c757d;
`;

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
            <ProductsHeader>
                <ProductsTitle>Nossos Produtos</ProductsTitle>
            </ProductsHeader>

            <FiltersContainer>
                <SearchInput
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                <Select value={category} onChange={handleCategoryChange}>
                    <option value="all">Todas as categorias</option>
                    <option value="electronics">Eletrônicos</option>
                    <option value="fashion">Moda</option>
                    <option value="home">Casa</option>
                </Select>

                <Select value={sortBy} onChange={handleSortChange}>
                    <option value="newest">Mais recentes</option>
                    <option value="price_low">Preço: Menor para Maior</option>
                    <option value="price_high">Preço: Maior para Menor</option>
                    <option value="name">Nome</option>
                </Select>
            </FiltersContainer>

            {loading ? (
                <LoadingMessage>Carregando produtos...</LoadingMessage>
            ) : filteredProducts.length > 0 ? (
                <ProductGrid>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ProductGrid>
            ) : (
                <NoProductsMessage>
                    Nenhum produto encontrado para a sua busca.
                </NoProductsMessage>
            )}
        </ProductsContainer>
    );
};

export default Products;
