async function fetchDogs() {
    const button = document.querySelector('button');
    button.textContent = 'Fetching Dogs...';
    button.disabled = true; // Disable the button to prevent multiple clicks

    // Define createDogCard in a scope accessible to the try block
    function createDogCard(imageUrl) {
        const card = document.createElement('div');
        card.classList.add('dog-card');
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Random Dog';
        card.appendChild(img);
        const gallery = document.getElementById('dog-gallery');
        gallery.appendChild(card);
    }

    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const gallery = document.getElementById('dog-gallery');
        gallery.innerHTML = ''; // Clear previous images
        data.message.forEach(imageUrl => {
            createDogCard(imageUrl);
        });

        button.textContent = 'Load Dogs';
    } catch (error) {
        console.error('Error fetching dog images:', error);
        button.textContent = 'Try Again';
        const gallery = document.getElementById('dog-gallery');
        gallery.innerHTML = '<p class="error-message">Could not fetch dogs. Please try again.</p>';
    } finally {
        button.disabled = false; // Re-enable the button in any case
    }
}