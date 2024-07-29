//togle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika humberger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk ngilangin nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Produk section
const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
const dropdowns = document.querySelectorAll('.dropdown');

dropdownTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    dropdowns[index].classList.toggle('active');
  });
});
var video = document.getElementById("myVideo");
var svg = document.getElementById("svg");

video.playbackRate = 3;
svg.addEventListener("mouseover", function () {
  video.play();
});
svg.addEventListener("mouseout", function () {
  video.pause();
});


