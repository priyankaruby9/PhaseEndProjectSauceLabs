$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature is use to design the Login page of SauceLabs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify the login functionality for correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters the username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be landed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launched the Sauce Labs Application on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_launched_the_sauce_labs_application_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the login functionality for correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launched the Sauce Labs Application on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_launched_the_sauce_labs_application_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the login functionality for correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters the username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceLabs.user_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});