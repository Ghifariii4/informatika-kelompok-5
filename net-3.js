let currentIndex = 0;
const totalSlides = 2; 
const slider = document.getElementById('slider');

function slide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
