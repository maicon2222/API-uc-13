import Joi from "joi";
 
// Validação para o modelo de carro
export const modeloCarro = Joi.object({
  nome: Joi.string().min(3).required().mensages({
    'string.min': 'O nome do carro deve ter pelomenos 3 caracteres.',
    'any.required': 'O nome do carro é obrigatorio.',
  }), // nome do carro, pelo menos 3 caracteres
  sigla: Joi.string().length(3).required().messages({
    'string.min': 'A sigla deve ter exatamente 3 caracteres.',
    'any.required': 'A sigla é obrigatorio.',
  }), // Sigla ou medelo, 3 caracteres
  velocidadeMaxima: Joi.number().min(1).required().messages({
    'number.min': 'A velocidade máxima deve ser maior ou igual a 1.',
    'any.required': 'A velocidade maxima é obrigatoria.',
  }), // Potência minima e 1 Cv
  potencia: Joi.number().min(1).required().messages({
    "number.min": "A potencia deve ser maior ou igual a 1.",
    "any.required": "A potência é obrigatôria",
  }), // Velocidade minima de 1km/h
  consumo: Joi.number().min(0.1).required().messages({
    "number.min": "O consumo deve ser maior ou igual a 0.1",
    "any.required": "O consumo é obrigatorio"
  }) // Ano de fabricação
});
 
// Validação para atualização de carro
export const modeloAtualizacaoCarro = Joi.object({
  nome: Joi.string().min(3).messages({
    'string.min': 'O nome do carro deve ter pelo menos 3 caracteres.',
  }), // nome do carro, pelo menos 3 caracteres
  sigla: Joi.string().length(3).messages({
    'string.length': 'A sigla deve ter exatamente 3 caracteres.',
  }), // Sigla ou medelo, 3 caracteres
  velocidadeMaxima: Joi.number().min(1).message({
    'number.min': 'A velocidade maxima deve ser maior ou igual a 1.',
  }),
 // Potência minima e 1 Cv
  potencia: Joi.number().min(1).messages({
    'number.min': 'A potencia deve ser maior ou igual a 1.',
  }), // Velocidade minima de 1km/h
  consumo: Joi.number().min(0.1).messages({
    'number.min': 'O consumo deve ser maior ou igual a 1.',
  }), // Ano de fabricação
}).min(1); // pelo menos um campo precisa ser atualizado