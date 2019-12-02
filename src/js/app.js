import Library from './library'
import '../scss/style.scss'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import { form, showModalButton, list, deleteButton } from './dom'

window.addEventListener('DOMContentLoaded', () => {
  showModalButton.addEventListener('click', () => {
    const elems = document.querySelector('.modal')
    const modal = M.Modal.init(elems)
    modal.open()
  })
  form.addEventListener('submit', e => new Library().addBook(e))
})

// const list = document.querySelector('#book-list')
// list.addEventListener('click', function(e) {
//   if (e.target.className == 'delete') {
//     const li = e.target.parentElement
//     li.remove()
//   }
// })

// const addForm = document.forms['add-book']
// addForm.addEventListener('submit', function(e) {
//   e.preventDefault()
//   const afValue = addForm.querySelector('input[type="text"]').value
//   const newBook = document.createElement('li')
//   const newBookName = document.createElement('span')
//   const deleteButton = document.createElement('button')
//   //add text

//   newBook.textContent = afValue
//   deleteButton.textContent = 'delete'
//   newBook.classList.add('book')
//   newBookName.classList.add('book-name')
//   deleteButton.classList.add('delete')

//   newBook.appendChild(newBookName)
//   newBook.appendChild(deleteButton)
//   list.appendChild(newBook)
// })
