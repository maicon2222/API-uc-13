# API de carros = WEBAPI

Esta é uma API em construção, que sera uma API RESTful desenvolvida para o gerenciamento de informações de carro, utilizando 
**node.js** e **express**. A API permite criar, ler, atualizar e excluir carros, com validação dos dados ultilizando a
bibliloteca **joi**.

este é um projeto CRUD (Create,Uead, Update, Delete), que será excluido no futuro. este é apenas o escopo inicial.

## Funcionalidades

- **GET /**: retorna a lista completa de carros.
- **GET /:sigla**: retorna as informações de um carro específico, indentificando pela sigla.
- **POST /**: Adiciona um novo carro á lista.
- **PUT /:sigla**: Atualiza as informações de um carro especifico, indentificando pela sigla.
- **DELETE /:sigla**: Remove um carro especifico pela sigla.

## Estrutura inicial do projeto 

- **app.js**: Arquivo principal que configura o servidor Express e as rotas de API.
- **tabelacarros.js**: contem a lista de carros (dados ficticios).
- **validacao.js**: contém as validações joi paracos dados dos carros.

## Tecnologias Usadas 

- **node.js**: ambiente de execução para javascript.
- **Express**: frameork para construção de API REST.
- **joi**: biblioteca para a validação de dados.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponíveis 

#### Exemplo de resposta:

```json
[
    {
    "nome": "ferrari",
    "sigla": "FER",
    "velocidademaxima": "340",
    "potencia": "800",
    "consumo": "5.5",
  },
  {
    "nome": "lamburguini",
    "sigla": "LAN",
    "velocidademaxima": "335", 
    "potencia": "770",
    "consumo": "6.2",
  },
]
```

## Como rodar o projeto 
1. **Clone este repoposítorio:**

   ```bash
    git clone http://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. **Instale sa dependências:**
    navegue até o diretório do projeto e execute o comando:

    ```bash
    npm install
    ```

3. **inicieo servidor:**

    Após a instalação das dependências, inicie o servidor:

    ```bash
    node ./app.js
    ```
4. **Acesse a API:**

    a APi estará disponivel em [http://localhost:3000](http://localhost:3000).
   