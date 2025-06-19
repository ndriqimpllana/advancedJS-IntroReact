async function fetchRandomImages() {
    const apiUrl = 'https://picsum.photos/200/300';

    try {
        const response = await fetch(apiUrl);
        const imageUrl = response.url;
        return imageUrl;
    } catch (error) {
        console.error('Error fetching Images.', error);
        return null;
    }
}

const handleImages = async () => {
    const imageContainer = document.getElementById('images');

    try {
        const imageUrl1 = await fetchRandomImages();
        const imageUrl2 = await fetchRandomImages();

        imageContainer.innerHTML = `
        <img src="${imageUrl1}" alt="Image 1">
        <img src="${imageUrl2}" alt="Image 2">
        `;
    } catch (error) {
        console.log('Error handling images:', error);
    }
};

const updateImages = () => {
    handleImages();
};

updateImages();
setInterval(updateImages, 5000);