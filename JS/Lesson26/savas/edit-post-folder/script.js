//-----------------FUNCTION FOR EDIT POSTS-----------------

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(json => {
        document.getElementById("edited-post").innerText = postId;
        document.getElementById("edit-title").value = json.title;
        document.getElementById("edit-body").value = json.body;
    })
    .catch(err => console.log(err));

    const form = document.getElementById("edit-post-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const editedTitle = document.getElementById("edit-title").value;
        const editedBody = document.getElementById("edit-body").value;

        const editedPost = {
            title: editedTitle,
            body: editedBody
        };

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify(editedPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
    });
});

