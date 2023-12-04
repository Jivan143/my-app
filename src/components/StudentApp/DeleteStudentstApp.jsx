
import React,{Component} from "react";
import http from "../httpService";
class DeleteStudentstApp extends Component{
    state = {
        deleted: false,
      };
    
      async componentDidMount() {
        const { id } = this.props.match.params;
        try {
          await http.deleteApi(`/svr/students/${id}`);
          this.setState({ deleted: true });
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      
        this.props.history.push("/students");
    }
    render (){
        return null;
    }


}
export default DeleteStudentstApp;
