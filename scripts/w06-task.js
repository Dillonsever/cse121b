/* Declare and initialize global variables */
const playersElement = document.querySelector('#players');
let playerList = [];

/* async displayPlayers Function */
const displayPlayers = (players) => {
    players.forEach(player => {
        const article = document.createElement('article');
    
        const h3 = document.createElement('h3');
        h3.textContent = player.name;
    
        const img = document.createElement('img');
        img.src = player.imgURL;
        img.alt = player.name;

        article.appendChild(h3);
        article.appendChild(img);

        playersElement.appendChild(article);
    });
};

/* async getPlayers Function using fetch()*/
const getPlayers = async () => {
    try {
        const response = await fetch('./2023-24.NBA.Roster.json');
        playerList = await response.json();
        displayPlayers(playerList.players);
    } catch (error) {
        console.error('Error fetching player data:', error);
    }
};

/* reset Function */
const reset = () => {
    playersElement.innerHTML = '';
};

/* filterPlayers Function */
const filterPlayers = () => {
    reset();
    const filter = document.getElementById('filtered').value;

    switch(filter) {
        // Add filtering options based on your requirements
        case 'all':
        default:
            displayPlayers(playerList.players);
            break;
    }
};

document.getElementById('filtered').addEventListener('change', filterPlayers);

getPlayers();


