/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Dillon Sever",
    photo: "images/Profile_pic.jpg",
    favoritefoods: [
        "Chicken","Rice","Tacos","Pizza"
    ],
    hobbies:[
        "basketball","Tennis","Video Games","Running","baseball"
    ],
    placesLived:[]
};




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Clovis, CA",
        length: "20 Years"
    },
    {
        place: "Santiago, Chile",
        length: "2 Years"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
var photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoritefoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    var li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(element => {
    var dt = document.createElement("dt");
    dt.textContent = element.place;
    var dd = document.createElement("dd");
    dd.textContent = element.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
