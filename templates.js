/* ===========================================================
   TEMPLATES COMPLETOS
   =========================================================== */

const templates = {

  /* ===========================================================
     Biblioteca JavaScript Moderna
  =========================================================== */
  lib: `# 📦 Biblioteca JavaScript Moderna

Uma estrutura completa, pronta para publicação no npm, com testes, build e suporte a TypeScript.

---

## 🧰 Tecnologias
- Node.js
- ESBuild (bundle + transpile)
- Jest (testes)
- TypeScript (opcional)
- ESLint + Prettier

---

## 📁 Estrutura do Projeto
\`\`\`
📦 minha-lib
├── src/
│   ├── index.js
│   └── utils/
├── tests/
│   └── index.test.js
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

---

## 🚀 Scripts
\`\`\`bash
npm install
npm run build
npm run test
npm publish
\`\`\`

---

## 📄 Exemplo de Uso
\`\`\`js
import { exemplo } from "minha-lib";

console.log(exemplo("Olá mundo!"));
\`\`\`

---

## ⭐ Recursos Inclusos
- Build otimizado
- Suporte a CommonJS e ESModules
- Testes automatizados
- Configuração de qualidade de código

`,

  /* ===========================================================
     CLI Aplicação Linha de Comando
  =========================================================== */
  cli: `# 🔧 Aplicação CLI Profissional

Ferramenta CLI estruturada com múltiplos comandos, flags, ajuda automática e suporte a plugins.

---

## 🧰 Tecnologias
- Node.js
- Commander.js
- Chalk (cores no terminal)
- Ora (loaders)

---

## 📁 Estrutura do Projeto
\`\`\`
📦 minha-cli
├── bin/
│   └── cli.js
├── src/
│   ├── commands/
│   └── utils/
└── package.json
\`\`\`

---

## 🚀 Instalação Global
\`\`\`bash
npm i -g minha-cli
\`\`\`

---

## ▶ Exemplo de Uso
\`\`\`bash
minha-cli iniciar
minha-cli gerar --nome projeto
minha-cli --help
\`\`\`

---

## ⭐ Funcionalidades
- Auto-help
- Argumentos e flags
- Suporte a subcomandos
- Saídas coloridas
- Loader bonito

`,

  /* ===========================================================
     Projeto Web
  =========================================================== */
  web: `# 🌐 Projeto Web Completo

Aplicação moderna com UI estilosa, API integrada e autenticação.

---

## 🛠 Tecnologias
- React + Vite
- TailwindCSS
- Node.js API
- Prisma ORM
- JWT Authentication

---

## 📁 Estrutura Recomendada
\`\`\`
📦 projeto-web
├── frontend/
│   ├── src/
│   ├── public/
│   └── index.html
├── backend/
│   ├── src/
│   └── prisma/
└── package.json
\`\`\`

---

## ▶ Como Rodar
\`\`\`bash
npm install
npm run dev
\`\`\`

---

## ⭐ Inclui:
- Proteção de rotas
- Login + Registro
- Tema escuro
- CRUD de exemplo
- API REST já configurada

`,

  /* ===========================================================
     API REST Completa
  =========================================================== */
  api: `# 🧪 API REST Completa e Profissional

API com validação, segurança, Docker e Swagger.

---

## 🛠 Tecnologias
- Node.js
- Express
- Zod (validação)
- Swagger (docs)
- JWT
- Prisma
- Docker

---

## 📁 Estrutura
\`\`\`
📦 api
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   └── prisma/
└── docker-compose.yml
\`\`\`

---

## ▶ Rodar Projeto
\`\`\`bash
docker-compose up --build
\`\`\`

---

## ⭐ Funcionalidades Inclusas
- Autenticação JWT
- Documentação automática
- Middleware de erros
- Logs
- Exemplo CRUD completo

`,

  /* ===========================================================
     Microserviço
  =========================================================== */
  micro: `# ⚙️ Microserviço Completo

Microserviço isolado, escalável e com comunicação via filas.

---

## 🛠 Tecnologias
- Node.js
- RabbitMQ
- Redis (cache)
- Prometheus (monitoramento)

---

## 📁 Estrutura
\`\`\`
📦 microservice
├── src/
│   ├── workers/
│   ├── queues/
│   └── controllers/
└── docker-compose.yml
\`\`\`

---

## ▶ Exemplo de Endpoint
\`\`\`http
POST /task
Content-Type: application/json

{
  "type": "email",
  "payload": { ... }
}
\`\`\`

---

## ⭐ Recursos
- Fila de mensagens
- Workers paralelos
- Retry automático
- Dashboard Prometheus

`,

  /* ===========================================================
     BOT DISCORD
  =========================================================== */
  discord: `# 🤖 Bot Discord Profissional

Bot completo com comandos, eventos, logs e banco de dados.

---

## 🛠 Tecnologias
- Node.js
- Discord.js v14
- Prisma ORM
- Docker
- Cooldowns + Permissões

---

## 📁 Estrutura
\`\`\`
📦 discord-bot
├── src/
│   ├── commands/
│   ├── events/
│   └── database/
└── docker-compose.yml
\`\`\`

---

## ▶ Rodar
\`\`\`bash
npm install
docker-compose up -d
npm run start
\`\`\`

---

## ⭐ Inclui
- Slash Commands
- Logs de guilds/usuários
- Anti-crash
- Handler automático
- Painel web opcional

`,

  /* ===========================================================
     Landing Page
  =========================================================== */
  landing: `# 🖥️ Landing Page Moderna

Landing de alta performance, SEO e responsividade.

---

## 🛠 Tecnologias
- HTML + TailwindCSS
- Alpine.js
- SEO otimizado

---

## Estrutura
\`\`\`
landing
├── index.html
├── assets/
└── scripts/
\`\`\`

---

## ⭐ Recursos
- Hero section
- Botões CTA
- Animações suaves
- Modo claro/escuro
- SEO + OpenGraph prontos

`,

  /* ===========================================================
     Mobile App
  =========================================================== */
  mobile: `# 📱 Aplicativo Mobile Completo

Aplicativo com Expo + navegação + integração API.

---

## 🛠 Tecnologias
- React Native
- Expo
- React Navigation
- Axios

---

## Estrutura
\`\`\`
mobile
├── src/
│   ├── screens/
│   ├── components/
│   └── services/
└── App.js
\`\`\`

---

## Rodar
\`\`\`bash
npx expo start
\`\`\`

---

## ⭐ Features
- Tela de login
- Tema claro/escuro
- Drawer + Stack Navigator
- Consumo de API REST

`,

  /* ===========================================================
     Autenticação
  =========================================================== */
  auth: `# 🔐 Sistema de Autenticação Completo

Sistema seguro com JWT + refresh token + recuperação de senha.

---

## Tecnologias
- Node.js
- Prisma
- Bcrypt
- JWT
- Nodemailer

---

## Fluxo
\`\`\`
Login → Refresh Token → Expiração → Renovação
\`\`\`

---

## Endpoints
\`\`\`http
POST /auth/login
POST /auth/register
POST /auth/refresh
POST /auth/recover
\`\`\`

---

## ⭐ Recursos
- Hash seguro
- Tokens independentes
- Banco Prisma completo
- Rate limit

`,

  /* ===========================================================
     Ecommerce
  =========================================================== */
  ecommerce: `# 🛒 E-commerce Completo

Loja com carrinho, checkout e painel admin.

---

## Tecnologias
- Next.js
- Stripe
- Prisma
- NextAuth
- Tailwind

---

## Pastas
\`\`\`
ecommerce
├── app/
├── components/
├── prisma/
└── api/
\`\`\`

---

## Scripts
\`\`\`bash
npm install
npm run dev
\`\`\`

---

## ⭐ Recursos
- Checkout Stripe
- Painel admin
- Carrinho persistente
- Login social
- Listagem + filtros

`,

  /* ===========================================================
     Dashboard
  =========================================================== */
  dashboard: `# 📊 Dashboard Administrativo Completo

Admin moderno com tabelas dinâmicas e gráficos.

---

## Tecnologias
- React
- Recharts
- Tailwind
- Axios

---

## Estrutura
\`\`\`
dashboard
├── components/
├── charts/
└── services/
\`\`\`

---

## Scripts
\`\`\`bash
npm install
npm run dev
\`\`\`

---

## ⭐ Recursos
- Gráficos dinâmicos
- Filtros avançados
- Tabela com paginação
- API integrada

`
};


/* ===========================================================
   ELEMENTOS DO DOM
   =========================================================== */

const previewSection = document.getElementById("generated-template");
const output = document.getElementById("template-output");
const copyBtn = document.getElementById("copy-template");

/* ===========================================================
   EVENTO: GERAR TEMPLATE AO CLICAR
   =========================================================== */

document.querySelectorAll(".template-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.parentElement.dataset.template;

    if (!type || !templates[type]) return;

    // Inserir template no preview
    output.textContent = templates[type];

    // Exibir seção de preview
    previewSection.classList.remove("hidden");
    previewSection.classList.add("show");

    // Scroll suave até a seção
    window.scrollTo({
      top: previewSection.offsetTop - 40,
      behavior: "smooth"
    });
  });
});

/* ===========================================================
   COPIAR TEMPLATE
   =========================================================== */

copyBtn.addEventListener("click", () => {
  if (!output.textContent.trim()) return;

  navigator.clipboard.writeText(output.textContent);

  copyBtn.textContent = "Copiado!";
  copyBtn.classList.add("copied");

  setTimeout(() => {
    copyBtn.textContent = "Copiar";
    copyBtn.classList.remove("copied");
  }, 1500);
});
