const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');

        if (postId) {
            document.addEventListener('DOMContentLoaded', () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(post => {
                        document.getElementById('title').value = post.title;
                        document.getElementById('body').value = post.body;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Failed to fetch post data.');
                    });

                document.getElementById('editForm').addEventListener('submit', (event) => {
                    event.preventDefault();
                    const title = document.getElementById('title').value;
                    const body = document.getElementById('body').value;

                    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                        method: 'PUT',
                        body: JSON.stringify({
                            id: postId,
                            title: title,
                            body: body,
                            userId: 1
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Success:', data);
                        alert('Post updated successfully.');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Failed to update post.');
                    });
                });
            });
        } else {
            alert('Post ID not found.');
        }