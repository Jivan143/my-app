import React, {Component} from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService";
import OptionsCB1 from "./optionsCB";
class JsPersons extends Component{

    state={
        data:{},
        cities:["London","Paris","New Delhi","Bangalore"],
        companies:["Apple","Google","Facebook","Microsoft","Tesla"],
        ages :[25,30,35,40,45,50],
      
    };

    async fetchData(){
        let queryParams=queryString.parse(this.props.location.search);
        let searchStr=this.makeSearchString(queryParams);

        let response=await http.get(`/persons?${searchStr}`);
        console.log(response);
    let {data}=response; 
  
    this.setState({
        data:data,
    })

    }
     componentDidMount (){
        this.fetchData();
        
    }

    componentDidUpdate(prevProps,prevState){
        if (prevProps !==this.props)  this.fetchData();
    }

    handlePage=(v1)=>{
        let queryParams=queryString.parse(this.props.location.search);
        let { page= "1"}=queryParams;
        let newPage= +page + v1;
        queryParams.page=newPage;
        this.callURL("/persons",queryParams);
    }
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString,
        });
    };
    makeSearchString=(options)=>{
        let {page,city,company,minAge}=options;
        let searchStr = "";
        searchStr = this.addToQueryString(searchStr,"page",page);
        searchStr = this.addToQueryString(searchStr,"city",city);
        searchStr = this.addToQueryString(searchStr,"company",company);
        searchStr = this.addToQueryString(searchStr,"minAge",minAge);
        return searchStr;
    };
    addToQueryString=(str, paramName, paramValue)=>{
        return paramValue
            ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`)
            : str;
    }
    handleOptionChange=(options)=>{
        options.page="1";
        this.callURL("/persons",options);
    }
    
    render (){
        const {startIndex,endIndex,numOfItems,persons = []}=this.state.data ;
        const {cities,companies,ages}=this.state;
        let quesryParams=queryString.parse(this.props.location.search);
        return (
            <div className=" container">
                <div className="row">
                <div className="col-3">
                    <OptionsCB1  
                    options={quesryParams}
                    cities={cities}
                    companies={companies}
                    ages={ages}
                    onOptionChange={this.handleOptionChange}

                    />
                </div>
                <div className="col-9">
                <h4>List of Persons </h4>
                <h6> Showing {startIndex} to {endIndex} of {numOfItems} </h6>
            
                {persons.map((ele,index)=>(
                    <div  className="row  " key={index}>
                    <div className=" col-2 border"><Link to={`/persons/${ele.id}`}>{ele.id}</Link></div>
                    <div className=" col-3 border">{ele.name}</div>
                    <div className=" col-1 border">{ele.age}</div>
                    <div className=" col-2 border">{ele.city}</div>
                    <div className=" col-2 border">{ele.company}</div>

                    </div>

                ))}
                               

                <div className="row">
                <div className="col-2">{startIndex>1 ?(<button className="btn btn-primary btn-sm" onClick={()=>this.handlePage(-1)}>Prev</button>):("") }</div>
                <div className="col-8"></div>
                <div className="col-2">{endIndex < numOfItems ?(<button className="btn btn-primary btn-sm" onClick={()=>this.handlePage(1)}>Next</button>):("") }</div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default JsPersons;