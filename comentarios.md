# node -v

# npm -v

# npm init CRIA UM ARQUIVO JSON .. entry point -> vai determinar o arquivo principal inicial

"O impotante é a versão o nome e o main"
NOME.. cliente-server-exemple
main .. src/main.js

## Para rodar use o comando npm run start ou npm run test.js

############# Dentro do manifesto #####################
trocar description por priva:true
instalr npm i -D esm isntalar com uma dependencia de desenvolvimento. Ele cria o arquivo dev dependences
dentro de scripts .. colocar start: "node -r esm ." o ponto define um caminho para o path de packages

## pnpx create-react-app ..... caminho package..subpasta... web

## npm i -g pnpm

## pnpm run start --filter @dev-demands/web roda o projeto com filtro na pasta web onde foi instalado o react com o

# comando pnpx create-react-app

## pnpm i react-router-dom --filter@dev-demands/web

####### PACOTE COM REACT ROUTER DOM ############
pnpm i react-router-dom --filter @dev-demands/web isso faz a instalação do react acontecer por filtro escolhendo a pasta que vai o projeto
