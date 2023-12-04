import React,{Component} from "react";
import { Link } from "react-router-dom";
class NavBarbook extends Component{



    render (){


        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
        <Link className="navbar-brand col" to="/books">BookSite </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/book/new">New Arrivals
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/books/children">Children
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/books/Fiction">Fiction
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/books/Mystery">Mystery
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/books/Management">Management
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/books/All">All Books
                    </Link>
                </li>
   
            </ul>
        </div>

        </nav>
        )
    }
}
export default NavBarbook;