import React, {Component} from "react";
import { Link } from "react-router-dom";
class Employee extends Component{


    render(){
         const {emps}=this.props;
         const {dept}=this.props.match.params;
         const {page}=this.props.match.params;
         let deptss=dept!=="all"?dept:"all";
         let pageNum = +page;
    let size = 3;
    let emps1 = [...emps];
    emps1 = dept === "all" ? emps : emps.filter((ele) => ele.dept === dept);
    let totalEmployees = emps1.length;
    let totalPages = Math.ceil(totalEmployees / size);

    let listofdept = ["Technology", "Operations", "Finance", "HR", "Marketing"];
    let startIndex = (pageNum - 1) * size;
    let endIndex = Math.min(startIndex + size, totalEmployees);
    let emps2 = emps1.slice(startIndex, endIndex);
    let count1 = pageNum;

        
        return <div className="container">
            <h4>List of Employees {dept}</h4>
            <h6>Showing page Number  {parseInt( count1)} to {totalPages}</h6>
            {emps2.map((ele)=>(
                <div className="row border" key={ele.id}>
                    <div className="col-2 border"><Link to={`/emp/${ele.id}`}>{ele.id}</Link></div>
                    <div className="col-4 border">{ele.name}</div>
                    <div className="col-3 border">{Array.isArray(ele.dept)? ele.dept.join(", "): ele.dept}</div>
                    <div className="col-3 border">{Array.isArray(ele.designation)? ele.designation.join(", "): ele.designation}</div>

                </div>
            ))}
    
            <div className="row">
            <div className="col-8"></div>
            <div className="col-2">
            {Array.from({ length: totalPages }, (_, i) => (
           <Link key={i} to={`/employee/${deptss}/${i+1 }`}className={parseInt(page) === i+1  ? "text-danger" : ""}
              >{i + 1}</Link>
            ))}
            </div>

            </div>


            <div className="container">
                <h5>List of departments</h5>
            {listofdept.map((ele)=>(
                <div className="row" key={ele}><Link to={`/employee/${ele}/1`}>{ele}</Link></div>
            ))}
            </div>
        </div>
    }
}
export default Employee;