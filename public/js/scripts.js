document.addEventListener("DOMContentLoaded", function () {

  // Get the current URL or page name
let currentPage = window.location.pathname;

// Select the links and add the 'active' class to the one that matches the current page
document.querySelectorAll('nav li a').forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
const body = document.body;

// Check if there's a saved mode in localStorage
const savedMode = localStorage.getItem("darkMode");

// Set the initial state based on the saved mode (or default to light mode)
if (savedMode === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}

const sliderContainer = document.querySelector('.slider-container');
const sliderIcon = document.querySelector('.slider-icon');

// Calculate the maximum translation for the sliderIcon
const containerWidth = sliderContainer.clientWidth;
const iconWidth = sliderIcon.clientWidth;
const maxX = containerWidth - iconWidth;

// Set an initial position for the sliderIcon based on the savedMode
sliderIcon.style.transform = savedMode === "dark" ? `translateX(${maxX}px)` : 'translateX(0)';

sliderContainer.addEventListener('click', function () {
  const iconPosition = sliderIcon.style.transform;

  if (iconPosition === 'translateX(0px)') {
    sliderIcon.style.transform = `translateX(${maxX}px)`;
  } else {
    sliderIcon.style.transform = 'translateX(0)';
  }
});

let isUserInteracted = false; // Flag to track user interaction

// Add an event listener for the transitionend event
sliderIcon.addEventListener('transitionend', function () {
  if (isUserInteracted) {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "light");
    } else {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "dark");
    }
  }
});

// Add a click event listener to the sliderContainer to set the flag
sliderContainer.addEventListener('click', function () {
  isUserInteracted = true;
});
});
