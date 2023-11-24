const configurations = {
  api_key: 'jE_cqEXASPl5sNCzKgEEBULVXMYbJpzPy1sktC5zZEY',
  api_base_url: 'https://api.unsplash.com/photos/random',
  number_of_images_to_fetch: 20,
};

const image_url = `${configurations.api_base_url}?client_id=${configurations.api_key}&count=${configurations.number_of_images_to_fetch}`;


const container = document.getElementById('image-container');
const button = document.getElementById('fetch-button');


function fetchImages() {
  container.innerHTML = '';
  fetch(image_url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(image => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image");

        const imageElement = document.createElement("img");
        imageElement.src = image.urls.regular;

        imageContainer.appendChild(imageElement);
        container.appendChild(imageContainer);
      });
    })
    .catch(err => console.log(err));
}



window.addEventListener("load", fetchImages);
button.addEventListener('click', fetchImages);
