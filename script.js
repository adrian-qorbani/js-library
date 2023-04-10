// JSON and Variables
let myLibrary = [
  {
    title: "Les Miserables",
    author: "Victor Hugo",
    pages: 1200,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 360,
  },
  {
    title: "The Dean",
    author: "Jalal Al-Ahmad",
    pages: 210,
  },
];

const tbody = document.getElementById('tbody');

// the book constructor
function Book(title, author, pages) {
  // the constructor ...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// add book to the library
function addBookToLibrary(title,author,pages) {
  // do stuff
  let testObj = new Book('For Whom the Bell Tolls','Ernest Hemingway','400');
  myLibrary.push(testObj);

  let tr = "<tr>";

  tr += "<td>" + title 
  + "</td>" + "<td>" 
  + author
  + "</td>" + "<td>" + pages
  + "</td>" + "<td>" + "undef"
  + "</td></tr>";

  /* We add the table row to the table body */
  tbody.innerHTML += tr;
  // bookshelfDisplay(myLibrary);
}

// displaying the bookshelf
function bookshelfDisplay(lib) {
  // loop through the myLibrary and display books in the table...
  for (let i = 0; i < lib.length; i++) {
    let tr = "<tr>";

    tr += "<td>" + lib[i].title 
    + "</td>" + "<td>" 
    + lib[i].author 
    + "</td>" + "<td>" + lib[i].pages 
    + "</td>" + "<td>" + lib[i].actions 
    + "</td></tr>";

    /* We add the table row to the table body */
    tbody.innerHTML += tr;
}
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
addButton.addEventListener("click", () => openForm());
const closeButton = document.querySelector("#button-cancel");
closeButton.addEventListener("click", () => closeForm());

// Add a Book (Form into JSON)

function submitNewBook(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const title = data.get('title');
  const author = data.get('author');
  const pages = data.get('pages');

  addBookToLibrary(title,author,pages)}

const newBookForm = document.querySelector('form');
newBookForm.addEventListener('submit', submitNewBook);

// Execution
bookshelfDisplay(myLibrary)