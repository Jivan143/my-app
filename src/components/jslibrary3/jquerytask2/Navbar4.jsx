import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar4 extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col">
        <Link className="navbar-brand col" to="/">JX Company</Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/employee/all/1">Employee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/company/offices">Offices</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/company/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/company/NewEmp">New Employee</Link>
            </li>
          </ul>
      </nav>
    );
  }
}

export default NavBar4;
