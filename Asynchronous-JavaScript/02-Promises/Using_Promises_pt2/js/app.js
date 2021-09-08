/*
This example uses an API to show how promises works
*/
"use strict";

/* We need to use it to retrieve data from that website */
let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
    wordObj;

/*
Fetch basically replaces XHTML request and is defined as part of the window object, not a feature of the javascript language
*/

/*asyncFunction()
.then(function(val) {
    console.log("Yeah!! " + val);
    return asyncFunction2();
})
.then(function(val) {
    console.log("Second promise: " + val);
});*/

/*
We're gonna go this url, and get a random word 
*/
fetch(wordnikWords + "randomWord" + apiKey) // Get the data from this url
.then(function(response) { //response is the response of the API
    wordObj = response;
    //console.log(wordObj);
    return response.json();
})
.then(function(data) { //data is the return of the first then
    console.log(data.word);
    return fetch(wordnikWord + data.word + "/definitions" + apiKey);
})
.then(function(def) {
    //console.log(def);
    return def.json();
})
.then(function(def) {
    console.log(def);
})
.catch(function(err) { //when an error occurs, runs this
    console.log(err);
});

console.log("See this is asynchronous!"); //this runs first