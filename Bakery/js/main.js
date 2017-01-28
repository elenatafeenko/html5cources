var bookButton = document.getElementById('book-button');
var bookForm = document.getElementById('book-form');
bookButton.onclick = function() {
  bookForm.style.display = 'block';
  document.body.style.overflow = 'hidden';
};
var closeFormButton = document.getElementById('close-form-button');
var submitFormButton = document.getElementById('submit-form-button');

closeFormButton.onclick = submitFormButton.onclick = function() {
  bookForm.style.display = 'none';
  document.body.style.overflow = 'auto';
};