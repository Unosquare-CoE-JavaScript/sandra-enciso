/*
Using jquery to retrieve data from sw API.
*/

"use strict";

/* This function, retrives the planets of the movie we will passes */
const moviePlanets = function(movieNum) {
    let url = 'https://swapi.dev/api/films/'; 

    $.getJSON(url + movieNum + '/') //that requires that we pass in a url
    .then(function(response) {
        console.log(response.title);
        /*loops through each element in an array and pass a callback function on each element as it loops through*/
        response.planets.forEach(p => $.getJSON(p).then(pl => console.log(pl.name)));
    })
    .catch(reject => console.log(`Couldn't retrieve films: ${reject}`)); // If fails, execute this
};

moviePlanets(3); //movie 3