//Using Async await inside an IFFE
var MAINAPP = (function(nsp) { //MAINAPP and nsp are the same object
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    The following promise code is inside a module pattern.
    */
    (async function() {
        try {
            let data = await fetch(url + 'posts/'),
                posts = await data.json();

            nsp.posts = posts; //assign to MAINAPP
        } catch(e) {
            console.log(`Problem retrieving posts: ${e}`);
        }
    })();

    /*fetch(url + 'posts/')
    .then(response1 => response1.json())
    .then(posts => nsp.posts = posts)
    .catch(err => console.log(`Problem retrieving posts: ${err}`));*/

    //public
    return nsp;
})(MAINAPP || {}); 


