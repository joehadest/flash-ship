import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';

// Componentes
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopOnNavigate from './ScrollToTopOnNavigate';
import InitTestUser from './InitTestUser'; // Importando o componente de inicialização do usuário de teste

// Páginas
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Checkout from './Checkout';
import Contact from './Contact';
import NotFound from './NotFound';

// Novas páginas
import FAQ from './FAQ';
import Shipping from './Shipping';
import Returns from './Returns';
import Privacy from './Privacy';
import About from './About';
import Login from './Login';
import Register from './Register';
import UserProfile from './UserProfile';

// Proteção de rotas
import ProtectedRoute from './ProtectedRoute';

function App() {
    const location = useLocation();
    
    return (
        <div className="app">
            <ToastContainer />
            <InitTestUser /> {/* Adicionando o componente aqui para criar o usuário de teste */}
            <ScrollToTopOnNavigate />
            <Header />
            <main className="main-content">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Novas rotas */}
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/shipping" element={<Shipping />} />
                        <Route path="/returns" element={<Returns />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/about" element={<About />} />
                        
                        {/* Rotas de autenticação */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        
                        {/* Rota protegida */}
                        <Route path="/profile" element={
                            <ProtectedRoute>
                                <UserProfile />
                            </ProtectedRoute>
                        } />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
