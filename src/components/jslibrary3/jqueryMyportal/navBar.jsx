import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
                <Link className="navbar-brand col" to="/">MyPortal</Link>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addProduct">Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/stores">Stores</NavLink>
                        </li>
                   
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/NewStore">Add New Store</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
