
// Bring in button
let mybutton = document.getElementById("myBtn");

// Scroll 20px >> show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top of the document when clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}