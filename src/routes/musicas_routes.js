const express = require('express');
const routes = express.Router();
const musicasController = require('../controllers/controle_musica');
const autenticador = require('../middlewares/authenticador');

routes.get('/', autenticador, musicasController.getMusicas);
routes.get('/:id', autenticador, musicasController.getMusicasporId);
routes.post('/', autenticador, musicasController.addMusica);
routes.delete('/:id', autenticador, musicasController.deleteMusica);
routes.post('/login', musicasController.loginUsuario);
routes.post('/registro', musicasController.registroUsuario);

module.exports = routes;
// Exportando as rotas para serem usadas em outros arquivos
// Isso permite que o arquivo de servidor importe essas rotas e as use no aplicativo Express    
// Isso é útil para organizar o código e manter as rotas separadas da lógica do servidor
// As rotas são definidas usando o método 'Router' do Express, que permite criar um conjunto de rotas que podem ser usadas em um aplicativo Express.
// As rotas são definidas usando o método 'get' para obter músicas, 'get' para obter uma música específica por ID e 'post' para adicionar uma nova música.
// As funções do controlador são importadas do arquivo 'musicas_controller.js' e usadas como middleware nas rotas.