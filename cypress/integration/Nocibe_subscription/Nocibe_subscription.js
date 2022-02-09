import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"

let creerCompte = '.customer-account__creation-cta > .customer-account__open-cta';
let compte = '.header__icon-account > .header__icon-cta > .header__icon-img';
let cookies = '.didomi-continue-without-agreeing';
let emailField = '#email2';
let email = 'mgmail@2020';
let passwordField = '#pass';
let password = 'dodo2020';
let errorField = '#email2-error';
let errorMessage = 'Impossible de créer un compte avec cette adresse e-mail';
let passwordError = 'Votre mot de passe doit contenir au minimum : 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (& @ +…)';
let fidelityYes = '.customer-account__fid > :nth-child(1) > .custom-radio > .custom-radio__check';
//let fidelity = ':nth-child(6) > .form-label';
let passShow = ':nth-child(3) > .form-dpl-pwd > .dpl';

function clickOnGet(element){
    cy.get(element)
        .click()
}

function clickOnContain(element){
    cy.contains(element)
        .click({force: true})
}

function fillField(field,value){
    cy.get(field)
        .type(value)
}

function scroll(element) {
    cy.get(element)
        .scrollIntoView({easing: 'linear'})
        .should('be.visible')
}
//TC_505

    Given('User go to Nocibe homepage', () => {
        cy.visit('https://www.nocibe.fr/')
    });
    When('User validate cookies', () => {
        clickOnGet(cookies)
    });
    When('User click on account button', () => {
        clickOnGet(compte)
    });
    Then('User must be redirected to the account creation page', () => {
        cy.contains('Créer votre compte').should('be.visible')
    });


//TC_506
    And('User click on create your account button', () => {
        clickOnContain('Créer')
    });
    Then('User should see the account subscription form', () => {
        cy.contains('coordonnées').should('be.visible')
    });


//TC_528

    When('User click on create account button', () => {
        clickOnGet(creerCompte)
    });
    And('User fill email field', () => {
        fillField(emailField, email)
    });
    And('User click on password field', () => {
        clickOnGet(passwordField)
    });
    Then('User should see error message for email field', () => {
        cy.get(errorField, {timeout: 1000})
            .should('not.have.text', errorMessage)
    });

//TC_532

    When('User click on create account button', () => {
        clickOnContain('Créer')
    });
    And('User fill password field', () => {
        fillField(passwordField, password)
    });
    And('User click on email field', () => {
        clickOnGet(emailField)
    });
    Then('User should see error message for password field', () => {
        cy.get(passwordField, {timeout: 1000})
            .should('not.have.text', passwordError)
    });

//TC_537
    When('User click on create account button', () => {
        clickOnGet(creerCompte)
    });
    And('User scroll down the page', () => {
        scroll('coordonnées')
    });
    And('User select yes On the field Do you have the Nocibe loyalty card?', () => {
        clickOnGet(fidelityYes)
    });
    Then('User should be able to enter fidelity card number', () => {
        cy.contains('Saisissez')
            .should('be.visible')
    });

//TC_539
    When('User click on create account button', () => {
        clickOnGet(creerCompte)
    });
    And('User fill password field', ()=> {
        fillField(passwordField, password)
    });
    And('User click on discover password', ()=> {
        clickOnGet(passShow)
    });
    Then('Password must be visible', ()=> {
        cy.get(password)
            .should('be.visible')
    });


