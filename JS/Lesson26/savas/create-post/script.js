//----------------FUNCTION FOR CREATE A NEW POST----------------

function createANewPost(event) {
    event.preventDefault();

    const newTitle = document.getElementById("new-title").value;
    const newBody = document.getElementById("new-body").value;

    fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            title: newTitle,
            body: newBody,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}