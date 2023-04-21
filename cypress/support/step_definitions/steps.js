import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("I acess the home page", () => {
    cy.visit("https://automationexercise.com/")
})
When("I visit the login page", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})
When("I type incorrect username and password and click submit", () => {
    cy.get('[data-qa="login-email"]').type('8787877@gmail.com')
    cy.get('[data-qa="login-password"]').type('7777')
    cy.get('[data-qa="login-button"]').click()
})
Then("An error message should be displayed", () => {
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})