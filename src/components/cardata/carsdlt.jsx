
import React,{Component} from "react";
import http from "../httpService";
class CarsDlt extends Component{
    state = {
        deleted: false,
      };
    
      async componentDidMount() {
        const { id } = this.props.match.params;
        try {
          await http.deleteApi(`/cars/${id}`);
          this.setState({ deleted: true });
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      
        this.props.history.push("/cars");
    }
    render (){
        return null;
    }


}
export default CarsDlt;
