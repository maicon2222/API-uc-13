// modulo bcrypt para criptografar senhas 
import bcrypt from 'bcrypt';

// (Em cenário real seria o banco de dados)
let usuarios = [
    {
        id: 1, 
        nome: 'Gabriel Godoy',
        email: 'Godoyexemplo.com',
        senha: bcrypt.hashSync('senha123', 10),
    },
];

// Função para obter todos os usuários
export const getAllUsurios = () => usuarios;

// Função para encontrar um usuário pelo E-mail
export const getUsuariobyEmail = (email) => {
    return usuarios.find((usuarios) => usuarios.email === email);
};

// Função para criar um novo usuário
export const createUsuario = (novoUsuario) => {
    const novoId = usuarios.length +1;

    // Cria o novo usuário com dados fornecidos e senha criptografada 
    const usuario = {
        ...novoUsuario,
        id: novoId,
        senha: bcrypt.hashSync(novoUsuario.senha, 10),
    };

    // Adiciona o usuario
    usuarios.push(usuario);
    
    // Retorna ao criado
    return usuario;
};


//Função para atualizar os dados de um usuário existente 
export const updaUsuario =  (id, dadosAtualizados) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) return null;

    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...dadosAtualizados};

    return usuarios[usuarioIndex];
};


// Função para excluir um usuario pelo ID
export const deleteUsuario = (id) => {
    const usuarioIndex  = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) return null;

    const [usuarioRemovido] = usuarios.splice(usuarioIndex, 1);

    return [usuarioRemovido]
};



  

 