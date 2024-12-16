import React from 'react'
import {useParams} from 'react-router-dom'
import {getBooks} from './LocalStorageUtils'

function BookDetails() {
  const {id} = useParams()
  const books = getBooks()
  const book = books.find(b => b.id === id)

  if (!book) return <p>Book not found.</p>

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Pages: {book.pages}</p>
      <p>Published Date: {book.publishedDate}</p>
    </div>
  )
}

export default BookDetails
