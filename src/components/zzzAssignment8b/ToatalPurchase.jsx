import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./AssignmentHttpservices";

class TotalPurchases extends Component {
  state = {
    totalPurchases: {},
  };

  async fetchData() {
    const { shopid } = this.props.match.params;
    const { productid } = this.props.match.params;

    console.log("Fetching data...");

    try {
      if (shopid) {
        const response = await http.get(`/totalPurchase/shop/${shopid}`);
        const { data } = response;
        console.log("Data for shop:", data);

        this.setState({
          totalPurchases: data,
        });
      }

      if (productid) {
        const response = await http.get(`/totalPurchase/product/${productid}`);
        const { data } = response;
        console.log("Data for product:", data);

        this.setState({
          totalPurchases: data,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchData();
    }
  }

  render() {
    const { totalPurchases } = this.state;

    return (
      <div className="container  text-dark">
        <div className="row"> 1:{totalPurchases[1]}</div>
        <div className="row"> 2:{totalPurchases[2]}</div>
        <div className="row"> 3:{totalPurchases[3]}</div>
        <div className="row"> 4:{totalPurchases[4]}</div>
        <div className="row"> 5:{totalPurchases[5]}</div>
        <div className="row"> 6:{totalPurchases[6]}</div>
        <div className="row"> 7:{totalPurchases[7]}</div>
        <div className="row"> 8:{totalPurchases[8]}</div>

      
      </div>
    );
  }
}

export default TotalPurchases;
