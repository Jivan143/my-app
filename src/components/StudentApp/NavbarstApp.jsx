import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class NavbarstApp extends Component {
  render() {
    let names = ["JS", "React", "Node","Angular"];
    return (
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand as={Link} to="/">
StudentPortal        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/students">Student</Nav.Link>
            <Nav.Link as={Link} to="/students/add">Add a Student</Nav.Link>
            <NavDropdown title="Courses" id="navbarDropdown">
              {names.map((n1) => (
                <NavDropdown.Item
                  key={n1}
                  className=""
                  as={Link}
                  to={`/students/${n1}`}
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

export default NavbarstApp;
