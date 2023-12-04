import React, { Component} from "react";
import { Link } from "react-router-dom";
class NavBarMobile extends Component{

    render(){

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
        <Link className="navbar-brand col" to="/mobile/All">Mobiles </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                    <Link className="nav-link" to="/mobile/All">All Brands
                    <span className="badge badge-pill badge-secondary"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mobile/Xiaomi">Xiaomi
                    <span className="badge badge-pill badge-secondary"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mobile/Samsung">Samsung
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mobile/Realme">Realme
                    <span className="badge badge-pill badge-secondary"></span>

                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mobile/Oppo">Oppo

                    </Link>
                </li>
         

            </ul>
        </div>

        </nav>
        );
    }
}
export default NavBarMobile;