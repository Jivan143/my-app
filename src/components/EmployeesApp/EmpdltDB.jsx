
import React,{Component} from "react";
import http from "./Httpserviceemp";
class EmpDltDb extends Component{
    state = {
        deleted: false,
      };
    
      async componentDidMount() {
        const { empCode } = this.props.match.params;
        try {
          await http.deleteApi(`/svr/employess/delete/${empCode}`);
          this.setState({ deleted: true });
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      
        this.props.history.push("/employess");
    }
    render (){
        return null;
    }


}
export default EmpDltDb;
