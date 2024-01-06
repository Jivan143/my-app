import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

class AssignmentNavbar extends React.Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 row col-12">
                <Link className="navbar-brand col" to="/">
                    Shops System
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Dropdown>
                            <Dropdown.Toggle className='text-light' variant="" id="shopsDropdown">
                                Shops
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/shops">
                                    View
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/shops/add">
                                    Add
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle className='text-light' variant="" id="productsDropdown">
                                Products
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/products">
                                    View
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/add">
                                    Add
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/purchases">
                                Purchases
                                <span className="badge badge-pill badge-secondary"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/purchases/add">
                                New Purchase
                                <span className="badge badge-pill badge-secondary"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AssignmentNavbar;
