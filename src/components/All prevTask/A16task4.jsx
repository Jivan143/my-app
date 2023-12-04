import React, {Component} from "react";
class A16Task4 extends Component{

state={
    working: false,
    studying: false,
    companyName: "",
    designation: "",
    collegeName: "",
    course: "",
  };
  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };


  handleSubmit = () => {
    const { companyName, designation,collegeName,course } = this.state;
    if ((companyName && designation) || (collegeName && course)) {
        alert("All he details that have been filled");
    } 
    else {
      alert("Please fill Form.");
    }
  };
    render(){

        const { working, studying, companyName, designation, collegeName, course } = this.state;
        return(
            <div className="container m-10 p-1 border">
            <div className="form-check">
        <input type="checkbox" className="form-check-input" name="working"   checked={working} onChange={this.handleCheckboxChange}/>
        <label className="form-check-label" >Working</label>
        </div>
        {working ?( <div className="form-group">
        <h3>Provide Job Details</h3>
        <label> Company Name</label>
        <input type="text" className="form-control" id="companyName"name="companyName" placeholder="Enter Company Name"value={companyName} onChange={this.handleInputChange}/>
        <label> Designation</label>
        <input type="text" className="form-control" id="designation"name="designation" placeholder="Enter  Designation " value={designation} onChange={this.handleInputChange}/>
        </div>):("") }

        
        <div className="form-check">
        <input type="checkbox" className="form-check-input" name="studying"   checked={studying} onChange={this.handleCheckboxChange}/>
        <label className="form-check-label" >Studying</label>
        </div>
        {studying ?( <div className="form-group">
        <h3>Provide Course Details</h3>
        <label>College Name</label>
        <input type="text" className="form-control" id="collegeName"name="collegeName" placeholder="Enter College Name" value={collegeName} onChange={this.handleInputChange}/>
        <label>Course</label>
        <input type="text" className="form-control" id="course"name="course" placeholder="Enter  Course Name" value={course} onChange={this.handleInputChange}/>
        </div>):("") }

        <div>
        <button className="btn btn-primary m-2" onClick={this.handleSubmit}>Submit</button>
        </div>
        </div>
        )
    }
}
export default A16Task4;