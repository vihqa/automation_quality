Feature: Form Test Automation

    Scenario: Login with invalid credentials 
        Given I acess the home page
        When I visit the login page
        When I type incorrect username and password 
        And I click submit
        Then An error message should be displayed