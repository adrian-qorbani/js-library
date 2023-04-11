// JSON and Variables
let myLibrary = [

];

const tbody = document.getElementById('tbody');

// the book constructor
function Book(title, author, pages) {
  // the constructor ...
  
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Read? status on the book
Book.prototype.isRead = function() {
  return this.read;
}

// add book to the library
function addBookToLibrary(title,author,pages) {
  // do stuff
  let testObj = new Book(title,author,pages);
  myLibrary.push(testObj);

  let bookRow = document.createElement("tr");
  let bookTitle = document.createElement("td");
  let bookAuthor = document.createElement("td");
  let bookPages = document.createElement("td");
  let bookBtn = document.createElement("td");
  let bookRemoveBtn = document.createElement("button");
  let bookIsRead = document.createElement("button");


  bookTitle.innerText = title;
  bookAuthor.innerText = author;
  bookPages.innerText = pages;
  bookRemoveBtn.innerText = 'Remove';
  bookIsRead.innerText = 'Read?';


  bookRemoveBtn.addEventListener("click", function() {
    bookRow.remove();
  });

  bookIsRead.addEventListener("click", function() {
      testObj.isRead = !testObj.isRead;
      testObj.isRead ? bookIsRead.innerText = 'Read' : bookIsRead.innerText = 'Not Read'
  })

  bookBtn.appendChild(bookRemoveBtn);
  bookBtn.appendChild(bookIsRead);

  bookRow.appendChild(bookTitle);
  bookRow.appendChild(bookAuthor);
  bookRow.appendChild(bookPages);
  bookRow.appendChild(bookBtn);


  tbody.appendChild(bookRow);

}

function buttonReadUnread() {
  // set read or unread a book
  this.isRead != true;
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
  closeForm();

  const data = new FormData(event.target);
  const title = data.get('title');
  const author = data.get('author');
  const pages = data.get('pages');

  addBookToLibrary(title,author,pages)
}

const newBookForm = document.querySelector('form');
newBookForm.addEventListener('submit', submitNewBook);
