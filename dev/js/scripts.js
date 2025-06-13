//AOS Import
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});

// Types Import
import Typed from 'typed.js';

document.addEventListener("DOMContentLoaded", () => {
  const typed = new Typed("#element", {
    strings: ["Welcome to my Portfolio!"],
    typeSpeed: 100,
  });
});


// Hamburger Menu Code
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    navLinks.classList.toggle("active");
  });
});
