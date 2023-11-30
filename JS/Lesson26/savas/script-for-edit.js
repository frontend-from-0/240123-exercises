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
});
