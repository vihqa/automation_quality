Feature: Login

    Scenario: Login with invalid credentials 
        Given I access the home page
        When I visit the login page
        When I type an incorrect username or password 
        And I click on submit
        Then An error message should be displayed