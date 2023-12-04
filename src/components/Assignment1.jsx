import React, { Component } from "react";

class Assignment1 extends Component {
  state = {
    products: [
      { name: "Pepsi", sales: [2, 5, 8, 10, 5] },
      { name: "Coke", sales: [3, 6, 5, 4, 11, 5] },
      { name: "5Star", sales: [10, 14, 22] },
      { name: "Maggi", sales: [3, 3, 3, 3, 3] },
      { name: "Perk", sales: [1, 2, 1, 2, 1, 2] },
      { name: "Bingo", sales: [0, 1, 0, 3, 2, 6] },
      { name: "Gems", sales: [3, 3, 1, 1] },
    ],
    sortedProducts: [],
    sorts: "Product Table",
    detailsProduct: null,
  };

  componentDidMount() {
    this.setState({ sortedProducts: [...this.state.products] });
  }

  sort = (column) => {
    const { sortedProducts } = this.state;

    sortedProducts.sort((a, b) => {
      if (column === "Product") {
        // @ts-ignore
        return a.name.localeCompare(b.name);
      } else if (column === "Total Sales Asc") {
        // @ts-ignore
        return a.sales.reduce((acc, curr) => acc + curr) - b.sales.reduce((acc, curr) => acc + curr);
      } else if (column === "Total Sales Desc") {
        // @ts-ignore
        return b.sales.reduce((acc, curr) => acc + curr) - a.sales.reduce((acc, curr) => acc + curr);
      }
      return 0;
    });

    this.setState({
      sortedProducts,
      sorts: "Sorted by " + column,
      detailsProduct: null, 
    });
  };

  showDetails = (product) => {
    this.setState({ detailsProduct: product });
  };

  render() {
    const { sortedProducts, sorts, detailsProduct } = this.state;

    return (
      <div className="container">
        <h5>{sorts}</h5>
        <div className="col-8 m-2">
          <button className="btn btn-primary m-2 sm-2" onClick={() => this.sort("Product")}>Sort by Product</button>
          <button className="btn btn-primary m-2 sm-2" onClick={() => this.sort("Total Sales Asc")}>Total Sales Asc</button>
          <button className="btn btn-primary m-2 sm-2" onClick={() => this.sort("Total Sales Desc")}>Total Sales Desc</button>
        </div>
        <div className="row col-8  bg-dark text-white">
          <div className="col border">  Product</div>
          <div className="col border"> Total Sales </div>
          <div className="col border">Details</div>
        </div>
        {sortedProducts.map((ele) => {
          const { name, sales } = ele;
          return (
            <div key={name} className="row col-8 border bg-light">
              <div className="col border">{name}</div>
              <div className="col border">{sales.reduce((acc, curr) => acc + curr)}</div>
              <div className="col border">
                <button className="btn btn-info" onClick={() => this.showDetails(ele)}>Details</button>
              </div>
            </div>
          );
        })}
        {detailsProduct && (
          <div>
            <h4>{detailsProduct.
// @ts-ignore
            name} Details:</h4>
            <ul >
              {detailsProduct.
// @ts-ignore
              sales.map((sale, index) => (
                <li    key={index}>Store {index + 1}: {sale}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Assignment1;
