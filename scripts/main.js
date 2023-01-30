// Get the element you want to change the background image of
let element = document.getElementById("my-element");

// Create an array of image URLs
let images = ["image1.jpg", "image2.jpg", "image3.jpg"];

// Keep track of the current image index
let currentImageIndex = 0;

// Function to change the background image
function changeBackground() {
  // Update the current image index
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Update the element's background image
  element.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
}

// Get the <a> element
let button = document.getElementById("my-button");

// Add a click event listener to the button
button.addEventListener("click", changeBackground);
