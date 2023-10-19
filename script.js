document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menu-icon");
  var closeIcon = document.querySelector(".close-icon");
  var hamburger = document.querySelector(".hamburger-menu");

  closeIcon.addEventListener("click", function () {
    hamburger.classList.remove("active");
    menuIcon.classList.remove("close");
  });
  menuIcon.addEventListener("click", function () {
    hamburger.classList.add("active");
    menuIcon.classList.add("close");
  });
});
