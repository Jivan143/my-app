import React,{ Component} from "react";
import { Link } from "react-router-dom";
class MainJobTable extends Component{
    state={
        newcourse:"",
        courseDone:"",
        currentStatus:"",
        currentPage: 1,
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.courseName !== prevProps.match.params.courseName) {
            this.setState({
                courseDone: "",
                currentStatus: "",
            });
        }
    }

    handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "courseDone") {
            if (checked) {
                this.setState((prevState) => ({
                    courseDone: [...prevState.courseDone, value],
                    currentPage: 1,
                }));
            } else {
                this.setState((prevState) => ({
                    courseDone: prevState.courseDone.filter((course) => course !== value),
                    currentPage: 1,
                }));
            }
        } else if (name === "currentStatus") {
            this.setState({
                currentStatus: checked ? value : "",
                currentPage: 1,
            });
        } else {
            this.setState({
                [name]: value,
                currentPage: 1,
            });
        }
    };

    
    handleNextPage = () => {
        if (this.state.currentPage < 10) {
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





    render (){
        let {data}=this.props;
        let {courseName}=this.props.match.params;
        let {no}=this.props.match.params;
        let {newcourse,courseDone,currentStatus,currentPage,abc}=this.state;
        let techs1=courseName==="All"?"":courseName;



        let coursed=data.map((ele)=>ele.course);
        let uniquecoursed = coursed.filter((ele, index) => coursed.indexOf(ele) === index);

        let statusd=data.map((ele)=>ele.status);
        let uniquestatusd = statusd.filter((ele, index) => statusd.indexOf(ele) === index);

        const filteredData = data.filter((ele) => {
            if (courseDone.length === 0 && courseName==="All" && currentStatus==="") {
                return true;
            }
            console.log(courseDone)
            return (
                (courseDone.includes(ele.course)||courseDone.length===0)&&
                (currentStatus === "" || ele.status === currentStatus)&&
                (techs1 === "" || ele.tech === techs1)
            );
        });
        const pageSize = 4; 
    const totalPages = Math.ceil(filteredData.length / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pagedData = filteredData.slice(startIndex, endIndex);

        return (
            <div className="container">
            <div className="row">
              
                <div className="col-3">
                    <div className="row">
                    <h5>Course Done</h5>
                    {uniquecoursed.map((ele) => (
            <div key={ele}>
                <input type="checkbox"id={ele}name="courseDone"value={ele}checked={courseDone.includes(ele)}
                onChange={this.handleChange} />
               <label htmlFor={`dept-${ele}`}>{ele}</label>
            </div>
                   ))}
            </div>

             <div className="row">
                    <h5>Current Status</h5>
                    {uniquestatusd.map((ele) => (
            <div key={ele}>
               <input type="radio"id={ele} name="currentStatus"value={ele} checked={currentStatus.includes(ele)}
                onChange={this.handleChange}/>
             <label htmlFor={`dept-${ele}`}>{ele}</label>
            </div>
          ))}
            </div>

             </div>

                <div className="col-8">
                <h4>Job Details</h4>
                <div className="row">Role: {courseName}</div>
                <div className="row">Course Done:{Array.isArray(courseDone)? courseDone.join(", "): courseDone}</div>
                <div className="row">Current Status:{currentStatus}</div>
                <div className="row">Page Number:{currentPage}</div>


                 {pagedData.length!==0?(<div>
                 {pagedData.map((ele)=>(
                    <div className="row border ">
                        <div className="col ">{ele.name}</div>
                        <div className="col ">{ele.course}</div>
                        <div className="col ">{ele.year}</div>
                        <div className="col ">{ele.status}</div>
                        <div className="col ">{ele.tech}</div>
                    </div>
                 ))}</div>
                 ):(
                 <div className="row m-3">
                    <h5 className="text-info">No Filterd Data</h5>
                 </div>)

    }
                </div>

            </div>
            <div className="row m-2">
            <div className="col-3"></div>
            <div className="col-7 ">

            {currentPage===1?"":
                <button className="btn btn-primary btn-sm" onClick={this.handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button> }
                    </div>

                <div className="col-2">
                {currentPage===totalPages?"":
                <button className="btn btn-primary btn-sm" onClick={this.handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>  }
                </div>
            </div>

            </div>
        )
    }
}
export default MainJobTable;