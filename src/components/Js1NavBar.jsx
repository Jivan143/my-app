import React, {Component} from "react";
import { Link } from "react-router-dom";

class Js1NavBar extends Component{


    render(){

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
        <Link className="navbar-brand col" to="/">Portal101 </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/persons">All Persons
                    <span className="badge badge-pill badge-secondary"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/persons/add">Add Person
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
               
            </ul>
        </div>

        </nav>
        );
    }
}

export default Js1NavBar;