function addFavoriteBook(bookName){
    if(!bookName.includes("Great")){
      favoriteBooks.push(bookName);
    }
 }
 
 function printFavoriteBooks(){
   console.log(
     `Favorites Books: ${favoriteBooks.length}`
   );
   for(let bookName of favoriteBooks){
     console.log(bookName);
   }
 }
 
 var favoriteBooks = [];
 
 addFavoriteBook("A song of ice and fire");
 addFavoriteBook("The Great Gatsby");
 addFavoriteBook("Crime & Punishment");
 addFavoriteBook("Great Expectations");
 addFavoriteBook("You Don't Know JS");
 
 printFavoriteBooks();