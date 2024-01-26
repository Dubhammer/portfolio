let userAgent = navigator.userAgent;
let nib1 = document.getElementById('nib1')
let nib2 = document.getElementById('nib2')
let firefox = document.getElementById('firefox')

if (userAgent.match(/firefox|fxios/i)) {
    nib1.style.display = "none";
    nib2.style.display = "none";
    firefox.style.display = "block";
} else {

}

