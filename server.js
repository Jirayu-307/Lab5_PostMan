const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const books = require('./db')
app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/books/:id', (req, res) => {
    res.json(books.find(book => book.id === req.params.id))
  })

app.listen(3000, () => {
  console.log('http://localhost:3000')
})