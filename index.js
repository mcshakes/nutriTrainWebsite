let hamburger = document.getElementById('js-navbar-toggle');
let mainNav = document.getElementById('main-nav');



function openNav() {
  mainNav.style.display = "block";
}

function closeNav() {
  mainNav.style.display = "none";
}

hamburger.addEventListener("click", function() {
  this.classList.toggle("change");

  if (mainNav.style.display === "none") {
    openNav();
  } else {
    closeNav();
  }
})
