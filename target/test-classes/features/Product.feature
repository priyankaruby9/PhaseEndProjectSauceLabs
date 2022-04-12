Feature: This feature is use to validate the price of products in SauceLabs

  Background: Open the application
    Given User Launched the Sauce Labs Application on browser
    When User enters the username "standard_user"
    And User enters the password "secret_sauce"
    And User clicks on login button
 @Sanity
  Scenario: Validate the price of product
  	When User is on Product Page
    Then the price of product should be as per the below table
      | Sauce Labs Backpack   | $29.99 |
      | Sauce Labs Bike Light |  $9.99 |
