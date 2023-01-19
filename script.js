const addNewBookButton = document.getElementById('button-add-new');
const formDiv = document.getElementById('form-div');
const submitButton = document.getElementById('submitButton');
const closeButton = document.getElementById('submitButton');

// function for displaying the form
addNewBookButton.addEventListener('click', function () {
  formDiv.setAttribute('style', 'display: flex');
});

// function for hid the form
closeButton.addEventListener('click', function () {
    formDiv.setAttribute('style', 'display: none');
  });

submitButton.addEventListener('click', function () {
  formDiv.setAttribute('style', 'display: none');
});
