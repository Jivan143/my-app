import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./AssignmentHttpservices";

class TotalPurchases extends Component {
  state = {
    totalPurchases: {},
    totalpur:[],
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
          totalpur: data,
        });
      }

      if (productid) {
        const response = await http.get(`/totalPurchase/product/${productid}`);
        const { data } = response;
        console.log("Data for product:", data);

        this.setState({
          totalpur: data,
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
    const { totalPurchases ,totalpur} = this.state;
    // const arrayFromObject = Object.values(totalPurchases);
    const { shopid } = this.props.match.params;
    const { productid } = this.props.match.params;
    let pr=shopid?"Total Purchases by Shop":productid?"Total Purchases by Product":"";

    return (

      <div className="container text-center text-dark">
                <h3>{pr}</h3>
        {totalpur.length>0?(<div>
        <div className="row  bg-info text-light">
        <div className="col-6 border">Id</div>
        <div className="col-6">Total Purchases</div>
        </div>
        {totalpur.map((ele,index)=><div className="row " key={index}>
          <div className="col-6 border">{ele.id}</div>
        <div className="col-6 border">{ele.totalquantity}</div>
          </div>
     
        )}</div>
        ):(
          <div className="h4 text-danger">
            No Purchases
          </div>
        )
        }
      
      </div>
    );
  }
}

export default TotalPurchases;
