// File: src/middlewares/authenticador.js
// Middleware para autenticação de usuários usando JWT (JSON Web Token)
const jwt = require('jsonwebtoken');

// Middleware para autenticação de usuários
// Este middleware verifica se o token JWT está presente no cabeçalho da requisição
const autenticador = (req, res, next) => {
    const token = req.headers['authorization'];
    // Verifica se o token foi fornecido
    // O token deve ser passado no formato "Bearer <token
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    // Remove o prefixo "Bearer " do token, se presente
    const tokenParts = token.split(' ');    

    try {
        const dados  = jwt.verify(token,"segredoJWT");
        req.user = dados; // Armazena os dados do usuário decodificados na requisição
        next(); // Chama o próximo middleware ou rota
        } catch (error) {
            return res.status(403).json({ message: 'Token inválido' });
        }
    };

    module.exports = autenticador;
// Exportando o autenticador para ser usado em outros arquivos