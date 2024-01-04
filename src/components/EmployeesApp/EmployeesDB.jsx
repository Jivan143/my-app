import React,{Component} from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";
import OptionsCBDB from "./optioncbDB";
import http from"./Httpserviceemp";
class EmployeeeDB extends Component{

    state={
        employess:[],
        departments:["Finance", "HR", "Technology", "Marketing", "Operations"],
        designations:["VP","Manager","Trainee"],
        genders:["Male","Female"],
        department:'',
        designation:'',
        gender:'',
    }
    
    async fetchData() {
        let { id }= this.props.match.params;
        let queryParams = queryString.parse(this.props.location.search);
        let searchStr = this.makeSearchString(queryParams);
        console.log("abc",searchStr);
        let {department,designation,gender}=this.state;
        console.log("empl",id);
        let resposne =await http.get(`/svr/employess?${searchStr}`);
        let {data}=resposne;
        console.log("empl",data);

        this.setState({
            employess:data,
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
        let {  department,designation,gender} = options;
        let searchStr = "";
        // searchStr = this.addToQueryString(searchStr, "page", page);
        searchStr = this.addToQueryString(searchStr, "department", department);
        searchStr = this.addToQueryString(searchStr, "designation",designation );
        searchStr = this.addToQueryString(searchStr, "gender", gender);
        // searchStr = this.addToQueryString(searchStr, "payment", payment);
        return searchStr;
      };
    
      addToQueryString = (str, paramName, paramValue) => {
        return paramValue ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`) : str;
      };
      handleOptionChange = (options) => {
          console.log("cittts",options)
          this.setState({ department: options.department,designation:options.designation,
            gender:options.gender });
          this.callURL("/employees", options);
        };
        

    render(){
        const {employess,departments,designations,genders,designation,gender}=this.state;
        let quesryParams=queryString.parse(this.props.location.search);
      


        return (<div className="container ">
            <div className="row">
            <div className="col-3">
                <OptionsCBDB  
                    options={quesryParams}
                    onOptionChange={this.handleOptionChange}
                    departments={departments}
                    designations={designations}
                    genders={genders}
                    />
                    </div>
                <div className="col-9">
            <div className="row border bg-info text-light">
            <div className="col-1">ID</div>
            <div className="col-2">Name</div>
            <div className="col-2">Department</div>
            <div className="col-2">Designation</div>
            <div className="col-1">Gen.</div>
            <div className="col-2">Salary</div>
            <div className="col-2"></div>
            </div>
            {employess.map((ele,index)=>(
                <div className="row border" key={index}>
            <div className="col-1">{ele.empCode}</div>
            <div className="col-2">{ele.name}</div>
            <div className="col-2">{ele.department}</div>
            <div className="col-2">{ele.designation}</div>
            <div className="col-1">{ele.gender}</div>
            <div className="col-2">{ele.salary}</div>

          <div className="col-2">
            <Link to={`/employees/${ele.empCode}/edit`} className="  btn btn-warning btn-sm ">Edit</Link>
         <Link to={`/employees/${ele.empCode}/delete`} className=" btn btn-danger btn-sm ">Delete
                    </Link>
                    </div>
                    </div>
            ))}
            </div>
            </div>
        </div>)
    }
}
export default EmployeeeDB;