import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmpDBNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDepD: false,
      showDesD: false,
      selectedDepartment: null,
      selectedDesignation: null,
      departments: ["Finance", "HR", "Technology", "Marketing", "Operations"],
      designations: ["VP", "Manager", "Trainee"],
    };
  }

  makedepd = () => {
    this.setState((prevState) => ({
        showDepD: !prevState.showDepartmentDropdown,
        showDesD: false,
    }));
  };

  makedesd = () => {
    this.setState((prevState) => ({
        showDesD: !prevState.showDesD,
      showDepD: false,
    }));
  };

  selectDepartment = (department) => {
    this.setState({
      selectedDepartment: department,
      showDepD: false,
    });
  };

  selectDesignation = (designation) => {
    this.setState({
      selectedDesignation: designation,
      showDesD: false,
    });
  };

  hideDropdowns = () => {
    this.setState({
        showDepD: false,
        showDesD: false,
    });
  };

  render() {
    const { showDepD, showDesD, selectedDepartment, selectedDesignation, departments, designations } = this.state;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark row">
        <Link className="navbar-brand col" to="/">
          Employees
        </Link>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/employees">
                Employees
                <span className="badge badge-pill badge-secondary"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employees/add">
                New Employee
                <span className="badge badge-pill badge-secondary"></span>
              </Link>
            </li>
            <li className={`nav-item dropdown ${showDepD ? "show" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="departmentDropdown"
                role="button"
                onClick={this.makedepd}
              >
                Departments
              </a>
              <div
                className={`dropdown-menu ${showDepD ? "show" : ""}`}
                aria-labelledby="departmentDropdown"
              >
                {departments.map((department, index) => (
                  <Link
                    className={`dropdown-item ${selectedDepartment === department ? "active" : ""}`}
                    key={index}
                    to={`/employees?department=${department}`}
                    onClick={() => this.selectDepartment(department)}
                  >
                    {department}
                  </Link>
                ))}
              </div>
            </li>
            <li className={`nav-item dropdown ${showDesD ? "show" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="designationDropdown"
                role="button"
                onClick={this.makedesd}
              >
                Designations
              </a>
              <div
                className={`dropdown-menu ${showDesD ? "show" : ""}`}
                aria-labelledby="designationDropdown"
              >
                {designations.map((designation, index) => (
                  <Link
                    className={`dropdown-item ${selectedDesignation === designation ? "active" : ""}`}
                    key={index}
                    to={`/employees?designation=${designation}`}
                    onClick={() => this.selectDesignation(designation)}
                  >
                    {designation}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default EmpDBNav;
