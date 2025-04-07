# Shippin - Loja de Dropshipping

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [npm](https://www.npmjs.com/) (normalmente vem com o Node.js)
- Editor de código (recomendado: [Visual Studio Code](https://code.visualstudio.com/))

## Sobre o Projeto

Shippin é uma loja de e-commerce com modelo de dropshipping, desenvolvida com React. O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela, desde smartphones até monitores de desktop.

## Características

- **Design Responsivo**: Interface adaptável para dispositivos móveis, tablets e desktops
- **Carrinho de Compras**: Gestão completa de produtos com persistência local
- **Notificações**: Feedback visual ao adicionar/remover produtos
- **Checkout**: Processo completo de finalização de compra

## Como Executar o Projeto

1. **Instale as dependências**:
   ```
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:
   ```
   npm start
   ```

3. **Acesse o site**:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## Responsividade

O site foi desenvolvido seguindo o princípio de Mobile First, garantindo uma experiência consistente em todos os dispositivos:

- **Layout Fluido**: Uso de unidades relativas (%, rem) e CSS Grid/Flexbox
- **Media Queries**: Adaptações específicas para diferentes breakpoints
- **Imagens Responsivas**: Otimizadas para carregamento rápido em conexões móveis
- **Touch-friendly**: Elementos interativos dimensionados para facilitar o toque em dispositivos móveis

## Estrutura de Arquivos

- `/src` - Código fonte do React
- `/public` - Arquivos estáticos
- `/src/components` - Componentes reutilizáveis
- `/src/pages` - Páginas principais da aplicação
- `/src/context` - Gerenciamento de estado global

## Tecnologias Utilizadas

- React.js
- React Router
- Styled Components
- React Toastify
