// Get elements first
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const form = document.getElementById("uploadForm"); // Make sure this matches your form's id
const fileInput = form.querySelector('input[type="file"]');
const submitBtn = form.querySelector('button');

// Mobile Menu Toggle & Icon Swap
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

// Close menu on link click
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Enable/disable submit button based on file input
fileInput.addEventListener('change', () => {
  submitBtn.disabled = !fileInput.value;
});

// Scroll Reveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container animations
ScrollReveal().reveal(".header__content h2", { ...scrollRevealOption });
ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content .header__btn", { ...scrollRevealOption, delay: 1000 });

// About container animations
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .about__btn", { ...scrollRevealOption, delay: 1000 });

// Service (Research Areas) container animations
ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 500 });

// Portfolio (Publications) container animations
ScrollReveal().reveal(".portfolio__card", { duration: 1000, interval: 500 });
