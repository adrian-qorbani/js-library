// JSON and Variables
const myLibrary = [

];

const tbody = document.getElementById('tbody');

// the book constructor
// function Book(title, author, pages) {
//   // the constructor ...

//   this.title = title;
//   this.author = author;
//   this.pages = pages;
// }

// Read? status on the book
// Book.prototype.isRead = function () {
//   return this.read;
// };

class Book {
  constructor(title, author, pages) {
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

  const bookRow = document.createElement('tr');
  const bookTitle = document.createElement('td');
  const bookAuthor = document.createElement('td');
  const bookPages = document.createElement('td');
  const bookBtn = document.createElement('td');
  const bookRemoveBtn = document.createElement('button');
  const bookIsRead = document.createElement('button');

  bookTitle.innerText = title;
  bookAuthor.innerText = author;
  bookPages.innerText = pages;
  bookRemoveBtn.innerText = 'Remove';
  bookIsRead.innerText = 'Read?';

  bookRemoveBtn.addEventListener('click', () => {
    bookRow.remove();
  });

  bookIsRead.addEventListener('click', () => {
    testObj.isRead = !testObj.isRead;
    testObj.isRead ? bookIsRead.innerText = 'Read' : bookIsRead.innerText = 'Not Read';
  });

  bookBtn.appendChild(bookRemoveBtn);
  bookBtn.appendChild(bookIsRead);

  bookRow.appendChild(bookTitle);
  bookRow.appendChild(bookAuthor);
  bookRow.appendChild(bookPages);
  bookRow.appendChild(bookBtn);

  tbody.appendChild(bookRow);
}

function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}

// Pop-up Form
const addButton = document.querySelector('#add-book');
addButton.addEventListener('click', () => openForm());
const closeButton = document.querySelector('#button-cancel');
closeButton.addEventListener('click', () => closeForm());

// Add a Book (Form into JSON)

function submitNewBook(event) {
  event.preventDefault();
  closeForm();

  const data = new FormData(event.target);
  const title = data.get('title');
  const author = data.get('author');
  const pages = data.get('pages');

  addBookToLibrary(title, author, pages);
}

const newBookForm = document.querySelector('form');
newBookForm.addEventListener('submit', submitNewBook);
