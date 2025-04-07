import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #212529;
  color: #f8f9fa;
  padding: 40px 0 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
  margin-bottom: 15px;
  
  @media (max-width: 480px) {
    height: 32px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #fff;
`;

const FooterLink = styled(Link)`
  color: #adb5bd;
  margin-bottom: 10px;
  
  &:hover {
    color: #fff;
  }
`;

const FooterText = styled.p`
  color: #adb5bd;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  color: #adb5bd;
  font-size: 1.5rem;
  
  &:hover {
    color: #fff;
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  color: #6c757d;
  border-top: 1px solid #343a40;
  margin-top: 30px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <FooterLogo src="/assets/logo.shippin.png" alt="Shippin Logo" />
                    <FooterText>
                        Sua loja de dropshipping completa com produtos de alta qualidade e preços competitivos.
                    </FooterText>
                    <SocialLinks>
                        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">📘</SocialIcon>
                        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">📱</SocialIcon>
                        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">📸</SocialIcon>
                    </SocialLinks>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Links Rápidos</FooterTitle>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/products">Produtos</FooterLink>
                    <FooterLink to="/contact">Contato</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Ajuda</FooterTitle>
                    <FooterLink to="/faq">FAQ</FooterLink>
                    <FooterLink to="/shipping">Envio</FooterLink>
                    <FooterLink to="/returns">Devoluções</FooterLink>
                    <FooterLink to="/privacy">Privacidade</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Contato</FooterTitle>
                    <FooterText>📍 Rua Exemplo, 123</FooterText>
                    <FooterText>📞 (11) 1234-5678</FooterText>
                    <FooterText>📧 contato@shippin.com</FooterText>
                </FooterSection>
            </FooterContent>

            <Copyright>
                © {new Date().getFullYear()} Shippin. Todos os direitos reservados.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
