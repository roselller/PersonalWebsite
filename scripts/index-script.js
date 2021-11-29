/*--Webpage loading transition script--*/
window.addEventListener('DOMContentLoaded', () => {
   document.body.classList.remove('fade-out');
 });

/*--Contact submit button shows thank you message--*/
var nextStep = document.querySelector('#nextStep');

nextStep.addEventListener('click', function ("contact-form-submit") {
  e.preventDefault();
  // Hide first view
  document.getElementById('my_form').style.display = 'none';

  // Show thank you message element
  document.getElementById('thank_you').style.display = 'block';
});

