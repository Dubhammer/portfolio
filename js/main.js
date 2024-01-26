//Sticky

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var bgnavbar = document.getElementById("bgnavbar");
var sticky = navbar.offsetTop;


function myFunction() {

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
        bgnavbar.classList.add("stickyshadow")
    } else {
        navbar.classList.remove("sticky");
        bgnavbar.classList.remove("stickyshadow")
    }


}


const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuclick = document.querySelectorAll(".menulink");




//hamberger menu open
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}

//choosing each button closes menu
menuclick.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}






// Dark mode
// https://codepen.io/cortez/pen/jOrNGGQ?editors=1010


var toggle = document.getElementById("darkmode");
var currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggle.checked = true;
    }
}


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggle.addEventListener('change', switchTheme, false);


