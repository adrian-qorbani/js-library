// JSON and Variables
let myLibrary = localStorage.getItem('books') ?
JSON.parse(localStorage.getItem('books')) : [];


const tbody = document.getElementById("tbody");

class Book {
  constructor(title = "Untitled", author = "Unknown", pages = 0) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  isRead() {
    return this.read;
  }
}

// add book to the library
function addBookToLibrary(title, author, pages) {
  // do stuff
  const testObj = new Book(title, author, pages);
  myLibrary.push(testObj);
  // itemsArray.push(testObj);
  localStorage.setItem('books', JSON.stringify(myLibrary));

  const bookRow = document.createElement("tr");
  const bookTitle = document.createElement("td");
  const bookAuthor = document.createElement("td");
  const bookPages = document.createElement("td");
  const bookBtn = document.createElement("td");
  const bookRemoveBtn = document.createElement("button");
  const bookIsRead = document.createElement("button");

  bookTitle.innerText = title;
  bookAuthor.innerText = author;
  bookPages.innerText = pages;
  bookRemoveBtn.innerText = "Remove";
  bookIsRead.innerText = "Read?";

  bookRemoveBtn.addEventListener("click", () => {
    console.log(`removed ${testObj.title}`);
    deleteBook(findBook(myLibrary, testObj.title));
    bookRow.remove();
  });

  bookIsRead.addEventListener("click", () => {
    testObj.isRead = !testObj.isRead;
    testObj.isRead
      ? (bookIsRead.innerText = "Read")
      : (bookIsRead.innerText = "Not Read");
  });
  // find book function
  function findBook(libArray, title) {
    if (libArray.length === 0 || libArray === null) {
      return;
    }
    for (book of libArray)
      if (book.title === title) {
        return libArray.indexOf(book);
      }
  }
  // delete book function
  function deleteBook(currentBook) {
    myLibrary.splice(currentBook, currentBook + 1);
  }

  bookBtn.appendChild(bookRemoveBtn);
  bookBtn.appendChild(bookIsRead);
  bookRow.appendChild(bookTitle);
  bookRow.appendChild(bookAuthor);
  bookRow.appendChild(bookPages);
  bookRow.appendChild(bookBtn);

  tbody.appendChild(bookRow);
}
// open add form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
// close add form
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
  closeForm();

  const data = new FormData(event.target);
  const title = data.get("title");
  const author = data.get("author");
  const pages = data.get("pages");

  addBookToLibrary(title, author, pages);
}

const newBookForm = document.querySelector("form");
newBookForm.addEventListener("submit", submitNewBook);
