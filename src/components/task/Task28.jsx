import React, { Component } from "react";

class Task28 extends Component {
  state = {
    priceData: [{ name: "Perk", category:"Food", oldPrice: 10, newPrice: 10 },
    { name: "5Star", category:"Food", oldPrice: 15, newPrice: 12 },{
         name: "Pepsi", category:"Drink", oldPrice: 20, newPrice: 22 },
         { name: "Maggi", category:"Food", oldPrice: 12, newPrice: 15 },
         { name: "Coke", category:"Drink", oldPrice: 20, newPrice: 20 },
         { name: "Gems", category:"Food", oldPrice: 10, newPrice: 10 },
         { name: "7Up", category:"Drink", oldPrice: 15, newPrice: 17 },
         { name: "Lindt", category:"Food", oldPrice: 80, newPrice: 90 },
         { name: "Nutties", category:"Food", oldPrice: 20, newPrice: 18 },
         { name: "Slice", category:"Drink", oldPrice: 18, newPrice: 16 }],

    
    priceData2: [],
    sorts: "Not Sorted"
  };
  componentDidMount() {
    this.setState({
        priceData2: [...this.state.priceData]
    });
  }

  sort = (column) => {
    const { priceData } = this.state;
    let sortedProducts = [...priceData];

    sortedProducts.sort((a, b) => {
      if (column === "Name") {
        return a.name.localeCompare(b.name);
      } else if (column === "Category") {
        return a.category.localeCompare(b.category);
      } else if (column === "Old Price") {
        return a.oldPrice - b.oldPrice;
      } else if (column === "New Price") {
        return a.newPrice - b.oldPrice;
      }
      return 0;
    });

    this.setState({
      priceData: sortedProducts,
      sorts: "Sorted by " + column,
      sortBy: column
    });
  };

  filterby = (opt) => {
    const { priceData2 } = this.state;
  
    let filteredProducts = [...priceData2];
  
    if (opt === "Food") {
      filteredProducts = filteredProducts.filter((product) => product.category === 'Food');
    } else if (opt === "Drink") {
      filteredProducts = filteredProducts.filter((product) => product.category === 'Drink');
    } else if (opt === "Increase") {
      filteredProducts = filteredProducts.filter((product) => product.oldPrice < product.newPrice);
    } else if (opt === "Decrease") {
      filteredProducts = filteredProducts.filter((product) => product.oldPrice > product.newPrice);
    } else if (opt === "Same") {
      filteredProducts = filteredProducts.filter((product) => product.oldPrice === product.newPrice);
    }
  
    this.setState({
      priceData: filteredProducts,
      sorts: (opt=='Food' ||opt=='Drink')?'Category:'+opt :'Price '+opt,
    });
  };
  
  showtable = () => {
    const { priceData, sorts } = this.state;
    const buttons = ["Food", "Drink", "Increase","Decrease","Same"];

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
          <div className="col border" onClick={() => this.sort("Category")}> Category </div>
          <div className="col border" onClick={() => this.sort("Old Price")}>  Old Price</div>
          <div className="col border" onClick={() => this.sort("New Price")}>New Price</div>
        </div>
        {priceData.map((ele) => {
          const { name, category, oldPrice,newPrice } = ele;
          return (
            <div className="row col-8 border bg-light">
              <div className="col border">{name}</div>
              <div className="col border">{category}</div>
              <div className="col border">{oldPrice}</div>
              <div className="col border">{newPrice}</div>
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

export default Task28;
