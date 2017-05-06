import React, { Component } from 'react'

export deafult class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-item">{book.title}</li>
      )
    })
  }

  render () {
    return  (
      <ul className="list-group col-sm-4"
        {this.renderList()}
      </ul>
    )
  }
}
