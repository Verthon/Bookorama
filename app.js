const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.remove();
  }
});

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const afValue = addForm.querySelector('input[type="text"]').value;
  const newBook = document.createElement('li');
  const newBookName = document.createElement('span');
  const deleteButton = document.createElement('button');
  //add text

  newBook.textContent = afValue;
  deleteButton.textContent = 'delete';
  newBook.classList.add("book");
  newBookName.classList.add("book-name");
  deleteButton.classList.add("delete");

  newBook.appendChild(newBookName);
  newBook.appendChild(deleteButton);
  list.appendChild(newBook);
});
