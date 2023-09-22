/* 
Elements to use:
li (.post)
h2 (.post-title)
p (.post-body)
*/

const postArea = document.getElementById("postArea");
const container = document.getElementById("container");

const URL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts() {

    fetch(URL)
    .then(response => response.json())
    .then(data => {

        data.forEach(post => {
            
            const newPost = document.createElement("div");
            newPost.classList.add("post");

            const editButton = document.createElement("button");
            editButton.classList.add("button");
            editButton.innerText = "Edit";

            editButton.addEventListener("click", () => {
                // Redirect to the edit page with the post ID in the URL
                window.location.href = `editPage.html?id=${post.id}`;
            });

            newPost.innerHTML = `
                <h3 class="post-title">${post.title}</h3>
                <p class="post-body">${post.body}</p>
            `;

            postArea.appendChild(newPost);
            postArea.appendChild(editButton);

        });
    })
    .catch(error => console.log("Error: ",error));
}

window.addEventListener("load", fetchPosts);






function clearPosts() {
};

