
import React,{Component} from "react";
import http from "../httpService";
class customerDlt extends Component{
    state = {
        deleted: false,
      };
    
      async componentDidMount() {
        const { id } = this.props.match.params;
        try {
          await http.deleteApi(`/customers/${id}`);
          this.setState({ deleted: true });
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      
        this.props.history.push("/customers");
    }
    render (){
        return null;
    }


}
export default customerDlt;
