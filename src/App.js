import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componentes
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopOnNavigate from './ScrollToTopOnNavigate'; // Novo componente importado

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

function App() {
    return (
        <div className="app">
            <ToastContainer />
            <ScrollToTopOnNavigate /> {/* Adiciona o componente aqui */}
            <Header />
            <main className="main-content">
                <Routes>
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

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
            <ScrollToTop /> {/* Este é o botão de "voltar ao topo" que já existia */}
        </div>
    );
}

export default App;
