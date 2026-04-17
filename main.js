let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');

function showSlide(index) {
  if (!slides.length) return;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

function goToSlide(index) {
  showSlide(index);
}

if (slides.length) {
  setInterval(() => changeSlide(1), 5000);
}