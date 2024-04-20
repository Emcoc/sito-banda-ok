// When the user scrolls the page, execute myFunction
window.onscroll = function() {addSticky()};

// Get the navbar
var navbar = document.getElementById("navbar");
var main = document.getElementById("main");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addSticky() {
    if (window.scrollY >= sticky) {
        document.getElementById("navbar").classList.add("sticky");
        document.getElementById("main").classList.add("sticky-main");
    } else {
        document.getElementById("navbar").classList.remove("sticky");
        document.getElementById("main").classList.remove("sticky-main");
    }
}

