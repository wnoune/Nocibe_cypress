Feature: Subscription Account
  Background:
    Given User go to Nocibe homepage
    When User validate cookies
    When User click on account button

  #TC_505
  Scenario: Redirection to account creation page
    Then User must be redirected to the account creation page

  #TC_506
  Scenario: View the account creation form
    When User click on create your account button
    Then User should see the account subscription form

  #TC_528
  Scenario Outline: Check the incorrect email field
    When User click on create account button
    And User fill email field
    And User click on password field
    Then User should see error message for email field
      Examples:
        | Login       |
        | mgmail@2020 |

  #TC_532
  Scenario Outline:  Check the incorrect password field
    When User click on create account button
    And User fill password field
    And User click on email field
    Then User should see error message for password field
      Examples:
        | Password |
        | dodo2020 |

  #TC_537
  Scenario: Availability of the loyalty card
    When User scroll down the page
    And User select yes On the field Do you have the Nocibe loyalty card?
    Then User should be able to enter fidelity card number

  #TC_539
  Scenario Outline: Check visibility of password field
    When User fill password field
    And User click on discover password
    Then Password must be visible
      Examples:
        | password  |
        | Ben@10Ten |
