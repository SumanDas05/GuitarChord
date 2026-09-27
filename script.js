// ===== MOBILE NAVIGATION TOGGLE =====

// "Select" the two elements we need: the button and the menu itself
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

// When the hamburger button is clicked, toggle a CSS class on the menu
hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  hamburgerBtn.classList.toggle("open");
});

console.log("GuitarChord app.js loaded successfully ✅");