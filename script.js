let myLibrary = [];

function Book() {
  // the constructor ...
}

function addBookToLibrary() {
  // do stuff
}

function bookshelfDisplay() {
  // loop through the myLibrary and display books in the table...
}

function removeBook() {
  // remove a book from library
}

function buttonReadUnread() {
  // set read or unread a book
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Pop-up Form
const addButton = document.querySelector("#add-book");
addButton.addEventListener("click", () => openForm())

const closeButton = document.querySelector("#button-cancel");
closeButton.addEventListener("click", () => closeForm())
