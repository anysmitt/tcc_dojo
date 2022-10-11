/// <reference types ="cypress" />

describe('Funcionalidade: Registrar', () => {

    beforeEach(() => {
        cy.visit('home/')
    });


    it.only('Registrar novo cliente', () => {
        cy.fixture("fUsuario").then((user) => {
            cy.cCadastro(user.email, user.senha)
            cy.cLogin(user.email, user.senha)
            cy.cTranf()
            cy.cPgto()
            cy.cExtrato()
        })
    });

});