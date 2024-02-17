/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {

        const article = document.createElement('article');
    
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
    
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
    

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try {

        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

        templeList = await response.json();

        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */

const filterTemples = () => {

    reset();

    const filter = document.getElementById('filtered').value;

    switch(filter) {
        case 'utah':
            displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(templeList.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(templeList);
            break;
    }
};

document.getElementById('filtered').addEventListener('change', filterTemples);

getTemples();

