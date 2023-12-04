import React, { Component } from "react";

class CourseComp extends Component {
  state = {
    arr: [],
    fromindex: -1,
    editindex: -1,
    coursename: "", // Added state for input value
  };

  // Handle input change
  handleChange = (e) => {
    this.setState({
      coursename: e.target.value,
    });
  };

  // Handle form submission
  handleSubmit = () => {
    const { arr, coursename, fromindex, editindex } = this.state;

    if (fromindex === -1 && editindex === -1) {
      // Switch to edit mode (show text field)
      this.setState({
        fromindex: 1,
      });
    } else if (coursename.trim() !== "") {
      if (editindex === -1) {
        // Add course to the list
        this.setState((prevState) => ({
          arr: [...prevState.arr, coursename],
          coursename: "",
          fromindex: -1, // Switch back to submit mode
        }));
      } else {
        // Edit course and switch back to submit mode
        const updatedArr = [...arr];
        updatedArr[editindex] = coursename;
        this.setState({
          arr: updatedArr,
          coursename: "",
          fromindex: -1,
          editindex: -1,
        });
      }
    }
  };

  handleEdit = (index) => {
    this.setState({
      coursename: this.state.arr[index], 
      fromindex: 1, 
      editindex: index, 
    });
  };

  render() {
    const { arr, coursename, fromindex } = this.state;

    return (
      <div className="container p-2 ml-2">
        <div className="row">
          {fromindex === -1 ? (
            ''
          ) : (
            <div className="form-group">
              <label>Course Name</label>
              <input
                type="text"
                className="form-control"
                id="coursename"
                name="coursename"
                placeholder="Enter Course name"
                value={coursename}
                onChange={this.handleChange}
              />
            </div>
          )}
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            {fromindex === -1 ? ("Add Course") : ("Submit")}
          </button>
        </div>
        <div className="row">
          <h4>List of Courses</h4>
          {arr.length === 0 ? (
            <h4>There are no Courses.</h4>
          ) : (
            <ul>
              {arr.map((course, index) => (
                <li key={index}>
                  {course}
                  <button
                    className="btn btn-sm btn-warning m-2"
                    onClick={() => this.handleEdit(index)}>Edit</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default CourseComp;
