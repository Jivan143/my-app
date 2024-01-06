import React,{Component} from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";
import http from"./AssignmentHttpservices";
class AssignmentShops extends Component{

    state={
        shops:[],
    }
    
    async fetchData() {
        let { id }= this.props.match.params;
        let queryParams = queryString.parse(this.props.location.search);

        console.log("empl",id);
        let resposne =await http.get(`/shops`);
        let {data}=resposne;
        console.log("empl",data);

        this.setState({
            shops:data,
        })
    }
    componentDidMount() {
        this.fetchData();
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) this.fetchData();
      }


    render(){
        const {shops}=this.state;
        let quesryParams=queryString.parse(this.props.location.search);
      


        return (<div className="container ">
            <div className="row m-0 border bg-info text-light">
            <div className="col-2 border">shopid</div>
            <div className="col-2 border">Shop Name</div>
            <div className="col-2 border">Rent</div>
            <div className="col-2 border"></div>
            <div className="col-2 border"></div>
            </div>
            {shops.map((ele,index)=>(
                <div className="row m-0 border" key={index}>
            <div className="col-2 border">{ele.shopid}</div>
            <div className="col-2 border">{ele.name}</div>
            <div className="col-2 border">{ele.rent}</div>
            <div className="col-2 border">
            <Link to={`/purchases/shops/${ele.shopid}`} className="  btn btn-success btn-sm ">Purchases</Link>
            </div>
            <div className="col-2 border">
            <Link to={`/totalPurchase/shop/${ele.shopid}`} className="  btn btn-warning btn-sm ">Total Purchases.</Link>
            </div>
            <div className="col-1 border">
            <Link to={`/shops/${ele.shopid}/edit`} className="  btn btn-success btn-sm ">Edit</Link>
                    </div>    
                    </div>
            ))}
        </div>)
    }
}
export default AssignmentShops;