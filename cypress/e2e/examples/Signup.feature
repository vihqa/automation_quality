Feature: Signup

    Scenario: Filling the signup form with valid information 
        Given I access the home page
        When I access the pre-signup form
        When I type a valid username and password
        Then I will be redirected to the signup form
        And I will be able to fill out the input fields left

        