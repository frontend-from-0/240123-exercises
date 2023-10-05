const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(headers => {
    headers.addEventListener("click", event => {
        headers.classList.toggle("active");
    })
})