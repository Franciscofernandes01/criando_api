const express = require('express');
const routes = require('./routes/musicas_routes');
const app = require('./app');

app.use(routes);
const PORT = 5060;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// This will start the server and listen on port 3000

//arquivo do servidor, criação da porta onde o servidor irá rodar
// e importação do app que foi criado no arquivo app.js

