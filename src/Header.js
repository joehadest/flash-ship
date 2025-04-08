import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background-color: #252525;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Logo = styled(motion(Link))`
  display: flex;
  align-items: center;
  color: #4361ee;
  z-index: 1050;
`;

const LogoImage = styled(motion.img)`
  height: 40px;
  width: auto;
  
  @media (max-width: 480px) {
    height: 32px;
  }
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const NavLink = styled(Link)`
  color: #f8f9fa;
  font-weight: 500;
  padding: 8px 12px;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    color: #e63946;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
`;

const CartIcon = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: #f8f9fa;
  min-width: 44px;
  min-height: 44px;
  justify-content: center;
  
  &:hover {
    color: #e63946;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e63946;
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Componente para o dropdown do usuário
const UserDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #f8f9fa;
  background: none;
  border: none;
  padding: 8px 12px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: #e63946;
  }
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.9rem;
  }
`;

const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  right: 0;
  background-color: #252525;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1050;
  border-radius: 4px;
  overflow: hidden;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 12px 16px;
  color: #f8f9fa;
  text-decoration: none;
  
  &:hover {
    background-color: #333;
    color: #e63946;
  }
`;

const DropdownButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  color: #f8f9fa;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #333;
    color: #e63946;
  }
`;

const UserName = styled.span`
  @media (max-width: 992px) {
    display: none;
  }
`;

const Header = () => {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const { totalItems } = useCart();
    const { currentUser, logout } = useAuth();
    const location = useLocation();

    // Fechar dropdown do usuário quando a rota muda
    useEffect(() => {
        setIsUserDropdownOpen(false);
    }, [location.pathname]);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const handleLogout = () => {
        logout();
        setIsUserDropdownOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <HeaderContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
            <Nav>
                <TopSection>
                    <Logo to="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <LogoImage 
                            src="/assets/logo.shippin.png" 
                            alt="Shippin Logo"
                            initial={{ rotate: -5 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </Logo>

                    <RightIcons>
                        <CartIcon to="/cart">
                            🛒
                            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
                        </CartIcon>
                        
                        {/* Área do usuário */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {currentUser ? (
                                <UserDropdown>
                                    <UserButton onClick={toggleUserDropdown}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        👤 <UserName>{currentUser.firstName}</UserName>
                                    </UserButton>
                                    <AnimatePresence>
                                        {isUserDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -20, height: 0 }}
                                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                exit={{ opacity: 0, y: -20, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <DropdownContent isOpen={true}>
                                                    <DropdownItem to="/profile">Minha Conta</DropdownItem>
                                                    <DropdownButton onClick={handleLogout}>Sair</DropdownButton>
                                                </DropdownContent>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </UserDropdown>
                            ) : (
                                <NavLink to="/login" className={isActive('/login')}>Entrar</NavLink>
                            )}
                        </motion.div>
                    </RightIcons>
                </TopSection>

                <NavLinks>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <NavLink to="/" className={isActive('/')}>Home</NavLink>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <NavLink to="/products" className={isActive('/products')}>Produtos</NavLink>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <NavLink to="/cart" className={isActive('/cart')}>Carrinho</NavLink>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <NavLink to="/contact" className={isActive('/contact')}>Contato</NavLink>
                    </motion.div>
                </NavLinks>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
