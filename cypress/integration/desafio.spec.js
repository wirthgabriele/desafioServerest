/// <reference types="cypress" />


// - Acessar o ServeRest
// - Criar um novo usuário não sendo administrador
// - Adicionar um produto a Lista
// - Validar a existência deste produto na Lista de Compras

import Cadastro  from "../support/Cadastro";
import Login from "../support/Login";

var faker = require('faker');

    var name = faker.name.findName(); 
    var email = faker.internet.email(); 
    var password = faker.internet.password();

describe("Desafio Web", () => {
    it("Criar um novo usuário não sendo administrador", () => {
        
        Cadastro.acessarCadastro();
        Cadastro.preencherCadastro(name, email, password);

        cy.get('.alert-link').should('have.text', "Cadastro realizado com sucesso");
        
        
        // cy.get('[data-testid=logout]').should('have.text', "Logout");

    });

    it("Adicionar um produto a Lista e Validar", () => {
           
        cy.get('h1').should('have.text', "Serverest Store");
        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid=adicionarNaLista]').click();


    }); 

    it("Validar a existência deste produto na Lista de Compras", () => {
                      
        cy.get('h1').should('have.text', "Lista de Compras");
        cy.get('[data-testid=shopping-cart-product-name]').should('be.visible');

    }); 

});

