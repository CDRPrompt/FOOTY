window.addEventListener("scroll", function() {
  const nav = document.querySelector(".floating-nav");
  nav.classList.toggle("scrolled", window.scrollY > 0);
});
