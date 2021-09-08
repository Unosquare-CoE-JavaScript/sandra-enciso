/*
Here, we're gonna create a function that will retrieve a Star Wars character and its data
We will using the response to do other fecth that will retrieve the planet and then it will be printed
*/
"use strict";

const swapi = function(num) {
    let url = "https://swapi.dev/api/people/";

    fetch(url + num + "/")
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        return fetch(obj.homeworld);
    })
    .then(hwdata => hwdata.json())
    .then(hwobj => console.log(hwobj));
};

swapi(9); //Character number

console.log("Other commands!");