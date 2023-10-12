
const URL = 'https://jsonplaceholder.typicode.com/posts';

const newForm = document.getElementById('new-post');

async function createNewPost(e) {
    e.preventDefault();
    const newTitle = document.getElementById('new-title');
    const newBody = document.getElementById('new-body');

    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                title: newTitle.value,
                body: newBody.value,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const posts = await response.json();
        alert('Post has been created.');
        console.log('POST HAS BEEN SENT SUCCESSFULLY', posts);
    } catch (error) {
        console.error(error);
        throw error;
    }

}

newForm.addEventListener('submit', (e) => createNewPost(e))