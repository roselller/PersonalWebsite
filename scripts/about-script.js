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