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

## Deploy na Vercel

Siga os passos abaixo para fazer o deploy do seu projeto na Vercel:

1. **Crie uma conta na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub, GitLab, ou crie uma conta com e-mail

2. **Importe o projeto**
   - Na dashboard da Vercel, clique em "Add New..." e depois "Project"
   - Selecione seu repositório Git onde você fez upload do projeto
   - Se não aparecer, clique em "Configure GitHub App" para dar acesso da Vercel ao repositório

3. **Configure o projeto**
   - **Framework Preset**: Selecione "Create React App"
   - **Build and Output Settings**: Deixe as configurações padrão
   - **Environment Variables**: Adicione caso necessário (não obrigatório para este projeto)

4. **Deploy**
   - Clique em "Deploy"
   - A Vercel fará o build e deploy do projeto automaticamente

5. **Acesse o site**
   - Após finalizado o deploy, clique no link gerado para acessar seu site online
   - Por padrão, será algo como: `seu-projeto.vercel.app`

6. **Conecte seu domínio (opcional)**
   - Na página do projeto na Vercel, vá para a aba "Settings" e depois "Domains"
   - Adicione o domínio desejado e siga as instruções

O deploy na Vercel é contínuo. Cada vez que você fizer um push para o repositório, uma nova versão será automaticamente implantada.
