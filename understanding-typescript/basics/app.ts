// This app.ts adds an event listener to a button. When the button is clicked, a message is printed in the console.
const button = document.querySelector("button")!; // ! -> Non null assertion operator. 
// ! Use it to assert that this isn't null or undefined in contexts where the type checker is unable to conclude that fact. For example in this case where we select an element from a html file

button.addEventListener("click", () => { // Adds an event Listener
  console.log("Clicked!");
});
