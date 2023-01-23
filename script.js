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

  let index = 0;

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
    eye.dataset.linkedArray = index;
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


    eye.addEventListener('click', function () {
      const yesOrNo = eye.dataset.linkedArray;
      Book.prototype = Object.create(Book.prototype);
      const toggleBook = new Book();
      console.log(toggleBook)
      console.log(Book.prototype)
      if(myLibrary[parseInt(yesOrNo)].Read == "Yes"){
        toggleBook.Read = "No"
        console.log("no",myLibrary[parseInt(yesOrNo)].Read)
        myLibrary[parseInt(yesOrNo)].Read = toggleBook.Read;
      }else {
        toggleBook.Read = "Yes";
        console.log("Yes",myLibrary[parseInt(yesOrNo)].Read)
        myLibrary[parseInt(yesOrNo)].Read = toggleBook.Read;
      }

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
  } else myLibrary.push(book);

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
