import React, {Component} from "react";
import { Link } from "react-router-dom";
class MainPersonTable extends Component{
    state={
        department:"",
        designation:"",
        currentPage: 1,
   

    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.location !== prevProps.match.params.location) {
            this.setState({
                department:"",
                designation:"", 
                currentPage: 1,


            });
        }
    }
    handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "department") {
            if (checked) {
                this.setState((prevState) => ({
                    department: [...prevState.department, value],
                    currentPage: 1,
                }));
            } else {
                this.setState((prevState) => ({
                    department: prevState.department.filter((course) => course !== value),
                    currentPage: 1,
                }));
            }
        } else if (name === "") {
            this.setState({
                designation: checked ? value : "",
                currentPage: 1,
            });
        } else {
            this.setState({
                [name]: value,
                currentPage: 1,
            });
        }
    };
    handleNextPage = (totalPages) => {
        if (this.state.currentPage <totalPages ) {
            this.setState((prevState) => ({
                currentPage: prevState.currentPage + 1,
            }));
        }
    };

    handlePrevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState((prevState) => ({
                currentPage: prevState.currentPage - 1,
            }));
        }
    };


    render(){
        const {Persons}=this.props;
        const {department,designation,currentPage}=this.state;
        let {location}=this.props.match.params;
        let location1=location==="All"?"":location;



        let depts=Persons.map((ele)=>ele.department);
        let uniquedepts = depts.filter((ele, index) => depts.indexOf(ele) === index);

        let desig=Persons.map((ele)=>ele.designation);
        let uniquedesig = desig.filter((ele, index) => desig.indexOf(ele) === index);

        const filteredData = Persons.filter((ele) => {
            if (department.length===0  && designation==="" && location==="All") {
                return true;
            }
            return (
                (department.includes(ele.department)||department.length===0)&&
                (designation===""||ele.designation===designation)&&
                (location1==="" || ele.location===location1)
            );
        });
        const pageSize = 2; 
        const totalPages = Math.ceil(filteredData.length );
    
        const startIndex = (currentPage - 1) * 1;
        const endIndex = startIndex + pageSize;
        const pagedData = filteredData.slice(startIndex, endIndex);

        return (
        <div className="container">
        <div className="row">
        <div className="col-3">
        <div className="row">
            <h5>Designation</h5>
            {uniquedesig.map((ele,index)=>(
                <div key={index}>

                 <input type="radio"id={ele}name="designation"value={ele}checked={designation.includes(ele)}
            onChange={this.handleChange} /> 
           <label htmlFor={`${ele}`}> {ele}</label>
           </div>
            ))}
         </div>
        <div className="row">
            <h5>Department</h5>
            {uniquedepts.map((ele,index)=>(
                <div key={index}>
                 <input type="checkbox"id={ele}name="department"value={ele}checked={department.includes(ele)}
            onChange={this.handleChange} /> 

           <label htmlFor={`${ele}`}> {ele}</label>
           </div>
            ))}
        </div>
    

        </div>
        <div className="col-8">
            <h2 className="text-center">Welcome to Employee Portal</h2>
            <div className="h5">You Have  Chosen </div>
            <div className="row">Location: {location}</div>
            <div className="row">Department: {department===""?"All":     Array.isArray(department)? department.join(", "): department}</div>
            <div className="row">Designation: {designation===""?"All":designation }</div>
            <div className="row">The Number of employees matching the options:<div className="col h6">{filteredData.length}</div></div>

        {pagedData.length!==0?(<div>
            <div className="row border">
             {pagedData.map((ele)=>(
                <div className="col-6 border  ">
                    <div className="h4 ">{ele.name}</div>
                    <div className="h6 ">{ele.department}</div>
                    <div className="h6 ">{ele.designation}</div>
                    <div className="h6 ">{ele.salary}</div>
                    <div className="h6 ">{ele.email}</div>
                    <div className="h6 ">{ele.mobile}</div>
                    <div className="h6 ">{ele.location}</div>
                </div>
             ))}</div>
               <div className="row m-2">
            <div className="col-10 ">

            {currentPage===1?"":
                <button className="btn btn-primary btn-sm" onClick={this.handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button> }
                    </div>

                <div className="col-2">
                {currentPage===totalPages?"":
                <button className="btn btn-primary btn-sm" onClick={()=>this.handleNextPage(totalPages)} disabled={currentPage === totalPages}>
                    Next
                </button>  }
                </div>
            </div>
            </div>
            

             ):(
             <div className="row m-3">
                <h5 className="text-info"></h5>
             </div>)
}
        </div>


        </div>
        </div>
    )
    }
}
export default MainPersonTable;