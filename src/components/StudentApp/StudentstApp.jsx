import React, {Component} from "react"; 
import http from "../httpService";
import { Link } from "react-router-dom";
class StudentApp extends Component{
    state={
        student:{},
    }

    async componentDidMount() {
        let { id }= this.props.match.params;
        console.log("student",id);
        let resposne =await http.get(`/svr/students/${id}`);
        let {data}=resposne;
        console.log("student",data);

        this.setState({
            student:data
        })
    }
    render (){
    const {student}=this.state;

    return (
        <div className="container">
          <h6>Student Id: {student.id}  </h6>
          <h6>Name: {student.name}   </h6>
          <h6>Course: {student.course} </h6>
          <h6>Grade: {student.grade} </h6>
          <h6>City: {student.city} </h6>
            <Link to={`/students/${student.id}/delete`} >Delete</Link>  <></>
           <Link to={`/students/${student.id}/edit`} >Edit</Link>
        </div>
    )
}
}
export default StudentApp;