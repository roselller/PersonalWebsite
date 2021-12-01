/*--Webpage loading transition script--*/
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});

/*--Media query navigation menu--*/
const hamburger = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".navigation-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
   hamburger.classList.toggle("active"); /*Turns hamburger to X*/
   navigationMenu.classList.toggle("active"); /*Toggles menu drop-down*/
}

/*--Projects section radio button project pop-ups--*/
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) 
    slideIndex = 1;

  if (n < 1)
    slideIndex = slides.length;

  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}