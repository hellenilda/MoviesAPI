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
   git clone https://github.com/hellenilda/MoviesAPI.git
   cd MoviesAPI
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```env
   OMDB_API_KEY=SUA_CHAVE_DE_API
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

   Ou, se estiver usando `nodemon`:

   ```bash
   npx nodemon src/app.js
   ```

5. Acesse a aplicação no navegador em [http://localhost:3000](http://localhost:3000), ou outra porta que esteja definida na variável PORT (app.js).

## Uso

1. No campo de pesquisa, digite o título do filme e clique em "Pesquisar".
2. A aplicação exibirá uma lista de filmes correspondentes ao título pesquisado.
3. Clique em "Ver detalhes" para visualizar informações detalhadas sobre o filme.

<!-- ## Contribuição

Se desejar contribuir para o projeto, siga estes passos:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção (`git checkout -b minha-feature`).
3. Faça as alterações necessárias e commit (`git commit -am 'Adiciona nova feature'`).
4. Envie suas alterações para o repositório (`git push origin minha-feature`).
5. Abra um pull request no GitHub. -->