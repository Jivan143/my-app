import React, { Component } from "react";

class ProductTable extends Component {
  render() {
    const { products, onIncrease, onDecrease } = this.props;

    return (
      <div className="container">
       <div className="row bg-dark text-light">
       <div className="col-3">Name</div>
       <div className="col-2">Code</div>
       <div className="col-2">Price</div>
       <div className="col-2">Quantity</div>
       <div className="col-3"></div>
       </div>


          {products.map((pr) => (

           <div className="row border">
         <div className="col-3 border">{pr.name}</div>
       <div className="col-2 border">{pr.id}</div>
       <div className="col-2 border">{pr.price}</div>
       <div className="col-2 border">{pr.quantity}</div>
       <div className="col-3 border">
       <div className="row"><div className="col-3 ">
        <button className="btn btn-success" onClick={() => onIncrease(pr)}>+</button>
        </div><div className="col-2">
        <button className="btn btn-danger" onClick={() => onDecrease(pr)} disabled={pr.quantity === 0}>-</button>
        </div>
        </div>
        </div>
       </div>
      
          ))}
      </div>
    );
  }
}

export default ProductTable;
