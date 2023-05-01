import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import Signup from "../pages/Signup"
var registrationForm = '.shop-menu > .nav > :nth-child(4) > a'
var signUpEmail = '[data-qa="signup-email"]'
var signUpName = '[data-qa="signup-name"]'
const url = Cypress.config("baseUrl")
Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("I access the home page", () => {
    Signup.accessSite()
})
When("I visit the login page", () => {
    cy.get(registrationForm).click()
})
When("I type incorrect username and password", () => {
    cy.get('[data-qa="login-email"]').type('8787877@gmail.com')
    cy.get('[data-qa="login-password"]').type('7777')
})
And("I click on submit", () => {
    cy.get('[data-qa="login-button"]').click()
})
Then("An error message should be displayed", () => {
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})

When("I access the pre-signup form", () => {
    Signup.accessPreSignUpForm()
})
When("I type a valid username and password", () => {
    Signup.fillingPreSignUpInputs()
})
Then("I will be redirected to the signup form", () => {
    Signup.accessSignUpForm()
})
And("I will be able to fill out the input fields left", () => {
    Signup.fillingSignUpData()
})