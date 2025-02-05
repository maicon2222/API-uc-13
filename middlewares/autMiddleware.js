// Importando o pacote JWT para manipulação de tokens
import jwt from 'jsonwebbtoken';

// Chave para verificar e criar tokens JWT
const JWT_SECRET = 'secreta-chave';

// Middleware de autenticação para verificar o token JWT nas reqisições 
export const authenticate = (req, res, next) => {
// Obtendo o token do cabeçalho authorization (token deve ser no formato " bearer <token>")
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ mensagem: "Token não fornecido!" }); 
    }

    try {
    // A função jwt.verify decodifica e valida o token 
    const decoded = jwt.verify(token, JWT_SECRET),

    // Se o token for valido irá decodificar
    req.user = decoded;

    // Chama o proximo 
    next();
}   catch (error) {
    res.status(401).json({ mensagem: "Token invalido"});
}
}


// npm install bcrypt