// main.js
// This script controls the slideshow, the contact form pop-up, and page interaction.
// All functions are written in a simple and clean way to make it easy to understand.

function openForm() {
    document.getElementById("myForm").style.display = "block";
    stopAuto(); // pause while form is open
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    startAuto(); // resume after close
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// Auto slide setup 
var autoTimer = null;
var AUTO_MS = 4500;

function startAuto() {
    stopAuto();
    autoTimer = setInterval(function () { plusSlides(1); }, AUTO_MS);
}

function stopAuto() {
    if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
    }
}

function restartAuto() {
    stopAuto();
    startAuto();
}

startAuto(); // start the automatic slideshow when page loads

function plusSlides(n) {
    showSlides(slideIndex += n);
    restartAuto(); // restart after manual click
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    restartAuto(); // restart after dot click
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
} 
    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}

// This code will close the contact form when the user clicks outside of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )

// Pause and resume slideshow on hover
document.addEventListener("DOMContentLoaded", function () {
    var sc = document.getElementById("Slideshow_Container");
    if (sc) {
        sc.addEventListener("mouseenter", stopAuto); // pause on hover
        sc.addEventListener("mouseleave", startAuto); // resume on leave
    }
});

// Pause slideshow when tab not visible
document.addEventListener("visibilitychange", function () {
    if (document.hidden) { stopAuto(); }
    else { startAuto(); }
});
