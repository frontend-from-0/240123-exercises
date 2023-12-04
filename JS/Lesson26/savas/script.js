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
        window.location.href = "create-post/index.html";
      });
  
    document.getElementById("clear-posts").addEventListener("click", function() {
        const postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = "";
      });
  
    //document.getElementById("submit").addEventListener("click", createANewPost);
  });

//-----------------FUNCTION FOR GET AND EDIT POSTS-----------------

function fetchPosts() {
    fetch(URL)
    .then(response => response.json())
    .then(json => {

        const postsContainer = document.getElementById("posts-container");
        json.forEach(element => {
            

            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            const headingOfPost = document.createElement("h2");
            headingOfPost.classList.add("post-title");
            headingOfPost.innerHTML = `<span>Post ${element.id}</span> - ${element.title}`;

            const bodyOfPost = document.createElement("p");
            bodyOfPost.classList.add("post-body");
            bodyOfPost.textContent = element.body;

            const editPostButton = document.createElement("button");
            editPostButton.classList.add("button--edit");
            editPostButton.textContent = "Edit Post";
            editPostButton.dataset.id = element.id;

            const deletePostButton = document.createElement("button");
            deletePostButton.classList.add("button--danger");
            deletePostButton.textContent = "Delete Post";
            deletePostButton.dataset.id = element.id;


            postDiv.appendChild(headingOfPost);
            postDiv.appendChild(bodyOfPost);
            postDiv.appendChild(editPostButton);
            postDiv.appendChild(deletePostButton);

            postsContainer.appendChild(postDiv);
        });

        

        document.querySelectorAll(".button--edit").forEach(button => {
            button.addEventListener("click", function(event) {
                const postId = event.target.dataset.id;
                window.location.href = `edit-post/index.html?id=${postId}`;
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