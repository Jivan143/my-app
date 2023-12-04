import React, {Component} from "react";
import { Link } from "react-router-dom";
class Offices extends Component{


    render(){
        const {offices}=this.props;

        return <div className="container">
            <h6>List of Offices</h6>
            {offices.map((ele,index)=>(
                <div className="row border bg-light" key={index}>
                    <div className="col-4 border"> <Link to={`/location/${ele.city}`}>{ele.city}</Link></div>
                    <div className="col-8 border">{ele.address}</div>

                </div>

            ))

            }
        </div>
    }
}
export default Offices;