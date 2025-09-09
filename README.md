# 🏢 Gestão Empresarial - Dashboard com IA

Sistema moderno de gestão empresarial com dashboard interativo e chatbot inteligente, desenvolvido como projeto acadêmico da Etec Fernando Prestes.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React.js** com Vite
- **Bootstrap 5** para UI
- **Chart.js** para gráficos
- **Axios** para requisições HTTP

### Backend  
- **Node.js** com Express
- **MySQL** para banco de dados
- **JWT** para autenticação

### IA
- **Dialogflow** para chatbot inteligente
- **Python** com Flask (próxima implementação)

## 📋 Funcionalidades

### ✅ Implementadas
- **Dashboard** com métricas empresariais
- **Gestão de Usuários** com CRUD completo
- **Chatbot IA** com respostas inteligentes
- **Design Responsivo** com tema escuro
- **API REST** integrada

### 🚧 Em Desenvolvimento
- Gráficos interativos com Chart.js
- Autenticação JWT
- Integração com Dialogflow real
- Análises preditivas com Python

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 16+
- MySQL 8+
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/gestao-empresarial.git
cd gestao-empresarial
```

### 2. Backend
```bash
cd backend
npm install
npm start
```
O backend estará em: http://localhost:3001

### 3. Frontend
```bash
cd frontend/gestao-dashboard
npm install
npm run dev
```
O frontend estará em: http://localhost:3000

### 4. Banco de Dados
Execute o script SQL em backend/database.sql

```bash
CREATE DATABASE gestao_empresarial;
USE gestao_empresarial;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(255)
);

INSERT INTO usuarios (nome, email, senha) 
VALUES ("Teste", "teste@email.com", "1234");
```

## 🎯 Como Usar
1. *Dashboard:* Visualize métricas empresariais em tempo real
2. *Usuários:* Gerencie usuários do sistema com operações CRUD
3. *Chatbot:* Interaja com o assistente virtual para suporte

**Exemplos de Comandos para o Chatbot:**
- "Oi" / "Olá"
- "Sobre a empresa"
- "Status do pedido"
- "Preciso de ajuda"

## 🤝 Desenvolvimento
**Metodologia**
- Desenvolvimento Incremental
- Componentes React Modulares
- API RESTful
- Design Responsivo

**Próximas Etapas**
- Integração com Dialogflow API
- Implementação de gráficos com Chart.js
- Sistema de autenticação JWT
- Análises preditivas com Python

### 👥 Feito por:
Beatriz de Andrade Leite

### 📄 Licença
Este projeto foi desenvolvido para fins acadêmicos na Etec Fernando Prestes - Extensão Fatec.

### 📞 Contato
Para mais informações sobre o projeto, entre em contato com a equipe de desenvolvimento.
