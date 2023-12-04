import React, {Component} from "react"; 
import http from "./httpService";
import { Link } from "react-router-dom";
class Person extends Component{
    state={
        person:{},
    }

    async componentDidMount() {
        let { id }= this.props.match.params;
        console.log("prsses",id);
        let resposne =await http.get(`/persons/${id}`);
        let {data}=resposne;
        console.log("prsses",data);

        this.setState({
            person:data
        })
    }
    render (){
    const {person}=this.state;

    return (
        <div className="container">
          <h4>Details of Person  </h4>
          <h6>Person Id: {person.id}  </h6>
          <h6>Name: {person.name}   </h6>
          <h6>Age: {person.age} </h6>
          <h6>City: {person.city} </h6>
          <h6>Company: {person.company} </h6>
          <Link to={`/persons/${person.id}/delete`} >Delete</Link> <br />
          <Link to={`/persons/${person.id}/edit`} >Edit</Link>
        </div>
    )
}
}
export default Person;