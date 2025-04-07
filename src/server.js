const express = require('express')
const path = require('node:path')
const app = express()
const router = require('./routes')

// Configuração do view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuração para ler o Body das requisições
app.use(express.urlencoded({ extended: true }));

// Importando todas as rotas
app.use(router)

// Inicializar servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
});