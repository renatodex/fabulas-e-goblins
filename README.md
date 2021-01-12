# Fábulas & Goblins

**[EN]**
This project contains all the Digital documentation of Fabulas & Goblins book.
This version was initially designed to be 100% digital, therefore, we focus on organizing the information in small blocks to make it easy to understand and digest. 

**[PT-BR]**
Esse projeto contém toda documentação Digital do livro do Fábulas & Goblins.
Essa versão foi pensada para ser exclusivamente uma versão digital, e portanto se preocupa em organizar as informações em seções menores para facilitar o entendimento. 

## Installation / Instalação

```console
yarn install
```

## Local Development / Desenvolvimento Local

```console
yarn start
```

**[EN]**
This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

**[PT-BR]**
Esse comando inicia um servidor de desenvolvimento e abre uma nova janela no browser. A maioria das mudanças são refletidas em tempo real sem precisar reiniciar os ervidor.


## Build

```console
yarn build
```

**[EN]**
This command generates static content into the `build` directory and can be served using any static contents hosting service.

**[PT-BR]**
Esse comanndo gera uma versão estática do site na pasta `build` e pode ser servida utilizando qualquer site de hospedagem estática.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
