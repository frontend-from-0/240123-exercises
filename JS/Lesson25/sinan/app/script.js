const configurations = {
  api_key: 'qCnxm3oi9NS9mzAkGmh7_4B6V3p6DJnyFs_wKfNQFF4',
  api_base_url: 'https://api.unsplash.com/photos/random',
  number_of_images_to_fetch: 20,
};

// Parameters to use: client_id, count
const image_url = `${configurations.api_base_url}?client_id=${configurations.api_key}&count=${configurations.number_of_images_to_fetch}`;
// url?paramName1=paramValue1&paramName2=paramValue2

const container = document.getElementById('image-container');
const button = document.getElementById('fetch-button');
// Function to fetch images from Unsplash

function fetchImages() {
  // TODO: Clear screen before loading new images
  const container = document.getElementById("image-container");
  container.innerHTML = "";
  fetch(image_url)
  .then(response => response.json())
  .then(data => {
    // all code goes here!
    data.map(image => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image");

      const imageElement = document.createElement("img");
      imageElement.src = image.urls.regular;
      
      imageContainer.appendChild(imageElement);
      container.appendChild(imageContainer);
    
      // image class to be used for the div element
    })
  })
  .catch(err => console.log(err));
  // Clear previous images
}

// Fetch images once button is clicked. 
// Fetch images once page is loaded

window.addEventListener("load", fetchImages);
button.addEventListener('click', fetchImages,);

// Executing function: fetchImages()
// Passing a function: fetchImages OR (param) => fetchImages(param)
