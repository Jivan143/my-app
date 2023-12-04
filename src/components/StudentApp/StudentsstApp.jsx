import React, {Component} from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "../httpService";
class StudentsApp extends Component{

    state={
        data:[],
        cities:["London","Paris","New Delhi","Bangalore"],
        companies:["Apple","Google","Facebook","Microsoft","Tesla"],
        ages :[25,30,35,40,45,50],
      
    };

    async fetchData(){
        // let queryParams=queryString.parse(this.props.location.search);
        // let searchStr=this.makeSearchString(queryParams);
        let { course }= this.props.match.params;
        let url=`/svr/students`;
     if (course){
         url +=`/course/${course}`;
    }

        let response=await http.get(url);
    
    let {data}=response; 
    console.log(data);

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

    // handlePage=(v1)=>{
    //     let queryParams=queryString.parse(this.props.location.search);
    //     let { page= "1"}=queryParams;
    //     let newPage= +page + v1;
    //     queryParams.page=newPage;
    //     this.callURL("/persons",queryParams);
    // }
    // callURL=(url,options)=>{
    //     let searchString=this.makeSearchString(options);
    //     this.props.history.push({
    //         pathname:url,
    //         search:searchString,
    //     });
    // };
    // makeSearchString=(options)=>{
    //     let {page,city,company,minAge}=options;
    //     let searchStr = "";
    //     searchStr = this.addToQueryString(searchStr,"page",page);
    //     searchStr = this.addToQueryString(searchStr,"city",city);
    //     searchStr = this.addToQueryString(searchStr,"company",company);
    //     searchStr = this.addToQueryString(searchStr,"minAge",minAge);
    //     return searchStr;
    // };
    // addToQueryString=(str, paramName, paramValue)=>{
    //     return paramValue
    //         ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`)
    //         : str;
    // }
    // handleOptionChange=(options)=>{
    //     options.page="1";
    //     this.callURL("/persons",options);
    // }
    
    render (){
        const {data}=this.state ;
      
        return (
            <div className=" container">
                <h4>Welcome to the Students Page</h4>
                 <div className="row">
   
                {data.map((ele,index)=>(
                    <div  className="row  " key={index}>
                    <div className=" col-1 border"><Link to={`/student/${ele.id}`}>{ele.id}</Link></div>
                    <div className=" col-2 border">{ele.name}</div>
                    <div className=" col-2 border">{ele.course}</div>
                    <div className=" col-1 border">{ele.grade}</div>
                    <div className=" col-2 border">{ele.city}</div>
                    <div className="col-2 border">
                    <Link to={`/students/${ele.id}/edit`}>
                        <button className="btn btn-warning btn-sm ">Edit</button>
                    </Link>
                   </div>

                    <div className="col-2 border">
                    <Link to={`/students/${ele.id}/delete`}>
                        <button className="btn btn-danger btn-sm text-light">Delete</button>
                    </Link>
                    </div>


                    </div>

                ))}
                               

                </div>
            </div>
        )
    }
}
export default StudentsApp;