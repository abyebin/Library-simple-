const addNewBookButton = document.getElementById('button-add-new');
const formDiv = document.getElementById('form-div');
const submitButton = document.getElementById('submitButton');
const closeButton = document.getElementById('closeButton');
const inpuTitle = document.getElementById('title');
const resetButton = document.getElementById('resetButton');
const addBookForm = document.getElementById('addBookForm');

//library array
myLibrary = [];

//funnctions
function displayForm() {
  formDiv.setAttribute('style', 'display: flex');
}

function closeForm() {
  event.preventDefault();
  resetForm();
  const booksShelf = (document.getElementById('books-shelf').innerHTML = '');
  formDiv.setAttribute('style', 'display: none');
}

function resetForm() {
  addBookForm.reset();
}

function displayToPage() {
  const booksShelf = document.getElementById('books-shelf');

  myLibrary.forEach((x) => {
    const card = document.createElement('div');
    card.classList.add('card');
    booksShelf.appendChild(card);

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

    trash.addEventListener('click', function () {
      let bookIndex = myLibrary.indexOf(x);
      myLibrary.splice(bookIndex, 1);
      card.remove();
    });

    for (let i in x) {
      const para = document.createElement('h2');
      para.textContent = `${i}: 
      ${x[i]}`;
      container.appendChild(para);
    }
  });
}

function addnewBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const readStatus = document.getElementById('read-status').checked;
  const numberOfPages = document.getElementById('number').value;

  function readOrNot() {
    if (readStatus === true) {
      return 'Yes';
    } else return 'No';
  }

  let book = new Book(title, author, numberOfPages, readOrNot());

  if (title == '' || author == '') {
    alert('Please provide valid info');
  } else myLibrary.unshift(book);

  closeForm();
  displayToPage();
}

//constructor
function Book(title, author, numberOfPages, read) {
  this.Title = title;
  this.Author = author;
  this.Pages = numberOfPages;
  this.Read = read;
}

// add event listners
//click add button
addNewBookButton.addEventListener('click', displayForm);

//close form
closeButton.addEventListener('click', closeForm);

//reset form
resetButton.addEventListener('click', resetForm);

//submit Button
submitButton.addEventListener('click', addnewBook);

//test area
