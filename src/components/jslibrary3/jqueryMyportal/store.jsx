import React, { Component } from "react";
import { Link } from "react-router-dom";
class Store extends Component {
  render() {
    const {id}=this.props.match.params
    const {data}=this.props;
console.log(id)

    const store = data.find((st) => st.id === id);
console.log(store)
   

    return (
      <div className="container text-center">
      <h4>ID: {store.id}</h4>
      <h4>Location: {store.location}</h4>
      <h4>Email: {store.email}</h4>
      <h4>Mobile Number: {store.mobile}</h4>
    </div>
    );
  }
}

export default Store;

   