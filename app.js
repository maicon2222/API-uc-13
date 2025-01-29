// importando nossa tabela
import carros2025 from "./tabelaCarros.js";

//importa o modulo express
import express from "express";

import { modeloCarro } from "./validacao.js";

//criando a variavel app do tipo express
const app = express();

//indica queusaremos um arquivo do ti´po json
app.use(express.json());

app.get("/", (requisicao, resposta) => {
  resposta.status(200).send(carros2025); //restora a lista de carro com string
});

app.get("/:sigla", (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase(); // obter a sigla e deixa maiuscula
  const carro = carros2025.find(
    (infocarro) => infocarro.sigla === siglaInformada
  );
  if (!carro) {
    res.status(404).send("Não existe carro com a sigla informada!");
    return;
  }
  res.status(200).send(carro);
});

app.post('/', (req, res) => {
  const novoCarro = req.body; // obtem o novo carro  e status 200
  const { error} = modeloCarro.validate(novoCarro); //valida os dados do novo carro.
  if (error) {
    // se houver erro de validação, retorna erro 400
    res.status(201).send(error);
    return;

  }
  carros2025.push(novoCarro); // Adiciona o carro a lista de carros 
  res.status(200).send(novoCarro); // retorna o carro adicionado
});

// defina a porta do servidor
app.listen(3000, () => {
  console.log("servidor rodando com sucesso na porta 3000");
});

// executa o app
// node app.js
