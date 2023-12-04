import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book, onIssue,onReturn } = this.props;
    const { name, author,issuebook, issued } = book;

    if (issued) {
      return (
        <div className="col-5 border text-center bg-danger m-1 p-1">
          <div className="display-6 text-white">{name}</div>
          <p>{author}</p>
          <button className="btn btn-light" onClick={onIssue}>
            Issue
          </button>
          
        </div>
        
      );
    }  {
      return (
        <div className="col">
          <ul>
            <li> {name}  <button className="btn btn-secondary btn-sm" onClick={onReturn}>
            Return
          </button></li>
          </ul>
        </div>
      );
    }
  }
}

export default Book;
