import React, { Component} from "react";
import { Link } from "react-router-dom";
class NavBarPerson extends Component{

    render(){

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
        <div className="navbar-brand col" >MyCompany </div>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                    <Link className="nav-link" to="/emps/All">All
                    <span className="badge badge-pill badge-secondary"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/emps/New Delhi">New Delhi
                    <span className="badge badge-pill badge-secondary"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/emps/Noida">Noida
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
         

            </ul>
        </div>

        </nav>
        );
    }
}
export default NavBarPerson;