document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menu-icon");
  var closeIcon = document.querySelector(".close-icon");
  var hamburger = document.querySelector(".hamburger-menu");
  var overlay = document.querySelector(".overlay");

  closeIcon.addEventListener("click", function () {
    hamburger.classList.remove("active");
    menuIcon.classList.remove("close");
    overlay.style.display = "none";
  });
  menuIcon.addEventListener("click", function () {
    hamburger.classList.add("active");
    menuIcon.classList.add("close");
    overlay.style.display = "block";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 680) {
      hamburger.classList.remove("active");
      overlay.style.display = "none";
      menuIcon.classList.remove("close");
    }
  });
});
