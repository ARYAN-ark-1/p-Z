from selenium import webdriver
from selenium.webdriver.common.by import By

# Set up the WebDriver
driver = webdriver.Chrome()  # Ensure ChromeDriver is in your PATH

# Open the web page containing the randomly generated elements
driver.get("http://127.0.0.1:5501/index.html")

# Find all elements with the class "element"
elements = driver.find_elements(By.CLASS_NAME, "element")

# Initialize a variable to store the index of the "find-me" element
find_me_index = -1

# Iterate through the elements and find the index of the "find-me" element
for index, element in enumerate(elements):
    if element.get_attribute("id") == "find-me":
        find_me_index = index
        break

# Check if we found the element
if find_me_index != -1:
    print(f"'find-me' element found at index {find_me_index}")
    # Interact with the element, e.g., click it
    elements[find_me_index].click()
else:
    print("'find-me' element not found.")

# Optionally, keep the browser open
input("Press Enter to close the browser...")

# Close the WebDriver
driver.quit()
