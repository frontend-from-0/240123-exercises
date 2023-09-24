const container = document.getElementById("container");
const postArea = document.getElementById("postArea");
const form = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const saveButton = document.getElementById("saveButton");
const successMessage = document.getElementById("successMessage");
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

saveButton.addEventListener("click", (event) => {

    event.preventDefault();

    if(titleInput.value.trim() === "" || bodyInput.value.trim() === ""){
        alert("Please fill out both title and body fields");
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify({
            //id: postId,
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
        .then(response => response.json())
        .then(newPost => {
            console.log(newPost);

            successMessage.style.display = "block";
            form.style.display = "none";

            setTimeout(() => {
                window.location.href = "index.html";
            },2000);
        })
        .catch(error => console.log("Error", error));
})


