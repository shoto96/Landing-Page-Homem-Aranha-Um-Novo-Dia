# 🕷️ Homem-Aranha: Um Novo Dia — Landing Page

Uma landing page imersiva e cinematográfica para o filme *Homem-Aranha: Um Novo Dia*, desenvolvida com HTML5, CSS3 e JavaScript vanilla. Design moderno, animações fluidas e totalmente responsiva.

---

## 🚀 Visão Geral

Esta landing page foi criada para promover o filme *Spider-Man: Brand New Day* (2026), apresentando um design único que evoca a sensação de estar dentro do universo do Homem-Aranha. Com efeitos visuais dinâmicos, interatividade e uma estética cinematográfica, a página engaja os visitantes e os convida a explorar o conteúdo.

### Recursos Principais

- **🎬 Hero Section Cinematográfica** — Vídeo de fundo, título animado com efeito de digitação e contador regressivo para a estreia.
- **📖 Sinopse Imersiva** — Seção dividida com poster e texto, destacando o enredo do filme.
- **🎭 Elenco Interativo** — Cards de elenco com efeitos hover avançados (glow, shine, zoom) e links para redes sociais.
- **🎥 Galeria de Imagens** — Lightbox interativo com navegação por teclado e controles de desktop/mobile.
- **📽️ Trailer Integrado** — Player de vídeo com imagem de capa, play button animado e barra de progresso.
- **✨ Animações e Efeitos Visuais** — Scroll animations, parallax, partículas de teia de aranha, glow de fundo e muito mais.
- **📱 Design Responsivo** — Layout adaptável para mobile, tablet e desktop, com menu hambúrguer otimizado para dispositivos móveis.
- **🍔 Navbar Mobile** — Menu lateral deslizante com overlay, abertura/fechamento suave e bloqueio de scroll.

---

## 📁 Estrutura do Projeto

```
spiderman-landing/
├── index.html              # Página principal (Single Page)
├── README.md               # Este arquivo
├── css/
│   └── style.css           # Folha de estilos principal (variáveis, componentes, responsividade)
├── js/
│   └── main.js             # Lógica JavaScript (animações, interatividade, menu mobile)
└── images/
    ├── favicon.png         # Ícone do site (aranha)
    ├── poster.jpg          # Poster oficial do filme (hero/sinopse)
    ├── gallery-1.jpg       # Imagens da galeria
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    ├── gallery-6.jpg
    ├── tom-holland.jpg     # Foto do ator (elenco)
    ├── zendaya.jpg
    ├── sadie-sink.jpg
    ├── jk-simmons.jpg
    ├── jacob-batalon.jpg
    ├── mark-ruffalo.jpg
    └── trailer-thumb.jpg   # Capa do vídeo do trailer
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Variáveis CSS, Flexbox, Grid, animações, transições e media queries |
| **JavaScript Vanilla** | Lógica interativa sem dependências externas |
| **Google Fonts** | Montserrat (corpo) e Bebas Neue (títulos) |
| **Font Awesome** | Ícones sociais e de interface (CDN) |
| **AOS Library** | Animações ao scroll (CDN) |

### Cores do Projeto

| Variável | Valor | Uso |
|----------|-------|-----|
| `--primary` | `#d00000` | Vermelho Homem-Aranha (destaques, botões) |
| `--accent` | `#48cae4` | Azul elétrico (links, highlights) |
| `--gold` | `#ffba08` | Dourado (estrelas, detalhes) |
| `--dark` | `#03071e` | Azul escuro profundo (fundo) |

---

## ⚡ Instalação e Execução

O projeto é uma aplicação estática (frontend puro), não requer servidor backend, banco de dados ou dependências de pacote. Basta um navegador moderno.

### 1. Download do Projeto

Baixe o arquivo `spiderman-landing.zip` e extraia em uma pasta de sua preferência.

```bash
# Comando de extração (Linux/macOS)
unzip spiderman-landing.zip

# Ou (Windows PowerShell)
Expand-Archive -Path spiderman-landing.zip -DestinationPath .\spiderman-landing
```

### 2. Executar Localmente

#### Opção A — Abrir diretamente no navegador

Navegue até a pasta do projeto e abra o arquivo `index.html` em qualquer navegador:

- **Windows:** Clique duplo em `index.html` ou arraste para o navegador
- **macOS:** `open index.html` no Terminal
- **Linux:** `xdg-open index.html` no Terminal

#### Opção B — Usar um servidor local simples (recomendado)

Para melhor experiência (especialmente se quiser testar em outros dispositivos da rede):

```bash
# Python 3 (disponível em Linux/macOS por padrão)
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (se tiver npm instalado)
npx serve .

# PHP (se tiver PHP instalado)
php -S localhost:8000
```

Depois, acesse no navegador: `http://localhost:8000`

### 3. Navegação e Uso

- **Desktop:** Use a navbar fixa no topo para navegar entre as seções (Início, Sinopse, Elenco, Galeria, Trailer, Estreia).
- **Mobile:** Clique no ícone de hambúrguer (☰) no canto superior direito para abrir o menu lateral. Clique fora, em um link ou pressione **Esc** para fechar.
- **Galeria:** Clique em qualquer imagem para abrir o lightbox. Use as setas ← → ou toque nas laterais para navegar. Pressione **Esc** ou clique em ✕ para fechar.
- **Trailer:** Clique no botão play ▶ para iniciar o vídeo do trailer.

---

## 🎯 Melhorias Recentes

### Menu Mobile (Hambúrguer)
- Botão de menu animado (3 barras → X) ativo em telas ≤ 768px
- Menu lateral com slide-in suave e overlay escuro com blur
- Fechamento inteligente: clique em link, overlay, botão ou tecla **Esc**
- Scroll do body bloqueado enquanto o menu estiver aberto

### Hover Aprimorado nos Cards de Elenco
- Glow vermelho dinâmico ao passar o mouse (`box-shadow` animado)
- Efeito **shine** (brilho diagonal prateado) via pseudo-elemento
- Zoom suave na imagem (`scale(1.05)` no card, `scale(1.15)` na imagem)
- Ícones sociais aparecem com fade-in e slide-up no hover

---

## 🌐 Navegadores Suportados

| Navegador | Versão Mínima | Suporte |
|-----------|---------------|---------|
| Chrome | 90+ | ✅ Completo |
| Firefox | 88+ | ✅ Completo |
| Safari | 14+ | ✅ Completo |
| Edge | 90+ | ✅ Completo |
| Opera | 76+ | ✅ Completo |
| Mobile Safari (iOS) | 14+ | ✅ Completo |
| Chrome Mobile | 90+ | ✅ Completo |

---

## 📝 Notas Técnicas

- **Single Page Application (SPA):** Toda a navegação ocorre na mesma página via âncoras (`#section`).
- **Smooth Scroll:** A navegação por âncoras utiliza scroll suave com animação personalizada.
- **Imagens Locais:** Todas as imagens estão no diretório `images/` e são referenciadas localmente.
- **Sem Dependências de Build:** O projeto não utiliza Webpack, Vite, npm ou outros bundlers. Pronto para usar.
- **Acessibilidade:** Estrutura semântica HTML5, atributos ARIA, foco visível e navegação por teclado.

---

## 🖼️ Preview das Seções

1. **Hero:** Vídeo de fundo, título animado, contador regressivo e botão CTA
2. **Sinopse:** Poster do filme + texto narrativo com fundo escuro e glow azul
3. **Elenco:** Grid de 6 cards com fotos, nomes e redes sociais (hover interativo)
4. **Galeria:** Grid de 6 imagens com lightbox integrado
5. **Trailer:** Player de vídeo com capa, play button e controles
6. **Estreia:** Seção final com logo, data de lançamento e assinatura de newsletter

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e demonstrativos. Imagens e referências ao universo *Homem-Aranha* são propriedade da **Marvel Studios** e **Sony Pictures**.

---

**Desenvolvido com 🕸️ e paixão pelo universo Marvel.**

*Se precisar de suporte ou quiser contribuir, fique à vontade para abrir uma issue!*