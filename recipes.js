function openRecipe(event, recipeName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(recipeName).style.display = "block";
    event.currentTarget.className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var recipes = document.getElementsByClassName("carousel-recipe");
    var dots = document.getElementsByClassName("demo");
    var caption = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < recipes.length; i++) {
        recipes[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    recipes[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    caption.innerHTML = dots[slideIndex - 1].alt;
}

function responsiveNav() {
    var nav = document.getElementsByClassName("navbar")[0];
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
}

function printRecipe() {
    document.getElementsByClassName("printbtn")[0].style.display = "none";
    print();
    document.getElementsByClassName("printbtn")[0].style.display = "block";
}

var i = 0;
var txt = 'Happy Cooking!'; 
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("msg").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();