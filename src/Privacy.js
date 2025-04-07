import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  color: #f8f9fa;
  background-color: #1c1c1c;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #e63946;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
  color: #adb5bd;
`;

const ListContainer = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.5;
  color: #adb5bd;
`;

const UpdateInfo = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #333;
  font-style: italic;
  color: #adb5bd;
`;

const Privacy = () => {
    return (
        <PrivacyContainer>
            <PageTitle>Política de Privacidade</PageTitle>

            <Section>
                <Paragraph>
                    Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </Paragraph>
                <Paragraph>
                    A Shippin valoriza e respeita a privacidade de nossos usuários e clientes. Esta Política de Privacidade
                    descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nosso site.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Informações que Coletamos</SectionTitle>
                <Paragraph>
                    Podemos coletar os seguintes tipos de informações:
                </Paragraph>
                <ListContainer>
                    <ListItem>
                        <strong>Informações Pessoais:</strong> Nome, endereço de e-mail, endereço para entrega, número de telefone e dados de pagamento.
                    </ListItem>
                    <ListItem>
                        <strong>Informações de Uso:</strong> Dados sobre como você interage com nosso site, produtos visualizados, tempo gasto em páginas e preferências de compra.
                    </ListItem>
                    <ListItem>
                        <strong>Informações do Dispositivo:</strong> Tipo de navegador, sistema operacional, endereço IP e informações sobre o dispositivo utilizado.
                    </ListItem>
                    <ListItem>
                        <strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies para melhorar sua experiência, analisar o uso do site e personalizar conteúdo.
                    </ListItem>
                </ListContainer>
            </Section>

            <Section>
                <SectionTitle>Como Utilizamos Suas Informações</SectionTitle>
                <Paragraph>
                    Utilizamos suas informações pessoais para:
                </Paragraph>
                <ListContainer>
                    <ListItem>Processar e entregar seus pedidos</ListItem>
                    <ListItem>Fornecer suporte ao cliente e responder a suas dúvidas</ListItem>
                    <ListItem>Personalizar sua experiência de compra</ListItem>
                    <ListItem>Enviar informações sobre promoções, novos produtos e ofertas (caso você tenha optado por recebê-las)</ListItem>
                    <ListItem>Melhorar nossos produtos, serviços e funcionalidades do site</ListItem>
                    <ListItem>Prevenir fraudes e garantir a segurança do site</ListItem>
                </ListContainer>
            </Section>

            <Section>
                <SectionTitle>Compartilhamento de Informações</SectionTitle>
                <Paragraph>
                    Podemos compartilhar suas informações com:
                </Paragraph>
                <ListContainer>
                    <ListItem>
                        <strong>Parceiros de Entrega:</strong> Para entregar seus pedidos.
                    </ListItem>
                    <ListItem>
                        <strong>Processadores de Pagamento:</strong> Para processar transações de forma segura.
                    </ListItem>
                    <ListItem>
                        <strong>Fornecedores de Serviços:</strong> Empresas que nos ajudam a operar o site e fornecer serviços.
                    </ListItem>
                </ListContainer>
                <Paragraph>
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento explícito.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Segurança de Dados</SectionTitle>
                <Paragraph>
                    Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado,
                    alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Seus Direitos</SectionTitle>
                <Paragraph>
                    Você tem o direito de:
                </Paragraph>
                <ListContainer>
                    <ListItem>Acessar e receber uma cópia de suas informações pessoais</ListItem>
                    <ListItem>Retificar dados imprecisos ou incompletos</ListItem>
                    <ListItem>Solicitar a exclusão de seus dados pessoais</ListItem>
                    <ListItem>Opor-se ao processamento de seus dados em determinadas circunstâncias</ListItem>
                    <ListItem>Retirar seu consentimento a qualquer momento</ListItem>
                </ListContainer>
                <Paragraph>
                    Para exercer esses direitos, entre em contato conosco através do e-mail privacy@shippin.com.
                </Paragraph>
            </Section>

            <UpdateInfo>
                <p>Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você reveja esta página regularmente para estar ciente de quaisquer alterações.</p>
            </UpdateInfo>
        </PrivacyContainer>
    );
};

export default Privacy;
