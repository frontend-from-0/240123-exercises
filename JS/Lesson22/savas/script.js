const accordionBoxes = document.getElementsByClassName("boxes");
for (let i = 0; i < accordionBoxes.length; i++) {
    accordionBoxes[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}