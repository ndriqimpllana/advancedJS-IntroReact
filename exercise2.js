async function fetchData(callback) {
    const apiUrl = 'https://techy-api.vercel.app/api/json';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        callback(null, data);
    } catch (error) {
        callback(error, null);
    }
}

const handleData = (error, data) => {
    const dataInfoElement = document.getElementById('dataInfo');

    if(error) {
        dataInfoElement.innerHTML = `<p> Error fetching data: ${error.message}</p>`;

    }else {
        dataInfoElement.innerHTML = `
        <p>Techy Jokes: ${data.message}</p>
        `;
    }
};

const updateData = () => {
    fetchData(handleData);
};

updateData();

setInterval(updateData, 5000);

async function fetchCarDetaile() {
    const apiUrl = 'https://api.api-ninjas.com/v1/cars'

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // You can handle the fetched data here if needed
    } catch (error) {
        console.log('Error fetching data', error);
    }
}