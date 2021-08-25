/// <reference types="cypress" />


// - Acessar o ServeRest
// - Criar um novo usuário não sendo administrador
// - Adicionar um produto a Lista
// - Validar a existência deste produto na Lista de Compras

import Cadastro  from "../support/Cadastro";


var faker = require('faker');

    var name = faker.name.findName(); 
    var email = faker.internet.email(); 
    var password = faker.internet.password();

describe("Desafio Web", () => {
    it("Adicionar um produto a Lista e Validar", () => {
        
        Cadastro.acessarCadastro();
        Cadastro.preencherCadastro(name, email, password);

        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid=adicionarNaLista]').click();
        cy.get('[data-testid=shopping-cart-product-name]').should('be.visible');

        cy.get('[data-testid=limparLista]').click();

    });

});

