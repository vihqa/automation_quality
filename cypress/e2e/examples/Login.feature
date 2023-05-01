Feature: Login

    Scenario: Login with invalid credentials 
        Given I access the home page
        When I visit the login page
        When I type an incorrect username and password 
        And I click on submit
        Then An error message should be displayed

    Scenario: Login with right user and wrong password
        Given I acess the home page
        When I type the right user and wrong   password 