import React, { Component } from "react";

class Counter extends Component {
 

 

  render() {
    const {counter,ondelete,onIncrement } = this.props;
    const {alphabet,count,id}=counter;
    return (
      <h5>
        Counter {alphabet} Count = {count} 
        <button className="btn btn-primary btn-sm m-2" onClick={() => onIncrement(id)}> Increment</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => ondelete(id)}> Delete</button>
      </h5>
    );
  }
}

export default Counter;
