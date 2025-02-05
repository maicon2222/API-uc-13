import Express, { Router } from "express";
 
//importando as funcções
import {
    getCarros,
    getCarro,
    createCarro,
    updateCarro,
    deleteCarro,
 } from "../controllers/carroController.js";
 
 const router = Express.Router();
 
 //Rota para obter todos os carros
 router.get('/', getCarros);
 
 //rota para obter um carro pela sigla
 router.get('/:sigla', getCarro);
 
//rota para criar um novo carro pela sigla
router.post("/", createCarro);
 
//Rota para atualizar um carro
router.put("/:sigla", updateCarro);
 
//rota para deletar um carro
router.delete("/:sigla", deleteCarro);
 
export default router;


