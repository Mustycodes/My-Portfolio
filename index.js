let toggleBtn = document.getElementById("mobile-toggle");
let navbarOverlay = document.querySelector('.navbar-overlay');

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("icon");
  navbarOverlay.classList.toggle('visibility');
});

























/*
let container = document.getElementById("container");
let nextBtn = document.querySelectorAll(".next-page");
let prevBtn = document.querySelectorAll(".prev-page");

let slide = (degrees) => {
    container.style.transform = degrees;
  }
nextBtn[0].addEventListener('click', slide.bind(this, 'rotateY(-90deg)'));
nextBtn[1].addEventListener('click', slide.bind(this, 'rotateY(-180deg)'));
nextBtn[2].addEventListener('click', slide.bind(this, 'rotateY(-270deg)'));
prevBtn[0].addEventListener('click', slide.bind(this, 'rotateY(0deg)'));
prevBtn[1].addEventListener('click', slide.bind(this, 'rotateY(-90deg)'));
prevBtn[2].addEventListener('click', slide.bind(this, 'rotateY(-180deg)'));
*/