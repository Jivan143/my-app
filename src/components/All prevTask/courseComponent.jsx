

import React, { Component} from "react";
import CourseForm from "./courseForm";
import StudentForm from "../studentForm";
class CourseComponent extends Component{
    state={
        courses:[
            {coursename:"JavaScript",faculty:"Bill",lectures:20,students:[]},
            {coursename:"Java",faculty:"Steve",lectures:28,students:[]},
            {coursename:"Node",faculty:"Bob",lectures:29,students:[]},
            {coursename:"HTML",faculty:"Jack",lectures:32,students:[]},
    ],
    view :0,
    editCourseindex:-1,
    viewCourseIndex:-1,
    };
    handleCourse =(course)=>{
        let s1={...this.state};
        s1.editCourseindex >=0 ? (s1.courses[s1.editCourseindex] = course)
        :(s1.courses.push(course));
        s1.view=0;
        s1.editCourseindex= -1,
        this.setState(s1);

    };
    handleStudent =(student)=>{
        let s1={...this.state};
        s1.courses[s1.viewCourseIndex].students.push(student);
        s1.view=2;
        this.setState(s1);

    };
    showForm =()=>{
        let s1={...this.state};
        s1.view= 1;
        this.setState(s1);
    }
    showCourseDetails =()=>{
        let {courses,viewCourseIndex,view}=this.state;
        let {coursename,faculty,lectures,students}=courses[viewCourseIndex]
        return (
        <div className="container">
        <h5>Course Name :{coursename}</h5>
        <h5>Faculty  :{faculty}</h5>
        <h5>Number of Lecturese :{lectures}</h5>
        <h5>Number of Students :{students.length}</h5>
        {students.length ===0 ? ("") :(
        <React.Fragment>
        {students.map((st) => <div className="row">
            <div className="col-6 border">{st.id}</div>
            <div className="col-6 border">{st.name}</div>
        </div>)}
        </React.Fragment>
        )}
        {view === 2 ? (
    <button
     className="btn btn-primary m-2" onClick={() => this.showStudentForm()}
     > Enroll More Students</button>
):(
    <StudentForm student={{}}  onSubmit={this.handleStudent} />

)}
    <button className="btn btn-primary m-2" onClick={() => this.showCourrseList()}>Shoow List of Course </button>
        </div>
        );
     
    };

    editCourse=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editCourseindex=index;
        this.setState(s1);
    };
    deleteCourse =(index)=>{
        let s1={...this.state};
        s1.courses.splice(index,1);
        this.setState(s1);
    };
    viewCourseDetails =(index)=>{
        let s1={...this.state};
        s1.view=2;
        s1.viewCourseIndex=index;
        this.setState(s1);
    };
    showCourrseList =()=>{
        let s1={...this.state};
        s1.view=0;
        s1.viewCourseIndex=-1;
        this.setState(s1);
    };
    showStudentForm =() =>{
        let s1={...this.state};
        s1.view=3;
        this.setState(s1);
    };
        


    render() {
        let course ={coursename: "",faculty:"", lectures: ""};
        let {courses, view, viewCourseIndex} = this.state;
        
        return view === 0 ? (
            <div className="container text-center">
                <div className="row border bg-info">
                <div className="col-3 ">Course Name</div>
                <div className="col-2 border">Faculty</div>
                <div className="col-2 ">Lect.</div>
                <div className="col-2 border">No students</div>
                <div className="col-3 "></div>

                </div>
                {courses.map((p1, index) => (
                <div className="row border" key={index}>
                <div className="col-3">{p1.coursename}</div>
                <div className="col-2 border">{p1.faculty}</div>
                <div className="col-2">{p1.lectures}</div>
                <div className="col-2 border" onClick={()=>this.viewCourseDetails(index)}>{p1.students.length}</div>
                <div className="col-3 "><button className="btn btn-success" onClick={()=>this.editCourse(index)}>Edit</button>
                <button className="btn btn-warning" onClick={()=>this.deleteCourse(index)}>Delete</button>
                </div>
                </div>
                ))}

                <button className=" btn btn-primary" onClick={()=>this.showForm()}>Add New Course</button>
            </div>
) : view === 1 ? (
    <CourseForm 
            course={viewCourseIndex >= 0 ? courses[viewCourseIndex] : course} 
            onSubmit={this.handleCourse}
            edit={viewCourseIndex >= 0}

          />
          ) : view === 2 ? (
            this.showCourseDetails()
          ) : (
            this.showCourseDetails() 
          );        }
    }
    

export default CourseComponent;