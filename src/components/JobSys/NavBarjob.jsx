import React, { Component} from "react";
import { Link } from "react-router-dom";
class NavBarJob extends Component{

    render(){

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
        <Link className="navbar-brand col" to="/course/All/no data">JobSys </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/course/React/no data">React
                    <span className="badge badge-pill badge-secondary"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/course/Angular/no data">Angular
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/course/Android/no data">Android
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
         

            </ul>
        </div>

        </nav>
        );
    }
}
export default NavBarJob;