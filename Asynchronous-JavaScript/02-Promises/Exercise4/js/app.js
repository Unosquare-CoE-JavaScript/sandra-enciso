/*
Promise.all
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. 
This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. 
It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
*/
/*
When to use promise all? When you are waiting for retrieving data from several promises, use Promise.all([array of promises]).
To know if all the promises we need are resolved or rejected
*/

var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Uses Promise.all to respond once all of the promises have returned. 
    Provide a notification to the console when the promises have completed.
    */
    let p1 = fetch(url + 'posts/').then(response1 => response1.json()),
        p2 = fetch(url + 'comments/').then(response2 => response2.json()),
        p3 = fetch(url + 'todos/').then(response3 => response3.json());

    Promise.all([p1, p2, p3])
    .then(msg => {
        nsp.posts = msg[0];
        nsp.comments = msg[1];
        nsp.todos = msg[2];
        console.log("We have received the data!");
    })
    .catch(err => console.log(`Problem retrieving data: ${err}`));

    //public
    return nsp;
})(MAINAPP || {});