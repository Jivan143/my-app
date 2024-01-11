import React,{Component} from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";
import http from"./AssignmentHttpservices";
class AssignmentProducts extends Component{

    state={
        products:[],
       
    }
    async fetchData() {
        let { id }= this.props.match.params;
        let queryParams = queryString.parse(this.props.location.search);

        let resposne =await http.get(`/products`);
        let {data}=resposne;
        console.log("empl",data);

        this.setState({
            products:data,
        })
    }
    componentDidMount() {
        this.fetchData();
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) this.fetchData();
      }      

    render(){
        const {products}=this.state;
        let quesryParams=queryString.parse(this.props.location.search);
      


        return (<div className="container">
            <div className="row m-0 border bg-info text-light">
            <div className="col-1 border">ProdId</div>
            <div className="col-2 border">Product Name</div>
            <div className="col-2 border">Category</div>
            <div className="col-2 border">Description</div>
            <div className="col-2 border"></div>
            <div className="col-2 border"></div>
            <div className="col-1"></div>
            </div>
            {products.map((ele,index)=>(
                <div className="row  m-0 border" key={index}>
            <div className="col-1 border">{ele.productid}</div>
            <div className="col-2 border">{ele.productname}</div>
            <div className="col-2 border">{ele.category}</div>
            <div className="col-2 border">{ele.description}</div>
            <div className="col-2 border">
            <Link to={`/purchases/products/${ele.productid}`} className="  btn btn-success btn-sm ">Purchases</Link>
            </div>
            <div className="col-2 border">
            <Link to={`/totalPurchase/product/${ele.productid}`} className="  btn btn-warning btn-sm ">Total Purchases.</Link>
                    </div>
            <div className="col-1 border">
            <Link to={`/products/${ele.productid}/edit`} className="  btn btn-success btn-sm ">Edit</Link>
                    </div>
                    </div>
            ))}
        </div>)
    }
}
export default AssignmentProducts;