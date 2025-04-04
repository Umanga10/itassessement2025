document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let index = 0;
    const totalImages = images.length;
    let isTransitioning = false;

    function updateSlider() {
        isTransitioning = true;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(${-index * 100}%)`;
        setTimeout(() => isTransitioning = false, 500);
    }

    nextButton.addEventListener("click", function () {
        if (!isTransitioning && index < totalImages - 1) {
            index++;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", function () {
        if (!isTransitioning && index > 0) {
            index--;
            updateSlider();
        }
    });

    slides.style.width = `${totalImages * 100}%`;
    images.forEach(img => img.style.width = "100%");
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
    // Mobile Navbar Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });