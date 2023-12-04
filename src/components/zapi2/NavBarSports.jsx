import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarSports extends Component {
  render() {
    const arr1=["Cricket","Football"];

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
        <Link className="navbar-brand col" to="/stars/sportName/All">SportStar</Link>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/stars/sportName/All">All</Link>

            </li>
            {arr1.map((ele)=>(
                <li className="nav-item">
                <Link className="nav-link" to={`/stars/sportName/${ele}`}>{ele}</Link>

              </li>
            ))}
           
           
            <li className="nav-item">
              <Link className="nav-link" to="/stars/add">Add Star</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBarSports;