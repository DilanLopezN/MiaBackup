/*document.addEventListener("DOMContentLoaded", function() {
  const carouselInner = document.querySelector(".carousel-inner");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carouselItems = document.querySelectorAll(".carousel-item");

  let currentIndex = 0;

  function showItem(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
  }

  function prevItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentIndex);
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
  }

  prevButton.addEventListener("click", prevItem);
  nextButton.addEventListener("click", nextItem);
});
*/
document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;

  function showSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
  }

  function nextSlide() {
    var nextSlideIndex = (currentSlide + 1) % slides.length;
    showSlide(nextSlideIndex);
  }

  function previousSlide() {
    var prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevSlideIndex);
  }

  // Adiciona eventos aos botões de avançar e voltar
  var nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', nextSlide);

  var prevButton = document.getElementById('prevButton');
  prevButton.addEventListener('click', previousSlide);

  // Exibe o primeiro slide
  showSlide(0);
});