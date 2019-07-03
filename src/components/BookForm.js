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
            id: props.id || 0,
            formErrorMessage: '', 
            titleValid: true,
            authorValid: true,
            genreValid: true,
            priceValid: true,
        };
      }

  checkValidPrice = () => {
    // require two decimal places
    var regex  = /^\d+(?:\.\d{0,2})$/;
    if (regex.test(this.state.price)){
      return true;
    }
    this.setState({ formErrorMessage: 'Invalid number - require valid number with two decimal places',            
      titleValid: true,
      authorValid: true,
      genreValid: true,
      priceValid: false });
    return false;
  }

  checkExists = () => {
    if ( this.state.title.length > 0 
      && this.state.author.length > 0  
      && this.state.genre.length > 0 
      && this.state.price.length > 0) {
      return true;
    }
    this.setState({ formErrorMessage: 'All fields required',            
      titleValid: this.state.title.length,
      authorValid: this.state.author.length,
      genreValid: this.state.genre.length,
      priceValid: this.state.price.length });
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
          <h1>{this.props.formTitle} Book</h1>
          {this.state.formErrorMessage.length > 0 && <h3 className="error">{this.state.formErrorMessage}</h3>}
          <form>
            <label htmlFor="title">Title</label>
              <input 
                onChange={this.handleChange} 
                type="text" 
                id="title" 
                placeholder="title" 
                className={!this.state.titleValid ? "invalid" : undefined}
                value={this.state.title} 
              />
              <label htmlFor="author">Author</label>
              <input 
                onChange={this.handleChange} 
                type="text" 
                id="author" 
                placeholder="author" 
                className={!this.state.authorValid ? "invalid" : undefined}

                value={this.state.author} 
              />
              <label htmlFor="genre">Genre</label>
              <input 
                onChange={this.handleChange} 
                type="text" 
                id="genre" 
                placeholder="genre" 
                className={!this.state.genreValid ? "invalid" : undefined}
                value={this.state.genre} 
              />
              <label htmlFor="price">Price</label>
              <input 
                onChange={this.handleChange} 
                type="number" 
                id="price" 
                placeholder="price" 
                className={!this.state.priceValid ? "invalid" : undefined}
                value={this.state.price} 
              />

              <button onClick={this.handleClick}>Submit</button>
              <button onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      );
    }
}

export default BookForm;

