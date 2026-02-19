window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
  } else {
    nav.style.boxShadow = "none";
  }
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('header.navbar nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
