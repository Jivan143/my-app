import React, { Component } from "react";
import Book from "./book";
import NavBar from "./navBar";

class LibrarySystem extends Component {
  state = {
    books: [
      { name: "Harry Potter", author: "JK Rowling", issued: false },
      { name: "War and Peace", author: "Leo Tolstoy", issued: false },
      { name: "Malgudi Days", author: "RK Narayan", issued: false },
      { name: "Gitanjali", author: "RN Tagore", issued: false },
    ],
    issuedBooks: [],
  };

  handleIssueBook = (name) => {
    const updatedBooks = [...this.state.books];
    const index = updatedBooks.findIndex((ele) => ele.name === name);
    updatedBooks[index].issued = true;

    const issuedBook = updatedBooks[index];

    this.setState((prevState) => ({
      books: updatedBooks,
      issuedBooks: [...prevState.issuedBooks, issuedBook],
    }));
  };
  handleUnIssueBook = (name) => {
    const updatedBooks = [...this.state.books];
    const index = updatedBooks.findIndex((ele) => ele.name === name);
    updatedBooks[index].issued = false;

    const returnedBook = updatedBooks[index];

    this.setState((prevState) => ({
      books: updatedBooks,
      issuedBooks: prevState.issuedBooks.filter(
        (issuedBook) => issuedBook.name !== returnedBook.name
      ),
    }));
  };

  render() {
    const { books,issuedBooks } = this.state;
    const unissuedBooks = books.filter((book) => !book.issued);
    let bookcount=unissuedBooks.length>0 ?"": "Library is Empty "


    return (
        <div>        <NavBar count={unissuedBooks.length} qty={books.length-unissuedBooks.length} />
      
      <div className="container m-1">
        <h3 className="text-center">Books in Library</h3>
        <div className="row m-1">
            <h6 className="text-center">{bookcount}</h6>
          {unissuedBooks.map((book, index) => (
            <Book
              book={book}
              onIssue={() => this.handleIssueBook(book.name)}
            />
          ))}
        </div>
        <h4 className="m-2">Issued Books</h4>
        <div className="col-md-4 m-1 ">
          {issuedBooks.map((issuedBook) => (
            <Book  book={issuedBook} 
            onReturn={() => this.handleUnIssueBook(issuedBook.name)}
            
            />
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default LibrarySystem;
