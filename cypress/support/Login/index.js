const el = require('./elements').ELEMENTS;

class login {
    acessarLogin () {
        cy.visit('/login');
    }

    preencherLogin (email, senha) {
        cy.get(el.email).type(email);
        cy.get(el.senha).type(senha);
        cy.get(el.btnEntrar).click();
    };
};

export default new login();