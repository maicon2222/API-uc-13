import { getAllUsurios, getUsuariobyEmail } from "../models/usuarioModel";
// import { modeloUsuario, modelologin, ModeloAtualizacaoUsuario } from "../validations/usuarioValidations";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { modelologin } from "../validations/usuarioValidations";

// chave secreta para assinatura do token JWT (Ficticio)
const JWT_SECRET = "secreta-chave";

// Função para obter todos os usuários 
export const getUsuarios = (req, res) => {
    const usuarios = getUsuarios();

    res.status(200).json(usuarios);
};

// Função para obter um único usuario pelo ID 
export const getUsuario = (req, res) => {
    const { id } = req.paramas;
    const usuario = usuario.find((user) => user.id === parseInt(id));

    if (!usuario){
    return res.status(404).json({ mensagem: "Usuario não encontrado! "});
}

res.status(200).json(usuario);
};

// Função para fazer login de um usuário
export const loginUsuario = (req, res) => {
    // Valida os dados da entrega utilizando o modelo da validação "modelologin"
    const { error } = modelologin.validate(req.body);

    if (error) {
        return res.status(400).json({ mensagem: error.details[0].message });
    }

    // obtem o e-mail e a senha do corpo da requisição 
    const usuario = getUsuariobyEmail(email);

    // Se o usuario não for encontrado, retorna erro 404 
    if (!usuario) {
        return res.status(400).json({ mensagem: "Usuário não encontrado" });
    }

    // Verifica se a senha fornecida corresponde á senha armazenada (cryptografada) do usuário
    if (!bcrypt.compareSync(senha, usuario.senha)) {
        return res.status(401).json({ mensagem: 'senha invalida!' }); 
    }
    // se a senha for correta, cria um token JWT com o ID e o e-mail do usuario
    const token = jwt.sign ({ id: usuario.id, email: usuario.email}, JWT_SECRET, {expires})
    
    // 
    res.status(200).json({ mensagem: 'login bem sucedido', token });
}