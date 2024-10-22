# 🤖 Chatbot Frontend

## 📋 Índice

- [🤖 Chatbot Frontend](#-chatbot-frontend)
  - [📋 Índice](#-índice)
  - [🔍 Visão Geral](#-visão-geral)
  - [✨ Características](#-características)
  - [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
  - [📋 Pré-requisitos](#-pré-requisitos)
  - [⚙️ Instalação](#️-instalação)
  - [🚀 Uso](#-uso)
  - [📂 Estrutura do Projeto](#-estrutura-do-projeto)
    - [📦 Componentes Principais](#-componentes-principais)
    - [🔧 Serviços](#-serviços)
  - [🤝 Contribuição](#-contribuição)
  - [📞 Contato](#-contato)

## 🔍 Visão Geral

O Chatbot Frontend é uma aplicação desenvolvida em Angular que permite aos usuários interagirem com um chatbot. A interface é intuitiva e responsiva, proporcionando uma experiência de usuário agradável tanto em dispositivos móveis quanto em desktops. O chatbot utiliza Markdown para formatar suas respostas, garantindo mensagens claras e bem estruturadas.

## ✨ Características

- **Interface Intuitiva**: Design limpo e moderno usando Angular Material.
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela.
- **Formatação de Mensagens**: Utilização da biblioteca marked para converter Markdown em HTML seguro.
- **Indicador de Carregamento**: Spinner para indicar que o chatbot está processando a resposta.
- **Acessibilidade**: Elementos interativos com labels ARIA para melhor suporte a leitores de tela.
- **Navegação com Query Params**: Permite definir o prompt do sistema antes de iniciar a conversa.

## 🛠️ Tecnologias Utilizadas

- Angular - Framework principal.
- Angular Material - Componentes de UI.
- TypeScript - Linguagem de programação.
- marked - Biblioteca para converter Markdown em HTML.
- RxJS - Programação reativa.
- DOM Sanitizer - Segurança na renderização de HTML.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina as seguintes ferramentas:

- Node.js (versão 14 ou superior)
- Angular CLI (versão 14 ou superior)

## ⚙️ Instalação

1. **Clone o Repositório**

    ```bash
    git clone https://github.com/seu-usuario/chatbot-frontend.git
    ```

2. **Navegue para o Diretório do Projeto**

    ```bash
    cd chatbot-frontend
    ```

3. **Instale as Dependências**

    ```bash
    npm install
    ```

## 🚀 Uso

1. **Inicie o Servidor de Desenvolvimento**

    ```bash
    ng serve --open
    ```

    O comando acima iniciará o servidor de desenvolvimento e abrirá automaticamente a aplicação no seu navegador padrão em [http://localhost:4200/](http://localhost:4200/).

2. **Defina o Prompt do Sistema**
    - Na página inicial, insira o prompt do sistema que guiará as respostas do chatbot.
    - Clique em "Iniciar Conversa" para navegar para a interface de chat.

3. **Interaja com o Chatbot**
    - Digite suas mensagens na caixa de entrada e envie.
    - O chatbot responderá com mensagens formatadas em Markdown.

## 📂 Estrutura do Projeto

```
angular.json
package.json
public/
README.md
src/
    app/
        app-routing.module.ts
        app.component.css
        app.component.html
        app.component.spec.ts
        app.component.ts
        app.config.ts
        app.routes.ts
        chat/
            chat.component.css
            chat.component.html
            chat.component.spec.ts
            chat.component.ts
        home/
            home.component.css
            home.component.html
            home.component.spec.ts
            home.component.ts
        services/
            chat.service.ts
    assets/
    index.html
    main.ts
    styles.css
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

### 📦 Componentes Principais

- **HomeComponent**
    - **Descrição**: Página inicial onde o usuário define o prompt do sistema.
    - **Arquivos**:
        - `home.component.ts`
        - `home.component.html`
        - `home.component.css`

- **ChatComponent**
    - **Descrição**: Interface de chat onde ocorre a interação com o chatbot.
    - **Arquivos**:
        - `chat.component.ts`
        - `chat.component.html`
        - `chat.component.css`

### 🔧 Serviços

- **ChatService**
    - **Descrição**: Serviço responsável por gerenciar a comunicação com a API do chatbot.
    - **Arquivo**: `chat.service.ts`

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, por favor, siga os passos abaixo:

1. **Fork este Repositório**

2. **Crie uma Branch para sua Feature**

    ```bash
    git checkout -b feature/NovaFeature
    ```

3. **Faça Commit das Suas Alterações**

    ```bash
    git commit -m "Adiciona nova feature"
    ```

4. **Push para a Branch**

    ```bash
    git push origin feature/NovaFeature
    ```

5. **Abra um Pull Request**

## 📞 Contato

Se você tiver qualquer dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- **Nome**: João Lucas Ferreira
- **Email**: joaoaraxaiba@gmail.com
- **LinkedIn**: [João Lucas Ferreira](https://www.linkedin.com/in/johnlaff/)
