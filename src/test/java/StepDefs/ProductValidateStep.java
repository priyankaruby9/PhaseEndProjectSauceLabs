package StepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class ProductValidateStep {
	
	WebDriver driver = BaseClass.driver;
	
	@When("User is on Product Page")
	public void user_is_on_Product_Page() {
		String ExpTitle = "PRODUCTS";
		WebElement product = driver.findElement(By.xpath("//span[@class='title']"));
		String correctproduct = product.getText();
		Assert.assertEquals(ExpTitle, correctproduct);
		System.out.println("User is in product page");
	}

	@Then("the price of product should be as per the below table")
	public void the_price_of_product_should_be_as_per_the_below_table(io.cucumber.datatable.DataTable dataTable) {
		int rows = dataTable.height();
		for (int i = 0; i<rows; i++) {
			String product =dataTable.cell(i, 0);
			String price =dataTable.cell(i, 1);
			String actual_price = driver.findElement(By.xpath("//div[text()='"+product+"']/following::div[@class='inventory_item_price'][1]")).getText();
			Assert.assertEquals(price, actual_price);
			
		}
		
	  
	}
}
