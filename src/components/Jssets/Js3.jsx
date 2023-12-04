import React, {Component} from "react";
class Js3 extends Component{
    state = {items: [{ name: "Liril", stock: 10, sales: 7, price: 10 },{ name: "Dove", stock: 20, sales: 9, price: 20 },{ name: "Pears", stock: 35, sales:20, price: 15 },{ name: "Surf", stock: 45, sales: 22, price: 55 },{ name: "Ariel", stock: 20, sales: 8, price: 40 },{ name: "Tide", stock: 20, sales: 11, price: 35 },{ name: "Nirma", stock: 30, sales: 21, price: 20 }],

    shopOpen: true,
};
totalstockbyquantity=()=>{
    const { items } = this.state;
    return items.reduce((acc, curr) => acc + curr.stock, 0);
  };

totalStockByValue = () => {
    const { items } = this.state;
    return items.reduce((acc, curr) => acc + curr.stock * curr.price, 0);
  };

  totalSalesByQuantity = () => {
    const { items } = this.state;
    return items.reduce((acc, curr) => acc + curr.sales, 0);
  };

  totalSalesByValue = () => {
    const { items } = this.state;
    return items.reduce((acc, curr) => acc + curr.sales * curr.price, 0);
  };

  findMaxSellerByQuantity = () => {
    const { items } = this.state;

    const maxSeller = items.reduce((max, item) => {
      if (item.sales > max.sales) {
        return item;
      }
      return max;
    });

    return maxSeller ? (
      <div>
        <p>Name: {maxSeller.name}</p>
        <p>Quantity: {maxSeller.sales }</p>
      </div>
    ) : "";  };
  findMaxSellerByValue = () => {
    const { items } = this.state;

    const maxSeller = items.reduce((max, item) => {
      if (item.sales * item.price > max.sales * max.price) {
        return item;
      }
      return max;
    });

    return maxSeller ? (
      <div>
        <p>Name: {maxSeller.name}</p>
        <p>Quantity: {maxSeller.sales * maxSeller.price}</p>
      </div>
    ) : "";  };

  findMinSellerByQuantity = () => {
    const { items } = this.state;

    const minSeller = items.reduce((min, item) => {
      if (item.sales < min.sales) {
        return item;
      }
      return min;
    });

    return minSeller ? (
      <div>
        <p>Name: {minSeller.name}</p>
        <p>Quantity: {minSeller.sales }</p>
      </div>
    ) : "";  };

  findMinSellerByValue = () => {
    const { items } = this.state;

    const minSeller = items.reduce((min, item) => {
      if (item.sales * item.price < min.sales * min.price) {
        return item;
      }
      return min;
    });

    return minSeller ? (
      <div>
        <p>Name: {minSeller.name}</p>
        <p>Quantity: {minSeller.sales * minSeller.price}</p>
      </div>
    ) : "";
      };

  handleCloseShop = () => {
    this.setState({ shopOpen: false });
  };
  handleOpenShop = () => {
    this.setState({ shopOpen: true });
  };
show =()=>{
    let {items,shopOpen}=this.state;
    const maxSellerByQuantity = this.findMaxSellerByQuantity();
    const maxSellerByValue = this.findMaxSellerByValue();
    const minSellerByQuantity = this.findMinSellerByQuantity();
    const minSellerByValue = this.findMinSellerByValue();
    if(shopOpen==true)
    return(
        
        <div className="container p-2">
        <div className="row text-center"><h3>Daily Sales Report for XYZ Enterprises</h3></div>
        <div className="row  bg-dark text-white">
          <div className="col-2 border" >  Name</div>
          <div className="col-2 border" > Stock </div>
          <div className="col-2 border" > Sales</div>
          <div className="col-2 border" > Stock Left</div>
          <div className="col-2 border" > Price</div>
          <div className="col-2 border" > Sales Value</div>
        </div>
        {items.map((ele) => {
            const { name, stock, sales,price } = ele;
            return (
              <div className="row ">
                <div className="col-2 border bg-light">{name}</div>
                <div className="col-2 border">{stock}</div>
                <div className="col-2 border">{sales}</div>
                <div className="col-2 border">{stock-sales}</div>
                <div className="col-2 border">{price}</div>
                <div className="col-2 border">{price*sales}</div>
              </div>
            );
          })}
          <div className="row bg-light">
          <div className="col-3 border">
             <p>Max Seller by Quantity:</p>
             <p>{maxSellerByQuantity}</p>
            </div>
            <div className="col-3 border">
             <p>Max Seller by Value</p>
             <p>{maxSellerByValue}</p>

            </div>
            <div className="col-3 border">
             <p>Min Seller by Quantity</p>
             <p>{minSellerByQuantity}</p>
            </div>
            <div className="col-3 border">
             <p>Min Seller by Value</p>
             <p>{minSellerByValue}</p>
             
            </div>
          </div>
<div className="row text-center border">
<p>Number of Products : {items.length}</p>
            <p>Total Stock by Quantity: {this.totalstockbyquantity()}</p>
            <p>Total Stock by Value: {this.totalStockByValue()}</p>
            <p>Total Sales by Quantity: {this.totalSalesByQuantity()}</p>
            <p>Total Sales by Value: {this.totalSalesByValue()}</p>
</div>
<div className="row text-center border"><div className="col pl-2">
<button className="btn btn-primary btn-sm" onClick={this.handleCloseShop}>Close the Shop for the Day</button>
</div></div>
          </div>
    )
    else 
    return (
      <div className="container text-center p-5">
    <button className="btn btn-success btn-sm" onClick={this.handleOpenShop}>Open the Shop for the Day</button>
    </div>)
}

render(){
    return <React.Fragment>
        {this.show()}
    </React.Fragment>
}
}
export default Js3;