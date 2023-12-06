import React,{Component} from "react";
import http from"../httpService";
import {Link} from "react-router-dom";
import queryString from "query-string";
import OptionsCBCar from "./optionCbCar";
class Carss extends Component{

    state={
        cars:[],
        fuels:["Diesel","Petrol"],
        types:["Hatchback","Sedan"],
        sortbys:["kms","price","year"],
    }
    
    async fetchData() {
        let { id }= this.props.match.params;
        let queryParams = queryString.parse(this.props.location.search);
        let searchStr = this.makeSearchString(queryParams);
        console.log("abc",searchStr);

        console.log("car",id);
        let resposne =await http.get(`/cars?${searchStr}`);
        let {data}=resposne;
        console.log("cars",data);

        this.setState({
            cars:data
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
        let {  fuel,type ,sort,minprice,maxprice} = options;
        let searchStr = "";
        searchStr = this.addToQueryString(searchStr, "minprice", minprice);
        searchStr = this.addToQueryString(searchStr, "maxprice", maxprice);
        searchStr = this.addToQueryString(searchStr, "fuel", fuel);
        searchStr = this.addToQueryString(searchStr, "type", type);
        searchStr = this.addToQueryString(searchStr, "sort", sort);
        return searchStr;
      };
    
      addToQueryString = (str, paramName, paramValue) => {
        return paramValue ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`) : str;
      };
      handleOptionChange = (options) => {
          console.log("cittts",options)
          this.callURL("/cars", options);
        };
        
        handleChange=(e)=>{
            const {currentTarget:input}=e;
            let quesryParams=queryString.parse(this.props.location.search);

            let options={...quesryParams};
           options[input.name]=input.value;
        this.handleOptionChange(options);
        };
    
    render(){
        const {cars,fuels,types,sortbys,minprice,maxprice}=this.state;
        let quesryParams=queryString.parse(this.props.location.search);

        return (<div className="container ">
            <div className="row">
                <div className="col-2">
                <OptionsCBCar  
                    options={quesryParams}
                    onOptionChange={this.handleOptionChange}
                    fuels={fuels}
                    types={types}
                    sortbys={sortbys}
                    />
                </div>
                <div className="col-10">
           
          <div className="row">
            <div className="row m-1 ">
            <div className="col-4">Price Range:</div>
            <div className="col-3 ">
            <input type="number" className="form-control" id="minprice" name="minprice" placeholder="Enter  Minprice"
                value={minprice} onChange={this.handleChange}    />
            </div>
            <div className="col-3 ">
            <input type="number" className="form-control" id="maxprice" name="maxprice" placeholder="Enter  Maxprice"
                value={maxprice} onChange={this.handleChange}    />
            </div>
            </div>
            {cars.map((ele,index)=>(
                <div className="col-3 border text-center bg-warning" key={index}>
            <p className=" h3">{ele.model}</p>
            <p className="">Price:{ele.price}</p>
            <p className="">Color:{ele.color}</p>
            <p className="">Mileage:{ele.kms} Kms</p>
            <p className="">Manufactured in {ele.year}</p>
          <div className="row">
          <div className="col">  <Link to={`/cars/${ele.id}/edit`} className="fa fa-edit"></Link></div>
          <div className="col"> <Link to={`/cars/${ele.id}/delete`} className="fa fa-trash">
                    </Link></div>
                    </div>
                    </div>
            ))}
            </div>
            </div>
            </div>
        </div>)
    }
}
export default Carss;