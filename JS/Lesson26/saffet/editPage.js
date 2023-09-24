const container = document.getElementById("container");
const postArea = document.getElementById("postArea");
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

if (postId) {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {

            console.log("post recieved");
            console.log("Post Id from URL: ", postId);

            console.log("Fethed Data: ", post);

            const editPostForm = document.createElement("form");
            editPostForm.classList.add("form");

            const titleInput = document.createElement("input");
            titleInput.type = "text";
            titleInput.value = post.title;
            titleInput.placeholder = "Title";
            titleInput.classList.add("titleText");

            const bodyInput = document.createElement("textarea");
            bodyInput.value = post.body;
            bodyInput.placeholder = "Body";
            bodyInput.classList.add("bodyText");

            const saveButton = document.createElement("button");
            saveButton.type = "button";
            saveButton.innerText = "Save Changes";
            saveButton.classList.add("button");

            saveButton.addEventListener("click", () => {

                const updatedTitle = titleInput.value;
                const updatedBody = bodyInput.value;

                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        id: postId,
                        title: updatedTitle,
                        body: updatedBody,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                .then(response => response.json())
                .then(updatedPost => console.log(updatedPost));
            });


            editPostForm.appendChild(titleInput);
            editPostForm.appendChild(bodyInput);
            editPostForm.appendChild(saveButton);

            container.appendChild(editPostForm);

        })
        .catch(error => console.log("Error", error));
        

}
