const accordions = document.querySelectorAll(".accordion-item");

for (const accordion of accordions) {
    const accordionHeader = accordion.querySelector(".accordion-header");
    
    accordionHeader.addEventListener("click", function() {
        accordion.classList.toggle("active");
    });
}
