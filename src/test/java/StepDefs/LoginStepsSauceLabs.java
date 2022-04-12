package StepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import StepDefs.BaseClass;

public class LoginStepsSauceLabs {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("User Launched the Sauce Labs Application on browser")
	public void user_launched_the_sauce_labs_application_on_browser() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(5000);
	    
	}

	@When("User enters the username {string}")
	public void user_enters_the_username(String UserNameVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(UserNameVal);
	}

	@When("User enters the password {string}")
	public void user_enters_the_password(String PasswordVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(PasswordVal);
	   
	}

	@When("User clicks on login button")
	public void user_clicks_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement LoginBtn = driver.findElement(By.id("login-button"));
		LoginBtn.click();
	   
	}

	@Then("User should be landed on the home page")
	public void user_should_be_landed_on_the_home_page() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Inside home page");
	}

	@Then("User should be getting the message as {string}")
	public void user_should_be_getting_the_message_as(String ExpMsg) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement ErrorMsg = driver.findElement(By.xpath("//h3[@data-test='error']"));
		String ActualMsg = ErrorMsg.getText();
		Assert.assertEquals(ExpMsg, ActualMsg);	    
	}

}
