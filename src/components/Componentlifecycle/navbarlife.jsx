import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class NavBarlife extends Component {
  render() {
    let names = ["George", "Carla", "Tim"];
    return (
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand as={Link} to="/">
          Component LifeCycle Example
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/compA">
              AAAA
            </Nav.Link>

            <NavDropdown title="BBBB" id="navbarDropdown">
              {names.map((n1) => (
                <NavDropdown.Item
                  key={n1}
                  className=""
                  as={Link}
                  to={`/compB/${n1}`}
                >
                  {n1}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBarlife;
