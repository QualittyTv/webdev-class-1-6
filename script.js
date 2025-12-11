// Get references to the toggle button and nav menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Event listener for button click
menuToggle.addEventListener("click", () => {
  // Toggle the 'hidden' class on the nav menu
  navMenu.classList.toggle("hidden");
});

