class Bookshelf{
    constructor(){
      this.favoriteBooks = [];
    }
    
    addFavoriteBook(bookName){
      if(!bookName.includes("Great")){
        this.favoriteBooks.push(bookName);
      }
    }
    
     printFavoriteBooks(){
       console.log(
         `Favorites Books: ${ String(this.favoriteBooks.length) }`
       );
       for(let bookName of this.favoriteBooks){
         console.log(bookName);
       }
     }
    
  }
  
  
  function loadBooks(Bookshelf){
    fakeAjax(BOOK_API, function onBooks(bookNames){
      for(let bookName of bookNames){
        Bookshelf.addFavoriteBook(bookName);
      }
      Bookshelf.printFavoriteBooks();
    });
  }
  
  var BOOK_API = "https://some.url/api";
  
  var myBooks = new Bookshelf();
  loadBooks(myBooks);
  
  function fakeAjax(url, cb){ //cb is a callback
    setTimeout(function fakeLoadingDelay(){
      cb([
        "A Song of Ice and Fire",
        "The Great Gatsby",
        "Crime & Punishment",
        "Great Expectations",
        "You Don't Know JS"
      ]);
    },500);
  }