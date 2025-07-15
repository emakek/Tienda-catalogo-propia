document.addEventListener('DOMContentLoaded', function () {
  // === MENÚ TOGGLE ===
  const toggle = document.querySelector('.menu-toggle');
  const menuLinks = document.querySelector('.menu-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menuLinks.classList.toggle('open');
  });

  // === CARRUSEL AUTOMÁTICO ===
  const slides = document.querySelectorAll('.carrusel .slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Mostrar el primer slide al cargar
  showSlide(currentSlide);

  // Cambiar de slide cada 4 segundos
  setInterval(nextSlide, 4000);
});
