// Function to fetch external data from a mock API
function fetchData() {
    // Replace 'YOUR_API_URL' with the URL of your API or mock data service
    fetch('YOUR_API_URL')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the retrieved data
            displayData(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

// Function to display fetched data on the webpage
function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    // Clear previous data
    dataContainer.innerHTML = '';

    // Check if data is an array and use array method (e.g., forEach)
    if (Array.isArray(data)) {
        data.forEach(item => {
            // Use template literals for string interpolation
            const itemHTML = `<div class="item">
                                <h2>${item.title}</h2>
                                <p>${item.description}</p>
                             </div>`;
            // Append item HTML to data container
            dataContainer.innerHTML += itemHTML;
        });
    } else {
        // Handle non-array data
        const errorMessage = '<p>Error: Data format is not valid</p>';
        dataContainer.innerHTML = errorMessage;
    }
}

// Call the fetchData function to start the data fetching process
fetchData();
