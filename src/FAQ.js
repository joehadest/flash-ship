import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  color: #f8f9fa;
  background-color: #1c1c1c;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
`;

const FAQSection = styled.div`
  margin-bottom: 40px;
`;

const Question = styled.div`
  background-color: #252525;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: #333;
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
`;

const Answer = styled.div`
  padding: 15px;
  background-color: #1c1c1c;
  border-left: 3px solid #e63946;
  margin-top: 10px;
  color: #adb5bd;
  border-radius: 0 8px 8px 0;
`;

const FAQ = () => {
    const [openedQuestions, setOpenedQuestions] = React.useState({});

    const toggleQuestion = (id) => {
        setOpenedQuestions({
            ...openedQuestions,
            [id]: !openedQuestions[id]
        });
    };

    const faqItems = [
        {
            id: 1,
            question: "Quanto tempo leva para receber meu pedido?",
            answer: "O tempo de entrega depende da sua localização. Normalmente, pedidos nacionais são entregues em 7-14 dias úteis. Para regiões mais remotas, pode levar até 21 dias úteis."
        },
        {
            id: 2,
            question: "Como rastrear meu pedido?",
            answer: "Após o envio do seu pedido, você receberá um e-mail com o código de rastreamento e instruções sobre como acompanhar o status da entrega."
        },
        {
            id: 3,
            question: "Posso cancelar ou alterar meu pedido?",
            answer: "Pedidos podem ser cancelados ou alterados em até 24 horas após a compra, desde que ainda não tenham sido enviados. Entre em contato com nosso suporte para solicitar alterações."
        },
        {
            id: 4,
            question: "Como funciona a política de devolução?",
            answer: "Aceitamos devoluções em até 30 dias após o recebimento do produto. O item deve estar em sua embalagem original e em perfeito estado. Consulte nossa página de Devoluções para mais detalhes."
        },
        {
            id: 5,
            question: "Qual é a forma de pagamento aceita?",
            answer: "Aceitamos cartões de crédito, débito, transferências bancárias, boleto e PIX. Todas as transações são seguras e criptografadas."
        },
        {
            id: 6,
            question: "Os produtos têm garantia?",
            answer: "Sim, todos os produtos possuem garantia mínima de 3 meses. Alguns itens podem ter garantia estendida conforme indicado na descrição do produto."
        },
        {
            id: 7,
            question: "Vocês enviam para fora do Brasil?",
            answer: "No momento, realizamos entregas apenas para endereços dentro do território brasileiro."
        }
    ];

    return (
        <FAQContainer>
            <PageTitle>Perguntas Frequentes</PageTitle>

            <FAQSection>
                {faqItems.map(item => (
                    <Question key={item.id} onClick={() => toggleQuestion(item.id)}>
                        <QuestionHeader>
                            {item.question}
                            <span>{openedQuestions[item.id] ? '−' : '+'}</span>
                        </QuestionHeader>

                        {openedQuestions[item.id] && (
                            <Answer>{item.answer}</Answer>
                        )}
                    </Question>
                ))}
            </FAQSection>
        </FAQContainer>
    );
};

export default FAQ;
