import React, { Component } from "react";

class MarksForm extends Component {
  state = {
    math: "",
    english: "",
    computers: "",
    science: "",
    totalMarks: this.props.initialValues ? this.props.initialValues.total : "",

  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const numericValue = value === "" ? "0" : value;
    this.setState({ [name]: numericValue });
  };
  
  handleSubmit = () => {
    const { math, english, computers, science } = this.state;
    const numericMath = parseInt(math) || 0;
    const numericEnglish = parseInt(english) || 0;
    const numericComputers = parseInt(computers) || 0;
    const numericScience = parseInt(science) || 0;
  
    const totalMarks =
      numericMath + numericEnglish + numericComputers + numericScience;
  
    const marks = {
      math: numericMath,
      english: numericEnglish,
      computers: numericComputers,
      science: numericScience,
      total: totalMarks,
    };
  
    this.props.updateStudentMarks(this.props.student.name, marks);
    this.setState({
      math: '',
      english: '',
      computers: '',
      science: '',
    });
    this.props.onCancel();
  };
  
  componentDidMount() {
    if (this.props.editMode) {
      const { math, english, computers, science } = this.props.student.marks;
      this.setState({
        math: math,
        english: english,
        computers: computers,
        science: science,
      });
    }
  }
  render() {
    const { math, english, computers, science } = this.state;
    const { student } = this.props;

    return (
      <div className="col-8 m-2"> 
        <h2>Enter marks for {student.name}</h2>
        <div className="row m-2">Maths
          <input type="number"name="math"value={math}onChange={this.handleInputChange}/>
        </div>
        <div className="row m-2">English
          <input
            type="number" name="english"value={english} onChange={this.handleInputChange}/>
        </div>
        <div className="row m-2">
          Computers
          <input type="number"name="computers"value={computers}onChange={this.handleInputChange}/>
        </div>
        <div className="row m-2"> Science
          <input type="number"name="science"value={science} onChange={this.handleInputChange}/>
        </div>
        <div className="col text-center m-2">
        <button className="btn btn-primary m-2" onClick={this.handleSubmit}>
      {this.props.editMode ? "Update" : "Submit"}
    </button>    
      </div>  </div>
    );
  }
}

export default MarksForm;
