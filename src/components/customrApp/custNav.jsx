import React, {Component} from "react";
import { Link } from "react-router-dom";

class CustNav extends Component{


    render(){

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark  row ">
        <Link className="navbar-brand col" to="/">Customer </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/customers">Show Customrs
                    <span className="badge badge-pill badge-secondary"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/customers/add">New Customer
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
               
            </ul>
        </div>

        </nav>
        );
    }
}

export default CustNav;