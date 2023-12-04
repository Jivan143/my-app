import React, {Component} from "react";
class Js1 extends Component{
    state = {products : [{ name: "Liril", quantity: 10, sales: 7, price: 10},
    { name: "Dove", quantity: 20, sales: 9, price: 20},
    { name: "Pears", quantity: 35, sales: 20, price: 15},
    { name: "Surf", quantity: 45, sales: 22, price: 55},
    { name: "Ariel", quantity: 20, sales: 7, price: 40},
    { name: "Tide", quantity: 20, sales: 11, price: 35 },
    { name: "Nirma", quantity: 30, sales: 21, price: 20 }]};

showlist =()=>{
    let{ products }=this.state;
    const sortedasc=[...products];
    sortedasc.sort((p1,p2)=> p1.sales-p2.sales);
    const sorteddesc=[...products];
    sorteddesc.sort((p1,p2)=>p2.sales-p1.sales);
    const sortbyprice=[...products];
    sortbyprice.sort((p1,p2)=>p1.price-p2.price);
    const sortedbyname=[...products];
    sortedbyname.sort((p1,p2)=>p1.name.localeCompare(p2.name));
    
    return (
        <ul>
        {products.map((ele)=>{
        let {name ,quantity,sales,price}=ele;
        return (<li>
        {name}, stock={quantity}, sales={sales}, price={price};
        </li>
        );    
        })}
        </ul>
    ) 
};
showlistname =()=>{
    let{ products }=this.state;
    return (
        <ul>
        {products.map((ele)=>{
        let {name ,quantity,sales}=ele;
       
        return (<li>
        {name} had a sale of {sales}, its ramainine stock is {quantity-sales};
        </li>
        );    
        })}
        </ul>
    ) 

}


render() {
    return (
      <div className="container pl-2">
        <div className="row -"><h4>Product with Text </h4></div>
      {this.showlistname()}
      </div>
    );
  }

}
export default Js1;