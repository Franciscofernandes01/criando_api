// Arquivo: src/server.js
// Importando o Express e as rotas definidas no arquivo musicas_routes.js
const express = require('express');
const routes = require('./routes/musicas_routes');
const app = require('./app');// Importando o app do arquivo app.js

app.use(routes);// Usando as rotas definidas no arquivo musicas_routes.js

// Definindo a porta onde o servidor irá rodar
// A porta 5060 foi escolhida, mas você pode alterar para qualquer outra porta disponível
const PORT = 5060;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// This will start the server and listen on port 3000

//arquivo do servidor, criação da porta onde o servidor irá rodar
// e importação do app que foi criado no arquivo app.js

