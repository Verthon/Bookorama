// 1. Storage fro all new Book's
// 2. Has all functions, add ,remove ,edit
import uuidv4 from 'uuid/v4'
import Book from './Book'
import { list, deleteButton, form } from './dom'
import { formData } from './helpers'

class Library {
  constructor(books, currentBook) {
    this.books = books
    this.currentBook = currentBook
  }
  addBook = e => {
    e.preventDefault()
    const data = formData(e.target)
    form.reset()
    return this.render(data)
  }

  removeBook = e => {
    if (e.target.className == 'button button__delete') {
      const li = e.target.parentElement
      li.remove()
    }
  }

  render = data => {
    const { title, author, pages, read } = data
    list.appendChild(new Book(uuidv4(), title, author, pages, read).render())
  }
}

export default Library
