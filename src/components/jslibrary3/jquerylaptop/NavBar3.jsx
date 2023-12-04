import React, { Component} from "react";
import { Link } from "react-router-dom";
class NavBar3 extends Component{

    render(){
          const {brands}=this.props;
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
        <Link className="navbar-brand col" to="/">Laptops </Link>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {brands.map((brand)=>(
                     <li className="nav-item" key={brand}>
                     <Link className="nav-link" to={`/all/1?brand=${brand}`}>{brand}
                     </Link>
                 </li>
                ))}
            </ul>
        </div>

        </nav>
        );
    }
}
export default NavBar3;