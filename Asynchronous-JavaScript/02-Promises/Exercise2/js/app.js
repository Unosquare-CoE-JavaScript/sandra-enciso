/*
Objects in JavaScript are mutable.
If we run this function and doesn't retrieve anything, var MAINAPP becomes a blank object 
*/
var MAINAPP = (function(nsp) { // MAINAPP object is the same nsp object
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    This IIFE is the start of an application. 
    The first thing we want to do is download all the posts, comments and todos so that we can work with them. 
    Add the posts, comments and todos to the MAINAPP variable so they are accessible outside this function 
    (e.g. nsp.posts = posts & return nsp). The code is asynchronous.
    */
    fetch(url + 'posts/')
    .then(response1 => response1.json())
    .then(posts => nsp.posts = posts)
    .catch(err => console.log(`Problem retrieving posts: ${err}`));

    fetch(url + 'comments/')
    .then(response2 => response2.json())
    .then(comments => nsp.comments = comments)
    .catch(err => console.log(`Problem retrieving comments: ${err}`));

    fetch(url + 'todos/')
    .then(response3 => response3.json())
    .then(todos => nsp.todos = todos)
    .catch(err => console.log(`Problem retrieving todos: ${err}`));

    //public
    return nsp; //this object returns into MAINAPP (and are the same object)
})(MAINAPP || {});