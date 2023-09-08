let jsonData = [];
let currentIndex = 0;

function displayData() {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = ''; // Clear previous data

    for (let i = currentIndex; i < currentIndex + 3; i++) {
        if (jsonData[i]) {

            const container = document.createElement('div')
            
            container.classList.add('each-container');

            const number = document.createElement('div');
            number.classList.add('number');
            number.textContent = i + 1;

            const detailsContainer = document.createElement('div')
            detailsContainer.classList.add('details-container')

            const nameLabel = document.createElement('div')
            nameLabel.classList.add('name-heading')
            nameLabel.textContent = 'Name:' + jsonData[i].name

            const locationLabel = document.createElement('div');
            locationLabel.classList.add('location-heading');
            locationLabel.textContent = 'Location: ' + jsonData[i].location;

            container.appendChild(number);
            detailsContainer.appendChild(nameLabel);
            detailsContainer.appendChild(locationLabel)
            container.appendChild(detailsContainer)
            dataDisplay.appendChild(container);
            
        }
    }
}


fetch('data.json')
    .then(response => response.json())
    .then(data => {
        jsonData = data;
        displayData();
    })
    .catch(error => console.error('Error fetching data:', error));


// Add an event listener to the "Next" button
document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex += 3;
    
    if (currentIndex >= jsonData.length) {
        currentIndex = 0;
        count = currentIndex + 1
    }
    
    displayData();
    
});
