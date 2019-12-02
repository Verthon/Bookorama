// 1. Storage fro all new Book's
// 2. Has all functions, add ,remove ,edit
import uuidv4 from 'uuid/v4'
import Book from './book'
import { list, deleteButton } from './dom'
import { formData } from './helpers'

class Library {
  constructor (books) {
    this.books = books
  }
  addBook = e => {
    e.preventDefault()
    const data = formData(e.target)
    const {title, author, pages, read} = data
    console.log(new Book(uuidv4(), title, author, pages, read))
  }

  render = () => {

  }
}

export default Library
