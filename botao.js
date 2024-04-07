document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});

const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;
// Transformei o corpo da minha page em uma var

    toggleBtn.addEventListener("click", function(){
        body.classList.toggle("dark-mode") 
    } );
