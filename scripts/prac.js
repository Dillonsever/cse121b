/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create an HTML <article> element
        const article = document.createElement('article');
    
        // Create an HTML <h3> element and add the temple's templeName property to this new element
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
    
        // Create an HTML <img> element and add the temple's imageUrl property to the src attribute
        // and the temple's location property to the alt attribute
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
    
        // Append the <h3> element and the <img> element to the <article> element as children
        article.appendChild(h3);
        article.appendChild(img);
    
        // Append the <article> element to the global templesElement variable declared in Step 2
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    // Declare a const variable named response that awaits the built-in fetch method
    // calling the temple data, absolute URL given in Step 2 above
    const response = await fetch('absolute_URL_to_temple_data_file');

    // Convert the fetch response into a JavaScript object (.json) 
    // and assign the result to the templeList global array variable 
    // you declared in Step 3 above.
    templeList = await response.json();

    // Call the displayTemples function and pass it the list of temples (templeList)
    displayTemples(templeList);
};


/* reset Function */

const reset = () => {
    // Select all <article> elements inside templesElement and remove them
    templesElement.innerHTML = '';
};


/* filterTemples Function */

const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();

    // Get the value of the HTML element with the ID of filtered
    const filter = document.getElementById('filtered').value;

    // Use a switch statement to filter the temples based on the selected value
    switch(filter) {
        case 'utah':
            // Filter for temples located in Utah
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            // Filter for temples located outside Utah
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples dedicated before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            // Display all temples
            displayTemples(temples);
            break;
    }
};

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList)}) ;

getTemples();

/* Event Listener */
