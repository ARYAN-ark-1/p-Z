document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("container-task2");

  // Function to generate a random ID
  function generateRandomId() {
    return "element-" + Math.floor(Math.random() * 1000);
  }

  // Function to generate a random content
  function generateRandomContent() {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var content = "";
    for (var i = 0; i < 5; i++) {
      content += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return content;
  }

  // Generate and add random elements to the container
  for (var i = 1; i <= Math.floor(Math.random() * 1000); i++) {
    // Generating 10 random elements, you can modify this number
    var element = document.createElement("div");
    var randomId = generateRandomId();
    var randomContent = generateRandomContent();
    element.textContent = randomContent;
    element.id = randomId;
    element.className = "element";
    container.appendChild(element);
  }

  // Create the "find-me" element
  var findMeElement = document.createElement("div");
  findMeElement.textContent = "I am the one";
  findMeElement.id = "find-me";
  findMeElement.className = "element";
  container.appendChild(findMeElement);

  // Generate and add random elements to the container
  for (var i = 1; i <= Math.floor(Math.random() * 1000); i++) {
    // Generating 10 random elements, you can modify this number
    var element = document.createElement("div");
    var randomId = generateRandomId();
    var randomContent = generateRandomContent();
    element.textContent = randomContent;
    element.id = randomId;
    element.className = "element";
    container.appendChild(element);
  }

  // Add a click event listener to all elements with class "element"
  var elements = document.querySelectorAll(".element");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      if (element.id == "find-me") {
        alert(
          "Element with ID '" +
            element.id +
            "' and content '" +
            element.textContent +
            "' was clicked!"
        );
      }
    });
  });
});
