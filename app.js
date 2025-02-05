import express from "express";
 
// importando as rotas
import carroRoutes from "./routes/carroRoutes.js";
 
// importar as rotas do usuário
import usuarioRoutes from "./routes/usuarioRoutes.js"
 

const app = express();
 
//Permite o Express entender .JSON
app.use(express.json());
 
//chama as rotas de carro (estrutura completa do codigo)
app.use("/carros", carroRoutes);
 
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});