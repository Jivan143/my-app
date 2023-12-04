import React, { Component} from "react";
import { Link } from "react-router-dom";
class NavBar2 extends Component{

    render(){

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
        <Link className="navbar-brand col" to="/">JobSys </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/course/React">React
                    <span className="badge badge-pill badge-secondary"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/course/Angular">Angular
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/course/Javascript">Javascript
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
                <li className="nav-item">
              <Link className="nav-link" to="/stores">Lectures</Link>
              </li>

            </ul>
        </div>

        </nav>
        );
    }
}
export default NavBar2;