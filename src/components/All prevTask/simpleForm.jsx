import React, { Component } from "react";

class SimpleForm extends Component {
  state = {
    name: "",
    description: "",
    duration: "",
    faculty: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, duration, faculty } = this.state;
    console.log("Course Details Submitted. Name:", name, "Description:", description, "Duration:", duration, "Faculty:", faculty);
  };
render() {
    const { name, description, duration, faculty } = this.state;
    return ( <div>
        <div className="form-group">
        <h5>"Enter Details of Person"</h5>

            <label>Name of the Course</label>
            <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter name" onChange={this.handleChange} />
        </div>
          <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" id="age" name="age" value={description} placeholder="Enter Age" onChange={this.handleChange} />
      </div>
      <div className="form-group">
          <label>Duration</label>
          <input type="text" className="form-control" id="age" name="age" value={duration} placeholder="Enter Age" onChange={this.handleChange} />
      </div>
      <div className="form-group">
          <label>Faculty</label>
          <input type="text" className="form-control" id="age" name="age" value={faculty} placeholder="Enter Age" onChange={this.handleChange} />
      </div>
      <button className="btn btn-primary" onClick={this.handleSubmit}>
          {this.props.edit ? "Update" : "Submit"}
        </button>      </div>
    );
}
}
export default SimpleForm;