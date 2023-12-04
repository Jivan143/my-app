import React,{Component} from "react";
class Task26 extends Component{
  state ={
    stores:[{name:"Pepsi",sales:10},
    {name:"Coke",sales:7},{name:"Maggi",sales:0},
    {name:"Gems",sales:15},{name:"5Star",sales:0}],

    sales:'',
  }



  addmulti =(opt)=>{
 return alert(opt+' Sold')
  }
  return =()=>{

  };

  totalsales=()=>{
    let s1={...this.state};
    s1.sales='Total Sales='; 
    s1.sales+=s1.stores.reduce((acc,curr)=> acc+curr.sales,0 );
    this.setState(s1);
  }
  bestsales =()=>{
    let s1={...this.state};
    s1.sales ='Best Sales='; 
    s1.sales += s1.stores.reduce((acc, curr) => (curr.sales > acc ? curr.sales : acc), s1.stores[0].sales);
    this.setState(s1);
  };

render(){
    let {stores,sales}=this.state;
    return(
        <React.Fragment>
            <button className="btn btn-primary  m-2 sm-2" onClick={() =>this.totalsales()}>Total Sales</button>
            <button className="btn btn-primary m-2 sm-2" onClick={() => this.bestsales()}>Best Seller</button>
            {stores.map((ele) => (
                <li>
            Name :{ele.name}, Sales: {ele.sales}  
            <button className="btn btn-primary  m-2 sm-2" onClick={() =>this.addmulti(ele.name)}>Sell</button>
            {ele.sales > 0 && (
                <button className="btn btn-danger m-2 sm-2" onClick={() => this.return()}>Return</button>
              )}
           </li>
            ))}
            <strong>{sales}</strong>

             < br />
            



    </React.Fragment>
    );
}
}
export default Task26;
