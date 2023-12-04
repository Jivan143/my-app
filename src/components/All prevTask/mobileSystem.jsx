// MobileSystem.js
import React, { Component } from "react";
import Mobile from "./mobile";

class MobileSystem extends Component {
  state = {
    mobiles: [
        { name: "Redmi 6", avail:"(Upto 64GB)", feature: "Duel Rear Cam|3000mAh", price: 7499, issued:false },
        { name: "Realme 3", avail:"(Upto 4GB)", feature: "Duel Rear Cam|4230mAh", price: 8999, issued:false },
        { name: "Honor 7S", avail:"(2GB|16GB)", feature: "Face Unlock|3020mAh", price: 5499, issued:false },
        { name: "Samsung J6", avail:"(4GB|64GB)", feature: "14.22cm HD|Face Unlock", price: 9490, issued:false },
        { name: "Moto One", avail:"(4GB|64GB)", feature: "Extra 2000 off on Exchange", price: 13999, issued:false },
        { name: "Nokia 6.1", avail:"(3GB|32GB)", feature: "Full HD Display|SD 630", price: 6999, issued:false },
    ],
    cart: [],
  };


  handleAddToCart = (mobile) => {
    const { cart } = this.state;
    const existingItemIndex = cart.findIndex((item) => item.name === mobile.name);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      this.setState({ cart: updatedCart });
    } else {
      mobile.quantity = 1;
      this.setState({ cart: [...cart, mobile] });
    }
  };

  handleRemoveFromCart = (mobile) => {
    const { cart } = this.state;

    const updatedCart = cart.filter((item) => item.name !== mobile.name);

    this.setState({ cart: updatedCart });
  };

  getTotalQuantity = () => {
    const { cart } = this.state;
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  getTotalValue = () => {
    const { cart } = this.state;
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  render() {
    const { mobiles, cart } = this.state;
    let qty = cart.length > 0 ? "Number of items in cart: " + this.getTotalQuantity() : "Cart is Empty";
     let tot = cart.length > 0 ? "Total Valuess in cart: " +this.getTotalValue(): "";

    return (
      <div>
        <div className="container p-3">
          <h3 className="text-center">Exciting Deals on Mobile</h3>
          <div className="row ">
            {mobiles.map((mobile) => (
              <Mobile
                mobile={mobile}
                onAddToCart={() => this.handleAddToCart(mobile)}
              />
            ))}
          </div>
          <h4 className="m-2">Cart</h4>
          <ul>
            {cart.map((cartMobile) => (
              <li  className="border   m-1 p-1">
                {cartMobile.name}   quantity:{cartMobile.quantity} 
                <button className="btn btn-secondary" onClick={() => this.handleRemoveFromCart(cartMobile)}>
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <h5>{qty}</h5>
        <h5>{tot}</h5>
        </div>
      </div>
    );
  }
}

export default MobileSystem;
