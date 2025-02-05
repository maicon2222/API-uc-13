import express from 'express';
import { getUsuarios, loginUsuario } from '../controllers/usuarioController';
import { authenticate } from "../middlewares/autMiddleware.js";

const router = express.Router();

// Rota para obter todos os usuarios (Necessita de autenticação)
router.get('/', authenticate, getUsuarios);

/* Abaixo teria todas as outras rotas (Códigos) que são necesários para uma API,
também sendo necessário incluir no controller (POST,PUT, DELETE),
porém na de usuário é somente um "Escopo" de como poderia ser feito. */

export default router;
