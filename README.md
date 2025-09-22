# Angular Product List

Para iniciar o projeto, primeiro você deve possuir [Node](https://nodejs.org/en/download) instalado em sua máquina.

Com Node instaldo, o próximo passo é instalar as dependências com o seguinte comando:

```bash
npm i
```

Ao finalizar a instalação das dependências você poderá rodar o projeto com o seguinto comando:

```bash
npm start
```
Com o projeto rodando, você agora pode acessa-lo através do endereço `http://localhost:4200/` em seu navegador de preferência.

## Testes Unitários

Este projeto possui alguns testes escritos em conjunto com [Karma](https://karma-runner.github.io) e [Jasmine](https://jasmine.github.io).

Para executar os testes, use o seguinte comando:

```bash
npm run test
```

Ao termino da execução do comando, um servidor Karma será iniciado e para acessa-lo bastar ir até ao seu navegador e inserir o endereço informado em seu terminal.

## Testes e2e

Este projeto possui alguns testes escritos utilizando [Cypress](https://www.cypress.io).

Para rodar os teste primeiro você deve se certificar que o projeto está rodando localmente. Com o projeto rodando, execute o comando:

```bash
npm run e2e
```
Executando esse comando irá abrir uma aplicação do Cypress, selecione a opção **E2E testing** e então escolha o navegador de preferência.

Com o Cypress aberto em **Specs**, selecione o arquivo `app.cy.ts` e isso dará inicio aos testes.

## Informações adicionais

Eu fiz um protótipo com Figma para planejar o design do projeto.
Este protótipo está disponível [aqui](https://www.figma.com/design/D78HS57ftHsIykk9Wna3un/Angular-Product-List?m=auto&t=9VIZgeBzJYRpk9Zk-1).

Os ícones utilizados são da biblioteca [Scarlab](https://scarlab-icons.la-moore.ru).
