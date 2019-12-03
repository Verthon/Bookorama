import uuidv4 from 'uuid/v4'
import { generateBook } from './helpers'

class Book {
  constructor (id = uuidv4(), title, author, pages, read = false) {
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  render = () => {
    const li = document.createElement('li');
    return generateBook(li, this.title, this.author, this.pages, this.read)
  }
 }

export default Book
