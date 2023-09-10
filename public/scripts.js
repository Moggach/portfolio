document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      // Perform any form submission logic here, e.g., sending data to a server.
      
      // Once the form is submitted successfully, display the thank you message.
      thankYouMessage.style.display = "block";
  
      // You can also reset the form if needed.
      form.reset();
    });
  });
  