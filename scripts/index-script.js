/*--Webpage loading transition script--*/
window.addEventListener('DOMContentLoaded', () => {
   document.body.classList.remove('fade-out');
});

/*--Thank you message upon submitting form--*/
function revealMessage(event){
   document.getElementById("thank-you").style.display='block';
}

/*--Delays page reload upon submitting form--*/
$("form").submit(function(e){
   var form = this;
   e.preventDefault();

   setTimeout(function(){
      form.submit();
   }, 1500);
});
