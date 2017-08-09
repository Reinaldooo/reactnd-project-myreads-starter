import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Show extends Component {
  state = {
    book: {},
    owned: this.props.owned
  }

componentWillMount() {
    BooksAPI.get(this.props.book.id).then((book) => {
    this.setState({ book })
    })  
}

  render() {
    return (       
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                      <select defaultValue={book.shelf} onChange={(event) => this.props.updateBook(book, event.target.value) }>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  {book.authors.map((author, index) => (
                    <div key={index}className="book-authors">{author}</div>
                  ))}
                </div>
                
    )
  }
}

export default Show