// Variables
const home = document.querySelector(".fa-home");
const hamburger = document.querySelector("#hamburger");
const firstImage = document.querySelector("#firstImage");
const ul = document.querySelector("#nav");
const menu = document.querySelectorAll(".navLink"); 


//--- Click events ---

// Home-button
home.addEventListener("click", () => location.href = location.href);

// Hamburger-icon
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    ul.classList.toggle("open2");
});

// Mobile Nav
menu.forEach(function(elem){
    elem.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        ul.classList.toggle("open2");
    });
});


//--- Parallax scrolling---
window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    firstImage.style.backgroundPositionY = (offset * 0.7) + "px";
});

// Smooth scrolling

$(document).ready(() => {
    $('a[href*="#"]').not('[href="#"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 80});
    });
});