import React, { Component } from "react";

class Mobile extends Component {
  render() {
    const { mobile, onAddToCart, onRemoveFromCart } = this.props;
    const { name, feature, price, issued } = mobile;

    return (
      <div className="col-3 border text-center bg-success  p-2 m-2  ">
        <h3>{name}</h3>
        <p>{feature}</p>
        <p>Price: {price}</p>
        {issued ? (
          <button className="btn btn-danger" onClick={onRemoveFromCart}>
            Remove from Cart
          </button>
        ) : (
          <button className="btn btn-light" onClick={onAddToCart}>
            Just {price}
          </button>
        )}
      </div>
    );
  }
}

export default Mobile;
