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

/*--Thank you message upon submitting form--*/
function revealMessage(event){
   document.getElementById("thank-you").style.display="block";
}

/*--Delays page reload upon submitting form--*/
$("form").submit(function(event){
   var form = this;
   event.preventDefault(); /*Stops reload of website upon form submission*/

   setTimeout(function(){ /*Delays form submission for user to read alert*/
      form.submit();
   }, 1500);
});