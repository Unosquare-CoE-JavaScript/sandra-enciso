"use strict";
/*
This example uses and async await function which contains a try-catch statement 
*/
const moviePlanets = async function(movieNum) {
    let url = 'https://swapi.dev/api/films/';
    try {
        if(isNaN(movieNum)){
            throw "You must pass a number"; //Then executes catch
        }
        let movieObj = await $.getJSON(url + movieNum + '/');

        console.log(movieObj.title);

        let promises = movieObj.planets.map(url => $.getJSON(url));

        for await (let pl of promises) {
            console.log(pl.name) //log all the planets of the movie
        };
    } catch(e) {
        console.error(e);
    }
    
};

/*const moviePlanets = function(movieNum) {
    let url = 'https://swapi.dev/api/films/';

    $.getJSON(url + movieNum + '/')
    .then(function(response) {
        console.log(response.title);

        response.planets.forEach(p => $.getJSON(p).then(pl => console.log(pl.name)));
    })
    .catch(reject => console.log(`Couldn't retrieve films: ${reject}`));
};*/

moviePlanets(1);

console.log("Remaining Code")