let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        let panel = this.nextElementSibling;
        panel.classList.toggle("active");
    };
}