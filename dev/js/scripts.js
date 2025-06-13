//AOS Import
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
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
