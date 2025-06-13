document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    navLinks.classList.toggle("active");
  });
});
