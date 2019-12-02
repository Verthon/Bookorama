export const formData = elements => {
  const data = {
    title: elements[0].value,
    author: elements[1].value,
    pages: elements[2].value,
    read: elements[3].checked
  }

  return data
}

export const generateContent = (...args) => {
  const content = []
  args.map(arg => {
    const elem = document.createElement('span')
    elem.textContent = arg
    content.push(elem)
  })

  return content
}

export const generateBook = (li, ...content) => {
  generateContent('Jack Boe ', ' Under the bridge ', 120, true).forEach(elem => {
    li.appendChild(elem)
  })
}
