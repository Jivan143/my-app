import React,{Component} from "react";
class Js2 extends Component{
    state = {products: [{ name: "Liril", quantity: 10, sales: 7, price: 10},
    { name: "Dove", quantity: 20, sales: 9, price: 20},
    { name: "Pears", quantity: 35, sales: 20, price: 15},
    { name: "Surf", quantity: 45, sales: 22, price: 55},
    { name: "Ariel", quantity: 20, sales: 7, price: 40},
    { name: "Tide", quantity: 20, sales: 11, price: 35 },
    { name: "Nirma", quantity: 30, sales: 21, price: 20 }],

    displays:'',

};
sort = (column) => {
    const { products } = this.state;
    let sortedProducts = [...products];

    sortedProducts.sort((a, b) => {
      if (column === "Name(desc)") {
        return b.name.localeCompare(a.name);
    } else if (column === "Stock") {
        return a.quantity - b.quantity;
      } else if (column === "Sales") {
        return a.sales - b.sales;
      } else if (column === "Price(desc)") {
        return b.price - a.price;
      }
      return 0;
    });

    this.setState({
      products: sortedProducts,
      displays: "Sorted by " + column,
    });
  };
  
show =()=>{
    let {products,displays}=this.state;
    return(
        
        <div className="container p-2">
        <div className="row"><h3>Sale is less then 20 : {displays}</h3></div>
        <div className="row col-8 bg-dark text-white">
          <div className="col-6 border" onClick={() => this.sort("Name(desc)")}>  Name</div>
          <div className="col-2 border" onClick={() => this.sort("Stock")}> Stock </div>
          <div className="col-2 border" onClick={() => this.sort("Sales")}> Sales</div>
          <div className="col-2 border" onClick={() => this.sort("Price(desc)")}> Price</div>
        </div>
        {products.map((ele) => {
            const { name, quantity, sales,price } = ele;
            if(sales<20 )
            return (
              <div className="row col-8  ">
                <div className="col-6 border bg-light">{name}</div>
                <div className="col-2 border">{quantity}</div>
                <div className="col-2 border">{sales}</div>
                <div className="col-2 border">{price}</div>
              </div>
            );
          })}
          </div>
    )
}





render(){
    return(
        <React.Fragment>
            {this.show()}
        </React.Fragment>
    )
}
}
export default Js2;