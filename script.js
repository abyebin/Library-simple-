const addNewBookButton = document.getElementById('button-add-new');
const formDiv = document.getElementById('form-div');
const submitButton = document.getElementById('submitButton');
const closeButton = document.getElementById('closeButton');
const inpuTitle = document.getElementById('title');

// function for displaying the form
addNewBookButton.addEventListener('click', function () {
  formDiv.setAttribute('style', 'display: flex');
});

// function for close the form
closeButton.addEventListener('click', function () {
  formDiv.setAttribute('style', 'display: none');
});

// odin sample storage model
let myLibrary = [];

function Book(title, author, readStatus) {
  this.title = title;
  this.author = author;
  this.readStatus = readStatus;
  this.info = function () {
    return `The book "${title}" is written by "${author}".`;
  };
}

// function for adding book to library array
function addBookToLibrary(title, author, readStatus) {
  let book = new Book(title, author, readStatus);
  myLibrary.push(book);
}

// books to page
function booksToPage() {
  const books = document.getElementById('books-shelf');
  //looping throgh array and display on page
  myLibrary.forEach((myLibrary) => {
    const card = document.createElement('div');
    card.classList.add('card');
    books.appendChild(card);

    for (let key in myLibrary) {
      const para = document.createElement('p');
      para.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

addBookToLibrary('Harry', 'jkr', 'true');
addBookToLibrary('new', 'eb', 'true');
addBookToLibrary('Harry', 'jkr', 'true');
addBookToLibrary('new', 'eb', 'true');

console.log(myLibrary);
booksToPage();
