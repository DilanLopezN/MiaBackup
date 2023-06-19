document.addEventListener("DOMContentLoaded", function() {
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
