Feature: This feature is use to design the Login page of SauceLabs

  Background: Open the application
    Given User Launched the Sauce Labs Application on browser
    
 @Sanity
  Scenario Outline: Verify the login functionality for correct credentials
    When User enters the username "<Username>"
    And User enters the password "<Password>"
    And User clicks on login button
    Then User should be landed on the home page

    Examples: 
      | Username        | Password     |
      | standard_user   | secret_sauce |
      | problem_user | secret_sauce |
@Regression
  Scenario Outline: Validate the login functionality for incorrect credentials
    When User enters the username "<Username>"
    And User enters the password "<Password>"
    And User clicks on login button
    Then User should be getting the message as "<Error>"

    Examples: 
      | Username      | Password     | Error                                                                     |
      | priya | secret_sauce | Epic sadface: Username and password do not match any user in this service |
