import React,{Component} from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";
import http from"./AssignmentHttpservices";
import AssignmetleftPanel from "./Assignmentleftpanel";
class AssignmentPurchases extends Component{

    state={
        purchases:[],
        sorts:["QtyAsc","QtyDesc","ValueAsc","ValueDesc"],
        sort:'',
    }
    
    async fetchData() {
        let { shopid }= this.props.match.params;
        let { productid }= this.props.match.params;
        let queryParams = queryString.parse(this.props.location.search);
        let searchStr = this.makeSearchString(queryParams);
        console.log("abc",searchStr);
        let {ram,rom,os,sort}=this.state;
        searchStr = this.addToQueryString(searchStr, "sort", sort);

        console.log("emplid",shopid);
        if(shopid){
            let resposne =await http.get(`/purchases/shops/${shopid}`);
            let {data}=resposne;
            console.log("empl22",data);
    
            this.setState({
                purchases:data,
            })
        }
        else if(productid){
            let resposne =await http.get(`/purchases/products/${productid}`);
            let {data}=resposne;
            console.log("empl33",data);
    
            this.setState({
                purchases:data,
            })
        }
        else{
        let resposne =await http.get(`/purchases?${searchStr}`);
        let {data}=resposne;
        console.log("empl",data);

        this.setState({
            purchases:data,
        })
    }
}
    componentDidMount() {
        this.fetchData();
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) this.fetchData();
      }
    callURL = (url, options) => {
        let searchString = this.makeSearchString(options);
        this.props.history.push({
          pathname: url,
          search: searchString,
        });
      };
      handlesort = (sort) => () => {
        const { sort: currentSortBy } = this.state;
        const newSortBy = currentSortBy === sort ? "" : sort;
        this.setState({ sort: newSortBy }, () => this.fetchData());
      };
      
    
      makeSearchString = (options) => {
        let {shop,product,sort} = options;
        let searchStr = "";
        searchStr = this.addToQueryString(searchStr, "shop", shop);
        searchStr = this.addToQueryString(searchStr, "product", product);
        searchStr = this.addToQueryString(searchStr, "sort", sort);
        return searchStr;
      };
    
      addToQueryString = (str, paramName, paramValue) => {
        return paramValue ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`) : str;
      };
      handleOptionChange = (options) => {
          console.log("cittts",options)
          this.callURL("/purchases", options);
        };
        

    render(){
        const {purchases,sorts}=this.state;
        let quesryParams=queryString.parse(this.props.location.search);
      


        return (<div className="container ">
            <div className="row">
            <div className="col-3">
                <AssignmetleftPanel  
                    options={quesryParams}
                    onOptionChange={this.handleOptionChange}
                    sorts={sorts}
                    />
                    </div>
                <div className="col-9">
            <div className="row border bg-info text-light">
            <div className="col-2 border" >purchaseid</div>
            <div className="col-2 border">shopid</div>
            <div className="col-2 border">productid</div>
            <div className="col-2 border">Quantity</div>
            <div className="col-2 border">Price</div>
            <div className="col-2 border"></div>
            </div>
            {purchases.map((ele,index)=>(
                <div className="row border" key={index}>
            <div className="col-2 border">{ele.purchaseid}</div>
            <div className="col-2 border">{ele.shopid}</div>
            <div className="col-2 border">{ele.productid}</div>
            <div className="col-2 border">{ele.quantity}</div>
            <div className="col-2 border">{ele.price}</div>
            <div className="col-2 border">
            <Link to={`/purchases/${ele.purchaseid}/edit`} className="  btn btn-success btn-sm ">Edit</Link>
                    </div>           
                    </div>
            ))}
            </div>
            </div>
        </div>)
    }
}
export default AssignmentPurchases;