import React, { Component } from "react";
class Task4 extends Component {
    state = {
        product: [{code: "PRD341",price: 24,targetSales: 10,actualSales: 8},
        {code: "MDT311",price: 50,targetSales: 20,actualSales: 30}]
    }
    targetachieved =(as,st)=>{
       return as>=st?'Yes':'No';
    }
    show = () =>{
        let { product } = this.state;
        return product.map((ele) => (
            <div>
            Product Code:{ele.code}<br />
            Price: {ele.price} <br />
            Sales Target: {ele.targetSales}<br />
            Actual Sales: {ele.actualSales}<br />
            Actual Sales Value: {ele.actualSales*ele.price}<br />
            Target Achieved: {this.targetachieved(ele.actualSales,ele.targetSales)}<br /><br /><br />
            </div>

        ));

    };
    render() {
        return (
            <div>
              {this.show()}
            </div>
          );
      }
}
export default Task4;