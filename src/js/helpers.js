export const formData = elements => {
  const data = {
    title: elements[0].value,
    author: elements[1].value,
    pages: elements[2].value,
    read: elements[3].checked
  }

  return data
}

export const generateDeleteButton = () => {
  const btn = document.createElement('btn')
  btn.textContent = 'Delete'
  btn.className = 'button'

  return btn
}

export const generateContent = (...args) => {
  const content = []
  args.map(arg => {
    const elem = document.createElement('span')
    elem.textContent = arg
    elem.className = 'book__data'
    content.push(elem)
  })
  content.push(generateDeleteButton())
  return content
}

export const generateBook = (li, ...content) => {
  generateContent(...content).forEach(elem => {
    li.appendChild(elem)
  })
  li.className = 'book'

  return li
}
