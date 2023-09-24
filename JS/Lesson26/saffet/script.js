/* 
Elements to use:
li (.post)
h2 (.post-title)
p (.post-body)
*/

const postArea = document.getElementById("postArea");
const container = document.getElementById("container");
const createButton = document.getElementById("create-btn");

const URL = 'https://jsonplaceholder.typicode.com/posts';

let lastPostId = 0;

function fetchPosts() {

    fetch(URL)
    .then(response => response.json())
    .then(data => {

        data.forEach(post => {

            lastPostId = Math.max(...data.map(post => post.id));
            console.log("Last Post id: ", lastPostId);
            
            const newPost = document.createElement("div");
            newPost.classList.add("post");
            newPost.setAttribute("data-post-id", post.id);

            const editButton = document.createElement("button");
            editButton.classList.add("button");
            editButton.setAttribute("data-post-id", post.id);
            editButton.innerText = "Edit";

            editButton.addEventListener("click", () => {
                // Redirect to the edit page with the post ID in the URL
                window.location.href = `editPage.html?id=${post.id}`;
            });

            newPost.innerHTML = `
                <h3 class="post-title">${post.title}</h3>
                <p class="post-body">${post.body}</p>
            `;

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("button");
            deleteButton.classList.add("delete-btn");
            deleteButton.setAttribute("data-post-id", post.id);
            deleteButton.innerText = "Delete";

            deleteButton.addEventListener("click", () => {
                clearPosts(post.id);
            })

            postArea.appendChild(newPost);
            postArea.appendChild(editButton);
            postArea.appendChild(deleteButton);
        });
    })
    .catch(error => console.log("Error: ",error));
}

window.addEventListener("load", fetchPosts);

function clearPosts(postId) {
    const deleteURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetch(deleteURL, {
        method: 'DELETE',
    })
    .then(response => {
        if(response.ok){
            removePost(postId);
        }
        else{
            console.log("Failed");
        }
    })
    .catch(error=> {
        console.log("Error: ", error);
    });
};

function removePost(postId){
    const postToRemove = document.querySelector(`.post[data-post-id="${postId}"]`);
    const editButtonToRemove = document.querySelector(`.button[data-post-id="${postId}"]`);
    const deleteButtonToRemove = document.querySelector(`.delete-btn[data-post-id="${postId}"]`);
    console.log("post selected succesfully");

    if(postToRemove) {
        postToRemove.remove();
        console.log("post succesfully deleted");
        editButtonToRemove.remove();
        console.log("Edit Button succesfully deleted");
        deleteButtonToRemove.remove();
        console.log("Delete Button successfully removed");
    }
}

createButton.addEventListener("click", () => {
    window.location.href = `createPostPage.html?id=${lastPostId+1}`;
});