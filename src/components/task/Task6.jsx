import React, { Component } from "react";
class Task6 extends Component{
    state = {products: [{ name: "Perk", quantity: 10, sales: 7 },
    { name: "5Star", quantity: 7, sales: 9 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "Coke", quantity: 18, sales: 50 }]};
getrowstyle= (m1,m2) =>(m1>m2?'bg-success':'bg-danger')
calculateTotalQuantity = () => {
    const { products } = this.state;
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  calculateTotalSales = () => {
    const { products } = this.state;
    return products.reduce((total, product) => total + product.sales, 0);
  };

    show = () => {
        const { products } = this.state;
        const sortedProducts = products.sort((p1, p2) => p1.sales - p2.sales);
        

        return (
            <div className="row ">

               <div className="row border bg-dark text-white">
                    <div className="col-4 ">Name</div>
                    <div className="col-4 border">Quantity</div>
                    <div className="col-4 ">Sales</div> 
                </div>
            {products.map((ele) =>{
            let {name ,quantity,sales}=ele;
            return (
                <div className={"row border "+this.getrowstyle(quantity,sales)}>
                    <div className="col-4 ">{name}</div>
                    <div className="col-4 border">{quantity}</div>
                    <div className="col-4 ">{sales}</div> 
                </div>
            );
    })}
          <div className="row border bg-secondary">
          <div className="col-4 ">
          <h4>Total: {this.calculateTotalQuantity()+this.calculateTotalSales()}</h4>
          

            </div> 
            <div className="col-4 border">
            <h5>Sum of Quantity : {this.calculateTotalQuantity()}</h5>
          

            </div>
            <div className="col-4 ">
            <h4>Sum of  Sales: {this.calculateTotalSales()}</h4>
                

            </div>
          </div>
          </div>

        );
      };
    render() {
        return (
          <div className="container pl-2 ">
            <h3>Table View</h3>
            {this.show()}
          </div>
        );
      }
      
}
export default Task6;