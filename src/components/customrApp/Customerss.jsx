import React,{Component} from "react";
import http from"../httpService";
import {Link} from "react-router-dom";
import queryString from "query-string";
import OptionsCBcust from "./OptionsCbcust";
class Customerss extends Component{

    state={
        customers:[],
        cities:["Delhi", "Noida", "Gurgaon", "Jaipur"],
        genders:["Male","Female"],
        payments:["Credit Card","Debit Card","Wallet"],
        sortbys:["city","age","payment"],
        selectedCity:[],
    }
    
    async fetchData() {
        let { id }= this.props.match.params;
        let queryParams = queryString.parse(this.props.location.search);
        let searchStr = this.makeSearchString(queryParams);
        console.log("abc",searchStr);

        console.log("customer",id);
        let resposne =await http.get(`/customers?${searchStr}`);
        let {data}=resposne;
        console.log("customers",data);

        this.setState({
            customers:data
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
    
      makeSearchString = (options) => {
        let {  city,gender ,sort,payment} = options;
        let searchStr = "";
        // searchStr = this.addToQueryString(searchStr, "page", page);
        searchStr = this.addToQueryString(searchStr, "city", city);
        searchStr = this.addToQueryString(searchStr, "gender", gender);
        searchStr = this.addToQueryString(searchStr, "sort", sort);
        searchStr = this.addToQueryString(searchStr, "payment", payment);
        return searchStr;
      };
    
      addToQueryString = (str, paramName, paramValue) => {
        return paramValue ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`) : str;
      };
      handleOptionChange = (options) => {
          console.log("cittts",options)
          this.setState({ selectedCity: options.city });
          this.callURL("/customers", options);
        };
        

    render(){
        const {customers,cities,genders,payments,sortbys}=this.state;
        let quesryParams=queryString.parse(this.props.location.search);

        return (<div className="container ">
            <div className="row">
                <div className="col-3">
                <OptionsCBcust  
                    options={quesryParams}
                    onOptionChange={this.handleOptionChange}
                    cities={cities}
                    genders={genders}
                    sortbys={sortbys}
                    payments={payments}
                    />
                </div>
                <div className="col-9">
            <div className="row border bg-info text-light">
            <div className="col-2">ID</div>
            <div className="col-2">Name</div>
            <div className="col-2">City</div>
            <div className="col-1">Age</div>
            <div className="col-1">Gen.</div>
            <div className="col-2">Payment</div>
            <div className="col-2"></div>
            </div>
            {customers.map((ele,index)=>(
                <div className="row border" key={index}>
            <div className="col-2">{ele.id}</div>
            <div className="col-2">{ele.name}</div>
            <div className="col-2">{ele.city}</div>
            <div className="col-1">{ele.age}</div>
            <div className="col-1">{ele.gender}</div>
            <div className="col-2">{ele.payment}</div>
          <div className="col-2">
            <Link to={`/customers/${ele.id}/edit`} className="  btn btn-warning btn-sm ">Edit</Link>
         <Link to={`/customers/${ele.id}/delete`} className=" btn btn-danger btn-sm ">Delete
                    </Link>
                    </div>
                    </div>
            ))}
            </div>
            </div>
        </div>)
    }
}
export default Customerss;