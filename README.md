# API de Gerenciamento de Tarefas - Projeto1-Api-Aprofunda

## Descrição

Esta é uma API simples para gerenciamento de tarefas, feita com Node.js e Express.  
Permite criar, listar, buscar, atualizar e deletar tarefas armazenadas em memória.

---

## Como rodar a API

1. Clone o repositório:  
```bash
git clone https://github.com/byEduarda/Projeto1-Api-Aprofunda.git


2. Entre na pasta API:
```bash
cd Projeto1-Api-Aprofunda/API


3. Instale as dependências:
```bash
npm install


4. Inicie o servidor:
```bash
npm start


A API estará rodando em:
http://localhost:3000



Funcionalidades da API
| Método | Rota        | Descrição                   |
| ------ | ----------- | --------------------------- |
| GET    | /tasks      | Lista todas as tarefas      |
| GET    | /tasks/\:id | Busca uma tarefa pelo ID    |
| POST   | /tasks      | Cria uma nova tarefa        |
| PUT    | /tasks/\:id | Atualiza uma tarefa pelo ID |
| DELETE | /tasks/\:id | Deleta uma tarefa pelo ID   |
