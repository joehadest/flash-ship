import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollButton = styled(motion.button)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e63946;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  font-size: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 99;
  
  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    width: 45px;
    height: 45px;
  }
`;

const ArrowIcon = styled.span`
  transform: rotate(-90deg);
  display: inline-block;
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o botão quando o usuário rolar para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <ScrollButton
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowIcon>➤</ArrowIcon>
        </ScrollButton>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
