document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('createForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Post created successfully.');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to create post.');
        });
    });
});