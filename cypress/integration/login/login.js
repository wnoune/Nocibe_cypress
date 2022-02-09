import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'

let monCompte = '#login-wrapper';
let loginField = ':nth-child(1) > .od-login-input-wrapper > .od-login-textbox';
let passwordField =':nth-child(2) > .od-login-input-wrapper > .od-login-textbox';
let email = '237pk69@gmail.com';
let password = 'malika';
let loginConnect = 'form > div.email_login_container > div.od-login-row-button > button';
let connexionButtom = '.header_login_button';
let errorField = ':nth-child(2) > .od-login-input-wrapper > .od-login-textbox-error-message';
let errorMessage = "7 caractères minimum (lettres et chiffres)";
let cookies = '#didomi-notice-agree-button > span';
let signIn = '.od-login-start-button';


function clickOnGet(element){
    cy.get(element)
         .click({force: true})
}

function clickOnContain(element){
    cy.contains(element)
         .click({force: true})
}

function fillField(field,value){
    cy.get(field)
          .type(value)
}


Given('I go to opodo homepage', () =>{
    cy.visit('https://www.opodo.fr/')
});

When('I click on cookies', ()=>{
    clickOnGet(cookies)
})

When('I click on Account button', ()=>{
    clickOnGet(monCompte)
});

When('I click on sign in button', ()=> {
    clickOnGet(connexionButtom)
});

When('I fill in username and password fields', ()=> {
    fillField(loginField,email)
    fillField(passwordField,password)
});

When('I click on connexion button', ()=> {
    clickOnGet(signIn)
});

Then ("Display directly the error message 'Login and password do not match'",()=>{
    cy.get(errorField)
        .should('not.contain','caractères')
})

