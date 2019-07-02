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
      this.props.handleEditClick(book)
    }


  render(){
      return (
        <div className="book-list">
        {this.props.books.map((item, index) => (
            <div onClick={() => this.handleClickBook(item)} key={index} className={item.genre}>
            {item.genre}: {item.title} by {item.author} (rrp <span className="price">${item.price.toFixed(2)}</span>) (id: {item.id})
            </div>
        ))}
      </div>
      );
    }
}


  export default BookList;

