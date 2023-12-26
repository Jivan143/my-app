import React, {Component} from "react";
import { Link } from "react-router-dom";

class EmpDBNav extends Component{


    render(){

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark  row ">
        <Link className="navbar-brand col" to="/">Employees </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/employees">Employees
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/employees/add">New Employee
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
               
            </ul>
        </div>

        </nav>
        );
    }
}

export default EmpDBNav;