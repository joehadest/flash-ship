import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
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
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: #4361ee;
  z-index: 1050;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  
  @media (max-width: 480px) {
    height: 32px;
  }
`;

const MobileIcons = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #252525;
    padding: 80px 20px 20px;
    z-index: 1000;
    justify-content: center;
    gap: 30px;
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
    font-size: 1.3rem;
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

const MenuButton = styled.button`
  display: none;
  background: none;
  font-size: 1.8rem;
  z-index: 1050;
  padding: 8px;
  min-width: 44px;
  min-height: 44px;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 900;
  }
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <HeaderContainer>
            <Nav>
                <Logo to="/">
                    <LogoImage src="/assets/logo.shippin.png" alt="Shippin Logo" />
                </Logo>

                <MobileIcons>
                    <CartIcon to="/cart">
                        🛒
                        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
                    </CartIcon>
                    <MenuButton onClick={toggleMenu} aria-label="Menu">
                        {isMenuOpen ? '✕' : '☰'}
                    </MenuButton>
                </MobileIcons>

                <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />

                <NavLinks isOpen={isMenuOpen}>
                    <NavLink to="/" className={isActive('/')}>Home</NavLink>
                    <NavLink to="/products" className={isActive('/products')}>Produtos</NavLink>
                    <NavLink to="/contact" className={isActive('/contact')}>Contato</NavLink>
                    {/* Carrinho visível apenas em telas maiores */}
                    <CartIcon to="/cart" className="desktop-only" style={{ display: 'none' }}>
                        🛒
                        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
                    </CartIcon>
                </NavLinks>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
