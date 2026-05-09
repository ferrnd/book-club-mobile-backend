# 📚 Clube do Livro — *Olhos D'Água* · Backend

> **Projeto Integrador SENAI/SESI** — API REST bilíngue (PT/EN) para o aplicativo mobile do Clube do Livro, focado na obra *Olhos D'Água* de Conceição Evaristo.

---

## 📖 Sobre o Projeto

Este repositório é o backend do **aplicativo mobile** desenvolvido pela equipe no Projeto Integrador entre **SENAI** (Desenvolvimento de Sistemas) e **SESI** (Língua Portuguesa e Inglês).

O objetivo é oferecer uma plataforma digital interativa para o estudo literário da obra **"Olhos D'Água"**, de Conceição Evaristo, com foco em preparar alunos para o vestibular por meio de conteúdos organizados, acessíveis e em dois idiomas.

O projeto é dividido em **5 equipes** (4 Web + 1 Mobile). Esta equipe é responsável pelo **mobile**, consumindo esta API com React Native.

---

## 🛠️ Stack

| Tecnologia | Finalidade |
|---|---|
| **Node.js + Express 5** | Servidor e API REST |
| **Prisma ORM** | Acesso ao banco de dados |
| **PostgreSQL (Supabase)** | Banco de dados em nuvem |
| **dotenv** | Variáveis de ambiente |
| **cors** | Liberação de acesso cross-origin |
| **nodemon** | Hot-reload no desenvolvimento |

---

## 🗂️ Estrutura de Pastas

```
book-club-mobile-backend/
├── prisma/
│   ├── schema.prisma       # Modelos do banco de dados
│   └── seed.js             # Dados iniciais
│
├── src/
│   ├── server.js           # Ponto de entrada da aplicação
│   ├── lib/services/
│   │   └── prismaClient.js # Instância compartilhada do Prisma
│   ├── models/             # Acesso ao banco (classes ES6)
│   ├── controllers/        # Lógica de negócio e validações
│   └── routes/             # Definição dos endpoints
│
└── images/                 # Imagens estáticas (capa, autor, personagens, membros)
```

O projeto segue uma arquitetura em **3 camadas**: `Route → Controller → Model`.

---

## 🌍 Bilinguismo (PT 🇧🇷 / EN 🇺🇸)

Um dos requisitos centrais do projeto é o suporte completo a **dois idiomas**. Todos os campos de texto no banco de dados existem em versão duplicada:

- Sufixo `_pt` → conteúdo em **Português**
- Sufixo `_en` → conteúdo em **Inglês**

**Exemplo no banco:**
```
titulo_pt  = "A Gente Combinamos de Não Esquecer"
titulo_en  = "We Agreed Not to Forget"

resumo_pt  = "Um conto sobre memória e identidade..."
resumo_en  = "A short story about memory and identity..."
```

O conteúdo em inglês foi **adaptado** pela equipe — não foi utilizada tradução automática, conforme exigência dos professores do SENAI.

O aplicativo mobile utilizará a preferência de idioma do usuário para decidir qual campo exibir.

---

## 🔗 Rotas da API

```
GET     /livro                  → Dados da obra principal
GET     /livro/:id

GET     /autor                  → Informações sobre Conceição Evaristo
GET     /autor/:id
PUT     /autor/:id

GET     /contos                 → Contos da obra
GET     /contos/:id
PUT     /contos/:id

GET     /personagens            → Personagens dos contos
POST    /personagens
GET     /personagens/:id
PUT     /personagens/:id
DELETE  /personagens/:id

GET     /citacao                → Trechos marcantes da obra
GET     /citacao/:id
PUT     /citacao/:id

GET     /quiz                   → Quizes sobre a obra
POST    /quiz
GET     /quiz/:id
PUT     /quiz/:id
DELETE  /quiz/:id

GET     /dicas                  → Dicas de vestibular e curiosidades
POST    /dicas
GET     /dicas/:id
PUT     /dicas/:id
DELETE  /dicas/:id

GET     /videoaula              → Videoaulas produzidas pela equipe
GET     /videoaula/:id
PUT     /videoaula/:id

GET     /membros                → Integrantes da equipe
GET     /membros/:id
PUT     /membros/:id

GET     /projeto                → Apresentação e objetivo do projeto
GET     /projeto/:id
PUT     /projeto/:id
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz com:

```env
PORT=3000

DATABASE_URL="postgresql://usuario:senha@localhost:porta/banco"
```
---

## 🚀 Como Rodar

```bash
# Instale as dependências
npm install

# Inicializar Prisma
npx prisma init --datasource-provider postgresql

# Crie as tabelas no banco de dados
npx prisma migrate dev --name init

# Gere o Prisma Client
npx prisma generate

# Popule o banco com dados iniciais
node prisma/seed.js

# Inicie o servidor em modo desenvolvimento || abra o prisma studio para ver o banco de dados
npm run dev  ||  npx prisma studio
```
---

## 👥 Equipe 
| Integrante | Curso | Função Principal |
| :--- | :--- | :--- |
| Fernando Santos | Desenvolvimento de Sistemas | Backend / DB / Frontend / Figma / Trello |
| Maria Eduarda Andrade| Desenvolvimento de Sistemas | Backend / DB / Figma|
| Cauã Tupinambá | Desenvolvimento de Sistemas | Backend / Trello |
| João Pedro Piva | Desenvolvimento de Sistemas | Backend / Trello|
| Daniel Casalli | Desenvolvimento de Sistemas | Frontend / Figma|
| Ana Clara Cremasco| Desenvolvimento de Sistemas | Frontend / Figma |

---


