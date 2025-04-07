import React from 'react';
import styled from 'styled-components';

const ShippingContainer = styled.div`
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

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #252525;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 12px 15px;
  background-color: #333;
  color: #f8f9fa;
`;

const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #333;
`;

const Shipping = () => {
    return (
        <ShippingContainer>
            <PageTitle>Política de Envio</PageTitle>

            <Section>
                <SectionTitle>Prazos de Entrega</SectionTitle>
                <Paragraph>
                    Na Shippin, trabalhamos com parceiros logísticos confiáveis para garantir que seu pedido chegue em segurança e dentro do prazo estimado. Os prazos variam de acordo com a região de entrega.
                </Paragraph>

                <InfoTable>
                    <thead>
                        <TableRow>
                            <TableHeader>Região</TableHeader>
                            <TableHeader>Prazo Estimado</TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>Capitais e regiões metropolitanas</TableCell>
                            <TableCell>7 a 10 dias úteis</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Outras cidades</TableCell>
                            <TableCell>10 a 15 dias úteis</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Regiões remotas</TableCell>
                            <TableCell>15 a 21 dias úteis</TableCell>
                        </TableRow>
                    </tbody>
                </InfoTable>

                <Paragraph>
                    <strong>Importante:</strong> O prazo começa a ser contado após a confirmação de pagamento e pode variar em períodos de alta demanda.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Custos de Envio</SectionTitle>
                <Paragraph>
                    Os custos de envio são calculados com base no peso, dimensões do pacote e distância até o endereço de entrega.
                </Paragraph>
                <ListContainer>
                    <ListItem>Frete grátis para compras acima de R$ 300,00 para todo o Brasil.</ListItem>
                    <ListItem>Para compras abaixo desse valor, o frete será calculado no checkout.</ListItem>
                    <ListItem>Oferecemos opção de frete expresso com custo adicional para entregas mais rápidas.</ListItem>
                </ListContainer>
            </Section>

            <Section>
                <SectionTitle>Rastreamento de Pedidos</SectionTitle>
                <Paragraph>
                    Após o envio, você receberá um e-mail com o código de rastreamento e instruções para acompanhar seu pedido.
                    O status da entrega também pode ser verificado na área "Meus Pedidos" após fazer login em sua conta.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>Problemas na Entrega</SectionTitle>
                <Paragraph>
                    Se seu pedido não for entregue dentro do prazo previsto ou se houver qualquer problema durante o processo de entrega,
                    entre em contato com nosso suporte em até 48 horas para que possamos resolver a situação da melhor forma possível.
                </Paragraph>
            </Section>
        </ShippingContainer>
    );
};

export default Shipping;
