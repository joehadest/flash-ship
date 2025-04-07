import React from 'react';
import styled from 'styled-components';

const ReturnsContainer = styled.div`
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

const StepContainer = styled.div`
  margin: 30px 0;
`;

const Step = styled.div`
  display: flex;
  margin-bottom: 20px;
  background-color: #252525;
  padding: 20px;
  border-radius: 8px;
`;

const StepNumber = styled.div`
  background-color: #e63946;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 20px;
  flex-shrink: 0;
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const StepDescription = styled.p`
  color: #adb5bd;
  line-height: 1.5;
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

const Returns = () => {
    return (
        <ReturnsContainer>
            <PageTitle>Política de Devoluções</PageTitle>

            <Section>
                <SectionTitle>Nossa Garantia</SectionTitle>
                <Paragraph>
                    Na Shippin, queremos que você tenha total satisfação com suas compras. Por isso, todos os produtos têm garantia
                    de qualidade e podem ser devolvidos ou trocados em caso de defeitos, danos durante o transporte ou se o produto
                    recebido for diferente do anunciado.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Prazo para Devoluções</SectionTitle>
                <Paragraph>
                    Você tem até <strong>30 dias</strong> após o recebimento do produto para solicitar uma devolução ou troca.
                    Para itens com defeito, a garantia pode ser estendida conforme especificado na descrição do produto.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Como Solicitar uma Devolução</SectionTitle>
                <StepContainer>
                    <Step>
                        <StepNumber>1</StepNumber>
                        <StepContent>
                            <StepTitle>Entre em contato conosco</StepTitle>
                            <StepDescription>
                                Envie um e-mail para suporte@shippin.com ou use o formulário de contato em nosso site,
                                informando o número do pedido e o motivo da devolução.
                            </StepDescription>
                        </StepContent>
                    </Step>

                    <Step>
                        <StepNumber>2</StepNumber>
                        <StepContent>
                            <StepTitle>Aguarde a confirmação</StepTitle>
                            <StepDescription>
                                Nossa equipe analisará seu pedido e enviará instruções detalhadas sobre como proceder com a devolução.
                            </StepDescription>
                        </StepContent>
                    </Step>

                    <Step>
                        <StepNumber>3</StepNumber>
                        <StepContent>
                            <StepTitle>Envie o produto</StepTitle>
                            <StepDescription>
                                Embale o produto na embalagem original (ou equivalente) e envie para o endereço fornecido.
                                Dependendo do motivo da devolução, podemos fornecer uma etiqueta de devolução pré-paga.
                            </StepDescription>
                        </StepContent>
                    </Step>

                    <Step>
                        <StepNumber>4</StepNumber>
                        <StepContent>
                            <StepTitle>Receba o reembolso ou produto substituto</StepTitle>
                            <StepDescription>
                                Após recebermos e inspecionarmos o item devolvido, processaremos o reembolso ou enviaremos
                                um produto substituto conforme solicitado.
                            </StepDescription>
                        </StepContent>
                    </Step>
                </StepContainer>
            </Section>

            <Section>
                <SectionTitle>Condições para Devolução</SectionTitle>
                <Paragraph>
                    Para que a devolução seja aceita, os produtos devem ser devolvidos:
                </Paragraph>
                <ListContainer>
                    <ListItem>Em suas embalagens originais</ListItem>
                    <ListItem>Com todas as etiquetas e acessórios incluídos</ListItem>
                    <ListItem>Sem sinais de uso além do necessário para teste</ListItem>
                    <ListItem>Acompanhados da nota fiscal de compra</ListItem>
                </ListContainer>
            </Section>

            <Section>
                <SectionTitle>Reembolsos</SectionTitle>
                <Paragraph>
                    Os reembolsos serão processados em até 10 dias úteis após o recebimento e inspeção do produto devolvido.
                    O valor será creditado utilizando o mesmo método de pagamento usado na compra original.
                </Paragraph>
                <Paragraph>
                    <strong>Nota:</strong> O valor do frete de devolução não será reembolsado, exceto em casos de produtos com defeito
                    ou enviados incorretamente.
                </Paragraph>
            </Section>
        </ReturnsContainer>
    );
};

export default Returns;
