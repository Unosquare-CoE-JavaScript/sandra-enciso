
/* Just using Js, you have to write every single step that should be taken
This way of programming and bringing something onto the screen, is called an imperative approach. We simply descibe action after action

JS is a programming language that allows us as a developer to run logic in the browser.
And the great thing about that logic in the browser is that it can do things that manipulate what the user sees.
You can manipulate the HTML structure (DOM) of the page without fetching a new HTML page.

React is a client-side JavaScript libray.
All about building modern, reactive user interfaces for the web.
Declarative, component-focused approach
*/
/*
This examples shows how to handle a modal using only JS.
*/
const button = document.querySelector('button');

let modal;
let backdrop;

/* Listener to the main button which activates (and creates) the modal  */
button.addEventListener('click', showModalHandler);

function showModalHandler() { //this function shows the modal
  if (modal) {
    return;
  }

  /* Here creates the modal and all its elements */
  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('p');
  modalText.textContent = 'Are you sure?';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.className = 'btn btn--alt';
  modalCancelAction.addEventListener('click', closeModalHandler); // Creates a listener to the cancel button

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Confirm';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', closeModalHandler); // Creates a listener to the confirm button

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler); // Creates a listener to backdrop
  document.body.append(backdrop);
}

function closeModalHandler() { //Close modal handler function which in the end removes the overlay
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}