/*Query selector.  returns the first Element within the document that matches the specified selector, or group of selectors.
 If no matches are found, null is returned. returns the first Element within the document that matches the specified selector, or group of selectors.
  If no matches are found, null is returned. 
  Query Selector All  returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.*/
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  /*iterates the buttons to add a listener to them */
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add(
      "open"
    ); /* when a button is clicked, then the model is open (add open class) and backdrop displayed as block */
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);
  });
}

/*adds an event listener to backdrop, when backdrop is clicked, then the modal and backdrop are dismissed */
backdrop.addEventListener("click", function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

/*add an event listener to modal, when clicked, then this will be dismissed*/
if (modalNoButton) {
  modalNoButton.addEventListener(
    "click",
    closeModal
  ); /* pass the function closeModal */
}

/*this function removes the open classes of modal and backdrop, and then changes its style display to none */
function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 200);
}

/* this listener, shows and dismisses the backdrop and movile nav */
toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

/* listeners to shown the state of animations */
ctaButton.addEventListener("animationstart", function (event) {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", function (event) {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", function (event) {
  console.log("Animation iteration", event);
});
