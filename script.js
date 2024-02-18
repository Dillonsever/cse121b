document.addEventListener('DOMContentLoaded', () => {
    fetchData();


    document.getElementById('book').addEventListener('input', fetchData);
    document.getElementById('chapter').addEventListener('input', fetchData);
    document.getElementById('verse').addEventListener('input', fetchData);


    document.getElementById('get-verse-button').addEventListener('click', fetchData);
});

function fetchData() {
    const bookName = document.getElementById('book').value.toLowerCase();
    const chapterNumber = document.getElementById('chapter').value;
    const verseNumber = document.getElementById('verse').value;
    const url = `https://bible-api.com/${bookName}+${chapterNumber}:${verseNumber}`;

    updateButton(bookName, chapterNumber, verseNumber);

    fetch(url)
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

function updateButton(book, chapter, verse) {
    const getVerseButton = document.getElementById('get-verse-button');
    getVerseButton.textContent = `Get Verse ${book} ${chapter}:${verse}`;
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';

    if (data && data.verses && data.verses.length > 0 && data.verses[0].text) {
        const verseText = data.verses[0].text.trim();
        const itemHTML = `<div class="item">
                            <h2>${data.reference}</h2>
                            <p>${verseText}</p>
                        </div>`;
        dataContainer.innerHTML = itemHTML;
    } else {
        const errorMessage = '<p>Error: Data format is not valid or data is not available</p>';
        dataContainer.innerHTML = errorMessage;
    }
}
