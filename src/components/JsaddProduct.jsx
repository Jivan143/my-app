import React, {Component} from "react";
import http from "./httpService";
class JsAddProduct extends Component{
    state ={
        product:{ id:"",name:"",price:""}
    };
    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.product[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.postData("/productApp/products",this.state.product)
    };

    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/products");
    }

    render (){
        const {id,name,price}=this.state.product;


        return (
            <div className="container">
            <div className="form-group">
                <label>Product Id</label>
                <input type="text" className="form-control" id="id" name="id" placeholder="Enter Product Id"
                value={id} onChange={this.handleChange}    />
            </div>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter Product Name"
                value={name} onChange={this.handleChange}    />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" id="price" name="price" placeholder="Enter Product price"
                value={price} onChange={this.handleChange}    />
            </div>

            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}
export default JsAddProduct;