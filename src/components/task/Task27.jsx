import React, { Component } from "react";

class Task27 extends Component {
  state = {
    products: [
      { name: "Perk", price: 10, sales: 7 },
      { name: "5Star", price: 15, sales: 9 },
      { name: "Pepsi", price: 20, sales: 20 },
      { name: "Maggi", price: 12, sales: 15 },
      { name: "Coke", price: 20, sales: 50 },
      { name: "Lindt", price: 80, sales: 4 }
    ],
    products2: [],
    sorts: "Not Sorted"
  };

  componentDidMount() {
    this.setState({ products2: [...this.state.products] });
  }

  sort = (column) => {
    const { products } = this.state;
    let sortedProducts = [...products];

    sortedProducts.sort((a, b) => {
      if (column === "Name") {
        return a.name.localeCompare(b.name);
      } else if (column === "Price") {
        return a.price - b.price;
      } else if (column === "Sales") {
        return a.sales - b.sales;
      } else if (column === "Value") {
        return a.sales * a.price - b.sales * b.price;
      }
      return 0;
    });

    this.setState({
      products: sortedProducts,
      sorts: "Sorted by " + column,
      sortBy: column
    });
  };

  filterby = (opt) => {
    const { products2 } = this.state;
    let filteredProducts = [...products2];

    if (opt === "Price>=15") {
      filteredProducts = filteredProducts.filter((product) => product.price >= 15);
    } else if (opt === "Sales>=10") {
      filteredProducts = filteredProducts.filter((product) => product.sales >= 10);
    } else if (opt === "Value>=100") {
      filteredProducts = filteredProducts.filter(
        (product) => product.sales * product.price >= 100
      );
    }

    this.setState({
      products: filteredProducts,
      sorts: "Filter: " + opt,
      sortBy: null
    });
  };

  showtable = () => {
    const { products, sorts } = this.state;
    const buttons = ["Price>=15", "Sales>=10", "Value>=100"];

    return (
      <div>
        <h6>{sorts}</h6>
        <div className="col-8 m-2">
          {buttons.map((ele) => {
            return (
              <button className="btn btn-primary m-2 sm-2"onClick={() => this.filterby(ele)}>{ele}</button>
            );
          })}
        </div>
        <div className="row col-8 bg-dark text-white">
          <div className="col border" onClick={() => this.sort("Name")}>  Name</div>
          <div className="col border" onClick={() => this.sort("Price")}> Price </div>
          <div className="col border" onClick={() => this.sort("Sales")}>  Sales</div>
          <div className="col border" onClick={() => this.sort("Value")}>Value</div>
        </div>
        {products.map((ele) => {
          const { name, price, sales } = ele;
          return (
            <div className="row col-8 border bg-light">
              <div className="col border">{name}</div>
              <div className="col border">{price}</div>
              <div className="col border">{sales}</div>
              <div className="col border">{sales * price}</div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.showtable()}
      </React.Fragment>
    );
  }
}

export default Task27;
