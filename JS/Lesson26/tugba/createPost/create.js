
const URL = 'https://jsonplaceholder.typicode.com/posts';

const newForm = document.getElementById('post');

async function createPost(e) {
    e.preventDefault();
    const title = document.getElementById('title');
    const body = document.getElementById('body');

    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                title: Title.value,
                body: Body.value,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const posts = await response.json();
        alert('Post has been created.');
        console.log('Post succesfull', posts);
    } catch (error) {
        console.error(error);
        throw error;
    }

}

newForm.addEventListener('submit', (e) => createNewPost(e))