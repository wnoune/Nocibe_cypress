/// <reference types="cypress"/>

it('google test', function() {
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type('automation step by step{enter}')
    cy.wait(4000)
    cy.get('.MUFPAc > :nth-child(2) > a').click()
})