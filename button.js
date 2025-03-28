// Define the list of text to cycle through
var textList = [
  "Are you sure?",
  "What if I asked really nicely?",
  "Pretty please?",
  "I'll give you a cookie?",
  "I'll give you a love?",
  "I'll give you a ....?",
];

var currentIndex = 0;

function resizeButton(selector, scaleFactor) {
  var button = document.querySelector(selector);
  var currentSize = parseFloat(getComputedStyle(button).fontSize);
  var newSize = currentSize * scaleFactor;
  button.style.fontSize = newSize + "px";
}

function noButtonClick() {
  resizeButton(".yes-button", 1.1);
  resizeButton(".button:not(.yes-button)", 0.9);

  // Update the h2 text when the "No" button is clicked
  var h2Element = document.querySelector("h2");
  h2Element.textContent = textList[currentIndex];
  currentIndex = (currentIndex + 1) % textList.length;
}

function yesButtonClick() {
  // Update the h2 text when the "Yes" button is clicked
  var h2Element = document.querySelector("h2");
  h2Element.textContent = "I'll always be there for you❤️";

  // Hide the buttons
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.style.display = "none";
  });

  // Show the image
  var imgElement = document.querySelector("img");
  imgElement.src = "./https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY200eGJraHNmN2tzZDBhZDFxODA1OW94NWkzZXZlaXM0d2VtajMyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6Uqa3vLCikV1yNRmdU/giphy.gif";
  imgElement.style.visibility = "visible"; // Change visibility to "visible"
}
