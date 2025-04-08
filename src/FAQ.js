import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FAQContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

const FAQHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const FAQTitle = styled.h1`
  font-size: 2.2rem;
  color: #f8f9fa;
  margin-bottom: 15px;
`;

const FAQDescription = styled.p`
  color: #adb5bd;
  font-size: 1.1rem;
`;

const FAQItem = styled(motion.div)`
  background-color: #252525;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 20px;
  background-color: #252525;
  color: #f8f9fa;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-bottom: ${props => props.isOpen ? '1px solid #333' : 'none'};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background-color: #2c2c2c;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0;
  height: auto;
  background-color: #252525;
  color: #adb5bd;
  overflow: hidden;
`;

const FAQAnswerContent = styled.div`
  padding: 20px;
  line-height: 1.6;
`;

const Icon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
`;

const FAQ = () => {
  const [openItem, setOpenItem] = React.useState(null);
  
  const faqItems = [
    {
      question: 'Como faço para rastrear meu pedido?',
      answer: 'Você pode rastrear seu pedido fazendo login na sua conta e indo para a seção "Meus Pedidos". Lá você encontrará o código de rastreamento e um link direto para acompanhar o status da entrega.'
    },
    {
      question: 'Qual é o prazo de entrega?',
      answer: 'O prazo de entrega varia de acordo com a região. Geralmente, entregamos em capitais e grandes cidades em 1-3 dias úteis. Para outras localidades, o prazo é de 3-7 dias úteis. Você pode verificar o prazo estimado no carrinho antes de finalizar a compra.'
    },
    {
      question: 'Como faço para trocar ou devolver um produto?',
      answer: 'Você tem até 7 dias após o recebimento do produto para solicitar uma troca ou devolução. Para isso, acesse a seção "Meus Pedidos", selecione o produto que deseja devolver e siga as instruções. Após aprovação, enviaremos uma etiqueta de devolução para você.'
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceitamos cartões de crédito (Visa, Mastercard, American Express, Elo), boleto bancário e Pix. Para cartões de crédito, oferecemos parcelamento em até 10x sem juros para compras acima de R$ 300,00.'
    },
    {
      question: 'Os produtos têm garantia?',
      answer: 'Todos os nossos produtos possuem garantia mínima de 90 dias, conforme o Código de Defesa do Consumidor. Alguns produtos específicos possuem garantia estendida oferecida pelo fabricante, que está indicada na descrição do produto.'
    }
  ];
  
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <FAQContainer>
      <FAQHeader>
        <FAQTitle>Perguntas Frequentes</FAQTitle>
        <FAQDescription>Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços.</FAQDescription>
      </FAQHeader>
      
      {faqItems.map((item, index) => (
        <FAQItem 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        >
          <FAQQuestion 
            onClick={() => toggleItem(index)}
            isOpen={openItem === index}
          >
            {item.question}
            <Icon isOpen={openItem === index}>+</Icon>
          </FAQQuestion>
          
          <FAQAnswer
            initial={false}
            animate={{ 
              height: openItem === index ? 'auto' : 0,
              opacity: openItem === index ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {openItem === index && (
              <FAQAnswerContent>
                {item.answer}
              </FAQAnswerContent>
            )}
          </FAQAnswer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
