![Demonstração](https://github.com/pedrromg01/MVC_Lista_de_Tarefa/blob/main/gif.gif)

# 🗂️ Lista de Tarefas - MVC com Node.js e EJS

Este projeto é uma aplicação web de lista de tarefas construída com **Node.js** e **EJS**, seguindo a arquitetura **MVC (Model-View-Controller)** para manter o código organizado, modular e escalável.

## 🧠 Arquitetura MVC

- **Model** (`taskListModel.js`): Responsável por gerenciar os dados da aplicação (listas e tarefas). Aqui estão as funções de criação, leitura, atualização e exclusão (CRUD).
  
- **View** (`.ejs`): Páginas renderizadas com EJS que mostram as listas e tarefas no navegador de forma dinâmica.
  
- **Controller** (`taskListController.js`): Controla o fluxo entre o Model e a View. Recebe as requisições do usuário, manipula os dados com o Model e envia as respostas com as Views.

## 🚀 Funcionalidades

- Criar e excluir listas de tarefas
- Adicionar, completar e desfazer tarefas
- Visualizar tarefas de uma lista específica
- Interface simples e intuitiva com EJS

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)

## ▶️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/pedrromg01/MVC_Lista_de_Tarefa.git

