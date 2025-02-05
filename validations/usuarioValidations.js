import joi from 'joi';

// Validação criada
export const modeloUsuario = joi.object({
    nome: joi.string().min(3).required(),
    email: joi.string().email().required(),
    Senha: joi.string().min(6).required(),
});

// Validação de login
export const modelologin = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().min(6).required(),
});

// Validaçãode atualização 
export const ModeloAtualizacaoUsuario = joi.object({
    nome: joi.string().min(3),
    email: joi.string().email(),
    senha: joi.string().min(6),
}).min(1);