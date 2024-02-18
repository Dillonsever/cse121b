
function fetchData() {
  fetch('https://bible-api.com/john+3:16')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          displayData(data);
      })
      .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
          const dataContainer = document.getElementById('data-container');
          dataContainer.innerHTML = '<p>Error: Failed to fetch data</p>';
      });
}

function displayData(data) {
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = '';

  if (data.title && data.description) {
      const itemHTML = `<div class="item">
                          <h2>${data.reference}</h2>
                          <p>${data.text}</p>
                      </div>`;
      dataContainer.innerHTML = itemHTML;
  } else {
      const errorMessage = '<p>Error: Data format is not valid</p>';
      dataContainer.innerHTML = errorMessage;
  }
}

fetchData();
