const accordionBoxes = document.getElementsByClassName("accordion-item");
for (let i = 0; i < accordionBoxes.length; i++) {
    accordionBoxes[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}