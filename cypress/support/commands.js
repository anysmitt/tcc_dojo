// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("cCadastro", () => {
    cy.get('.ihdmxA').click() // botão registrar
    cy.fixture("fUsuario").then((user) => {
        cy.get(':nth-child(2) > .input__default').type(user.email, { force: true })
        cy.get(':nth-child(3) > .input__default').type(user.nome, { force: true }) //nome
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(user.senha, { force: true }) //senha
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(user.senha, { force: true }) // senha2
    })
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true }) // botao confirmar
    cy.get('#btnCloseModal').click() // botão fechar do poupop da conta criada
});

Cypress.Commands.add("cLogin", () => {
    cy.get('.otUnI').click() // botão Acessar
    cy.fixture("fUsuario").then((user) => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(user.email, { force: true })
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(user.senha, { force: true }) //senha
    })
    cy.get('.otUnI').click() // botão acessar
});

Cypress.Commands.add("cTranf", () => {
    cy.get('#btn-TRANSFERÊNCIA').click() // botão Tranferencia
    cy.get(':nth-child(1) > .input__default').type('962')
    cy.get('.account__data > :nth-child(2) > .input__default').type('7')
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('500')
    cy.get(':nth-child(3) > .input__default').type('Cachorro Quente')
    cy.get('.style__ContainerButton-sc-1wsixal-0').click()

    cy.get('.styles__ContainerInformations-sc-8zteav-3').contains('Conta inválida ou inexistente')
        .get('#btnCloseModal').click()
        .get('#btnBack').click()
});

Cypress.Commands.add("cPgto", () => {
    cy.get('#btn-PAGAMENTOS').click() // botão Pgto
    cy.get('#btnCloseModal').should('be.visible').click()
});

Cypress.Commands.add("cExtrato", () => {
    cy.get('#btn-EXTRATO').click() // botão Pgto
    cy.get('#textBalanceAvailable').contains('0,00').log('Você não tem saldo disponível!').get('#btnBack').click()
});
