import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar8 extends Component {
  render() {
    let arr = ["Harry Potter", "Agatha Christie", "Premchand", "Jane Austen","myBooks"];
    return (
      <nav className="navbar navbar-expand-sm navbar bg-light p-2 row col-12">
        <Link className="navbar-brand col h3" to="/Homepage">
        <i className="fa fa-book "></i>
        </Link>        
        <div className="" id="navbarSupportedContent ">
          <ul className="navbar-nav mr-auto">
            {arr.map((ele) => (
                <Link className="nav-link text-dark" to={`/books/${ele}`} key={ele}>
                  {ele}
                </Link>
            ))}
                <Link className="nav-link text-dark" to={`/books/Settings`}>Settings </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar8;
