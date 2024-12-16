import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getBooks, saveBooks} from './LocalStorageUtils'

function SearchResults() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(getBooks())
  }, [])

  const handleDelete = id => {
    const updatedBooks = books.filter(book => book.id !== id)
    saveBooks(updatedBooks)
    setBooks(updatedBooks)
  }

  return (
    <div className="search-results">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books found. Add some books!</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.title}</Link>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
              <Link to={`/edit/${book.id}`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchResults
