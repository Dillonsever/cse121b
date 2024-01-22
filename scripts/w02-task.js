/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Dillon Sever';
let currentYear = "2024";
let profilePicture = "images/Profile_pic.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("picture img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const foodList = ["pizza", "hamburgers", "watermelon", "chicken"];
foodElement.innerHTML += `<br>${foodList.join(', ')}`;
const favFood = "pasta";
foodList.push(favFood);
foodElement.innerHTML += `<br>${foodList.join(', ')}`;
foodList.shift();
foodElement.innerHTML += `<br>${foodList.join(', ')}`;
foodList.pop();
foodElement.innerHTML += `<br>${foodList.join(', ')}`;

