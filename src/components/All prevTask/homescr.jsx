import React, { Component } from "react";
import StudentForm from "../studentForm";
import MarksForm from "../marksForm";

class HomeScr extends Component {
  state = {
    students: [],
    currentStudent: null,
    showStudentForm: false,
    showMarksForm: false,
    editMode: false,
    showStudentTable: false, 
  };
  editStudentMarks = (student) => {
    if (student) {
      this.setState({
        currentStudent: student,
        showMarksForm: true,
        editMode: true,
        showStudentTable:false
      });
    }
  };
  addStudent = (student) => {
    this.setState((ele) => ({
      students: [...ele.students, student],
      showStudentForm: false,
      showStudentTable:true
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
        showStudentTable:true,
      };
    });
  };

  render() {
    const { students, currentStudent, showStudentForm, showMarksForm,showStudentTable, } =this.state;
    const noStudents = students.length === 0;

    return (
      <div>
        <h5>Welcome to the Student Management System</h5>
        <button className=" btn btn-primary m-2" onClick={() => this.setState({ showStudentForm: true,showStudentTable:false,showMarksForm:false })}>
          New Student
        </button>
        <button className="btn btn-primary m-2" onClick={() => this.setState({ showStudentForm: false,showStudentTable:true })}>
  List of Students
</button>
 
        {showStudentForm && (
          <StudentForm
            addStudent={this.addStudent}
            onCancel={() => this.setState({ showStudentForm: false  })}
          />
        )}

{showMarksForm && (
  <MarksForm
    student={currentStudent}
    updateStudentMarks={this.updateStudentMarks}
    onCancel={() => this.setState({ showMarksForm: false })}
    editMode={this.state.editMode}
    initialValues={currentStudent.marks}
  />
)}


{noStudents && showStudentTable && (
        <p>There are 0 students.</p>
      )}

{showStudentTable && students.length > 0 &&  (
          <div className="container">
            <div className="row border bg-dark text-light">
                <div className="col-2">Name</div>
                <div className="col-3 border" >Course</div>
                <div className="col-2">Year</div>
                <div className="col-3 border">Total Marks</div>
                <div className="col-2">Result</div>
            </div>
            {students.map((student) => (
              <div className="row border" >
                <div className="col-2">{student.name}</div>
                <div className="col-3 border">{student.course}</div>
                <div className="col-2">{student.year}</div>
                <div className="col-3 border">{student.marks ? student.marks.total : "No Data"}</div>
                  <div className="col-2 border">
                  {student.marks ? (
                    <button className="btn btn-info" onClick={() => this.editStudentMarks(student)}>Edit</button>
            ) : (<button className="btn btn-info" onClick={() => {
                this.setState({currentStudent: student,showMarksForm: true,editMode: false, showStudentTable:false});
              }}>Enter</button>
          )}
              </div>
              </div>
              ))}
             
                  </div>
                    )}
      </div>
    );
  }
}

export default HomeScr;
