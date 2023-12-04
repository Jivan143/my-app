import React, { Component } from "react";
import StudentForm from "./studentForm";
import MarksForm from "./marksForm";

class Task5Main extends Component {
  state = {
    students: [],
    currentStudent: null,
    showStudentForm: false,
    showMarksForm: false,
    editMode: false,
  };
  editStudentMarks = (student) => {
    if (student) {
      this.setState({
        currentStudent: student,
        showMarksForm: true,
        editMode: true,
      });
    }
  };
  addStudent = (student) => {
    this.setState((ele) => ({
      students: [...ele.students, student],
      showStudentForm: false,
    }));
  };

  updateStudentMarks = (studentName, marks) => {
    this.setState((ele) => {
      const updatedStudents = ele.students.map((student) => {
        if (student.name === studentName) {
          return {
            ...student,
            marks: marks,
          };
        }
        return student;
      });
      return {
        students: updatedStudents,
        showMarksForm: false,
      };
    });
  };

  render() {
    const { students, currentStudent, showStudentForm, showMarksForm } =this.state;
    const noStudents = students.length === 0;

    return (
      <div>
        <h5>Welcome to the Student Management System</h5>
        <button className=" btn btn-Info  m-2" onClick={() => this.setState({ showStudentForm: true })}>
          New Student
        </button>
        <button className=" btn btn-primary m-2" onClick={() => this.setState({ showMarksForm: true })}>
          List of Students
        </button>

        {showStudentForm && (
          <StudentForm
            addStudent={this.addStudent}
            onCancel={() => this.setState({ showStudentForm: false })}
          />
        )}

        {showMarksForm && students.length != 0 && (
          <MarksForm
            student={currentStudent}
            updateStudentMarks={this.updateStudentMarks}
            onCancel={() => this.setState({ showMarksForm: false })}
          />
        )}
{showMarksForm && currentStudent && (
  <MarksForm
    student={currentStudent}
    updateStudentMarks={this.updateStudentMarks}
    onCancel={() => this.setState({ showMarksForm: false })}
    editMode={this.state.editMode}
  />
)}

{students.length==0 && (
        <p>There are 0 students.</p>
      )}

        {students.length > 0  && (
          <div className="container">
            <div className="row border bg-dark text-light">
                <div className="col-2">Name</div>
                <div className="col-2 border" >Course</div>
                <div className="col-2">Year</div>
                <div className="col-2 border">Total Marks</div>
                <div className="col-2">Result</div>
                <div className="col-2 border">Action</div>
            </div>
            {students.map((student) => (
              <div className="row border" >
                <div className="col-2">{student.name}</div>
                <div className="col-2 border">{student.course}</div>
                <div className="col-2">{student.year}</div>
                <div className="col-2 border">{student.marks ? student.marks.total : "No Data"}</div>
                  <div className="col-2 ">{student.marks ? student.marks.result : "No Data"}</div>
                  <div className="col-2 border">
                  {student.marks ? (
            <button className="btn btn-info"onClick={() => this.editStudentMarks(student)}>Edit
            </button>) : (<button className="btn btn-info" onClick={() => {
                this.setState({currentStudent: student,showMarksForm: true,editMode: false,});
              }}>Enter</button>
          )}
              </div>
              </div>
              ))}
              {showMarksForm && (
              <MarksForm
                student={currentStudent}
                updateStudentMarks={this.updateStudentMarks}
                onCancel={() => this.setState({ showMarksForm: false })}
                editMode={this.state.editMode} 
              />
            )}
                  </div>
                    )}
      </div>
    );
  }
}


export default  Task5Main;
