import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  render() {
    const {id}=this.props.match.params
    const {products}=this.props;
    let product=products.find((ele)=>ele.id===id);



    return (
      <div className="col-4  bg-success">
        <div className="  m-2 p-2 ">
          <p>Product Id: {id}</p>
          <p>Brand:<Link to={`/brand/${product.brand}`}>{product.brand}</Link></p>
          <p>Category: <Link to={`/catagory/${product.catagory}`}>{product.catagory}</Link></p>
          <p>Name: {product.product}</p>
          
        </div>
      </div>
    );
  }
}

export default Product;
