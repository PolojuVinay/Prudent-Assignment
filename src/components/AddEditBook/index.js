import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getBooks, saveBooks} from './LocalStorageUtils'

function AddEditBook() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    pages: '',
    publishedDate: '',
  })

  useEffect(() => {
    if (id) {
      const books = getBooks()
      const existingBook = books.find(b => b.id === id)
      if (existingBook) setBook(existingBook)
    }
  }, [id])

  const handleChange = e => {
    const {name, value} = e.target
    setBook({...book, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const books = getBooks()

    if (id) {
      const updatedBooks = books.map(b => (b.id === id ? {...book, id} : b))
      saveBooks(updatedBooks)
    } else {
      saveBooks([...books, {...book, id: Date.now().toString()}])
    }

    navigate('/search')
  }

  return (
    <div className="add-edit-book">
      <h2>{id ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Pages:
          <input
            type="number"
            name="pages"
            value={book.pages}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Published Date:
          <input
            type="date"
            name="publishedDate"
            value={book.publishedDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddEditBook
