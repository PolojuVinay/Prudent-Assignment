import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SearchResults from './components/SearchResults'
import BookDetails from './components/BookDetails'
import AddEditBook from './components/AddEditBook'
import './components/styles/App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddEditBook />} />
        <Route path="/edit/:id" element={<AddEditBook />} />
      </Routes>
    </Router>
  )
}

export default App
