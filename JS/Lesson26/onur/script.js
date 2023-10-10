


const URL = 'https://jsonplaceholder.typicode.com/posts';

const allPosts = document.getElementById('all-posts');

let selectedPost = null;

async function fetchPosts() {

    try {
        const response = await fetch(URL);
        const posts = await response.json();
        posts.forEach((post) => {

            const listItem = document.createElement('li');
            listItem.classList.add('post');

            const postTitle = document.createElement('h2');
            postTitle.classList.add('post-title');
            postTitle.innerText = post.title;

            const postBody = document.createElement('p');
            postBody.classList.add('post-body');
            postBody.innerText = post.body;

            listItem.appendChild(postTitle);
            listItem.appendChild(postBody);

            const editLink = document.createElement('a');
            editLink.classList.add('button');
            editLink.classList.add('edit-button');
            editLink.textContent = 'Edit';

            listItem.appendChild(editLink);

            editLink.addEventListener('click', editPost);

            function editPost() {
                selectedPost = post;

                const editURL = `./editPost/index.html?title=${selectedPost.title}&body=${selectedPost.body}`;

                window.location.href = editURL;
            }

            allPosts.appendChild(listItem);
        })
    } catch (error) {
        console.error('There is an error: ', error);
        throw error;
    }
}

document.getElementById('fetch-button').addEventListener('click', fetchPosts);



function clearPosts() {
    allPosts.innerHTML = '';
};

document.getElementById('clear-button').addEventListener('click', clearPosts);




