import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e63946;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  opacity: ${props => props.visible ? '1' : '0'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
  
  &:hover {
    background-color: #c1121f;
  }
  
  @media (min-width: 769px) {
    width: 50px;
    height: 50px;
  }
`;

const ArrowUp = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 15l-6-6-6 6" />
    </svg>
);

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Função para verificar a posição da rolagem
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Função para rolar para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <ScrollButton
            visible={isVisible ? 1 : 0}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <ArrowUp />
        </ScrollButton>
    );
};

export default ScrollToTop;
