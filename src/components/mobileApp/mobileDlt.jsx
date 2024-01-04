
import React,{Component} from "react";
import http from "./mobilehttpservive";
class MobileDltDb extends Component{
    state = {
        deleted: false,
      };
    
      async componentDidMount() {
        const { id } = this.props.match.params;
        try {
          await http.deleteApi(`/svr/mobiles/delete/${id}`);
          this.setState({ deleted: true });
        } catch (error) {
          console.error("Error deleting mobile:", error);
        }
      
        this.props.history.push("/mobiles");
    }
    render (){
        return null;
    }


}
export default MobileDltDb;
