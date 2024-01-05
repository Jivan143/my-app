import React,{Component} from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";
import http from"./mobilehttpservive";
import LeftpaneDB from "./leftDBpanel";
class MobileTable extends Component{

    state={
        mobiles:[],
        rams:["3GB", "4GB", "6GB", "8GB"],
        roms:["32GB","64GB","128GB","256GB"],
        oss:["Android","iOS"],
        brands:["Samsung", "Xiaomi", "Realme", "Apple"],
        ram:'',
        rom:'',
        os:'',
        brand:'',
        sort:'',
    }
    
    async fetchData() {
        let { id }= this.props.match.params;
        let queryParams = queryString.parse(this.props.location.search);
        let searchStr = this.makeSearchString(queryParams);
        console.log("abc",searchStr);
        let {ram,rom,os,sort}=this.state;
        searchStr = this.addToQueryString(searchStr, "sort", sort);

        console.log("empl",id);
        let resposne =await http.get(`/svr/mobiles?${searchStr}`);
        let {data}=resposne;
        console.log("empl",data);

        this.setState({
            mobiles:data,
        })
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
        let {  ram,rom,brand,os,sort} = options;
        let searchStr = "";
        // searchStr = this.addToQueryString(searchStr, "page", page);
        searchStr = this.addToQueryString(searchStr, "ram", ram);
        searchStr = this.addToQueryString(searchStr, "rom",rom );
        searchStr = this.addToQueryString(searchStr, "brand", brand);
        searchStr = this.addToQueryString(searchStr, "os", os);
        searchStr = this.addToQueryString(searchStr, "sort", sort);

        // searchStr = this.addToQueryString(searchStr, "payment", payment);
        return searchStr;
      };
    
      addToQueryString = (str, paramName, paramValue) => {
        return paramValue ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`) : str;
      };
      handleOptionChange = (options) => {
          console.log("cittts",options)
          this.setState({ ram: options.ram,rom:options.rom,
            os:options.os });
          this.callURL("/mobiles", options);
        };
        

    render(){
        const {mobiles,rams,roms,oss,rom,os,brands}=this.state;
        let quesryParams=queryString.parse(this.props.location.search);
      


        return (<div className="container ">
            <div className="row">
            <div className="col-3">
                <LeftpaneDB  
                    options={quesryParams}
                    onOptionChange={this.handleOptionChange}
                    rams={rams}
                    roms={roms}
                    brands={brands}
                    />
                    </div>
                <div className="col-9">
            <div className="row border bg-info text-light">
            <div className="col-1 border" onClick={this.handlesort("id")}>ID</div>
            <div className="col-2 border"onClick={this.handlesort("name")}>Name</div>
            <div className="col-2 border"onClick={this.handlesort("price")}>Price</div>
            <div className="col-2 border"onClick={this.handlesort("brand")}>Brand</div>
            <div className="col-1 border"onClick={this.handlesort("ram")}>Ram</div>
            <div className="col-1 border"onClick={this.handlesort("rom")}>Rom</div>
            <div className="col-1 border"onClick={this.handlesort("os")}>OS</div>
            <div className="col-2"></div>
            </div>
            {mobiles.map((ele,index)=>(
                <div className="row border" key={index}>
            <div className="col-1 border">{ele.id}</div>
            <div className="col-2 border">{ele.name}</div>
            <div className="col-2 border">{ele.price}</div>
            <div className="col-2 border">{ele.brand}</div>
            <div className="col-1 border">{ele.ram}</div>
            <div className="col-1 border">{ele.rom}</div>
            <div className="col-1 border">{ele.os}</div>
            <div className="col-2 border">
            <Link to={`/mobiles/${ele.id}/edit`} className="  btn btn-success btn-sm ">Edit</Link>
         <Link to={`/mobiles/${ele.id}/delete`} className=" btn btn-danger btn-sm ">Delete
                    </Link>
                    </div>
                    </div>
            ))}
            </div>
            </div>
        </div>)
    }
}
export default MobileTable;