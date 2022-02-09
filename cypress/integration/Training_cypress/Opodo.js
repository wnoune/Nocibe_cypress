/// <reference types="cypress"/>

let email = '237pk69@gmail.com';
let email1 = 'malikadouma19@gmail.com';
let loginField = ':nth-child(1) > .od-login-input-wrapper > .od-login-textbox';
let password = 'malika';
let password1 = 'Malika2016+';
let passwordField =':nth-child(2) > .od-login-input-wrapper > .od-login-textbox';
let footer = ':nth-child(2) > .od-footer-extralinks-title';
let cookies = '#didomi-notice-agree-button > span';
let monCompte = '#login-wrapper';
let connexionButtom = '.od-login-start-button';
let errorField = ':nth-child(2) > .od-login-input-wrapper > .od-login-textbox-error-message';
let errorMessage = "7 caractères minimum (lettres et chiffres)";
let askAffiliation = '.et_pb_row_13 > .et_pb_column > .et_pb_button_module_wrapper > .et_pb_button';
let reduction = '[data-url="https://www.opodo.fr/app-vacances/"] > .od-home-bottom-publi-item-box-description > .od-home-bottom-publi-item-box-title';
let phoneNumberField = '#phonenumber';
let phoneNumber = '691084078';
let checkCondition = '#invalidCheck';
let country = '#iti-0__item-cm > .iti__country-name';
let fieldDepart = ':nth-child(1) > :nth-child(1) > .odf-input-group > .odf-input-m';
let fieldArrival = ':nth-child(2) > .odf-input-group > .odf-input-m';
let arrivalValue = ':nth-child(1) > .lg';
let fieldDateDeparture = ':nth-child(3) > .odf-datepicker > :nth-child(1) > .odf-input-m';
let closeField = '.odf-calendar-end > .odf-datepicker > :nth-child(1) > .odf-input-m';
let departureDate = ':nth-child(2) > .odf-calendar > .odf-calendar-month > :nth-child(6) > :nth-child(1)';
let returnDate = '.css-x9ieg6 > [style="opacity: 1; visibility: visible;"]';
let place = 'Bafoussam';
let searchFlighButtom = '.prisma-btn-highlight';
let firstCalendarSize = ':nth-child(2) > .odf-calendar > .odf-calendar-month';
let facebook = '.od-login-fb-button > .od-login-social-button-icon';

function clickOnContain(element){
    cy.contains(element)
         .click()
}

function clickOnGet(element){
    cy.get(element)
         .click()
}

function fillField(field,value){
    cy.get(field)
          .type(value)
}

function scroll(element){
    cy.get(element)
    .scrollIntoView({easing: 'linear'})
    .should('be.visible')
}

function clickOnContain1(element){
    cy.contains(element)
    .invoke('removeAttr', 'target')
    .click()
}

    beforeEach("Go to home page", ()=>{
        cy.visit("https://www.opodo.fr/")
        clickOnGet(cookies)
    })

        //Bug_206
         describe("Login credentials verification", ()=>{
            it('Login credentials verification error', function(){    
            clickOnGet(monCompte)
            clickOnContain('Connexion')
            fillField(loginField,email)
            fillField(passwordField,password)
            clickOnGet(connexionButtom)
            cy.get(errorField)
             .should('not.have.text', errorMessage)
            })   
        })

        //Bug_199
        describe('Join for a partner', ()=>{
            it('Unable to join for a partner', ()=>{
            scroll(footer)
            clickOnContain('Opodo Partenaires')
            scroll(askAffiliation)
            clickOnGet(askAffiliation)
            cy.get('body')
            .should('not.have.text', 'Failed to load current page')

            })
        })

        //bug_200
        describe('Loading page', ()=>{
            it('Loading an empty page', ()=>{
                scroll(reduction)
                clickOnContain('Téléchargez-la')
                clickOnGet('.iti__arrow')
                scroll(country)
                clickOnGet(country)
                fillField(phoneNumberField, phoneNumber) 
                clickOnGet(checkCondition)
                clickOnContain1('Envoyez-moi le lien par SMS')
                cy.get('body')
                .should('contain.text')
                
                
            })
        })

        //Bug_202
        describe('error message', ()=>{
            it('Provide an error message when there is no response', ()=>{
                clickOnGet(fieldDepart)
                clickOnContain(place)
                cy.get(fieldArrival)
                .click()
                cy.get(arrivalValue)
                .click()
                cy.get(fieldDateDeparture)
                .click()
                cy.get(firstCalendarSize)
                .should('contain.text','24')
                .click
                cy.get(closeField)
                .click()
                cy.get(firstCalendarSize)
                .should('contain.text','26')
                .click               
                cy.get(closeField)
                .click()
                clickOnGet(searchFlighButtom)
                
            })
        })

        //Bug_201
        describe('Connection problem', ()=>{
            it('Connection problem with the Facebook account', ()=>{
                clickOnGet(monCompte)
                clickOnContain('Connexion')
                clickOnGet(facebook)
                cy.closeTab()
            })
        })
