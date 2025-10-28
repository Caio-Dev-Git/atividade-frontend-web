# atividade-frontend-web
atividade 1 - HTML, 2-CSS, 3-JAVASCRIPT e 4-README DOCS.
Projeto ONG Esperança - Website Institucional

Este repositório contém o código-fonte completo do website institucional da ONG Esperança, uma organização dedicada à preservação ambiental e à conscientização sobre a importância de cuidar da natureza. O projeto foi desenvolvido do zero (from scratch), seguindo um layout planejado no Figma e implementado com HTML5, CSS3 e JavaScript puro (Vanilla JS).

O objetivo do projeto é criar um site moderno, visualmente atrativo e totalmente responsivo, garantindo uma experiência consistente para usuários em qualquer dispositivo.

Status do Projeto: Concluído (Versão 1.0)

Funcionalidades Principais

O site é uma Aplicação de Múltiplas Páginas (MPA) e inclui as seguintes seções e recursos:

Design Responsivo (Mobile-First)

O layout foi projetado inicialmente para dispositivos móveis e depois adaptado para tablets e desktops.

Menu de Navegação Interativo

Desktop: Menu com alinhamento padronizado e botão de destaque.

Mobile: Menu "hambúrguer" que desliza como painel lateral, controlado por JavaScript.

Cabeçalho Inteligente

O header se comporta de forma distinta dependendo da página e do dispositivo:

Mobile: Sólido e fixo (position: sticky) para fácil acesso.

Desktop (Páginas internas): Transparente e sobreposto à imagem hero (position: absolute), criando efeito visual moderno.

Páginas Desenvolvidas

Home: Introdução, seções de impacto, cards de valores e equipe.

Sobre: Layout em 3 colunas mostrando os pilares da ONG.

Projetos: Exibição de projetos em cards.

Blog: Grade de posts com informações de autor e paginação.

Doações: Formulário completo com seleção de valores e tipos de contribuição.

Cadastro: Formulário avançado com agrupamento lógico (fieldset) e validação de dados.

Formulários Avançados

Validação nativa do HTML5 (required, pattern, type="email").

Máscaras de input via JavaScript para CPF, telefone e CEP, melhorando a experiência do usuário.

🛠️ Tecnologias Utilizadas

O projeto foi construído sem frameworks, utilizando apenas os fundamentos da web:

HTML5: Uso de tags semânticas (<header>, <main>, <section>, <article>, <footer>).

CSS3:

Flexbox e Grid para layouts complexos.

Variáveis CSS (Custom Properties) para cores e fontes.

Media Queries para responsividade mobile-first.

Pseudo-elementos (::before) para overlays de seções hero.

JavaScript (ES6+):

Manipulação do DOM (querySelector, addEventListener).

classList.toggle() para o menu mobile.

Scripts de máscara de input para formulários.

📁 Estrutura de Arquivos
projeto-ong-esperanca/
│

│   ├── css/
│   │   ├── style.css         
│   │   ├── index.css         
│   │   ├── projetos.css      
│   │   ├── cadastro.css      
│   │   └── doacao.css        
│   │
│   ├── js/
│   │   ├── main.js          
│   │   ├── form.js           
│   │   └── ui.js            
│   │
│   └── images/
│       ├── logoprojetoong-p.jpeg
│       ├── favicon.logo.site.ico
│       ├── imagem2-ongm.jpg
│       ├── icons/
│       ├── blog/
│       └── projetos/
│
├── index.html
├── projetos.html
├── cadastro.html
├── doacao.html
└── README.md

CSS Global (global.css): Estrutura centralizada para header, footer, cores e tipografia, garantindo consistência em todas as páginas.

Resolução de Conflitos na Responsividade: Unificação das regras mobile em um bloco único para evitar conflitos entre display: none e display: flex em menus mobile.

Lógica do Header: Header sticky no mobile e transparente no desktop, implementado com min-width para sobrescrever corretamente o layout mobile sem afetá-lo.


