import React, { Component } from "react";

class NewEmp extends Component {
  state = {
    EmpInfo: this.props.EmpInfo,
    selectedDepts: [],
    selectedDesignations: [], 
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    const { name, value, checked } = input;
    let s1 = { ...this.state };

    if (name === "dept") {
      // Handle department checkboxes
      if (checked) {
        s1.selectedDepts.push(value);
      } else {
        s1.selectedDepts = s1.selectedDepts.filter((dept) => dept !== value);
      }
    } else if (name === "designation") {
      // Handle designation checkboxes
      if (checked) {
        s1.selectedDesignations.push(value);
      } else {
        s1.selectedDesignations = s1.selectedDesignations.filter(
          (designation) => designation !== value
        );
      }
    } else {
      s1.EmpInfo[name] = value;
    }

    this.setState(s1);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  
    const { EmpInfo, selectedDepts, selectedDesignations } = this.state;
  
    const updatedEmpInfo = {
      ...EmpInfo,
      dept: selectedDepts,
      designation: selectedDesignations,
    };
  
    this.props.onSubmit(updatedEmpInfo);
  
    this.props.history.push("/employee/all/1");
  };
  
  render() {
    const { id, name } = this.state.EmpInfo;
    const { emps } = this.props;
    let dddept = emps.map((ele) => ele.dept);
    let uniquedddept = dddept.filter((ele, index) => dddept.indexOf(ele) === index);
    let checdept=["Technology", "Operations","Finance","HR","Marketing"];
    let dddesign = emps.map((ele) => ele.designation);
    let uniquedddesign = dddesign.filter((ele, index) => dddesign.indexOf(ele) === index);
    let checdesign=["Manager","Vice President","Trainee","Executive"];
    return (
      <div className="container">
        <div className="form-group">
          <label>Employee Id</label>
          <input type="text" className="form-control"id="id"name="id"placeholder="Enter Store Id"value={id}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"className="form-control"id="name"name="name"placeholder="Enter Emp name"
            value={name} onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <h5>Department</h5>
          {checdept.map((question) => (
            <div key={question}>
              <input
                type="checkbox"
                id={`dept-${question}`}
                name="dept"
                value={question}
                checked={this.state.selectedDepts.includes(question)}
                onChange={this.handleChange}
              />
              <label htmlFor={`dept-${question}`}>{question}</label>
            </div>
          ))}
        </div>

        <div className="form-group">
          <h5>Designation</h5>
          {checdesign.map((question) => (
            <div key={question}>
              <input
                type="checkbox"
                id={`designation-${question}`}
                name="designation"
                value={question}
                checked={this.state.selectedDesignations.includes(question)}
                onChange={this.handleChange}
              />
              <label htmlFor={`designation-${question}`}>{question}</label>
            </div>
          ))}
        </div>

        <div className="col text-center">
          <button className="btn btn-primary btn-sm" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default NewEmp;
