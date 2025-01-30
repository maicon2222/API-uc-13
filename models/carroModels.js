let carros2025 = [
    {
      nome: "ferrari",
      sigla: "FER",
      velocidademaxima: 340,
      potencia: 800,
      consumo: 5.5,
    },
    {
      nome: "lamburguini",
      sigla: "LAN",
      velocidademaxima: 335,
      potencia: 770,
      consumo: 6.2,
    },
  ];
  
// Função que retorna todos os carros no Array
export const getAllcarros = () => carros2025;


export const getcarrobysigla = (sigla) => {
    return carros2025.find(carro => carro.sigla === sigla);
};

// Função que adiciona um novo carro ao Array
export const createcarro = (novocarro) => {
    carros2025.push(novocarro); // Adiciona o novo carro ao final da lista
    return novocarro;
};

// Função que atualiza as informações de um carro existente, com base na sigla
export const updatecarro = (sigla, dadosAtualizados) => {
    // Busca o Indice do carro no Array
    const carroIndex = carros2025.findIndex(carro => carro.sigla === sigla);
    if (carroIndex === -1) return null; // se não encontrar carro retorna Null
    // Atualiza o carro com as Informações fornecidas
    carros2025[carroIndex] = { ...carros2025[carroIndex], ...dadosAtualizados };
};

// Função que remove um carro do array, com base na sigla 
export const deletaCarro = (sigla) => {
    //Busca o Indece do carro no array usando a sigla 
    const carroIndex = carros2025.findIndex((carro) => carro.sigla === sigla);
    if (carroIndex === -1) return null;
    // Remove o carro da lista e retorna o carro removido
    const [carroRemovido] = carros2025.splice(carroIndex, 1);
    return carroRemovido; 
};
