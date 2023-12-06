import React, {Component} from "react";
import { Link } from "react-router-dom";

class CarNav extends Component{


    render(){

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger  row ">
        <Link className="navbar-brand col-10" to="/">Home </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               
                <li className="nav-item col-2">
                    <Link className="nav-link" to="/cars/add">New Car
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
               
            </ul>
        </div>

        </nav>
        );
    }
}

export default CarNav;