const el = require('./elements').ELEMENTS;

class cadastro {
    acessarCadastro () {
        cy.visit('/cadastrarusuarios');
    };

    preencherCadastro (nome, email, senha) {
        cy.get(el.nome).type(nome);
        cy.get(el.email).type(email);
        cy.get(el.senha).type(senha);
        cy.get(el.btnCadastrar).click();
    };
};

export default new cadastro();