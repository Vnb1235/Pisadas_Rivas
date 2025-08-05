// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const cards = document.querySelectorAll('.card');
  const header = document.getElementById('main-header');

  // Buscador de modelos y marcas
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      cards.forEach(card => {
        const model = card.querySelector('.model')?.textContent.toLowerCase() || '';
        const brand = card.querySelector('.brand')?.textContent.toLowerCase() || '';
        if (model.includes(searchTerm) || brand.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Cambio de fondo del header al hacer scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}); //no toques nada aqui

//carrusel

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.carousel-wrapper');
  const slides = document.querySelectorAll('.carousel-slide');
  const total = slides.length;

  // Duplicar imágenes para un bucle infinito
  wrapper.innerHTML += wrapper.innerHTML;

  let index = 0;

  function moveCarousel() {
    index++;
    wrapper.style.transition = 'transform 1s ease-in-out';
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    if (index === total) {
      // Cuando llega al final (primer duplicado)
      setTimeout(() => {
        wrapper.style.transition = 'none'; // quitar animación
        wrapper.style.transform = 'translateX(0)'; // saltar al inicio real
        index = 0; // reiniciar índice
      }, 1000); // esperar a que termine la transición (1s)
    }
  }

  setInterval(moveCarousel, 4000); // avanzar cada 4s
});

//hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
