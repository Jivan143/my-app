import React, {Component} from "react";
import { Link } from "react-router-dom";
import http from "./httpService";
class JsProducts extends Component{

    state={
        products:[],
    }
    async componentDidMount (){
        let response=await http.get("/productApp/products");
    let {data}=response; 
  
    this.setState({
        products:data,
    })
    }

    render (){
        const {products}=this.state;

        return (
            <div className=" container">
                <h4>Welcome to the Products Page</h4>
                {products.map((ele,index)=>(
                    <div  className="row " key={index}>
                    <div className=" col-2 border">
                        <Link to={`Jsproducts/${ele.id}`}>{ele.id}</Link>
                    </div>
                    <div className=" col-2 border">{ele.name}</div>
                    <div className=" col-2 border">{ele.price}</div>

                    </div>

                ))}
            </div>
        )
    }
}
export default JsProducts;