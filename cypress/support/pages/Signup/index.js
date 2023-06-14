/// <reference types="Cypress" />

const elSignUp = require('./elements').ELEMENTS

const url = Cypress.config("baseUrl")

class Signup {
    // Acess the page that will be tested
    accessSite(){
        cy.visit(url)
    }

    // Acess the pre-signup form
    accessPreSignUpForm(){
        cy.get(elSignUp.registrationForm).click()
    }
    // Fill the pre-signup input fields
    fillingPreSignUpInputs(){
        cy.get(elSignUp.signUpName).type('Vitória')
        cy.get(elSignUp.signUpEmail).type('vihqa@gmail.com')
    }
    // Fill the pre-signup input fileds with wrong data
    fillingFormWithWrongData(){
        cy.get()
        cy.get()
    }
    //Going to the signup page
    accessSignUpForm(){
        cy.get(elSignUp.signUpBtn).click()
    }
    // Typing all the input fields left
    fillingSignUpData(){
        cy.get(elSignUp.genderTitle).check()
        cy.get(elSignUp.password).type('123456')
        cy.get(elSignUp.dayOfBirth).select('10')
        cy.get(elSignUp.monthOfBirth).select('December')
        cy.get(elSignUp.yearOfBirth).select('2003')
        cy.get(elSignUp.newsletter).check()
        cy.get(elSignUp.specialOffers).check()
        cy.get(elSignUp.firstName).type('Vitória')
        cy.get(elSignUp.lastName).type('Costa')
        cy.get(elSignUp.company).type('Quality Digital')
        cy.get(elSignUp.address).type('Rua Aleatória Teste')
        cy.get(elSignUp.secondAddress).type('Endereço Secundário Teste')
        if(Cypress.env('country')==="Canada"){
        cy.get(elSignUp.country).select('Canada')
        cy.get(elSignUp.state).type('Quebec')
        cy.get(elSignUp.city).type('Toronto')
        cy.get(elSignUp.zipCode).type('M4B1G5')}
        else if(Cypress.env('country')==="Israel"){
        cy.get(elSignUp.country).select('Israel')
        cy.get(elSignUp.state).type('Galilee')
        cy.get(elSignUp.city).type('Capernaum')
        cy.get(elSignUp.zipCode).type('1231400')}
    
        cy.get(elSignUp.mobileNumber).type('999999999')
         
    }
}
export default new Signup()