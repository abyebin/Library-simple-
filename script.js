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

function Book(title, author) {
  this.title = title;
  this.author = author;
  // this.info = function () {
  //   return `The book "${title}" is written by "${author}".`;
  // };
}

// function for adding book to library array
function addBookToLibrary(title, author, readStatus) {
  let book = new Book(title, author);
  myLibrary.push(book);
  booksToPage()
}

// books to page
function booksToPage() {
  const books = document.getElementById('books-shelf');
  //looping throgh array and display on page
  myLibrary.forEach((myLibrary) => {
    const card = document.createElement('div');
    card.classList.add('card');
    books.appendChild(card);

    const container = document.createElement('div');
    container.classList.add('card-container');
    card.appendChild(container);

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('iconsDiv');
    card.appendChild(iconsDiv);

    const eye = document.createElement('i');
    eye.classList.add('fa-solid');
    eye.classList.add('fa-eye');
    iconsDiv.appendChild(eye);

    const trash = document.createElement('i');
    trash.classList.add('fa-solid');
    trash.classList.add('fa-trash');
    iconsDiv.appendChild(trash);

    for (let i in myLibrary) {
      const para = document.createElement('p');
      para.textContent = `${i.toUpperCase()}:
      ${myLibrary[i].toUpperCase()}`;
      container.appendChild(para);
    }
  });
}

// addBookToLibrary('Harry Potter', 'jkr', 'false');
// addBookToLibrary('aadu ', 'Paappan', 'true');
// addBookToLibrary('Hu are you', 'jkr', 'true');
// addBookToLibrary('kops', 'jack', 'true');
// addBookToLibrary('new nazii', 'danieb', 'true');
// addBookToLibrary('noo nowe', 'jimm', 'true');
// addBookToLibrary('qwuet', 'yokkei', 'true');
// addBookToLibrary('neaw the qeot', 'zeomn', 'true');
// addBookToLibrary('bloen', 'petros', 'true');

submitButton.addEventListener('click', takeFormInput);

let title = document.getElementById('title').value;
console.log(title)

// "function for taking datas from input"
function takeFormInput() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  event.preventDefault();
  document.getElementById("books-shelf").innerHTML = ""


  // if data is not completed return
  
  // if((title == "") ||( author == ""))
  // return 

addBookToLibrary(title, author)
formDiv.setAttribute('style', 'display: none');

}


