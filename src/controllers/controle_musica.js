let musicas = [
    {
        id: 1,
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        ano: 1975
    },
    {
        id: 2,
        titulo: "Imagine",
        artista: "John Lennon",
        ano: 1971
    },
    {
        id: 3,
        titulo: "Hotel California",
        artista: "Eagles",
        ano: 1976
    }
];

const jwt = require('jsonwebtoken');
const users = []

exports.registroUsuario = (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
    users.push({ nome, email, senha });
    res.status(201).json({ message: "Usuário registrado com sucesso" });
}

//garante que todos os campos serão preenchidos
exports.loginUsuario = (req, res) => {
    const { nome, senha } = req.body;
    if (!nome || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
    // verifica senha e nome do usuário
    const user = users.find(user => user.senha === senha && user.nome === nome);
    if (user) {
        const token = jwt.sign({ nome, email:user.email }, "segredoJWT", { expiresIn: '1h' });
        return res.status(200).json({ message: "Usuário autenticado com sucesso", token });
    } else {
        return res.status(401).json({ message: "Usuário ou senha inválidos" });
    }
}
// Função para obter todas as músicas
// Exportando a função para ser usada em outros arquivos
exports.getMusicas = (req, res) => {
    res.status(200).json(musicas);
};

// Função para obter uma música específica por ID
// Exportando a função para ser usada em outros arquivos(exports.getMusicasporId)
// A função recebe os parâmetros da requisição e a resposta
exports.getMusicasporId = (req, res) => {
    const id = parseInt(req.params.id);
    const musica = musicas.find(m => m.id === id);

    if (!musica) {
        return res.status(404).json({ message: "Música não encontrada" });
    }

    res.status(200).json(musica);
};

// Função para adicionar uma nova música
// Exportando a função para ser usada em outros arquivos(exports.addMusica)
// A função recebe os parâmetros da requisição e a resposta
// A função verifica se os campos obrigatórios estão presentes
// Se algum campo estiver faltando, retorna um erro 400
exports.addMusica = (req, res) => {
    const { titulo, artista, ano } = req.body;

    if (!titulo || !artista || !ano) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const newMusica = {
        id: musicas.length + 1,
        titulo,
        artista,
        ano
    };

    musicas.push(newMusica);
    res.status(201).json(newMusica);
};

exports.deleteMusica = (req, res) => {
    const id = parseInt(req.params.id);
    const index = musicas.findIndex(m => m.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Música não encontrada" });
    }

    musicas.splice(index, 1);
    res.status(204).json({ message: "Música deletada com sucesso" });
}

