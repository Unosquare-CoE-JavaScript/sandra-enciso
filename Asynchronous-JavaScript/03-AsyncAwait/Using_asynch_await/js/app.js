/*
This example uses async await to fetch data from swapi API
*/
"use strict";

const swapiFilms = async function() {
    let url = "https://swapi.dev/api/films/",
        filmsData = {},
        films = [];

    filmsData = await fetch(url).then(data => data.json()); //wait until is done (returns data) to execute the next line

    //processing data
    films = filmsData.results.map(obj => obj.title);
    console.log(films);
};

swapiFilms();

console.log("Remaining Code");