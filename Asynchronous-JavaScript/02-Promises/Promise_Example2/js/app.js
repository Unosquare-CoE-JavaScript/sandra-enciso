/*
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
This kind of functionality was previously achieved using XMLHttpRequest
*/
/*
This example shows how to use fetch. Uses an API to receive data and to store data
*/
"use strict";

/*fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(data => data.json())
.then(obj => console.log(obj));*/

let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

fetch('https://sonplaceholder.typicode.com/todos/', {
    method: 'POST', //Using POST to save new data
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
.then(resp => resp.json()) //resp is the return of the fetch statement
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo ${reject}`));

console.log('Other code');