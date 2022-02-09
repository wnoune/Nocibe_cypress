Feature: Login verification

        Scenario: Login credentials verification
            Given I go to opodo homepage
             When I click on cookies
              And I click on Account button
              And I click on sign in button
              And I fill in username and password fields
              And I click on connexion button
              Then Display directly the error message 'Login and password do not match'
