from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Set up the WebDriver (e.g., Chrome)
driver = webdriver.Chrome()  # Ensure ChromeDriver is in your PATH

# Open the web-based calculator application
driver.get("http://127.0.0.1:5500/index.html")

# Give the page some time to load fully
time.sleep(3)

# Function to press a button on the calculator by its value
def press_button(button_value):
    button = driver.find_element(By.XPATH, f"//input[@value='{button_value}']")
    button.click()

# Perform a calculation (e.g., 7 + 8)
press_button("7")
press_button("+")
press_button("8")
press_button("=")

# Wait briefly for the calculation result to appear
time.sleep(1)

# Capture the result from the calculator display
result_display = driver.find_element(By.ID, "display")  # This is the display element's ID
result = result_display.get_attribute("value")
print("Result:", result)

# Keep the browser open until the user presses Enter
input("Press Enter to close the browser...")

# Close the WebDriver
driver.quit()
