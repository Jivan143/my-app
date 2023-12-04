import React, { Component } from "react";
import { Link } from "react-router-dom";

class GuarianNavBar extends Component {
  render() {
    let arr = ["sports", "cricket", "movies", "education"];
    return (
      <nav className="navbar navbar-expand-sm navbar bg-danger p-2 row col-12">
        <Link className="navbar-brand col h3" to="/">
          NewsSite
        </Link>
        <div className="" id="navbarSupportedContent ">
          <ul className="navbar-nav mr-auto">
            {arr.map((ele) => (
                <Link className="nav-link text-light" to={`/Guardian/${ele}`} key={ele}>
                  {ele}
                </Link>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default GuarianNavBar;
