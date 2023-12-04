import React,{Component} from "react";
import http from "./httpService";
class DeletePerson extends Component{

    async componentDidMount(){
        const {id}=this.props.match.params;
        let resposne =await http.deleteApi(`/persons/${id}`);

        this.props.history.push("/persons");
    }
    render (){
        return "";
    }


}
export default DeletePerson;