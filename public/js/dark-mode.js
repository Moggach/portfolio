document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleDarkMode");
    const body = document.body;
  
    // Check if there's a saved mode in localStorage
    const savedMode = localStorage.getItem("darkMode");
  
    // Set the initial state based on the saved mode (or default to light mode)
    if (savedMode === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  
    toggleButton.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "light");
      } else {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "dark");
      }
    });

    const sliderContainer = document.querySelector('.slider-container');
    const sliderIcon = document.querySelector('.slider-icon');
    
    sliderContainer.addEventListener('click', function () {
       const containerWidth = sliderContainer.clientWidth;
       const iconWidth = sliderIcon.clientWidth;
       const maxX = containerWidth - iconWidth;
       
       if (sliderIcon.style.transform === 'translateX(' + maxX + 'px)') {
          sliderIcon.style.transform = 'translateX(0)';
       } else {
          sliderIcon.style.transform = 'translateX(' + maxX + 'px)';
       }
    });
    
  });
  