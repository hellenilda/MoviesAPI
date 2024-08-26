# Consumo da OMDb API

## Descrição

Este projeto, feito para fins de estudos, é uma aplicação web que consome a [OMDb API](https://www.omdbapi.com/) para buscar informações sobre filmes. A aplicação permite pesquisar filmes pelo título e visualizar detalhes de cada filme. 

## Funcionalidades

- Pesquisa de filmes por título.
- Exibição de uma lista de filmes com base na pesquisa.
- Visualização de detalhes do filme ao clicar em "Ver detalhes".

## Tecnologias

- Node.js
- Express
- Handlebars
- Axios
- OMDb API

## Estrutura do Projeto

```
src/
│
├── controllers/
│   └── moviesController.js       # Controlador para gerenciar as requisições da API
│
├── routes/
│   └── movies.js                 # Rotas para a aplicação
│
├── views/
│   ├── layouts/
│   │   └── main.handlebars       # Layout principal com o template Handlebars
│   └── index.handlebars           # Página principal com o formulário de pesquisa
│
├── app.js                        # Configuração e inicialização do servidor
└── .env                          # Arquivo de variáveis de ambiente (não incluído no repositório)
```

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/movies-api.git
   cd movies-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com a sua chave da API OMDb:

   ```plaintext
   OMDB_API_KEY=SUA_CHAVE_AQUI
   ```

---

## Execução do Projeto

### Localmente

Para rodar a aplicação localmente, execute:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

### Usando Docker

A aplicação também pode ser executada usando Docker, para garantir que o ambiente esteja configurado corretamente em diferentes sistemas.

1. **Construir a imagem Docker:**

   No diretório raiz do projeto, execute:

   ```bash
   docker build -t nome-da-sua-imagem .
   ```

2. **Rodar o container:**

   Depois de construir a imagem, você pode rodar o container:

   ```bash
   docker run -d -p 3000:3000 --env-file .env nome-da-sua-imagem
   ```

   Isso fará com que a aplicação esteja disponível em `http://localhost:3000`.

3. **Parar o container:**

   Para parar o container em execução, você pode listar os containers e parar o desejado:

   ```bash
   docker ps
   docker stop [ID_DO_CONTAINER]
   ```

## Uso

1. No campo de pesquisa, digite o título do filme e clique em "Pesquisar".
2. A aplicação exibirá uma lista de filmes correspondentes ao título pesquisado.
3. Clique em "Ver detalhes" para visualizar informações detalhadas sobre o filme.