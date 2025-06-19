//Define the main function to fetch dog images from the API
async function fetchDogs() {
    //Get the button so we can update it's text
    const button = document.querySelector('button');
    //Change the button text while loading
    button.textContent = 'Fetching Dogs...';

    try {
        //Make GET request to the dog CEO API for 6 random images
        const response = await fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc');
        //Convert response into javascript object
        const data = await response.json();
        //Find the gallery container where cards will be inserted
        const gallery = document.getElementById('dog-gallery');
        // CLear any previous cards
        gallery.innerHTML = '';
        //Loop through each image URL in the response
        data.message.forEach(imageUrl => {
            //Create and insert one dog card for each image
            createDogCard(imageUrl);
        });
        //Restore original button text
        button.textContent = 'Load Dogs';
    }catch (error) {
        //If something goes wrong show a error in the console
        console.error('Error Fetching Dogs', error);
        // LEt the user know something failed
        button.textContent = 'Try Again';
    }
}

function createDogCard(imageUrl) {
    const card = document.createElement('div');
    card.classList('dog-card');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Dog';
    card.appendChild(img);
    const gallery = document.getElementById('dog-gallery');
    gallery.appendChild(card);
}