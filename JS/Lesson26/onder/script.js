function editPost(id) {
    window.location.href = `edit.html?id=${id}`;
}

function deletePost(id) {
    $.get({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        type: 'DELETE',
        success: function () {
            alert("Post deleted successfully.");
            location.reload();
        }
    });
}

$(document).ready(function () {
        $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
        data.forEach(function (post) {
            $("#posts").append(`<div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button onclick="editPost(${post.id})">Edit</button>
                <button onclick="deletePost(${post.id})">Delete</button>
            </div>`);
        });
    });
});