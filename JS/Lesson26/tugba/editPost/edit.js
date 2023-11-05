

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
;

if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            document.getElementById('edit-title').value = post.title;
            document.getElementById('edit-body').value = post.body;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

document.getElementById('edit-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const updatedTitle = document.getElementById('edit-title').value;
    const updatedBody = document.getElementById('edit-body').value;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                title: updatedTitle,
                body: updatedBody,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        alert('Post has been updated.');
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
});