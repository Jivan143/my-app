import React, { Component } from "react";

class StudentForm extends Component {
  state = {
    name: "",
    course: "",
    year: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { name, course, year } = this.state;
    const student = {
      name,
      course,
      year,
      marks: null,
    };
    this.props.addStudent(student);
    this.setState({
      name: "",
      course: "",
      year: "",
    });
    this.props.onCancel();
  };

  render() {
    const { name, course, year } = this.state;

    return (
      <div className=" col-8">
        
        <h2>New Student</h2>
        <div className="row m-2">
          Name
          <input type="text"name="name"value={name}onChange={this.handleInputChange}/>
        </div>
        <div  className="row m-2">
          Course
          <input type="text" name="course"value={course}onChange={this.handleInputChange}/>
        </div>
        <div className="row m-2" >
          Year
          <input type="text" name="year" value={year} onChange={this.handleInputChange}/>
        </div>
        <div className="col text-center m-2">
        <button className=" btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default StudentForm;
