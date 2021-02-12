# Front-End Challange  :haircut:

Formulário dinâmico gerado através de API ('fields.json') com campos customizados.

Foi utilizado um servidor Node.js para servir o arquivo JSON ao front-end, este que, faz a apresentação do formulário de serviço em etapas, e dos dados cadastrais na etapa final.

## Dependências

- ESLint (ES6)
- Stylelint (SCSS)
- Jest
- Webpack
- Babel
- Express
- [HEX (HTML/ES6/CSS/SAM)](https://medium.com/@metapgmr/hex-a-no-framework-approach-to-building-modern-web-apps-e43f74190b9c)

## Executando o projeto

```sh
# Clone o repositório
$ git clone https://github.com/adelires/front-end-challenge.git

# Acesso a pasta do projeto
$ cd ./front-end-challenge

# Instale as dependências
$ npm install

# Inicialize a api
$ npm run api

# Inicialize o front-end
$ npm run serve

# Acesse o servidor de desenvolvimento em http://localhost:9000
```

## Executando testes unitários

```sh
# Instale o jest em sua máquina
$ npm i -g jest

# Execute os testes na pasta do projeto
$ npm run test
```
