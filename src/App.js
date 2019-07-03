import React, { Component } from 'react';
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [],
      adding: false,
      selectedBook: null
    };
  }

  loadBooks = () => {
    const url = 'http://localhost:5000/books';
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({ books: data, adding: false, selectedBook: null });
    })
  }
  createBook = (book) => {
    const url = 'http://localhost:5000/books/newbook';
    const data = JSON.stringify(book);
      return fetch(url, {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: data, 
      })
      .then(response => {
          this.loadBooks();
        }
      ) 
  }
  updateBook(book){
    const url = `http://localhost:5000/books/${book.id}`;
    const data = JSON.stringify(book);
    console.log(data)
      return fetch(url, {
          method: 'PUT', 
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: data, 
      })
      .then(response => {
          this.loadBooks();
        }
      )
  }

  componentDidMount() {
    this.loadBooks();
  }
  handleEditClick = (book) => {
    console.log(book)
    this.setState({ selectedBook: book })
  }

  handleClick = () => {
    this.setState({ adding: true });
  }

  createAndUpdateBookHandler = (newBook) => {
    if (newBook.id) {
      this.updateBook(newBook);
    }
    else {
      const newId = this.state.books.length + 1;
      newBook.id = newId;
      this.createBook(newBook);
    }
  }

  render() {
    return (
      <div>
        {this.state.adding ? 
         <BookForm formTitle='New' bookHandler={this.createAndUpdateBookHandler} /> : 
          this.state.selectedBook ? 
            <BookForm 
                bookHandler={this.createAndUpdateBookHandler} 
                formTitle='Edit'
                title={this.state.selectedBook.title} 
                author={this.state.selectedBook.author} 
                genre={this.state.selectedBook.genre} 
                price={this.state.selectedBook.price} 
                id={this.state.selectedBook.id} 
            /> : 
            <>
            <h1>Books {this.state.books.length}</h1>
            <button onClick={this.handleClick}>Add</button>
            <BookList books={this.state.books} handleEditClick={this.handleEditClick} />
            </>
        }
      </div>
    );
  }
}

export default App;
