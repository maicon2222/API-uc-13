import {
    getAllCarros,
    getCarroBySigla,
    createCarro as modelCreateCarro,
    updateCarro as modelUpdateCarro,
    delete as modelDeleteCarro,
  } from "../models/carroModels.js";
   
  import { modeloCarro, ModeloAtualizacaoCarro } from '../validations/carroValidation.js';
   
  // Função para retornar todos os carros
  export const getCarros = (req, res => {
      // Chama a função que retorna todos os carros da base de dados (Ou Array)
      const carros = getAllCarros();
      // Retorna os carros com status 200
      res.status(200).json(carros);
  });
   
  // Função para retornar um carro específico com base na sigla
  export const getCarro = (req, res => {
      const { sigla } = req.params;
      // Chama a função que retorna o carro pela sigla
      const carro = getCarroBySigla(sigla.toUpperCase());
   
      // Se não for encontrado retorna erro 404
      if (!carro) {
          return res.status(404).json({ mensagem: 'Carro não encontrado! '});
      }
   
      // Retorna o carro encontrado com status 200
      res.status(200).json(carro);
  });
   
  // Função para criar um novo carro
  export const createCarro = (req, res =>{
      const { error } = modeloCarro.validate(req.body);
   
      // Se houver erro de validação, retorna status 404
      if (error) {
          return res.status(400).json({ mensagem: error.details[0].message });
      }
   
      // Dados válidos, cria um novo carro
      const novoCarro = req.body;
      // Chama a função para adicionar o novo carro à base de dados (Ou Array)
      const carroCriado = modelCreateCarro(novoCarro);
      // Retorna o carro criado com o status 201
      res.status(201).json(carroCriado);
  });
   
  //funcção para atualizar os dados de um carro ja existente
  export const updateCarro = (req, res =>{
      const { sigla } = req.params;
      //valida os dados de atualizações com base nos modelos
      const { error } = ModeloAtualizacaoCarro.validade(req.body);
      //se houver erro de validação retorna o status 400
      if (error) {
          return res.status(400).json({ message: error.details[0].mensagem });
      }
   
      //chama a função para atualizar o dados dos carro, passando a sigla e os novos dados
      const carroAtualizado = modelUpdateCarro(sigla.toUpperCase(), req.body);
   
      //se o carro nao for encontrado para atualização, retorna status 400
      if (!carroAtualizado) {
          return res.status(404).json({ message: 'Carro não encontrado para atualização!'});
      }
   
      //retorna carro atualizado com status 200
      res.status(200).json(carroAtualizado);
   
  });
   
  //funcao para excluir um carro ja existente
  export const deleteCarro = (req, res) => {
      const {sigla} = req.params;
      //chama a função para remover o carro, passando a sigla
      const carroRemovido = modelDeleteCarro(sigla.toUpperCase());
   
      //se o carro nao for encontrado para remoção retorna erro 404
      if (!carroRemovido) {
          return res.status(404).json({ mensagem: 'Carro nao encontrado para remoção!'});
      }
   
  //Retorna messagem de sucesso e os dados do veiuclo é removido com sucesso com status 200
  res.status(200).json({ message: 'Carro removido com sucesso!', carro: carroRemovido})
   
  };