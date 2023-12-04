import React, { Component } from "react";
import LeftStoreRadioForm from "./leftstoreradioform";
class A16Task8 extends Component {
  state = {
    products: [
      { id: "PEP110", name: "Pepsi", category: "Food", stock: "yes" },
      { id: "CLO876", name: "CloseUp", category: "Toothpaste", stock: "no" },
      { id: "PEA531", name: "Pears", category: "Soap", stock: "arriving" },
      { id: "LU7264", name: "Lux", category: "Soap", stock: "yes" },
      { id: "COL112", name: "Colgate", category: "Toothpaste", stock: "no" },
      { id: "DM881", name: "Dairy Milk", category: "Food", stock: "arriving" },
      { id: "LI130", name: "Liril", category: "Soap", stock: "yes" },
      { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: "no" },
      { id: "MAG441", name: "Maggi", category: "Food", stock: "arriving" },
      { id: "PNT560", name: "Pantene", category: "Shampoo", stock: "no" },
      { id: "KK219", name: "KitKat", category: "Food", stock: "arriving" },
      { id: "DOV044", name: "Dove", category: "Soap", stock: "yes" },
    ],
    optionsArray: {
      name: ["Pepsi", "CloseUp", "Pears", "Lux", "Colgate", "Dairy Milk", "Liril", "Pepsodent", "Maggi"],
      category: ["Food", "Toothpaste", "Soap", "Shampoo"],
      stock: ["yes", "no", "arriving"],
    },
    optionsSel: {
      category: [],
      stock: [],
    },
  };

  showstore = () => {
    const { products, optionsSel } = this.state;
    const { category, stock } = optionsSel;
    let p1 = (stock.length <1) ? "All" : stock;
    let filteredProducts = [];

    if (category.length > 0) {
      filteredProducts = products.filter((p) => category.includes(p.category));
    }

    if (stock.length > 0) {
      filteredProducts = filteredProducts.filter((p) => stock.includes(p.stock));
    }


    return (
      <div className="container border">
        <h6 className="row">Selected Products:</h6>
        <h6 className="row">Stock Status :{p1}</h6>
        {filteredProducts.length > 0 ? (
          <div className="row border bg-dark text-light">
            <div className="col-3 border">Id</div>
            <div className="col-3 border">Name</div>
            <div className="col-3 border">Category</div>
            <div className="col-3 border">Stock</div>
          </div>
        ) : null}
        {filteredProducts.map((p) => (
          <div className="row border bg-light" key={p.id}>
            <div className="col-3 border">{p.id}</div>
            <div className="col-3 border">{p.name}</div>
            <div className="col-3 border">{p.category}</div>
            <div className="col-3 border">{p.stock.toString()}</div>
          </div>
        ))}
      </div>
    );
  };

  handleChangeOption = (optionsSel) => {
    this.setState({ optionsSel });
  };

  render() {
    const { optionsArray, optionsSel } = this.state;
    return (
      <div className="container border">
        <div className="row">
          <div className="col-3 border bg-light">
            <LeftStoreRadioForm
              optionsSel={optionsSel}
              optionsArray={optionsArray}
              onChangeOption={this.handleChangeOption}
            />
          </div>
          <div className="col-9">{this.showstore()}</div>
        </div>
      </div>
    );
  }
}

export default A16Task8;
