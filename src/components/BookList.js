import React, { Component } from 'react';
import './BookList.css';

class BookList extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          books: []
      };
    }

    handleClickBook = (book) => {
      console.log(book)
      this.props.handleEditClick(book)
  }


  render(){
    console.log(this.state);
      return (
        <div className="book-list">
        {this.props.books.map((item, index) => (
            <div onClick={() => this.handleClickBook(item)} key={index} className={item.genre}>
            {item.genre}: {item.title} by {item.author} (rrp ${item.price}) (id: {item.id})
            </div>
        ))}
      </div>
      );
    }
}


  export default BookList;

