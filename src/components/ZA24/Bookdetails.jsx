import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../httpService";
class BookDetails extends Component {
  state = {
    book: {},
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    let response = await http.get(`/booksapp/book/${id}`);
    let { data } = response;
    console.log(data);

    this.setState({
      book: data,
    });
  }

  render() {
    const { book } = this.state;
    return (
      <div className="container p-4 ">

        <h4>Book : {book.name}</h4>
        <div className="row border">
        <div className="col-3">Author</div><div className="col-9">{book.author}</div>
        </div>
        <div className="row border">
        <div className="col-3">Genre</div><div className="col-9">{book.genre}</div>
        </div>
        <div className="row border">
        <div className="col-3">Description</div><div className="col-9">{book.description}</div>
        </div>
        <div className="row border">
        <div className="col-3">Blurb</div><div className="col-9">{book.blurb}</div>
        </div>
        <div className="row border">
        <div className="col-3">Review</div><div className="col-9">{book.review}</div>
        </div>
        <div className="row border">
        <div className="col-3">Price</div><div className="col-9">{book.price}</div>
        </div>
        <div className="row border">
        <div className="col-3">Rating</div><div className="col-9">{book.avgrating}</div>
        </div>
      

        

      
      </div>
    );
  }
}

export default BookDetails;
