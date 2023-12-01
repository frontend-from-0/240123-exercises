/* 
Elements to use:
li (.post)
h2 (.post-title)
p (.post-body)
*/

const URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("get-posts").addEventListener("click", fetchPosts);
  
    document.getElementById("create-a-post").addEventListener("click", function() {
        window.location.href = "create-a-post.html";
      });
  
    document.getElementById("clear-posts").addEventListener("click", function() {
        const postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = "";
      });
  
    document.getElementById("submit").addEventListener("click", createANewPost);
  });

//-----------------FUNCTION FOR GET AND EDIT POSTS-----------------

function fetchPosts() {
    fetch(URL)
    .then(response => response.json())
    .then(json => {
        let posts = "";
        json.forEach(element => {
            posts += `<div class="post">
                <h2 class="post-title"><span>Post ${element.id}</span> - ${element.title}</h2>
                <p class="post-body">${element.body}</p>
                <button class="button--edit" data-id="${element.id}">Edit Post</button>
                <button class="button--danger" data-id="${element.id}">Delete Post</button>
            </div>`;
        });

        document.getElementById("posts-container").innerHTML = posts;

        const editButtons = document.querySelectorAll(".button--edit");
        editButtons.forEach(button => {
            button.addEventListener("click", function(event) {
                const postId = event.target.getAttribute("data-id");
                window.location.href = "edit-a-post.html?id=" + postId;
            });
        });

        document.querySelectorAll(".button--danger").forEach(button => {
            button.addEventListener("click", function(event) {
                const postId = event.target.getAttribute("data-id");
                deletePost(postId);
            });
        });
    })
    .catch(err => console.log(err));
}

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

//----------------FUNCTION FOR DELETE A POST----------------

function deletePost(postId) {
    fetch(`${URL}/${postId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log(`Post ${postId} was deleted.`);
        } else {
            console.log(`Failed`);
        }
    })
    .catch(err => console.error(err));
}