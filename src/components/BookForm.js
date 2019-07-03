import React, { Component } from 'react';
import './BookForm.css';

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: props.title || '',
            author: props.author || '',
            genre: props.genre || '',
            price: props.price || 0,
            id: props.id || 0
        };
      }

  checkValidPrice = () => {
    // require two decimal places
    var regex  = /^\d+(?:\.\d{0,2})$/;
    if (regex.test(this.state.price)){
      return true;
    }
    console.log('Invalid number - requires two characters after decimal')
    return false;
  }

  checkExists = () => {
    if ( this.state.title.length > 0 
      && this.state.author.length > 0  
      && this.state.genre.length > 0 
      && (this.state.price.length > 0)
    ) {
      return true;
    }
    console.log('Missing field')
    return false;
  }

  checkValid = () => {
    return this.checkExists() && this.checkValidPrice() 
  }

  handleClick = (e) => {
    e.preventDefault();

    if (this.checkValid()) {
      const newBook = {
          title: this.state.title, 
          author: this.state.author, 
          genre: this.state.genre, 
          price: Number(this.state.price), // convert to number before saving in DB
          id: this.state.id 
      }
      this.props.addNewBook(newBook)
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value, errorMessages: [] })
  }

  render(){
      return (
        <div className="book-form">
          <h1>Book Form</h1>
          <form>
            <label htmlFor="title">Title</label>
              <input 
                onChange={this.handleChange} 
                type="text" 
                id="title" 
                placeholder="title" 
                value={this.state.title} 
              />
              <label htmlFor="author">Author</label>
              <input 
                onChange={this.handleChange} 
                type="text" 
                id="author" 
                placeholder="author" 
                value={this.state.author} 
              />
              <label htmlFor="genre">Genre</label>
              <input 
                onChange={this.handleChange} 
                type="text" 
                id="genre" 
                placeholder="genre" 
                value={this.state.genre} 
              />
              <label htmlFor="price">Price</label>
              <input 
                onChange={this.handleChange} 
                type="number" 
                id="price" 
                placeholder="price" 
                value={this.state.price} 
              />

              <button onClick={this.handleClick}>Save</button>
              <button onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      );
    }
}

export default BookForm;

