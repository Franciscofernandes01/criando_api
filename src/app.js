// Importando o módulo 'express' e criando uma instância do aplicativo
const express = require('express');
const app = express();
const musicas_routes = require('./routes/musicas_routes');

app.use(express.json()); // Middleware para analisar JSON no corpo das requisições
app.use('/musicas', musicas_routes); // Definindo a rota base para as músicas

// Exportando o aplicativo para ser usado em outros arquivos
console.log('servidor iniciado')



module.exports = app;