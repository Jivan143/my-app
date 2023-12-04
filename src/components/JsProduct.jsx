import React, {Component} from "react";
import http from "./httpService";
class JsProduct extends Component{
    state={
        product:{},
    };

    async componentDidMount() {
        let { id }= this.props.match.params;
        let resposne =await http.get(`/productApp/products/${id}`);
        let {data}=resposne;
        this.setState({
            product:data
        })

    }


    
    render (){
        const {product}=this.state;

        return (
            <div className="container">
              <h6>Product Id: {product.id}  </h6>
              <h6>Name: {product.name}   </h6>
              <h6>Price: {product.price} </h6>
            </div>
        )
    }
}
export default JsProduct;