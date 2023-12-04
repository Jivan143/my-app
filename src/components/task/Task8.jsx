import React, { Component } from "react";

class Task8 extends Component {
  state = {
    employees: [
      { name: "Jack Smith", level: 2, dept: "Tech", designation: "Manager", salary: 24000 },
      { name: "Mary Robbins", level: 3, dept: "Fin", designation: "Manager", salary: 28000 },
      { name: "Steve Williams", level: 4, dept: "Ops", designation: "President", salary: 35000 },
      { name: "Bob Andrews", level: 1, dept: "Fin", designation: "Trainee", salary: 16500 },
      { name: "Dave Martin", level: 2, dept: "Fin", designation: "Manager", salary: 21700 },
      { name: "Julia Clarke", level: 3, dept: "Ops", designation: "Manager", salary: 26900 },
      { name: "Kathy Jones", level: 4, dept: "Tech", designation: "President", salary: 42500 },
      { name: "Tom Bresnan", level: 2, dept: "Tech", designation: "Manager", salary: 22200 },
    ],
  };

  show = () => {
    const { employees } = this.state;
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    const averageSalary = totalSalary / employees.length;
    const salaries = employees.map((employee) => employee.salary);
    const maxSalary = salaries.reduce((max, salary) => (salary > max ? salary : max));
    const minSalary = salaries.reduce((min, salary) => (salary < min ? salary : min));
  
    return (
      <div>
        <div className="row border bg-primary text-white">
          <div className="col-3 border">Name</div>
          <div className="col-2 border">Level</div>
          <div className="col-2 border">Dept</div>
          <div className="col-3 border">Designation</div>
          <div className="col-2 border">Salary</div>
        </div>
        {employees.map((ele, index) => {
          const { name, level, dept, designation, salary } = ele;
          return (
            <div className="row border bg-light">
              <div className="col-3 border">{name}</div>
              <div className="col-2 border">{level}</div>
              <div className="col-2 border">{dept}</div>
              <div className="col-3 border">{designation}</div>
              <div className="col-2 border">{salary}</div>
            </div>
          );
        })}
        <div className="row border bg-warning">
          <div className="col-6 text-center">
            <h6>Employee Details</h6>
            <div>Number of employees: {employees.length}</div>
            <div>Tech: {employees.filter((employee) => employee.dept === "Tech").length}</div>
            <div>Fin: {employees.filter((employee) => employee.dept === "Fin").length}</div>
            <div>Ops: {employees.filter((employee) => employee.dept === "Ops").length}</div>
          </div>
          <div className="col-6 text-center">
            <h6>Salary Details</h6>
            <div>Total Salary: {totalSalary}</div>
            <div>Average Salary: {averageSalary}</div>
            <div>Max Salary: {maxSalary}</div>
            <div>Min Salary: {minSalary}</div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container pl-2">
        <div className="row text-center"><h4>Welcome to the Employee Portal</h4></div>
        {this.show()}
      </div>
    );
  }
}

export default Task8;
