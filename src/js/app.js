import Library from './Library'
import '../scss/style.scss'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import { form, showModalButton, list } from './dom'

window.addEventListener('DOMContentLoaded', () => {
  showModalButton.addEventListener('click', () => {
    const elems = document.querySelector('.modal')
    const modal = M.Modal.init(elems)
    modal.open()
  })
  form.addEventListener('submit', e => new Library().addBook(e))
  list.addEventListener('click', e => new Library().removeBook(e))
})
