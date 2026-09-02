// Get the contact form
const contactForm = document.getElementById("contactForm");

// Listen for form submission
contactForm.addEventListener("submit", function (event) {

  // Prevent page refresh
  event.preventDefault();

  // Get user's name
  const name = document.getElementById("name").value;

  // Show message
  alert("Thanks, " + name + "! Your message has been received.");

  // Clear the form
  contactForm.reset();
});